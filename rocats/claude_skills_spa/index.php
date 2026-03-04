<?php
// Handle book fetching
if (isset($_GET['fetch'])) {
    header('Content-Type: text/plain; charset=utf-8');
    $url = $_GET['fetch'];
    $content = @file_get_contents($url);
    if ($content === false) {
        echo 'Error: Could not fetch the book.';
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
body { font-family: Georgia, 'Times New Roman', serif; background: #f5f0e8; color: #333; }

.url-bar {
    padding: 16px 24px;
    background: #fff;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    gap: 12px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
.url-bar label { font-weight: bold; white-space: nowrap; }
#bookUrl {
    flex: 1;
    padding: 8px 12px;
    font-size: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
}
#bookUrl:focus { outline: none; border-color: #666; }

#bookContent {
    max-width: 800px;
    margin: 24px auto;
    padding: 24px 32px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    white-space: pre-wrap;
    line-height: 1.4;
    font-size: 16px;
    min-height: 200px;
    margin-bottom: 70px;
}

/* Modal */
#modal {
    display: none;
    position: fixed;
    width: 360px;
    max-height: 400px;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);
    z-index: 1000;
    overflow: hidden;
    flex-direction: column;
}
#modal.visible { display: flex; }

#modalHeader {
    padding: 8px 12px;
    background: #f0ece4;
    border-bottom: 1px solid #ddd;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    user-select: none;
}
#modalClose {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #666;
    padding: 0 4px;
}
#modalClose:hover { color: #000; }

#modalBody {
    padding: 12px 16px;
    overflow-y: auto;
    flex: 1;
    font-size: 14px;
    line-height: 1.5;
    white-space: pre-wrap;
    word-wrap: break-word;
}

#loading { display: none; color: #888; font-style: italic; padding: 4px 0; }
#loading.visible { display: block; }
</style>
</head>
<body>

<div id="bookContent"></div>

<div class="url-bar">
    <label for="bookUrl">Book URL:</label>
    <input type="text" id="bookUrl" placeholder="Paste a Project Gutenberg plain text URL and press Enter" value="">
</div>

<div id="modal">
    <div id="modalHeader">
        <span>Translation</span>
        <button id="modalClose">&times;</button>
    </div>
    <div id="modalBody">
        <div id="loading">Loading...</div>
        <div id="modalText"></div>
    </div>
</div>

<script>
const Config = {
    local_llm: { host: '127.0.0.1:11434', model: 'gemma3:latest', streaming: true }
};

const bookUrlInput = document.getElementById('bookUrl');
const bookContent = document.getElementById('bookContent');
const modal = document.getElementById('modal');
const modalHeader = document.getElementById('modalHeader');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const modalText = document.getElementById('modalText');
const loading = document.getElementById('loading');

// Load book on Enter
bookUrlInput.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;
    const url = bookUrlInput.value.trim();
    if (!url) return;

    bookContent.innerHTML = '';
    bookContent.textContent = 'Loading book...';

    try {
        const resp = await fetch('index.php?fetch=' + encodeURIComponent(url));
        const text = await resp.text();
        bookContent.textContent = text;
    } catch (err) {
        bookContent.textContent = 'Error: ' + err.message;
    }
});

// Highlighted text lookup
document.addEventListener('mouseup', (e) => {
    if (modal.contains(e.target)) return;

    const sel = window.getSelection();
    const selectedText = sel.toString().trim();
    if (!selectedText || selectedText.length > 100) return;

    // Check selection is within book content
    if (!bookContent.contains(sel.anchorNode)) return;

    // Get surrounding context: 30 words before and after
    const fullText = bookContent.textContent;
    const selStart = getSelectionOffset(bookContent, sel);
    const before = fullText.substring(0, selStart);
    const after = fullText.substring(selStart + selectedText.length);

    const wordsBefore = before.split(/\s+/).filter(Boolean).slice(-30).join(' ');
    const wordsAfter = after.split(/\s+/).filter(Boolean).slice(0, 30).join(' ');

    const context = wordsBefore + ' ' + selectedText + ' ' + wordsAfter;
    const question = `in the context: ${context}, show the meaning of "${selectedText}" in 30 very simple English words\nno explanation, no extra words`;

    showModal();
    streamQuery(question);
});

function getSelectionOffset(container, sel) {
    const range = sel.getRangeAt(0);
    const preRange = document.createRange();
    preRange.selectNodeContents(container);
    preRange.setEnd(range.startContainer, range.startOffset);
    return preRange.toString().length;
}

// Stream LLM response
let abortController = null;

async function streamQuery(question) {
    if (abortController) abortController.abort();
    abortController = new AbortController();

    modalText.textContent = '';
    loading.classList.add('visible');

    try {
        const { host, model, streaming } = Config.local_llm;
        const resp = await fetch(`http://${host}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model, prompt: question, stream: streaming }),
            signal: abortController.signal,
        });

        loading.classList.remove('visible');
        const reader = resp.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, { stream: true });
            for (const line of chunk.split('\n')) {
                if (!line.trim()) continue;
                try {
                    const json = JSON.parse(line);
                    if (json.response) {
                        modalText.textContent += json.response;
                        modalBody.scrollTop = modalBody.scrollHeight;
                    }
                } catch (e) {}
            }
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            loading.classList.remove('visible');
            modalText.textContent = 'Error: ' + err.message;
        }
    }
}

// Modal position (remember last position)
function showModal() {
    const saved = localStorage.getItem('modalPos');
    if (saved) {
        const pos = JSON.parse(saved);
        modal.style.left = pos.x + 'px';
        modal.style.top = pos.y + 'px';
    } else {
        modal.style.right = '24px';
        modal.style.top = '80px';
        modal.style.left = 'auto';
    }
    modal.classList.add('visible');
}

function saveModalPos() {
    localStorage.setItem('modalPos', JSON.stringify({
        x: parseInt(modal.style.left),
        y: parseInt(modal.style.top),
    }));
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('visible');
    if (abortController) abortController.abort();
});

// Draggable modal
let dragging = false, dragOffX = 0, dragOffY = 0;

modalHeader.addEventListener('mousedown', (e) => {
    dragging = true;
    const rect = modal.getBoundingClientRect();
    dragOffX = e.clientX - rect.left;
    dragOffY = e.clientY - rect.top;
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    modal.style.left = (e.clientX - dragOffX) + 'px';
    modal.style.top = (e.clientY - dragOffY) + 'px';
    modal.style.right = 'auto';
});

document.addEventListener('mouseup', () => {
    if (dragging) {
        dragging = false;
        saveModalPos();
    }
});
</script>

</body>
</html>
