#!/usr/bin/env python3
"""
Generate a 2-minute PowerPoint-style slide-by-slide video for
ASE A2 - Automatic Transmission/Transaxle (Entry-Level Technician Certification).
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
TEMP_DIR = os.path.join(OUTPUT_DIR, "_video_tmp_transmission")
VIDEO_DIR = os.path.join(OUTPUT_DIR, "videos")
OUTPUT_FILE = os.path.join(VIDEO_DIR, "entry_level_Automatic_Transmission_Transaxle_647.mp4")
WIDTH, HEIGHT = 1280, 720
FPS = 24
TARGET_DURATION = 120.0  # 2 minutes

# Voice: natural male US English
VOICE = "en-US-GuyNeural"

# Colors - deep red/maroon theme for transmission & drivetrain
BG_COLOR = (255, 255, 255)
HEADER_BG = (139, 0, 0)          # Dark red
TITLE_COLOR = (255, 255, 255)
TEXT_COLOR = (51, 51, 51)
ACCENT_COLOR = (139, 0, 0)
BULLET_COLOR = (170, 30, 30)
SUBTITLE_COLOR = (100, 100, 100)
HIGHLIGHT_BG = (255, 240, 240)
METAL_COLOR = (120, 120, 120)
GEAR_COLOR = (80, 80, 80)
FLUID_COLOR = (180, 30, 30)
HOUSING_COLOR = (160, 160, 160)
BLUE = (30, 100, 180)
GREEN = (0, 130, 60)
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
    # Decorative gear icon
    cx, cy = WIDTH // 2, 160
    r_outer = 65
    r_inner = 40
    teeth = 10
    # Draw gear teeth
    for i in range(teeth):
        angle = 2 * math.pi * i / teeth
        angle2 = 2 * math.pi * (i + 0.35) / teeth
        x1 = cx + r_outer * math.cos(angle)
        y1 = cy + r_outer * math.sin(angle)
        x2 = cx + r_outer * math.cos(angle2)
        y2 = cy + r_outer * math.sin(angle2)
        x3 = cx + (r_outer + 15) * math.cos((angle + angle2) / 2)
        y3 = cy + (r_outer + 15) * math.sin((angle + angle2) / 2)
        draw.polygon([(x1, y1), (x3, y3), (x2, y2)], fill=(200, 200, 200))
    draw.ellipse([cx - r_outer, cy - r_outer, cx + r_outer, cy + r_outer],
                 fill=(180, 180, 180), outline=(200, 200, 200), width=3)
    draw.ellipse([cx - r_inner, cy - r_inner, cx + r_inner, cy + r_inner],
                 fill=HEADER_BG, outline=(200, 200, 200), width=2)
    draw.text((cx, cy), "A2", fill=TITLE_COLOR, font=get_font(28, bold=True), anchor="mm")

    draw.rectangle([100, 260, WIDTH - 100, 264], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 310), "Automatic Transmission",
              fill=TITLE_COLOR, font=get_font(48, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 370), "& Transaxle",
              fill=(255, 200, 200), font=get_font(36), anchor="mm")
    draw.text((WIDTH // 2, 430), "Core Concepts for Entry-Level Technicians",
              fill=TITLE_COLOR, font=get_font(26), anchor="mm")
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(100, 0, 0))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "National Institute for Automotive Service Excellence",
              fill=(255, 255, 255), font=get_font(18), anchor="mm")


slides_data.append({
    "render": slide_title,
    "narration": (
        "Welcome to A2, Automatic Transmission and Transaxle. "
        "This test has 45 scored questions and you get 75 minutes. "
        "The automatic transmission is one of the most complex systems in a vehicle. "
        "Let's break down the key concepts you need to understand for this exam."
    ),
})


# ============ SLIDE 2: Torque Converter ============
def slide_torque_converter(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "The Torque Converter - Fluid Coupling",
              fill=TITLE_COLOR, font=get_font(30, bold=True), anchor="mm")

    # Torque converter cross-section diagram
    draw.text((320, 110), "Torque Converter Cross-Section",
              fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    # Outer housing (donut shape - simplified as two arcs)
    tc_cx, tc_cy = 300, 310
    tc_r = 130
    # Draw outer shell
    draw.ellipse([tc_cx - tc_r, tc_cy - tc_r, tc_cx + tc_r, tc_cy + tc_r],
                 outline=METAL_COLOR, width=4, fill=(240, 240, 240))
    # Inner circle (hollow center)
    draw.ellipse([tc_cx - 35, tc_cy - 35, tc_cx + 35, tc_cy + 35],
                 fill=BG_COLOR, outline=METAL_COLOR, width=2)

    # Label the three elements inside
    # Impeller (pump) - right side
    imp_angle = 0
    ix = tc_cx + 70 * math.cos(imp_angle)
    iy = tc_cy + 70 * math.sin(imp_angle)
    draw.rectangle([int(ix) - 30, int(iy) - 18, int(ix) + 30, int(iy) + 18],
                   fill=(255, 200, 200), outline=FLUID_COLOR, width=2)
    draw.text((int(ix), int(iy)), "Pump", fill=FLUID_COLOR, font=get_font(13, bold=True), anchor="mm")

    # Turbine - left side
    tx = tc_cx - 70
    ty = tc_cy
    draw.rectangle([int(tx) - 30, int(ty) - 18, int(tx) + 30, int(ty) + 18],
                   fill=(200, 220, 255), outline=BLUE, width=2)
    draw.text((int(tx), int(ty)), "Turbine", fill=BLUE, font=get_font(13, bold=True), anchor="mm")

    # Stator - bottom
    sx = tc_cx
    sy = tc_cy + 70
    draw.rectangle([int(sx) - 28, int(sy) - 18, int(sx) + 28, int(sy) + 18],
                   fill=(220, 255, 220), outline=GREEN, width=2)
    draw.text((int(sx), int(sy)), "Stator", fill=GREEN, font=get_font(13, bold=True), anchor="mm")

    # Flow arrows inside (circular ATF flow)
    # Arrow from pump to turbine (top arc)
    for a in range(0, 180, 40):
        rad = math.radians(a - 90)
        ax = tc_cx + 95 * math.cos(rad)
        ay = tc_cy + 95 * math.sin(rad)
        draw.text((int(ax), int(ay)), "\u2192" if a < 90 else "\u2190",
                  fill=ORANGE, font=get_font(16, bold=True), anchor="mm")

    # Engine input label (left side)
    draw.line([(tc_cx - tc_r - 5, tc_cy), (tc_cx - tc_r - 60, tc_cy)], fill=GEAR_COLOR, width=3)
    draw.text((tc_cx - tc_r - 65, tc_cy - 15), "From", fill=TEXT_COLOR, font=get_font(13), anchor="rm")
    draw.text((tc_cx - tc_r - 65, tc_cy + 5), "Engine", fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="rm")

    # Transmission input label (right side)
    draw.line([(tc_cx + tc_r + 5, tc_cy), (tc_cx + tc_r + 60, tc_cy)], fill=GEAR_COLOR, width=3)
    draw.text((tc_cx + tc_r + 65, tc_cy - 15), "To", fill=TEXT_COLOR, font=get_font(13), anchor="lm")
    draw.text((tc_cx + tc_r + 65, tc_cy + 5), "Trans", fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="lm")

    # ATF label
    draw.text((tc_cx, tc_cy - tc_r - 15), "ATF fluid circulates inside",
              fill=ORANGE, font=get_font(14, bold=True), anchor="mm")

    # Divider
    draw.line([(580, 100), (580, 500)], fill=(200, 200, 200), width=2)

    # Right side: How it works explanation
    draw.text((920, 110), "How It Works", fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    steps = [
        ("1. Pump (Impeller)", "Connected to engine via flexplate.\nSpins ATF fluid outward."),
        ("2. Turbine", "Receives fluid force from pump.\nConnected to transmission input shaft."),
        ("3. Stator", "Redirects fluid flow back to pump.\nMultiplies torque at low speeds."),
        ("4. Lock-up Clutch", "Locks pump to turbine at cruise.\nEliminates slip for fuel efficiency."),
    ]
    y = 150
    for title, desc in steps:
        draw.text((640, y), title, fill=TEXT_COLOR, font=get_font(16, bold=True))
        for j, line in enumerate(desc.split("\n")):
            draw.text((660, y + 20 + j * 18), line, fill=SUBTITLE_COLOR, font=get_font(14))
        y += 70

    # Bottom box
    draw.rectangle([80, 470, WIDTH - 80, 520], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((WIDTH // 2, 483),
              "The torque converter replaces the clutch in an automatic transmission.",
              fill=(100, 80, 0), font=get_font(17, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 505),
              "It allows the engine to spin while the vehicle is stopped in gear.",
              fill=(100, 80, 0), font=get_font(15), anchor="mm")


slides_data.append({
    "render": slide_torque_converter,
    "narration": (
        "The torque converter is the fluid coupling between the engine and the transmission. "
        "It has three main parts: the pump, the turbine, and the stator. "
        "The pump, also called the impeller, is bolted to the engine's flexplate and spins with the engine. "
        "As it spins, it throws transmission fluid outward toward the turbine. "
        "The turbine catches that fluid energy and turns the transmission's input shaft. "
        "The stator sits between them and redirects the fluid flow to multiply torque at low speeds. "
        "At highway speed, the lock-up clutch engages, physically locking the pump and turbine together. "
        "This eliminates slippage and improves fuel economy. "
        "A failed torque converter can cause poor acceleration from a stop, shudder, or overheating."
    ),
})


# ============ SLIDE 3: Planetary Gear Sets ============
def slide_planetary(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Planetary Gear Sets - How Gears Change",
              fill=TITLE_COLOR, font=get_font(30, bold=True), anchor="mm")

    # Planetary gear set diagram
    draw.text((300, 110), "Planetary Gear Set", fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    pg_cx, pg_cy = 300, 300
    # Ring gear (outer)
    ring_r = 120
    draw.ellipse([pg_cx - ring_r, pg_cy - ring_r, pg_cx + ring_r, pg_cy + ring_r],
                 outline=GEAR_COLOR, width=5)
    draw.ellipse([pg_cx - ring_r + 8, pg_cy - ring_r + 8, pg_cx + ring_r - 8, pg_cy + ring_r - 8],
                 outline=(180, 180, 180), width=1)
    # Internal teeth on ring gear
    for i in range(24):
        angle = 2 * math.pi * i / 24
        x1 = pg_cx + (ring_r - 8) * math.cos(angle)
        y1 = pg_cy + (ring_r - 8) * math.sin(angle)
        x2 = pg_cx + (ring_r - 15) * math.cos(angle)
        y2 = pg_cy + (ring_r - 15) * math.sin(angle)
        draw.line([(x1, y1), (x2, y2)], fill=(180, 180, 180), width=1)

    # Sun gear (center)
    sun_r = 30
    draw.ellipse([pg_cx - sun_r, pg_cy - sun_r, pg_cx + sun_r, pg_cy + sun_r],
                 fill=(255, 220, 220), outline=FLUID_COLOR, width=3)
    draw.text((pg_cx, pg_cy), "Sun", fill=FLUID_COLOR, font=get_font(16, bold=True), anchor="mm")

    # Planet gears (3 of them)
    planet_r = 25
    planet_orbit_r = 72
    for i in range(3):
        angle = 2 * math.pi * i / 3 - math.pi / 2
        px = pg_cx + planet_orbit_r * math.cos(angle)
        py = pg_cy + planet_orbit_r * math.sin(angle)
        draw.ellipse([px - planet_r, py - planet_r, px + planet_r, py + planet_r],
                     fill=(220, 235, 255), outline=BLUE, width=2)
        draw.text((int(px), int(py)), "P", fill=BLUE, font=get_font(14, bold=True), anchor="mm")

    # Planet carrier (dashed circle connecting planets)
    for a in range(0, 360, 4):
        rad = math.radians(a)
        x = pg_cx + planet_orbit_r * math.cos(rad)
        y = pg_cy + planet_orbit_r * math.sin(rad)
        if a % 8 < 4:
            draw.point((int(x), int(y)), fill=GREEN)
            draw.point((int(x) + 1, int(y)), fill=GREEN)

    # Labels with lines
    draw.text((pg_cx, pg_cy - ring_r - 18), "Ring Gear (outer)",
              fill=GEAR_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.text((pg_cx + ring_r + 15, pg_cy - 40), "Planet\nGears",
              fill=BLUE, font=get_font(13, bold=True), anchor="lm")
    draw.text((pg_cx + ring_r + 15, pg_cy + 20), "Carrier",
              fill=GREEN, font=get_font(13, bold=True), anchor="lm")
    draw.line([(pg_cx + planet_orbit_r + planet_r, pg_cy - 30),
               (pg_cx + ring_r + 10, pg_cy - 30)], fill=BLUE, width=1)

    # Divider
    draw.line([(560, 100), (560, 500)], fill=(200, 200, 200), width=2)

    # Right side: How gears are selected
    draw.text((910, 110), "How Gear Ratios Work", fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    # Table of gear operation
    th_y = 145
    draw.rectangle([600, th_y, 820, th_y + 28], fill=ACCENT_COLOR)
    draw.text((710, th_y + 14), "Held", fill=TITLE_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.rectangle([820, th_y, 960, th_y + 28], fill=ACCENT_COLOR)
    draw.text((890, th_y + 14), "Input", fill=TITLE_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.rectangle([960, th_y, 1100, th_y + 28], fill=ACCENT_COLOR)
    draw.text((1030, th_y + 14), "Output", fill=TITLE_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.rectangle([1100, th_y, 1200, th_y + 28], fill=ACCENT_COLOR)
    draw.text((1150, th_y + 14), "Result", fill=TITLE_COLOR, font=get_font(14, bold=True), anchor="mm")

    rows = [
        ("Ring", "Sun", "Carrier", "Reduction"),
        ("Sun", "Ring", "Carrier", "Reduction"),
        ("Carrier", "Sun", "Ring", "Reverse"),
        ("None", "Any two", "Third", "Direct"),
    ]
    y = th_y + 32
    for i, (held, inp, out, result) in enumerate(rows):
        bg = HIGHLIGHT_BG if i % 2 == 0 else BG_COLOR
        draw.rectangle([600, y, 1200, y + 28], fill=bg)
        draw.text((710, y + 14), held, fill=TEXT_COLOR, font=get_font(14), anchor="mm")
        draw.text((890, y + 14), inp, fill=TEXT_COLOR, font=get_font(14), anchor="mm")
        draw.text((1030, y + 14), out, fill=TEXT_COLOR, font=get_font(14), anchor="mm")
        draw.text((1150, y + 14), result, fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="mm")
        y += 30

    # Explanation below table
    y += 15
    explanations = [
        "\u2022 Clutches and bands hold or release components",
        "\u2022 Holding different parts creates different gear ratios",
        "\u2022 Modern transmissions stack multiple gear sets",
        "\u2022 6, 8, or 10-speed transmissions use compound sets",
        "\u2022 CVTs use pulleys and a belt instead of gears",
    ]
    for line in explanations:
        draw.text((620, y), line, fill=TEXT_COLOR, font=get_font(15))
        y += 24

    # Bottom box
    draw.rectangle([80, 475, WIDTH - 80, 520], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR)
    draw.text((WIDTH // 2, 488),
              "Planetary gear sets are the heart of every automatic transmission.",
              fill=ACCENT_COLOR, font=get_font(17, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 508),
              "By holding one member, the other two create different speed ratios.",
              fill=TEXT_COLOR, font=get_font(15), anchor="mm")


slides_data.append({
    "render": slide_planetary,
    "narration": (
        "Planetary gear sets are the heart of the automatic transmission. "
        "Each set has three members: the sun gear in the center, the planet gears that orbit around it, "
        "and the ring gear on the outside. The planet gears are mounted on a carrier. "
        "By holding one member still and driving another, you get different gear ratios. "
        "For example, hold the ring gear and drive the sun, the carrier becomes the output in a gear reduction. "
        "Hold the carrier and drive the sun, the ring gear turns in reverse. "
        "Clutches and bands are what hold or release these components to change gears. "
        "Modern transmissions stack multiple planetary sets together for 6, 8, or even 10 speeds. "
        "Continuously variable transmissions, or CVTs, use a belt and adjustable pulleys instead of gears."
    ),
})


# ============ SLIDE 4: Hydraulic System ============
def slide_hydraulic(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Hydraulic System & Valve Body",
              fill=TITLE_COLOR, font=get_font(30, bold=True), anchor="mm")

    # Simplified hydraulic system diagram
    draw.text((350, 110), "Hydraulic Control System",
              fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    # Pump box
    pump_x, pump_y = 100, 180
    draw.rectangle([pump_x, pump_y, pump_x + 140, pump_y + 60],
                   fill=(255, 220, 220), outline=FLUID_COLOR, width=2)
    draw.text((pump_x + 70, pump_y + 20), "Transmission",
              fill=FLUID_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.text((pump_x + 70, pump_y + 40), "Fluid Pump",
              fill=FLUID_COLOR, font=get_font(14, bold=True), anchor="mm")

    # Arrow from pump to valve body
    draw.line([(pump_x + 140, pump_y + 30), (320, pump_y + 30)], fill=FLUID_COLOR, width=3)
    draw.polygon([(315, pump_y + 22), (325, pump_y + 30), (315, pump_y + 38)], fill=FLUID_COLOR)
    draw.text((230, pump_y + 10), "Line\nPressure", fill=ORANGE, font=get_font(11), anchor="mm")

    # Valve body box (larger)
    vb_x, vb_y = 325, 155
    vb_w, vb_h = 230, 200
    draw.rectangle([vb_x, vb_y, vb_x + vb_w, vb_y + vb_h],
                   fill=(245, 245, 245), outline=GEAR_COLOR, width=3)
    draw.text((vb_x + vb_w // 2, vb_y + 20), "VALVE BODY",
              fill=GEAR_COLOR, font=get_font(16, bold=True), anchor="mm")

    # Valves inside valve body
    valve_names = ["Pressure Regulator", "Manual Valve", "Shift Valves", "TCC Valve"]
    vy = vb_y + 45
    for name in valve_names:
        draw.rectangle([vb_x + 15, vy, vb_x + vb_w - 15, vy + 28],
                       fill=BG_COLOR, outline=METAL_COLOR, width=1)
        # Spool valve representation
        draw.rectangle([vb_x + 20, vy + 6, vb_x + 50, vy + 22], fill=METAL_COLOR)
        draw.text((vb_x + 60, vy + 14), name, fill=TEXT_COLOR, font=get_font(13), anchor="lm")
        vy += 35

    # Arrows from valve body to clutches/bands
    # Top arrow - to clutch
    clutch_x = vb_x + vb_w + 80
    draw.line([(vb_x + vb_w, vb_y + 80), (clutch_x, vb_y + 80)], fill=FLUID_COLOR, width=2)
    draw.polygon([(clutch_x - 5, vb_y + 73), (clutch_x + 5, vb_y + 80), (clutch_x - 5, vb_y + 87)],
                 fill=FLUID_COLOR)
    draw.rounded_rectangle([clutch_x + 5, vb_y + 60, clutch_x + 105, vb_y + 100],
                           radius=8, fill=(220, 235, 255), outline=BLUE, width=2)
    draw.text((clutch_x + 55, vb_y + 80), "Clutches", fill=BLUE, font=get_font(14, bold=True), anchor="mm")

    # Bottom arrow - to bands
    draw.line([(vb_x + vb_w, vb_y + 140), (clutch_x, vb_y + 140)], fill=FLUID_COLOR, width=2)
    draw.polygon([(clutch_x - 5, vb_y + 133), (clutch_x + 5, vb_y + 140), (clutch_x - 5, vb_y + 147)],
                 fill=FLUID_COLOR)
    draw.rounded_rectangle([clutch_x + 5, vb_y + 120, clutch_x + 105, vb_y + 160],
                           radius=8, fill=(220, 255, 220), outline=GREEN, width=2)
    draw.text((clutch_x + 55, vb_y + 140), "Bands", fill=GREEN, font=get_font(14, bold=True), anchor="mm")

    # Servo arrow
    draw.line([(clutch_x + 105, vb_y + 140), (clutch_x + 145, vb_y + 140)], fill=GREEN, width=2)
    draw.text((clutch_x + 150, vb_y + 140), "Servo", fill=GREEN, font=get_font(12, bold=True), anchor="lm")

    # ATF pan at bottom
    pan_y = vb_y + vb_h + 30
    draw.rectangle([vb_x - 20, pan_y, vb_x + vb_w + 20, pan_y + 45],
                   fill=(255, 230, 230), outline=FLUID_COLOR, width=2)
    draw.text((vb_x + vb_w // 2, pan_y + 12), "Transmission Pan + Filter",
              fill=FLUID_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.text((vb_x + vb_w // 2, pan_y + 30), "ATF (Automatic Transmission Fluid)",
              fill=SUBTITLE_COLOR, font=get_font(12), anchor="mm")

    # Return arrow from pan to pump
    draw.line([(vb_x - 20, pan_y + 22), (pump_x + 70, pan_y + 22)], fill=(200, 150, 150), width=2)
    draw.line([(pump_x + 70, pan_y + 22), (pump_x + 70, pump_y + 60)], fill=(200, 150, 150), width=2)

    # Right side key points
    draw.line([(700, 100), (700, 500)], fill=(200, 200, 200), width=2)

    draw.text((950, 110), "Key Concepts", fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    points = [
        ("Line Pressure", "Pump creates the hydraulic\npressure that operates everything."),
        ("Valve Body", "The \"brain\" of the hydraulic system.\nDirects fluid to apply clutches/bands."),
        ("ATF Fluid", "Lubricates, cools, and transmits\nforce. Check level and condition."),
        ("Cooler", "ATF flows through a cooler\n(usually in the radiator) to prevent\noverheating."),
    ]
    y = 150
    for title, desc in points:
        draw.text((730, y), title, fill=TEXT_COLOR, font=get_font(16, bold=True))
        for j, line in enumerate(desc.split("\n")):
            draw.text((745, y + 22 + j * 17), line, fill=SUBTITLE_COLOR, font=get_font(13))
        y += 78

    # Bottom tip
    draw.rectangle([80, 490, WIDTH - 80, 520], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((WIDTH // 2, 505),
              "Low line pressure causes slipping. A restricted cooler causes overheating.",
              fill=(100, 80, 0), font=get_font(16, bold=True), anchor="mm")


slides_data.append({
    "render": slide_hydraulic,
    "narration": (
        "The hydraulic system is what makes shifting happen. "
        "The transmission fluid pump creates line pressure that flows into the valve body. "
        "The valve body is the hydraulic brain of the transmission. "
        "Inside it are spool valves that direct fluid to clutches and bands. "
        "When fluid pressure applies a clutch pack, it locks a planetary component to change gears. "
        "Bands wrap around drums and are applied by servos. "
        "Automatic transmission fluid, or ATF, is critical. "
        "It lubricates, cools, and transmits hydraulic force. "
        "Low fluid causes slipping and delayed shifts. "
        "The fluid also passes through a cooler, usually built into the radiator. "
        "A restricted cooler causes the fluid to overheat. If you see a transmission over-temperature warning, "
        "check the cooler and fluid level first."
    ),
})


# ============ SLIDE 5: Electronic Controls ============
def slide_electronic(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Electronic Transmission Controls",
              fill=TITLE_COLOR, font=get_font(30, bold=True), anchor="mm")

    # TCM (center-top)
    tcm_x, tcm_y = WIDTH // 2 - 80, 120
    tcm_w, tcm_h = 160, 70
    draw.rectangle([tcm_x, tcm_y, tcm_x + tcm_w, tcm_y + tcm_h],
                   fill=(220, 220, 255), outline=BLUE, width=3)
    draw.text((tcm_x + tcm_w // 2, tcm_y + 20), "TCM / PCM",
              fill=BLUE, font=get_font(18, bold=True), anchor="mm")
    draw.text((tcm_x + tcm_w // 2, tcm_y + 45), "Control Module",
              fill=BLUE, font=get_font(14), anchor="mm")

    # Sensors (left side)
    draw.text((200, 110), "INPUTS (Sensors)", fill=ACCENT_COLOR, font=get_font(18, bold=True), anchor="mm")

    sensors = [
        "Throttle Position (TPS)",
        "Vehicle Speed (VSS)",
        "Trans. Fluid Temp (TFT)",
        "Input/Turbine Speed",
        "Output Speed",
        "Brake Switch",
        "Range Sensor (PRNDL)",
    ]
    sy = 145
    for s in sensors:
        draw.rounded_rectangle([60, sy, 340, sy + 26], radius=6,
                               fill=(245, 245, 255), outline=BLUE, width=1)
        draw.text((200, sy + 13), s, fill=TEXT_COLOR, font=get_font(13), anchor="mm")
        # Arrow to TCM
        draw.line([(340, sy + 13), (tcm_x, tcm_y + tcm_h // 2)], fill=(180, 180, 220), width=1)
        sy += 32

    # Outputs (right side)
    draw.text((1050, 110), "OUTPUTS (Actuators)", fill=ACCENT_COLOR, font=get_font(18, bold=True), anchor="mm")

    outputs = [
        "Shift Solenoids",
        "Pressure Control Sol.",
        "TCC Solenoid",
        "Line Pressure Sol.",
        "MIL (Check Engine)",
    ]
    oy = 145
    for o in outputs:
        draw.rounded_rectangle([900, oy, 1200, oy + 26], radius=6,
                               fill=(255, 245, 245), outline=FLUID_COLOR, width=1)
        draw.text((1050, oy + 13), o, fill=TEXT_COLOR, font=get_font(13), anchor="mm")
        # Arrow from TCM
        draw.line([(tcm_x + tcm_w, tcm_y + tcm_h // 2), (900, oy + 13)], fill=(220, 180, 180), width=1)
        oy += 32

    # Bottom section: OBD II and Diagnostics
    diag_y = 380
    draw.rectangle([80, diag_y, WIDTH - 80, diag_y + 30], fill=ACCENT_COLOR)
    draw.text((WIDTH // 2, diag_y + 15), "Electronic Diagnostics",
              fill=TITLE_COLOR, font=get_font(18, bold=True), anchor="mm")

    y = diag_y + 40
    diag_points = [
        "\u2022 Use a scan tool to read DTCs (Diagnostic Trouble Codes) from the TCM/PCM",
        "\u2022 Monitor live data: input vs. output speed = slip calculation",
        "\u2022 Solenoids are controlled by duty cycle (PWM) - test with a DMM or scope",
        "\u2022 Clear DTCs with a scan tool after repairs - never just disconnect the battery",
    ]
    for pt in diag_points:
        draw.text((100, y), pt, fill=TEXT_COLOR, font=get_font(15))
        y += 24


slides_data.append({
    "render": slide_electronic,
    "narration": (
        "Modern transmissions are electronically controlled. "
        "The Transmission Control Module, or TCM, receives input from sensors "
        "and commands solenoids to control shifting. "
        "Key sensors include the throttle position sensor, vehicle and turbine speed sensors, "
        "the transmission fluid temperature sensor, and the range sensor which reads your gear selector position. "
        "On the output side, the TCM controls shift solenoids that direct fluid in the valve body, "
        "pressure control solenoids for shift quality, and the torque converter clutch solenoid. "
        "For diagnostics, always use a scan tool to read trouble codes and monitor live data. "
        "Comparing input speed to output speed reveals transmission slip. "
        "After repairs, clear codes with the scan tool, not by disconnecting the battery."
    ),
})


# ============ SLIDE 6: Common Symptoms ============
def slide_symptoms(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Common Symptoms & Diagnostic Flow",
              fill=TITLE_COLOR, font=get_font(30, bold=True), anchor="mm")

    draw.text((WIDTH // 2, 110), "Symptom \u2192 Likely Cause",
              fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    # Table header
    th_y = 140
    draw.rectangle([80, th_y, 580, th_y + 28], fill=ACCENT_COLOR)
    draw.text((330, th_y + 14), "Symptom", fill=TITLE_COLOR, font=get_font(15, bold=True), anchor="mm")
    draw.rectangle([580, th_y, WIDTH - 80, th_y + 28], fill=ACCENT_COLOR)
    draw.text((890, th_y + 14), "Check These First", fill=TITLE_COLOR, font=get_font(15, bold=True), anchor="mm")

    rows = [
        ("Slipping in all gears", "Low fluid, worn clutches, low line pressure"),
        ("Harsh or late shifts", "Throttle position sensor, shift solenoids"),
        ("No movement in any gear", "Low fluid, failed pump, broken input shaft"),
        ("Slips only in one gear", "Specific clutch or band for that gear"),
        ("Shudder at light throttle", "Torque converter clutch worn or contaminated"),
        ("Overheating (temp warning)", "Restricted cooler, low fluid, heavy towing"),
        ("Won't shift out of 2nd", "Limp mode - check DTCs with scan tool"),
        ("Delayed engagement", "Low fluid, worn seals, accumulator problem"),
    ]

    y = th_y + 32
    for i, (symptom, cause) in enumerate(rows):
        bg = HIGHLIGHT_BG if i % 2 == 0 else BG_COLOR
        draw.rectangle([80, y, WIDTH - 80, y + 28], fill=bg)
        draw.text((100, y + 5), symptom, fill=TEXT_COLOR, font=get_font(14, bold=True))
        draw.text((600, y + 5), cause, fill=SUBTITLE_COLOR, font=get_font(14))
        y += 30

    # Diagnostic flow at bottom
    y += 15
    draw.rectangle([80, y, WIDTH - 80, y + 60], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((WIDTH // 2, y + 15),
              "Always start with: Check fluid level & condition \u2192 Scan for DTCs \u2192",
              fill=(100, 80, 0), font=get_font(15, bold=True), anchor="mm")
    draw.text((WIDTH // 2, y + 38),
              "Road test to verify concern \u2192 Check line pressure \u2192 Inspect and repair",
              fill=(100, 80, 0), font=get_font(15, bold=True), anchor="mm")


slides_data.append({
    "render": slide_symptoms,
    "narration": (
        "Most A2 questions describe a symptom and ask you to find the cause. "
        "If the transmission slips in all gears, think low fluid level or low line pressure. "
        "Harsh or late shifts often point to a bad throttle position sensor or faulty shift solenoids. "
        "A shudder at light throttle cruise speed usually means the torque converter clutch is worn. "
        "If the transmission won't shift out of second gear, it's in limp mode. "
        "Scan for trouble codes immediately. "
        "Your diagnostic flow should always start with checking the fluid level and condition. "
        "Dark, burnt-smelling fluid tells you there's internal damage. "
        "Then scan for codes, road test to confirm the concern, and check line pressure with a gauge."
    ),
})


# ============ SLIDE 7: Closing ============
def slide_closing(img, draw):
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=HEADER_BG)
    # Gear decoration
    cx, cy = WIDTH // 2, 110
    r = 45
    teeth = 8
    for i in range(teeth):
        angle = 2 * math.pi * i / teeth
        angle2 = 2 * math.pi * (i + 0.35) / teeth
        x1 = cx + r * math.cos(angle)
        y1 = cy + r * math.sin(angle)
        x2 = cx + r * math.cos(angle2)
        y2 = cy + r * math.sin(angle2)
        x3 = cx + (r + 12) * math.cos((angle + angle2) / 2)
        y3 = cy + (r + 12) * math.sin((angle + angle2) / 2)
        draw.polygon([(x1, y1), (x3, y3), (x2, y2)], fill=(200, 200, 200))
    draw.ellipse([cx - r, cy - r, cx + r, cy + r],
                 fill=(180, 180, 180), outline=(200, 200, 200), width=2)
    draw.ellipse([cx - 18, cy - 18, cx + 18, cy + 18], fill=HEADER_BG, outline=(200, 200, 200), width=2)

    draw.rectangle([100, 185, WIDTH - 100, 189], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 215), "A2 Key Takeaways",
              fill=(255, 200, 200), font=get_font(28), anchor="mm")
    y = 260
    takeaways = [
        "Torque converter: pump, turbine, stator, lock-up clutch",
        "Planetary gear sets create all forward and reverse gears",
        "Hydraulic pressure from the pump operates clutches & bands",
        "The valve body directs fluid to engage specific gears",
        "TCM uses sensors and solenoids for electronic shift control",
        "Always check fluid level and condition first",
        "Use a scan tool for DTCs - never just pull the battery",
        "Match symptoms to causes - that's how the test works",
    ]
    for t in takeaways:
        draw.text((WIDTH // 2, y), f"\u2713  {t}",
                  fill=TITLE_COLOR, font=get_font(20), anchor="mm")
        y += 34
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(100, 0, 0))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "Good luck on your ASE A2 exam!",
              fill=(255, 255, 255), font=get_font(22), anchor="mm")


slides_data.append({
    "render": slide_closing,
    "narration": (
        "Let's review the key takeaways for A2. "
        "The torque converter couples the engine to the transmission using fluid. "
        "Planetary gear sets create all your gear ratios through clutches and bands. "
        "The hydraulic pump provides pressure and the valve body directs it. "
        "Electronic controls with sensors and solenoids manage shift timing and quality. "
        "For diagnosis, always start by checking fluid level and condition. "
        "Use a scan tool for trouble codes, never just disconnect the battery. "
        "And remember, most test questions give you a symptom and ask for the cause. "
        "Good luck on your A2 Automatic Transmission exam. You've got this!"
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
