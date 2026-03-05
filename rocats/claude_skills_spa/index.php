<?php
// Handle AJAX requests
if (isset($_GET['action'])) {
    header('Content-Type: application/json');

    if ($_GET['action'] === 'fetch_book') {
        $url = $_GET['url'] ?? '';
        if (empty($url)) {
            echo json_encode(['error' => 'No URL provided']);
            exit;
        }
        $content = @file_get_contents($url);
        if ($content === false) {
            echo json_encode(['error' => 'Failed to fetch content from URL']);
            exit;
        }
        // Strip all HTML tags to get pure text content
        $content = strip_tags($content);
        // Trim whitespace
        $content = trim($content);
        echo json_encode(['content' => $content]);
        exit;
    }

    if ($_GET['action'] === 'llm_stream') {
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');
        header('Connection: keep-alive');

        $prompt = $_POST['prompt'] ?? '';
        if (empty($prompt)) {
            echo "data: {\"error\":\"No prompt provided\"}\n\n";
            flush();
            exit;
        }

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
            echo "data: " . trim($data) . "\n\n";
            ob_flush();
            flush();
            return strlen($data);
        });
        curl_exec($ch);
        curl_close($ch);
        echo "data: [DONE]\n\n";
        ob_flush();
        flush();
        exit;
    }

    echo json_encode(['error' => 'Unknown action']);
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
body { font-family: Georgia, serif; min-height: 100vh; display: flex; flex-direction: column; }

.url-bar {
    background: BurlyWood;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.url-bar label { font-weight: bold; white-space: nowrap; }
.url-bar input {
    flex: 1;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #999;
    border-radius: 4px;
}

#book_content {
    background: wheat;
    flex: 1;
    padding: 30px 60px;
    line-height: 1.4;
    font-size: 16px;
}
#book_content p {
    margin-bottom: 1em;
    position: relative;
}

.convert-btn {
    background: gold;
    border: 1px solid #b8860b;
    padding: 2px 8px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 3px;
    margin-left: 6px;
    display: none;
    vertical-align: middle;
}
.convert-btn.visible { display: inline; }

/* Modal styles */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 999;
}
.modal-box {
    position: fixed;
    background: #fff;
    border: 2px solid #555;
    border-radius: 8px;
    min-width: 300px;
    max-width: 500px;
    max-height: 400px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 1000;
    display: flex;
    flex-direction: column;
}
.modal-box.simple-english { background: wheat; }
.modal-header {
    background: #444;
    color: #fff;
    padding: 8px 12px;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px 6px 0 0;
    user-select: none;
}
.modal-header .close-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    line-height: 1;
}
.modal-body {
    padding: 16px;
    overflow-y: auto;
    flex: 1;
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>
</head>
<body>

<div class="url-bar">
    <label for="book_url">Book URL:</label>
    <input type="text" id="book_url" placeholder="Enter a Project Gutenberg plain text URL and press Enter" value="">
</div>

<div id="book_content"></div>

<!-- Highlighted words translation modal -->
<div class="modal-overlay" id="highlight_overlay"></div>
<div class="modal-box" id="highlight_modal" style="display:none; top:100px; left:100px;">
    <div class="modal-header">
        <span>Word Meaning</span>
        <button class="close-btn" onclick="closeModal('highlight')">&times;</button>
    </div>
    <div class="modal-body" id="highlight_modal_body"></div>
</div>

<!-- Simple English conversion modal -->
<div class="modal-overlay" id="simple_overlay"></div>
<div class="modal-box simple-english" id="simple_modal" style="display:none; top:150px; left:150px;">
    <div class="modal-header">
        <span>Simple English</span>
        <button class="close-btn" onclick="closeModal('simple')">&times;</button>
    </div>
    <div class="modal-body" id="simple_modal_body"></div>
</div>

<script>
// Modal position memory
const modalPositions = {
    highlight: { top: 100, left: 100 },
    simple: { top: 150, left: 150 }
};

// Load saved positions
try {
    const saved = localStorage.getItem('modalPositions');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(modalPositions, parsed);
    }
} catch(e) {}

function applyModalPosition(name) {
    const modal = document.getElementById(name + '_modal');
    modal.style.top = modalPositions[name].top + 'px';
    modal.style.left = modalPositions[name].left + 'px';
}

function saveModalPositions() {
    localStorage.setItem('modalPositions', JSON.stringify(modalPositions));
}

// Draggable modals
function makeDraggable(modalId, name) {
    const modal = document.getElementById(modalId);
    const header = modal.querySelector('.modal-header');
    let isDragging = false, startX, startY, startLeft, startTop;

    header.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = modal.offsetLeft;
        startTop = modal.offsetTop;
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        modal.style.left = (startLeft + e.clientX - startX) + 'px';
        modal.style.top = (startTop + e.clientY - startY) + 'px';
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            modalPositions[name].top = modal.offsetTop;
            modalPositions[name].left = modal.offsetLeft;
            saveModalPositions();
        }
    });
}

makeDraggable('highlight_modal', 'highlight');
makeDraggable('simple_modal', 'simple');

function showModal(name) {
    applyModalPosition(name);
    document.getElementById(name + '_modal').style.display = 'flex';
    document.getElementById(name + '_overlay').style.display = 'block';
}

function closeModal(name) {
    document.getElementById(name + '_modal').style.display = 'none';
    document.getElementById(name + '_overlay').style.display = 'none';
}

// Stream LLM response
async function streamLLM(prompt, targetElement) {
    targetElement.textContent = 'Thinking...';

    const formData = new FormData();
    formData.append('prompt', prompt);

    const response = await fetch('?action=llm_stream', {
        method: 'POST',
        body: formData
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    targetElement.textContent = '';
    let buffer = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const data = line.substring(6).trim();
                if (data === '[DONE]') return;
                try {
                    const parsed = JSON.parse(data);
                    if (parsed.response) {
                        targetElement.textContent += parsed.response;
                    }
                    if (parsed.error) {
                        targetElement.textContent = 'Error: ' + parsed.error;
                        return;
                    }
                } catch(e) {}
            }
        }
    }
}

// Book URL input - fetch on Enter
document.getElementById('book_url').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const url = this.value.trim();
        if (!url) return;
        const bookContent = document.getElementById('book_content');
        bookContent.innerHTML = '';
        bookContent.textContent = 'Loading...';

        fetch('?action=fetch_book&url=' + encodeURIComponent(url))
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    bookContent.textContent = 'Error: ' + data.error;
                    return;
                }
                displayBookContent(data.content);
            })
            .catch(err => {
                bookContent.textContent = 'Error: ' + err.message;
            });
    }
});

function displayBookContent(text) {
    const container = document.getElementById('book_content');
    // Clear completely
    container.innerHTML = '';

    // Split into paragraphs by double newlines or multiple newlines
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);

    paragraphs.forEach(function(paraText) {
        const p = document.createElement('p');
        p.textContent = paraText.trim();

        // Add "Convert to Simple English" button
        const btn = document.createElement('button');
        btn.className = 'convert-btn';
        btn.textContent = 'Convert to Simple English';
        btn.addEventListener('click', function() {
            const textToConvert = p.childNodes[0].textContent;
            const prompt = 'Given <text>' + textToConvert + '</text>, convert it to a version that uses very simple English words, show me the converted result only, no explanation, no extra words';
            showModal('simple');
            streamLLM(prompt, document.getElementById('simple_modal_body'));
        });
        p.appendChild(btn);

        container.appendChild(p);
    });

    // Observe paragraph visibility
    setupVisibilityObserver();
}

// IntersectionObserver to show/hide convert buttons when paragraphs are visible
function setupVisibilityObserver() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
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

    document.querySelectorAll('#book_content p').forEach(function(p) {
        observer.observe(p);
    });
}

// Detect text selection (highlighted words) in book_content
document.getElementById('book_content').addEventListener('mouseup', function() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (selectedText.length === 0 || selectedText.length > 200) return;

    // Get context: 30 words before and after
    const anchorNode = selection.anchorNode;
    if (!anchorNode || anchorNode.nodeType !== Node.TEXT_NODE) return;

    const fullText = anchorNode.textContent;
    const words = fullText.split(/\s+/);
    const selectedWords = selectedText.split(/\s+/);

    // Find position of selected text in the full text
    const selStart = selection.anchorOffset < selection.focusOffset ? selection.anchorOffset : selection.focusOffset;
    const beforeText = fullText.substring(0, selStart);
    const afterText = fullText.substring(selStart + selectedText.length);

    const beforeWords = beforeText.split(/\s+/).filter(w => w).slice(-30).join(' ');
    const afterWords = afterText.split(/\s+/).filter(w => w).slice(0, 30).join(' ');

    const context = beforeWords + ' ' + selectedText + ' ' + afterWords;
    const prompt = 'In the context: ' + context + ', show the meaning of "' + selectedText + '" using very simple English words. No explanation, no extra words.';

    showModal('highlight');
    streamLLM(prompt, document.getElementById('highlight_modal_body'));
});
</script>
</body>
</html>
