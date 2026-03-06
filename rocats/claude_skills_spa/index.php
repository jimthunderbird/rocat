<?php
//all application logic and data are here

// Handle book URL fetch request
if (isset($_GET['fetch_book'])) {
    $url = $_GET['fetch_book'];
    $content = @file_get_contents($url);
    if ($content === false) {
        echo "Error: Could not fetch the book content.";
    } else {
        echo $content;
    }
    exit;
}

// Handle LLM proxy request
if (isset($_POST['llm_prompt'])) {
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Connection: keep-alive');

    $prompt = $_POST['llm_prompt'];
    $model = 'gemma3:latest';
    $host = '127.0.0.1:11434';

    $payload = json_encode([
        'model' => $model,
        'prompt' => $prompt,
        'stream' => true
    ]);

    $ch = curl_init("http://{$host}/api/generate");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, function($ch, $data) {
        echo $data;
        if (ob_get_level() > 0) ob_flush();
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
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Georgia, serif; min-height: 100vh; }

        .url-bar {
            background: BurlyWood;
            padding: 12px;
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
            padding: 20px 40px;
            line-height: 1.4;
            min-height: 80vh;
        }
        .book_content p {
            margin-bottom: 1em;
            position: relative;
        }

        .convert-btn {
            background: gold;
            border: 1px solid #b8860b;
            padding: 3px 10px;
            font-size: 12px;
            cursor: pointer;
            border-radius: 3px;
            margin-left: 8px;
            display: none;
            vertical-align: middle;
        }
        .convert-btn.visible {
            display: inline-block;
        }
        .convert-btn:hover {
            background: #ffdf40;
        }

        /* Modal overlay */
        .modal-overlay {
            position: fixed;
            z-index: 1000;
            background: #fff;
            border: 1px solid #888;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            min-width: 280px;
            max-width: 500px;
            display: none;
        }
        .modal-overlay .modal-header {
            background: #eee;
            padding: 8px 12px;
            cursor: move;
            border-radius: 8px 8px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            user-select: none;
        }
        .modal-overlay .modal-close {
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            border: none;
            background: none;
            padding: 0 4px;
        }
        .modal-overlay .modal-body {
            padding: 12px;
            white-space: pre-wrap;
            overflow-y: auto;
            max-height: 50vh;
        }
        .modal-overlay.wheat-bg .modal-body {
            background: wheat;
        }
    </style>
</head>
<body>

<div class="url-bar">
    <input type="text" id="bookUrl" placeholder="Enter book URL and press Enter..." />
</div>
<div class="book_content" id="bookContent"></div>

<script>
// ============ Modal System (SimpleModal) ============
// modal_positions persistence via localStorage
const modal_positions = JSON.parse(localStorage.getItem('modal_positions') || '{}');
let modalCounter = 0;

function createModal(title, opts) {
    opts = opts || {};
    const id = 'modal_' + (++modalCounter);
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay' + (opts.wheatBg ? ' wheat-bg' : '');
    overlay.id = id;
    overlay.innerHTML = `
        <div class="modal-header">
            <span>${title}</span>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body"></div>
    `;
    document.body.appendChild(overlay);

    // Position
    const pos = modal_positions[title];
    if (pos) {
        overlay.style.left = pos.left;
        overlay.style.top = pos.top;
    } else {
        overlay.style.left = '50%';
        overlay.style.top = '20%';
        overlay.style.transform = 'translateX(-50%)';
    }
    overlay.style.display = 'block';

    // Close button
    const closeBtn = overlay.querySelector('.modal-close');
    closeBtn.addEventListener('mousedown', (e) => { e.stopPropagation(); });
    closeBtn.addEventListener('mouseup', (e) => { e.stopPropagation(); });
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        overlay.remove();
    });

    // Draggable
    initDraggable(overlay, title);

    return overlay;
}

function initDraggable(modalEl, title) {
    const header = modalEl.querySelector('.modal-header');
    let isDragging = false, offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - modalEl.offsetLeft;
        offsetY = e.clientY - modalEl.offsetTop;
        modalEl.style.transform = 'none';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        modalEl.style.left = (e.clientX - offsetX) + 'px';
        modalEl.style.top = (e.clientY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            modal_positions[title] = {
                left: modalEl.style.left,
                top: modalEl.style.top
            };
            localStorage.setItem('modal_positions', JSON.stringify(modal_positions));
        }
    });
}

// ============ LLM Streaming ============
async function streamLLM(prompt, targetEl) {
    targetEl.textContent = 'Loading...';

    const formData = new FormData();
    formData.append('llm_prompt', prompt);

    const response = await fetch(window.location.href.split('?')[0], {
        method: 'POST',
        body: formData
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    targetEl.textContent = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(l => l.trim());
        for (const line of lines) {
            try {
                const json = JSON.parse(line);
                if (json.response) {
                    targetEl.textContent += json.response;
                }
            } catch(e) {}
        }
    }
}

// ============ Highlighted Text Translation ============
function getContextAroundSelection(text, fullText, wordCount) {
    const idx = fullText.indexOf(text);
    if (idx === -1) return text;

    const before = fullText.substring(0, idx).trim().split(/\s+/).slice(-wordCount).join(' ');
    const after = fullText.substring(idx + text.length).trim().split(/\s+/).slice(0, wordCount).join(' ');
    return before + ' ' + text + ' ' + after;
}

document.getElementById('bookContent').addEventListener('mouseup', (e) => {
    if (e.target.closest('.modal-overlay')) return;
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (!selectedText || selectedText.length === 0) return;
    if (e.target.classList.contains('convert-btn')) return;

    const bookContent = document.getElementById('bookContent');
    const fullText = bookContent.textContent;
    const context = getContextAroundSelection(selectedText, fullText, 30);
    const prompt = `In the context: ${context}, show the meaning of ${selectedText} using very simple English words. No explanation, no extra words.`;

    const modal = createModal('Translation');
    streamLLM(prompt, modal.querySelector('.modal-body'));
});

// ============ Book URL Input ============
const bookUrlInput = document.getElementById('bookUrl');
const bookContentDiv = document.getElementById('bookContent');

bookUrlInput.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;

    const url = bookUrlInput.value.trim();
    if (!url) return;

    bookContentDiv.innerHTML = '';
    bookContentDiv.textContent = 'Loading...';

    // Save to local storage (unique entries)
    let history = JSON.parse(localStorage.getItem('book_history') || '[]');
    history = history.filter(h => h !== url);
    history.push(url);
    localStorage.setItem('book_history', JSON.stringify(history));

    try {
        const response = await fetch('?fetch_book=' + encodeURIComponent(url));
        let content = await response.text();

        // Strip all HTML tags
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        content = tempDiv.textContent || tempDiv.innerText || '';

        // Clear innerHTML completely (@preload)
        bookContentDiv.innerHTML = '';

        // Split into paragraphs (@postload)
        const paragraphs = content.split(/\n\s*\n|\r\n\s*\r\n/).filter(p => p.trim());
        paragraphs.forEach(pText => {
            const p = document.createElement('p');
            p.textContent = pText.trim();

            // Add SimpleEnglishConversionButton appended at end of paragraph
            const btn = document.createElement('button');
            btn.className = 'convert-btn';
            btn.textContent = 'Convert to Simple English';
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const textNode = p.childNodes[0];
                const paragraphText = textNode ? textNode.textContent : '';
                const prompt = `Given <text>${paragraphText}</text>, convert it to a version that uses very simple English words. Show me the converted result only, no explanation, no extra words.`;
                const modal = createModal('Simple English', { wheatBg: true });
                streamLLM(prompt, modal.querySelector('.modal-body'));
            });
            p.appendChild(btn);
            bookContentDiv.appendChild(p);
        });

        // Show buttons when paragraph is visible (IntersectionObserver)
        setupVisibilityObserver();
    } catch (err) {
        bookContentDiv.textContent = 'Error: ' + err.message;
    }
});

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

    document.querySelectorAll('.book_content p').forEach(p => {
        observer.observe(p);
    });
}

// ============ @load: Restore last book from history ============
window.addEventListener('DOMContentLoaded', () => {
    const history = JSON.parse(localStorage.getItem('book_history') || '[]');
    if (history.length > 0) {
        bookUrlInput.value = history[history.length - 1];
        bookUrlInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    }
});
</script>
</body>
</html>
