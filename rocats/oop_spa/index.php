<?php
// API endpoint: fetch book content from URL
if (isset($_GET['fetch_url'])) {
    header('Content-Type: text/plain; charset=utf-8');
    $url = $_GET['fetch_url'];
    $ctx = stream_context_create(['http' => ['timeout' => 15, 'user_agent' => 'Mozilla/5.0']]);
    $html = @file_get_contents($url, false, $ctx);
    if ($html === false) {
        http_response_code(400);
        echo 'Failed to fetch URL';
        exit;
    }
    // Strip HTML tags, decode entities, return plain text
    $text = html_entity_decode(strip_tags($html), ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $text = preg_replace('/[ \t]+/', ' ', $text);
    $text = preg_replace('/\n{3,}/', "\n\n", $text);
    echo trim($text);
    exit;
}

// API endpoint: proxy to Ollama for translation (streaming)
if (isset($_GET['translate'])) {
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('X-Accel-Buffering: no');

    $words = $_GET['translate'];
    $prompt = "convert the following words to very very simple english: $words, show the converted result only, no explanation, no extra words.";

    $payload = json_encode([
        'model' => 'gemma3:latest',
        'prompt' => $prompt,
        'stream' => true,
        'think' => false
    ]);

    $ch = curl_init('http://127.0.0.1:11434/api/generate');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_WRITEFUNCTION => function($ch, $data) {
            echo $data;
            ob_flush();
            flush();
            return strlen($data);
        },
    ]);
    curl_exec($ch);
    curl_close($ch);
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Book Reader</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Georgia, serif; height: 100vh; display: flex; flex-direction: column; }

/* BookInput */
#book-input {
    background: wheat;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #c8a96e;
}
#book-input label {
    font-weight: bold;
    white-space: nowrap;
}
#book-input input {
    flex: 1;
    padding: 8px 12px;
    font-size: 15px;
    border: 1px solid #b89a5a;
    border-radius: 4px;
    outline: none;
}
#book-input input:focus { border-color: #8a6d3b; box-shadow: 0 0 0 2px rgba(138,109,59,0.2); }

/* BookContent */
#book-content {
    flex: 1;
    background: lightyellow;
    padding: 24px 32px;
    overflow-y: auto;
    line-height: 1.8;
    font-size: 17px;
    white-space: pre-wrap;
    user-select: text;
}
#book-content .paragraph {
    margin-bottom: 16px;
}

/* Popup Modal */
#popup-modal {
    display: none;
    position: fixed;
    min-width: 280px;
    max-width: 450px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    z-index: 1000;
    font-family: sans-serif;
}
#popup-header {
    background: #4a6fa5;
    color: #fff;
    padding: 8px 12px;
    border-radius: 8px 8px 0 0;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
}
#popup-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    line-height: 1;
    padding: 0 4px;
}
#popup-close:hover { opacity: 0.7; }
#popup-words {
    padding: 8px 12px;
    background: #f0f4f8;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #e0e0e0;
    word-break: break-word;
}
#popup-body {
    padding: 12px;
    font-size: 15px;
    line-height: 1.6;
    min-height: 40px;
    max-height: 300px;
    overflow-y: auto;
    color: #222;
}
#popup-body .loading {
    color: #888;
    font-style: italic;
}
</style>
</head>
<body>

<!-- BookInput -->
<div id="book-input">
    <label for="url-input">Book Url</label>
    <input type="text" id="url-input" placeholder="Enter a URL and press Enter">
</div>

<!-- BookContent -->
<div id="book-content"></div>

<!-- PopupShowHighlightedWords -->
<div id="popup-modal">
    <div id="popup-header">
        <span>Translate</span>
        <button id="popup-close">&times;</button>
    </div>
    <div id="popup-words"></div>
    <div id="popup-body"></div>
</div>

<script>
// ── BookInput: fetch URL on Enter ──
const urlInput = document.getElementById('url-input');
const bookContent = document.getElementById('book-content');

urlInput.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;
    const url = urlInput.value.trim();
    if (!url) return;

    bookContent.textContent = 'Loading...';
    try {
        const res = await fetch('?fetch_url=' + encodeURIComponent(url));
        if (!res.ok) throw new Error(await res.text());
        const text = await res.text();
        renderBookContent(text);
    } catch (err) {
        bookContent.textContent = 'Error: ' + err.message;
    }
});

// ── BookContent: split by newline into paragraphs ──
function renderBookContent(text) {
    bookContent.innerHTML = '';
    const lines = text.split('\n');
    lines.forEach(line => {
        if (line.trim() === '') return;
        const p = document.createElement('div');
        p.className = 'paragraph';
        p.textContent = line;
        bookContent.appendChild(p);
    });
}

// ── Highlight detection → show popup ──
const popup = document.getElementById('popup-modal');
const popupWords = document.getElementById('popup-words');
const popupBody = document.getElementById('popup-body');
const popupClose = document.getElementById('popup-close');

let currentAbort = null;

bookContent.addEventListener('mouseup', () => {
    const sel = window.getSelection();
    const text = sel.toString().trim();
    if (!text || text.length < 1) return;
    // Ensure selection is inside book-content
    if (!bookContent.contains(sel.anchorNode)) return;
    showPopup(text);
});

function showPopup(words) {
    popup.style.display = 'block';

    // Restore last saved position or default to center
    const saved = localStorage.getItem('popup_pos');
    if (saved) {
        const pos = JSON.parse(saved);
        popup.style.left = pos.x + 'px';
        popup.style.top = pos.y + 'px';
    } else {
        popup.style.left = (window.innerWidth / 2 - 160) + 'px';
        popup.style.top = (window.innerHeight / 2 - 100) + 'px';
    }

    popupWords.textContent = words;
    popupBody.innerHTML = '<span class="loading">Translating...</span>';

    translateWords(words);
}

// ── LanguageService.translate(words) – streaming from Ollama ──
async function translateWords(words) {
    if (currentAbort) currentAbort.abort();
    currentAbort = new AbortController();

    try {
        const res = await fetch('?translate=' + encodeURIComponent(words), {
            signal: currentAbort.signal
        });

        popupBody.textContent = '';
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });

            // Ollama streams JSON objects separated by newlines
            const lines = buffer.split('\n');
            buffer = lines.pop(); // keep incomplete line in buffer
            for (const line of lines) {
                if (!line.trim()) continue;
                try {
                    const obj = JSON.parse(line);
                    if (obj.response) {
                        popupBody.textContent += obj.response;
                    }
                } catch (_) {}
            }
        }
        // Process remaining buffer
        if (buffer.trim()) {
            try {
                const obj = JSON.parse(buffer);
                if (obj.response) popupBody.textContent += obj.response;
            } catch (_) {}
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            popupBody.textContent = 'Error: ' + err.message;
        }
    }
}

// ── Close popup ──
popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    if (currentAbort) currentAbort.abort();
});

// ── Draggable popup (remember last position) ──
(function() {
    const header = document.getElementById('popup-header');
    let dragging = false, offsetX = 0, offsetY = 0;

    header.addEventListener('mousedown', (e) => {
        dragging = true;
        offsetX = e.clientX - popup.offsetLeft;
        offsetY = e.clientY - popup.offsetTop;
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        popup.style.left = (e.clientX - offsetX) + 'px';
        popup.style.top = (e.clientY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (dragging) {
            dragging = false;
            // Remember last position
            localStorage.setItem('popup_pos', JSON.stringify({
                x: popup.offsetLeft,
                y: popup.offsetTop
            }));
        }
    });
})();
</script>
</body>
</html>
