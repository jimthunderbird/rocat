<?php
// Backend API handlers
if (isset($_GET['action'])) {
    if ($_GET['action'] === 'fetch_book') {
        header('Content-Type: text/plain; charset=utf-8');
        $url = $_GET['url'] ?? '';
        if (empty($url)) {
            echo '';
            exit;
        }
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        $content = curl_exec($ch);
        curl_close($ch);
        echo strip_tags($content);
        exit;
    }

    if ($_GET['action'] === 'llm_stream') {
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');
        header('Connection: keep-alive');

        $input = json_decode(file_get_contents('php://input'), true);
        $prompt = $input['prompt'] ?? '';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'http://127.0.0.1:11434/api/generate');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
            'model' => 'gemma3:latest',
            'prompt' => $prompt,
            'stream' => true
        ]));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
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
body { font-family: Georgia, serif; min-height: 100vh; }

.header {
    background: BurlyWood;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.header label { font-weight: bold; }
#book_url {
    flex: 1;
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #999;
    border-radius: 4px;
}

#book_content {
    background: wheat;
    line-height: 1.4;
    padding: 20px 40px;
    min-height: calc(100vh - 50px);
}
#book_content p {
    margin-bottom: 1em;
    position: relative;
}

.convert-btn {
    background: gold;
    border: none;
    padding: 4px 10px;
    cursor: pointer;
    font-size: 13px;
    border-radius: 3px;
    margin-left: 8px;
    display: none;
}
.convert-btn.visible { display: inline; }

/* Modal styles */
.modal-overlay {
    display: none;
    position: fixed;
    z-index: 1000;
}
.modal {
    position: fixed;
    z-index: 1001;
    background: #fff;
    border: 1px solid #888;
    border-radius: 6px;
    min-width: 320px;
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    display: none;
}
.modal-header {
    background: #555;
    color: #fff;
    padding: 8px 12px;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px 6px 0 0;
    user-select: none;
}
.modal-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    padding: 0 4px;
}
.modal-body {
    padding: 12px;
    max-height: 400px;
    overflow-y: auto;
    white-space: pre-wrap;
    line-height: 1.5;
}
.modal.wheat-bg .modal-body {
    background: wheat;
}
</style>
</head>
<body>

<div class="header">
    <label>Book URL:</label>
    <input type="text" id="book_url" placeholder="Enter Gutenberg book text URL and press Enter" value="">
</div>

<div id="book_content"></div>

<!-- Translation Modal -->
<div id="translation_modal" class="modal">
    <div class="modal-header">
        <span>Word Meaning</span>
        <button class="modal-close" onclick="hideModal('translation_modal')">&times;</button>
    </div>
    <div class="modal-body" id="translation_modal_body"></div>
</div>

<!-- Simple English Modal -->
<div id="simple_english_modal" class="modal wheat-bg">
    <div class="modal-header">
        <span>Simple English</span>
        <button class="modal-close" onclick="hideModal('simple_english_modal')">&times;</button>
    </div>
    <div class="modal-body" id="simple_english_modal_body"></div>
</div>

<script>
// Modal position memory
const modalPositions = {};

function showModal(id, x, y) {
    const modal = document.getElementById(id);
    modal.style.display = 'block';
    if (modalPositions[id]) {
        modal.style.left = modalPositions[id].x + 'px';
        modal.style.top = modalPositions[id].y + 'px';
    } else {
        modal.style.left = (x || 100) + 'px';
        modal.style.top = (y || 100) + 'px';
    }
}

function hideModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Draggable modals
function initDraggable(modalId) {
    const modal = document.getElementById(modalId);
    const header = modal.querySelector('.modal-header');
    let isDragging = false, offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('modal-close')) return;
        isDragging = true;
        offsetX = e.clientX - modal.offsetLeft;
        offsetY = e.clientY - modal.offsetTop;
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        modal.style.left = newX + 'px';
        modal.style.top = newY + 'px';
        modalPositions[modalId] = { x: newX, y: newY };
    });

    document.addEventListener('mouseup', () => { isDragging = false; });
}

initDraggable('translation_modal');
initDraggable('simple_english_modal');

// Stream LLM response
async function streamLLM(prompt, targetElementId) {
    const targetEl = document.getElementById(targetElementId);
    targetEl.textContent = '';

    const response = await fetch('?action=llm_stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt })
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split('\n');
        buffer = lines.pop();

        for (const line of lines) {
            if (line.trim() === '') continue;
            try {
                const json = JSON.parse(line);
                if (json.response) {
                    targetEl.textContent += json.response;
                    targetEl.scrollTop = targetEl.scrollHeight;
                }
            } catch (e) {}
        }
    }

    // Process remaining buffer
    if (buffer.trim()) {
        try {
            const json = JSON.parse(buffer);
            if (json.response) {
                targetEl.textContent += json.response;
            }
        } catch (e) {}
    }
}

// Book URL input - Enter key handler
document.getElementById('book_url').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const url = this.value.trim();
        if (!url) return;
        const bookContent = document.getElementById('book_content');
        bookContent.innerHTML = 'Loading...';

        fetch('?action=fetch_book&url=' + encodeURIComponent(url))
            .then(r => r.text())
            .then(text => {
                // Split into paragraphs - split on double newlines or single newlines with content
                const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
                bookContent.innerHTML = '';
                paragraphs.forEach(p => {
                    const pEl = document.createElement('p');
                    pEl.textContent = p.trim();

                    // Add Convert to Simple English button
                    const btn = document.createElement('button');
                    btn.className = 'convert-btn';
                    btn.textContent = 'Convert to Simple English';
                    btn.addEventListener('click', function() {
                        const paraText = pEl.childNodes[0].textContent;
                        const prompt = 'given <text>' + paraText + '</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words';
                        showModal('simple_english_modal', 200, 150);
                        document.getElementById('simple_english_modal_body').textContent = 'Loading...';
                        streamLLM(prompt, 'simple_english_modal_body');
                    });
                    pEl.appendChild(btn);
                    bookContent.appendChild(pEl);
                });

                // Set up IntersectionObserver for convert buttons
                setupVisibilityObserver();
            });
    }
});

// IntersectionObserver to show/hide convert buttons based on paragraph visibility
function setupVisibilityObserver() {
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

    document.querySelectorAll('#book_content p').forEach(p => {
        observer.observe(p);
    });
}

// Text selection handler for translation modal
document.getElementById('book_content').addEventListener('mouseup', function(e) {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText.length === 0) return;
    if (e.target.classList.contains('convert-btn')) return;

    // Get context: 30 words before and after
    const range = selection.getRangeAt(0);
    const container = range.startContainer;
    let fullText = '';

    // Get the paragraph text
    let paraEl = container;
    while (paraEl && paraEl.tagName !== 'P') {
        paraEl = paraEl.parentElement;
    }
    if (!paraEl) return;

    // Get first text node content (paragraph text without button text)
    fullText = paraEl.childNodes[0] ? paraEl.childNodes[0].textContent : paraEl.textContent;

    const words = fullText.split(/\s+/);
    const selectedWords = selectedText.split(/\s+/);

    // Find position of selected text in words
    const selectedJoined = selectedWords.join(' ');
    const fullJoined = words.join(' ');
    const startIdx = fullJoined.indexOf(selectedJoined);

    let beforeWords = '';
    let afterWords = '';

    if (startIdx >= 0) {
        const beforeText = fullJoined.substring(0, startIdx).trim();
        const afterText = fullJoined.substring(startIdx + selectedJoined.length).trim();
        const beforeArr = beforeText ? beforeText.split(/\s+/) : [];
        const afterArr = afterText ? afterText.split(/\s+/) : [];
        beforeWords = beforeArr.slice(-30).join(' ');
        afterWords = afterArr.slice(0, 30).join(' ');
    }

    const context = beforeWords + ' ' + selectedText + ' ' + afterWords;
    const prompt = 'in the context: ' + context + ', show the meaning of ' + selectedText + ' using very simple English words, no explanation, no extra words';

    showModal('translation_modal', e.pageX + 10, e.pageY + 10);
    document.getElementById('translation_modal_body').textContent = 'Loading...';
    streamLLM(prompt, 'translation_modal_body');
});
</script>

</body>
</html>
