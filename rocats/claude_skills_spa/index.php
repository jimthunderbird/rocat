<?php
// Handle LLM query via Ollama
if (isset($_GET['q'])) {
    header('Content-Type: text/plain; charset=utf-8');
    header('X-Accel-Buffering: no');

    $question = $_GET['q'];
    $payload = json_encode([
        'model' => 'gemma3:latest',
        'prompt' => $question,
        'stream' => true
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

// Read book content from URL parameter
$book_url = isset($_GET['book']) ? $_GET['book'] : '';
$book_content = '';
if ($book_url) {
    $book_content = @file_get_contents($book_url);
    if ($book_content === false) $book_content = '<p>Failed to load book from URL.</p>';
    $book_content = htmlspecialchars($book_content, ENT_QUOTES, 'UTF-8');
    $book_content = nl2br($book_content);
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
body { font-family: Georgia, 'Times New Roman', serif; background: #f5f1eb; color: #333; }

#url-bar {
    position: sticky; top: 0; z-index: 10;
    display: flex; gap: 8px; padding: 10px 20px;
    background: #3a3a3a; box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
#url-bar input {
    flex: 1; padding: 8px 12px; border: none; border-radius: 4px;
    font-size: 14px; font-family: monospace;
}
#url-bar button {
    padding: 8px 20px; border: none; border-radius: 4px;
    background: #d4a853; color: #fff; font-weight: bold; cursor: pointer;
    font-size: 14px;
}
#url-bar button:hover { background: #c0963e; }

.book-content {
    max-width: 720px; margin: 30px auto; padding: 20px 40px;
    line-height: 1.4; font-size: 17px; white-space: pre-wrap;
    background: #fff; box-shadow: 0 1px 8px rgba(0,0,0,0.08);
    border-radius: 4px; min-height: 200px;
}
.book-content.empty {
    display: flex; align-items: center; justify-content: center;
    color: #999; font-style: italic; min-height: 300px;
}

.modal-overlay {
    display: none; position: fixed; z-index: 100;
}
.modal {
    position: fixed; z-index: 101; width: 380px;
    background: #fff; border-radius: 8px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
    overflow: hidden; min-height: 100px;
}
.modal-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 10px 14px; background: #3a3a3a; color: #fff;
    cursor: move; user-select: none;
}
.modal-header span { font-size: 13px; font-weight: bold; }
.modal-close {
    background: none; border: none; color: #fff; font-size: 20px;
    cursor: pointer; line-height: 1;
}
.modal-body {
    padding: 14px; max-height: 400px; overflow-y: auto;
    font-size: 15px; line-height: 1.5; white-space: pre-wrap;
    word-wrap: break-word;
}
.modal-body .loading {
    color: #999; font-style: italic;
}
</style>
</head>
<body>

<div id="url-bar">
    <input type="text" id="book-url" placeholder="Enter a Project Gutenberg plain text URL, e.g. https://www.gutenberg.org/cache/epub/1342/pg1342.txt" value="<?= htmlspecialchars($book_url) ?>">
    <button onclick="loadBook()">Load Book</button>
</div>

<div class="book-content <?= $book_content ? '' : 'empty' ?>" id="book-content">
<?php if ($book_content): ?>
<?= $book_content ?>
<?php else: ?>
    Paste a Gutenberg plain text URL above and click "Load Book" to start reading.
<?php endif; ?>
</div>

<!-- Translation modal -->
<div class="modal" id="translation-modal" style="display:none;">
    <div class="modal-header" id="modal-header">
        <span>Word Lookup</span>
        <button class="modal-close" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body" id="modal-body"></div>
</div>

<script>
function loadBook() {
    const url = document.getElementById('book-url').value.trim();
    if (!url) return;
    window.location.href = '?book=' + encodeURIComponent(url);
}
document.getElementById('book-url').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') loadBook();
});

// Modal drag logic
const modal = document.getElementById('translation-modal');
const modalHeader = document.getElementById('modal-header');
const modalBody = document.getElementById('modal-body');
let isDragging = false, dragOffsetX = 0, dragOffsetY = 0;

// Restore last position
const savedPos = localStorage.getItem('modal-pos');
if (savedPos) {
    const pos = JSON.parse(savedPos);
    modal.style.left = pos.left + 'px';
    modal.style.top = pos.top + 'px';
} else {
    modal.style.right = '30px';
    modal.style.top = '80px';
}

modalHeader.addEventListener('mousedown', function(e) {
    isDragging = true;
    const rect = modal.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;
    modal.style.right = 'auto';
    e.preventDefault();
});
document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    let x = e.clientX - dragOffsetX;
    let y = e.clientY - dragOffsetY;
    x = Math.max(0, Math.min(x, window.innerWidth - modal.offsetWidth));
    y = Math.max(0, Math.min(y, window.innerHeight - modal.offsetHeight));
    modal.style.left = x + 'px';
    modal.style.top = y + 'px';
    localStorage.setItem('modal-pos', JSON.stringify({ left: x, top: y }));
});
document.addEventListener('mouseup', function() { isDragging = false; });

function closeModal() {
    modal.style.display = 'none';
    if (currentController) currentController.abort();
}

let currentController = null;

// Highlighted text detection
document.getElementById('book-content').addEventListener('mouseup', function() {
    const sel = window.getSelection();
    const text = sel.toString().trim();
    if (!text || text.length > 100) return;

    // Get 30 words before and after the selection
    const range = sel.getRangeAt(0);
    const container = document.getElementById('book-content');
    const fullText = container.textContent;
    const beforeRange = document.createRange();
    beforeRange.setStart(container, 0);
    beforeRange.setEnd(range.startContainer, range.startOffset);
    const beforeText = beforeRange.toString();
    const afterRange = document.createRange();
    afterRange.setStart(range.endContainer, range.endOffset);
    afterRange.selectNodeContents(container);
    afterRange.setEnd(container, container.childNodes.length);
    const afterText = afterRange.toString();

    const wordsBefore = beforeText.split(/\s+/).filter(Boolean).slice(-30).join(' ');
    const wordsAfter = afterText.split(/\s+/).filter(Boolean).slice(0, 30).join(' ');

    const context = wordsBefore + ' ' + text + ' ' + wordsAfter;
    const question = 'context: ' + context + '\n' +
        'show me the pronunciation of "' + text + '" in International Phonetic Alphabet\n' +
        'show the meaning of "' + text + '" in 30 words, translate the meaning of "' + text + '" in simplified chinese\n' +
        'no extra words';

    showModal(question);
});

function showModal(question) {
    modal.style.display = 'block';
    modalBody.innerHTML = '<span class="loading">Loading...</span>';

    if (currentController) currentController.abort();
    currentController = new AbortController();

    fetch('?q=' + encodeURIComponent(question), { signal: currentController.signal })
        .then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            modalBody.textContent = '';
            function read() {
                reader.read().then(({ done, value }) => {
                    if (done) return;
                    modalBody.textContent += decoder.decode(value, { stream: true });
                    modalBody.scrollTop = modalBody.scrollHeight;
                    read();
                }).catch(() => {});
            }
            read();
        })
        .catch(err => {
            if (err.name !== 'AbortError') {
                modalBody.textContent = 'Error: ' + err.message;
            }
        });
}
</script>
</body>
</html>
