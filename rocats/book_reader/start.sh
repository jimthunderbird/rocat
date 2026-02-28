#!/bin/bash

cd "$(dirname "$0")"

# Kill existing PHP server on port 3000
echo "Checking for existing PHP server on port 3000..."
PID=$(lsof -ti:3000 2>/dev/null)
if [ -n "$PID" ]; then
    echo "Killing existing process on port 3000 (PID: $PID)"
    kill $PID 2>/dev/null
    sleep 1
fi

# Kill existing Ollama server on port 11434
echo "Checking for existing Ollama server on port 11434..."
PID=$(lsof -ti:11434 2>/dev/null)
if [ -n "$PID" ]; then
    echo "Killing existing process on port 11434 (PID: $PID)"
    kill $PID 2>/dev/null
    sleep 1
fi

# Kill existing TTS server on port 4000
echo "Checking for existing TTS server on port 4000..."
PID=$(lsof -ti:4000 2>/dev/null)
if [ -n "$PID" ]; then
    echo "Killing existing process on port 4000 (PID: $PID)"
    kill $PID 2>/dev/null
    sleep 1
fi

# Start PHP web server on port 3000 (multiple workers so long requests don't block others)
echo "Starting PHP web server on port 3000..."
PHP_CLI_SERVER_WORKERS=4 php -S 127.0.0.1:3000 &
PHP_PID=$!

# Start Ollama server
echo "Starting Ollama server..."
ollama serve &
OLLAMA_PID=$!

# Start TTS server
echo "Starting TTS server..."
python3.11 tts_server.py &
TTS_PID=$!

echo ""
echo "All services started:"
echo "  PHP server:    http://127.0.0.1:3000"
echo "  Ollama server: http://127.0.0.1:11434"
echo "  TTS server:    http://127.0.0.1:4000"
echo ""
echo "Press Ctrl+C to stop all services."

# Trap Ctrl+C to kill all background processes
trap "echo 'Stopping all services...'; kill $PHP_PID $TTS_PID $OLLAMA_PID 2>/dev/null; exit" INT TERM

# Wait for all background processes
wait
