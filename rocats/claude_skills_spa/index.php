<?php
//all application logic and data are here

if (isset($_GET['action'])) {
    $action = $_GET['action'];

    if ($action === 'fetch_book') {
        header('Content-Type: text/plain; charset=utf-8');
        $url = $_GET['url'] ?? '';
        if (empty($url)) {
            http_response_code(400);
            echo 'Error: No URL provided';
            exit;
        }
        $content = @file_get_contents($url);
        if ($content === false) {
            http_response_code(500);
            echo 'Error: Failed to fetch content';
            exit;
        }
        echo strip_tags($content);
        exit;
    }

    if ($action === 'llm') {
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');
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
            if (ob_get_level()) ob_flush();
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
        body { font-family: Georgia, serif; }

        .url-bar {
            background: BurlyWood;
            padding: 10px;
        }
        .url-bar input {
            width: 100%;
            padding: 8px;
            font-size: 16px;
        }

        #bookContent {
            background: wheat;
            padding: 20px;
            line-height: 1.4;
            min-height: 80vh;
        }
        #bookContent p {
            margin-bottom: 1em;
            position: relative;
        }

        .convert-btn {
            background: gold;
            border: 1px solid #ccc;
            padding: 2px 8px;
            margin-left: 8px;
            cursor: pointer;
            font-size: 12px;
            display: none;
        }
        .convert-btn.visible {
            display: inline;
        }

        .modal-overlay {
            position: fixed;
            z-index: 1000;
            background: white;
            border: 1px solid #333;
            border-radius: 6px;
            min-width: 300px;
            max-width: 500px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            background: #eee;
            border-bottom: 1px solid #ccc;
            cursor: move;
            border-radius: 6px 6px 0 0;
            user-select: none;
        }
        .modal-close {
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            border: none;
            background: none;
            padding: 0 4px;
        }
        .modal-body {
            padding: 12px;
            overflow-y: auto;
            max-height: 400px;
        }
    </style>
</head>
<body>
    <div class="url-bar">
        <input type="text" id="bookUrl" placeholder="Enter Gutenberg book URL...">
    </div>
    <div id="bookContent"></div>

    <script>
        const bookUrl = document.getElementById('bookUrl');
        const bookContent = document.getElementById('bookContent');

        // Modal position persistence
        function getModalPositions() {
            try { return JSON.parse(localStorage.getItem('modal_positions') || '{}'); } catch { return {}; }
        }
        function saveModalPosition(id, x, y) {
            const pos = getModalPositions();
            pos[id] = { x, y };
            localStorage.setItem('modal_positions', JSON.stringify(pos));
        }

        // Create a draggable modal
        function createModal(id, title, contentHtml, styles) {
            // Remove existing modal with same id
            const existing = document.getElementById(id);
            if (existing) existing.remove();

            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.id = id;

            const pos = getModalPositions()[id];
            modal.style.left = (pos ? pos.x : 100) + 'px';
            modal.style.top = (pos ? pos.y : 100) + 'px';

            const header = document.createElement('div');
            header.className = 'modal-header';
            header.innerHTML = `<span>${title}</span>`;

            const closeBtn = document.createElement('button');
            closeBtn.className = 'modal-close';
            closeBtn.textContent = '\u00d7';
            closeBtn.onclick = () => modal.remove();
            header.appendChild(closeBtn);

            const body = document.createElement('div');
            body.className = 'modal-body';
            if (contentHtml) body.innerHTML = contentHtml;
            if (styles) {
                Object.keys(styles).forEach(k => body.style[k] = styles[k]);
            }

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
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                modal.style.left = x + 'px';
                modal.style.top = y + 'px';
            });
            document.addEventListener('mouseup', () => {
                if (isDragging) {
                    isDragging = false;
                    saveModalPosition(id, modal.offsetLeft, modal.offsetTop);
                }
            });

            return { modal, body };
        }

        // Stream LLM response into an element
        function streamLLM(prompt, targetEl) {
            targetEl.textContent = 'Thinking...';
            fetch('index.php?action=llm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt })
            }).then(response => {
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                targetEl.textContent = '';
                let buffer = '';

                function read() {
                    reader.read().then(({ done, value }) => {
                        if (done) return;
                        buffer += decoder.decode(value, { stream: true });
                        const lines = buffer.split('\n');
                        buffer = lines.pop();
                        for (const line of lines) {
                            if (!line.trim()) continue;
                            try {
                                const json = JSON.parse(line);
                                if (json.response) {
                                    targetEl.textContent += json.response;
                                }
                            } catch {}
                        }
                        read();
                    });
                }
                read();
            });
        }

        // Highlighted text modal
        bookContent.addEventListener('mouseup', (e) => {
            // Don't trigger on button clicks
            if (e.target.closest('button')) return;

            const sel = window.getSelection();
            const selectedText = sel.toString().trim();
            if (!selectedText || selectedText.length < 1) return;

            // Check selection is inside bookContent
            if (!bookContent.contains(sel.anchorNode)) return;

            // Build context: 30 words before + selected + 30 words after
            const fullText = bookContent.textContent;
            const selStart = fullText.indexOf(selectedText);
            if (selStart === -1) return;

            const beforeText = fullText.substring(0, selStart);
            const afterText = fullText.substring(selStart + selectedText.length);
            const wordsBefore = beforeText.split(/\s+/).filter(Boolean).slice(-30).join(' ');
            const wordsAfter = afterText.split(/\s+/).filter(Boolean).slice(0, 30).join(' ');
            const context = wordsBefore + ' ' + selectedText + ' ' + wordsAfter;

            const prompt = `in the context: ${context}, show the meaning of "${selectedText}" using very simple English words, no explanation, no extra words`;

            const { body } = createModal('highlightModal', 'Word Meaning', '', null);
            streamLLM(prompt, body);
        });

        // Load book content
        function loadBook(url) {
            if (!url) return;
            bookContent.innerHTML = '';
            bookContent.textContent = 'Loading...';

            // Save to history
            let history = [];
            try { history = JSON.parse(localStorage.getItem('book_history') || '[]'); } catch {}
            history = history.filter(h => h !== url);
            history.push(url);
            localStorage.setItem('book_history', JSON.stringify(history));

            fetch(`index.php?action=fetch_book&url=${encodeURIComponent(url)}`)
                .then(r => r.text())
                .then(text => {
                    bookContent.innerHTML = '';
                    // Split into paragraphs on double newlines
                    const paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
                    paragraphs.forEach(pText => {
                        const p = document.createElement('p');
                        p.textContent = pText;

                        const btn = document.createElement('button');
                        btn.className = 'convert-btn';
                        btn.textContent = 'Convert to Simple English';
                        btn.addEventListener('click', () => {
                            const prompt = `given <text>${pText}</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words`;
                            const { body } = createModal('simpleEnglishModal', 'Simple English', '', null);
                            body.style.setProperty('background-color', 'wheat', 'important');
                            streamLLM(prompt, body);
                        });
                        p.appendChild(btn);
                        bookContent.appendChild(p);
                    });

                    // IntersectionObserver to show/hide convert buttons
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
                })
                .catch(err => {
                    bookContent.textContent = 'Error loading book: ' + err.message;
                });
        }

        // Enter key on URL input
        bookUrl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                loadBook(bookUrl.value.trim());
            }
        });

        // On page load: restore last URL from history
        (function() {
            let history = [];
            try { history = JSON.parse(localStorage.getItem('book_history') || '[]'); } catch {}
            if (history.length > 0) {
                const lastUrl = history[history.length - 1];
                bookUrl.value = lastUrl;
                bookUrl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
            }
        })();
    </script>
</body>
</html>
