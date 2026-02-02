#!/usr/bin/env python3.11
"""
video_gen.py — Generate a David Letterman-style 2-person talk video
               about the Antikythera Mechanism.

Outputs: talk.mp4  (120 seconds, 1920x1080, 24 fps)

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
HOST_VOICE = "en-US-GuyNeural"        # Dave (host) — deeper, confident
GUEST_VOICE = "en-US-AndrewNeural"    # Professor Nick (guest) — articulate

# Colours (RGB)
BG_COLOR = (12, 12, 35)
HOST_COLOR = (52, 152, 219)      # blue — host
GUEST_COLOR = (46, 204, 113)     # green — guest
TEXT_COLOR = (236, 240, 241)
SUBTITLE_BG = (0, 0, 0)
TITLE_COLOR = (233, 69, 96)
DIVIDER_COLOR = (50, 50, 80)
BANNER_COLOR = (20, 20, 50)

# ---------------------------------------------------------------------------
# Dialogue script — David Letterman style (~120 s when spoken)
# Host: "Dave" — witty, sardonic, keeps things moving
# Guest: "Professor Nick" — enthusiastic expert
# ---------------------------------------------------------------------------
SCRIPT = [
    # (speaker, line)
    ("host",  "Ladies and gentlemen, welcome to the show! Tonight we have a very special guest — Professor Nick Harlow from the Institute of Ancient Technology. Professor, welcome!"),
    ("guest", "Dave, great to be here. Thanks for having me on."),
    ("host",  "So, Professor, you've spent your entire career studying something called the Antikythera mechanism. Now, for the folks at home who have no idea what that is — and I was one of them until about an hour ago — what are we talking about?"),
    ("guest", "Well Dave, imagine finding an iPhone at the bottom of the ocean — except it's two thousand years old and made entirely of bronze gears. That's essentially what the Antikythera mechanism is. It's the world's first known analogue computer."),
    ("host",  "A two-thousand-year-old computer. And I can barely get my laptop to last two years. How was this thing discovered?"),
    ("guest", "In nineteen hundred, Greek sponge divers led by Captain Dimitrios Kontos were diving off the tiny island of Antikythera and stumbled onto a Roman shipwreck at forty-five metres depth. They pulled up bronze statues, pottery, jewellery — and this corroded lump of bronze that nobody paid attention to."),
    ("host",  "Classic. The most important find and everybody ignores it. It's like finding a Picasso at a garage sale and buying the lamp next to it instead."),
    ("guest", "Exactly! It sat in a museum for two years before archaeologist Valerios Stais noticed a gear wheel embedded in the corroded mass. A precision gear — from ancient Greece! That was in nineteen-oh-two."),
    ("host",  "So what could this thing actually do? Because I'm picturing some ancient Greek scrolling through his emails."),
    ("guest", "Ha! Not quite. It tracked the Sun and Moon through the zodiac, predicted solar and lunar eclipses decades in advance using the Saros cycle, and even counted down to the next Olympic Games. The front had zodiac and calendar dials, and the back had these beautiful spiral dials for eclipse prediction."),
    ("host",  "It predicted eclipses? The ancient Greeks had better weather forecasting than my local news station."),
    ("guest", "And here's what's really mind-blowing, Dave. It had at least thirty-seven interlocking bronze gears, all hand-cut, in a wooden case the size of a shoebox. One gear alone had two hundred twenty-three teeth. And it used a pin-and-slot mechanism to model the Moon's variable speed — faster at perigee, slower at apogee."),
    ("host",  "You lost me at perigee, but I'm nodding like I understand. Who built this thing?"),
    ("guest", "Most scholars point to the island of Rhodes, which was a major hub for astronomy. The great astronomer Hipparchus worked there, and his lunar theory is actually encoded in the mechanism. The Roman writer Cicero mentioned similar devices built by Archimedes and the philosopher Posidonius."),
    ("host",  "So this wasn't even a one-off? There were more of these?"),
    ("guest", "Almost certainly. The sophistication suggests a whole tradition of building these instruments. But bronze was valuable, so most were melted down over the centuries. This one only survived because it sank to the bottom of the sea."),
    ("host",  "And modern science really cracked it open, right?"),
    ("guest", "In two thousand five, the Antikythera Mechanism Research Project, led by Tony Freeth and Mike Edmunds, used a custom CT scanner to see inside the fragments. They found hidden inscriptions mentioning all five classical planets. Then in twenty twenty-one, a team at University College London published a complete reconstruction."),
    ("host",  "And here's the kicker — nothing this complex appeared again for over a thousand years?"),
    ("guest", "That's right. Not until the astronomical clocks of fourteenth-century Europe. That's a thousand-year gap in technological capability. It completely changed our understanding of what the ancient world was capable of."),
    ("host",  "Professor Nick Harlow, ladies and gentlemen! The Antikythera mechanism — proof that the ancient Greeks were way smarter than we give them credit for. We'll be right back!"),
    ("guest", "Thanks, Dave! It's been a blast."),
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


def make_speaker_frame(
    speaker: str,
    line: str,
    width: int = VIDEO_WIDTH,
    height: int = VIDEO_HEIGHT,
) -> "np.ndarray":
    """Create a single video frame with Letterman-style talk-show layout."""
    from PIL import Image, ImageDraw, ImageFont
    import numpy as np

    img = Image.new("RGB", (width, height), BG_COLOR)
    draw = ImageDraw.Draw(img)

    # Try to load a nice font; fall back to default
    def load_font(size):
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

    font_title = load_font(52)
    font_banner = load_font(22)
    font_speaker = load_font(38)
    font_label = load_font(28)
    font_text = load_font(32)

    # ---- Top banner (show title) ----
    draw.rectangle([(0, 0), (width, 90)], fill=BANNER_COLOR)
    draw.text(
        (width // 2, 45),
        "LATE  NIGHT  WITH  DAVE",
        fill=TITLE_COLOR,
        font=font_title,
        anchor="mm",
    )
    draw.line([(0, 90), (width, 90)], fill=TITLE_COLOR, width=3)

    # ---- Lower banner (topic) ----
    draw.rectangle([(0, 92), (width, 130)], fill=(25, 25, 55))
    draw.text(
        (width // 2, 111),
        "TONIGHT:  The Antikythera Mechanism  —  The World's First Computer",
        fill=(180, 180, 200),
        font=font_banner,
        anchor="mm",
    )

    # ---- Speaker indicators ----
    host_x, guest_x = width // 4, 3 * width // 4
    indicator_y = 260

    # Host circle + label
    h_active = speaker == "host"
    h_fill = HOST_COLOR if h_active else (30, 30, 55)
    h_outline = (255, 255, 255) if h_active else (50, 50, 70)
    draw.ellipse(
        [host_x - 60, indicator_y - 60, host_x + 60, indicator_y + 60],
        fill=h_fill,
        outline=h_outline,
        width=4 if h_active else 2,
    )
    draw.text((host_x, indicator_y - 5), "D", fill=(255, 255, 255), font=font_speaker, anchor="mm")
    draw.text(
        (host_x, indicator_y + 80),
        "Dave",
        fill=TEXT_COLOR if h_active else (80, 80, 100),
        font=font_label,
        anchor="mt",
    )
    draw.text(
        (host_x, indicator_y + 115),
        "Host",
        fill=(150, 150, 170) if h_active else (60, 60, 80),
        font=load_font(20),
        anchor="mt",
    )

    # Guest circle + label
    g_active = speaker == "guest"
    g_fill = GUEST_COLOR if g_active else (30, 30, 55)
    g_outline = (255, 255, 255) if g_active else (50, 50, 70)
    draw.ellipse(
        [guest_x - 60, indicator_y - 60, guest_x + 60, indicator_y + 60],
        fill=g_fill,
        outline=g_outline,
        width=4 if g_active else 2,
    )
    draw.text((guest_x, indicator_y - 5), "N", fill=(255, 255, 255), font=font_speaker, anchor="mm")
    draw.text(
        (guest_x, indicator_y + 80),
        "Prof. Nick",
        fill=TEXT_COLOR if g_active else (80, 80, 100),
        font=font_label,
        anchor="mt",
    )
    draw.text(
        (guest_x, indicator_y + 115),
        "Guest",
        fill=(150, 150, 170) if g_active else (60, 60, 80),
        font=load_font(20),
        anchor="mt",
    )

    # ---- "VS" divider between speakers ----
    mid_x = width // 2
    draw.line([(mid_x, indicator_y - 40), (mid_x, indicator_y + 40)], fill=DIVIDER_COLOR, width=2)

    # ---- Subtitle area ----
    sub_top = height - 340
    draw.rectangle(
        [(50, sub_top), (width - 50, height - 30)],
        fill=(8, 8, 25),
        outline=DIVIDER_COLOR,
        width=1,
    )

    # Speaker tag in subtitle
    tag_color = HOST_COLOR if speaker == "host" else GUEST_COLOR
    tag_name = "DAVE" if speaker == "host" else "PROF. NICK"
    draw.rectangle([(70, sub_top + 12), (70 + len(tag_name) * 16 + 20, sub_top + 48)], fill=tag_color)
    draw.text(
        (80, sub_top + 16),
        tag_name,
        fill=(255, 255, 255),
        font=load_font(22),
    )

    # Wrap and draw subtitle text
    wrapper = textwrap.TextWrapper(width=64)
    wrapped_lines = wrapper.wrap(line)
    y_cursor = sub_top + 60
    for wl in wrapped_lines:
        bbox = draw.textbbox((0, 0), wl, font=font_text)
        tw = bbox[2] - bbox[0]
        draw.text(
            ((width - tw) // 2, y_cursor),
            wl,
            fill=TEXT_COLOR,
            font=font_text,
        )
        y_cursor += bbox[3] - bbox[1] + 10

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

    work_dir = tempfile.mkdtemp(prefix="letterman_video_")
    print(f"Working directory: {work_dir}")

    # 1. Generate TTS audio for each line
    print("\n[1/4] Generating speech audio...")
    audio_paths = []
    for i, (speaker, line) in enumerate(SCRIPT):
        voice = HOST_VOICE if speaker == "host" else GUEST_VOICE
        out_path = os.path.join(work_dir, f"line_{i:03d}.mp3")
        print(f"  Line {i+1}/{len(SCRIPT)}: {speaker} — {line[:60]}...")
        await generate_tts(line, voice, out_path)
        audio_paths.append(out_path)

    # 2. Build video clips per line
    print("\n[2/4] Building video clips...")
    clips = []
    total_duration = 0.0

    for i, (speaker, line) in enumerate(SCRIPT):
        audio_clip = AudioFileClip(audio_paths[i])
        duration = audio_clip.duration + 0.4  # small pause between lines
        total_duration += duration

        frame = make_speaker_frame(speaker, line)
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
