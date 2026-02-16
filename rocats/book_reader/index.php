<?php
// API endpoint: handle ?q= requests with streaming
if (isset($_GET['q']) && !empty($_GET['q'])) {
    header('Content-Type: text/plain; charset=utf-8');
    header('X-Accel-Buffering: no');
    header('Cache-Control: no-cache');

    // Disable output buffering for streaming
    while (ob_get_level()) ob_end_clean();

    $question = $_GET['q'];
    $escaped = escapeshellarg($question);
    $command = "TERM=dumb NOCOLOR=1 ollama run gemma2:2b $escaped 2>/dev/null";

    $handle = popen($command, 'r');
    if ($handle) {
        while (!feof($handle)) {
            $chunk = fread($handle, 256);
            if ($chunk !== false && $chunk !== '') {
                // Strip ANSI escape sequences and terminal control codes
                $chunk = preg_replace('/\x1b\[[0-9;]*[a-zA-Z]/', '', $chunk);
                $chunk = preg_replace('/\x1b\[\?[0-9;]*[a-zA-Z]/', '', $chunk);
                $chunk = preg_replace('/[\x00-\x08\x0e-\x1f]/', '', $chunk);
                if ($chunk !== '') {
                    echo $chunk;
                    flush();
                }
            }
        }
        pclose($handle);
    } else {
        echo 'Error: Could not execute AI model.';
    }
    exit;
}

// API endpoint: handle ?url= requests to fetch remote content
if (isset($_GET['url']) && !empty($_GET['url'])) {
    header('Content-Type: text/plain; charset=utf-8');
    $url = $_GET['url'];
    $content = @file_get_contents($url);
    if ($content === false) {
        http_response_code(400);
        echo 'Error: Could not load content from the given URL.';
    } else {
        echo $content;
    }
    exit;
}

// Read book content from Project Gutenberg
$book_content = @file_get_contents('https://www.gutenberg.org/cache/epub/1661/pg1661.txt');
if ($book_content === false) {
    $book_content = 'Error: Could not load book content. Please refresh the page.';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Book Reader</title>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Georgia, 'Times New Roman', serif;
    background: #f5f0e8;
    color: #333;
}

#header {
    position: sticky;
    top: 0;
    background: #3e2723;
    color: #f5f0e8;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: bold;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    gap: 16px;
}

#header .title {
    white-space: nowrap;
    flex-shrink: 0;
}

#header span {
    font-size: 13px;
    font-weight: normal;
    opacity: 0.8;
    white-space: nowrap;
    flex-shrink: 0;
}

#url-form {
    flex: 1;
    display: flex;
    justify-content: center;
}

#url-bar {
    width: 100%;
    max-width: 520px;
    display: flex;
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 1px 6px rgba(0,0,0,0.2);
    transition: box-shadow 0.2s;
}

#url-bar:focus-within {
    box-shadow: 0 2px 12px rgba(0,0,0,0.35);
}

#url-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 8px 18px;
    font-size: 14px;
    font-family: Arial, sans-serif;
    color: #333;
    background: transparent;
    min-width: 0;
}

#url-input::placeholder {
    color: #aaa;
}

#url-btn {
    border: none;
    background: #5d4037;
    color: #fff;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    font-family: Arial, sans-serif;
    transition: background 0.2s;
    white-space: nowrap;
}

#url-btn:hover {
    background: #4e342e;
}

#url-btn:disabled {
    background: #999;
    cursor: not-allowed;
}

#book_content {
    max-width: 800px;
    margin: 0 auto;
    padding: 32px 24px 80px;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 1.8;
    font-size: 16px;
    cursor: text;
}

/* Modal overlay */
#modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 100;
    justify-content: center;
    align-items: center;
}

#modal-overlay.active {
    display: flex;
}

#modal {
    background: #fff;
    border-radius: 12px;
    width: 90%;
    max-width: 560px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    overflow: hidden;
}

#modal-header {
    background: #3e2723;
    color: #fff;
    padding: 14px 20px;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
}

#modal-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    padding: 0 4px;
    line-height: 1;
}

#modal-close:hover {
    opacity: 0.7;
}

#modal-word {
    padding: 12px 20px;
    background: #f9f6f0;
    border-bottom: 1px solid #e0d8cc;
    flex-shrink: 0;
}

#modal-word .label {
    font-size: 12px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
}

#modal-word .text {
    font-size: 18px;
    font-weight: bold;
    color: #3e2723;
    margin-top: 4px;
    word-break: break-word;
}

#modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
    font-size: 15px;
    line-height: 1.7;
    color: #444;
    word-wrap: break-word;
}

#modal-body h1, #modal-body h2, #modal-body h3,
#modal-body h4, #modal-body h5, #modal-body h6 {
    color: #3e2723;
    margin: 16px 0 8px;
    line-height: 1.3;
}
#modal-body h1 { font-size: 1.4em; }
#modal-body h2 { font-size: 1.25em; }
#modal-body h3 { font-size: 1.1em; }

#modal-body p {
    margin: 0 0 12px;
}

#modal-body ul, #modal-body ol {
    margin: 0 0 12px;
    padding-left: 24px;
}

#modal-body li {
    margin-bottom: 4px;
}

#modal-body code {
    background: #f0ebe3;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: 'Courier New', Courier, monospace;
}

#modal-body pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 14px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 0 0 12px;
}

#modal-body pre code {
    background: none;
    padding: 0;
    color: inherit;
    font-size: 0.85em;
}

#modal-body blockquote {
    border-left: 4px solid #3e2723;
    padding: 8px 16px;
    margin: 0 0 12px;
    background: #f9f6f0;
    color: #555;
}

#modal-body strong {
    color: #3e2723;
}

#modal-body hr {
    border: none;
    border-top: 1px solid #e0d8cc;
    margin: 16px 0;
}

#modal-body a {
    color: #5d4037;
    text-decoration: underline;
}

#modal-body a:hover {
    color: #3e2723;
}

#modal-body table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 0 12px;
    font-size: 0.9em;
}

#modal-body th, #modal-body td {
    border: 1px solid #d7cfc4;
    padding: 8px 12px;
    text-align: left;
}

#modal-body th {
    background: #f0ebe3;
    font-weight: bold;
    color: #3e2723;
}

#modal-body tr:nth-child(even) {
    background: #faf8f4;
}

#modal-body em {
    font-style: italic;
    color: #555;
}

#modal-body .loading-text {
    text-align: center;
    color: #999;
    padding: 20px;
}

#modal-body .spinner {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 3px solid #ddd;
    border-top-color: #3e2723;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 8px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

#modal-body .error {
    color: #c62828;
}

#modal-hint {
    padding: 6px 20px;
    font-size: 11px;
    color: #aaa;
    text-align: center;
    border-top: 1px solid #eee;
    flex-shrink: 0;
}

/* Nested (secondary) modal */
#nested-modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.45);
    z-index: 200;
    justify-content: center;
    align-items: center;
}

#nested-modal-overlay.active {
    display: flex;
}

#nested-modal {
    background: #fff;
    border-radius: 12px;
    width: 88%;
    max-width: 520px;
    max-height: 75vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 12px 40px rgba(0,0,0,0.4);
    overflow: hidden;
}

#nested-modal-header {
    background: #5d4037;
    color: #fff;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
}

#nested-modal-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    padding: 0 4px;
    line-height: 1;
}

#nested-modal-close:hover {
    opacity: 0.7;
}

#nested-modal-word {
    padding: 10px 20px;
    background: #f9f6f0;
    border-bottom: 1px solid #e0d8cc;
    flex-shrink: 0;
}

#nested-modal-word .label {
    font-size: 11px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
}

#nested-modal-word .text {
    font-size: 16px;
    font-weight: bold;
    color: #5d4037;
    margin-top: 3px;
    word-break: break-word;
}

#nested-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
    font-size: 15px;
    line-height: 1.7;
    color: #444;
    word-wrap: break-word;
}

#nested-modal-body h1, #nested-modal-body h2, #nested-modal-body h3,
#nested-modal-body h4, #nested-modal-body h5, #nested-modal-body h6 {
    color: #5d4037;
    margin: 16px 0 8px;
    line-height: 1.3;
}
#nested-modal-body h1 { font-size: 1.4em; }
#nested-modal-body h2 { font-size: 1.25em; }
#nested-modal-body h3 { font-size: 1.1em; }

#nested-modal-body p { margin: 0 0 12px; }
#nested-modal-body ul, #nested-modal-body ol { margin: 0 0 12px; padding-left: 24px; }
#nested-modal-body li { margin-bottom: 4px; }

#nested-modal-body code {
    background: #f0ebe3;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: 'Courier New', Courier, monospace;
}

#nested-modal-body pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 14px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 0 0 12px;
}

#nested-modal-body pre code {
    background: none;
    padding: 0;
    color: inherit;
    font-size: 0.85em;
}

#nested-modal-body blockquote {
    border-left: 4px solid #5d4037;
    padding: 8px 16px;
    margin: 0 0 12px;
    background: #f9f6f0;
    color: #555;
}

#nested-modal-body strong { color: #5d4037; }

#nested-modal-body hr {
    border: none;
    border-top: 1px solid #e0d8cc;
    margin: 16px 0;
}

#nested-modal-body a {
    color: #5d4037;
    text-decoration: underline;
}

#nested-modal-body a:hover {
    color: #3e2723;
}

#nested-modal-body table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 0 12px;
    font-size: 0.9em;
}

#nested-modal-body th, #nested-modal-body td {
    border: 1px solid #d7cfc4;
    padding: 8px 12px;
    text-align: left;
}

#nested-modal-body th {
    background: #f0ebe3;
    font-weight: bold;
    color: #5d4037;
}

#nested-modal-body tr:nth-child(even) {
    background: #faf8f4;
}

#nested-modal-body em {
    font-style: italic;
    color: #555;
}

#nested-modal-body .loading-text {
    text-align: center;
    color: #999;
    padding: 20px;
}

#nested-modal-body .spinner {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 3px solid #ddd;
    border-top-color: #5d4037;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 8px;
}

#nested-modal-body .error { color: #c62828; }

#nested-modal-hint {
    padding: 6px 20px;
    font-size: 11px;
    color: #aaa;
    text-align: center;
    border-top: 1px solid #eee;
    flex-shrink: 0;
}
</style>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
<script>
marked.setOptions({
    gfm: true,
    breaks: true
});
</script>

<div id="header">
    <div class="title">Book Reader</div>
    <form id="url-form" onsubmit="return loadUrl(event)">
        <div id="url-bar">
            <input type="text" id="url-input" placeholder="Enter a book or article URL..." />
            <button type="submit" id="url-btn">Go</button>
        </div>
    </form>
    <span>Highlight text to look up</span>
</div>

<div id="book_content"><?php echo htmlspecialchars($book_content, ENT_QUOTES, 'UTF-8'); ?></div>

<!-- Modal -->
<div id="modal-overlay">
    <div id="modal">
        <div id="modal-header">
            <span>Definition & Translation</span>
            <button id="modal-close">&times;</button>
        </div>
        <div id="modal-word">
            <div class="label">Selected text</div>
            <div class="text" id="modal-selected-text"></div>
        </div>
        <div id="modal-body"></div>
        <div id="modal-hint">Highlight text here to look up</div>
    </div>
</div>

<!-- Nested Modal (for lookups within the popup) -->
<div id="nested-modal-overlay">
    <div id="nested-modal">
        <div id="nested-modal-header">
            <span>Nested Lookup</span>
            <button id="nested-modal-close">&times;</button>
        </div>
        <div id="nested-modal-word">
            <div class="label">Selected text</div>
            <div class="text" id="nested-modal-selected-text"></div>
        </div>
        <div id="nested-modal-body"></div>
        <div id="nested-modal-hint">Highlight text here for another lookup</div>
    </div>
</div>

<script>
async function loadUrl(e) {
    e.preventDefault();
    const input = document.getElementById('url-input');
    const btn = document.getElementById('url-btn');
    const url = input.value.trim();
    if (!url) return false;

    btn.disabled = true;
    btn.textContent = 'Loading...';
    const bookDiv = document.getElementById('book_content');
    bookDiv.textContent = 'Loading content...';

    try {
        const resp = await fetch('index.php?url=' + encodeURIComponent(url));
        if (!resp.ok) throw new Error('Failed to fetch');
        const text = await resp.text();
        bookDiv.textContent = text;
        window.scrollTo(0, 0);
    } catch (err) {
        bookDiv.textContent = 'Error: Could not load content from the given URL. Please check the URL and try again.';
    } finally {
        btn.disabled = false;
        btn.textContent = 'Go';
    }
    return false;
}

const overlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalSelectedText = document.getElementById('modal-selected-text');
const modalClose = document.getElementById('modal-close');

const nestedOverlay = document.getElementById('nested-modal-overlay');
const nestedModalBody = document.getElementById('nested-modal-body');
const nestedModalSelectedText = document.getElementById('nested-modal-selected-text');
const nestedModalClose = document.getElementById('nested-modal-close');

let mainController = null;
let nestedController = null;

modalClose.addEventListener('click', closeMainModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeMainModal(); });

nestedModalClose.addEventListener('click', closeNestedModal);
nestedOverlay.addEventListener('click', (e) => { if (e.target === nestedOverlay) closeNestedModal(); });

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (nestedOverlay.classList.contains('active')) {
            closeNestedModal();
        } else {
            closeMainModal();
        }
    }
});

function closeMainModal() {
    overlay.classList.remove('active');
    closeNestedModal();
    if (mainController) {
        mainController.abort();
        mainController = null;
    }
}

function closeNestedModal() {
    nestedOverlay.classList.remove('active');
    if (nestedController) {
        nestedController.abort();
        nestedController = null;
    }
}

function getSurroundingContext(highlighted) {
    const fullText = document.getElementById('book_content').textContent;
    const idx = fullText.indexOf(highlighted);
    if (idx === -1) return highlighted;

    const before = fullText.substring(0, idx).trim().split(/\s+/).slice(-20).join(' ');
    const after = fullText.substring(idx + highlighted.length).trim().split(/\s+/).slice(0, 20).join(' ');
    return (before + ' ' + highlighted + ' ' + after).trim();
}

async function streamAIResponse(question, targetBody, controller) {
    try {
        const resp = await fetch('index.php?q=' + encodeURIComponent(question), {
            signal: controller.signal
        });
        if (!resp.ok) throw new Error('Request failed');

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let rawText = '';
        targetBody.innerHTML = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            rawText += decoder.decode(value, { stream: true });
            targetBody.innerHTML = marked.parse(rawText);
            targetBody.scrollTop = targetBody.scrollHeight;
        }
    } catch (e) {
        if (e.name === 'AbortError') return;
        targetBody.innerHTML = '<div class="error">Error: Could not get a response. Please try again.</div>';
    }
}

// Main book content: highlight to look up with context
document.getElementById('book_content').addEventListener('mouseup', async () => {
    const sel = window.getSelection();
    const highlighted = sel.toString().trim();
    if (!highlighted || highlighted.length < 1) return;

    if (mainController) mainController.abort();
    mainController = new AbortController();

    modalSelectedText.textContent = highlighted;
    modalBody.innerHTML = '<div class="loading-text"><div class="spinner"></div><div>Asking AI...</div></div>';
    overlay.classList.add('active');

    const searchText = getSurroundingContext(highlighted);
    const question = 'what is "' + highlighted + '" in the context of "' + searchText + '", show me the pronounciation in International Phonetic Alphabet of "' + highlighted + '", explain to me in 50 words, also, please translate them to simplified chinese';

    await streamAIResponse(question, modalBody, mainController);
});

// Popup body & word area: highlight to open nested popup
function handlePopupHighlight(e) {
    e.stopPropagation();
    const sel = window.getSelection();
    const highlighted = sel.toString().trim();
    if (!highlighted || highlighted.length < 1) return;

    if (nestedController) nestedController.abort();
    nestedController = new AbortController();

    nestedModalSelectedText.textContent = highlighted;
    nestedModalBody.innerHTML = '<div class="loading-text"><div class="spinner"></div><div>Asking AI...</div></div>';
    nestedOverlay.classList.add('active');

    const question = 'what is "' + highlighted + '", show me the pronounciation in International Phonetic Alphabet, explain to me in 50 words, also, translate the explanation to simplified chinese';

    streamAIResponse(question, nestedModalBody, nestedController);
}

modalBody.addEventListener('mouseup', handlePopupHighlight);
document.getElementById('modal-word').addEventListener('mouseup', handlePopupHighlight);

// Nested popup body: highlight to re-query in the same nested popup
function handleNestedHighlight(e) {
    e.stopPropagation();
    const sel = window.getSelection();
    const highlighted = sel.toString().trim();
    if (!highlighted || highlighted.length < 1) return;

    if (nestedController) nestedController.abort();
    nestedController = new AbortController();

    nestedModalSelectedText.textContent = highlighted;
    nestedModalBody.innerHTML = '<div class="loading-text"><div class="spinner"></div><div>Asking AI...</div></div>';

    const question = 'what is "' + highlighted + '", show me the pronounciation in International Phonetic Alphabet, explain to me in 50 words, also, translate the explanation to simplified chinese';

    streamAIResponse(question, nestedModalBody, nestedController);
}

nestedModalBody.addEventListener('mouseup', handleNestedHighlight);
document.getElementById('nested-modal-word').addEventListener('mouseup', handleNestedHighlight);
</script>
</body>
</html>
