<?php
// Handle AJAX requests
if (isset($_GET['action'])) {
    header('Content-Type: text/plain; charset=utf-8');

    if ($_GET['action'] === 'fetch_book' && isset($_GET['url'])) {
        $url = $_GET['url'];
        $content = @file_get_contents($url);
        if ($content === false) {
            http_response_code(400);
            echo 'Failed to fetch content from URL';
        } else {
            echo $content;
        }
        exit;
    }

    if ($_GET['action'] === 'llm_stream') {
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
            CURLOPT_WRITEFUNCTION => function($ch, $data) {
                $lines = explode("\n", $data);
                foreach ($lines as $line) {
                    $line = trim($line);
                    if (empty($line)) continue;
                    $json = json_decode($line, true);
                    if ($json && isset($json['response'])) {
                        echo "data: " . json_encode(['text' => $json['response']]) . "\n\n";
                        if (ob_get_level()) ob_flush();
                        flush();
                    }
                }
                return strlen($data);
            },
            CURLOPT_TIMEOUT => 120
        ]);
        curl_exec($ch);
        curl_close($ch);
        echo "data: [DONE]\n\n";
        if (ob_get_level()) ob_flush();
        flush();
        exit;
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

.header {
    background: BurlyWood;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.header input {
    flex: 1;
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #999;
    border-radius: 4px;
}

.book_content {
    flex: 1;
    overflow-y: auto;
    padding: 30px 60px;
    background: wheat;
    line-height: 1.4;
}
.book_content p {
    margin-bottom: 1em;
    position: relative;
}

.convert-btn {
    display: inline-block;
    background: gold;
    border: none;
    padding: 4px 10px;
    margin-left: 8px;
    cursor: pointer;
    font-size: 13px;
    border-radius: 3px;
    vertical-align: baseline;
    opacity: 0;
    transition: opacity 0.3s;
}
.convert-btn.visible {
    opacity: 1;
}

.modal-overlay {
    position: fixed;
    z-index: 1000;
    background: white;
    border: 1px solid #888;
    border-radius: 6px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    min-width: 280px;
    max-width: 500px;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
}
.modal-header {
    background: #eee;
    padding: 8px 12px;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px 6px 0 0;
    user-select: none;
}
.modal-header .close-btn {
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

<div class="header">
    <input type="text" id="bookUrl" placeholder="Enter Gutenberg book URL and press Enter..." value="">
</div>
<div class="book_content" id="bookContent"></div>

<script>
// Modal position memory
const modalPositions = {};

function createModal(id, title, options = {}) {
    // Remove existing modal with same id
    const existing = document.getElementById('modal-' + id);
    if (existing) {
        if (existing._closeModal) existing._closeModal();
        else existing.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'modal-' + id;

    const savedPos = modalPositions[id];
    if (savedPos) {
        modal.style.left = savedPos.x + 'px';
        modal.style.top = savedPos.y + 'px';
    } else {
        modal.style.left = '50%';
        modal.style.top = '20%';
        modal.style.transform = 'translate(-50%, 0)';
    }

    modal.innerHTML = `
        <div class="modal-header">
            <span>${title}</span>
            <button class="close-btn">&times;</button>
        </div>
        <div class="modal-body ${options.bgClass || ''}">${options.initialContent || 'Loading...'}</div>
    `;

    // Draggable
    const header = modal.querySelector('.modal-header');
    let dragging = false, startX, startY, origX, origY;

    const onMouseMove = (e) => {
        if (!dragging) return;
        modal.style.left = (origX + e.clientX - startX) + 'px';
        modal.style.top = (origY + e.clientY - startY) + 'px';
    };

    const onMouseUp = () => {
        if (dragging) {
            dragging = false;
            const rect = modal.getBoundingClientRect();
            modalPositions[id] = { x: rect.left, y: rect.top };
        }
    };

    header.addEventListener('mousedown', (e) => {
        dragging = true;
        if (modal.style.transform) {
            const rect = modal.getBoundingClientRect();
            modal.style.left = rect.left + 'px';
            modal.style.top = rect.top + 'px';
            modal.style.transform = '';
        }
        const rect = modal.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        origX = rect.left;
        origY = rect.top;
        e.preventDefault();
    });

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    const closeModal = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        modal.remove();
    };

    modal.querySelector('.close-btn').onclick = closeModal;
    modal._closeModal = closeModal;

    document.body.appendChild(modal);
    return modal;
}

async function streamLLM(prompt, bodyEl) {
    bodyEl.textContent = '';

    const response = await fetch('?action=llm_stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
    });

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
            if (line.startsWith('data: ')) {
                const data = line.slice(6).trim();
                if (data === '[DONE]') return;
                try {
                    const parsed = JSON.parse(data);
                    if (parsed.text) {
                        bodyEl.textContent += parsed.text;
                    }
                } catch(e) {}
            }
        }
    }
}

// Book URL input
document.getElementById('bookUrl').addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;

    const url = e.target.value.trim();
    if (!url) return;

    const contentDiv = document.getElementById('bookContent');
    contentDiv.innerHTML = '';
    contentDiv.textContent = 'Loading...';

    try {
        const response = await fetch('?action=fetch_book&url=' + encodeURIComponent(url));
        if (!response.ok) throw new Error('Failed to fetch');
        let text = await response.text();

        // Strip all HTML tags - keep only pure text
        const tmp = document.createElement('div');
        tmp.innerHTML = text;
        text = tmp.textContent || tmp.innerText || '';

        // Clear loading text, split into paragraphs
        contentDiv.innerHTML = '';
        const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);

        paragraphs.forEach(para => {
            const p = document.createElement('p');
            p.textContent = para.trim();

            // Add Convert to Simple English button
            const btn = document.createElement('button');
            btn.className = 'convert-btn';
            btn.textContent = 'Convert to Simple English';
            btn.onclick = () => {
                const paraText = p.childNodes[0].textContent;
                const modal = createModal('simple-english-' + Math.random().toString(36).slice(2), 'Simple English', { bgClass: 'wheat-bg' });
                const body = modal.querySelector('.modal-body');
                const prompt = `Given <text>${paraText}</text>, convert it to a version that use very simple English words, show me the converted result only, no explanation, no extra words`;
                streamLLM(prompt, body);
            };
            p.appendChild(btn);

            contentDiv.appendChild(p);
        });

        // Intersection observer for Convert buttons visibility
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

        contentDiv.querySelectorAll('p').forEach(p => observer.observe(p));

    } catch (err) {
        contentDiv.textContent = 'Error loading book: ' + err.message;
    }
});

// Highlighted text -> translation modal
document.getElementById('bookContent').addEventListener('mouseup', () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (!selectedText || selectedText.length === 0) return;

    // Get context: 30 words before and after
    const anchorNode = selection.anchorNode;
    if (!anchorNode || !anchorNode.parentElement) return;

    const paragraph = anchorNode.parentElement.closest('p') || anchorNode.parentElement;
    if (!paragraph || !document.getElementById('bookContent').contains(paragraph)) return;

    const fullText = paragraph.childNodes[0] ? paragraph.childNodes[0].textContent : paragraph.textContent;

    // Find position of selected text
    const selectedIndex = fullText.indexOf(selectedText);
    if (selectedIndex === -1) return;

    const beforeText = fullText.substring(0, selectedIndex);
    const afterText = fullText.substring(selectedIndex + selectedText.length);
    const wordsBefore = beforeText.split(/\s+/).filter(w => w).slice(-30).join(' ');
    const wordsAfter = afterText.split(/\s+/).filter(w => w).slice(0, 30).join(' ');

    const context = wordsBefore + ' ' + selectedText + ' ' + wordsAfter;
    const prompt = `In the context: ${context}, show the meaning of "${selectedText}" using very simple English words. No explanation, no extra words.`;

    const modal = createModal('highlight-translation', 'Word Meaning');
    const body = modal.querySelector('.modal-body');
    streamLLM(prompt, body);
});
</script>
</body>
</html>
