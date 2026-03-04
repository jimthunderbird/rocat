<?php
if (isset($_GET['fetch_url'])) {
    header('Content-Type: text/plain; charset=utf-8');
    $url = $_GET['fetch_url'];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    $response = curl_exec($ch);
    curl_close($ch);

    if ($response === false) {
        echo '';
        exit;
    }

    // Strip HTML to get pure text content
    // Try to extract body content first
    if (preg_match('/<body[^>]*>(.*?)<\/body>/si', $response, $matches)) {
        $content = $matches[1];
    } else {
        $content = $response;
    }
    // Remove scripts and styles
    $content = preg_replace('/<script[^>]*>.*?<\/script>/si', '', $content);
    $content = preg_replace('/<style[^>]*>.*?<\/style>/si', '', $content);
    // Remove HTML tags
    $content = strip_tags($content);
    // Decode entities
    $content = html_entity_decode($content, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    // Normalize whitespace within lines but preserve paragraph breaks
    $content = preg_replace('/[ \t]+/', ' ', $content);
    // Collapse 3+ newlines into 2
    $content = preg_replace('/\n{3,}/', "\n\n", $content);
    $content = trim($content);

    echo $content;
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
body { font-family: Georgia, 'Times New Roman', serif; min-height: 100vh; }

.url-bar {
    background: BurlyWood;
    padding: 12px 20px;
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 10px;
}
.url-bar label { font-weight: bold; white-space: nowrap; }
.url-bar input {
    flex: 1;
    padding: 8px 12px;
    font-size: 15px;
    border: 1px solid #996;
    border-radius: 4px;
    outline: none;
}
.url-bar input:focus { border-color: #663; }

.book-content {
    background: wheat;
    min-height: calc(100vh - 52px);
    padding: 30px 60px;
    line-height: 1.4;
    font-size: 17px;
    color: #333;
}
.book-content p {
    margin-bottom: 1em;
    position: relative;
}

/* Simple English Conversion Button */
.convert-btn {
    display: none;
    margin-left: 8px;
    padding: 2px 8px;
    font-size: 12px;
    background: #d4a056;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    vertical-align: middle;
}
.convert-btn:hover { background: #b8863c; }

/* Modal base styles */
.modal-overlay {
    display: none;
    position: fixed;
    z-index: 1000;
}
.modal-box {
    position: fixed;
    z-index: 1001;
    background: #fff;
    border: 1px solid #999;
    border-radius: 6px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    min-width: 280px;
    max-width: 450px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
}
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    background: #eee;
    border-radius: 6px 6px 0 0;
    cursor: move;
    user-select: none;
}
.modal-header span { font-weight: bold; font-size: 14px; }
.modal-close {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    padding: 0 4px;
    color: #666;
}
.modal-close:hover { color: #000; }
.modal-body {
    padding: 12px;
    overflow-y: auto;
    flex: 1;
    font-size: 15px;
    line-height: 1.5;
}

/* Simple English modal */
.modal-box.simple-english .modal-body {
    background: wheat;
}

.loading-spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-top-color: #666;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    vertical-align: middle;
    margin-right: 6px;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
</head>
<body>

<div class="url-bar">
    <label for="book_url">Book URL:</label>
    <input type="text" id="book_url" placeholder="Enter a Project Gutenberg URL and press Enter" />
</div>
<div class="book-content" id="book_content"></div>

<!-- Translation Modal -->
<div class="modal-box" id="translationModal" style="display:none;">
    <div class="modal-header">
        <span>Word Meaning</span>
        <button class="modal-close" onclick="closeModal('translationModal')">&times;</button>
    </div>
    <div class="modal-body" id="translationBody"></div>
</div>

<!-- Simple English Modal -->
<div class="modal-box simple-english" id="simpleEnglishModal" style="display:none;">
    <div class="modal-header">
        <span>Simple English</span>
        <button class="modal-close" onclick="closeModal('simpleEnglishModal')">&times;</button>
    </div>
    <div class="modal-body" id="simpleEnglishBody"></div>
</div>

<script>
// Modal position memory
const modalPositions = {};

// Draggable modal logic
function makeDraggable(modalEl) {
    const header = modalEl.querySelector('.modal-header');
    let isDragging = false, startX, startY, startLeft, startTop;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = modalEl.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        modalEl.style.left = (startLeft + dx) + 'px';
        modalEl.style.top = (startTop + dy) + 'px';
        modalEl.style.right = 'auto';
        modalEl.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            modalPositions[modalEl.id] = {
                left: modalEl.style.left,
                top: modalEl.style.top
            };
        }
    });
}

function showModal(id, x, y) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    if (modalPositions[id]) {
        modal.style.left = modalPositions[id].left;
        modal.style.top = modalPositions[id].top;
    } else {
        modal.style.left = Math.min(x || 200, window.innerWidth - 320) + 'px';
        modal.style.top = Math.min(y || 200, window.innerHeight - 250) + 'px';
    }
    modal.style.right = 'auto';
    modal.style.bottom = 'auto';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

makeDraggable(document.getElementById('translationModal'));
makeDraggable(document.getElementById('simpleEnglishModal'));

// Call local LLM with streaming
async function callLocalLLM(prompt, targetEl) {
    targetEl.innerHTML = '<span class="loading-spinner"></span> Thinking...';

    try {
        const response = await fetch('http://127.0.0.1:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'gemma3:latest',
                prompt: prompt,
                stream: true
            })
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        targetEl.innerHTML = '';
        let fullText = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n').filter(l => l.trim());
            for (const line of lines) {
                try {
                    const data = JSON.parse(line);
                    if (data.response) {
                        fullText += data.response;
                        targetEl.textContent = fullText;
                    }
                } catch (e) {}
            }
        }
    } catch (err) {
        targetEl.textContent = 'Error connecting to local LLM: ' + err.message;
    }
}

// Get surrounding words for context
function getSurroundingContext(text, node) {
    const container = document.getElementById('book_content');
    const fullText = container.textContent;
    const idx = fullText.indexOf(text);
    if (idx === -1) return text;

    const before = fullText.substring(0, idx);
    const after = fullText.substring(idx + text.length);
    const wordsBefore = before.trim().split(/\s+/).slice(-30).join(' ');
    const wordsAfter = after.trim().split(/\s+/).slice(0, 30).join(' ');
    return wordsBefore + ' ' + text + ' ' + wordsAfter;
}

// Highlighted text detection
document.getElementById('book_content').addEventListener('mouseup', (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (!selectedText || selectedText.length === 0) return;

    const context = getSurroundingContext(selectedText, e.target);
    const prompt = `in the context: ${context}, show the meaning of "${selectedText}" in 30 very simple English words. no explanation, no extra words`;

    showModal('translationModal', e.clientX + 10, e.clientY + 10);
    callLocalLLM(prompt, document.getElementById('translationBody'));
});

// Intersection Observer for showing/hiding convert buttons
const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const btn = entry.target.querySelector('.convert-btn');
        if (btn) {
            btn.style.display = entry.isIntersecting ? 'inline' : 'none';
        }
    });
}, { threshold: 0.1 });

// Process book content into paragraphs with convert buttons
function processBookContent(text) {
    const container = document.getElementById('book_content');
    container.innerHTML = '';

    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());
    paragraphs.forEach((para) => {
        const p = document.createElement('p');
        p.textContent = para.trim();

        const btn = document.createElement('button');
        btn.className = 'convert-btn';
        btn.textContent = 'Convert to Simple English';
        btn.addEventListener('click', (e) => {
            const paragraphText = p.textContent.replace('Convert to Simple English', '').trim();
            const prompt = `given <text>${paragraphText}</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words`;
            showModal('simpleEnglishModal', e.clientX + 10, e.clientY + 10);
            callLocalLLM(prompt, document.getElementById('simpleEnglishBody'));
        });

        p.appendChild(btn);
        container.appendChild(p);
        visibilityObserver.observe(p);
    });
}

// URL input handler
document.getElementById('book_url').addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;

    const url = e.target.value.trim();
    if (!url) return;

    const container = document.getElementById('book_content');
    container.innerHTML = '<p style="color:#666;"><span class="loading-spinner"></span> Loading book...</p>';

    try {
        const response = await fetch('index.php?fetch_url=' + encodeURIComponent(url));
        const text = await response.text();
        if (text) {
            processBookContent(text);
        } else {
            container.innerHTML = '<p style="color:red;">Failed to load content from the URL.</p>';
        }
    } catch (err) {
        container.innerHTML = '<p style="color:red;">Error: ' + err.message + '</p>';
    }
});
</script>
</body>
</html>
