<?php
if (isset($_GET['fetch_url'])) {
    $url = $_GET['fetch_url'];
    $content = @file_get_contents($url);
    if ($content === false) {
        echo '';
        exit;
    }
    $content = strip_tags($content);
    echo $content;
    exit;
}

if (isset($_POST['llm_prompt'])) {
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Connection: keep-alive');

    $prompt = $_POST['llm_prompt'];
    $payload = json_encode([
        'model' => 'gemma3:latest',
        'prompt' => $prompt,
        'stream' => true
    ]);

    $ch = curl_init('http://127.0.0.1:11434/api/generate');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, function($ch, $data) {
        echo $data;
        ob_flush();
        flush();
        return strlen($data);
    });
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
<title>Gutenberg Book Reader</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Georgia, serif; }
#url-bar {
    background: BurlyWood;
    padding: 10px;
}
#book-url {
    width: 100%;
    padding: 8px;
    font-size: 16px;
}
#book-content {
    background: wheat;
    padding: 20px;
    line-height: 1.4;
    min-height: 80vh;
}
#book-content p {
    margin-bottom: 1em;
    position: relative;
}
.convert-btn {
    background: gold;
    border: 1px solid #999;
    padding: 2px 8px;
    cursor: pointer;
    font-size: 12px;
    margin-left: 8px;
    display: none;
}
.convert-btn.visible {
    display: inline;
}
.modal-overlay {
    position: fixed;
    z-index: 1000;
    background: white;
    border: 2px solid #333;
    border-radius: 6px;
    min-width: 300px;
    max-width: 500px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.modal-header {
    background: #333;
    color: white;
    padding: 8px 12px;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0 0;
}
.modal-header .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
}
.modal-body {
    padding: 12px;
    max-height: 300px;
    overflow-y: auto;
}
.modal-body.wheat-bg {
    background: wheat;
}
</style>
</head>
<body>

<div id="url-bar">
    <input type="text" id="book-url" placeholder="Enter Gutenberg book URL and press Enter">
</div>
<div id="book-content"></div>

<script>
const bookUrl = document.getElementById('book-url');
const bookContent = document.getElementById('book-content');

// localStorage book_history helpers
function getBookHistory() {
    try {
        return JSON.parse(localStorage.getItem('book_history')) || [];
    } catch { return []; }
}

function addToBookHistory(url) {
    let history = getBookHistory();
    if (!history.includes(url)) {
        history.push(url);
        localStorage.setItem('book_history', JSON.stringify(history));
    }
}

// On load: read last entry from book_history and trigger enter
window.addEventListener('DOMContentLoaded', () => {
    const history = getBookHistory();
    if (history.length > 0) {
        bookUrl.value = history[history.length - 1];
        bookUrl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    }
});

// Enter key to load book
bookUrl.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;
    const url = bookUrl.value.trim();
    if (!url) return;

    bookContent.innerHTML = '';
    bookContent.textContent = 'Loading...';
    addToBookHistory(url);

    try {
        const resp = await fetch('index.php?fetch_url=' + encodeURIComponent(url));
        const text = await resp.text();
        bookContent.innerHTML = '';

        const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());
        paragraphs.forEach(pText => {
            const p = document.createElement('p');
            p.textContent = pText.trim();

            const btn = document.createElement('button');
            btn.className = 'convert-btn';
            btn.textContent = 'Convert to Simple English';
            btn.addEventListener('click', () => convertToSimpleEnglish(pText.trim()));
            p.appendChild(btn);

            bookContent.appendChild(p);
        });

        observeParagraphs();
    } catch (err) {
        bookContent.textContent = 'Error loading book.';
    }
});

// IntersectionObserver for convert buttons
function observeParagraphs() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const btn = entry.target.querySelector('.convert-btn');
            if (btn) {
                if (entry.isIntersecting) {
                    btn.classList.add('visible');
                } else {
                    btn.classList.remove('visible');
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('#book-content p').forEach(p => observer.observe(p));
}

// Text selection -> word meaning modal
let modalSuppressed = false;
document.getElementById('book-content').addEventListener('mouseup', () => {
    if (modalSuppressed) return;
    const sel = window.getSelection();
    const text = sel.toString().trim();
    if (!text) return;

    const range = sel.getRangeAt(0);
    const container = range.startContainer.parentElement;
    if (!container.closest('#book-content')) return;

    const pEl = container.closest('p');
    if (!pEl) return;

    const fullText = pEl.textContent;
    const selStart = fullText.indexOf(text);
    const before30 = fullText.substring(0, selStart).split(/\s+/).slice(-30).join(' ');
    const after30 = fullText.substring(selStart + text.length).split(/\s+/).slice(0, 30).join(' ');
    const context = before30 + ' ' + text + ' ' + after30;

    const prompt = `in the context: ${context}, show the meaning of ${text} using very simple English words no explanation, no extra words`;

    showStreamingModal('Word Meaning', prompt, 'meaning-modal', false);
});

// Convert to Simple English
function convertToSimpleEnglish(paragraphText) {
    const prompt = `given <text>${paragraphText}</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words`;
    showStreamingModal('Simple English', prompt, 'simple-english-modal', true);
}

// Modal creation with streaming LLM
function showStreamingModal(title, prompt, modalId, wheatBg) {
    // Restore saved position
    let savedPos = null;
    try {
        savedPos = JSON.parse(localStorage.getItem('modal_pos_' + modalId));
    } catch {}

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.left = savedPos ? savedPos.x + 'px' : '50%';
    modal.style.top = savedPos ? savedPos.y + 'px' : '20%';
    if (!savedPos) modal.style.transform = 'translateX(-50%)';

    modal.innerHTML = `
        <div class="modal-header">
            <span>${title}</span>
            <button class="close-btn">&times;</button>
        </div>
        <div class="modal-body ${wheatBg ? 'wheat-bg' : ''}"></div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.getSelection().removeAllRanges();
        modalSuppressed = true;
        modal.remove();
        setTimeout(() => { modalSuppressed = false; }, 300);
    });

    // Draggable
    const header = modal.querySelector('.modal-header');
    let isDragging = false, dragX, dragY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = modal.getBoundingClientRect();
        dragX = e.clientX - rect.left;
        dragY = e.clientY - rect.top;
        modal.style.transform = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        modal.style.left = (e.clientX - dragX) + 'px';
        modal.style.top = (e.clientY - dragY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            const rect = modal.getBoundingClientRect();
            localStorage.setItem('modal_pos_' + modalId, JSON.stringify({ x: rect.left, y: rect.top }));
        }
    });

    // Stream LLM response
    const body = modal.querySelector('.modal-body');
    body.textContent = 'Thinking...';

    const formData = new FormData();
    formData.append('llm_prompt', prompt);

    fetch('index.php', { method: 'POST', body: formData })
        .then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            body.textContent = '';

            function read() {
                reader.read().then(({ done, value }) => {
                    if (done) return;
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split('\n').filter(l => l.trim());
                    lines.forEach(line => {
                        try {
                            const json = JSON.parse(line);
                            if (json.response) {
                                body.textContent += json.response;
                                body.scrollTop = body.scrollHeight;
                            }
                        } catch {}
                    });
                    read();
                });
            }
            read();
        })
        .catch(() => {
            body.textContent = 'Error connecting to LLM.';
        });
}
</script>
</body>
</html>
