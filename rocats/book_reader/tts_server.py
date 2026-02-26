#!/opt/homebrew/bin/python3.11
"""TTS server using edge-tts for natural book narration."""

import asyncio
from flask import Flask, request, Response

import edge_tts

app = Flask(__name__)

DEFAULT_VOICE = "en-US-AndrewNeural"


def generate_audio_chunks(text, voice):
    import queue
    import threading

    q = queue.Queue()

    def run():
        loop = asyncio.new_event_loop()

        async def stream():
            communicate = edge_tts.Communicate(text, voice)
            async for chunk in communicate.stream():
                if chunk["type"] == "audio":
                    q.put(chunk["data"])
            q.put(None)

        loop.run_until_complete(stream())
        loop.close()

    t = threading.Thread(target=run)
    t.start()

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
    else:
        text = request.args.get("text", "")
        voice = request.args.get("voice", DEFAULT_VOICE)

    if not text:
        return Response("No text provided", status=400)

    return Response(
        generate_audio_chunks(text, voice),
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
    app.run(host="127.0.0.1", port=4000)
