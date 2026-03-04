<?php
// Handle LLM query via Ollama
if (isset($_GET['q'])) {
    header('Content-Type: text/plain; charset=utf-8');
    header('X-Accel-Buffering: no');

    $question = $_GET['q'];
    $payload = json_encode([
        'model' => 'gemma3:latest',
        'prompt' => $question,
        'stream' => true,
    ]);

    $ch = curl_init('http://127.0.0.1:11434/api/generate');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, function ($ch, $data) {
        $json = json_decode($data, true);
        if (isset($json['response'])) {
            echo $json['response'];
            if (ob_get_level()) ob_flush();
            flush();
        }
        return strlen($data);
    });

    curl_exec($ch);
    curl_close($ch);
    exit;
}

// Handle book fetch
if (isset($_GET['fetch'])) {
    header('Content-Type: text/plain; charset=utf-8');
    $url = $_GET['fetch'];
    echo file_get_contents($url);
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

body {
    font-family: Georgia, 'Times New Roman', serif;
    background: #f5f1eb;
    color: #2c2c2c;
    min-height: 100vh;
}

#app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    margin-bottom: 16px;
    font-size: 1.5rem;
    color: #4a3728;
}

#url-bar {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
}

#book-url {
    flex: 1;
    padding: 10px 14px;
    font-size: 1rem;
    border: 2px solid #c9b99a;
    border-radius: 6px;
    background: #fff;
    outline: none;
    font-family: inherit;
}

#book-url:focus {
    border-color: #8b7355;
}

#book-url::placeholder {
    color: #a09080;
}

#loading {
    display: none;
    text-align: center;
    padding: 40px;
    color: #8b7355;
    font-style: italic;
}

#book-content {
    line-height: 1.4;
    white-space: pre-wrap;
    word-wrap: break-word;
    padding: 20px;
    background: #fffdf7;
    border-radius: 8px;
    border: 1px solid #e0d8c8;
    min-height: 200px;
    display: none;
}

/* Modal */
#modal-overlay {
    display: none;
}

#modal {
    display: none;
    position: fixed;
    z-index: 1000;
    width: 380px;
    max-height: 320px;
    background: #fffef9;
    border: 1px solid #c9b99a;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.18);
    overflow: hidden;
    flex-direction: column;
}

#modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background: #f0e8d8;
    cursor: grab;
    user-select: none;
    border-bottom: 1px solid #e0d8c8;
}

#modal-header:active { cursor: grabbing; }

#modal-title {
    font-weight: bold;
    font-size: 0.9rem;
    color: #4a3728;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 300px;
}

#modal-close {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #8b7355;
    padding: 0 4px;
}

#modal-close:hover { color: #4a3728; }

#modal-body {
    padding: 14px;
    overflow-y: auto;
    flex: 1;
    font-size: 0.95rem;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>
</head>
<body>
<div id="app">
    <h1>Gutenberg Book Reader</h1>
    <div id="url-bar">
        <input type="text" id="book-url" placeholder="Enter a Project Gutenberg book URL and press Enter..." />
    </div>
    <div id="loading">Loading book...</div>
    <div id="book-content"></div>
</div>

<div id="modal" style="display:none;">
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

// --- Book loading ---
bookUrl.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;
    const url = bookUrl.value.trim();
    if (!url) return;

    loading.style.display = 'block';
    bookContent.style.display = 'none';
    bookContent.textContent = '';

    try {
        const res = await fetch('index.php?fetch=' + encodeURIComponent(url));
        const text = await res.text();
        bookContent.textContent = text;
        bookContent.style.display = 'block';
    } catch (err) {
        bookContent.textContent = 'Error loading book: ' + err.message;
        bookContent.style.display = 'block';
    }
    loading.style.display = 'none';
});

// --- Highlight detection ---
bookContent.addEventListener('mouseup', () => {
    const sel = window.getSelection();
    const text = sel.toString().trim();
    if (!text || text.length > 100) return;

    // Get context: 30 words before and after
    const range = sel.getRangeAt(0);
    const fullText = bookContent.textContent;
    const startOff = getTextOffset(bookContent, range.startContainer, range.startOffset);
    const endOff = getTextOffset(bookContent, range.endContainer, range.endOffset);

    const before = fullText.substring(0, startOff);
    const after = fullText.substring(endOff);
    const wordsBefore = before.split(/\s+/).filter(Boolean).slice(-30).join(' ');
    const wordsAfter = after.split(/\s+/).filter(Boolean).slice(0, 30).join(' ');

    const context = wordsBefore + ' ' + text + ' ' + wordsAfter;
    const question = `context: ${context}\nshow me the pronunciation of "${text}" in International Phonetic Alphabet\nshow the meaning of "${text}" in 30 words, translate the meaning of "${text}" in simplified chinese\nno extra words`;

    showModal(text, question);
});

function getTextOffset(root, node, offset) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let total = 0;
    while (walker.nextNode()) {
        if (walker.currentNode === node) return total + offset;
        total += walker.currentNode.textContent.length;
    }
    return total + offset;
}

// --- Modal with streaming ---
let abortCtrl = null;

async function showModal(word, question) {
    if (abortCtrl) abortCtrl.abort();
    abortCtrl = new AbortController();

    modalTitle.textContent = word;
    modalBody.textContent = '';
    modal.style.display = 'flex';

    // Restore last position or center
    const saved = localStorage.getItem('modal-pos');
    if (saved) {
        const pos = JSON.parse(saved);
        modal.style.left = pos.x + 'px';
        modal.style.top = pos.y + 'px';
    } else {
        modal.style.left = (window.innerWidth / 2 - 190) + 'px';
        modal.style.top = '100px';
    }

    try {
        const res = await fetch('index.php?q=' + encodeURIComponent(question), {
            signal: abortCtrl.signal
        });
        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            modalBody.textContent += decoder.decode(value, { stream: true });
            modalBody.scrollTop = modalBody.scrollHeight;
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            modalBody.textContent += '\n[Error: ' + err.message + ']';
        }
    }
}

// --- Close modal ---
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    if (abortCtrl) abortCtrl.abort();
});

// --- Draggable modal ---
let isDragging = false, dragX = 0, dragY = 0;

modalHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragX = e.clientX - modal.offsetLeft;
    dragY = e.clientY - modal.offsetTop;
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - dragX;
    const y = e.clientY - dragY;
    modal.style.left = x + 'px';
    modal.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        localStorage.setItem('modal-pos', JSON.stringify({
            x: modal.offsetLeft,
            y: modal.offsetTop
        }));
    }
});
</script>
</body>
</html>
