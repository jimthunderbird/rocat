#!/usr/bin/env python3
"""
Generate a 2-minute PowerPoint-style slide-by-slide video for
ASE A5 - Brakes (Entry-Level Technician Certification).
Uses edge-tts for natural male voice.
"""

import os
import asyncio
import subprocess
from PIL import Image, ImageDraw, ImageFont
import edge_tts
from moviepy import ImageClip, AudioFileClip, concatenate_videoclips

# --- Configuration ---
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
TEMP_DIR = os.path.join(OUTPUT_DIR, "_video_tmp_brakes")
VIDEO_DIR = os.path.join(OUTPUT_DIR, "videos")
OUTPUT_FILE = os.path.join(VIDEO_DIR, "entry_level_Brakes_742.mp4")
WIDTH, HEIGHT = 1280, 720
FPS = 24
TARGET_DURATION = 120.0  # 2 minutes

# Voice: natural male US English
VOICE = "en-US-GuyNeural"

# Colors
BG_COLOR = (255, 255, 255)
HEADER_BG = (178, 34, 34)  # Dark red for brakes theme
TITLE_COLOR = (255, 255, 255)
TEXT_COLOR = (51, 51, 51)
ACCENT_COLOR = (178, 34, 34)
BULLET_COLOR = (139, 0, 0)
SUBTITLE_COLOR = (100, 100, 100)
HIGHLIGHT_BG = (255, 240, 240)

os.makedirs(TEMP_DIR, exist_ok=True)
os.makedirs(VIDEO_DIR, exist_ok=True)


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


# --- Slide definitions ---
slides_data = []


def slide_title(img, draw):
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=HEADER_BG)
    draw.rectangle([100, 320, WIDTH - 100, 324], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 200), "ASE A5 - Brakes",
              fill=TITLE_COLOR, font=get_font(52, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 270), "Entry-Level Technician Certification",
              fill=(255, 200, 200), font=get_font(30), anchor="mm")
    draw.text((WIDTH // 2, 400), "Test Overview & Study Tips",
              fill=TITLE_COLOR, font=get_font(30), anchor="mm")
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(139, 0, 0))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "National Institute for Automotive Service Excellence",
              fill=(255, 255, 255), font=get_font(18), anchor="mm")


slides_data.append({
    "render": slide_title,
    "narration": (
        "Welcome to the A5 Brakes overview. "
        "This is one of eight tests you need to pass for ASE Entry-Level Technician certification. "
        "Brakes are critical to vehicle safety, so let's cover what you need to know."
    ),
})


def slide_test_overview(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "A5 Test Overview",
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
        ("A. Hydraulic, Power Assist & Parking Brake", "19", "43%"),
        ("B. Drum Brake Diagnosis and Repair", "5", "11%"),
        ("C. Disc Brake Diagnosis and Repair", "11", "24%"),
        ("D. Electronic Brake Control (ABS/TCS/ESC)", "10", "22%"),
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
        "You get 75 minutes for 55 questions, but only 45 are scored. "
        "Four content areas: Hydraulic and Parking Brake Systems at 43 percent is the biggest chunk. "
        "Disc Brakes at 24 percent. Electronic Brake Controls at 22 percent. "
        "And Drum Brakes at 11 percent."
    ),
})


def slide_hydraulic(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "A. Hydraulic, Power Assist & Parking (43%)",
              fill=TITLE_COLOR, font=get_font(32, bold=True), anchor="mm")
    y = 110
    font = get_font(22)
    draw.text((100, y), "19 Questions - The Largest Section",
              fill=ACCENT_COLOR, font=get_font(24, bold=True))
    y += 50
    for b in [
        "Master cylinder: diagnose pedal feel issues",
        "Lines & hoses: inspect for leaks, kinks, damage",
        "Bleed and flush hydraulic system properly",
        "Pressure test the brake hydraulic system",
        "Power booster: check vacuum and operation",
        "Parking brake: adjust cables and mechanisms",
        "Warning lights, switches, and sensors",
    ]:
        draw.text((120, y), "\u2022", fill=BULLET_COLOR, font=font)
        draw.text((145, y), b, fill=TEXT_COLOR, font=font)
        y += 36
    y += 15
    draw.rectangle([80, y, WIDTH - 80, y + 50], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((100, y + 12), "Focus here first - this section is nearly half the test!",
              fill=(100, 80, 0), font=get_font(22, bold=True))


slides_data.append({
    "render": slide_hydraulic,
    "narration": (
        "Hydraulic, Power Assist, and Parking Brake Systems make up 43 percent. "
        "Master the master cylinder: diagnose spongy pedals, high or low pedals, and fluid leaks. "
        "Know how to inspect brake lines and hoses for damage. "
        "Understand bleeding procedures: manual, pressure, vacuum, and gravity methods. "
        "Know power booster diagnosis and parking brake adjustments. "
        "This section alone is nearly half your score."
    ),
})


def slide_disc_drum(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "B. Drum Brakes & C. Disc Brakes",
              fill=TITLE_COLOR, font=get_font(34, bold=True), anchor="mm")
    y = 100
    font = get_font(21)
    fb = get_font(23, bold=True)
    draw.text((100, y), "B. Drum Brake Diagnosis & Repair (11% - 5 Qs)", fill=ACCENT_COLOR, font=fb)
    y += 40
    for b in [
        "Diagnose grabbing, pulling, and dragging issues",
        "Inspect and measure drums per manufacturer specs",
        "Service wheel cylinders and brake hardware",
        "Inspect and repack wheel bearings",
    ]:
        draw.text((120, y), "\u2022", fill=BULLET_COLOR, font=font)
        draw.text((145, y), b, fill=TEXT_COLOR, font=font)
        y += 32
    y += 15
    draw.rectangle([80, y, WIDTH - 80, y + 2], fill=(200, 200, 200))
    y += 15
    draw.text((100, y), "C. Disc Brake Diagnosis & Repair (24% - 11 Qs)", fill=ACCENT_COLOR, font=fb)
    y += 40
    for b in [
        "Diagnose pulsation, noise, and pulling problems",
        "Inspect and measure rotors with dial indicator",
        "Machine rotors on-car or off-car methods",
        "Service calipers, pads, and mounting hardware",
        "Distinguish brake vs. tire/wheel vibration",
    ]:
        draw.text((120, y), "\u2022", fill=BULLET_COLOR, font=font)
        draw.text((145, y), b, fill=TEXT_COLOR, font=font)
        y += 32


slides_data.append({
    "render": slide_disc_drum,
    "narration": (
        "Drum Brakes are 11 percent with 5 questions. "
        "Know how to diagnose grabbing, pulling, and dragging. Inspect and measure drums. "
        "Service wheel cylinders and brake hardware. "
        "Disc Brakes are 24 percent with 11 questions. "
        "Diagnose pulsation, noise, and pulling issues. "
        "Measure rotors with a dial indicator and micrometer. "
        "Know how to machine rotors and service calipers."
    ),
})


def slide_electronic(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "D. Electronic Brake Controls (22%)",
              fill=TITLE_COLOR, font=get_font(34, bold=True), anchor="mm")
    y = 110
    font = get_font(22)
    draw.text((100, y), "ABS, Traction Control, and Stability Control - 10 Qs",
              fill=ACCENT_COLOR, font=get_font(24, bold=True))
    y += 50
    for b in [
        "ABS: diagnose wheel lock-up and false activation",
        "Observe ABS indicator lights at start-up",
        "Use scan tools and DMM for diagnosis",
        "TCS and ESC system operation and faults",
        "Bleed electronic brake systems per specs",
        "Test wheel speed and brake pedal sensors",
        "Clear DTCs and verify the repair",
    ]:
        draw.text((120, y), "\u2022", fill=BULLET_COLOR, font=font)
        draw.text((145, y), b, fill=TEXT_COLOR, font=font)
        y += 36
    y += 15
    draw.rectangle([80, y, WIDTH - 80, y + 50], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((100, y + 12), "Modern vehicles rely heavily on electronic brake systems!",
              fill=(100, 80, 0), font=get_font(22, bold=True))


slides_data.append({
    "render": slide_electronic,
    "narration": (
        "Electronic Brake Control Systems are 22 percent. "
        "This covers ABS, Traction Control, and Electronic Stability Control. "
        "Know how to diagnose increased stopping distance and false ABS activation. "
        "Understand scan tool and multimeter diagnosis. "
        "Be able to bleed electronic systems following manufacturer procedures. "
        "And always clear codes and verify the repair after service."
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
    draw.text((145, y), "Rotor measurements vary from spec. What happens?",
              fill=TEXT_COLOR, font=font)
    y += 30
    draw.text((160, y), "Answer: (C) Pulsating brake pedal", fill=(0, 140, 60), font=fb)
    y += 45

    draw.text((100, y), "Q2:", fill=ACCENT_COLOR, font=fb)
    draw.text((145, y), "Pedal slowly sinks to floor during braking?",
              fill=TEXT_COLOR, font=font)
    y += 30
    draw.text((160, y), "Answer: (A) Internal master cylinder leak", fill=(0, 140, 60), font=fb)
    y += 45

    draw.text((100, y), "Q3:", fill=ACCENT_COLOR, font=fb)
    draw.text((145, y), "Front brake vibration on a disc/drum vehicle?",
              fill=TEXT_COLOR, font=font)
    y += 30
    draw.text((160, y), "Answer: (C) Excessive rotor runout", fill=(0, 140, 60), font=fb)
    y += 45

    draw.text((100, y), "Q4:", fill=ACCENT_COLOR, font=fb)
    draw.text((145, y), "Leaking hydraulic brake line - correct repair?",
              fill=TEXT_COLOR, font=font)
    y += 30
    draw.text((160, y), "Answer: (D) Replace with double-flared steel tubing",
              fill=(0, 140, 60), font=fb)
    y += 50

    draw.rectangle([80, y, WIDTH - 80, y + 45], fill=HIGHLIGHT_BG)
    draw.text((100, y + 10), "Key skill: Match symptoms to the correct brake component!",
              fill=ACCENT_COLOR, font=fb)


slides_data.append({
    "render": slide_sample_q,
    "narration": (
        "Here are four sample questions from the study guide. "
        "Rotor measurements vary from spec? That causes a pulsating brake pedal. "
        "Pedal slowly sinks to the floor? Internal master cylinder leak. "
        "Vibration from the front on a disc-drum vehicle? Excessive rotor runout. "
        "Leaking brake line repair? Always use double-flared steel tubing. "
        "The key skill is matching symptoms to the right component."
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
        ("Focus on Hydraulic Systems", "43% of score - study this first"),
        ("Know Disc Brake Service", "24% - rotors, calipers, and pad service"),
        ("Understand ABS/TCS/ESC", "22% - electronic systems are growing"),
        ("Practice symptom diagnosis", "Most questions describe a symptom"),
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
        "Five study tips for A5 Brakes. "
        "One: focus on Hydraulic Systems first, it's 43 percent of the test. "
        "Two: know disc brake service inside and out at 24 percent. "
        "Three: understand electronic brake controls, they're 22 percent and growing. "
        "Four: practice matching symptoms to causes, that's how most questions are written. "
        "Five: answer every question since you can't tell which ones are unscored."
    ),
})


def slide_closing(img, draw):
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=HEADER_BG)
    draw.rectangle([100, 300, WIDTH - 100, 304], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 200), "You've Got This!",
              fill=TITLE_COLOR, font=get_font(48, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 260), "A5 Brakes Key Takeaways",
              fill=(255, 200, 200), font=get_font(28), anchor="mm")
    y = 340
    for t in [
        "45 scored questions, 75 minutes",
        "Hydraulic Systems = 43% of the test",
        "Know disc and drum brake service",
        "Match symptoms to brake components",
    ]:
        draw.text((WIDTH // 2, y), f"\u2713  {t}",
                  fill=TITLE_COLOR, font=get_font(24), anchor="mm")
        y += 40
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(139, 0, 0))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "Good luck on your ASE A5 exam!",
              fill=(255, 255, 255), font=get_font(22), anchor="mm")


slides_data.append({
    "render": slide_closing,
    "narration": (
        "To wrap up: 45 scored questions in 75 minutes. "
        "Hydraulic Systems are 43 percent, so master that section. "
        "Know your disc and drum brake service procedures. "
        "And always connect symptoms to the right brake component. "
        "Good luck on your A5 Brakes exam. You've got this!"
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


async def generate_narration(index, text):
    path = os.path.join(TEMP_DIR, f"narration_{index:02d}.mp3")
    communicate = edge_tts.Communicate(text, VOICE, rate="-10%")
    await communicate.save(path)
    return path


def speed_up_audio(input_path, speed_factor):
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


async def build_video():
    print("Generating slides and narration...")
    total_audio_dur = 0.0

    # First pass: generate all assets
    assets = []
    for i, slide in enumerate(slides_data):
        print(f"  Slide {i + 1}/{len(slides_data)}: rendering...")
        img_path = render_slide_image(i, slide["render"])
        audio_path = await generate_narration(i, slide["narration"])
        audio = AudioFileClip(audio_path)
        total_audio_dur += audio.duration
        assets.append((img_path, audio_path, audio.duration))

    # Determine speed factor if needed
    total_with_padding = total_audio_dur + len(slides_data) * 0.5
    print(f"Raw audio duration: {total_audio_dur:.1f}s, with padding: {total_with_padding:.1f}s")

    # Build clips at natural speed (no speed-up or trimming)
    clips = []
    for i, (img_path, audio_path, orig_dur) in enumerate(assets):
        audio = AudioFileClip(audio_path)
        duration = audio.duration + 1.0  # pause between slides
        clip = ImageClip(img_path, duration=duration)
        clip = clip.with_audio(audio)
        clips.append(clip)

    final = concatenate_videoclips(clips, method="compose")
    print(f"Final duration: {final.duration:.1f}s")

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
    asyncio.run(build_video())
