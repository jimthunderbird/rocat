#!/usr/bin/env python3
"""
Generate a 2-minute PowerPoint-style slide-by-slide video for
ASE A1 - Engine Repair (Entry-Level Technician Certification).
"""

import os
import subprocess
import textwrap
from PIL import Image, ImageDraw, ImageFont
from gtts import gTTS
from moviepy import (
    ImageClip,
    AudioFileClip,
    concatenate_videoclips,
)

# --- Configuration ---
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
TEMP_DIR = os.path.join(OUTPUT_DIR, "_video_tmp")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "entry_level_A1_Engine_Repair_537.mp4")
WIDTH, HEIGHT = 1280, 720
FPS = 24
TARGET_DURATION = 120.0  # 2 minutes

# Colors
BG_COLOR = (255, 255, 255)
HEADER_BG = (0, 136, 206)
TITLE_COLOR = (255, 255, 255)
TEXT_COLOR = (51, 51, 51)
ACCENT_COLOR = (0, 136, 206)
BULLET_COLOR = (0, 100, 170)
SUBTITLE_COLOR = (100, 100, 100)
HIGHLIGHT_BG = (235, 245, 255)

os.makedirs(TEMP_DIR, exist_ok=True)


def get_font(size, bold=False):
    candidates = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


# --- Slide definitions (compact narration for ~2 min total) ---
slides_data = []


def slide_title(img, draw):
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=HEADER_BG)
    draw.rectangle([100, 320, WIDTH - 100, 324], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 200), "ASE A1 - Engine Repair",
              fill=TITLE_COLOR, font=get_font(52, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 270), "Entry-Level Technician Certification",
              fill=(200, 230, 255), font=get_font(30), anchor="mm")
    draw.text((WIDTH // 2, 400), "Test Overview & Study Tips",
              fill=TITLE_COLOR, font=get_font(30), anchor="mm")
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(0, 100, 170))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "National Institute for Automotive Service Excellence",
              fill=(255, 255, 255), font=get_font(18), anchor="mm")


slides_data.append({
    "render": slide_title,
    "narration": (
        "Welcome to the A1 Engine Repair overview. "
        "This is one of eight tests for ASE Entry-Level Technician certification. "
        "Let's cover what you need to know."
    ),
})


def slide_test_overview(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "A1 Test Overview",
              fill=TITLE_COLOR, font=get_font(36, bold=True), anchor="mm")
    y = 110
    font = get_font(26)
    font_bold = get_font(26, bold=True)
    for label, value in [
        ("Questions:", "55 total (45 scored + 10 unscored)"),
        ("Time:", "75 minutes"),
        ("Format:", "Multiple-choice (A, B, C, D)"),
    ]:
        draw.text((100, y), label, fill=ACCENT_COLOR, font=font_bold)
        draw.text((350, y), value, fill=TEXT_COLOR, font=font)
        y += 42
    y += 20
    draw.rectangle([80, y, WIDTH - 80, y + 2], fill=(200, 200, 200))
    y += 20
    draw.text((100, y), "Content Areas", fill=TEXT_COLOR, font=font_bold)
    draw.text((700, y), "Qs", fill=TEXT_COLOR, font=font_bold)
    draw.text((800, y), "Weight", fill=TEXT_COLOR, font=font_bold)
    y += 40
    areas = [
        ("A. General Engine Diagnosis", "18", "40%"),
        ("B. Cylinder Head & Valve Train", "6", "13%"),
        ("C. Engine Block Diagnosis & Repair", "4", "9%"),
        ("D. Lubrication & Cooling Systems", "8", "18%"),
        ("E. Fuel, Electrical, Ignition & Exhaust", "9", "20%"),
    ]
    for i, (area, qs, pct) in enumerate(areas):
        bg = HIGHLIGHT_BG if i % 2 == 0 else BG_COLOR
        draw.rectangle([80, y - 4, WIDTH - 80, y + 32], fill=bg)
        draw.text((100, y), area, fill=TEXT_COLOR, font=get_font(22))
        draw.text((710, y), qs, fill=TEXT_COLOR, font=get_font(22))
        draw.text((810, y), pct, fill=ACCENT_COLOR, font=get_font(22, bold=True))
        y += 38


slides_data.append({
    "render": slide_test_overview,
    "narration": (
        "You get 75 minutes for 55 questions. Only 45 are scored. "
        "Five content areas: General Diagnosis at 40 percent is the biggest. "
        "Then Fuel and Electrical at 20, Lubrication and Cooling at 18, "
        "Cylinder Head at 13, and Engine Block at 9 percent."
    ),
})


def slide_general_diag(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "A. General Engine Diagnosis (40%)",
              fill=TITLE_COLOR, font=get_font(34, bold=True), anchor="mm")
    y = 110
    font = get_font(22)
    draw.text((100, y), "18 Questions - The Largest Section",
              fill=ACCENT_COLOR, font=get_font(24, bold=True))
    y += 50
    for b in [
        "Verify customer concerns; road test vehicles",
        "Diagnose no-crank, crank/no-start conditions",
        "Inspect for fuel, oil, and coolant leaks",
        "Isolate engine noises and vibrations",
        "Perform compression and leak-down tests",
        "Perform vacuum and pressure tests",
        "Use DMM, oscilloscope, and scan tools",
    ]:
        draw.text((120, y), "\u2022", fill=BULLET_COLOR, font=font)
        draw.text((145, y), b, fill=TEXT_COLOR, font=font)
        y += 36
    y += 15
    draw.rectangle([80, y, WIDTH - 80, y + 50], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((100, y + 12), "Focus here first - this section is nearly half the test!",
              fill=(100, 80, 0), font=get_font(22, bold=True))


slides_data.append({
    "render": slide_general_diag,
    "narration": (
        "General Engine Diagnosis is 40 percent. "
        "Know how to diagnose starting problems, inspect for leaks, "
        "isolate noises, and run compression and leak-down tests. "
        "Master your diagnostic tools. This section alone is nearly half your score."
    ),
})


def slide_head_block(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "B. Cylinder Head & C. Engine Block",
              fill=TITLE_COLOR, font=get_font(34, bold=True), anchor="mm")
    y = 100
    font = get_font(21)
    fb = get_font(23, bold=True)
    draw.text((100, y), "B. Cylinder Head & Valve Train (13% - 6 Qs)", fill=ACCENT_COLOR, font=fb)
    y += 40
    for b in [
        "Inspect heads for cracks, warpage, corrosion",
        "Check valves, seats, springs, and guides",
        "Inspect camshaft lobes, journals, and lift",
        "Service VVT components - increasingly tested",
    ]:
        draw.text((120, y), "\u2022", fill=BULLET_COLOR, font=font)
        draw.text((145, y), b, fill=TEXT_COLOR, font=font)
        y += 32
    y += 15
    draw.rectangle([80, y, WIDTH - 80, y + 2], fill=(200, 200, 200))
    y += 15
    draw.text((100, y), "C. Engine Block Diagnosis & Repair (9% - 4 Qs)", fill=ACCENT_COLOR, font=fb)
    y += 40
    for b in [
        "Remove and reinstall engine assembly",
        "Inspect block for cracks and warpage",
        "Check crankshaft, bearings, pistons, and rods",
        "Inspect camshaft drive and timing components",
    ]:
        draw.text((120, y), "\u2022", fill=BULLET_COLOR, font=font)
        draw.text((145, y), b, fill=TEXT_COLOR, font=font)
        y += 32


slides_data.append({
    "render": slide_head_block,
    "narration": (
        "Cylinder Head and Valve Train is 13 percent. "
        "Inspect heads, valves, springs, and cam components. VVT is increasingly tested. "
        "Engine Block is 9 percent. "
        "Know engine removal, block inspection, and crankshaft checks."
    ),
})


def slide_lube_cool_fuel(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "D. Lube/Cooling & E. Fuel/Electrical",
              fill=TITLE_COLOR, font=get_font(34, bold=True), anchor="mm")
    y = 100
    font = get_font(21)
    fb = get_font(23, bold=True)
    draw.text((100, y), "D. Lubrication & Cooling Systems (18% - 8 Qs)", fill=ACCENT_COLOR, font=fb)
    y += 40
    for b in [
        "Diagnose oil system problems; oil pressure tests",
        "Inspect oil pump and pressure relief devices",
        "Diagnose cooling problems; pressure and leak tests",
        "Service thermostat, water pump, radiator, fans",
    ]:
        draw.text((120, y), "\u2022", fill=BULLET_COLOR, font=font)
        draw.text((145, y), b, fill=TEXT_COLOR, font=font)
        y += 32
    y += 15
    draw.rectangle([80, y, WIDTH - 80, y + 2], fill=(200, 200, 200))
    y += 15
    draw.text((100, y), "E. Fuel, Electrical, Ignition & Exhaust (20% - 9 Qs)", fill=ACCENT_COLOR, font=fb)
    y += 40
    for b in [
        "Diagnose fuel, air induction, and exhaust faults",
        "Test and repair electrical and ignition systems",
        "Questions often combine multiple sub-systems",
    ]:
        draw.text((120, y), "\u2022", fill=BULLET_COLOR, font=font)
        draw.text((145, y), b, fill=TEXT_COLOR, font=font)
        y += 32


slides_data.append({
    "render": slide_lube_cool_fuel,
    "narration": (
        "Lubrication and Cooling is 18 percent. "
        "Know oil pressure testing, pump inspection, and cooling system diagnosis. "
        "Fuel, Electrical, Ignition, and Exhaust is 20 percent. "
        "Diagnose faults across all four sub-systems. Watch for combined-system questions."
    ),
})


def slide_sample_q(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Sample Questions",
              fill=TITLE_COLOR, font=get_font(34, bold=True), anchor="mm")
    y = 105
    font = get_font(20)
    fb = get_font(21, bold=True)

    draw.text((100, y), "Q1:", fill=ACCENT_COLOR, font=fb)
    draw.text((145, y), "Overheating, white smoke, cooling system won't hold pressure?", fill=TEXT_COLOR, font=font)
    y += 30
    draw.text((160, y), "Answer: (A) Blown head gasket", fill=(0, 140, 60), font=fb)
    y += 45

    draw.text((100, y), "Q2:", fill=ACCENT_COLOR, font=fb)
    draw.text((145, y), "Low compression, leak-down air from tailpipe?", fill=TEXT_COLOR, font=font)
    y += 30
    draw.text((160, y), "Answer: (D) Exhaust valve not seating", fill=(0, 140, 60), font=fb)
    y += 45

    draw.text((100, y), "Q3:", fill=ACCENT_COLOR, font=fb)
    draw.text((145, y), "Overheats at high RPMs, normal at low RPMs?", fill=TEXT_COLOR, font=font)
    y += 30
    draw.text((160, y), "Answer: (B) Worn water pump belt tensioner", fill=(0, 140, 60), font=fb)
    y += 45

    draw.text((100, y), "Q4:", fill=ACCENT_COLOR, font=fb)
    draw.text((145, y), "Brief tapping at cold start-up only, every morning?", fill=TEXT_COLOR, font=font)
    y += 30
    draw.text((160, y), "Answer: (D) Failed engine oil filter", fill=(0, 140, 60), font=fb)
    y += 50

    draw.rectangle([80, y, WIDTH - 80, y + 45], fill=HIGHLIGHT_BG)
    draw.text((100, y + 10), "Key skill: Connect symptoms to root causes!",
              fill=ACCENT_COLOR, font=fb)


slides_data.append({
    "render": slide_sample_q,
    "narration": (
        "Here are four sample questions. "
        "Overheating with white smoke and pressure loss? Blown head gasket. "
        "Low compression with air at the tailpipe? Exhaust valve not seating. "
        "Overheating only at high RPMs? Worn water pump belt tensioner. "
        "Brief tapping at cold start-up? Failed oil filter. "
        "The key skill is connecting symptoms to causes."
    ),
})


def slide_tips(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Study Tips",
              fill=TITLE_COLOR, font=get_font(34, bold=True), anchor="mm")
    y = 120
    font = get_font(23)
    fb = get_font(24, bold=True)
    num_font = get_font(32, bold=True)
    tips = [
        ("Focus on General Diagnosis", "40% of score - study this first"),
        ("Use the ASE Task List", "Every question maps to a task on the list"),
        ("Practice symptom-cause links", "Most questions are symptom-based"),
        ("Know diagnostic tools", "DMM, scope, scan tool, compression tester"),
        ("Answer every question", "10 are unscored but you can't tell which"),
    ]
    for i, (title, detail) in enumerate(tips, 1):
        draw.text((90, y), str(i), fill=ACCENT_COLOR, font=num_font)
        draw.text((130, y + 2), title, fill=TEXT_COLOR, font=fb)
        y += 32
        draw.text((130, y), detail, fill=SUBTITLE_COLOR, font=get_font(20))
        y += 48


slides_data.append({
    "render": slide_tips,
    "narration": (
        "Five study tips. "
        "One: focus on General Diagnosis, it's 40 percent. "
        "Two: use the ASE Task List as your checklist. "
        "Three: practice connecting symptoms to causes. "
        "Four: know your diagnostic tools well. "
        "Five: answer every question since you can't tell which are unscored."
    ),
})


def slide_closing(img, draw):
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=HEADER_BG)
    draw.rectangle([100, 300, WIDTH - 100, 304], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 200), "You've Got This!",
              fill=TITLE_COLOR, font=get_font(48, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 260), "A1 Engine Repair Key Takeaways",
              fill=(200, 230, 255), font=get_font(28), anchor="mm")
    y = 340
    for t in [
        "45 scored questions, 75 minutes",
        "General Diagnosis = 40% of the test",
        "Know your tools and procedures",
        "Connect symptoms to root causes",
    ]:
        draw.text((WIDTH // 2, y), f"\u2713  {t}",
                  fill=TITLE_COLOR, font=get_font(24), anchor="mm")
        y += 40
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(0, 100, 170))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "Good luck on your ASE A1 exam!",
              fill=(255, 255, 255), font=get_font(22), anchor="mm")


slides_data.append({
    "render": slide_closing,
    "narration": (
        "To wrap up: 45 scored questions in 75 minutes. "
        "General Diagnosis is 40 percent. Know your tools. Connect symptoms to causes. "
        "Good luck on your A1 exam. See you next time!"
    ),
})


# --- Build video ---
def render_slide_image(index, render_fn):
    img = Image.new("RGB", (WIDTH, HEIGHT), BG_COLOR)
    draw = ImageDraw.Draw(img)
    render_fn(img, draw)
    path = os.path.join(TEMP_DIR, f"slide_{index:02d}.png")
    img.save(path)
    return path


def generate_narration(index, text):
    path = os.path.join(TEMP_DIR, f"narration_{index:02d}.mp3")
    tts = gTTS(text=text, lang="en", slow=False)
    tts.save(path)
    return path


def speed_up_audio(input_path, speed_factor):
    """Use ffmpeg to speed up audio without changing pitch."""
    output_path = input_path.replace(".mp3", "_fast.mp3")
    subprocess.run(
        [
            "ffmpeg", "-y", "-i", input_path,
            "-filter:a", f"atempo={speed_factor}",
            output_path,
        ],
        capture_output=True,
    )
    return output_path


def build_video():
    print("Generating slides and narration...")
    clips = []
    total_audio_dur = 0.0

    # First pass: generate all assets and measure total audio duration
    assets = []
    for i, slide in enumerate(slides_data):
        print(f"  Slide {i + 1}/{len(slides_data)}: rendering...")
        img_path = render_slide_image(i, slide["render"])
        audio_path = generate_narration(i, slide["narration"])
        audio = AudioFileClip(audio_path)
        total_audio_dur += audio.duration
        assets.append((img_path, audio_path, audio.duration))

    # Determine speed factor if needed (each slide gets 0.5s padding)
    total_with_padding = total_audio_dur + len(slides_data) * 0.5
    print(f"Raw audio duration: {total_audio_dur:.1f}s, with padding: {total_with_padding:.1f}s")

    speed_factor = 1.0
    if total_with_padding > TARGET_DURATION:
        # Calculate speed needed; cap at 1.5x to keep it listenable
        speed_factor = min(total_with_padding / TARGET_DURATION, 1.5)
        print(f"Speeding up audio by {speed_factor:.2f}x to fit {TARGET_DURATION}s")

    # Second pass: build clips with optional speed-up
    for i, (img_path, audio_path, orig_dur) in enumerate(assets):
        if speed_factor > 1.01:
            audio_path = speed_up_audio(audio_path, speed_factor)

        audio = AudioFileClip(audio_path)
        duration = audio.duration + 0.5
        clip = ImageClip(img_path, duration=duration)
        clip = clip.with_audio(audio)
        clips.append(clip)

    final = concatenate_videoclips(clips, method="compose")
    print(f"Final duration: {final.duration:.1f}s (target: {TARGET_DURATION}s)")

    # Trim if still over target
    if final.duration > TARGET_DURATION + 2:
        final = final.subclipped(0, TARGET_DURATION)
        print(f"Trimmed to {TARGET_DURATION}s")

    print(f"Writing video to {OUTPUT_FILE}...")
    final.write_videofile(
        OUTPUT_FILE,
        fps=FPS,
        codec="libx264",
        audio_codec="aac",
        logger="bar",
    )
    print(f"Done! Video saved: {OUTPUT_FILE}")

    import shutil
    shutil.rmtree(TEMP_DIR, ignore_errors=True)
    print("Temporary files cleaned up.")


if __name__ == "__main__":
    build_video()
