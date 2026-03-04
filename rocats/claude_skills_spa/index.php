<?php
if (isset($_GET['fetch_book'])) {
    header('Content-Type: text/plain; charset=utf-8');
    $url = $_GET['fetch_book'];
    $content = @file_get_contents($url);
    if ($content === false) {
        http_response_code(400);
        echo 'Failed to fetch book content.';
    } else {
        echo $content;
    }
    exit;
}

if (isset($_POST['llm_query'])) {
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Connection: keep-alive');

    $question = $_POST['llm_query'];
    $payload = json_encode([
        'model' => 'gemma3:latest',
        'prompt' => $question,
        'stream' => true
    ]);

    $ch = curl_init('http://127.0.0.1:11434/api/generate');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
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
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gutenberg Book Reader</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Georgia, serif; min-height: 100vh; display: flex; flex-direction: column; background: #f5f0e8; }

#url_bar {
    padding: 0.8rem 1.5rem;
    background: BurlyWood;
    display: flex;
    align-items: center;
    gap: 0.8rem;
}
#url_bar label { color: #333; font-size: 0.9rem; white-space: nowrap; font-weight: bold; }
#book_url {
    flex: 1;
    padding: 0.5rem 0.8rem;
    font-size: 0.95rem;
    border: 1px solid #a08050;
    border-radius: 4px;
    background: #fff;
    color: #333;
    outline: none;
}
#book_url:focus { border-color: #705030; }
#book_url::placeholder { color: #999; }

#book_content {
    flex: 1;
    padding: 2rem 3rem;
    background: wheat;
    line-height: 1.4;
    overflow-y: auto;
    font-size: 1.05rem;
    color: #333;
}
.paragraph-wrapper { position: relative; margin-bottom: 0.8rem; }
.paragraph-wrapper p { white-space: pre-wrap; margin: 0; display: inline; }
.simplify-btn {
    display: inline-block;
    margin-left: 0.4rem;
    padding: 0.15rem 0.5rem;
    vertical-align: baseline;
    font-size: 0.75rem;
    background: #d2a860;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s;
}
.paragraph-wrapper.visible .simplify-btn { opacity: 1; }
.simplify-btn:hover { background: #b8903a; }
.simplify-btn.loading { opacity: 1; background: #999; cursor: wait; }

.simple-modal {
    display: none;
    position: fixed;
    width: 380px;
    max-height: 320px;
    border: 1px solid #bbb;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);
    z-index: 1000;
    flex-direction: column;
    overflow: hidden;
}
.simple-modal .modal-header {
    padding: 0.5rem 0.8rem;
    background: #5a4a3a;
    color: #fff;
    font-size: 0.85rem;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}
.simple-modal .modal-header .close_btn { cursor: pointer; font-size: 1.1rem; opacity: 0.8; }
.simple-modal .modal-header .close_btn:hover { opacity: 1; }
.simple-modal .modal-title { font-weight: bold; }
.simple-modal .modal-body {
    padding: 0.8rem;
    overflow-y: auto;
    flex: 1;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #333;
}
.simple-modal .modal-loading {
    display: none;
    color: #888;
    font-style: italic;
    font-size: 0.85rem;
    padding: 0.3rem 0;
}

#translation_modal { background: #fffef5; top: 100px; left: 100px; }
#simplify_modal { background: wheat; top: 150px; left: 150px; }
</style>
</head>
<body>

<div id="url_bar">
    <label for="book_url">Book URL:</label>
    <input type="text" id="book_url" placeholder="Paste a Project Gutenberg .txt URL and press Enter">
</div>

<div id="book_content"></div>

<div id="translation_modal" class="simple-modal">
    <div class="modal-header">
        <span class="modal-title" id="trans_title"></span>
        <span class="close_btn" onclick="closeModal('translation_modal')">&times;</span>
    </div>
    <div class="modal-body">
        <div class="modal-loading" id="trans_loading">Loading...</div>
        <div class="modal-result" id="trans_result"></div>
    </div>
</div>

<div id="simplify_modal" class="simple-modal">
    <div class="modal-header">
        <span class="modal-title">Simple English</span>
        <span class="close_btn" onclick="closeModal('simplify_modal')">&times;</span>
    </div>
    <div class="modal-body">
        <div class="modal-loading" id="simplify_loading">Loading...</div>
        <div class="modal-result" id="simplify_result"></div>
    </div>
</div>

<script>
const bookContent = document.getElementById('book_content');
const bookUrl = document.getElementById('book_url');

// --- Modal drag system ---
function setupDrag(modalEl, storageKey) {
    const header = modalEl.querySelector('.modal-header');
    let isDragging = false, offsetX, offsetY;

    const saved = localStorage.getItem(storageKey);
    if (saved) {
        const pos = JSON.parse(saved);
        modalEl.style.left = pos.left + 'px';
        modalEl.style.top = pos.top + 'px';
    }

    header.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - modalEl.offsetLeft;
        offsetY = e.clientY - modalEl.offsetTop;
        e.preventDefault();
    });
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        modalEl.style.left = (e.clientX - offsetX) + 'px';
        modalEl.style.top = (e.clientY - offsetY) + 'px';
    });
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            localStorage.setItem(storageKey, JSON.stringify({
                left: modalEl.offsetLeft,
                top: modalEl.offsetTop
            }));
        }
    });
}

const transModal = document.getElementById('translation_modal');
const simplifyModal = document.getElementById('simplify_modal');
setupDrag(transModal, 'trans_modal_pos');
setupDrag(simplifyModal, 'simplify_modal_pos');

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// --- Fetch book ---
bookUrl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const url = this.value.trim();
        if (!url) return;
        bookContent.innerHTML = '';
        fetch('?fetch_book=' + encodeURIComponent(url))
            .then(r => {
                if (!r.ok) throw new Error('Failed to fetch');
                return r.text();
            })
            .then(text => renderParagraphs(text))
            .catch(err => { bookContent.textContent = 'Error: ' + err.message; });
    }
});

// --- Highlighted text translation modal ---
bookContent.addEventListener('mouseup', function() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (!selectedText || selectedText.length > 80) return;

    const range = selection.getRangeAt(0);
    const fullText = bookContent.textContent;

    const tempRange = document.createRange();
    tempRange.setStart(bookContent, 0);
    tempRange.setEnd(range.startContainer, range.startOffset);
    const startPos = tempRange.toString().length;
    const endPos = startPos + selectedText.length;

    const textBefore = fullText.substring(0, startPos);
    const textAfter = fullText.substring(endPos);
    const wordsBefore = textBefore.split(/\s+/).filter(Boolean).slice(-30).join(' ');
    const wordsAfter = textAfter.split(/\s+/).filter(Boolean).slice(0, 30).join(' ');

    const context = wordsBefore + ' ' + selectedText + ' ' + wordsAfter;
    const question = `in the context: ${context}, show the meaning of "${selectedText}" in 30 very simple English words. no explanation, no extra words`;

    showTranslationModal(selectedText, question);
});

function showTranslationModal(word, question) {
    const title = document.getElementById('trans_title');
    const result = document.getElementById('trans_result');
    const loading = document.getElementById('trans_loading');

    title.textContent = word;
    result.textContent = '';
    loading.style.display = 'block';

    const saved = localStorage.getItem('trans_modal_pos');
    if (saved) {
        const pos = JSON.parse(saved);
        transModal.style.left = pos.left + 'px';
        transModal.style.top = pos.top + 'px';
    }
    transModal.style.display = 'flex';

    streamLLM(question, result, loading);
}

// --- Paragraph rendering with visibility observer ---
const paraObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
    });
}, { root: null, threshold: 0.1 });

function renderParagraphs(text) {
    bookContent.innerHTML = '';
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());
    paragraphs.forEach(paraText => {
        const wrapper = document.createElement('div');
        wrapper.className = 'paragraph-wrapper';

        const p = document.createElement('p');
        p.textContent = paraText.trim();

        const btn = document.createElement('button');
        btn.className = 'simplify-btn';
        btn.textContent = 'Convert to Simple English';
        btn.onclick = () => simplifyParagraph(btn, p.firstChild.textContent);
        p.appendChild(btn);

        wrapper.appendChild(p);

        bookContent.appendChild(wrapper);
        paraObserver.observe(wrapper);
    });
}

// --- Simplify paragraph -> show in modal ---
function simplifyParagraph(btn, text) {
    if (btn.classList.contains('loading')) return;
    btn.classList.add('loading');
    btn.textContent = 'Converting...';

    const result = document.getElementById('simplify_result');
    const loading = document.getElementById('simplify_loading');

    result.textContent = '';
    loading.style.display = 'block';

    const saved = localStorage.getItem('simplify_modal_pos');
    if (saved) {
        const pos = JSON.parse(saved);
        simplifyModal.style.left = pos.left + 'px';
        simplifyModal.style.top = pos.top + 'px';
    }
    simplifyModal.style.display = 'flex';

    const prompt = `given <text>${text}</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words`;

    streamLLM(prompt, result, loading, () => {
        btn.classList.remove('loading');
        btn.textContent = 'Convert to Simple English';
    });
}

// --- Shared streaming LLM helper ---
function streamLLM(question, resultEl, loadingEl, onDone) {
    const formData = new FormData();
    formData.append('llm_query', question);

    fetch('', { method: 'POST', body: formData })
        .then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            if (loadingEl) loadingEl.style.display = 'none';

            function read() {
                reader.read().then(({ done, value }) => {
                    if (done) { if (onDone) onDone(); return; }
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split('\n').filter(Boolean);
                    for (const line of lines) {
                        try {
                            const json = JSON.parse(line);
                            if (json.response) resultEl.textContent += json.response;
                        } catch (e) {}
                    }
                    read();
                });
            }
            read();
        })
        .catch(err => {
            if (loadingEl) loadingEl.style.display = 'none';
            resultEl.textContent = 'Error: ' + err.message;
            if (onDone) onDone();
        });
}
</script>
</body>
</html>
