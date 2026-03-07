<?php
//all application logic and data are here

// LLM proxy endpoint
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['llm_prompt'])) {
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    $payload = json_encode([
        'model' => 'gemma3:latest',
        'prompt' => $_POST['llm_prompt'],
        'stream' => true
    ]);
    $ch = curl_init('http://127.0.0.1:11434/api/generate');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, function($ch, $data) {
        echo $data;
        if (ob_get_level()) ob_flush();
        flush();
        return strlen($data);
    });
    curl_exec($ch);
    curl_close($ch);
    exit;
}

// Fetch URL endpoint
if (isset($_GET['fetch_url'])) {
    $url = $_GET['fetch_url'];
    $content = @file_get_contents($url);
    if ($content === false) {
        http_response_code(500);
        echo 'Error fetching URL';
    } else {
        header('Content-Type: text/plain; charset=utf-8');
        echo $content;
    }
    exit;
}
?>
<!-- all html/javascript/css code are here -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Book Reader</title>
<style>
body {
    margin: 0;
    padding: 0;
    background: wheat;
    font-family: sans-serif;
}
.top-bar {
    background: BurlyWood;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    gap: 5px;
}
#book_url {
    flex: 1;
    padding: 6px;
    font-size: 14px;
}
#book_content {
    background: wheat;
    line-height: 1.4;
    padding: 20px;
}
#book_content p {
    margin-bottom: 1em;
}
.simple-english-btn, .original-btn {
    background: gold;
    border: 1px solid #ccc;
    padding: 2px 8px;
    margin-left: 8px;
    cursor: pointer;
    font-size: 12px;
    border-radius: 3px;
    display: none;
}
/* History dropdown */
.history-wrapper {
    position: relative;
}
#book_history_btn {
    width: 30px;
    height: 30px;
    border: 1px solid #999;
    cursor: pointer;
    background-color: #eee;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpolygon points='5,7 15,7 10,14' fill='%23333'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px;
}
#book_history_dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    min-width: 300px;
    max-height: 300px;
    overflow-y: auto;
    z-index: 100;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
}
#book_history_dropdown div {
    padding: 6px 10px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    font-size: 13px;
    word-break: break-all;
}
#book_history_dropdown div:hover {
    background: #f0f0f0;
}
/* Modal */
.modal-overlay {
    display: none;
    position: fixed;
    z-index: 1000;
}
.modal-container {
    position: fixed;
    width: 400px;
    max-height: 400px;
    background: white;
    border: 1px solid #999;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
    z-index: 1001;
    display: flex;
    flex-direction: column;
}
.modal-container.wheat-bg {
    background: wheat;
}
#modal_header, .se-modal-header {
    background: #ddd;
    padding: 6px 10px;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}
#modal_box, .se-modal-body {
    padding: 10px;
    overflow-y: auto;
    flex: 1;
    max-height: 350px;
}
.modal-close-btn {
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
}
</style>
</head>
<body>

<div class="top-bar">
    <input type="text" id="book_url" value="" placeholder="Enter book URL...">
    <div class="history-wrapper">
        <button id="book_history_btn"></button>
        <div id="book_history_dropdown"></div>
    </div>
</div>

<div id="book_content"></div>

<!-- Translation Modal -->
<div id="translation_modal" class="modal-overlay">
    <div class="modal-container" id="translation_modal_container">
        <div id="modal_header">
            <span id="modal_title">Word Meaning</span>
            <span id="modal_close" class="modal-close-btn">&times;</span>
        </div>
        <div id="modal_box"></div>
    </div>
</div>

<!-- Simple English Modal -->
<div id="se_modal" class="modal-overlay">
    <div class="modal-container wheat-bg" id="se_modal_container">
        <div class="se-modal-header" id="se_modal_header">
            <span>Simple English</span>
            <span class="modal-close-btn" id="se_modal_close">&times;</span>
        </div>
        <div class="se-modal-body" id="se_modal_body"></div>
    </div>
</div>

<script>
// ---- Utility: localStorage helpers ----
function getBookHistory() {
    try { return JSON.parse(localStorage.getItem('book_history')) || []; }
    catch(e) { return []; }
}
function saveBookHistory(history) {
    localStorage.setItem('book_history', JSON.stringify(history));
}
function appendToHistory(url) {
    let history = getBookHistory();
    history = history.filter(u => u !== url);
    history.push(url);
    saveBookHistory(history);
}

// ---- BookHistory Dropdown ----
const historyBtn = document.getElementById('book_history_btn');
const historyDropdown = document.getElementById('book_history_dropdown');
historyBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const history = getBookHistory();
    historyDropdown.innerHTML = '';
    const recent = history.slice(-10).reverse();
    recent.forEach(url => {
        const div = document.createElement('div');
        div.textContent = url;
        div.addEventListener('click', function() {
            document.getElementById('book_url').value = url;
            historyDropdown.style.display = 'none';
            loadBook(url);
        });
        historyDropdown.appendChild(div);
    });
    historyDropdown.style.display = historyDropdown.style.display === 'none' || !historyDropdown.style.display ? 'block' : 'none';
});
document.addEventListener('click', function() {
    historyDropdown.style.display = 'none';
});

// ---- Book Loading ----
const bookUrlInput = document.getElementById('book_url');
const bookContent = document.getElementById('book_content');

bookUrlInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const url = bookUrlInput.value.trim();
        if (!url) return;
        appendToHistory(url);
        loadBook(url);
    }
});

function loadBook(url) {
    bookContent.innerHTML = '';
    bookContent.textContent = 'Loading...';
    fetch('index.php?fetch_url=' + encodeURIComponent(url))
        .then(r => r.text())
        .then(text => {
            bookContent.innerHTML = '';
            const stripped = text.replace(/<[^>]*>/g, '');
            const paragraphs = stripped.split(/\n\s*\n+/).filter(p => p.trim().length > 0);
            paragraphs.forEach(pText => {
                const p = document.createElement('p');
                p.textContent = pText.trim();
                addConvertButton(p);
                bookContent.appendChild(p);
            });
            observeButtons();
        })
        .catch(err => {
            bookContent.textContent = 'Error loading book: ' + err.message;
        });
}

// ---- IntersectionObserver for Convert buttons ----
let observer = null;
function observeButtons() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const btn = entry.target.querySelector('.simple-english-btn');
            const origBtn = entry.target.querySelector('.original-btn');
            if (btn) btn.style.display = entry.isIntersecting ? 'inline-block' : 'none';
            if (origBtn) origBtn.style.display = entry.isIntersecting ? 'inline-block' : 'none';
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('#book_content p').forEach(p => observer.observe(p));
}

// ---- SimpleEnglishConversionButton ----
function addConvertButton(p) {
    const btn = document.createElement('button');
    btn.className = 'simple-english-btn';
    btn.textContent = 'Convert to Simple English';
    btn.style.display = 'none';
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const originalText = Array.from(p.childNodes)
            .filter(n => n.nodeType === 3)
            .map(n => n.textContent)
            .join('');
        const prompt = `given <text>${originalText}</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words`;
        // Store original
        p.dataset.originalText = originalText;
        // Stream LLM result in-place
        const textNodes = Array.from(p.childNodes).filter(n => n.nodeType === 3);
        textNodes.forEach(n => n.remove());
        // Remove convert button, add placeholder for streaming
        btn.remove();
        const streamSpan = document.createElement('span');
        streamSpan.className = 'stream-target';
        p.insertBefore(streamSpan, p.firstChild);

        streamLLM(prompt, streamSpan, function() {
            // After streaming done, add Original button
            const origBtn = document.createElement('button');
            origBtn.className = 'original-btn';
            origBtn.textContent = 'Original';
            origBtn.addEventListener('click', function(e2) {
                e2.stopPropagation();
                streamSpan.remove();
                origBtn.remove();
                p.insertBefore(document.createTextNode(p.dataset.originalText), p.firstChild);
                addConvertButton(p);
                observeButtons();
            });
            p.appendChild(origBtn);
            observeButtons();
        });
    });
    p.appendChild(btn);
}

// ---- LLM Streaming ----
function streamLLM(prompt, targetEl, onDone) {
    const formData = new FormData();
    formData.append('llm_prompt', prompt);
    fetch('index.php', { method: 'POST', body: formData })
        .then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            targetEl.textContent = '';
            function read() {
                reader.read().then(({ done, value }) => {
                    if (done) { if (onDone) onDone(); return; }
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split('\n').filter(l => l.trim());
                    lines.forEach(line => {
                        try {
                            const obj = JSON.parse(line);
                            if (obj.response) targetEl.textContent += obj.response;
                        } catch(e) {}
                    });
                    read();
                });
            }
            read();
        })
        .catch(err => {
            targetEl.textContent = 'LLM Error: ' + err.message;
            if (onDone) onDone();
        });
}

// ---- Highlighted Text Translation Modal ----
const translationModal = document.getElementById('translation_modal');
const translationContainer = document.getElementById('translation_modal_container');
const modalBox = document.getElementById('modal_box');
const modalClose = document.getElementById('modal_close');

bookContent.addEventListener('mouseup', function() {
    const sel = window.getSelection();
    const selectedText = sel.toString().trim();
    if (!selectedText || selectedText.length === 0) return;
    // Get context: 30 words before + selected + 30 words after
    const anchorNode = sel.anchorNode;
    if (!anchorNode) return;
    const fullText = anchorNode.parentElement.closest('p') ?
        anchorNode.parentElement.closest('p').textContent :
        anchorNode.textContent;
    const idx = fullText.indexOf(selectedText);
    let before = '', after = '';
    if (idx >= 0) {
        const beforeText = fullText.substring(0, idx);
        const afterText = fullText.substring(idx + selectedText.length);
        before = beforeText.split(/\s+/).slice(-30).join(' ');
        after = afterText.split(/\s+/).slice(0, 30).join(' ');
    }
    const context = before + ' ' + selectedText + ' ' + after;
    const prompt = `in the context: ${context}, show the meaning of ${selectedText} using very simple English words no explanation, no extra words`;

    // Show modal
    translationModal.style.display = 'block';
    modalBox.textContent = '';
    // Restore position
    const savedPos = localStorage.getItem('modal_pos');
    if (savedPos) {
        const pos = JSON.parse(savedPos);
        translationContainer.style.left = pos.left + 'px';
        translationContainer.style.top = pos.top + 'px';
    } else {
        translationContainer.style.left = '100px';
        translationContainer.style.top = '100px';
    }
    streamLLM(prompt, modalBox, null);
});

modalClose.addEventListener('click', function() {
    translationModal.style.display = 'none';
});

// ---- Draggable Modals ----
function makeDraggable(header, container, storageKey) {
    let isDragging = false, offsetX = 0, offsetY = 0;
    header.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - container.getBoundingClientRect().left;
        offsetY = e.clientY - container.getBoundingClientRect().top;
        e.preventDefault();
    });
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        const left = e.clientX - offsetX;
        const top = e.clientY - offsetY;
        container.style.left = left + 'px';
        container.style.top = top + 'px';
        if (storageKey) {
            localStorage.setItem(storageKey, JSON.stringify({ left, top }));
        }
    });
    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
}

makeDraggable(document.getElementById('modal_header'), translationContainer, 'modal_pos');
makeDraggable(document.getElementById('se_modal_header'), document.getElementById('se_modal_container'), 'se_modal_pos');

// SE modal close
document.getElementById('se_modal_close').addEventListener('click', function() {
    document.getElementById('se_modal').style.display = 'none';
});

// ---- @load: restore last book_history entry ----
(function() {
    const history = getBookHistory();
    if (history.length > 0) {
        const lastUrl = history[history.length - 1];
        bookUrlInput.value = lastUrl;
        bookUrlInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    }
})();
</script>
</body>
</html>
