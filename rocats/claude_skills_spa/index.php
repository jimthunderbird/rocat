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
.paragraph-wrapper p { white-space: pre-wrap; margin: 0; }
.simplify-btn {
    display: inline-block;
    margin-top: 0.3rem;
    padding: 0.15rem 0.5rem;
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
.simplified-text {
    margin-top: 0.4rem;
    padding: 0.5rem 0.8rem;
    background: #fff8e0;
    border-left: 3px solid #d2a860;
    font-size: 0.95rem;
    line-height: 1.5;
    white-space: pre-wrap;
}

#translation_modal {
    display: none;
    position: fixed;
    top: 100px;
    left: 100px;
    width: 340px;
    max-height: 280px;
    background: #fffef5;
    border: 1px solid #bbb;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);
    z-index: 1000;
    flex-direction: column;
    overflow: hidden;
}
#modal_header {
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
#modal_header .close_btn { cursor: pointer; font-size: 1.1rem; opacity: 0.8; }
#modal_header .close_btn:hover { opacity: 1; }
#modal_word { font-weight: bold; }
#modal_body {
    padding: 0.8rem;
    overflow-y: auto;
    flex: 1;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #333;
}
#loading_indicator {
    display: none;
    color: #888;
    font-style: italic;
    font-size: 0.85rem;
    padding: 0.3rem 0;
}
</style>
</head>
<body>

<div id="url_bar">
    <label for="book_url">Book URL:</label>
    <input type="text" id="book_url" placeholder="Paste a Project Gutenberg .txt URL and press Enter">
</div>

<div id="book_content"></div>

<div id="translation_modal">
    <div id="modal_header">
        <span id="modal_word"></span>
        <span class="close_btn" onclick="closeModal()">&times;</span>
    </div>
    <div id="modal_body">
        <div id="loading_indicator">Loading...</div>
        <div id="modal_result"></div>
    </div>
</div>

<script>
const bookContent = document.getElementById('book_content');
const bookUrl = document.getElementById('book_url');
const modal = document.getElementById('translation_modal');
const modalHeader = document.getElementById('modal_header');
const modalWord = document.getElementById('modal_word');
const modalResult = document.getElementById('modal_result');
const loadingIndicator = document.getElementById('loading_indicator');

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
            .then(text => {
                renderParagraphs(text);
            })
            .catch(err => {
                bookContent.textContent = 'Error: ' + err.message;
            });
    }
});

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

    showModal(selectedText, question);
});

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
        wrapper.appendChild(p);

        const btn = document.createElement('button');
        btn.className = 'simplify-btn';
        btn.textContent = 'Convert To Simple English';
        btn.onclick = () => simplifyParagraph(btn, p.textContent, wrapper);
        wrapper.appendChild(btn);

        bookContent.appendChild(wrapper);
        paraObserver.observe(wrapper);
    });
}

function simplifyParagraph(btn, text, wrapper) {
    if (btn.classList.contains('loading')) return;

    const existing = wrapper.querySelector('.simplified-text');
    if (existing) { existing.remove(); btn.textContent = 'Convert To Simple English'; return; }

    btn.classList.add('loading');
    btn.textContent = 'Converting...';

    const resultDiv = document.createElement('div');
    resultDiv.className = 'simplified-text';
    wrapper.appendChild(resultDiv);

    const formData = new FormData();
    formData.append('llm_query', `given <text>${text}</text>, convert it to very simple English words, no explanation, no extra words`);

    fetch('', { method: 'POST', body: formData })
        .then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            function read() {
                reader.read().then(({ done, value }) => {
                    if (done) {
                        btn.classList.remove('loading');
                        btn.textContent = 'Hide Simple';
                        return;
                    }
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split('\n').filter(Boolean);
                    for (const line of lines) {
                        try {
                            const json = JSON.parse(line);
                            if (json.response) resultDiv.textContent += json.response;
                        } catch (e) {}
                    }
                    read();
                });
            }
            read();
        })
        .catch(err => {
            btn.classList.remove('loading');
            btn.textContent = 'Convert To Simple English';
            resultDiv.textContent = 'Error: ' + err.message;
        });
}

function showModal(word, question) {
    modalWord.textContent = word;
    modalResult.textContent = '';
    loadingIndicator.style.display = 'block';

    const savedPos = localStorage.getItem('modal_pos');
    if (savedPos) {
        const pos = JSON.parse(savedPos);
        modal.style.left = pos.left + 'px';
        modal.style.top = pos.top + 'px';
    }

    modal.style.display = 'flex';

    const formData = new FormData();
    formData.append('llm_query', question);

    fetch('', { method: 'POST', body: formData })
        .then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            loadingIndicator.style.display = 'none';

            function read() {
                reader.read().then(({ done, value }) => {
                    if (done) return;
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split('\n').filter(Boolean);
                    for (const line of lines) {
                        try {
                            const json = JSON.parse(line);
                            if (json.response) {
                                modalResult.textContent += json.response;
                            }
                        } catch (e) {}
                    }
                    read();
                });
            }
            read();
        })
        .catch(err => {
            loadingIndicator.style.display = 'none';
            modalResult.textContent = 'Error: ' + err.message;
        });
}

function closeModal() {
    modal.style.display = 'none';
}

let isDragging = false, dragOffsetX, dragOffsetY;
modalHeader.addEventListener('mousedown', function(e) {
    isDragging = true;
    dragOffsetX = e.clientX - modal.offsetLeft;
    dragOffsetY = e.clientY - modal.offsetTop;
    e.preventDefault();
});
document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    modal.style.left = (e.clientX - dragOffsetX) + 'px';
    modal.style.top = (e.clientY - dragOffsetY) + 'px';
});
document.addEventListener('mouseup', function() {
    if (isDragging) {
        isDragging = false;
        localStorage.setItem('modal_pos', JSON.stringify({
            left: modal.offsetLeft,
            top: modal.offsetTop
        }));
    }
});
</script>
</body>
</html>
