<?php
// Handle AJAX requests
if (isset($_GET['action'])) {
    header('Content-Type: text/plain; charset=utf-8');

    if ($_GET['action'] === 'fetch_book' && isset($_GET['url'])) {
        $url = $_GET['url'];
        $content = @file_get_contents($url);
        if ($content === false) {
            echo "Error: Could not fetch the book content.";
        } else {
            echo strip_tags($content);
        }
    }

    if ($_GET['action'] === 'llm_stream') {
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');

        $prompt = $_POST['prompt'] ?? '';
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
            echo $data;
            ob_flush();
            flush();
            return strlen($data);
        });

        curl_exec($ch);
        curl_close($ch);
    }
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
body { font-family: Georgia, serif; height: 100vh; display: flex; flex-direction: column; }

.url-bar {
    background: BurlyWood;
    padding: 10px;
    display: flex;
    align-items: center;
}
.url-bar input {
    width: 100%;
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #999;
    border-radius: 4px;
}

.book_content {
    background: wheat;
    flex: 1;
    overflow-y: auto;
    padding: 20px 40px;
    line-height: 1.4;
    font-size: 17px;
}
.book_content p {
    margin-bottom: 1em;
    position: relative;
}

.convert-btn {
    background: gold;
    border: none;
    padding: 2px 8px;
    margin-left: 8px;
    cursor: pointer;
    font-size: 13px;
    border-radius: 3px;
    display: none;
    vertical-align: middle;
}
.convert-btn.visible {
    display: inline;
}

.modal-overlay {
    position: fixed;
    z-index: 1000;
    background: white;
    border: 1px solid #666;
    border-radius: 6px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    min-width: 300px;
    max-width: 500px;
    max-height: 70vh;
    display: flex;
    flex-direction: column;
}
.modal-header {
    background: #555;
    color: white;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: move;
    border-radius: 6px 6px 0 0;
    user-select: none;
}
.modal-header .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 0 4px;
}
.modal-body {
    padding: 12px;
    overflow-y: auto;
    flex: 1;
    white-space: pre-wrap;
    font-size: 15px;
}
.modal-body.wheat-bg {
    background: wheat;
}
</style>
</head>
<body>

<div class="url-bar">
    <input type="text" id="bookUrl" placeholder="Enter Project Gutenberg book URL and press Enter..." value="">
</div>
<div class="book_content" id="bookContent"></div>

<script>
const LLM_HOST = '127.0.0.1:11434';
const LLM_MODEL = 'gemma3:latest';
const bookUrlInput = document.getElementById('bookUrl');
const bookContent = document.getElementById('bookContent');

// URL input - Enter key handler
bookUrlInput.addEventListener('keydown', async function(e) {
    if (e.key === 'Enter') {
        const url = this.value.trim();
        if (!url) return;

        bookContent.innerHTML = '';
        bookContent.textContent = 'Loading...';

        try {
            const resp = await fetch('index.php?action=fetch_book&url=' + encodeURIComponent(url));
            const text = await resp.text();

            bookContent.innerHTML = '';

            const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());
            paragraphs.forEach(p => {
                const pEl = document.createElement('p');
                pEl.textContent = p.trim();

                const btn = document.createElement('button');
                btn.className = 'convert-btn';
                btn.textContent = 'Convert to Simple English';
                btn.addEventListener('click', function() {
                    convertToSimpleEnglish(pEl.firstChild.textContent || pEl.textContent.replace('Convert to Simple English', '').trim());
                });
                pEl.appendChild(btn);

                bookContent.appendChild(pEl);
            });

            observeParagraphs();
        } catch (err) {
            bookContent.textContent = 'Error loading book: ' + err.message;
        }
    }
});

// IntersectionObserver for convert buttons
function observeParagraphs() {
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

    document.querySelectorAll('.book_content p').forEach(p => observer.observe(p));
}

// Text selection - highlighted words modal
document.getElementById('bookContent').addEventListener('mouseup', function() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (!selectedText || selectedText.length < 1) return;

    // Get context: 30 words before and after
    const range = selection.getRangeAt(0);
    const container = range.startContainer.parentElement.closest('p') || range.startContainer.parentElement;
    const fullText = container.textContent.replace('Convert to Simple English', '').trim();
    const words = fullText.split(/\s+/);
    const selectedWords = selectedText.split(/\s+/);

    // Find position of selected text in words
    const fullTextBeforeSelection = fullText.substring(0, fullText.indexOf(selectedText));
    const wordsBefore = fullTextBeforeSelection.trim().split(/\s+/).filter(w => w);
    const startIdx = wordsBefore.length;

    const contextStart = Math.max(0, startIdx - 30);
    const contextEnd = Math.min(words.length, startIdx + selectedWords.length + 30);
    const context = words.slice(contextStart, contextEnd).join(' ');

    const prompt = `in the context: ${context}, show the meaning of ${selectedText} using very simple English words, no explanation, no extra words`;

    showStreamingModal('Word Meaning', prompt, 'word-meaning');
});

// Convert to Simple English
function convertToSimpleEnglish(text) {
    const prompt = `given <text>${text}</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words`;
    showStreamingModal('Simple English', prompt, 'simple-english-displayer', true);
}

// Modal system
function showStreamingModal(title, prompt, modalId, wheatBg = false) {
    // Remove existing modal with same id
    const existing = document.getElementById(modalId);
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = modalId;

    // Restore saved position
    const allPositions = JSON.parse(localStorage.getItem('modalPositions') || '{}');
    if (allPositions[modalId]) {
        const pos = allPositions[modalId];
        modal.style.left = pos.left + 'px';
        modal.style.top = pos.top + 'px';
    } else {
        modal.style.left = '50%';
        modal.style.top = '20%';
        modal.style.transform = 'translate(-50%, 0)';
    }

    const header = document.createElement('div');
    header.className = 'modal-header';
    header.innerHTML = `<span>${title}</span>`;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.textContent = '\u00D7';
    closeBtn.onclick = () => modal.remove();
    header.appendChild(closeBtn);

    const body = document.createElement('div');
    body.className = 'modal-body' + (wheatBg ? ' wheat-bg' : '');
    body.textContent = 'Loading...';

    modal.appendChild(header);
    modal.appendChild(body);
    document.body.appendChild(modal);

    // Make draggable
    makeDraggable(modal, header, modalId);

    // Stream LLM response
    streamLLM(prompt, body);
}

function makeDraggable(modal, handle, modalId) {
    let isDragging = false, startX, startY, startLeft, startTop;

    handle.addEventListener('mousedown', function(e) {
        isDragging = true;
        // Remove transform if set
        if (modal.style.transform) {
            const rect = modal.getBoundingClientRect();
            modal.style.left = rect.left + 'px';
            modal.style.top = rect.top + 'px';
            modal.style.transform = '';
        }
        startX = e.clientX;
        startY = e.clientY;
        startLeft = parseInt(modal.style.left);
        startTop = parseInt(modal.style.top);
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
            // Save position
            const positions = JSON.parse(localStorage.getItem('modalPositions') || '{}');
            positions[modalId] = { left: parseInt(modal.style.left), top: parseInt(modal.style.top) };
            localStorage.setItem('modalPositions', JSON.stringify(positions));
        }
    });
}

async function streamLLM(prompt, targetEl) {
    targetEl.textContent = '';

    try {
        const resp = await fetch('index.php?action=llm_stream', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'prompt=' + encodeURIComponent(prompt)
        });

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });

            // Parse NDJSON lines from Ollama
            const lines = buffer.split('\n');
            buffer = lines.pop(); // keep incomplete line

            for (const line of lines) {
                if (!line.trim()) continue;
                try {
                    const json = JSON.parse(line);
                    if (json.response) {
                        targetEl.textContent += json.response;
                        // Auto-scroll to bottom
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
    } catch (err) {
        targetEl.textContent = 'Error: ' + err.message;
    }
}
</script>
</body>
</html>
