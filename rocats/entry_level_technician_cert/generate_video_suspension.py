#!/usr/bin/env python3
"""
Generate a 2-minute PowerPoint-style slide-by-slide video for
ASE A4 - Suspension and Steering (Entry-Level Technician Certification).
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
TEMP_DIR = os.path.join(OUTPUT_DIR, "_video_tmp_suspension")
VIDEO_DIR = os.path.join(OUTPUT_DIR, "videos")
OUTPUT_FILE = os.path.join(VIDEO_DIR, "entry_level_Suspension_and_Steering_291.mp4")
WIDTH, HEIGHT = 1280, 720
FPS = 24
TARGET_DURATION = 120.0  # 2 minutes

# Voice: natural male US English
VOICE = "en-US-GuyNeural"

# Colors - green/teal theme for suspension & steering
BG_COLOR = (255, 255, 255)
HEADER_BG = (0, 105, 92)        # Teal
TITLE_COLOR = (255, 255, 255)
TEXT_COLOR = (51, 51, 51)
ACCENT_COLOR = (0, 105, 92)
BULLET_COLOR = (0, 130, 110)
SUBTITLE_COLOR = (100, 100, 100)
HIGHLIGHT_BG = (224, 242, 241)
SPRING_COLOR = (0, 150, 136)
METAL_COLOR = (120, 120, 120)
ROAD_COLOR = (80, 80, 80)
TIRE_COLOR = (50, 50, 50)
WARNING_COLOR = (200, 60, 20)
BLUE = (30, 100, 180)
ORANGE = (230, 120, 0)

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
    # Decorative steering wheel shape
    cx, cy = WIDTH // 2, 180
    r = 70
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(255, 255, 255), width=4)
    draw.ellipse([cx - 15, cy - 15, cx + 15, cy + 15], outline=(255, 255, 255), width=3)
    # Spokes
    for angle_deg in [0, 120, 240]:
        rad = math.radians(angle_deg)
        draw.line([(cx + 15 * math.cos(rad), cy + 15 * math.sin(rad)),
                    (cx + r * math.cos(rad), cy + r * math.sin(rad))],
                   fill=(255, 255, 255), width=3)
    draw.rectangle([100, 290, WIDTH - 100, 294], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 340), "ASE A4",
              fill=TITLE_COLOR, font=get_font(56, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 400), "Suspension & Steering",
              fill=(180, 230, 220), font=get_font(36), anchor="mm")
    draw.text((WIDTH // 2, 460), "Core Concepts for Entry-Level Technicians",
              fill=TITLE_COLOR, font=get_font(26), anchor="mm")
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(0, 70, 60))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "National Institute for Automotive Service Excellence",
              fill=(255, 255, 255), font=get_font(18), anchor="mm")


slides_data.append({
    "render": slide_title,
    "narration": (
        "Welcome to A4 Suspension and Steering. "
        "This test has 40 scored questions and you get 60 minutes to complete it. "
        "Suspension and steering systems control how your vehicle rides, handles, and turns. "
        "Let's break down the key concepts you need to know for the exam."
    ),
})


# ============ SLIDE 2: Steering Systems ============
def slide_steering(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "A. Steering Systems (30% - 12 Questions)",
              fill=TITLE_COLOR, font=get_font(30, bold=True), anchor="mm")

    # Rack and Pinion diagram
    draw.text((320, 110), "Rack & Pinion Steering", fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    # Steering wheel at top
    sw_cx, sw_cy = 320, 180
    sw_r = 35
    draw.ellipse([sw_cx - sw_r, sw_cy - sw_r, sw_cx + sw_r, sw_cy + sw_r],
                 outline=TIRE_COLOR, width=3)
    draw.ellipse([sw_cx - 8, sw_cy - 8, sw_cx + 8, sw_cy + 8],
                 outline=TIRE_COLOR, width=2)
    draw.text((sw_cx, sw_cy + sw_r + 15), "Steering Wheel", fill=TEXT_COLOR, font=get_font(13), anchor="mm")

    # Steering column/shaft
    draw.line([(sw_cx, sw_cy + sw_r), (sw_cx, 270)], fill=METAL_COLOR, width=4)
    draw.text((sw_cx + 40, 250), "Steering\nColumn", fill=SUBTITLE_COLOR, font=get_font(12), anchor="lm")

    # Pinion gear (small circle)
    pg_cx, pg_cy = sw_cx, 285
    draw.ellipse([pg_cx - 14, pg_cy - 14, pg_cx + 14, pg_cy + 14],
                 fill=(200, 200, 200), outline=METAL_COLOR, width=2)
    draw.text((pg_cx, pg_cy), "P", fill=TEXT_COLOR, font=get_font(14, bold=True), anchor="mm")

    # Rack (horizontal bar)
    rack_y = 300
    draw.rectangle([120, rack_y, 520, rack_y + 16], fill=(220, 220, 220), outline=METAL_COLOR, width=2)
    # Teeth on rack
    for x in range(200, 440, 15):
        draw.line([(x, rack_y), (x, rack_y - 6)], fill=METAL_COLOR, width=1)
    draw.text((320, rack_y + 30), "Rack", fill=TEXT_COLOR, font=get_font(14, bold=True), anchor="mm")

    # Tie rods going to wheels
    # Left tie rod
    draw.line([(120, rack_y + 8), (60, 360)], fill=METAL_COLOR, width=3)
    # Left wheel (simplified)
    draw.ellipse([30, 350, 90, 400], outline=TIRE_COLOR, width=3, fill=(240, 240, 240))
    draw.text((60, 375), "L", fill=TEXT_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.text((60, 410), "Tie Rod", fill=SUBTITLE_COLOR, font=get_font(11), anchor="mm")

    # Right tie rod
    draw.line([(520, rack_y + 8), (580, 360)], fill=METAL_COLOR, width=3)
    # Right wheel
    draw.ellipse([550, 350, 610, 400], outline=TIRE_COLOR, width=3, fill=(240, 240, 240))
    draw.text((580, 375), "R", fill=TEXT_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.text((580, 410), "Tie Rod", fill=SUBTITLE_COLOR, font=get_font(11), anchor="mm")

    # Arrows showing movement
    draw.text((320, rack_y + 55), "\u2190 Rack moves left/right to turn wheels \u2192",
              fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="mm")

    # Divider
    draw.line([(640, 100), (640, 430)], fill=(200, 200, 200), width=2)

    # Right side: Power Steering types
    draw.text((960, 110), "Power Steering Types", fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    # Hydraulic PS
    hps_x, hps_y = 740, 150
    draw.rectangle([hps_x, hps_y, hps_x + 200, hps_y + 80], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR, width=2)
    draw.text((hps_x + 100, hps_y + 20), "Hydraulic (HPS)", fill=ACCENT_COLOR, font=get_font(16, bold=True), anchor="mm")
    draw.text((hps_x + 100, hps_y + 42), "Belt-driven pump", fill=TEXT_COLOR, font=get_font(14), anchor="mm")
    draw.text((hps_x + 100, hps_y + 60), "Fluid pressure assists", fill=TEXT_COLOR, font=get_font(14), anchor="mm")

    # EPS
    eps_x, eps_y = 740, 250
    draw.rectangle([eps_x, eps_y, eps_x + 200, eps_y + 80], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR, width=2)
    draw.text((eps_x + 100, eps_y + 20), "Electric (EPS)", fill=ACCENT_COLOR, font=get_font(16, bold=True), anchor="mm")
    draw.text((eps_x + 100, eps_y + 42), "Electric motor assist", fill=TEXT_COLOR, font=get_font(14), anchor="mm")
    draw.text((eps_x + 100, eps_y + 60), "More fuel efficient", fill=TEXT_COLOR, font=get_font(14), anchor="mm")

    # Arrow between
    draw.text((hps_x + 220, hps_y + 40), "Traditional", fill=SUBTITLE_COLOR, font=get_font(12), anchor="lm")
    draw.text((eps_x + 220, eps_y + 40), "Modern", fill=BLUE, font=get_font(12, bold=True), anchor="lm")

    # Key points at bottom
    y = 360
    for point in [
        "\u2022 Check PS fluid level, condition, and type",
        "\u2022 Inspect pump belts, hoses, and fittings",
        "\u2022 Diagnose: noise, binding, vibration, leaks",
        "\u2022 EPS uses torque sensor + control module",
    ]:
        draw.text((680, y), point, fill=TEXT_COLOR, font=get_font(16))
        y += 26

    # Bottom tip
    draw.rectangle([80, 450, WIDTH - 80, 510], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((WIDTH // 2, 470),
              "Steering Systems = 30% of the A4 test. Know rack & pinion and power steering!",
              fill=(100, 80, 0), font=get_font(18, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 495),
              "Diagnose steering pull, freeplay, effort concerns, and fluid leaks.",
              fill=(100, 80, 0), font=get_font(16), anchor="mm")


slides_data.append({
    "render": slide_steering,
    "narration": (
        "Steering Systems make up 30 percent of the test with 12 questions. "
        "The most common steering system today is rack and pinion. "
        "When you turn the steering wheel, the steering column rotates a pinion gear. "
        "That pinion meshes with a flat rack, pushing it left or right. "
        "Tie rods connect the rack to the steering knuckles, turning the front wheels. "
        "For power assist, older vehicles use hydraulic power steering with a belt-driven pump. "
        "Newer vehicles use Electric Power Steering, or EPS, which uses an electric motor controlled by a module. "
        "EPS is more fuel-efficient because it only uses energy when you actually turn. "
        "Know how to diagnose steering pull, freeplay, binding, and fluid leaks."
    ),
})


# ============ SLIDE 3: Suspension Systems ============
def slide_suspension(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "B. Suspension Systems (30% - 12 Questions)",
              fill=TITLE_COLOR, font=get_font(30, bold=True), anchor="mm")

    # MacPherson Strut diagram (left side)
    draw.text((300, 110), "MacPherson Strut", fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    # Strut assembly
    strut_x = 250
    # Strut tower mount (top)
    draw.rectangle([strut_x + 10, 150, strut_x + 70, 170], fill=(180, 180, 180), outline=METAL_COLOR, width=2)
    draw.text((strut_x + 40, 160), "Mount", fill=TEXT_COLOR, font=get_font(11), anchor="mm")

    # Spring (coil representation)
    spring_top = 175
    spring_bot = 290
    spring_cx = strut_x + 40
    num_coils = 7
    for i in range(num_coils):
        y_pos = spring_top + i * (spring_bot - spring_top) / num_coils
        y_next = spring_top + (i + 1) * (spring_bot - spring_top) / num_coils
        if i % 2 == 0:
            draw.line([(spring_cx - 25, y_pos), (spring_cx + 25, y_next)],
                      fill=SPRING_COLOR, width=3)
        else:
            draw.line([(spring_cx + 25, y_pos), (spring_cx - 25, y_next)],
                      fill=SPRING_COLOR, width=3)

    # Shock absorber inside spring
    draw.rectangle([strut_x + 30, 180, strut_x + 50, 310], fill=(160, 160, 160), outline=METAL_COLOR, width=2)
    draw.text((strut_x + 40, 245), "Strut", fill=(255, 255, 255), font=get_font(11, bold=True), anchor="mm")

    # Steering knuckle at bottom
    draw.rectangle([strut_x + 15, 310, strut_x + 65, 345], fill=(200, 200, 200), outline=METAL_COLOR, width=2)
    draw.text((strut_x + 40, 327), "Knuckle", fill=TEXT_COLOR, font=get_font(11), anchor="mm")

    # Wheel at bottom
    draw.ellipse([strut_x + 5, 345, strut_x + 75, 400], outline=TIRE_COLOR, width=3, fill=(230, 230, 230))
    draw.text((strut_x + 40, 372), "Wheel", fill=TEXT_COLOR, font=get_font(12), anchor="mm")

    # Lower control arm
    draw.line([(strut_x - 40, 340), (strut_x + 25, 340)], fill=METAL_COLOR, width=4)
    draw.ellipse([strut_x - 50, 334, strut_x - 34, 348], fill=ORANGE, outline=METAL_COLOR, width=1)
    draw.text((strut_x - 65, 360), "Ball\nJoint", fill=ORANGE, font=get_font(11, bold=True), anchor="mm")

    # Frame connection
    draw.line([(strut_x - 40, 340), (strut_x - 80, 300)], fill=METAL_COLOR, width=4)
    draw.text((strut_x - 95, 280), "Lower\nControl\nArm", fill=SUBTITLE_COLOR, font=get_font(11), anchor="mm")

    # Labels
    draw.text((strut_x + 95, 235), "Coil\nSpring", fill=SPRING_COLOR, font=get_font(13, bold=True), anchor="lm")
    draw.line([(strut_x + 65, 240), (strut_x + 90, 240)], fill=SPRING_COLOR, width=1)

    # Divider
    draw.line([(550, 100), (550, 430)], fill=(200, 200, 200), width=2)

    # Right side: Key suspension components
    draw.text((900, 110), "Key Components", fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    components = [
        ("Coil Springs", "Support vehicle weight, absorb bumps"),
        ("Shock Absorbers", "Control spring oscillation (damping)"),
        ("Struts", "Combine shock + spring + mount"),
        ("Ball Joints", "Pivot points for steering knuckle"),
        ("Control Arms", "Connect knuckle to frame"),
        ("Stabilizer Bar", "Reduces body roll in turns"),
        ("Bushings", "Rubber mounts reduce vibration"),
    ]
    y = 145
    for name, desc in components:
        draw.text((600, y), "\u2022", fill=BULLET_COLOR, font=get_font(16))
        draw.text((620, y), name, fill=TEXT_COLOR, font=get_font(16, bold=True))
        draw.text((620, y + 20), desc, fill=SUBTITLE_COLOR, font=get_font(14))
        y += 42

    # Bottom box
    draw.rectangle([80, 450, WIDTH - 80, 510], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR)
    draw.text((WIDTH // 2, 468),
              "Springs support the weight. Shocks/struts control the bounce.",
              fill=ACCENT_COLOR, font=get_font(18, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 492),
              "Worn ball joints and bushings are common causes of noise and poor handling.",
              fill=TEXT_COLOR, font=get_font(16), anchor="mm")


slides_data.append({
    "render": slide_suspension,
    "narration": (
        "Suspension Systems are also 30 percent with 12 questions. "
        "The MacPherson strut is the most common front suspension design. "
        "It combines a coil spring, shock absorber, and strut mount into one assembly. "
        "The strut connects to the steering knuckle at the bottom and the strut tower at the top. "
        "A lower control arm with a ball joint provides the second pivot point. "
        "Springs support the vehicle weight and absorb road impacts. "
        "Shock absorbers control the spring's bouncing motion through damping. "
        "Ball joints are critical pivot points. A worn ball joint causes clunking noises and loose steering. "
        "The stabilizer bar, also called a sway bar, connects both sides of the suspension "
        "to reduce body roll during turns."
    ),
})


# ============ SLIDE 4: Wheel Alignment ============
def slide_alignment(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "C. Wheel Alignment (28% - 11 Questions)",
              fill=TITLE_COLOR, font=get_font(30, bold=True), anchor="mm")

    # --- CAMBER (left) ---
    draw.text((200, 110), "Camber", fill=ACCENT_COLOR, font=get_font(24, bold=True), anchor="mm")

    # Vertical reference line
    cam_cx, cam_cy = 200, 280
    draw.line([(cam_cx, 150), (cam_cx, 380)], fill=(200, 200, 200), width=1)
    draw.text((cam_cx, 145), "\u2193 Vertical", fill=SUBTITLE_COLOR, font=get_font(11), anchor="mb")

    # Tire tilted (positive camber)
    tire_w, tire_h = 30, 100
    # Draw a tilted tire - approximate with polygon
    tilt = 12  # pixels offset for tilt
    points = [
        (cam_cx - tire_w // 2 + tilt, cam_cy - tire_h // 2),
        (cam_cx + tire_w // 2 + tilt, cam_cy - tire_h // 2),
        (cam_cx + tire_w // 2 - tilt, cam_cy + tire_h // 2),
        (cam_cx - tire_w // 2 - tilt, cam_cy + tire_h // 2),
    ]
    draw.polygon(points, fill=(220, 220, 220), outline=TIRE_COLOR, width=2)

    # Angle arc
    draw.text((cam_cx + 50, cam_cy - 30), "+", fill=WARNING_COLOR, font=get_font(20, bold=True), anchor="mm")
    draw.text((cam_cx - 50, cam_cy - 30), "-", fill=BLUE, font=get_font(20, bold=True), anchor="mm")

    # Road line
    draw.line([(cam_cx - 70, cam_cy + 55), (cam_cx + 70, cam_cy + 55)], fill=ROAD_COLOR, width=3)

    draw.text((cam_cx, 395), "Inward/outward tilt\nof wheel (front view)",
              fill=TEXT_COLOR, font=get_font(14), anchor="mm")

    # --- CASTER (center) ---
    draw.text((640, 110), "Caster", fill=ACCENT_COLOR, font=get_font(24, bold=True), anchor="mm")

    # Vertical reference
    cas_cx, cas_cy = 640, 280
    draw.line([(cas_cx, 150), (cas_cx, 380)], fill=(200, 200, 200), width=1)

    # Steering axis (tilted line)
    draw.line([(cas_cx + 20, 160), (cas_cx - 10, 365)], fill=WARNING_COLOR, width=3)
    draw.text((cas_cx + 35, 180), "Steering\nAxis", fill=WARNING_COLOR, font=get_font(12), anchor="lm")

    # Tire (side view - rectangle)
    draw.rectangle([cas_cx - 35, cas_cy - 40, cas_cx + 35, cas_cy + 40],
                   fill=(220, 220, 220), outline=TIRE_COLOR, width=2)

    # Direction arrow
    draw.line([(cas_cx - 60, cas_cy + 55), (cas_cx + 60, cas_cy + 55)], fill=ROAD_COLOR, width=3)
    draw.polygon([(cas_cx + 50, cas_cy - 60), (cas_cx + 70, cas_cy - 50), (cas_cx + 50, cas_cy - 40)],
                 fill=ACCENT_COLOR)
    draw.text((cas_cx + 80, cas_cy - 50), "FWD", fill=ACCENT_COLOR, font=get_font(12, bold=True), anchor="lm")

    # Positive caster label
    draw.text((cas_cx, 395), "Forward/rearward tilt\nof steering axis (side view)",
              fill=TEXT_COLOR, font=get_font(14), anchor="mm")

    # --- TOE (right) ---
    draw.text((1060, 110), "Toe", fill=ACCENT_COLOR, font=get_font(24, bold=True), anchor="mm")

    # Top-down view of two tires
    toe_cx, toe_cy = 1060, 265
    # Left tire
    draw.rectangle([toe_cx - 60, toe_cy - 80, toe_cx - 35, toe_cy + 80],
                   fill=(220, 220, 220), outline=TIRE_COLOR, width=2)
    # Right tire
    draw.rectangle([toe_cx + 35, toe_cy - 80, toe_cx + 60, toe_cy + 80],
                   fill=(220, 220, 220), outline=TIRE_COLOR, width=2)

    # Toe-in lines (front edges closer)
    draw.line([(toe_cx - 45, toe_cy - 80), (toe_cx - 40, toe_cy - 100)], fill=WARNING_COLOR, width=2)
    draw.line([(toe_cx + 45, toe_cy - 80), (toe_cx + 40, toe_cy - 100)], fill=WARNING_COLOR, width=2)
    draw.text((toe_cx, toe_cy - 110), "Toe-In", fill=WARNING_COLOR, font=get_font(14, bold=True), anchor="mm")

    # Arrows showing toe-in
    draw.line([(toe_cx - 25, toe_cy - 90), (toe_cx - 5, toe_cy - 90)], fill=WARNING_COLOR, width=2)
    draw.polygon([(toe_cx - 8, toe_cy - 95), (toe_cx - 2, toe_cy - 90), (toe_cx - 8, toe_cy - 85)], fill=WARNING_COLOR)
    draw.line([(toe_cx + 25, toe_cy - 90), (toe_cx + 5, toe_cy - 90)], fill=WARNING_COLOR, width=2)
    draw.polygon([(toe_cx + 8, toe_cy - 95), (toe_cx + 2, toe_cy - 90), (toe_cx + 8, toe_cy - 85)], fill=WARNING_COLOR)

    # Front label
    draw.polygon([(toe_cx, toe_cy - 130), (toe_cx - 8, toe_cy - 118), (toe_cx + 8, toe_cy - 118)],
                 fill=ACCENT_COLOR)
    draw.text((toe_cx, toe_cy - 142), "FRONT", fill=ACCENT_COLOR, font=get_font(12, bold=True), anchor="mm")

    # Axle line
    draw.line([(toe_cx - 35, toe_cy), (toe_cx + 35, toe_cy)], fill=METAL_COLOR, width=2)

    draw.text((toe_cx, 395), "Toe = direction tires\npoint (top view)",
              fill=TEXT_COLOR, font=get_font(14), anchor="mm")

    # Bottom comparison box
    draw.rectangle([80, 430, WIDTH - 80, 510], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR)
    draw.text((WIDTH // 2, 445),
              "The Three Primary Alignment Angles:",
              fill=ACCENT_COLOR, font=get_font(18, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 470),
              "Camber = tire tilt (front view)  |  Caster = steering axis tilt (side view)  |  Toe = tire direction (top view)",
              fill=TEXT_COLOR, font=get_font(16), anchor="mm")
    draw.text((WIDTH // 2, 495),
              "Incorrect alignment causes uneven tire wear, pulling, and poor handling.",
              fill=SUBTITLE_COLOR, font=get_font(15), anchor="mm")


slides_data.append({
    "render": slide_alignment,
    "narration": (
        "Wheel alignment is 28 percent of the test with 11 questions. "
        "There are three primary alignment angles you must understand. "
        "Camber is the inward or outward tilt of the tire when viewed from the front. "
        "Positive camber tilts the top of the tire outward. Negative camber tilts it inward. "
        "Incorrect camber causes wear on one edge of the tire. "
        "Caster is the forward or rearward tilt of the steering axis when viewed from the side. "
        "Positive caster tilts the axis rearward and helps the steering wheel return to center. "
        "Toe is the direction the tires point when viewed from above. "
        "Toe-in means the fronts of the tires point toward each other. "
        "Incorrect toe is the fastest way to wear out tires. "
        "Know all three angles, what they affect, and how to adjust them."
    ),
})


# ============ SLIDE 5: Tire Wear Patterns ============
def slide_tire_wear(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "D. Wheel & Tire Service (12%) + Tire Wear Patterns",
              fill=TITLE_COLOR, font=get_font(28, bold=True), anchor="mm")

    # Draw tire wear pattern diagrams
    tire_y = 140
    tire_w = 160
    tire_h = 200
    gap = 30
    start_x = 80

    patterns = [
        ("Center Wear", "Over-inflation", [(0.35, 0.65)]),
        ("Edge Wear", "Under-inflation", [(0.0, 0.2), (0.8, 1.0)]),
        ("One-Side", "Camber issue", [(0.0, 0.3)]),
        ("Feathering", "Toe issue", None),
    ]

    for i, (title, cause, wear_zones) in enumerate(patterns):
        x = start_x + i * (tire_w + gap)
        # Tire outline
        draw.rounded_rectangle([x, tire_y, x + tire_w, tire_y + tire_h],
                               radius=20, outline=TIRE_COLOR, width=2, fill=(230, 230, 230))

        # Tread lines
        for ty in range(tire_y + 25, tire_y + tire_h - 25, 20):
            draw.line([(x + 20, ty), (x + tire_w - 20, ty)], fill=(180, 180, 180), width=1)

        # Wear zone (darker area)
        if wear_zones:
            for (start_pct, end_pct) in wear_zones:
                wx1 = x + int(tire_w * start_pct)
                wx2 = x + int(tire_w * end_pct)
                draw.rectangle([max(wx1, x + 5), tire_y + 15, min(wx2, x + tire_w - 5), tire_y + tire_h - 15],
                               fill=(160, 80, 80, 128))
                # Worn area indicator
                for ty in range(tire_y + 20, tire_y + tire_h - 20, 8):
                    draw.line([(max(wx1 + 5, x + 8), ty), (min(wx2 - 5, x + tire_w - 8), ty)],
                              fill=WARNING_COLOR, width=1)
        else:
            # Feathering pattern - diagonal lines
            for ty in range(tire_y + 20, tire_y + tire_h - 20, 12):
                draw.line([(x + 20, ty), (x + tire_w - 20, ty + 6)], fill=WARNING_COLOR, width=1)

        # Labels
        draw.text((x + tire_w // 2, tire_y + tire_h + 15), title,
                  fill=TEXT_COLOR, font=get_font(16, bold=True), anchor="mm")
        draw.text((x + tire_w // 2, tire_y + tire_h + 35), cause,
                  fill=WARNING_COLOR, font=get_font(14, bold=True), anchor="mm")

    # Right side: Tire service info
    info_y = 410
    draw.rectangle([80, info_y, WIDTH - 80, info_y + 30], fill=ACCENT_COLOR)
    draw.text((WIDTH // 2, info_y + 15), "Wheel & Tire Service Essentials",
              fill=TITLE_COLOR, font=get_font(18, bold=True), anchor="mm")

    y = info_y + 40
    items = [
        "\u2022 TPMS: Direct (sensors in wheel) vs. Indirect (uses ABS sensors)",
        "\u2022 Tire rotation: Follow manufacturer's recommended pattern",
        "\u2022 Wheel balance: Static (up/down) vs. Dynamic (side-to-side)",
        "\u2022 Diagnose vibration, shimmy, and pull problems from tire/wheel issues",
    ]
    for item in items:
        draw.text((100, y), item, fill=TEXT_COLOR, font=get_font(16))
        y += 26


slides_data.append({
    "render": slide_tire_wear,
    "narration": (
        "Wheel and Tire Service is 12 percent with 5 questions. "
        "Tire wear patterns tell you a lot about alignment and inflation problems. "
        "Center wear means the tire is over-inflated, so the middle wears faster. "
        "Edge wear on both sides means under-inflation, the edges carry more load. "
        "Wear on one side only points to a camber problem. "
        "Feathering, where the tread feels smooth one way and rough the other, indicates a toe problem. "
        "Know the difference between direct and indirect tire pressure monitoring systems, TPMS. "
        "Direct TPMS has sensors inside each wheel. Indirect TPMS uses ABS wheel speed sensors "
        "to detect a low tire by its faster rotation. "
        "Also understand wheel balancing and proper tire rotation patterns."
    ),
})


# ============ SLIDE 6: Diagnostic Tips ============
def slide_diagnostics(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Common Symptoms & Diagnostic Flow",
              fill=TITLE_COLOR, font=get_font(30, bold=True), anchor="mm")

    # Symptom -> Cause table
    draw.text((WIDTH // 2, 110), "Symptom \u2192 Likely Cause",
              fill=ACCENT_COLOR, font=get_font(24, bold=True), anchor="mm")

    # Table header
    th_y = 140
    draw.rectangle([80, th_y, 620, th_y + 30], fill=ACCENT_COLOR)
    draw.text((200, th_y + 15), "Symptom", fill=TITLE_COLOR, font=get_font(16, bold=True), anchor="mm")
    draw.rectangle([620, th_y, WIDTH - 80, th_y + 30], fill=ACCENT_COLOR)
    draw.text((860, th_y + 15), "Check These First", fill=TITLE_COLOR, font=get_font(16, bold=True), anchor="mm")

    rows = [
        ("Vehicle pulls to one side", "Camber, caster, tire pressure, brakes"),
        ("Steering wheel vibration", "Tire balance, worn tie rods, runout"),
        ("Wandering / drifting", "Toe setting, worn steering components"),
        ("Clunking over bumps", "Ball joints, stabilizer links, bushings"),
        ("Hard steering", "PS fluid, pump, belt, EPS module"),
        ("Excessive body roll", "Worn stabilizer bar or links"),
        ("Front end dives on braking", "Worn struts or shock absorbers"),
        ("Uneven tire wear", "Alignment angles (camber, toe)"),
    ]

    y = th_y + 35
    for i, (symptom, cause) in enumerate(rows):
        bg = HIGHLIGHT_BG if i % 2 == 0 else BG_COLOR
        draw.rectangle([80, y, WIDTH - 80, y + 28], fill=bg)
        draw.text((100, y + 5), symptom, fill=TEXT_COLOR, font=get_font(15, bold=True))
        draw.text((640, y + 5), cause, fill=SUBTITLE_COLOR, font=get_font(15))
        y += 30

    # Diagnostic flow at bottom
    y += 15
    draw.rectangle([80, y, WIDTH - 80, y + 60], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((WIDTH // 2, y + 15),
              "Diagnostic Flow: Verify complaint \u2192 Visual inspect \u2192 Road test \u2192",
              fill=(100, 80, 0), font=get_font(16, bold=True), anchor="mm")
    draw.text((WIDTH // 2, y + 40),
              "Measure & test \u2192 Compare to specs \u2192 Repair & verify",
              fill=(100, 80, 0), font=get_font(16, bold=True), anchor="mm")


slides_data.append({
    "render": slide_diagnostics,
    "narration": (
        "Most A4 questions describe a symptom and ask you to identify the cause. "
        "If a vehicle pulls to one side, check camber, caster, tire pressure, and brakes. "
        "Steering wheel vibration at highway speed usually points to tire balance or worn tie rod ends. "
        "Clunking noises over bumps often mean worn ball joints, stabilizer links, or bushings. "
        "Hard steering? Check power steering fluid, the pump, belt, or on newer vehicles, the EPS module. "
        "Front end diving during braking means the struts are worn and not controlling the weight transfer. "
        "And always remember: uneven tire wear is usually caused by incorrect alignment angles. "
        "Follow a systematic approach: verify the complaint, visually inspect, road test, measure, "
        "compare to manufacturer specs, repair, and verify the fix."
    ),
})


# ============ SLIDE 7: Closing ============
def slide_closing(img, draw):
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=HEADER_BG)
    # Steering wheel decoration
    cx, cy = WIDTH // 2, 120
    r = 50
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(255, 255, 255), width=3)
    draw.ellipse([cx - 10, cy - 10, cx + 10, cy + 10], outline=(255, 255, 255), width=2)
    for angle_deg in [0, 120, 240]:
        rad = math.radians(angle_deg)
        draw.line([(cx + 10 * math.cos(rad), cy + 10 * math.sin(rad)),
                    (cx + r * math.cos(rad), cy + r * math.sin(rad))],
                   fill=(255, 255, 255), width=2)

    draw.rectangle([100, 195, WIDTH - 100, 199], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 225), "A4 Key Takeaways",
              fill=(180, 230, 220), font=get_font(28), anchor="mm")
    y = 270
    for t in [
        "Rack & pinion is the standard steering system today",
        "Know hydraulic vs. electric power steering operation",
        "Springs support weight; shocks/struts control bounce",
        "Ball joints and bushings are top wear items",
        "Three alignment angles: Camber, Caster, and Toe",
        "Tire wear patterns reveal alignment & inflation issues",
        "Match symptoms to causes - that's how questions work",
    ]:
        draw.text((WIDTH // 2, y), f"\u2713  {t}",
                  fill=TITLE_COLOR, font=get_font(21), anchor="mm")
        y += 36
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(0, 70, 60))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "Good luck on your ASE A4 exam!",
              fill=(255, 255, 255), font=get_font(22), anchor="mm")


slides_data.append({
    "render": slide_closing,
    "narration": (
        "Let's review the key takeaways for A4. "
        "Rack and pinion is the standard steering system. "
        "Understand how both hydraulic and electric power steering work. "
        "Springs support the vehicle weight, while shocks and struts control the bounce. "
        "Ball joints and bushings are the most common wear items in the suspension. "
        "Know the three primary alignment angles: camber, caster, and toe. "
        "Tire wear patterns are your diagnostic clues for alignment and inflation problems. "
        "And remember, most test questions give you a symptom and ask for the cause. "
        "Good luck on your A4 Suspension and Steering exam. You've got this!"
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
