<?php
if (isset($_GET['q']) && $_GET['q'] !== '') {
    header('Content-Type: text/plain; charset=utf-8');
    header('Cache-Control: no-cache');
    header('X-Accel-Buffering: no');
    while (ob_get_level()) ob_end_clean();

    $ch = curl_init('http://127.0.0.1:11434/api/generate');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'model' => 'gemma3:latest',
        'prompt' => $_GET['q'],
        'stream' => true
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, function($ch, $data) {
        foreach (explode("\n", $data) as $line) {
            $line = trim($line);
            if ($line === '') continue;
            $json = json_decode($line, true);
            if (isset($json['response'])) {
                echo $json['response'];
                flush();
            }
        }
        return strlen($data);
    });
    curl_exec($ch);
    curl_close($ch);
    exit;
}

if (isset($_GET['fetch_url']) && $_GET['fetch_url'] !== '') {
    header('Content-Type: text/html; charset=utf-8');
    $ctx = stream_context_create(['http' => ['timeout' => 30, 'user_agent' => 'Mozilla/5.0']]);
    $content = @file_get_contents($_GET['fetch_url'], false, $ctx);
    if ($content === false) {
        http_response_code(500);
        echo 'Failed to fetch book content.';
    } else {
        echo $content;
    }
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gutenberg Book Reader</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Georgia, serif; background: #f5f1eb; color: #333; }

#url-bar {
    position: sticky; top: 0; z-index: 10;
    background: #3a3a3a; padding: 12px 20px;
    display: flex; align-items: center; gap: 12px;
}
#url-bar label { color: #ccc; font-size: 14px; white-space: nowrap; }
#book-url {
    flex: 1; padding: 8px 12px; font-size: 14px;
    border: 1px solid #555; border-radius: 4px;
    background: #fff; outline: none;
}
#book-url:focus { border-color: #7aaedb; box-shadow: 0 0 0 2px rgba(122,174,219,0.3); }
#loading { color: #f0c040; font-size: 13px; display: none; }

#book-content {
    max-width: 800px; margin: 30px auto; padding: 20px 40px;
    background: #fff; min-height: 60vh;
    box-shadow: 0 1px 6px rgba(0,0,0,0.1); border-radius: 4px;
    line-height: 1.4; font-size: 16px;
}
#book-content:empty::before {
    content: "Enter a Project Gutenberg book URL above and press Enter.";
    color: #999; font-style: italic;
}

#modal {
    display: none; position: fixed; z-index: 100;
    width: 380px; max-height: 420px;
    background: #fff; border-radius: 8px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.25);
    overflow: hidden;
    flex-direction: column;
}
#modal.visible { display: flex; }
#modal-header {
    background: #3a3a3a; color: #fff; padding: 10px 14px;
    cursor: move; display: flex; justify-content: space-between; align-items: center;
    user-select: none; flex-shrink: 0;
}
#modal-title { font-size: 14px; font-weight: bold; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
#modal-close {
    background: none; border: none; color: #ccc; font-size: 20px;
    cursor: pointer; line-height: 1; padding: 0 4px;
}
#modal-close:hover { color: #fff; }
#modal-body {
    padding: 16px; overflow-y: auto; flex: 1;
    font-family: -apple-system, sans-serif; font-size: 14px;
    line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;
}
</style>
</head>
<body>

<div id="url-bar">
    <label for="book-url">Book URL:</label>
    <input type="text" id="book-url" placeholder="https://www.gutenberg.org/cache/epub/1342/pg1342.txt">
    <span id="loading">Loading...</span>
</div>

<div id="book-content"></div>

<div id="modal">
    <div id="modal-header">
        <span id="modal-title"></span>
        <button id="modal-close">&times;</button>
    </div>
    <div id="modal-body"></div>
</div>

<script>
const bookUrl = document.getElementById('book-url');
const bookContent = document.getElementById('book-content');
const loading = document.getElementById('loading');
const modal = document.getElementById('modal');
const modalHeader = document.getElementById('modal-header');
const modalTitle = document.getElementById('modal-title');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// --- Book fetching ---
bookUrl.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;
    const url = bookUrl.value.trim();
    if (!url) return;
    loading.style.display = 'inline';
    bookContent.innerHTML = '';
    try {
        const resp = await fetch('index.php?fetch_url=' + encodeURIComponent(url));
        if (!resp.ok) throw new Error('Fetch failed');
        const text = await resp.text();
        if (url.match(/\.txt(\?|$)/i)) {
            bookContent.innerHTML = '<pre style="white-space:pre-wrap;word-wrap:break-word;font-family:inherit;margin:0">' + text.replace(/</g, '&lt;') + '</pre>';
        } else {
            bookContent.innerHTML = text;
        }
    } catch (err) {
        bookContent.textContent = 'Error: ' + err.message;
    }
    loading.style.display = 'none';
});

// --- Text selection & LLM lookup ---
let currentController = null;

bookContent.addEventListener('mouseup', () => {
    const sel = window.getSelection();
    const text = sel.toString().trim();
    if (!text || text.length > 200) return;

    const fullText = bookContent.textContent;
    const idx = fullText.indexOf(text);
    if (idx === -1) return;

    const before = fullText.substring(0, idx).trim().split(/\s+/).slice(-30).join(' ');
    const after = fullText.substring(idx + text.length).trim().split(/\s+/).slice(0, 30).join(' ');
    const context = before + ' ' + text + ' ' + after;

    const question = `context: ${context}\nshow me the pronunciation of "${text}" in International Phonetic Alphabet\nshow the meaning of "${text}" in 30 words, translate the meaning of "${text}" in simplified chinese\nno extra words`;

    showModal(text);
    streamQuery(question);
});

function showModal(word) {
    modalTitle.textContent = word;
    modalBody.textContent = '';
    modal.classList.add('visible');
    const pos = JSON.parse(localStorage.getItem('modalPos') || 'null');
    if (pos) {
        modal.style.left = pos.x + 'px';
        modal.style.top = pos.y + 'px';
    } else {
        modal.style.right = '30px';
        modal.style.top = '80px';
        modal.style.left = 'auto';
    }
}

async function streamQuery(question) {
    if (currentController) currentController.abort();
    currentController = new AbortController();
    modalBody.textContent = 'Loading...';

    try {
        const resp = await fetch('index.php?q=' + encodeURIComponent(question), { signal: currentController.signal });
        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        modalBody.textContent = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            modalBody.textContent += decoder.decode(value, { stream: true });
        }
    } catch (e) {
        if (e.name !== 'AbortError') modalBody.textContent = 'Error: ' + e.message;
    }
}

modalClose.addEventListener('click', () => modal.classList.remove('visible'));

// --- Draggable modal ---
let dragging = false, dragOffX = 0, dragOffY = 0;

modalHeader.addEventListener('mousedown', (e) => {
    if (e.target === modalClose) return;
    dragging = true;
    const rect = modal.getBoundingClientRect();
    dragOffX = e.clientX - rect.left;
    dragOffY = e.clientY - rect.top;
    modal.style.right = 'auto';
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const x = e.clientX - dragOffX;
    const y = e.clientY - dragOffY;
    modal.style.left = x + 'px';
    modal.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    const rect = modal.getBoundingClientRect();
    localStorage.setItem('modalPos', JSON.stringify({ x: rect.left, y: rect.top }));
});
</script>
</body>
</html>
