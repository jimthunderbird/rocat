<?php
// Handle AJAX requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');

    $action = $_POST['action'] ?? '';

    if ($action === 'fetch_book') {
        $url = $_POST['url'] ?? '';
        if (empty($url)) {
            echo json_encode(['error' => 'URL is required']);
            exit;
        }
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_USERAGENT => 'Mozilla/5.0',
        ]);
        $content = curl_exec($ch);
        $err = curl_error($ch);
        curl_close($ch);
        if ($err) {
            echo json_encode(['error' => $err]);
        } else {
            // Strip HTML tags, decode entities, get plain text
            $text = strip_tags($content);
            $text = html_entity_decode($text, ENT_QUOTES, 'UTF-8');
            $text = preg_replace('/[ \t]+/', ' ', $text);
            $text = preg_replace('/\n{3,}/', "\n\n", $text);
            $text = trim($text);
            echo json_encode(['content' => $text]);
        }
        exit;
    }

    if ($action === 'translate') {
        $words = $_POST['words'] ?? '';
        if (empty($words)) {
            echo json_encode(['error' => 'No words provided']);
            exit;
        }

        $prompt = "convert the following words to very very simple english: {$words}, show the converted result only, no explanation, no extra words.";

        // Stream from Ollama
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');

        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => 'http://127.0.0.1:11434/api/generate',
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode([
                'model' => 'gemma3:latest',
                'prompt' => $prompt,
                'stream' => true,
                'think' => false,
            ]),
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
            CURLOPT_WRITEFUNCTION => function ($ch, $data) {
                echo $data;
                ob_flush();
                flush();
                return strlen($data);
            },
        ]);
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
<title>Book Reader</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Georgia, 'Times New Roman', serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* BookInput - BaseLayout: background wheat */
#book-input {
    background: wheat;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #cba;
}

#book-input label {
    font-weight: bold;
    font-size: 14px;
    white-space: nowrap;
}

#book-input input {
    flex: 1;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #b9a07a;
    border-radius: 4px;
    outline: none;
}

#book-input input:focus {
    border-color: #8a6d3b;
    box-shadow: 0 0 0 2px rgba(138,109,59,0.2);
}

#book-input .status {
    font-size: 13px;
    color: #666;
}

/* BookContent - BaseLayout: background light yellow */
#book-content {
    background: lightyellow;
    flex: 1;
    padding: 32px 48px;
    line-height: 1.8;
    font-size: 17px;
    overflow-y: auto;
    min-height: 300px;
}

#book-content .paragraph {
    margin-bottom: 1em;
    cursor: text;
}

#book-content .placeholder {
    color: #999;
    font-style: italic;
    text-align: center;
    margin-top: 80px;
}

/* PopupShowHighlightedWords - draggable modal */
#popup-translate {
    display: none;
    position: fixed;
    min-width: 280px;
    max-width: 420px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    z-index: 1000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

#popup-translate .popup-header {
    background: #f0f0f0;
    padding: 8px 12px;
    border-radius: 8px 8px 0 0;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    user-select: none;
}

#popup-translate .popup-header .title {
    font-size: 13px;
    font-weight: 600;
    color: #444;
}

#popup-translate .popup-header .close-btn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #888;
    line-height: 1;
    padding: 0 4px;
}

#popup-translate .popup-header .close-btn:hover {
    color: #333;
}

#popup-translate .popup-body {
    padding: 14px 16px;
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    max-height: 300px;
    overflow-y: auto;
}

</style>
</head>
<body>

<!-- BookInput -->
<div id="book-input">
    <label for="url-input">Book Url</label>
    <input type="text" id="url-input" placeholder="Enter a book URL and press Enter">
    <span class="status" id="input-status"></span>
</div>

<!-- BookContent -->
<div id="book-content">
    <div class="placeholder">Enter a book URL above and press Enter to load content.</div>
</div>

<!-- PopupShowHighlightedWords -->
<div id="popup-translate">
    <div class="popup-header">
        <span class="title">Translation</span>
        <button class="close-btn">&times;</button>
    </div>
    <div class="popup-body" id="popup-body">...</div>
</div>

<script>
(function() {
    // --- State ---
    const popup = document.getElementById('popup-translate');
    const popupBody = document.getElementById('popup-body');
    const urlInput = document.getElementById('url-input');
    const inputStatus = document.getElementById('input-status');
    const bookContent = document.getElementById('book-content');

    // Remember last popup position
    let lastPopupPos = JSON.parse(localStorage.getItem('popupPos') || 'null');

    // --- BookInput: @key.enter -> fetch URL content ---
    urlInput.addEventListener('keydown', async function(e) {
        if (e.key !== 'Enter') return;
        const url = urlInput.value.trim();
        if (!url) return;

        inputStatus.textContent = 'Loading...';
        try {
            const formData = new FormData();
            formData.append('action', 'fetch_book');
            formData.append('url', url);

            const resp = await fetch('index.php', { method: 'POST', body: formData });
            const data = await resp.json();

            if (data.error) {
                inputStatus.textContent = 'Error: ' + data.error;
                return;
            }

            // Set BookContent.content and render paragraphs
            renderBookContent(data.content);
            inputStatus.textContent = 'Loaded.';
        } catch (err) {
            inputStatus.textContent = 'Error: ' + err.message;
        }
    });

    // --- BookContent: split content by new line, render paragraphs ---
    function renderBookContent(content) {
        bookContent.innerHTML = '';
        const lines = content.split('\n');
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;
            const p = document.createElement('div');
            p.className = 'paragraph';
            p.textContent = trimmed;
            bookContent.appendChild(p);
        }
    }

    // --- paragraph.words.@highlighted -> show popup ---
    document.addEventListener('mouseup', function() {
        const sel = window.getSelection();
        const text = sel.toString().trim();
        if (!text || text.length === 0) return;

        // Only trigger if selection is inside #book-content
        if (!sel.anchorNode || !bookContent.contains(sel.anchorNode)) return;

        showPopup(text);
    });

    // --- PopupShowHighlightedWords ---
    function showPopup(words) {
        popupBody.textContent = 'Translating...';
        popup.style.display = 'block';

        // Position: use last remembered position, or default near center
        if (lastPopupPos) {
            popup.style.left = lastPopupPos.x + 'px';
            popup.style.top = lastPopupPos.y + 'px';
        } else {
            popup.style.left = Math.max(40, (window.innerWidth - 350) / 2) + 'px';
            popup.style.top = '120px';
        }

        // Call LanguageService.translate(words) with streaming
        translateWords(words);
    }

    function hidePopup() {
        popup.style.display = 'none';
    }

    popup.querySelector('.close-btn').addEventListener('click', hidePopup);

    // --- LanguageService.translate(words) - streaming from Ollama ---
    let currentController = null;

    async function translateWords(words) {
        // Abort any previous request
        if (currentController) currentController.abort();
        currentController = new AbortController();

        popupBody.textContent = '';

        try {
            const formData = new FormData();
            formData.append('action', 'translate');
            formData.append('words', words);

            const resp = await fetch('index.php', {
                method: 'POST',
                body: formData,
                signal: currentController.signal,
            });

            const reader = resp.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });

                // Ollama streams JSON objects, one per line
                const lines = buffer.split('\n');
                buffer = lines.pop(); // keep incomplete last line in buffer

                for (const line of lines) {
                    if (!line.trim()) continue;
                    try {
                        const obj = JSON.parse(line);
                        if (obj.response) {
                            popupBody.textContent += obj.response;
                        }
                    } catch(e) {
                        // skip non-JSON lines
                    }
                }
            }

            // Process remaining buffer
            if (buffer.trim()) {
                try {
                    const obj = JSON.parse(buffer);
                    if (obj.response) {
                        popupBody.textContent += obj.response;
                    }
                } catch(e) {}
            }

            if (!popupBody.textContent.trim()) {
                popupBody.textContent = '(no translation returned)';
            }

        } catch (err) {
            if (err.name !== 'AbortError') {
                popupBody.textContent = 'Error: ' + err.message;
            }
        }
    }

    // --- Draggable popup + remember last position ---
    (function makeDraggable() {
        const header = popup.querySelector('.popup-header');
        let isDragging = false, offsetX = 0, offsetY = 0;

        header.addEventListener('mousedown', function(e) {
            isDragging = true;
            offsetX = e.clientX - popup.offsetLeft;
            offsetY = e.clientY - popup.offsetTop;
            e.preventDefault();
        });

        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            popup.style.left = x + 'px';
            popup.style.top = y + 'px';
        });

        document.addEventListener('mouseup', function() {
            if (isDragging) {
                isDragging = false;
                // Remember position
                lastPopupPos = {
                    x: popup.offsetLeft,
                    y: popup.offsetTop,
                };
                localStorage.setItem('popupPos', JSON.stringify(lastPopupPos));
            }
        });
    })();
})();
</script>
</body>
</html>
