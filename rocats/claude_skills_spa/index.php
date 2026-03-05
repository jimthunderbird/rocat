<?php
// API endpoints
if (isset($_GET['action'])) {
    header('Content-Type: application/json');

    if ($_GET['action'] === 'fetch_book') {
        $url = $_GET['url'] ?? '';
        if (!preg_match('#^https://www\.gutenberg\.org/#', $url)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid Gutenberg URL']);
            exit;
        }
        $text = file_get_contents($url);
        if ($text === false) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to fetch book']);
            exit;
        }
        echo json_encode(['text' => $text]);
        exit;
    }

    if ($_GET['action'] === 'llm') {
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');
        header('Connection: keep-alive');

        $input = json_decode(file_get_contents('php://input'), true);
        $prompt = $input['prompt'] ?? '';

        $ch = curl_init('http://127.0.0.1:11434/api/generate');
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode([
                'model' => 'gemma3:latest',
                'prompt' => $prompt,
                'stream' => true
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

    http_response_code(404);
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

.header {
    background: BurlyWood;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.header label { font-weight: bold; white-space: nowrap; }
.header input {
    flex: 1;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #997755;
    border-radius: 4px;
}

.book_content {
    background: wheat;
    flex: 1;
    padding: 20px 40px;
    line-height: 1.8;
    font-size: 16px;
    word-wrap: break-word;
}
.book_content .loading {
    background: wheat;
    padding: 20px;
    font-style: italic;
    color: #666;
}

.book_content .paragraph {
    margin-bottom: 1em;
    position: relative;
}

.btn-simple {
    display: none;
    margin-left: 8px;
    padding: 2px 8px;
    font-size: 12px;
    background: BurlyWood;
    border: 1px solid #997755;
    border-radius: 3px;
    cursor: pointer;
    vertical-align: middle;
}
.btn-simple:hover { background: #d2a86e; }

/* Modal */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}
.modal-overlay.active { display: flex; }
.modal {
    background: white;
    border-radius: 8px;
    padding: 20px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
}
.modal h3 { margin-bottom: 10px; }
.modal .close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
    background: none;
    border: none;
}
.modal .content { white-space: pre-wrap; line-height: 1.6; }
</style>
</head>
<body>

<div class="header">
    <label for="book_url">Book URL:</label>
    <input type="text" id="book_url" placeholder="https://www.gutenberg.org/cache/epub/100/pg100.txt">
</div>

<div class="book_content" id="book_content"></div>

<div class="modal-overlay" id="modal_overlay">
    <div class="modal">
        <button class="close-btn" id="modal_close">&times;</button>
        <h3 id="modal_title"></h3>
        <div class="content" id="modal_content"></div>
    </div>
</div>

<script>
const bookUrl = document.getElementById('book_url');
const bookContent = document.getElementById('book_content');
const modalOverlay = document.getElementById('modal_overlay');
const modalTitle = document.getElementById('modal_title');
const modalContent = document.getElementById('modal_content');
const modalClose = document.getElementById('modal_close');

// Close modal
modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
});

// Load book on Enter
bookUrl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loadBook(bookUrl.value.trim());
});

async function loadBook(url) {
    if (!url) return;
    bookContent.innerHTML = '<div class="loading">Loading...</div>';

    try {
        const resp = await fetch('?action=fetch_book&url=' + encodeURIComponent(url));
        const data = await resp.json();
        if (data.error) {
            bookContent.textContent = 'Error: ' + data.error;
            return;
        }
        renderBook(data.text);
    } catch (err) {
        bookContent.textContent = 'Error loading book: ' + err.message;
    }
}

function renderBook(text) {
    bookContent.innerHTML = '';
    // Normalize line endings and split on blank lines
    const normalized = text.replace(/\r\n/g, '\n');
    const paragraphs = normalized.split(/\n\n+/);

    paragraphs.forEach((para) => {
        const trimmed = para.trim();
        if (!trimmed) return;

        const div = document.createElement('div');
        div.className = 'paragraph';
        div.textContent = trimmed;

        const btn = document.createElement('button');
        btn.className = 'btn-simple';
        btn.textContent = 'Convert to Simple English';
        btn.addEventListener('click', () => convertToSimpleEnglish(trimmed, btn));
        div.appendChild(btn);

        bookContent.appendChild(div);
    });

    // Set up intersection observer to show/hide buttons
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const btn = entry.target.querySelector('.btn-simple');
            if (btn) btn.style.display = entry.isIntersecting ? 'inline-block' : 'none';
        });
    }, { threshold: 0 });

    bookContent.querySelectorAll('.paragraph').forEach(p => observer.observe(p));

    // Fallback: show buttons for initially visible paragraphs
    requestAnimationFrame(() => {
        bookContent.querySelectorAll('.paragraph').forEach(p => {
            const rect = p.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const btn = p.querySelector('.btn-simple');
                if (btn) btn.style.display = 'inline-block';
            }
        });
    });

    // Word selection for translation
    bookContent.addEventListener('mouseup', handleWordSelection);
}

function handleWordSelection() {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    if (!text || text.includes(' ') === false && text.length < 1) return;
    if (text.length > 200) return;

    // Show translation modal
    modalTitle.textContent = 'Translation';
    modalContent.textContent = 'Translating...';
    modalOverlay.classList.add('active');

    streamLLM(
        'Explain and translate the following highlighted words/phrase in simple English. Give a brief, clear explanation:\n\n"' + text + '"',
        modalContent
    );
}

async function convertToSimpleEnglish(paragraphText, btn) {
    modalTitle.textContent = 'Simple English';
    modalContent.textContent = 'Converting...';
    modalOverlay.classList.add('active');

    streamLLM(
        'Rewrite the following paragraph in simple, easy-to-understand English. Keep the meaning but use simpler words and shorter sentences:\n\n' + paragraphText,
        modalContent
    );
}

async function streamLLM(prompt, targetEl) {
    targetEl.textContent = '';

    try {
        const resp = await fetch('?action=llm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });

        const reader = resp.body.getReader();
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
                        targetEl.textContent += json.response;
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
