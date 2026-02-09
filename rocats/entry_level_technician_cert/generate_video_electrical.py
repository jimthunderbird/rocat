#!/usr/bin/env python3
"""
Generate a 2-minute PowerPoint-style slide-by-slide video for
ASE A6 - Electrical/Electronic Systems (Entry-Level Technician Certification).
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
TEMP_DIR = os.path.join(OUTPUT_DIR, "_video_tmp_electrical")
VIDEO_DIR = os.path.join(OUTPUT_DIR, "videos")
OUTPUT_FILE = os.path.join(VIDEO_DIR, "entry_level_Electrical_Electronic_Systems_384.mp4")
WIDTH, HEIGHT = 1280, 720
FPS = 24
TARGET_DURATION = 120.0  # 2 minutes

# Voice: natural male US English
VOICE = "en-US-GuyNeural"

# Colors - blue/gold theme for electrical
BG_COLOR = (255, 255, 255)
HEADER_BG = (0, 82, 136)       # Deep blue
TITLE_COLOR = (255, 255, 255)
TEXT_COLOR = (51, 51, 51)
ACCENT_COLOR = (0, 82, 136)
BULLET_COLOR = (0, 100, 160)
SUBTITLE_COLOR = (100, 100, 100)
HIGHLIGHT_BG = (230, 243, 255)
WIRE_COLOR = (200, 50, 50)     # Red for wires in diagrams
GROUND_COLOR = (80, 80, 80)
COMPONENT_BG = (240, 248, 255)
YELLOW = (255, 200, 0)
GREEN = (0, 140, 60)

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
    # Decorative lightning bolt shape
    bolt_points = [(640, 80), (670, 150), (650, 150), (690, 240), (655, 170), (675, 170), (640, 80)]
    draw.polygon(bolt_points, fill=YELLOW)
    draw.rectangle([100, 290, WIDTH - 100, 294], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 340), "ASE A6",
              fill=TITLE_COLOR, font=get_font(56, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 400), "Electrical / Electronic Systems",
              fill=(200, 220, 255), font=get_font(36), anchor="mm")
    draw.text((WIDTH // 2, 460), "Core Concepts for Entry-Level Technicians",
              fill=TITLE_COLOR, font=get_font(26), anchor="mm")
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(0, 50, 90))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "National Institute for Automotive Service Excellence",
              fill=(255, 255, 255), font=get_font(18), anchor="mm")


slides_data.append({
    "render": slide_title,
    "narration": (
        "Welcome to A6 Electrical and Electronic Systems. "
        "This is one of the most important tests for entry-level technicians. "
        "Modern vehicles are packed with electrical systems, from the battery and starter "
        "to body electronics and lighting. Let's break down the key concepts you need to understand."
    ),
})


# ============ SLIDE 2: Ohm's Law and Circuit Fundamentals ============
def slide_ohms_law(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Electrical Fundamentals: Ohm's Law",
              fill=TITLE_COLOR, font=get_font(32, bold=True), anchor="mm")

    # Ohm's Law triangle diagram
    cx, cy = 320, 320
    tri_size = 160
    # Triangle vertices
    top = (cx, cy - tri_size)
    bl = (cx - tri_size, cy + tri_size // 2)
    br = (cx + tri_size, cy + tri_size // 2)
    draw.polygon([top, bl, br], outline=ACCENT_COLOR, fill=COMPONENT_BG)
    draw.line([top, bl], fill=ACCENT_COLOR, width=3)
    draw.line([top, br], fill=ACCENT_COLOR, width=3)
    draw.line([bl, br], fill=ACCENT_COLOR, width=3)
    # Horizontal divider in triangle
    mid_left = (cx - tri_size // 2, cy - tri_size // 4 + 20)
    mid_right = (cx + tri_size // 2, cy - tri_size // 4 + 20)
    draw.line([mid_left, mid_right], fill=ACCENT_COLOR, width=2)
    # V at top, I and R at bottom
    draw.text((cx, cy - tri_size // 2 - 10), "V", fill=WIRE_COLOR, font=get_font(40, bold=True), anchor="mm")
    draw.text((cx - 50, cy + 30), "I", fill=GREEN, font=get_font(40, bold=True), anchor="mm")
    draw.text((cx + 50, cy + 30), "R", fill=ACCENT_COLOR, font=get_font(40, bold=True), anchor="mm")
    draw.text((cx, cy + 30), "\u00d7", fill=TEXT_COLOR, font=get_font(30), anchor="mm")

    # Labels
    draw.text((cx, cy + tri_size // 2 + 40), "V = Voltage (Volts)",
              fill=WIRE_COLOR, font=get_font(20, bold=True), anchor="mm")
    draw.text((cx, cy + tri_size // 2 + 70), "I = Current (Amps)",
              fill=GREEN, font=get_font(20, bold=True), anchor="mm")
    draw.text((cx, cy + tri_size // 2 + 100), "R = Resistance (Ohms)",
              fill=ACCENT_COLOR, font=get_font(20, bold=True), anchor="mm")

    # Formulas on the right
    rx = 780
    draw.text((rx, 120), "Three Key Formulas:", fill=TEXT_COLOR, font=get_font(26, bold=True), anchor="mm")
    formulas = [
        ("V = I \u00d7 R", "Voltage = Current \u00d7 Resistance"),
        ("I = V / R", "Current = Voltage / Resistance"),
        ("R = V / I", "Resistance = Voltage / Current"),
    ]
    y = 170
    for formula, desc in formulas:
        draw.rectangle([640, y, 920, y + 60], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR)
        draw.text((780, y + 18), formula, fill=ACCENT_COLOR, font=get_font(24, bold=True), anchor="mm")
        draw.text((780, y + 45), desc, fill=SUBTITLE_COLOR, font=get_font(16), anchor="mm")
        y += 75

    # Simple circuit diagram on the right
    y_circ = 420
    # Battery
    draw.rectangle([660, y_circ, 720, y_circ + 60], outline=TEXT_COLOR, width=2)
    draw.text((690, y_circ + 30), "12V", fill=WIRE_COLOR, font=get_font(16, bold=True), anchor="mm")
    draw.text((690, y_circ - 15), "Battery", fill=TEXT_COLOR, font=get_font(14), anchor="mm")
    # Resistor (zig-zag simplified as box)
    draw.rectangle([820, y_circ, 900, y_circ + 60], outline=TEXT_COLOR, width=2, fill=(255, 245, 220))
    draw.text((860, y_circ + 30), "R", fill=ACCENT_COLOR, font=get_font(18, bold=True), anchor="mm")
    draw.text((860, y_circ - 15), "Load", fill=TEXT_COLOR, font=get_font(14), anchor="mm")
    # Wires
    draw.line([(720, y_circ + 20), (820, y_circ + 20)], fill=WIRE_COLOR, width=2)
    draw.line([(720, y_circ + 40), (820, y_circ + 40)], fill=WIRE_COLOR, width=2)
    # Arrows for current
    draw.text((770, y_circ + 5), "\u2192 I", fill=GREEN, font=get_font(16, bold=True), anchor="mm")

    draw.rectangle([640, y_circ + 80, 920, y_circ + 115], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((780, y_circ + 95), "V = I \u00d7 R is the foundation!", fill=(100, 80, 0), font=get_font(18, bold=True), anchor="mm")


slides_data.append({
    "render": slide_ohms_law,
    "narration": (
        "Let's start with the absolute foundation: Ohm's Law. "
        "Voltage equals Current times Resistance. V equals I times R. "
        "Think of voltage as electrical pressure pushing current through a circuit. "
        "Current is the flow of electrons, measured in amps. "
        "Resistance opposes that flow, measured in ohms. "
        "If you know any two values, you can calculate the third. "
        "In a 12 volt automotive circuit with 4 ohms of resistance, "
        "the current flow would be 3 amps. This relationship is key to every diagnosis you'll do."
    ),
})


# ============ SLIDE 3: Battery and Starting System ============
def slide_battery_starting(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Battery & Starting System",
              fill=TITLE_COLOR, font=get_font(32, bold=True), anchor="mm")

    # Battery diagram
    bx, by = 160, 200
    draw.rectangle([bx, by, bx + 120, by + 180], outline=TEXT_COLOR, width=3, fill=COMPONENT_BG)
    # Battery terminals
    draw.rectangle([bx + 30, by - 15, bx + 50, by], fill=WIRE_COLOR)  # + terminal
    draw.rectangle([bx + 70, by - 15, bx + 90, by], fill=GROUND_COLOR)  # - terminal
    draw.text((bx + 40, by - 25), "+", fill=WIRE_COLOR, font=get_font(18, bold=True), anchor="mm")
    draw.text((bx + 80, by - 25), "-", fill=GROUND_COLOR, font=get_font(18, bold=True), anchor="mm")
    # Battery plates inside
    for i in range(5):
        plate_y = by + 30 + i * 28
        draw.rectangle([bx + 15, plate_y, bx + 50, plate_y + 18], fill=(180, 180, 180), outline=(120, 120, 120))
        draw.rectangle([bx + 60, plate_y, bx + 95, plate_y + 18], fill=(140, 100, 80), outline=(100, 70, 50))
    draw.text((bx + 60, by + 200), "12V Battery", fill=TEXT_COLOR, font=get_font(18, bold=True), anchor="mm")
    draw.text((bx + 60, by + 225), "Lead-Acid Cells", fill=SUBTITLE_COLOR, font=get_font(14), anchor="mm")

    # Arrow from battery to solenoid
    draw.line([(bx + 120, by + 40), (400, by + 40)], fill=WIRE_COLOR, width=3)
    draw.polygon([(390, by + 30), (410, by + 40), (390, by + 50)], fill=WIRE_COLOR)

    # Ignition Switch
    sw_x, sw_y = 340, by - 40
    draw.ellipse([sw_x, sw_y, sw_x + 50, sw_y + 50], outline=ACCENT_COLOR, width=2, fill=COMPONENT_BG)
    draw.text((sw_x + 25, sw_y + 25), "SW", fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.text((sw_x + 25, sw_y - 15), "Ignition", fill=TEXT_COLOR, font=get_font(13), anchor="mm")
    draw.line([(sw_x + 25, sw_y + 50), (sw_x + 25, by + 40)], fill=ACCENT_COLOR, width=2)

    # Solenoid
    sol_x, sol_y = 400, by + 10
    draw.rectangle([sol_x, sol_y, sol_x + 120, sol_y + 80], outline=TEXT_COLOR, width=2, fill=COMPONENT_BG)
    draw.text((sol_x + 60, sol_y + 25), "Starter", fill=TEXT_COLOR, font=get_font(16, bold=True), anchor="mm")
    draw.text((sol_x + 60, sol_y + 50), "Solenoid", fill=TEXT_COLOR, font=get_font(16, bold=True), anchor="mm")

    # Arrow from solenoid to starter motor
    draw.line([(sol_x + 120, sol_y + 40), (620, sol_y + 40)], fill=WIRE_COLOR, width=3)
    draw.polygon([(610, sol_y + 30), (630, sol_y + 40), (610, sol_y + 50)], fill=WIRE_COLOR)

    # Starter Motor
    sm_x, sm_y = 620, by - 10
    draw.ellipse([sm_x, sm_y, sm_x + 120, sm_y + 120], outline=TEXT_COLOR, width=3, fill=COMPONENT_BG)
    draw.text((sm_x + 60, sm_y + 45), "Starter", fill=TEXT_COLOR, font=get_font(18, bold=True), anchor="mm")
    draw.text((sm_x + 60, sm_y + 70), "Motor", fill=TEXT_COLOR, font=get_font(18, bold=True), anchor="mm")

    # Flywheel/Ring Gear
    fg_x = sm_x + 130
    draw.ellipse([fg_x, sm_y + 10, fg_x + 100, sm_y + 110], outline=GROUND_COLOR, width=3, fill=(245, 245, 245))
    # Gear teeth
    for angle_deg in range(0, 360, 20):
        angle = math.radians(angle_deg)
        cx_g, cy_g = fg_x + 50, sm_y + 60
        r_inner, r_outer = 45, 52
        x1 = cx_g + r_inner * math.cos(angle)
        y1 = cy_g + r_inner * math.sin(angle)
        x2 = cx_g + r_outer * math.cos(angle)
        y2 = cy_g + r_outer * math.sin(angle)
        draw.line([(x1, y1), (x2, y2)], fill=GROUND_COLOR, width=2)
    draw.text((fg_x + 50, sm_y + 60), "Ring\nGear", fill=TEXT_COLOR, font=get_font(14), anchor="mm")

    # Ground return line
    draw.line([(sm_x + 60, sm_y + 120), (sm_x + 60, sm_y + 150)], fill=GROUND_COLOR, width=2)
    # Ground symbol
    gy = sm_y + 150
    draw.line([(sm_x + 40, gy), (sm_x + 80, gy)], fill=GROUND_COLOR, width=2)
    draw.line([(sm_x + 45, gy + 6), (sm_x + 75, gy + 6)], fill=GROUND_COLOR, width=2)
    draw.line([(sm_x + 50, gy + 12), (sm_x + 70, gy + 12)], fill=GROUND_COLOR, width=2)

    # Key concepts on the right/bottom
    y = 440
    font = get_font(20)
    fb = get_font(20, bold=True)
    draw.text((100, y), "How It Works:", fill=ACCENT_COLOR, font=fb)
    y += 35
    steps = [
        "1. Turn key \u2192 Solenoid engages starter drive gear",
        "2. Solenoid closes high-current contacts",
        "3. Battery sends 150-300 amps to starter motor",
        "4. Starter motor spins the engine flywheel",
        "5. Engine starts \u2192 Starter disengages automatically",
    ]
    for step in steps:
        draw.text((120, y), step, fill=TEXT_COLOR, font=get_font(18))
        y += 30


slides_data.append({
    "render": slide_battery_starting,
    "narration": (
        "The battery and starting system work together to crank the engine. "
        "When you turn the key, current flows from the battery to the starter solenoid. "
        "The solenoid does two things: it pushes the starter drive gear into the flywheel ring gear, "
        "and it closes a heavy-duty switch that sends 150 to 300 amps to the starter motor. "
        "The motor spins the flywheel to crank the engine. "
        "A typical automotive battery is 12 volts with six lead-acid cells, each producing about 2.1 volts. "
        "If you get a no-crank condition, always check battery voltage, cable connections, and the solenoid first."
    ),
})


# ============ SLIDE 4: Charging System ============
def slide_charging(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Charging System: How the Alternator Works",
              fill=TITLE_COLOR, font=get_font(32, bold=True), anchor="mm")

    # Alternator diagram (simplified cross-section)
    ax, ay = 200, 280
    r_outer = 100
    r_inner = 50
    # Outer housing
    draw.ellipse([ax - r_outer, ay - r_outer, ax + r_outer, ay + r_outer],
                 outline=ACCENT_COLOR, width=3, fill=COMPONENT_BG)
    # Rotor (inner)
    draw.ellipse([ax - r_inner, ay - r_inner, ax + r_inner, ay + r_inner],
                 outline=WIRE_COLOR, width=2, fill=(255, 230, 230))
    draw.text((ax, ay - 10), "Rotor", fill=WIRE_COLOR, font=get_font(16, bold=True), anchor="mm")
    draw.text((ax, ay + 10), "(Spins)", fill=WIRE_COLOR, font=get_font(14), anchor="mm")
    # Stator windings (arcs around rotor)
    for angle in [30, 150, 270]:
        rad = math.radians(angle)
        sx = ax + 70 * math.cos(rad)
        sy = ay + 70 * math.sin(rad)
        draw.ellipse([sx - 12, sy - 12, sx + 12, sy + 12], fill=(200, 160, 80), outline=(150, 120, 60))
    draw.text((ax, ay + r_outer + 20), "Stator Windings", fill=TEXT_COLOR, font=get_font(14), anchor="mm")
    draw.text((ax, ay - r_outer - 20), "Alternator", fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    # Belt from engine
    draw.line([(ax - r_outer - 10, ay - 30), (ax - r_outer - 60, ay - 80)], fill=GROUND_COLOR, width=4)
    draw.line([(ax - r_outer - 10, ay + 30), (ax - r_outer - 60, ay + 80)], fill=GROUND_COLOR, width=4)
    draw.text((ax - r_outer - 80, ay), "Belt\nfrom\nEngine", fill=SUBTITLE_COLOR, font=get_font(13), anchor="mm")

    # Rectifier block
    rect_x = 420
    draw.rectangle([rect_x, ay - 40, rect_x + 120, ay + 40], outline=TEXT_COLOR, width=2, fill=COMPONENT_BG)
    draw.text((rect_x + 60, ay - 12), "Rectifier", fill=TEXT_COLOR, font=get_font(16, bold=True), anchor="mm")
    draw.text((rect_x + 60, ay + 12), "(AC\u2192DC)", fill=GREEN, font=get_font(16, bold=True), anchor="mm")
    # Arrow from alternator to rectifier
    draw.line([(ax + r_outer, ay), (rect_x, ay)], fill=WIRE_COLOR, width=2)
    draw.text((ax + r_outer + 30, ay - 15), "AC", fill=(200, 100, 0), font=get_font(16, bold=True), anchor="mm")
    draw.polygon([(rect_x - 10, ay - 8), (rect_x, ay), (rect_x - 10, ay + 8)], fill=WIRE_COLOR)

    # Voltage Regulator
    vreg_x = rect_x + 140
    draw.rectangle([vreg_x, ay - 80, vreg_x + 110, ay - 20], outline=ACCENT_COLOR, width=2, fill=HIGHLIGHT_BG)
    draw.text((vreg_x + 55, ay - 62), "Voltage", fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.text((vreg_x + 55, ay - 42), "Regulator", fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="mm")
    draw.line([(vreg_x + 55, ay - 20), (vreg_x + 55, ay)], fill=ACCENT_COLOR, width=2)

    # Arrow to battery
    batt_x = 700
    draw.line([(rect_x + 120, ay), (batt_x, ay)], fill=WIRE_COLOR, width=2)
    draw.text((rect_x + 170, ay - 15), "DC ~14V", fill=GREEN, font=get_font(16, bold=True), anchor="mm")
    draw.polygon([(batt_x - 10, ay - 8), (batt_x, ay), (batt_x - 10, ay + 8)], fill=WIRE_COLOR)
    # Battery box
    draw.rectangle([batt_x, ay - 35, batt_x + 80, ay + 35], outline=TEXT_COLOR, width=2, fill=COMPONENT_BG)
    draw.text((batt_x + 40, ay - 8), "12V", fill=WIRE_COLOR, font=get_font(18, bold=True), anchor="mm")
    draw.text((batt_x + 40, ay + 14), "Batt", fill=TEXT_COLOR, font=get_font(16), anchor="mm")

    # Arrow to vehicle loads
    draw.line([(batt_x + 80, ay), (batt_x + 150, ay)], fill=WIRE_COLOR, width=2)
    draw.polygon([(batt_x + 140, ay - 8), (batt_x + 150, ay), (batt_x + 140, ay + 8)], fill=WIRE_COLOR)
    draw.text((batt_x + 180, ay), "Vehicle\nLoads", fill=TEXT_COLOR, font=get_font(16, bold=True), anchor="mm")

    # Key points at bottom
    y = 440
    font = get_font(19)
    fb = get_font(19, bold=True)
    draw.text((100, y), "Key Concepts:", fill=ACCENT_COLOR, font=fb)
    y += 32
    for point in [
        "\u2022 Engine belt spins the alternator rotor (electromagnetic induction)",
        "\u2022 Stator windings produce AC current \u2192 Rectifier converts to DC",
        "\u2022 Voltage regulator keeps output at 13.5-14.5 volts",
        "\u2022 Charges the battery AND powers all vehicle electronics",
        "\u2022 A failing alternator causes dim lights, dead battery, warning light",
    ]:
        draw.text((120, y), point, fill=TEXT_COLOR, font=get_font(17))
        y += 28


slides_data.append({
    "render": slide_charging,
    "narration": (
        "The charging system keeps the battery charged and powers the vehicle while the engine runs. "
        "The alternator is belt-driven by the engine. Inside, a spinning rotor creates a magnetic field "
        "that induces alternating current in the stator windings. "
        "Since the vehicle needs direct current, a rectifier with diodes converts AC to DC. "
        "The voltage regulator controls the output to maintain 13.5 to 14.5 volts. "
        "This charges the battery and powers all electrical loads. "
        "If a customer complains about dim lights or a dead battery, always test the charging system output first."
    ),
})


# ============ SLIDE 5: Series vs Parallel Circuits ============
def slide_circuits(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Circuit Types: Series vs. Parallel",
              fill=TITLE_COLOR, font=get_font(32, bold=True), anchor="mm")

    # --- SERIES CIRCUIT (left side) ---
    draw.text((300, 110), "Series Circuit", fill=ACCENT_COLOR, font=get_font(24, bold=True), anchor="mm")

    # Battery
    s_bx, s_by = 100, 180
    draw.rectangle([s_bx, s_by, s_bx + 60, s_by + 40], outline=TEXT_COLOR, width=2, fill=COMPONENT_BG)
    draw.text((s_bx + 30, s_by + 20), "12V", fill=WIRE_COLOR, font=get_font(14, bold=True), anchor="mm")
    # Top wire
    draw.line([(s_bx + 60, s_by + 10), (500, s_by + 10)], fill=WIRE_COLOR, width=2)
    # Resistor 1
    r1_x = 210
    draw.rectangle([r1_x, s_by - 5, r1_x + 60, s_by + 25], outline=TEXT_COLOR, width=2, fill=(255, 245, 220))
    draw.text((r1_x + 30, s_by + 10), "R1", fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="mm")
    # Resistor 2
    r2_x = 330
    draw.rectangle([r2_x, s_by - 5, r2_x + 60, s_by + 25], outline=TEXT_COLOR, width=2, fill=(255, 245, 220))
    draw.text((r2_x + 30, s_by + 10), "R2", fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="mm")
    # Resistor 3
    r3_x = 440
    draw.rectangle([r3_x, s_by - 5, r3_x + 25, s_by + 25], outline=TEXT_COLOR, width=2, fill=(255, 245, 220))
    draw.text((r3_x + 12, s_by + 10), "R3", fill=ACCENT_COLOR, font=get_font(12, bold=True), anchor="mm")
    # Bottom return wire
    draw.line([(500, s_by + 10), (500, s_by + 40)], fill=GROUND_COLOR, width=2)
    draw.line([(500, s_by + 40), (s_bx, s_by + 40)], fill=GROUND_COLOR, width=2)
    draw.line([(s_bx, s_by + 30), (s_bx, s_by + 40)], fill=GROUND_COLOR, width=2)

    # Series facts
    sy = 250
    font_s = get_font(16)
    for fact in [
        "\u2022 One path for current flow",
        "\u2022 Same current through all loads",
        "\u2022 Voltage divides across loads",
        "\u2022 Total R = R1 + R2 + R3",
        "\u2022 If one load opens, ALL go out",
    ]:
        draw.text((110, sy), fact, fill=TEXT_COLOR, font=font_s)
        sy += 24

    # Divider
    draw.line([(600, 100), (600, 400)], fill=(200, 200, 200), width=2)

    # --- PARALLEL CIRCUIT (right side) ---
    draw.text((940, 110), "Parallel Circuit", fill=GREEN, font=get_font(24, bold=True), anchor="mm")

    # Battery
    p_bx, p_by = 680, 200
    draw.rectangle([p_bx, p_by, p_bx + 60, p_by + 100], outline=TEXT_COLOR, width=2, fill=COMPONENT_BG)
    draw.text((p_bx + 30, p_by + 50), "12V", fill=WIRE_COLOR, font=get_font(14, bold=True), anchor="mm")
    # Top bus
    draw.line([(p_bx + 60, p_by + 15), (1150, p_by + 15)], fill=WIRE_COLOR, width=2)
    # Bottom bus
    draw.line([(p_bx + 60, p_by + 85), (1150, p_by + 85)], fill=GROUND_COLOR, width=2)
    # Parallel loads
    for i, (lx, label) in enumerate([(830, "R1"), (950, "R2"), (1070, "R3")]):
        draw.line([(lx, p_by + 15), (lx, p_by + 30)], fill=WIRE_COLOR, width=2)
        draw.rectangle([lx - 20, p_by + 30, lx + 20, p_by + 70], outline=TEXT_COLOR, width=2, fill=(255, 245, 220))
        draw.text((lx, p_by + 50), label, fill=ACCENT_COLOR, font=get_font(14, bold=True), anchor="mm")
        draw.line([(lx, p_by + 70), (lx, p_by + 85)], fill=GROUND_COLOR, width=2)

    # Parallel facts
    py = 250
    for fact in [
        "\u2022 Multiple paths for current",
        "\u2022 Same voltage across all loads",
        "\u2022 Current divides among branches",
        "\u2022 1/Rt = 1/R1 + 1/R2 + 1/R3",
        "\u2022 If one load opens, others still work",
    ]:
        draw.text((700, py), fact, fill=TEXT_COLOR, font=font_s)
        py += 24

    # Bottom comparison box
    draw.rectangle([80, 420, WIDTH - 80, 500], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR)
    draw.text((WIDTH // 2, 440), "Most automotive circuits are PARALLEL so each device operates independently.",
              fill=TEXT_COLOR, font=get_font(18, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 470), "Headlights, radio, wipers - each has its own path to ground.",
              fill=SUBTITLE_COLOR, font=get_font(17), anchor="mm")


slides_data.append({
    "render": slide_circuits,
    "narration": (
        "Understanding circuit types is essential. "
        "In a series circuit, there's only one path for current. All components share the same current, "
        "and voltage is divided among them. If one component fails, the whole circuit goes dead. "
        "In a parallel circuit, each component has its own path from power to ground. "
        "Every load gets the full voltage. If one load fails, the others keep working. "
        "Most automotive circuits are parallel. Your headlights, radio, and wipers each have "
        "their own branch circuit. That's why one burnt headlight doesn't shut off everything else."
    ),
})


# ============ SLIDE 6: Lighting and Body Electrical ============
def slide_lighting_body(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Lighting & Body Electrical Systems",
              fill=TITLE_COLOR, font=get_font(32, bold=True), anchor="mm")

    # Left side: Lighting
    draw.text((300, 115), "Lighting Systems", fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    # Simple headlight circuit diagram
    # Fuse
    fx, fy = 100, 170
    draw.rectangle([fx, fy, fx + 50, fy + 25], outline=TEXT_COLOR, width=2, fill=(255, 240, 200))
    draw.text((fx + 25, fy + 12), "Fuse", fill=TEXT_COLOR, font=get_font(13), anchor="mm")
    # Wire to switch
    draw.line([(fx + 50, fy + 12), (fx + 90, fy + 12)], fill=WIRE_COLOR, width=2)
    # Switch
    sw_x = fx + 90
    draw.ellipse([sw_x, fy, sw_x + 30, fy + 25], outline=TEXT_COLOR, width=2, fill=COMPONENT_BG)
    draw.text((sw_x + 15, fy + 12), "SW", fill=TEXT_COLOR, font=get_font(11), anchor="mm")
    # Wire to relay
    draw.line([(sw_x + 30, fy + 12), (sw_x + 70, fy + 12)], fill=WIRE_COLOR, width=2)
    # Relay box
    rl_x = sw_x + 70
    draw.rectangle([rl_x, fy - 5, rl_x + 55, fy + 30], outline=TEXT_COLOR, width=2, fill=COMPONENT_BG)
    draw.text((rl_x + 27, fy + 12), "Relay", fill=TEXT_COLOR, font=get_font(13, bold=True), anchor="mm")
    # Wires to headlights
    draw.line([(rl_x + 55, fy + 5), (rl_x + 100, fy - 20)], fill=WIRE_COLOR, width=2)
    draw.line([(rl_x + 55, fy + 20), (rl_x + 100, fy + 45)], fill=WIRE_COLOR, width=2)
    # Headlight symbols (circles with rays)
    for hy_offset in [-20, 45]:
        hx, hy = rl_x + 100, fy + hy_offset
        draw.ellipse([hx, hy - 12, hx + 24, hy + 12], outline=YELLOW, width=2, fill=(255, 255, 200))
        # Rays
        for angle in [0, 45, -45]:
            rad = math.radians(angle)
            draw.line([(hx + 24, hy), (hx + 24 + 15 * math.cos(rad), hy - 15 * math.sin(rad))],
                      fill=YELLOW, width=1)
    draw.text((rl_x + 130, fy - 20), "Hi", fill=TEXT_COLOR, font=get_font(12), anchor="mm")
    draw.text((rl_x + 130, fy + 45), "Lo", fill=TEXT_COLOR, font=get_font(12), anchor="mm")

    # Lighting bullet points
    ly = 230
    for point in [
        "\u2022 Headlights: Halogen, HID, LED types",
        "\u2022 Relays switch high current loads",
        "\u2022 Fuses protect circuits from overload",
        "\u2022 Turn signals use flasher modules",
        "\u2022 Interior lights: dome, map, courtesy",
    ]:
        draw.text((110, ly), point, fill=TEXT_COLOR, font=get_font(17))
        ly += 26

    # Divider
    draw.line([(620, 100), (620, 410)], fill=(200, 200, 200), width=2)

    # Right side: Body Electrical
    draw.text((940, 115), "Body Electrical", fill=GREEN, font=get_font(22, bold=True), anchor="mm")

    # BCM diagram
    bcm_x, bcm_y = 860, 175
    draw.rectangle([bcm_x, bcm_y, bcm_x + 140, bcm_y + 70], outline=ACCENT_COLOR, width=3, fill=HIGHLIGHT_BG)
    draw.text((bcm_x + 70, bcm_y + 22), "Body Control", fill=ACCENT_COLOR, font=get_font(16, bold=True), anchor="mm")
    draw.text((bcm_x + 70, bcm_y + 45), "Module (BCM)", fill=ACCENT_COLOR, font=get_font(16, bold=True), anchor="mm")

    # Lines to subsystems
    subsystems = [
        (700, bcm_y + 35, "Power\nWindows"),
        (780, bcm_y - 50, "Remote\nKeyless"),
        (980, bcm_y - 50, "Security\nSystem"),
        (1080, bcm_y + 35, "Power\nLocks"),
        (700, bcm_y + 110, "Wipers"),
        (810, bcm_y + 120, "Mirrors"),
        (940, bcm_y + 120, "Seats"),
        (1080, bcm_y + 110, "Horn"),
    ]
    for sx, sy, label in subsystems:
        draw.line([(bcm_x + 70, bcm_y + 35), (sx, sy)], fill=ACCENT_COLOR, width=1)
        draw.ellipse([sx - 28, sy - 18, sx + 28, sy + 18], outline=ACCENT_COLOR, fill=COMPONENT_BG)
        draw.text((sx, sy), label, fill=TEXT_COLOR, font=get_font(10), anchor="mm")

    # Body electrical points
    by_pt = 350
    for point in [
        "\u2022 BCM controls comfort & convenience",
        "\u2022 CAN bus network connects modules",
        "\u2022 Scan tools read body system DTCs",
        "\u2022 34% of the A6 test - largest section",
    ]:
        draw.text((680, by_pt), point, fill=TEXT_COLOR, font=get_font(17))
        by_pt += 26

    # Bottom tip box
    draw.rectangle([80, 440, WIDTH - 80, 500], fill=(255, 248, 220), outline=(230, 200, 100))
    draw.text((WIDTH // 2, 458), "Tip: Body Electrical is the largest section of A6.",
              fill=(100, 80, 0), font=get_font(19, bold=True), anchor="mm")
    draw.text((WIDTH // 2, 482), "Know power windows, locks, keyless entry, security, and HMI systems.",
              fill=(100, 80, 0), font=get_font(17), anchor="mm")


slides_data.append({
    "render": slide_lighting_body,
    "narration": (
        "Lighting systems use fuses, switches, and relays. "
        "The switch sends a small current to the relay, which then handles the high current to the headlights. "
        "Know the differences between halogen, H-I-D, and LED lighting. "
        "Turn signals rely on flasher modules to create the blinking effect. "
        "Body electrical systems are controlled by the Body Control Module, or BCM. "
        "The BCM manages power windows, door locks, keyless entry, mirrors, wipers, and security. "
        "These modules communicate over the CAN bus data network. "
        "Body electrical is the single largest content area on A6, so understand how the BCM "
        "integrates all comfort and convenience features."
    ),
})


# ============ SLIDE 7: Diagnostic Tools ============
def slide_diagnostics(img, draw):
    draw.rectangle([0, 0, WIDTH, 80], fill=HEADER_BG)
    draw.text((WIDTH // 2, 40), "Diagnostic Tools & Techniques",
              fill=TITLE_COLOR, font=get_font(32, bold=True), anchor="mm")

    y_start = 110
    # DMM section
    draw.text((320, y_start), "Digital Multimeter (DMM)", fill=ACCENT_COLOR, font=get_font(22, bold=True), anchor="mm")

    # DMM diagram
    dmm_x, dmm_y = 110, y_start + 20
    draw.rounded_rectangle([dmm_x, dmm_y, dmm_x + 140, dmm_y + 160], radius=10,
                           outline=TEXT_COLOR, width=2, fill=(40, 40, 40))
    # Display
    draw.rectangle([dmm_x + 15, dmm_y + 10, dmm_x + 125, dmm_y + 50], fill=(180, 220, 180))
    draw.text((dmm_x + 70, dmm_y + 30), "12.6 V", fill=(0, 80, 0), font=get_font(20, bold=True), anchor="mm")
    # Dial
    draw.ellipse([dmm_x + 40, dmm_y + 60, dmm_x + 100, dmm_y + 120],
                 outline=(200, 200, 200), width=2, fill=(60, 60, 60))
    draw.text((dmm_x + 70, dmm_y + 90), "V", fill=(255, 255, 255), font=get_font(18, bold=True), anchor="mm")
    # Probe leads
    draw.line([(dmm_x + 40, dmm_y + 160), (dmm_x + 40, dmm_y + 190)], fill=WIRE_COLOR, width=3)
    draw.line([(dmm_x + 100, dmm_y + 160), (dmm_x + 100, dmm_y + 190)], fill=(0, 0, 0), width=3)
    draw.text((dmm_x + 40, dmm_y + 200), "RED +", fill=WIRE_COLOR, font=get_font(12, bold=True), anchor="mm")
    draw.text((dmm_x + 100, dmm_y + 200), "BLK -", fill=TEXT_COLOR, font=get_font(12, bold=True), anchor="mm")

    # DMM measurements
    my = y_start + 30
    measures = [
        ("Voltage (V)", "Electrical pressure in circuit"),
        ("Amperage (A)", "Current flow through circuit"),
        ("Resistance (\u03a9)", "Opposition to current flow"),
        ("Voltage Drop", "Voltage lost across a connection"),
    ]
    mx = 300
    for title, desc in measures:
        draw.text((mx, my), "\u2022 " + title, fill=TEXT_COLOR, font=get_font(17, bold=True))
        draw.text((mx + 20, my + 22), desc, fill=SUBTITLE_COLOR, font=get_font(15))
        my += 48

    # Divider
    draw.line([(600, 100), (600, 420)], fill=(200, 200, 200), width=2)

    # Scan Tool section
    draw.text((920, y_start), "Scan Tool & DTCs", fill=GREEN, font=get_font(22, bold=True), anchor="mm")

    # Scan tool diagram
    st_x, st_y = 700, y_start + 25
    draw.rounded_rectangle([st_x, st_y, st_x + 150, st_y + 120], radius=8,
                           outline=TEXT_COLOR, width=2, fill=(50, 50, 50))
    draw.rectangle([st_x + 10, st_y + 8, st_x + 140, st_y + 60], fill=(0, 100, 180))
    draw.text((st_x + 75, st_y + 25), "B1234", fill=(255, 255, 255), font=get_font(20, bold=True), anchor="mm")
    draw.text((st_x + 75, st_y + 45), "DTC Found", fill=(200, 220, 255), font=get_font(14), anchor="mm")
    # Cable
    draw.line([(st_x + 75, st_y + 120), (st_x + 75, st_y + 150)], fill=TEXT_COLOR, width=3)
    draw.text((st_x + 75, st_y + 165), "OBD-II Port", fill=TEXT_COLOR, font=get_font(13), anchor="mm")

    # DTC code breakdown
    dt_x, dt_y = 880, y_start + 30
    draw.text((dt_x, dt_y), "DTC Code Format:", fill=TEXT_COLOR, font=get_font(17, bold=True))
    dt_y += 30
    codes = [
        ("B", "= Body", GREEN),
        ("C", "= Chassis", ACCENT_COLOR),
        ("P", "= Powertrain", WIRE_COLOR),
        ("U", "= Network", (180, 120, 0)),
    ]
    for letter, meaning, color in codes:
        draw.text((dt_x + 10, dt_y), letter, fill=color, font=get_font(18, bold=True))
        draw.text((dt_x + 30, dt_y), meaning, fill=TEXT_COLOR, font=get_font(16))
        dt_y += 26

    dt_y += 10
    draw.text((dt_x, dt_y), "Example: B1234", fill=TEXT_COLOR, font=get_font(16, bold=True))
    dt_y += 22
    draw.text((dt_x, dt_y), "B=Body, 1=Mfr, 2=Area, 34=Fault", fill=SUBTITLE_COLOR, font=get_font(14))

    # Bottom technique box
    draw.rectangle([80, 430, WIDTH - 80, 510], fill=HIGHLIGHT_BG, outline=ACCENT_COLOR)
    draw.text((100, 440), "Diagnostic Flow:", fill=ACCENT_COLOR, font=get_font(18, bold=True))
    draw.text((100, 465), "1. Verify complaint  \u2192  2. Check DTCs  \u2192  3. Test with DMM  \u2192  "
              "4. Inspect wiring  \u2192  5. Repair & verify",
              fill=TEXT_COLOR, font=get_font(16))
    draw.text((100, 490), "Always follow: Voltage test \u2192 Voltage drop test \u2192 Resistance test",
              fill=SUBTITLE_COLOR, font=get_font(15))


slides_data.append({
    "render": slide_diagnostics,
    "narration": (
        "You need to know two essential diagnostic tools. "
        "The digital multimeter, or DMM, measures voltage, current, and resistance. "
        "Use it for voltage drop tests across connections and components. "
        "A good connection should have near-zero voltage drop. High voltage drop means high resistance, "
        "which points to a bad connection, corroded terminal, or damaged wire. "
        "The scan tool reads diagnostic trouble codes through the OBD-2 port. "
        "DTC codes start with a letter: B for Body, C for Chassis, P for Powertrain, U for Network. "
        "Always follow a logical diagnostic flow: verify the complaint, pull codes, "
        "test with your meter, inspect wiring, then repair and verify the fix."
    ),
})


# ============ SLIDE 8: Closing ============
def slide_closing(img, draw):
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=HEADER_BG)
    # Lightning bolt decoration
    bolt_points = [(640, 60), (670, 130), (650, 130), (690, 220), (655, 150), (675, 150), (640, 60)]
    draw.polygon(bolt_points, fill=YELLOW)
    draw.rectangle([100, 255, WIDTH - 100, 259], fill=(255, 255, 255))
    draw.text((WIDTH // 2, 290), "A6 Key Takeaways",
              fill=(200, 220, 255), font=get_font(28), anchor="mm")
    y = 330
    for t in [
        "Ohm's Law: V = I \u00d7 R is your diagnostic foundation",
        "Know Battery, Starting, and Charging system operation",
        "Series vs. Parallel: most auto circuits are parallel",
        "Master the DMM: voltage, amperage, resistance, voltage drop",
        "Body Electrical and the BCM are the biggest content area",
        "Follow a logical diagnostic flow every time",
    ]:
        draw.text((WIDTH // 2, y), f"\u2713  {t}",
                  fill=TITLE_COLOR, font=get_font(22), anchor="mm")
        y += 38
    draw.rectangle([0, HEIGHT - 50, WIDTH, HEIGHT], fill=(0, 50, 90))
    draw.text((WIDTH // 2, HEIGHT - 25),
              "Good luck on your ASE A6 exam!",
              fill=(255, 255, 255), font=get_font(22), anchor="mm")


slides_data.append({
    "render": slide_closing,
    "narration": (
        "Let's review the key takeaways. "
        "Ohm's Law is the foundation of everything: Voltage equals Current times Resistance. "
        "Understand how the battery, starter, and alternator work together. "
        "Remember that most automotive circuits are parallel, so each device operates independently. "
        "Master your DMM: voltage, amperage, resistance, and especially voltage drop testing. "
        "Body electrical controlled by the BCM is the largest area on the A6 test. "
        "And always follow a systematic diagnostic approach. "
        "Good luck on your A6 Electrical and Electronic Systems exam. You've got this!"
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
    communicate = edge_tts.Communicate(text, VOICE)
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

    speed_factor = 1.0
    if total_with_padding > TARGET_DURATION:
        speed_factor = min(total_with_padding / TARGET_DURATION, 1.5)
        print(f"Speeding up audio by {speed_factor:.2f}x to fit {TARGET_DURATION}s")

    # Second pass: build clips
    clips = []
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
    asyncio.run(build_video())
