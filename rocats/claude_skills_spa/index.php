<?php
// API endpoint: fetch book content
if (isset($_GET['action']) && $_GET['action'] === 'fetch_book') {
    header('Content-Type: text/plain; charset=utf-8');
    $url = $_GET['url'] ?? '';
    if (empty($url)) {
        http_response_code(400);
        echo 'No URL provided';
        exit;
    }
    $content = @file_get_contents($url);
    if ($content === false) {
        http_response_code(500);
        echo 'Failed to fetch content';
        exit;
    }
    // Strip any HTML tags to return pure text content
    $content = strip_tags($content);
    echo $content;
    exit;
}

// API endpoint: stream LLM response via Ollama
if (isset($_GET['action']) && $_GET['action'] === 'llm') {
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Connection: keep-alive');

    $input = json_decode(file_get_contents('php://input'), true);
    $prompt = $input['prompt'] ?? '';

    $ch = curl_init('http://127.0.0.1:11434/api/generate');
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

.url-bar {
    background: BurlyWood;
    padding: 12px 20px;
    position: sticky;
    top: 0;
    z-index: 10;
}
.url-bar input {
    width: 100%;
    padding: 10px 14px;
    font-size: 16px;
    border: 1px solid #8b7355;
    border-radius: 4px;
    outline: none;
}
.url-bar input:focus { border-color: #5a4a35; }

.book-content {
    background: wheat;
    min-height: calc(100vh - 60px);
    padding: 30px 60px;
    line-height: 1.4;
    font-size: 17px;
    color: #333;
}
.book-content p {
    margin-bottom: 1em;
    position: relative;
}

.convert-btn {
    display: inline;
    margin-left: 8px;
    padding: 2px 8px;
    font-size: 12px;
    background: #d2b48c;
    border: 1px solid #8b7355;
    border-radius: 3px;
    cursor: pointer;
    color: #333;
    opacity: 0;
    transition: opacity 0.3s;
}
.convert-btn.visible { opacity: 1; }
.convert-btn:hover { background: #c4a57b; }

/* Modal styles */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 100;
}
.modal {
    position: fixed;
    min-width: 300px;
    max-width: 500px;
    max-height: 400px;
    background: white;
    border: 1px solid #8b7355;
    border-radius: 6px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 101;
    display: flex;
    flex-direction: column;
}
.modal.simple-english { background: wheat; }
.modal-header {
    padding: 8px 12px;
    background: BurlyWood;
    border-radius: 6px 6px 0 0;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    user-select: none;
}
.modal-close {
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    padding: 0 4px;
}
.modal-close:hover { color: #c00; }
.modal-body {
    padding: 14px;
    overflow-y: auto;
    flex: 1;
    font-size: 15px;
    line-height: 1.5;
}

.loading { color: #888; font-style: italic; }
</style>
</head>
<body>

<div class="url-bar">
    <input type="text" id="bookUrl" placeholder="Enter Gutenberg book URL (e.g. https://www.gutenberg.org/cache/epub/100/pg100.txt) and press Enter" value="">
</div>

<div class="book-content" id="bookContent"></div>

<!-- Translation Modal -->
<div class="modal" id="translationModal" style="display:none; top:100px; left:100px;">
    <div class="modal-header">
        <span>Word Meaning</span>
        <span class="modal-close" onclick="closeModal('translationModal')">&times;</span>
    </div>
    <div class="modal-body" id="translationBody"></div>
</div>

<!-- Simple English Modal -->
<div class="modal simple-english" id="simpleEnglishModal" style="display:none; top:150px; left:150px;">
    <div class="modal-header">
        <span>Simple English</span>
        <span class="modal-close" onclick="closeModal('simpleEnglishModal')">&times;</span>
    </div>
    <div class="modal-body" id="simpleEnglishBody"></div>
</div>

<script>
// Modal drag functionality
const modalPositions = {};

function initDrag(modal) {
    const header = modal.querySelector('.modal-header');
    let isDragging = false, startX, startY, startLeft, startTop;

    header.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('modal-close')) return;
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = modal.offsetLeft;
        startTop = modal.offsetTop;
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        modal.style.left = (startLeft + e.clientX - startX) + 'px';
        modal.style.top = (startTop + e.clientY - startY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            modalPositions[modal.id] = { left: modal.style.left, top: modal.style.top };
        }
    });
}

function showModal(id) {
    const modal = document.getElementById(id);
    if (modalPositions[id]) {
        modal.style.left = modalPositions[id].left;
        modal.style.top = modalPositions[id].top;
    }
    modal.style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Initialize draggable modals
initDrag(document.getElementById('translationModal'));
initDrag(document.getElementById('simpleEnglishModal'));

// Stream LLM response
async function streamLLM(prompt, targetElement) {
    targetElement.innerHTML = '<span class="loading">Thinking...</span>';

    const response = await fetch('?action=llm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
    });

    targetElement.innerHTML = '';
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
            if (!line.trim()) continue;
            try {
                const json = JSON.parse(line);
                if (json.response) {
                    targetElement.textContent += json.response;
                }
            } catch(e) {}
        }
    }
    // Process remaining buffer
    if (buffer.trim()) {
        try {
            const json = JSON.parse(buffer);
            if (json.response) {
                targetElement.textContent += json.response;
            }
        } catch(e) {}
    }
}

// Handle highlighted text translation
document.getElementById('bookContent').addEventListener('mouseup', () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (!selectedText || selectedText.length === 0) return;

    // Get context: 30 words before and after
    const range = selection.getRangeAt(0);
    const container = range.startContainer.parentElement.closest('p') || range.startContainer.parentElement;
    const fullText = container.textContent;
    const words = fullText.split(/\s+/);

    // Find approximate position of selected text
    const beforeText = fullText.substring(0, fullText.indexOf(selectedText));
    const beforeWords = beforeText.split(/\s+/).filter(w => w);
    const selWords = selectedText.split(/\s+/).filter(w => w);

    const startIdx = Math.max(0, beforeWords.length - 30);
    const endIdx = Math.min(words.length, beforeWords.length + selWords.length + 30);
    const context = words.slice(startIdx, endIdx).join(' ');

    const prompt = `in the context: ${context}, show the meaning of "${selectedText}" using very simple English words. no explanation, no extra words`;

    showModal('translationModal');
    streamLLM(prompt, document.getElementById('translationBody'));
});

// Intersection observer for convert buttons visibility
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const btn = entry.target.querySelector('.convert-btn');
        if (btn) {
            btn.classList.toggle('visible', entry.isIntersecting);
        }
    });
}, { threshold: 0.1 });

// Fetch and display book content
document.getElementById('bookUrl').addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;

    const url = e.target.value.trim();
    if (!url) return;

    const bookContent = document.getElementById('bookContent');
    bookContent.innerHTML = '';
    bookContent.innerHTML = '<p class="loading">Loading book content...</p>';

    try {
        const response = await fetch(`?action=fetch_book&url=${encodeURIComponent(url)}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const text = await response.text();

        bookContent.innerHTML = '';

        // Split into paragraphs by double newlines or single newlines with content
        const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());

        paragraphs.forEach(paraText => {
            const p = document.createElement('p');
            p.textContent = paraText.trim();

            const btn = document.createElement('button');
            btn.className = 'convert-btn';
            btn.textContent = 'Convert to Simple English';
            btn.addEventListener('click', () => {
                const prompt = `given <text>${p.textContent.replace(btn.textContent, '').trim()}</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words`;
                showModal('simpleEnglishModal');
                streamLLM(prompt, document.getElementById('simpleEnglishBody'));
            });

            p.appendChild(btn);
            bookContent.appendChild(p);
            observer.observe(p);
        });
    } catch (err) {
        bookContent.innerHTML = `<p style="color:red;">Error loading book: ${err.message}</p>`;
    }
});
</script>
</body>
</html>
