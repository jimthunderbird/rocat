#!/opt/homebrew/bin/python3.11
"""TTS server using edge-tts for natural book narration."""

import asyncio
from flask import Flask, request, Response

import edge_tts

app = Flask(__name__)

DEFAULT_VOICE = "en-US-AndrewNeural"

# Shared event loop running in a background thread for reuse across requests
_loop = asyncio.new_event_loop()
_loop_thread = None


def _start_loop():
    global _loop_thread
    if _loop_thread is None or not _loop_thread.is_alive():
        _loop_thread = __import__('threading').Thread(target=_loop.run_forever, daemon=True)
        _loop_thread.start()


_start_loop()


def generate_audio_chunks(text, voice, rate=None):
    import queue

    q = queue.Queue()

    async def stream():
        kwargs = {"rate": rate} if rate else {}
        communicate = edge_tts.Communicate(text, voice, **kwargs)
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                q.put(chunk["data"])
        q.put(None)

    asyncio.run_coroutine_threadsafe(stream(), _loop)

    while True:
        chunk = q.get()
        if chunk is None:
            break
        yield chunk


@app.route("/tts", methods=["GET", "POST"])
def tts():
    if request.method == "POST":
        data = request.get_json(silent=True) or {}
        text = data.get("text", "")
        voice = data.get("voice", DEFAULT_VOICE)
        rate = data.get("rate", None)
    else:
        text = request.args.get("text", "")
        voice = request.args.get("voice", DEFAULT_VOICE)
        rate = request.args.get("rate", None)

    if not text:
        return Response("No text provided", status=400)

    return Response(
        generate_audio_chunks(text, voice, rate=rate),
        mimetype="audio/mpeg",
        headers={
            "Content-Type": "audio/mpeg",
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
        },
    )


@app.after_request
def add_cors(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    return response


if __name__ == "__main__":
    print(f"TTS Server starting with voice: {DEFAULT_VOICE}")
    print("  GET /tts?text=...&voice=...")
    app.run(host="127.0.0.1", port=4000, threaded=True)
