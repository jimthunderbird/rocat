#!/usr/bin/env python3
"""
Generate a 2-4 minute PowerPoint-style slide-by-slide video for
ASE A3 - Manual Drive Train and Axles (Entry-Level Technician Certification).
Uses edge-tts for natural male voice.
Focuses on explaining concepts with diagrams.
"""

import os
import math
import asyncio
import subprocess
from PIL import Image, ImageDraw, ImageFont
import edge_tts
from moviepy import ImageClip, AudioFileClip, concatenate_videoclips

# --- Configuration ---
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
TEMP_DIR = os.path.join(OUTPUT_DIR, "_video_tmp_manual_drivetrain")
VIDEO_DIR = os.path.join(OUTPUT_DIR, "videos")
OUTPUT_FILE = os.path.join(VIDEO_DIR, "entry_level_Manual_Drive_Train_and_Axles_483.mp4")
WIDTH, HEIGHT = 1280, 720
FPS = 24
TARGET_DURATION = 180.0  # 3 minutes

# Voice: natural male US English
VOICE = "en-US-GuyNeural"

# Colors - green/teal theme for drivetrain
BG_COLOR = (255, 255, 255)
HEADER_BG = (0, 100, 80)           # Dark teal
TITLE_COLOR = (255, 255, 255)
TEXT_COLOR = (51, 51, 51)
ACCENT_COLOR = (0, 100, 80)
BULLET_COLOR = (0, 130, 100)
SUBTITLE_COLOR = (100, 100, 100)
HIGHLIGHT_BG = (235, 250, 245)
METAL_COLOR = (120, 120, 120)
GEAR_COLOR = (80, 80, 80)
SHAFT_COLOR = (160, 140, 60)
HOUSING_COLOR = (160, 160, 160)
BLUE = (30, 100, 180)
GREEN = (0, 140, 60)
ORANGE = (230, 120, 0)
RED = (200, 40, 40)
DARK_GREEN = (0, 80, 50)

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


# ============ SLIDE 1: Title ============
def slide_title(img, draw):
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=HEADER_BG)
    # Decorative gear icon
    cx, cy = WIDTH // 2, 155
    r_outer = 60
    teeth = 12
    for i in range(teeth):
        angle = 2 * math.pi * i / teeth
        angle2 = 2 * math.pi * (i + 0.3) / teeth
        x1 = cx + r_outer * math.cos(angle)
        y1 = cy + r_outer * math.sin(angle)
        x2 = cx + r_outer * math.cos(angle2)
        y2 = cy + r_outer * math.sin(angle2)
        x3 = cx + (r_outer + 14) * math.cos((angle + angle2) / 2)
        y3 = cy + (r_outer + 14) * math.sin((angle + angle2) / 2)
        draw.polygon([(x1, y1), (x3, y3), (x2, y2)], fill=(200, 220, 210))
    draw.ellipse([cx - r_outer, cy - r_outer, cx + r_outer, cy + r_outer],
                 fill=(180, 210, 200), outline=(200, 220, 210), width=3)
    draw.ellipse([cx - 25, cy - 25, cx + 25, cy + 25],
                 fill=HEADER_BG, outline=(200, 220, 210), width=2)
    draw.text((cx, cy), "A3", fill=TITLE_COLOR, font=get_font(26, bold=True), anchor="mm")

    draw.rectangle([100, 250, WIDTH - 100, 254], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 300), "Manual Drive Train",
              fill=TITLE_COLOR, font=get_font(48, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 360), "& Axles",
              fill=(200, 240, 230), font=get_font(36), anchor="mm")
    draw.text((WIDTH // 2, 420), "Core Concepts for Entry-Level Technicians",
              fill=TITLE_COLOR, font=get_font(26), anchor="mm")
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=DARK_GREEN)
    draw.text((WIDTH // 2, HEIGHT - 25),
              "National Institute for Automotive Service Excellence",
              fill=(255, 255, 255), font=get_font(18), anchor="mm")


slides_data.append({
    "render": slide_title,
    "narration": (
        "Welcome to A3, Manual Drive Train and Axles. "
        "This test has 40 scored questions and you get 60 minutes. "
        "The manual drive train includes the clutch, manual transmission, drive shafts, "
        "differentials, and four-wheel drive systems. "
        "Let's break down each of these systems so you understand how they work and what can go wrong."
    ),
})


# ============ SLIDE 2: The Clutch System ============
def slide_clutch(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "The Clutch System - Connecting Engine to Transmission",
              fill=TITLE_COLOR, font=get_font(28, bold=True), anchor="mm")

    # Clutch assembly diagram (left side)
    draw.text((280, 110), "Clutch Assembly (Side View)",
              fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    # Flywheel
    fw_x, fw_y = 120, 200
    fw_w, fw_h = 30, 180
    draw.rectangle([fw_x, fw_y, fw_x + fw_w, fw_y + fw_h],
                   fill=(200, 200, 200), outline=GEAR_COLOR, width=3)
    draw.text((fw_x + fw_w // 2, fw_y + fw_h // 2), "F\nL\nY\nW\nH\nE\nE\nL",
              fill=GEAR_COLOR, font=get_font(11, bold=True), anchor="mm")

    # Clutch disc
    cd_x = fw_x + fw_w + 8
    draw.rectangle([cd_x, fw_y + 20, cd_x + 12, fw_y + fw_h - 20],
                   fill=(180, 140, 60), outline=(140, 100, 20), width=2)
    draw.text((cd_x + 6, fw_y - 5), "Clutch\nDisc", fill=SHAFT_COLOR, font=get_font(11, bold=True), anchor="mm")

    # Pressure plate
    pp_x = cd_x + 18
    draw.rectangle([pp_x, fw_y + 10, pp_x + 25, fw_y + fw_h - 10],
                   fill=(180, 180, 180), outline=GEAR_COLOR, width=2)
    draw.text((pp_x + 12, fw_y + fw_h + 15), "Pressure\nPlate",
              fill=GEAR_COLOR, font=get_font(11, bold=True), anchor="mm")

    # Throw-out bearing
    tob_x = pp_x + 35
    tob_cy = fw_y + fw_h // 2
    draw.ellipse([tob_x, tob_cy - 15, tob_x + 30, tob_cy + 15],
                 fill=(220, 230, 255), outline=BLUE, width=2)
    draw.text((tob_x + 15, tob_cy), "TOB", fill=BLUE, font=get_font(10, bold=True), anchor="mm")
    draw.text((tob_x + 15, tob_cy + 25), "Release\nBearing", fill=BLUE, font=get_font(10), anchor="mm")

    # Input shaft (going right)
    shaft_y = tob_cy - 5
    draw.rectangle([tob_x + 30, shaft_y, tob_x + 130, shaft_y + 10],
                   fill=(200, 180, 100), outline=SHAFT_COLOR, width=1)
    draw.text((tob_x + 80, shaft_y - 12), "Input Shaft (to Transmission)",
              fill=ACCENT_COLOR, font=get_font(12, bold=True), anchor="mm")

    # Engine crankshaft label (left)
    draw.line([(fw_x - 5, tob_cy), (fw_x - 50, tob_cy)], fill=GEAR_COLOR, width=3)
    draw.text((fw_x - 55, tob_cy - 12), "From", fill=TEXT_COLOR, font=get_font(12), anchor="rm")
    draw.text((fw_x - 55, tob_cy + 5), "Engine", fill=ACCENT_COLOR, font=get_font(13, bold=True), anchor="rm")

    # Force arrows
    draw.text((cd_x + 6, fw_y + fw_h // 2 - 40), "\u2190", fill=RED, font=get_font(18, bold=True), anchor="mm")
    draw.text((cd_x + 6, fw_y + fw_h // 2 + 40), "\u2192", fill=RED, font=get_font(18, bold=True), anchor="mm")
    draw.text((pp_x + 12, fw_y + fw_h // 2 - 30), "\u2190", fill=RED, font=get_font(14), anchor="mm")

    # Divider
    draw.line([(530, 100), (530, 520)], fill=(200, 200, 200), width=2)

    # Right side: How it works
    draw.text((900, 110), "How the Clutch Works", fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    steps = [
        ("Clutch Engaged (Pedal Up)", "Pressure plate clamps clutch disc\nagainst flywheel. Power flows\nfrom engine to transmission."),
        ("Clutch Released (Pedal Down)", "Release bearing pushes on\ndiaphragm spring. Pressure plate\nreleases disc. No power flows."),
        ("Clutch Disc", "Friction material on both sides.\nSplined to the input shaft.\nSpring-loaded hub absorbs shock."),
        ("Pilot Bearing/Bushing", "Supports the tip of the input\nshaft in the crankshaft or flywheel."),
    ]
    y = 150
    for title, desc in steps:
        draw.text((555, y), title, fill=TEXT_COLOR, font=get_font(15, bold=True))
        for j, line in enumerate(desc.split("\n")):
            draw.text((570, y + 20 + j * 17), line, fill=SUBTITLE_COLOR, font=get_font(13))
        y += 80

    # Bottom box
    draw.rectangle([80, 490, WIDTH - 80, 530], fill=(235, 250, 245), outline=ACCENT_COLOR)
    draw.text((WIDTH // 2, 500),
              "A worn clutch disc causes slipping. A seized pilot bearing causes noise in neutral with pedal up.",
              fill=DARK_GREEN, font=get_font(15, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 518),
              "Clutch chatter = warped flywheel, oil on disc, or worn pressure plate.",
              fill=TEXT_COLOR, font=get_font(14), anchor="mm")


slides_data.append({
    "render": slide_clutch,
    "narration": (
        "The clutch connects and disconnects the engine from the manual transmission. "
        "When your foot is off the clutch pedal, the pressure plate clamps the clutch disc against the flywheel. "
        "This locks the engine to the transmission input shaft and power flows through. "
        "When you push the clutch pedal down, the release bearing, also called the throw-out bearing, "
        "pushes on the diaphragm spring of the pressure plate. This releases the clutch disc "
        "and disconnects the engine from the transmission so you can shift gears. "
        "The clutch disc has friction material on both sides and is splined to the input shaft. "
        "Its spring-loaded hub absorbs drivetrain shock. "
        "The pilot bearing supports the tip of the input shaft inside the crankshaft. "
        "A worn clutch disc causes slipping, especially under load. "
        "Clutch chatter on engagement can be caused by a warped flywheel, oil contamination on the disc, "
        "or a worn pressure plate. If you hear a noise in neutral that goes away when you push the pedal, "
        "suspect the input shaft bearing. If the noise appears when you push the pedal, suspect the release bearing."
    ),
})


# ============ SLIDE 3: Manual Transmission & Synchronizers ============
def slide_transmission(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Manual Transmission & Synchronizers",
              fill=TITLE_COLOR, font=get_font(28, bold=True), anchor="mm")

    # Simplified gear layout diagram
    draw.text((300, 110), "Gear Layout (Simplified)",
              fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    # Input shaft
    draw.rectangle([60, 195, 500, 210], fill=(200, 180, 100), outline=SHAFT_COLOR, width=2)
    draw.text((280, 185), "Input Shaft (from clutch)", fill=ACCENT_COLOR, font=get_font(13, bold=True), anchor="mm")

    # Output shaft (below)
    draw.rectangle([60, 310, 500, 325], fill=(180, 200, 100), outline=(120, 140, 60), width=2)
    draw.text((280, 340), "Output (Main) Shaft (to driveshaft)", fill=ACCENT_COLOR, font=get_font(13, bold=True), anchor="mm")

    # Gear pairs
    gear_positions = [
        (130, "1st", 40, 25),
        (210, "2nd", 35, 28),
        (290, "3rd", 30, 30),
        (370, "4th", 28, 32),
        (440, "5th", 25, 35),
    ]

    for gx, label, r_top, r_bot in gear_positions:
        # Input gear (top)
        draw.ellipse([gx - r_top // 2, 195 - r_top // 2, gx + r_top // 2, 210 + r_top // 2],
                     fill=(200, 230, 210), outline=ACCENT_COLOR, width=2)
        # Output gear (bottom)
        draw.ellipse([gx - r_bot // 2, 310 - r_bot // 2, gx + r_bot // 2, 325 + r_bot // 2],
                     fill=(230, 240, 200), outline=(120, 140, 60), width=2)
        # Mesh line
        draw.line([(gx, 210 + r_top // 2), (gx, 310 - r_bot // 2)],
                  fill=METAL_COLOR, width=1)
        draw.text((gx, 270), label, fill=TEXT_COLOR, font=get_font(13, bold=True), anchor="mm")

    # Divider
    draw.line([(540, 100), (540, 520)], fill=(200, 200, 200), width=2)

    # Right side: Synchronizer explanation
    draw.text((900, 110), "How Synchronizers Work", fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    # Synchronizer ring diagram (simplified)
    sync_cx, sync_cy = 900, 230
    # Outer hub/sleeve
    draw.ellipse([sync_cx - 55, sync_cy - 55, sync_cx + 55, sync_cy + 55],
                 outline=GEAR_COLOR, width=3, fill=(230, 230, 230))
    draw.text((sync_cx, sync_cy - 35), "Sleeve", fill=GEAR_COLOR, font=get_font(12, bold=True), anchor="mm")
    # Blocking ring
    draw.ellipse([sync_cx - 38, sync_cy - 38, sync_cx + 38, sync_cy + 38],
                 outline=ORANGE, width=3, fill=(255, 240, 200))
    draw.text((sync_cx, sync_cy - 10), "Blocking", fill=ORANGE, font=get_font(11, bold=True), anchor="mm")
    draw.text((sync_cx, sync_cy + 5), "Ring", fill=ORANGE, font=get_font(11, bold=True), anchor="mm")
    # Hub
    draw.ellipse([sync_cx - 20, sync_cy - 20, sync_cx + 20, sync_cy + 20],
                 fill=(200, 220, 255), outline=BLUE, width=2)
    draw.text((sync_cx, sync_cy + 25), "Hub", fill=BLUE, font=get_font(11, bold=True), anchor="mm")

    # Explanation points
    y = 305
    points = [
        "1. Sleeve slides toward the gear",
        "2. Blocking ring contacts gear cone",
        "3. Friction matches shaft speeds",
        "4. Once synchronized, sleeve locks gear",
        "5. Worn blockers = gear clash/grinding",
    ]
    for pt in points:
        draw.text((600, y), pt, fill=TEXT_COLOR, font=get_font(14))
        y += 24

    # Transaxle note
    draw.rectangle([560, 450, WIDTH - 60, 520], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR)
    draw.text((780, 465),
              "Transaxle = Transmission + Differential in one unit (FWD)",
              fill=ACCENT_COLOR, font=get_font(15, bold=True), anchor="mm")
    draw.text((780, 488),
              "Same gears and synchros, but output goes to half-shafts",
              fill=TEXT_COLOR, font=get_font(14), anchor="mm")
    draw.text((780, 506),
              "instead of a driveshaft. Common in front-wheel drive vehicles.",
              fill=TEXT_COLOR, font=get_font(14), anchor="mm")


slides_data.append({
    "render": slide_transmission,
    "narration": (
        "A manual transmission uses gear pairs on two shafts to create different speed ratios. "
        "The input shaft connects to the clutch and receives engine power. "
        "The output shaft, also called the main shaft, sends power to the driveshaft or differential. "
        "First gear uses a small input gear driving a large output gear for maximum torque multiplication. "
        "Higher gears use progressively closer ratios until fourth or fifth gear may be a one-to-one or overdrive ratio. "
        "Synchronizers are what let you shift smoothly without grinding. "
        "The blocking ring, sometimes called a synchro ring, has a cone-shaped friction surface. "
        "When you move the shift lever, the sleeve slides toward the gear. "
        "The blocking ring contacts the gear's cone and friction brings the speeds together. "
        "Once the speeds match, the sleeve slides over and locks the gear to the shaft. "
        "If the blocking rings are worn, you'll get gear clash or grinding during shifts. "
        "Brass filings in the transmission fluid are a sign of worn synchronizer rings. "
        "A transaxle combines the transmission and differential in one housing for front-wheel drive vehicles."
    ),
})


# ============ SLIDE 4: Drive Shafts and CV Joints ============
def slide_driveshaft(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Drive Shafts, U-Joints & CV Joints",
              fill=TITLE_COLOR, font=get_font(28, bold=True), anchor="mm")

    # RWD Driveshaft diagram (top half)
    draw.text((350, 110), "Rear-Wheel Drive: Driveshaft with U-Joints",
              fill=ACCENT_COLOR, font=get_font(18, bold=True), anchor="mm")

    # Transmission box
    draw.rectangle([60, 160, 160, 210], fill=(200, 220, 210), outline=ACCENT_COLOR, width=2)
    draw.text((110, 185), "Trans", fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="mm")

    # Driveshaft
    draw.rectangle([180, 178, 480, 192], fill=(200, 200, 200), outline=METAL_COLOR, width=2)
    draw.text((330, 170), "Driveshaft", fill=TEXT_COLOR, font=get_font(13, bold=True), anchor="mm")

    # U-joints
    for ux in [175, 485]:
        draw.ellipse([ux - 12, 175, ux + 12, 195], fill=(255, 220, 150), outline=ORANGE, width=2)
        draw.text((ux, 205), "U-Joint", fill=ORANGE, font=get_font(10, bold=True), anchor="mm")

    # Rear differential
    draw.rectangle([500, 155, 600, 215], fill=(220, 230, 210), outline=ACCENT_COLOR, width=2)
    draw.text((550, 178), "Rear", fill=ACCENT_COLOR, font=get_font(13, bold=True), anchor="mm")
    draw.text((550, 195), "Diff", fill=ACCENT_COLOR, font=get_font(13, bold=True), anchor="mm")

    # Rear axles
    draw.rectangle([600, 178, 680, 192], fill=(200, 200, 200), outline=METAL_COLOR, width=1)
    draw.text((640, 170), "Axle", fill=METAL_COLOR, font=get_font(11), anchor="mm")

    # U-Joint detail (right side, top)
    draw.text((950, 110), "U-Joint Cross", fill=ACCENT_COLOR, font=get_font(16, bold=True), anchor="mm")
    uj_cx, uj_cy = 950, 175
    # Cross shape
    draw.rectangle([uj_cx - 3, uj_cy - 35, uj_cx + 3, uj_cy + 35], fill=ORANGE, outline=SHAFT_COLOR, width=1)
    draw.rectangle([uj_cx - 35, uj_cy - 3, uj_cx + 35, uj_cy + 3], fill=ORANGE, outline=SHAFT_COLOR, width=1)
    # Caps
    for (cx2, cy2) in [(uj_cx, uj_cy - 35), (uj_cx, uj_cy + 35), (uj_cx - 35, uj_cy), (uj_cx + 35, uj_cy)]:
        draw.ellipse([cx2 - 8, cy2 - 8, cx2 + 8, cy2 + 8], fill=(200, 200, 200), outline=METAL_COLOR, width=1)
    draw.text((uj_cx, uj_cy + 50), "Needle bearing caps", fill=SUBTITLE_COLOR, font=get_font(12), anchor="mm")

    # Divider line
    draw.line([(50, 240), (WIDTH - 50, 240)], fill=(200, 200, 200), width=2)

    # FWD Half-shaft diagram (bottom half)
    draw.text((350, 265), "Front-Wheel Drive: Half-Shafts with CV Joints",
              fill=ACCENT_COLOR, font=get_font(18, bold=True), anchor="mm")

    # Transaxle box (center)
    draw.rectangle([340, 310, 440, 370], fill=(200, 220, 210), outline=ACCENT_COLOR, width=2)
    draw.text((390, 330), "Trans-", fill=ACCENT_COLOR, font=get_font(13, bold=True), anchor="mm")
    draw.text((390, 348), "axle", fill=ACCENT_COLOR, font=get_font(13, bold=True), anchor="mm")

    # Left half-shaft
    draw.rectangle([120, 333, 330, 347], fill=(200, 200, 200), outline=METAL_COLOR, width=2)
    # Inner CV joint (near transaxle)
    draw.ellipse([315, 325, 345, 355], fill=(200, 255, 200), outline=GREEN, width=2)
    draw.text((330, 375), "Inner CV\n(Tripod)", fill=GREEN, font=get_font(11, bold=True), anchor="mm")
    # Outer CV joint (near wheel)
    draw.ellipse([105, 325, 135, 355], fill=(200, 220, 255), outline=BLUE, width=2)
    draw.text((120, 375), "Outer CV\n(Rzeppa)", fill=BLUE, font=get_font(11, bold=True), anchor="mm")
    # Wheel
    draw.ellipse([60, 315, 105, 365], fill=(240, 240, 240), outline=GEAR_COLOR, width=2)
    draw.text((82, 340), "W", fill=GEAR_COLOR, font=get_font(14, bold=True), anchor="mm")

    # Right half-shaft (mirror)
    draw.rectangle([450, 333, 660, 347], fill=(200, 200, 200), outline=METAL_COLOR, width=2)
    draw.ellipse([435, 325, 465, 355], fill=(200, 255, 200), outline=GREEN, width=2)
    draw.ellipse([645, 325, 675, 355], fill=(200, 220, 255), outline=BLUE, width=2)
    draw.ellipse([675, 315, 720, 365], fill=(240, 240, 240), outline=GEAR_COLOR, width=2)
    draw.text((697, 340), "W", fill=GEAR_COLOR, font=get_font(14, bold=True), anchor="mm")

    # CV joint boot note
    draw.text((390, 400), "CV Boot", fill=RED, font=get_font(14, bold=True), anchor="mm")
    draw.text((390, 418), "(protects joint & holds grease)",
              fill=SUBTITLE_COLOR, font=get_font(12), anchor="mm")

    # Key points (right side, bottom)
    draw.line([(740, 260), (740, 520)], fill=(200, 200, 200), width=2)
    draw.text((990, 265), "Key Concepts", fill=ACCENT_COLOR, font=get_font(18, bold=True), anchor="mm")

    points = [
        "\u2022 U-joints allow angle changes in RWD",
        "\u2022 Worn U-joint = clunk on accel/decel",
        "\u2022 CV joints handle angle + plunge in FWD",
        "\u2022 Outer CV: clicking noise on turns",
        "\u2022 Inner CV: vibration on acceleration",
        "\u2022 Torn boot = contamination & failure",
        "\u2022 Always check boot condition first",
        "\u2022 Measure driveshaft runout if vibration",
    ]
    y = 295
    for pt in points:
        draw.text((760, y), pt, fill=TEXT_COLOR, font=get_font(14))
        y += 26

    # Bottom tip
    draw.rectangle([80, 500, WIDTH - 80, 530], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((WIDTH // 2, 515),
              "A clicking noise when turning = worn outer CV joint. Vibration on accel = inner CV or U-joint.",
              fill=(100, 80, 0), font=get_font(15, bold=True), anchor="mm")


slides_data.append({
    "render": slide_driveshaft,
    "narration": (
        "Drive shafts transfer power from the transmission to the wheels. "
        "In rear-wheel drive vehicles, a long driveshaft with universal joints connects the transmission to the rear differential. "
        "U-joints are cross-shaped with four needle bearing caps. They allow the driveshaft to operate at an angle "
        "as the suspension moves up and down. A worn U-joint makes a clunking sound on acceleration and deceleration. "
        "In front-wheel drive vehicles, half-shafts with CV joints connect the transaxle to the front wheels. "
        "The outer CV joint, usually a Rzeppa type, handles the large steering angles at the wheel. "
        "The inner CV joint, often a tripod type, allows for plunge, meaning it can slide in and out as the suspension travels. "
        "A classic symptom of a worn outer CV joint is a clicking or popping noise when turning. "
        "A bad inner CV joint typically causes a vibration or shudder during acceleration. "
        "The CV boot is critical because it seals in the grease and keeps out dirt and water. "
        "A torn boot will quickly lead to joint failure. Always inspect boots during service."
    ),
})


# ============ SLIDE 5: Differential ============
def slide_differential(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "The Differential - Allowing Wheels to Turn at Different Speeds",
              fill=TITLE_COLOR, font=get_font(26, bold=True), anchor="mm")

    # Differential diagram
    draw.text((320, 110), "Ring & Pinion Gear Set",
              fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    diff_cx, diff_cy = 300, 310
    # Ring gear (large circle)
    ring_r = 110
    draw.ellipse([diff_cx - ring_r, diff_cy - ring_r, diff_cx + ring_r, diff_cy + ring_r],
                 outline=GEAR_COLOR, width=5)
    # Teeth on ring gear
    for i in range(30):
        angle = 2 * math.pi * i / 30
        x1 = diff_cx + ring_r * math.cos(angle)
        y1 = diff_cy + ring_r * math.sin(angle)
        x2 = diff_cx + (ring_r + 6) * math.cos(angle)
        y2 = diff_cy + (ring_r + 6) * math.sin(angle)
        draw.line([(x1, y1), (x2, y2)], fill=METAL_COLOR, width=1)

    # Case/carrier
    draw.ellipse([diff_cx - 60, diff_cy - 60, diff_cx + 60, diff_cy + 60],
                 fill=(230, 240, 230), outline=ACCENT_COLOR, width=2)
    draw.text((diff_cx, diff_cy - 35), "Case/", fill=ACCENT_COLOR, font=get_font(13, bold=True), anchor="mm")
    draw.text((diff_cx, diff_cy - 20), "Carrier", fill=ACCENT_COLOR, font=get_font(13, bold=True), anchor="mm")

    # Spider gears inside
    spider_r = 15
    draw.ellipse([diff_cx - spider_r, diff_cy - 5 - spider_r, diff_cx + spider_r, diff_cy - 5 + spider_r],
                 fill=(255, 230, 200), outline=ORANGE, width=2)
    draw.text((diff_cx, diff_cy - 5), "Spider", fill=ORANGE, font=get_font(10, bold=True), anchor="mm")

    # Side gears
    for sx in [diff_cx - 40, diff_cx + 40]:
        draw.ellipse([sx - 12, diff_cy + 10, sx + 12, diff_cy + 38],
                     fill=(220, 230, 255), outline=BLUE, width=2)
        draw.text((sx, diff_cy + 24), "Side", fill=BLUE, font=get_font(10, bold=True), anchor="mm")

    # Axle shafts going out from side gears
    draw.rectangle([diff_cx - ring_r - 60, diff_cy + 20, diff_cx - 55, diff_cy + 30],
                   fill=(200, 200, 200), outline=METAL_COLOR, width=1)
    draw.rectangle([diff_cx + 55, diff_cy + 20, diff_cx + ring_r + 60, diff_cy + 30],
                   fill=(200, 200, 200), outline=METAL_COLOR, width=1)
    draw.text((diff_cx - ring_r - 80, diff_cy + 25), "Left\nAxle", fill=METAL_COLOR, font=get_font(11), anchor="mm")
    draw.text((diff_cx + ring_r + 80, diff_cy + 25), "Right\nAxle", fill=METAL_COLOR, font=get_font(11), anchor="mm")

    # Pinion gear (coming from driveshaft)
    pinion_x, pinion_y = diff_cx, diff_cy + ring_r + 10
    draw.ellipse([pinion_x - 18, pinion_y, pinion_x + 18, pinion_y + 30],
                 fill=(220, 200, 200), outline=RED, width=2)
    draw.text((pinion_x, pinion_y + 15), "Pinion", fill=RED, font=get_font(11, bold=True), anchor="mm")
    draw.rectangle([pinion_x - 5, pinion_y + 30, pinion_x + 5, pinion_y + 60],
                   fill=(200, 200, 200), outline=METAL_COLOR, width=1)
    draw.text((pinion_x, pinion_y + 72), "From Driveshaft", fill=TEXT_COLOR, font=get_font(12, bold=True), anchor="mm")

    # Divider
    draw.line([(560, 100), (560, 520)], fill=(200, 200, 200), width=2)

    # Right side: How it works + LSD
    draw.text((890, 110), "How It Works", fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    explanations = [
        ("Open Differential", "Spider gears allow left and right\nwheels to turn at different speeds\nfor smooth cornering."),
        ("Ring & Pinion", "Changes the drive angle 90 degrees.\nGear ratio (e.g. 3.73:1) affects\ntorque and top speed."),
        ("Limited Slip (LSD)", "Clutch packs or viscous fluid limit\nspeed difference between wheels.\nBetter traction in slippery conditions."),
        ("Contact Pattern", "Checked with gear marking compound\nduring setup. Adjust pinion depth\nand backlash for proper pattern."),
    ]
    y = 145
    for title, desc in explanations:
        draw.text((580, y), title, fill=TEXT_COLOR, font=get_font(15, bold=True))
        for j, line in enumerate(desc.split("\n")):
            draw.text((595, y + 19 + j * 17), line, fill=SUBTITLE_COLOR, font=get_font(13))
        y += 80

    # Bottom box
    draw.rectangle([80, 490, WIDTH - 80, 525], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR)
    draw.text((WIDTH // 2, 500),
              "A whining noise that changes with speed = ring & pinion wear.",
              fill=ACCENT_COLOR, font=get_font(15, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 516),
              "LSD chatter on turns = wrong lubricant (needs limited-slip additive).",
              fill=TEXT_COLOR, font=get_font(14), anchor="mm")


slides_data.append({
    "render": slide_differential,
    "narration": (
        "The differential does two important jobs. First, the ring and pinion gears change the drive direction "
        "ninety degrees from the driveshaft to the axle shafts. Second, the spider gears inside the differential case "
        "allow the left and right wheels to turn at different speeds when you go around a corner. "
        "The outer wheel has to travel farther, so it turns faster. "
        "The gear ratio, like three-point-seven-three to one, determines the final drive multiplication. "
        "A higher number means more torque but lower top speed. "
        "In a standard open differential, if one wheel loses traction, all the torque goes to that spinning wheel. "
        "A limited-slip differential uses clutch packs or viscous fluid to limit the speed difference "
        "between the two wheels, sending more torque to the wheel with grip. "
        "When servicing a limited-slip differential, you must use the correct lubricant with a limited-slip additive. "
        "Without it, the clutch packs chatter on turns. "
        "During ring and pinion setup, check the tooth contact pattern with gear marking compound "
        "and adjust pinion depth and backlash until the pattern is correct."
    ),
})


# ============ SLIDE 6: Four-Wheel Drive & AWD ============
def slide_4wd(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Four-Wheel Drive & All-Wheel Drive Systems",
              fill=TITLE_COLOR, font=get_font(28, bold=True), anchor="mm")

    # 4WD system layout
    draw.text((350, 108), "Part-Time 4WD Layout",
              fill=ACCENT_COLOR, font=get_font(18, bold=True), anchor="mm")

    # Engine/trans
    draw.rectangle([50, 180, 150, 230], fill=(200, 220, 210), outline=ACCENT_COLOR, width=2)
    draw.text((100, 198), "Engine/", fill=ACCENT_COLOR, font=get_font(12, bold=True), anchor="mm")
    draw.text((100, 215), "Trans", fill=ACCENT_COLOR, font=get_font(12, bold=True), anchor="mm")

    # Transfer case
    draw.rectangle([200, 175, 320, 235], fill=(220, 235, 255), outline=BLUE, width=3)
    draw.text((260, 195), "Transfer", fill=BLUE, font=get_font(15, bold=True), anchor="mm")
    draw.text((260, 215), "Case", fill=BLUE, font=get_font(15, bold=True), anchor="mm")

    # Connection engine to t-case
    draw.rectangle([150, 198, 200, 212], fill=METAL_COLOR)

    # Front driveshaft (going up from t-case)
    draw.rectangle([255, 120, 265, 175], fill=(200, 200, 200), outline=METAL_COLOR, width=1)
    draw.text((260, 112), "Front", fill=TEXT_COLOR, font=get_font(11, bold=True), anchor="mm")
    draw.text((260, 100), "Driveshaft", fill=TEXT_COLOR, font=get_font(11), anchor="mm")

    # Front diff
    draw.rectangle([220, 70, 300, 100], fill=(220, 255, 220), outline=GREEN, width=2)
    draw.text((260, 85), "Front Diff", fill=GREEN, font=get_font(12, bold=True), anchor="mm")
    # Front axles
    draw.rectangle([140, 78, 220, 88], fill=METAL_COLOR)
    draw.rectangle([300, 78, 380, 88], fill=METAL_COLOR)
    # Wheels
    for wx in [125, 390]:
        draw.ellipse([wx - 15, 70, wx + 15, 100], fill=(240, 240, 240), outline=GEAR_COLOR, width=2)

    # Rear driveshaft
    draw.rectangle([320, 198, 480, 212], fill=(200, 200, 200), outline=METAL_COLOR, width=1)
    draw.text((400, 190), "Rear Driveshaft", fill=TEXT_COLOR, font=get_font(11, bold=True), anchor="mm")

    # Rear diff
    draw.rectangle([480, 185, 560, 225], fill=(255, 230, 230), outline=RED, width=2)
    draw.text((520, 205), "Rear Diff", fill=RED, font=get_font(12, bold=True), anchor="mm")
    # Rear axles
    draw.rectangle([560, 198, 630, 208], fill=METAL_COLOR)
    # Wheels
    for wx in [640, 480]:
        if wx == 640:
            draw.ellipse([wx - 10, 190, wx + 10, 218], fill=(240, 240, 240), outline=GEAR_COLOR, width=2)

    # Divider
    draw.line([(50, 255), (WIDTH - 50, 255)], fill=(200, 200, 200), width=2)

    # Comparison table
    draw.text((WIDTH // 2, 275), "4WD vs. AWD Comparison", fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    th_y = 300
    draw.rectangle([100, th_y, 400, th_y + 28], fill=ACCENT_COLOR)
    draw.text((250, th_y + 14), "Part-Time 4WD", fill=TITLE_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.rectangle([400, th_y, 700, th_y + 28], fill=ACCENT_COLOR)
    draw.text((550, th_y + 14), "Full-Time 4WD / AWD", fill=TITLE_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.rectangle([700, th_y, 1180, th_y + 28], fill=ACCENT_COLOR)
    draw.text((940, th_y + 14), "On-Demand AWD", fill=TITLE_COLOR, font=get_font(14, bold=True), anchor="mm")

    rows = [
        ("Driver selects 2H/4H/4L", "Always sends power to all 4", "Computer-controlled clutch"),
        ("No center diff - don't use\non dry pavement!", "Center diff splits torque\nfront/rear", "Engages rear (or front) axle\nautomatically when slip detected"),
        ("Transfer case with\nshift lever or switch", "Transfer case with\nviscous coupling or diff", "Electronic coupling or\nmulti-plate clutch"),
    ]
    y = th_y + 32
    for r4, rfull, rdemand in rows:
        h = max(len(r4.split("\n")), len(rfull.split("\n")), len(rdemand.split("\n"))) * 17 + 10
        bg = HIGHLIGHT_BG if rows.index((r4, rfull, rdemand)) % 2 == 0 else BG_COLOR
        draw.rectangle([100, y, 1180, y + h], fill=bg)
        for j, line in enumerate(r4.split("\n")):
            draw.text((110, y + 5 + j * 17), line, fill=TEXT_COLOR, font=get_font(13))
        for j, line in enumerate(rfull.split("\n")):
            draw.text((410, y + 5 + j * 17), line, fill=TEXT_COLOR, font=get_font(13))
        for j, line in enumerate(rdemand.split("\n")):
            draw.text((710, y + 5 + j * 17), line, fill=TEXT_COLOR, font=get_font(13))
        y += h + 2

    # Bottom tip
    draw.rectangle([80, 500, WIDTH - 80, 530], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((WIDTH // 2, 515),
              "Part-time 4WD on dry pavement causes drivetrain binding and can damage the transfer case.",
              fill=(100, 80, 0), font=get_font(15, bold=True), anchor="mm")


slides_data.append({
    "render": slide_4wd,
    "narration": (
        "Four-wheel drive and all-wheel drive systems deliver power to all four wheels. "
        "The transfer case is the key component. It splits power between front and rear driveshafts. "
        "Part-time four-wheel drive lets the driver select two-wheel high, four-wheel high, or four-wheel low. "
        "It does not have a center differential, so you should never use four-wheel drive on dry pavement. "
        "Without a center diff, the front and rear driveshafts are locked together, "
        "which causes binding and stress on the drivetrain during turns on dry road. "
        "Full-time four-wheel drive or AWD uses a center differential or viscous coupling "
        "to allow speed differences between front and rear. It's safe on all surfaces. "
        "On-demand AWD systems use an electronic coupling or multi-plate clutch "
        "that automatically engages when the computer detects wheel slip. "
        "Four-wheel low provides extra gear reduction through the transfer case for extreme off-road situations. "
        "Common problems include transfer case fluid leaks, worn chains or gears inside, "
        "and faulty actuators that prevent engagement. "
        "Always check fluid level and condition when diagnosing four-wheel drive complaints."
    ),
})


# ============ SLIDE 7: Common Symptoms & Diagnosis ============
def slide_symptoms(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Common Symptoms & Diagnostic Approach",
              fill=TITLE_COLOR, font=get_font(28, bold=True), anchor="mm")

    draw.text((WIDTH // 2, 110), "Symptom \u2192 Most Likely Cause",
              fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    # Table header
    th_y = 140
    draw.rectangle([80, th_y, 580, th_y + 28], fill=ACCENT_COLOR)
    draw.text((330, th_y + 14), "Symptom", fill=TITLE_COLOR, font=get_font(15, bold=True), anchor="mm")
    draw.rectangle([580, th_y, WIDTH - 80, th_y + 28], fill=ACCENT_COLOR)
    draw.text((890, th_y + 14), "Check These First", fill=TITLE_COLOR, font=get_font(15, bold=True), anchor="mm")

    rows = [
        ("Clutch slips under load", "Worn clutch disc, oil on disc, weak pressure plate"),
        ("Grinding when shifting", "Worn synchro rings, low fluid, clutch not releasing"),
        ("Clunk on acceleration/deceleration", "Worn U-joint, loose yoke, worn axle splines"),
        ("Clicking noise on turns (FWD)", "Worn outer CV joint"),
        ("Vibration on acceleration (FWD)", "Worn inner CV joint or torn boot"),
        ("Whine that changes with speed", "Ring & pinion gear wear or bearing failure"),
        ("Chatter on turns (LSD equipped)", "Wrong differential fluid, needs LSD additive"),
        ("Drivetrain binding in 4WD", "Part-time 4WD used on dry pavement"),
        ("Gear jumps out under load", "Worn detents, forks, or synchro sleeves"),
        ("Vibration at highway speed", "Driveshaft balance, U-joint angles, shaft runout"),
    ]

    y = th_y + 32
    for i, (symptom, cause) in enumerate(rows):
        bg = HIGHLIGHT_BG if i % 2 == 0 else BG_COLOR
        draw.rectangle([80, y, WIDTH - 80, y + 26], fill=bg)
        draw.text((100, y + 4), symptom, fill=TEXT_COLOR, font=get_font(13, bold=True))
        draw.text((595, y + 4), cause, fill=SUBTITLE_COLOR, font=get_font(13))
        y += 28

    # Diagnostic flow
    y += 12
    draw.rectangle([80, y, WIDTH - 80, y + 55], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((WIDTH // 2, y + 13),
              "Diagnostic Flow: Verify concern \u2192 Check fluid level & condition \u2192",
              fill=(100, 80, 0), font=get_font(15, bold=True), anchor="mm")
    draw.text((WIDTH // 2, y + 33),
              "Road test (listen & feel) \u2192 Visual inspection (boots, leaks, play) \u2192 Repair",
              fill=(100, 80, 0), font=get_font(15, bold=True), anchor="mm")


slides_data.append({
    "render": slide_symptoms,
    "narration": (
        "The A3 exam is heavily focused on matching symptoms to causes. "
        "If the clutch slips under load, think worn disc, oil contamination, or a weak pressure plate. "
        "Grinding when shifting means worn synchronizer rings, low fluid, or the clutch not fully releasing. "
        "A clunking sound on acceleration and deceleration usually points to a worn U-joint or loose splines. "
        "For front-wheel drive, clicking on turns means the outer CV joint is worn. "
        "Vibration during acceleration points to the inner CV joint. "
        "A whining noise from the rear end that changes with vehicle speed indicates ring and pinion wear. "
        "If a limited-slip differential chatters on turns, it's almost always the wrong fluid. "
        "You need fluid with a limited-slip additive. "
        "Your diagnostic approach should always start with verifying the customer concern, "
        "then check fluid level and condition, road test to hear and feel the problem, "
        "and perform a visual inspection for torn boots, fluid leaks, and excessive play."
    ),
})


# ============ SLIDE 8: Closing / Key Takeaways ============
def slide_closing(img, draw):
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=HEADER_BG)
    # Gear decoration
    cx, cy = WIDTH // 2, 100
    r = 42
    teeth = 10
    for i in range(teeth):
        angle = 2 * math.pi * i / teeth
        angle2 = 2 * math.pi * (i + 0.3) / teeth
        x1 = cx + r * math.cos(angle)
        y1 = cy + r * math.sin(angle)
        x2 = cx + r * math.cos(angle2)
        y2 = cy + r * math.sin(angle2)
        x3 = cx + (r + 11) * math.cos((angle + angle2) / 2)
        y3 = cy + (r + 11) * math.sin((angle + angle2) / 2)
        draw.polygon([(x1, y1), (x3, y3), (x2, y2)], fill=(200, 220, 210))
    draw.ellipse([cx - r, cy - r, cx + r, cy + r],
                 fill=(180, 210, 200), outline=(200, 220, 210), width=2)
    draw.ellipse([cx - 16, cy - 16, cx + 16, cy + 16], fill=HEADER_BG, outline=(200, 220, 210), width=2)

    draw.rectangle([100, 165, WIDTH - 100, 169], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 195), "A3 Key Takeaways",
              fill=(200, 240, 230), font=get_font(28), anchor="mm")
    y = 240
    takeaways = [
        "Clutch: pressure plate, disc, release bearing, flywheel, pilot bearing",
        "Synchronizers match speeds for smooth shifting",
        "Worn synchro rings = grinding; brass filings = synchro wear",
        "U-joints (RWD): clunk on accel/decel when worn",
        "CV joints (FWD): clicking on turns = outer; vibration = inner",
        "Torn CV boot leads to rapid joint failure",
        "Differential: ring & pinion, spider gears, side gears",
        "LSD chatter = wrong fluid (needs additive)",
        "Part-time 4WD: never use on dry pavement",
        "Always check fluid level and condition first",
    ]
    for t in takeaways:
        draw.text((WIDTH // 2, y), f"\u2713  {t}",
                  fill=TITLE_COLOR, font=get_font(18), anchor="mm")
        y += 32
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=DARK_GREEN)
    draw.text((WIDTH // 2, HEIGHT - 25),
              "Good luck on your ASE A3 exam!",
              fill=(255, 255, 255), font=get_font(22), anchor="mm")


slides_data.append({
    "render": slide_closing,
    "narration": (
        "Let's review the A3 key takeaways. "
        "The clutch system connects and disconnects the engine from the transmission "
        "using the pressure plate, clutch disc, release bearing, and flywheel. "
        "Synchronizers match shaft speeds for smooth, grind-free shifting. "
        "Brass filings in the fluid mean the synchro rings are wearing out. "
        "In rear-wheel drive, worn U-joints cause a clunking sound. "
        "In front-wheel drive, a clicking noise on turns means the outer CV joint is bad, "
        "and vibration on acceleration points to the inner CV joint. "
        "Always check CV boots during inspection because a torn boot leads to rapid failure. "
        "The differential uses ring and pinion gears to change direction "
        "and spider gears to allow wheel speed differences. "
        "Limited-slip differentials need the right fluid with an additive. "
        "And never use part-time four-wheel drive on dry pavement. "
        "Good luck on your ASE A3, Manual Drive Train and Axles exam. You can do this!"
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

    print(f"Raw audio duration: {total_audio_dur:.1f}s")

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
