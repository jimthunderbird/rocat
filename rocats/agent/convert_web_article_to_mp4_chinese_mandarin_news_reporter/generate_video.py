#!/usr/bin/env python3
"""
Generate a Chinese Mandarin news reporter video from a web article.
Uses edge_tts for TTS, PIL for slide generation, and ffmpeg for video assembly.
Embeds a short LinkerBot demo video clip with continuous reporter narration overlay.
"""

import asyncio
import json
import os
import subprocess
import textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

WORK_DIR = Path(__file__).parent
OUTPUT_VIDEO = WORK_DIR / "video.mp4"
SLIDES_DIR = WORK_DIR / "slides"
FONT_PATH = "/System/Library/Fonts/STHeiti Medium.ttc"
VOICE = "zh-CN-YunyangNeural"  # Professional news anchor voice

# LinkerBot demo video
LINKERBOT_VIDEO_URL = "https://www.youtube.com/watch?v=rFSpNVJDAcQ"
LINKERBOT_CLIP = WORK_DIR / "linkerbot_clip.mp4"
LINKERBOT_CLIP_DURATION = 30  # seconds to extract

# Video dimensions (1080p)
WIDTH = 1920
HEIGHT = 1080

# Color scheme - professional news style
BG_COLOR = (15, 25, 60)        # Dark navy blue
TITLE_COLOR = (255, 255, 255)  # White
TEXT_COLOR = (230, 230, 230)   # Light gray
ACCENT_COLOR = (200, 40, 40)  # Red accent (Chinese news style)
BANNER_COLOR = (180, 30, 30)  # Dark red banner
SUBTITLE_BG = (0, 0, 0, 180)  # Semi-transparent black

# Index in SEGMENTS after which to insert the video clip (0-based).
# The clip plays right after this segment's slide.
CLIP_INSERT_AFTER = 2  # After "技术创新突破"

# News script segments: (slide_title, slide_bullets, narration_text)
# Segment at CLIP_INSERT_AFTER introduces the demo video before it plays.
SEGMENTS = [
    (
        "科技新闻",
        ["探索物理人工智能", "灵巧机器人公司的仿人机械手"],
        "观众朋友们大家好，欢迎收看今天的科技新闻报道。今天我们要为您介绍一家致力于物理人工智能领域的创新企业，灵巧机器人公司。他们正在开发具有人类级别精准度和灵活性的机器人手。"
    ),
    (
        "物理人工智能的愿景",
        ["人工智能从数字世界走向物理世界", "计算能力是\u201c大脑\u201d，硬件是\u201c身体\u201d", "真正的瓶颈不仅是算力，更在于硬件的跟进速度"],
        "随着人工智能从数字领域向物理世界转型，灵巧机器人公司正在攻克一个根本性的挑战。该公司的核心理念是：虽然计算能力代表了智能机器的大脑，但同样重要的是硬件，也就是身体。团队指出，真正的瓶颈不仅仅是算力，更关键的是硬件能否跟上发展的步伐。"
    ),
    (
        "技术创新突破",
        ["PEEK材料减速器替代传统金属部件", "多种机械传动方案并行研发", "自主软件套件：操作系统与强化学习框架",
         "", "接下来请看演示视频 ▶"],
        "在技术创新方面，灵巧机器人公司取得了多项突破。他们采用PEEK材料制造的减速器替代了传统金属部件，在减轻重量的同时提高了效率。公司并行研发了多种机械方案，包括腱驱动、连杆机构和直接驱动系统。此外，他们还开发了自主知识产权的软件套件，包括操作系统、创造模型以及真实世界强化学习框架。接下来，让我们通过一段演示视频，来近距离感受灵巧机器人公司的技术实力。请看。"
    ),
    (
        "三大应用领域",
        ["制造业：汽车和消费电子精密组装", "农业：与科研机构合作智能育种", "养老服务：辅助老年人日常生活"],
        "刚才我们看到了灵巧机器人手臂在实验室环境中的精彩表现。接下来让我们了解该公司目前主要瞄准的三大应用领域。在制造业方面，专注于汽车和消费电子行业的精密组装。在农业方面，与科研机构合作开发育种机器人和高科技农业解决方案。在养老服务方面，为老年人提供日常生活辅助，从叠衣服到倒咖啡等各种任务。"
    ),
    (
        "市场扩张与融资",
        ["2025年12月完成A++轮融资", "红杉中国和CCV领投", "计划年产能提升至五万到十万台"],
        "在市场扩张方面，灵巧机器人公司于二零二五年十二月完成了由红杉中国和CCV领投的A加加轮融资。公司计划将月产量从目前的一千多台，大幅提升至年产五万到十万台。这一增长被视为推动全球具身智能技术发展的关键一步。"
    ),
    (
        "总结与展望",
        ["从实验室走向真实世界的挑战", "物理人工智能的未来充满机遇", "感谢您的收看"],
        "当然，团队也坦诚地指出，将实验室演示转化为真实世界部署面临着重大挑战。在真实场景中，一个程序错误可能意味着物理损坏甚至安全风险。但正是这些挑战，推动着物理人工智能技术不断向前发展。以上就是今天的科技新闻报道，感谢您的收看，我们下次再见。"
    ),
]

# Narration spoken by the reporter DURING the LinkerBot demo video clip.
# This ensures the reporter talks continuously while the demo plays,
# eliminating voice cut-offs and silence gaps.
CLIP_NARRATION = (
    "现在大家看到的是灵巧机器人公司最新的技术演示。"
    "画面中，这只仿人机械手正在展示其卓越的精细操作能力。"
    "可以看到，每个手指关节都能够独立、灵活地运动，"
    "完美模拟了人类手指的动作方式。"
    "请注意观察它在抓取和操控不同物体时表现出的惊人精准度，"
    "这正是采用PEEK材料减速器所带来的核心优势。"
    "在大幅减轻机械手重量的同时，显著提高了运动精度和效率。"
    "这种灵巧手的技术突破，将为制造业、农业和养老服务等领域"
    "带来革命性的变化。"
)


def download_linkerbot_clip():
    """Download a short clip from the LinkerBot YouTube demo video."""
    if LINKERBOT_CLIP.exists():
        print("  LinkerBot clip already downloaded, skipping.")
        return

    print(f"  Downloading LinkerBot demo from YouTube...")
    raw_download = WORK_DIR / "linkerbot_raw.mp4"

    # Download with yt-dlp
    subprocess.run(
        [
            "yt-dlp",
            "-f", "best[ext=mp4][height<=1080]/best[ext=mp4]/best",
            "--no-playlist",
            "-o", str(raw_download),
        ] + (
            ["--download-sections", f"*0:00-0:{LINKERBOT_CLIP_DURATION}"]
        ) + [
            str(LINKERBOT_VIDEO_URL),
        ],
        check=True,
    )

    # Re-encode to ensure consistent format (1080p, 30fps, h264)
    print("  Re-encoding clip to match video format...")
    subprocess.run(
        [
            "ffmpeg", "-y",
            "-i", str(raw_download),
            "-t", str(LINKERBOT_CLIP_DURATION),
            "-vf", f"scale={WIDTH}:{HEIGHT}:force_original_aspect_ratio=decrease,"
                   f"pad={WIDTH}:{HEIGHT}:(ow-iw)/2:(oh-ih)/2:color=black,"
                   f"fps=30,setsar=1",
            "-c:v", "libx264", "-preset", "medium", "-crf", "23",
            "-c:a", "aac", "-b:a", "192k",
            "-pix_fmt", "yuv420p",
            str(LINKERBOT_CLIP),
        ],
        capture_output=True,
        check=True,
    )

    # Clean up raw download
    if raw_download.exists():
        raw_download.unlink()

    print(f"  Clip ready: {LINKERBOT_CLIP}")


def create_slide(index, title, bullets, total_slides):
    """Create a single news-style slide image."""
    img = Image.new("RGB", (WIDTH, HEIGHT), BG_COLOR)
    draw = ImageDraw.Draw(img)

    # Load fonts
    title_font = ImageFont.truetype(FONT_PATH, 72)
    bullet_font = ImageFont.truetype(FONT_PATH, 44)
    small_font = ImageFont.truetype(FONT_PATH, 28)

    # Top red banner bar
    draw.rectangle([(0, 0), (WIDTH, 8)], fill=ACCENT_COLOR)

    # Bottom red banner with news ticker style
    draw.rectangle([(0, HEIGHT - 70), (WIDTH, HEIGHT)], fill=BANNER_COLOR)
    draw.text(
        (40, HEIGHT - 58),
        "科技前沿 | TECH FRONTIER NEWS",
        fill=(255, 255, 255),
        font=small_font,
    )
    draw.text(
        (WIDTH - 300, HEIGHT - 58),
        f"第 {index + 1} / {total_slides} 页",
        fill=(200, 200, 200),
        font=small_font,
    )

    # Left accent bar
    draw.rectangle([(50, 140), (58, 140 + 80)], fill=ACCENT_COLOR)

    # Title
    draw.text((80, 145), title, fill=TITLE_COLOR, font=title_font)

    # Decorative line under title
    draw.rectangle([(80, 240), (WIDTH - 80, 243)], fill=(60, 80, 130))

    # Bullet points
    y_offset = 300
    for bullet in bullets:
        if not bullet:
            y_offset += 30
            continue
        # Bullet marker
        draw.rectangle([(100, y_offset + 14), (116, y_offset + 30)], fill=ACCENT_COLOR)
        # Wrap long text
        wrapped = textwrap.wrap(bullet, width=32)
        for line in wrapped:
            draw.text((140, y_offset), line, fill=TEXT_COLOR, font=bullet_font)
            y_offset += 65
        y_offset += 20

    # Source watermark
    draw.text(
        (WIDTH - 500, 30),
        "来源: TechNode 科技报道",
        fill=(100, 120, 160),
        font=small_font,
    )

    return img


async def generate_audio(text, output_path):
    """Generate TTS audio using edge_tts."""
    communicate = edge_tts.Communicate(text, VOICE, rate="-5%")
    await communicate.save(str(output_path))


async def generate_segment_audio(segments):
    """Generate audio for each segment and return file paths with durations."""
    audio_files = []
    for i, (_, _, narration) in enumerate(segments):
        audio_path = WORK_DIR / f"segment_{i}.mp3"
        print(f"  Generating audio for segment {i + 1}/{len(segments)}...")
        await generate_audio(narration, audio_path)
        audio_files.append(audio_path)
    return audio_files


def get_audio_duration(audio_path):
    """Get duration of an audio file using ffprobe."""
    result = subprocess.run(
        [
            "ffprobe",
            "-v", "quiet",
            "-show_entries", "format=duration",
            "-of", "csv=p=0",
            str(audio_path),
        ],
        capture_output=True,
        text=True,
    )
    return float(result.stdout.strip())


def get_video_duration(video_path):
    """Get duration of a video file using ffprobe."""
    return get_audio_duration(video_path)


def extract_clip_audio(clip_path, output_audio_path):
    """Extract audio track from video clip."""
    subprocess.run(
        [
            "ffmpeg", "-y",
            "-i", str(clip_path),
            "-vn",
            "-c:a", "aac", "-b:a", "192k",
            str(output_audio_path),
        ],
        capture_output=True,
        check=True,
    )


def mix_clip_audio_with_narration(clip_audio_path, narration_audio_path, output_path,
                                  clip_volume=0.15):
    """Mix lowered clip original audio with TTS narration.

    Output duration matches the narration so the reporter voice is never cut off.
    The clip's original audio is kept at low volume as ambient background.
    """
    subprocess.run(
        [
            "ffmpeg", "-y",
            "-i", str(narration_audio_path),
            "-i", str(clip_audio_path),
            "-filter_complex",
            f"[1:a]volume={clip_volume}[cliplow];"
            f"[0:a][cliplow]amix=inputs=2:duration=first:dropout_transition=2[out]",
            "-map", "[out]",
            "-c:a", "aac", "-b:a", "192k",
            str(output_path),
        ],
        capture_output=True,
        check=True,
    )


def build_video(slide_images, audio_files, clip_path, clip_insert_after,
                clip_narration_audio, output_path):
    """Combine slides, audio, and embedded video clip into final video.

    The reporter narrates continuously — including during the demo clip — so
    there are no voice cut-offs or silence gaps.  The clip's original audio is
    mixed in at low volume as ambient background.
    """
    # Get durations for each TTS audio segment
    durations = [get_audio_duration(af) for af in audio_files]
    clip_narration_duration = get_audio_duration(clip_narration_audio)

    print(f"  Segment durations: {[f'{d:.1f}s' for d in durations]}")
    print(f"  Clip narration duration: {clip_narration_duration:.1f}s")
    print(f"  Total duration: {sum(durations) + clip_narration_duration:.1f}s")

    # Extract original audio from clip and mix with reporter narration
    clip_audio = WORK_DIR / "clip_audio.m4a"
    clip_mixed_audio = WORK_DIR / "clip_mixed_audio.m4a"
    print("  Extracting clip audio and mixing with narration...")
    extract_clip_audio(clip_path, clip_audio)
    mix_clip_audio_with_narration(clip_audio, clip_narration_audio, clip_mixed_audio)

    # Build concatenated audio: TTS segments + mixed clip audio interleaved
    concat_audio = WORK_DIR / "concat_audio.m4a"
    audio_list_file = WORK_DIR / "audio_list.txt"
    with open(audio_list_file, "w") as f:
        for i, af in enumerate(audio_files):
            if i == clip_insert_after + 1:
                # Insert mixed clip audio before this segment
                f.write(f"file '{clip_mixed_audio}'\n")
            f.write(f"file '{af}'\n")
        # Edge case: if clip is after all segments
        if clip_insert_after >= len(audio_files):
            f.write(f"file '{clip_mixed_audio}'\n")

    subprocess.run(
        [
            "ffmpeg", "-y",
            "-f", "concat", "-safe", "0",
            "-i", str(audio_list_file),
            "-c:a", "aac", "-b:a", "192k",
            str(concat_audio),
        ],
        capture_output=True,
        check=True,
    )

    # Build ffmpeg inputs and filter for video
    inputs = []
    filter_parts = []
    input_idx = 0
    stream_labels = []

    for i, (img_path, duration) in enumerate(zip(slide_images, durations)):
        inputs.extend(["-loop", "1", "-t", str(duration), "-i", str(img_path)])
        label = f"v{input_idx}"
        filter_parts.append(
            f"[{input_idx}:v]fps=30,scale={WIDTH}:{HEIGHT},setsar=1[{label}]"
        )
        stream_labels.append(f"[{label}]")
        input_idx += 1

        # Insert clip right after the intro slide, trimmed to narration duration
        if i == clip_insert_after:
            inputs.extend(["-t", str(clip_narration_duration), "-i", str(clip_path)])
            clip_label = "vclip"
            filter_parts.append(
                f"[{input_idx}:v]fps=30,scale={WIDTH}:{HEIGHT}:force_original_aspect_ratio=decrease,"
                f"pad={WIDTH}:{HEIGHT}:(ow-iw)/2:(oh-ih)/2:color=black,"
                f"setsar=1[{clip_label}]"
            )
            stream_labels.append(f"[{clip_label}]")
            input_idx += 1

    # Add concat audio as last input
    audio_input_idx = input_idx
    inputs.extend(["-i", str(concat_audio)])

    # Concatenate all video streams
    n_streams = len(stream_labels)
    concat_str = "".join(stream_labels)
    filter_parts.append(f"{concat_str}concat=n={n_streams}:v=1:a=0[outv]")

    filter_complex = ";".join(filter_parts)

    cmd = [
        "ffmpeg", "-y",
        *inputs,
        "-filter_complex", filter_complex,
        "-map", "[outv]",
        "-map", f"{audio_input_idx}:a",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "23",
        "-c:a", "aac",
        "-b:a", "192k",
        "-pix_fmt", "yuv420p",
        "-shortest",
        str(output_path),
    ]

    print(f"  Running ffmpeg...")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"  ffmpeg stderr: {result.stderr}")
        raise RuntimeError(f"ffmpeg failed with code {result.returncode}")


def cleanup():
    """Remove temporary files."""
    patterns = [
        "segment_*.mp3", "concat_audio.m4a", "concat_audio.mp3",
        "audio_list.txt", "clip_audio.m4a", "clip_mixed_audio.m4a",
        "clip_narration.mp3", "linkerbot_raw.mp4",
    ]
    for pattern in patterns:
        for f in WORK_DIR.glob(pattern):
            f.unlink()
    if SLIDES_DIR.exists():
        for f in SLIDES_DIR.glob("*.png"):
            f.unlink()
        SLIDES_DIR.rmdir()


async def main():
    import edge_tts

    print("=== Chinese Mandarin News Video Generator ===\n")

    # Step 1: Download LinkerBot demo clip
    print("[1/5] Downloading LinkerBot demo clip...")
    download_linkerbot_clip()

    # Step 2: Create slides
    print("\n[2/5] Creating news slides...")
    SLIDES_DIR.mkdir(exist_ok=True)
    slide_paths = []
    for i, (title, bullets, _) in enumerate(SEGMENTS):
        img = create_slide(i, title, bullets, len(SEGMENTS))
        slide_path = SLIDES_DIR / f"slide_{i:02d}.png"
        img.save(str(slide_path))
        slide_paths.append(slide_path)
        print(f"  Created slide {i + 1}/{len(SEGMENTS)}: {title}")

    # Step 3: Generate segment narration audio
    print("\n[3/5] Generating segment narration audio...")
    audio_files = await generate_segment_audio(SEGMENTS)

    # Step 4: Generate clip narration audio (reporter talks during demo clip)
    print("\n[4/5] Generating clip narration audio...")
    clip_narration_audio = WORK_DIR / "clip_narration.mp3"
    await generate_audio(CLIP_NARRATION, clip_narration_audio)

    # Step 5: Build video with embedded clip and continuous narration
    print("\n[5/5] Building final video with embedded demo clip...")
    build_video(slide_paths, audio_files, LINKERBOT_CLIP, CLIP_INSERT_AFTER,
                clip_narration_audio, OUTPUT_VIDEO)

    # Cleanup temp files
    print("\nCleaning up temporary files...")
    cleanup()

    print(f"\nDone! Video saved to: {OUTPUT_VIDEO}")
    total_duration = get_audio_duration(OUTPUT_VIDEO) if OUTPUT_VIDEO.exists() else 0
    print(f"Video duration: {total_duration:.1f} seconds")


if __name__ == "__main__":
    import edge_tts
    asyncio.run(main())
