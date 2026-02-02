#!/usr/bin/env python3
"""
video_gen.py — Generate a David Letterman-style 2-person talk video
               about the Rust Programming Language.

Outputs: talk.mp4  (120 seconds, 1920x1080, 24 fps)

Speakers:
    TinTin (Host) — enthusiastic, curious interviewer
    Professor Calculus (Guest) — knowledgeable, slightly eccentric expert

Dependencies (install with pip):
    pip install edge-tts moviepy Pillow numpy

Usage:
    python video_gen.py
"""

import asyncio
import os
import sys
import textwrap
import tempfile
from pathlib import Path

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
OUTPUT_FILE = "talk.mp4"
VIDEO_WIDTH, VIDEO_HEIGHT = 1920, 1080
FPS = 24
TARGET_DURATION = 120  # seconds

# Microsoft Edge TTS voices — two distinct male voices
HOST_VOICE = "en-US-GuyNeural"        # TinTin (host) — youthful, energetic
GUEST_VOICE = "en-US-AndrewNeural"    # Professor Calculus (guest) — professorial

# Colours (RGB)
BG_COLOR = (12, 12, 35)
HOST_COLOR = (52, 152, 219)      # blue — host
GUEST_COLOR = (231, 76, 60)      # rust-orange — guest (Rust themed!)
TEXT_COLOR = (236, 240, 241)
SUBTITLE_BG = (0, 0, 0)
TITLE_COLOR = (231, 76, 60)      # Rust orange
DIVIDER_COLOR = (50, 50, 80)
BANNER_COLOR = (20, 20, 50)
CODE_BG = (30, 30, 50)
CODE_KEYWORD = (198, 120, 221)   # purple for keywords
CODE_STRING = (152, 195, 121)    # green for strings
CODE_COMMENT = (92, 99, 112)     # grey for comments
CODE_TYPE = (229, 192, 123)      # yellow for types
CODE_FN = (97, 175, 239)         # blue for function names
CODE_TEXT = (220, 220, 220)      # white for general code

# ---------------------------------------------------------------------------
# Dialogue script — David Letterman style (~120 s when spoken)
# Each entry: (speaker, line, optional_code_snippet)
# When code is present, the frame shows it prominently.
# ---------------------------------------------------------------------------
SCRIPT = [
    ("host",
     "Welcome to the show! I'm TinTin, and tonight Professor Calculus is here to talk about the Rust programming language. Professor, welcome!",
     None),

    ("guest",
     "Thank you TinTin! Though this studio equipment should really be rewritten in Rust — for safety reasons!",
     None),

    ("host",
     "Ha! So Professor, what exactly is Rust and why is everyone excited about it?",
     None),

    ("guest",
     "Rust is a systems programming language from Mozilla. Its big promise is memory safety without a garbage collector. As fast as C, but it catches memory bugs at compile time!",
     None),

    ("host",
     "No garbage collector? How does it manage memory?",
     None),

    ("guest",
     "Through ownership! Every value has exactly one owner. When the owner leaves scope, memory is freed. Look — when you assign s1 to s2, s1 is moved and becomes invalid!",
     "fn main() {\n"
     "    let s1 = String::from(\"hello\");\n"
     "    let s2 = s1;  // s1 is MOVED\n"
     "    // println!(\"{}\", s1); // ERROR!\n"
     "    println!(\"{}\", s2);   // OK!\n"
     "}"),

    ("host",
     "That prevents double-free errors! But what if you just want to peek at data?",
     None),

    ("guest",
     "That's borrowing! Use an ampersand to borrow a reference. The owner keeps the data, the function just borrows it temporarily.",
     "fn length(s: &String) -> usize {\n"
     "    s.len()  // borrows, doesn't own\n"
     "}\n"
     "\n"
     "fn main() {\n"
     "    let s1 = String::from(\"hello\");\n"
     "    let n = length(&s1);\n"
     "    println!(\"'{}': {} chars\", s1, n);\n"
     "}"),

    ("host",
     "And s1 stays valid. What about null pointers — the billion dollar mistake?",
     None),

    ("guest",
     "Rust has no null! It uses the Option type. Values are either Some with data, or None. The compiler forces you to handle both!",
     "fn find(id: u32) -> Option<String> {\n"
     "    if id == 1 {\n"
     "        Some(String::from(\"TinTin\"))\n"
     "    } else {\n"
     "        None\n"
     "    }\n"
     "}\n"
     "\n"
     "match find(1) {\n"
     "    Some(name) => println!(\"{}\", name),\n"
     "    None => println!(\"Not found\"),\n"
     "}"),

    ("host",
     "No null pointer exceptions! And concurrency?",
     None),

    ("guest",
     "Fearless concurrency! The ownership system prevents data races. Here's a thread sending data through a channel — all safe at compile time!",
     "use std::thread;\n"
     "use std::sync::mpsc;\n"
     "\n"
     "fn main() {\n"
     "    let (tx, rx) = mpsc::channel();\n"
     "    thread::spawn(move || {\n"
     "        tx.send(\"hello!\").unwrap();\n"
     "    });\n"
     "    println!(\"{}\", rx.recv().unwrap());\n"
     "}"),

    ("host",
     "Who's using Rust in production?",
     None),

    ("guest",
     "Microsoft, Amazon, Google, Discord, and the Linux kernel all use Rust. It's the most loved language on Stack Overflow for years running!",
     None),

    ("host",
     "From ownership to borrowing to fearless concurrency — Rust is the future! Ladies and gentlemen — Professor Calculus!",
     None),

    ("guest",
     "Thank you TinTin! Remember — if the compiler yells at you, it's because it loves you. Happy Rusting!",
     None),
]


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

async def generate_tts(text: str, voice: str, outpath: str, retries: int = 3) -> str:
    """Generate an MP3 audio file using edge-tts with timeout and retry."""
    import edge_tts
    for attempt in range(retries):
        try:
            communicate = edge_tts.Communicate(text, voice)
            await asyncio.wait_for(communicate.save(outpath), timeout=30)
            return outpath
        except asyncio.TimeoutError:
            print(f"    Timeout on attempt {attempt+1}/{retries}, retrying...")
            await asyncio.sleep(1)
        except Exception as e:
            print(f"    Error on attempt {attempt+1}/{retries}: {e}, retrying...")
            await asyncio.sleep(1)
    # Last resort: try with fallback voice
    print(f"    Falling back to en-US-ChristopherNeural...")
    communicate = edge_tts.Communicate(text, "en-US-ChristopherNeural")
    await asyncio.wait_for(communicate.save(outpath), timeout=30)
    return outpath


def _load_font(size):
    """Try to load a nice font; fall back to default."""
    from PIL import ImageFont
    for name in [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSText.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/TTF/DejaVuSans.ttf",
    ]:
        if os.path.exists(name):
            try:
                return ImageFont.truetype(name, size)
            except Exception:
                pass
    return ImageFont.load_default()


def _load_mono_font(size):
    """Try to load a monospace font for code display."""
    from PIL import ImageFont
    for name in [
        "/System/Library/Fonts/SFNSMono.ttf",
        "/System/Library/Fonts/Menlo.ttc",
        "/System/Library/Fonts/Monaco.ttf",
        "/System/Library/Fonts/Courier.ttc",
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
        "/usr/share/fonts/TTF/DejaVuSansMono.ttf",
    ]:
        if os.path.exists(name):
            try:
                return ImageFont.truetype(name, size)
            except Exception:
                pass
    return ImageFont.load_default()


def _draw_top_banner(draw, width):
    """Draw the show title banner at the top."""
    font_title = _load_font(48)
    font_banner = _load_font(20)

    draw.rectangle([(0, 0), (width, 85)], fill=BANNER_COLOR)
    draw.text(
        (width // 2, 42),
        "LATE  NIGHT  WITH  TINTIN",
        fill=TITLE_COLOR,
        font=font_title,
        anchor="mm",
    )
    draw.line([(0, 85), (width, 85)], fill=TITLE_COLOR, width=3)

    draw.rectangle([(0, 87), (width, 120)], fill=(25, 25, 55))
    draw.text(
        (width // 2, 103),
        "TONIGHT:  The Rust Programming Language  —  Memory Safety Without Compromise",
        fill=(180, 180, 200),
        font=font_banner,
        anchor="mm",
    )


def _draw_speakers(draw, speaker, width):
    """Draw the two speaker indicators."""
    font_speaker = _load_font(36)
    font_label = _load_font(26)
    font_role = _load_font(18)

    host_x, guest_x = width // 4, 3 * width // 4
    indicator_y = 220

    # Host circle + label
    h_active = speaker == "host"
    h_fill = HOST_COLOR if h_active else (30, 30, 55)
    h_outline = (255, 255, 255) if h_active else (50, 50, 70)
    draw.ellipse(
        [host_x - 55, indicator_y - 55, host_x + 55, indicator_y + 55],
        fill=h_fill, outline=h_outline, width=4 if h_active else 2,
    )
    draw.text((host_x, indicator_y - 5), "T", fill=(255, 255, 255),
              font=font_speaker, anchor="mm")
    draw.text((host_x, indicator_y + 72), "TinTin",
              fill=TEXT_COLOR if h_active else (80, 80, 100),
              font=font_label, anchor="mt")
    draw.text((host_x, indicator_y + 102), "Host",
              fill=(150, 150, 170) if h_active else (60, 60, 80),
              font=font_role, anchor="mt")

    # Guest circle + label
    g_active = speaker == "guest"
    g_fill = GUEST_COLOR if g_active else (30, 30, 55)
    g_outline = (255, 255, 255) if g_active else (50, 50, 70)
    draw.ellipse(
        [guest_x - 55, indicator_y - 55, guest_x + 55, indicator_y + 55],
        fill=g_fill, outline=g_outline, width=4 if g_active else 2,
    )
    draw.text((guest_x, indicator_y - 5), "C", fill=(255, 255, 255),
              font=font_speaker, anchor="mm")
    draw.text((guest_x, indicator_y + 72), "Prof. Calculus",
              fill=TEXT_COLOR if g_active else (80, 80, 100),
              font=font_label, anchor="mt")
    draw.text((guest_x, indicator_y + 102), "Guest",
              fill=(150, 150, 170) if g_active else (60, 60, 80),
              font=font_role, anchor="mt")

    # Divider
    mid_x = width // 2
    draw.line([(mid_x, indicator_y - 35), (mid_x, indicator_y + 35)],
              fill=DIVIDER_COLOR, width=2)


def _draw_subtitle(draw, speaker, line, width, height, sub_top):
    """Draw the subtitle bar at the bottom."""
    font_text = _load_font(28)
    font_tag = _load_font(20)

    draw.rectangle(
        [(50, sub_top), (width - 50, height - 25)],
        fill=(8, 8, 25), outline=DIVIDER_COLOR, width=1,
    )

    tag_color = HOST_COLOR if speaker == "host" else GUEST_COLOR
    tag_name = "TINTIN" if speaker == "host" else "PROF. CALCULUS"
    tag_w = len(tag_name) * 14 + 24
    draw.rectangle([(70, sub_top + 10), (70 + tag_w, sub_top + 42)],
                   fill=tag_color)
    draw.text((82, sub_top + 14), tag_name, fill=(255, 255, 255),
              font=font_tag)

    wrapper = textwrap.TextWrapper(width=72)
    wrapped_lines = wrapper.wrap(line)
    y_cursor = sub_top + 52
    for wl in wrapped_lines[:5]:  # limit lines
        bbox = draw.textbbox((0, 0), wl, font=font_text)
        tw = bbox[2] - bbox[0]
        draw.text(((width - tw) // 2, y_cursor), wl,
                  fill=TEXT_COLOR, font=font_text)
        y_cursor += bbox[3] - bbox[1] + 6


def _colorize_rust_line(line_text):
    """Return a list of (text_segment, color) for simple Rust syntax coloring."""
    import re
    segments = []
    keywords = {"fn", "let", "mut", "if", "else", "match", "use", "move",
                "pub", "struct", "enum", "impl", "return", "mod", "self",
                "true", "false", "for", "while", "loop", "break", "continue",
                "where", "trait", "type", "const", "static", "ref", "as",
                "in", "extern", "crate", "super", "unsafe", "async", "await",
                "dyn", "macro_rules"}
    types = {"String", "Option", "Some", "None", "Result", "Ok", "Err",
             "Vec", "Box", "u8", "u16", "u32", "u64", "i32", "i64",
             "f32", "f64", "usize", "bool", "str", "Self"}

    # Check for comment
    stripped = line_text.lstrip()
    if stripped.startswith("//"):
        return [(line_text, CODE_COMMENT)]

    # Simple token-based colorizing
    tokens = re.split(r'(\s+|[(){}\[\];,.:&!<>=|+\-*/]+|"[^"]*")', line_text)
    for tok in tokens:
        if not tok:
            continue
        if tok.startswith('"') and tok.endswith('"'):
            segments.append((tok, CODE_STRING))
        elif tok in keywords:
            segments.append((tok, CODE_KEYWORD))
        elif tok in types:
            segments.append((tok, CODE_TYPE))
        else:
            segments.append((tok, CODE_TEXT))
    return segments


def make_speaker_frame(
    speaker: str,
    line: str,
    code: str = None,
    width: int = VIDEO_WIDTH,
    height: int = VIDEO_HEIGHT,
) -> "np.ndarray":
    """Create a video frame. If code is present, show it prominently."""
    from PIL import Image, ImageDraw
    import numpy as np

    img = Image.new("RGB", (width, height), BG_COLOR)
    draw = ImageDraw.Draw(img)

    _draw_top_banner(draw, width)

    if code:
        # --- Code snippet layout ---
        # Small speaker indicators at top-left area
        font_small_label = _load_font(22)
        font_small_role = _load_font(16)

        # Compact speaker indicator on left
        sp_x, sp_y = 100, 160
        sp_fill = GUEST_COLOR  # code is always from the guest
        draw.ellipse([sp_x - 28, sp_y - 28, sp_x + 28, sp_y + 28],
                     fill=sp_fill, outline=(255, 255, 255), width=3)
        draw.text((sp_x, sp_y - 3), "C", fill=(255, 255, 255),
                  font=_load_font(24), anchor="mm")
        draw.text((sp_x + 45, sp_y - 12), "Prof. Calculus",
                  fill=TEXT_COLOR, font=font_small_label)
        draw.text((sp_x + 45, sp_y + 10), "explaining code...",
                  fill=(150, 150, 170), font=font_small_role)

        # Rust logo / label
        draw.rectangle([(width - 250, 140), (width - 60, 180)],
                       fill=GUEST_COLOR)
        draw.text((width - 155, 148), "RUST CODE", fill=(255, 255, 255),
                  font=_load_font(22), anchor="mt")

        # Code box
        code_top = 200
        code_bottom = height - 260
        code_left = 80
        code_right = width - 80
        draw.rectangle(
            [(code_left, code_top), (code_right, code_bottom)],
            fill=CODE_BG, outline=(60, 60, 90), width=2,
        )
        # Title bar for code box
        draw.rectangle(
            [(code_left, code_top), (code_right, code_top + 32)],
            fill=(40, 40, 65),
        )
        draw.text((code_left + 15, code_top + 5), "main.rs",
                  fill=(150, 150, 170), font=_load_font(18))
        # Dots (window chrome)
        for i, c in enumerate([(231, 76, 60), (241, 196, 15), (46, 204, 113)]):
            draw.ellipse([code_right - 70 + i * 22, code_top + 9,
                          code_right - 56 + i * 22, code_top + 23],
                         fill=c)

        # Draw code lines with syntax coloring
        mono_font = _load_mono_font(22)
        code_lines = code.split("\n")
        y_cursor = code_top + 45
        for ln_num, code_line in enumerate(code_lines, 1):
            # Line number
            draw.text((code_left + 15, y_cursor),
                      f"{ln_num:2d}", fill=(80, 80, 110), font=mono_font)
            # Colorized code
            x_cursor = code_left + 55
            segments = _colorize_rust_line(code_line)
            for seg_text, seg_color in segments:
                draw.text((x_cursor, y_cursor), seg_text,
                          fill=seg_color, font=mono_font)
                bbox = draw.textbbox((0, 0), seg_text, font=mono_font)
                x_cursor += bbox[2] - bbox[0]
            y_cursor += 34

        # Subtitle at the very bottom (smaller area)
        _draw_subtitle(draw, speaker, line, width, height, height - 240)

    else:
        # --- Normal talking layout ---
        _draw_speakers(draw, speaker, width)
        _draw_subtitle(draw, speaker, line, width, height, height - 330)

    return np.array(img)


# ---------------------------------------------------------------------------
# Main pipeline
# ---------------------------------------------------------------------------

async def main():
    try:
        import edge_tts
    except ImportError:
        print("ERROR: edge-tts not installed. Run:  pip install edge-tts")
        sys.exit(1)
    try:
        from moviepy import (
            AudioFileClip,
            ImageClip,
            concatenate_videoclips,
        )
    except ImportError:
        print("ERROR: moviepy not installed. Run:  pip install moviepy")
        sys.exit(1)
    try:
        from PIL import Image
    except ImportError:
        print("ERROR: Pillow not installed. Run:  pip install Pillow")
        sys.exit(1)
    try:
        import numpy as np
    except ImportError:
        print("ERROR: numpy not installed. Run:  pip install numpy")
        sys.exit(1)

    work_dir = tempfile.mkdtemp(prefix="letterman_rust_video_")
    print(f"Working directory: {work_dir}")

    # 1. Generate TTS audio for each line
    print("\n[1/4] Generating speech audio...")
    audio_paths = []
    for i, entry in enumerate(SCRIPT):
        speaker, line = entry[0], entry[1]
        voice = HOST_VOICE if speaker == "host" else GUEST_VOICE
        out_path = os.path.join(work_dir, f"line_{i:03d}.mp3")
        print(f"  Line {i+1}/{len(SCRIPT)}: {speaker} — {line[:60]}...")
        await generate_tts(line, voice, out_path)
        audio_paths.append(out_path)

    # 2. Build video clips per line
    print("\n[2/4] Building video clips...")
    clips = []
    total_duration = 0.0

    for i, entry in enumerate(SCRIPT):
        speaker, line = entry[0], entry[1]
        code = entry[2] if len(entry) > 2 else None

        audio_clip = AudioFileClip(audio_paths[i])
        duration = audio_clip.duration + 0.4  # small pause between lines
        total_duration += duration

        frame = make_speaker_frame(speaker, line, code=code)
        video_clip = (
            ImageClip(frame)
            .with_duration(duration)
            .with_audio(audio_clip)
        )
        clips.append(video_clip)
        print(f"  Clip {i+1}: {duration:.1f}s  (running total: {total_duration:.1f}s)")

    print(f"\nTotal dialogue duration: {total_duration:.1f}s (target: {TARGET_DURATION}s)")

    # 3. Concatenate all clips
    print("\n[3/4] Concatenating clips...")
    final = concatenate_videoclips(clips, method="chain")

    # 4. Write output
    print(f"\n[4/4] Writing {OUTPUT_FILE}...")
    final.write_videofile(
        OUTPUT_FILE,
        fps=FPS,
        codec="libx264",
        audio_codec="aac",
        preset="medium",
        threads=4,
        logger="bar",
    )

    # Cleanup temp files
    for p in audio_paths:
        try:
            os.remove(p)
        except OSError:
            pass
    try:
        os.rmdir(work_dir)
    except OSError:
        pass

    print(f"\nDone! Output saved to: {os.path.abspath(OUTPUT_FILE)}")
    print(f"Duration: {final.duration:.1f} seconds")


if __name__ == "__main__":
    asyncio.run(main())
