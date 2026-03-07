<?php
//all application logic and data are here
if (isset($_GET['fetch_url'])) {
    $url = $_GET['fetch_url'];
    $content = @file_get_contents($url);
    if ($content === false) {
        echo "Error: Unable to fetch the URL.";
    } else {
        echo $content;
    }
    exit;
}

if (isset($_POST['llm_prompt'])) {
    $prompt = $_POST['llm_prompt'];
    $host = '127.0.0.1:11434';
    $model = 'gemma3:latest';

    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Connection: keep-alive');

    $ch = curl_init("http://$host/api/generate");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'model' => $model,
        'prompt' => $prompt,
        'stream' => true,
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, function ($ch, $data) {
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
<!-- all html/javascript/css code are here -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Reader</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: sans-serif;
            background: wheat;
        }
        .top-bar {
            background: BurlyWood;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            padding: 10px;
            margin-bottom: 10px;
        }
        #book_url {
            flex: 1;
            padding: 6px;
            font-size: 14px;
        }
        .book-history-wrapper {
            position: relative;
        }
        #book_history_btn {
            padding: 6px 20px 6px 12px;
            cursor: pointer;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpolygon points='0,0 10,0 5,6' fill='%23333'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 6px center;
        }
        #book_history_dropdown {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            background: #fff;
            border: 1px solid #ccc;
            min-width: 300px;
            max-height: 300px;
            overflow-y: auto;
            z-index: 100;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
        }
        #book_history_dropdown div {
            padding: 8px 12px;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        #book_history_dropdown div:hover {
            background: #eee;
        }
        #book_content {
            background: wheat;
            line-height: 1.4;
            padding: 20px;
            min-height: 200px;
        }
        #book_content p {
            position: relative;
            margin-bottom: 1em;
        }
        .simple-english-btn, .original-text-btn {
            background: gold;
            border: 1px solid #ccc;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 12px;
            margin-left: 8px;
            display: none;
        }
        /* Modal styles */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: 999;
        }
        .modal-box {
            position: absolute;
            top: 100px;
            left: 100px;
            background: #fff;
            border: 1px solid #999;
            box-shadow: 4px 4px 12px rgba(0,0,0,0.3);
            min-width: 250px;
            max-width: 450px;
            max-height: 350px;
            overflow-y: auto;
            z-index: 1000;
            padding: 16px;
            cursor: default;
        }
        .modal-header {
            cursor: move;
            background: #eee;
            padding: 8px;
            margin: -16px -16px 12px -16px;
            font-weight: bold;
            user-select: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .modal-close {
            cursor: pointer;
            font-size: 18px;
            background: none;
            border: none;
        }
    </style>
</head>
<body>

<div class="top-bar">
    <input type="text" id="book_url" placeholder="Enter book URL..." />
    <div class="book-history-wrapper">
        <button id="book_history_btn">History</button>
        <div id="book_history_dropdown"></div>
    </div>
</div>
<div id="book_content"></div>

<!-- Modal for highlighted words translation -->
<div id="translation_modal" class="modal-overlay">
    <div class="modal-box" id="modal_box">
        <div class="modal-header" id="modal_header">
            <span>Translation</span>
            <button class="modal-close" id="modal_close">&times;</button>
        </div>
        <div id="modal_body">Loading...</div>
    </div>
</div>

<script>
const bookUrlInput = document.getElementById('book_url');
const bookContent = document.getElementById('book_content');
const historyBtn = document.getElementById('book_history_btn');
const historyDropdown = document.getElementById('book_history_dropdown');
const translationModal = document.getElementById('translation_modal');
const modalBox = document.getElementById('modal_box');
const modalHeader = document.getElementById('modal_header');
const modalClose = document.getElementById('modal_close');
const modalBody = document.getElementById('modal_body');

// --- Book History (LocalStorage) ---
function getBookHistory() {
    try {
        return JSON.parse(localStorage.getItem('book_history')) || [];
    } catch { return []; }
}

function addBookHistory(url) {
    let history = getBookHistory();
    history = history.filter(h => h !== url);
    history.push(url);
    localStorage.setItem('book_history', JSON.stringify(history));
}

// --- BookHistory Dropdown ---
historyBtn.addEventListener('click', function() {
    const history = getBookHistory();
    historyDropdown.innerHTML = '';
    const recent = history.slice(-10).reverse();
    recent.forEach(url => {
        const div = document.createElement('div');
        div.textContent = url;
        div.addEventListener('click', () => {
            bookUrlInput.value = url;
            historyDropdown.style.display = 'none';
            loadBook(url);
        });
        historyDropdown.appendChild(div);
    });
    historyDropdown.style.display = historyDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(e) {
    if (!historyBtn.contains(e.target) && !historyDropdown.contains(e.target)) {
        historyDropdown.style.display = 'none';
    }
});

// --- Load Book ---
function loadBook(url) {
    // @preload: clear innerHTML
    bookContent.innerHTML = '';
    bookContent.textContent = 'Loading...';
    addBookHistory(url);

    fetch('index.php?fetch_url=' + encodeURIComponent(url))
        .then(r => r.text())
        .then(text => {
            // @postload: strip HTML tags
            const tmp = document.createElement('div');
            tmp.innerHTML = text;
            const plainText = tmp.textContent || tmp.innerText || '';
            // Split into paragraphs
            const paragraphs = plainText.split(/\n\s*\n|\r\n\s*\r\n/).filter(p => p.trim().length > 0);
            bookContent.innerHTML = '';
            paragraphs.forEach(pText => {
                const p = document.createElement('p');
                p.textContent = pText.trim();
                // Add SimpleEnglishConversionButton
                const btn = document.createElement('button');
                btn.className = 'simple-english-btn';
                btn.textContent = 'Convert to Simple English';
                btn.addEventListener('click', () => convertToSimpleEnglish(p, btn));
                p.appendChild(btn);
                bookContent.appendChild(p);
            });
            // Observe visibility for showing buttons
            setupVisibilityObserver();
        })
        .catch(() => {
            bookContent.textContent = 'Error loading content.';
        });
}

// --- Visibility Observer: show button when paragraph is visible ---
function setupVisibilityObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const btn = entry.target.querySelector('.simple-english-btn');
            if (btn) {
                btn.style.display = entry.isIntersecting ? 'inline-block' : 'none';
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('#book_content p').forEach(p => observer.observe(p));
}

// --- Convert to Simple English (streaming) ---
function convertToSimpleEnglish(paragraph, btn) {
    const textNodes = [];
    paragraph.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) textNodes.push(node);
    });
    const originalText = textNodes.map(n => n.textContent).join('');
    const prompt = 'Given <text>' + originalText + '</text>, convert it to a version that uses very simple English words. Show me the converted result only, no explanation, no extra words.';

    btn.style.display = 'none';
    // Clear text nodes
    textNodes.forEach(n => n.textContent = '');
    if (textNodes.length === 0) {
        paragraph.insertBefore(document.createTextNode(''), paragraph.firstChild);
        textNodes.push(paragraph.firstChild);
    }
    textNodes[0].textContent = 'Converting...';

    streamLLM(prompt, (partial) => {
        textNodes[0].textContent = partial;
    }, () => {
        // @after_replace: show OriginalTextButton
        let origBtn = paragraph.querySelector('.original-text-btn');
        if (!origBtn) {
            origBtn = document.createElement('button');
            origBtn.className = 'original-text-btn';
            origBtn.textContent = 'Original';
            origBtn.addEventListener('click', () => {
                textNodes[0].textContent = originalText;
                origBtn.style.display = 'none';
                btn.style.display = 'inline-block';
            });
            paragraph.appendChild(origBtn);
        }
        origBtn.style.display = 'inline-block';
    });
}

// --- Streaming LLM call ---
function streamLLM(prompt, onChunk, onDone) {
    const formData = new FormData();
    formData.append('llm_prompt', prompt);

    fetch('index.php', { method: 'POST', body: formData })
        .then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let fullText = '';

            function read() {
                reader.read().then(({ done, value }) => {
                    if (done) { if (onDone) onDone(); return; }
                    const chunk = decoder.decode(value, { stream: true });
                    // Ollama streams JSON lines
                    const lines = chunk.split('\n').filter(l => l.trim());
                    lines.forEach(line => {
                        try {
                            const obj = JSON.parse(line);
                            if (obj.response) {
                                fullText += obj.response;
                                onChunk(fullText);
                            }
                        } catch {}
                    });
                    read();
                });
            }
            read();
        });
}

// --- Highlighted text detection and modal ---
document.addEventListener('mouseup', function(e) {
    const sel = window.getSelection();
    const text = sel ? sel.toString().trim() : '';
    if (!text || text.length === 0) return;
    // Check if selection is within book_content
    if (!bookContent.contains(sel.anchorNode)) return;

    // Get context: 30 words before + selected + 30 words after
    const fullText = bookContent.textContent;
    const selStart = fullText.indexOf(text);
    if (selStart < 0) return;
    const before = fullText.substring(0, selStart).trim().split(/\s+/).slice(-30).join(' ');
    const after = fullText.substring(selStart + text.length).trim().split(/\s+/).slice(0, 30).join(' ');
    const context = before + ' ' + text + ' ' + after;
    const question = 'In the context: ' + context + ', show the meaning of ' + text + ' using very simple English words. No explanation, no extra words.';

    showModal();
    modalBody.textContent = 'Loading...';

    streamLLM(question, (partial) => {
        modalBody.textContent = partial;
    }, null);
});

// --- Modal: Draggable + Remember position ---
let modalLastPos = JSON.parse(localStorage.getItem('modal_pos') || 'null');

function showModal() {
    translationModal.style.display = 'block';
    if (modalLastPos) {
        modalBox.style.left = modalLastPos.x + 'px';
        modalBox.style.top = modalLastPos.y + 'px';
    }
}

modalClose.addEventListener('click', () => {
    translationModal.style.display = 'none';
});

translationModal.addEventListener('click', (e) => {
    if (e.target === translationModal) {
        translationModal.style.display = 'none';
    }
});

// Draggable modal
let isDragging = false, dragOffsetX = 0, dragOffsetY = 0;

modalHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragOffsetX = e.clientX - modalBox.offsetLeft;
    dragOffsetY = e.clientY - modalBox.offsetTop;
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - dragOffsetX;
    const y = e.clientY - dragOffsetY;
    modalBox.style.left = x + 'px';
    modalBox.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        modalLastPos = { x: modalBox.offsetLeft, y: modalBox.offsetTop };
        localStorage.setItem('modal_pos', JSON.stringify(modalLastPos));
    }
});

// --- @load: read last entry from book_history and trigger enter ---
window.addEventListener('DOMContentLoaded', () => {
    const history = getBookHistory();
    if (history.length > 0) {
        const lastUrl = history[history.length - 1];
        bookUrlInput.value = lastUrl;
        loadBook(lastUrl);
    }
});

// --- textbox @key.enter ---
bookUrlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const url = bookUrlInput.value.trim();
        if (url) loadBook(url);
    }
});
</script>
</body>
</html>
