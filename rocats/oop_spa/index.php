<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['url'])) {
  $url = $_POST['url'];
  $content = @file_get_contents($url);
  if ($content === false) {
    http_response_code(500);
    echo 'Failed to fetch content from the provided URL.';
  } else {
    echo $content;
  }
  exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['translate'])) {
  $words = $_POST['translate'];
  $prompt = "convert the following words to very very simple english: $words, return the converted result only, no explanation, no extra words.";

  $data = json_encode([
    'model' => 'gemma3:latest',
    'prompt' => $prompt,
    'stream' => true,
    'think' => false
  ]);

  header('Content-Type: text/event-stream');
  header('Cache-Control: no-cache');

  $ch = curl_init('http://127.0.0.1:11434/api/generate');
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
  curl_setopt($ch, CURLOPT_WRITEFUNCTION, function($ch, $chunk) {
    $lines = explode("\n", trim($chunk));
    foreach ($lines as $line) {
      if (empty($line)) continue;
      $json = json_decode($line, true);
      if (isset($json['response'])) {
        echo 'data: ' . json_encode(['token' => $json['response']]) . "\n\n";
        ob_flush();
        flush();
      }
    }
    return strlen($chunk);
  });
  curl_exec($ch);
  curl_close($ch);

  echo "data: [DONE]\n\n";
  ob_flush();
  flush();
  exit;
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
    body { font-family: Georgia, serif; background: #f5f1eb; color: #333; height: 100vh; display: flex; flex-direction: column; }
    #BookInput { padding: 16px 24px; background: wheat; border-bottom: 1px solid #ddd; display: flex; align-items: center; gap: 12px; }
    #BookInput label { font-size: 14px; color: #666; white-space: nowrap; }
    #BookInput input { flex: 1; padding: 8px 12px; font-size: 15px; border: 1px solid #ccc; border-radius: 4px; outline: none; }
    #BookInput input:focus { border-color: #888; }
    #BookContent { flex: 1; padding: 24px 32px; overflow-y: auto; background: lightyellow; font-size: 15px; line-height: 1.7; }
    #BookContent p { margin-bottom: 1em; }

    /* Modal overlay */
    #modalOverlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      z-index: 999;
    }

    /* Popup Modal */
    #popup {
      display: none;
      position: fixed;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
      padding: 0;
      min-width: 280px;
      max-width: 400px;
      z-index: 1000;
      cursor: default;
      user-select: none;
    }
    #popup .popup-titlebar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px;
      background: #f0f0f0;
      border-bottom: 1px solid #ddd;
      border-radius: 8px 8px 0 0;
      cursor: grab;
    }
    #popup .popup-titlebar.dragging { cursor: grabbing; }
    #popup .popup-title { font-weight: bold; font-size: 13px; color: #555; }
    #popup .popup-close {
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      color: #999;
      line-height: 1;
      padding: 0 4px;
    }
    #popup .popup-close:hover { color: #333; }
    #popup .popup-body {
      padding: 16px;
      font-size: 14px;
      line-height: 1.6;
      color: #333;
      user-select: text;
      cursor: text;
    }
  </style>
</head>
<body>
  <div id="BookInput">
    <label>Book Url</label>
    <input type="text" id="urlInput" placeholder="Enter a URL and press Enter" />
  </div>
  <div id="BookContent"></div>

  <div id="modalOverlay"></div>
  <div id="popup">
    <div class="popup-titlebar">
      <span class="popup-title">Highlighted Words</span>
      <button class="popup-close">&times;</button>
    </div>
    <div class="popup-body"></div>
  </div>

  <script>
    const urlInput = document.getElementById('urlInput');
    const bookContent = document.getElementById('BookContent');
    const modalOverlay = document.getElementById('modalOverlay');
    const popup = document.getElementById('popup');
    const popupBody = popup.querySelector('.popup-body');
    const popupTitlebar = popup.querySelector('.popup-titlebar');
    const popupClose = popup.querySelector('.popup-close');

    // Remember last popup position
    let lastPopupX = null;
    let lastPopupY = null;

    // Fetch book content on Enter
    urlInput.addEventListener('keydown', async (e) => {
      if (e.key !== 'Enter') return;
      const url = urlInput.value.trim();
      if (!url) return;

      bookContent.innerHTML = '<p>Loading...</p>';
      try {
        const formData = new FormData();
        formData.append('url', url);
        const res = await fetch('index.php', { method: 'POST', body: formData });
        const text = await res.text();
        const paragraphs = text.split(/\n+/).filter(p => p.trim());
        bookContent.innerHTML = paragraphs.map(p => '<p>' + escapeHtml(p) + '</p>').join('');
      } catch (err) {
        bookContent.innerHTML = '<p>Error fetching content: ' + escapeHtml(err.message) + '</p>';
      }
    });

    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    // Show modal popup with highlighted words on text selection
    document.addEventListener('mouseup', (e) => {
      if (isDragging) return;
      if (popup.contains(e.target)) return;

      const selection = window.getSelection();
      const selectedText = selection.toString().trim();

      if (selectedText && bookContent.contains(selection.anchorNode)) {
        popupBody.textContent = '';

        // Call LanguageService.translate(words) with streaming
        const formData = new FormData();
        formData.append('translate', selectedText);
        fetch('index.php', { method: 'POST', body: formData }).then(async (res) => {
          const reader = res.body.getReader();
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
                const payload = line.slice(6);
                if (payload === '[DONE]') break;
                try {
                  const { token } = JSON.parse(payload);
                  popupBody.textContent += token;
                } catch {}
              }
            }
          }
        }).catch(() => { popupBody.textContent = 'Translation failed.'; });

        // Use remembered position or center on screen
        if (lastPopupX !== null && lastPopupY !== null) {
          popup.style.left = lastPopupX + 'px';
          popup.style.top = lastPopupY + 'px';
        } else {
          popup.style.left = '50%';
          popup.style.top = '50%';
          popup.style.transform = 'translate(-50%, -50%)';
        }

        modalOverlay.style.display = 'block';
        popup.style.display = 'block';

        // After display, if using centered fallback, convert to absolute coords
        if (lastPopupX === null) {
          const rect = popup.getBoundingClientRect();
          popup.style.left = rect.left + 'px';
          popup.style.top = rect.top + 'px';
          popup.style.transform = '';
        }
      }
    });

    function closeModal() {
      popup.style.display = 'none';
      modalOverlay.style.display = 'none';
    }

    // Close on overlay click or close button
    modalOverlay.addEventListener('click', closeModal);
    popupClose.addEventListener('click', closeModal);

    // Draggable via titlebar
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    popupTitlebar.addEventListener('mousedown', (e) => {
      isDragging = true;
      dragOffsetX = e.clientX - popup.getBoundingClientRect().left;
      dragOffsetY = e.clientY - popup.getBoundingClientRect().top;
      popupTitlebar.classList.add('dragging');
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const x = e.clientX - dragOffsetX;
      const y = e.clientY - dragOffsetY;
      popup.style.left = x + 'px';
      popup.style.top = y + 'px';
      lastPopupX = x;
      lastPopupY = y;
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        popupTitlebar.classList.remove('dragging');
      }
    });
  </script>
</body>
</html>
