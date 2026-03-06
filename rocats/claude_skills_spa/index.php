<?php
//all application logic and data are here

if (isset($_GET['action'])) {
    $action = $_GET['action'];

    if ($action === 'fetch_book') {
        header('Content-Type: text/plain; charset=utf-8');
        $url = $_GET['url'] ?? '';
        if (empty($url)) {
            echo 'Error: No URL provided';
            exit;
        }
        $context = stream_context_create([
            'http' => [
                'timeout' => 30,
                'user_agent' => 'Mozilla/5.0 (compatible; BookReader/1.0)'
            ],
            'ssl' => [
                'verify_peer' => true,
                'verify_peer_name' => true
            ]
        ]);
        $content = @file_get_contents($url, false, $context);
        if ($content === false) {
            echo 'Error: Could not fetch the book content';
            exit;
        }
        echo strip_tags($content);
        exit;
    }

    if ($action === 'llm') {
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');
        header('Connection: keep-alive');

        $input = json_decode(file_get_contents('php://input'), true);
        $prompt = $input['prompt'] ?? '';

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
            if (ob_get_level() > 0) ob_flush();
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
<!-- all html/javascript/css code are here -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gutenberg Book Reader</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Georgia, serif; min-height: 100vh; }

        .url-bar {
            background: BurlyWood;
            padding: 12px 16px;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        .url-bar input {
            width: 100%;
            padding: 8px 12px;
            font-size: 16px;
            border: 1px solid #999;
            border-radius: 4px;
        }

        .book-content {
            background: wheat;
            padding: 24px 48px;
            line-height: 1.4;
            min-height: calc(100vh - 52px);
        }
        .book-content p {
            margin-bottom: 1em;
            position: relative;
        }

        .convert-btn {
            background: gold;
            border: 1px solid #b8860b;
            border-radius: 3px;
            padding: 2px 8px;
            font-size: 12px;
            cursor: pointer;
            margin-left: 8px;
            display: none;
            vertical-align: middle;
        }
        .convert-btn:hover {
            background: #ffdf40;
        }
        .convert-btn.visible {
            display: inline;
        }

        /* Modal styles */
        .modal-overlay {
            position: fixed;
            z-index: 1000;
            background: #fff;
            border: 2px solid #555;
            border-radius: 6px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            min-width: 280px;
            max-width: 450px;
            max-height: 400px;
            display: flex;
            flex-direction: column;
        }
        .modal-header {
            background: #444;
            color: #fff;
            padding: 6px 12px;
            cursor: move;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 4px 4px 0 0;
            font-size: 14px;
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
        .modal-close:hover { color: #f88; }
        .modal-body {
            padding: 12px;
            overflow-y: auto;
            flex: 1;
            font-size: 15px;
            line-height: 1.5;
        }
        .modal-body.wheat-bg {
            background: wheat;
        }
    </style>
</head>
<body>

<div class="url-bar">
    <input type="text" id="bookUrl" placeholder="Enter Gutenberg book URL (e.g., https://www.gutenberg.org/cache/epub/1342/pg1342.txt)" />
</div>

<div class="book-content" id="bookContent"></div>

<script>
(function() {
    const bookUrlInput = document.getElementById('bookUrl');
    const bookContent = document.getElementById('bookContent');

    // --- Modal System ---
    const modalPositions = JSON.parse(localStorage.getItem('modal_positions') || '{}');

    function createModal(id, title, options = {}) {
        let existing = document.getElementById(id);
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = id;

        const saved = modalPositions[id];
        const defaultTop = options.top || 100;
        const defaultLeft = options.left || 200;
        modal.style.top = (saved ? saved.top : defaultTop) + 'px';
        modal.style.left = (saved ? saved.left : defaultLeft) + 'px';

        const header = document.createElement('div');
        header.className = 'modal-header';
        header.innerHTML = '<span>' + title + '</span>';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close';
        closeBtn.textContent = '\u00d7';
        closeBtn.onclick = () => { modal.remove(); };
        header.appendChild(closeBtn);

        const body = document.createElement('div');
        body.className = 'modal-body' + (options.wheatBg ? ' wheat-bg' : '');

        modal.appendChild(header);
        modal.appendChild(body);
        document.body.appendChild(modal);

        // Draggable
        let isDragging = false, offsetX, offsetY;
        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - modal.offsetLeft;
            offsetY = e.clientY - modal.offsetTop;
            e.preventDefault();
        });
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            modal.style.left = (e.clientX - offsetX) + 'px';
            modal.style.top = (e.clientY - offsetY) + 'px';
        });
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                modalPositions[id] = { top: modal.offsetTop, left: modal.offsetLeft };
                localStorage.setItem('modal_positions', JSON.stringify(modalPositions));
            }
        });

        return { modal, body };
    }

    // --- LLM Call (streaming) ---
    async function callLLM(prompt, targetEl) {
        targetEl.textContent = 'Thinking...';
        try {
            const resp = await fetch('?action=llm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt })
            });
            const reader = resp.body.getReader();
            const decoder = new TextDecoder();
            let result = '';
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
                            result += json.response;
                            targetEl.textContent = result;
                        }
                    } catch(e) {}
                }
            }
        } catch(e) {
            targetEl.textContent = 'Error: ' + e.message;
        }
    }

    // --- Highlighted text meaning ---
    function getContext(text) {
        const fullText = bookContent.textContent || '';
        const idx = fullText.indexOf(text);
        if (idx === -1) return text;

        const before = fullText.substring(0, idx).split(/\s+/).slice(-30).join(' ');
        const after = fullText.substring(idx + text.length).split(/\s+/).slice(0, 30).join(' ');
        return before + ' ' + text + ' ' + after;
    }

    document.addEventListener('mouseup', (e) => {
        if (e.target.closest('.modal-overlay')) return;
        if (e.target.closest('.url-bar')) return;
        if (e.target.closest('.convert-btn')) return;

        const sel = window.getSelection();
        const selectedText = sel.toString().trim();
        if (!selectedText || selectedText.length === 0) return;

        // Check selection is within book content
        const range = sel.getRangeAt(0);
        if (!bookContent.contains(range.commonAncestorContainer)) return;

        const context = getContext(selectedText);
        const prompt = 'in the context: ' + context + ', show the meaning of "' + selectedText + '" using very simple English words. no explanation, no extra words';

        const { body } = createModal('modal-highlight', 'Meaning: ' + selectedText.substring(0, 40), {
            top: Math.min(e.clientY + 10, window.innerHeight - 300),
            left: Math.min(e.clientX + 10, window.innerWidth - 350)
        });

        callLLM(prompt, body);
    });

    // --- Load book content ---
    async function loadBook(url) {
        bookContent.innerHTML = '';
        bookContent.textContent = 'Loading...';

        // Save to history
        let history = JSON.parse(localStorage.getItem('book_history') || '[]');
        history = history.filter(h => h !== url);
        history.push(url);
        localStorage.setItem('book_history', JSON.stringify(history));

        try {
            const resp = await fetch('?action=fetch_book&url=' + encodeURIComponent(url));
            const text = await resp.text();

            bookContent.innerHTML = '';

            if (text.startsWith('Error:')) {
                bookContent.textContent = text;
                return;
            }

            // Split into paragraphs
            const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());
            paragraphs.forEach(pText => {
                const p = document.createElement('p');
                p.textContent = pText.trim();

                // Add "Convert to Simple English" button
                const btn = document.createElement('button');
                btn.className = 'convert-btn';
                btn.textContent = 'Convert to Simple English';
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const paraText = p.childNodes[0].textContent;
                    const prompt = 'given <text>' + paraText + '</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words';

                    const { body } = createModal('modal-simple-english', 'Simple English', {
                        wheatBg: true,
                        top: Math.min(e.clientY, window.innerHeight - 300),
                        left: Math.min(e.clientX, window.innerWidth - 350)
                    });
                    callLLM(prompt, body);
                });

                p.appendChild(btn);
                bookContent.appendChild(p);
            });

            // Intersection observer to show buttons when paragraph is visible
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

            bookContent.querySelectorAll('p').forEach(p => observer.observe(p));

        } catch(e) {
            bookContent.textContent = 'Error: ' + e.message;
        }
    }

    // --- URL input handling ---
    bookUrlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const url = bookUrlInput.value.trim();
            if (url) loadBook(url);
        }
    });

    // --- On load: restore last URL from history ---
    const history = JSON.parse(localStorage.getItem('book_history') || '[]');
    if (history.length > 0) {
        const lastUrl = history[history.length - 1];
        bookUrlInput.value = lastUrl;
        // Trigger enter key event
        bookUrlInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    }
})();
</script>
</body>
</html>
