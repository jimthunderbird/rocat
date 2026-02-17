<?php
// Handle API request for word definition via Ollama
if (isset($_GET['q'])) {
    header('Content-Type: application/x-ndjson');
    header('Cache-Control: no-cache');
    header('X-Accel-Buffering: no');

    $word = trim($_GET['q']);
    $llm_model = "gemma2:2b";

    $payload = json_encode([
        'model' => $llm_model,
        'prompt' => "Define \"" . $word . "\" in 30 words max. Provide English definition then Chinese translation.",
        'stream' => true
    ]);

    $ch = curl_init('http://127.0.0.1:11434/api/generate');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, function ($ch, $data) {
        echo $data;
        if (ob_get_level()) ob_flush();
        flush();
        return strlen($data);
    });
    curl_exec($ch);
    curl_close($ch);
    exit;
}

// Fetch book content
$bookcontent = file_get_contents("https://www.gutenberg.org/cache/epub/1661/pg1661.txt");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Reader</title>
    <style>
        body {
            background-color: #FAFAD2;
            font-family: Georgia, serif;
            font-size: 22px;
            padding: 20px;
            margin: 0;
        }
        #bookdiv {
            white-space: pre-wrap;
            line-height: 1.6;
        }
        #worddef {
            display: none;
            position: absolute;
            background: #fff;
            border: 2px solid #8B7355;
            border-radius: 8px;
            padding: 16px;
            max-width: 420px;
            max-height: 320px;
            overflow-y: auto;
            box-shadow: 0 4px 20px rgba(0,0,0,0.25);
            z-index: 1000;
            font-size: 15px;
            line-height: 1.5;
        }
        #worddef-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            padding-bottom: 8px;
            border-bottom: 1px solid #ddd;
        }
        #worddef-title {
            font-weight: bold;
            font-size: 17px;
            color: #5B3A1A;
            margin-right: 8px;
        }
        #worddef-ipa {
            color: #8B0000;
            background: #FFF0E0;
            font-family: 'Lucida Sans Unicode', 'Segoe UI', sans-serif;
            font-weight: 600;
            padding: 2px 7px;
            border-radius: 4px;
            border: 1px solid #E8C8A0;
            font-size: 15px;
            letter-spacing: 0.5px;
        }
        #worddef-close {
            cursor: pointer;
            background: none;
            border: none;
            font-size: 20px;
            color: #888;
            padding: 0 4px;
        }
        #worddef-close:hover {
            color: #333;
        }
        #worddef-body {
            color: #333;
        }
        #worddef-body p { margin: 4px 0; }
        #worddef-body code { background: #f0ead6; padding: 1px 4px; border-radius: 3px; font-size: 13px; }
        #worddef-body pre { background: #f0ead6; padding: 8px; border-radius: 4px; overflow-x: auto; }
        #worddef-body pre code { background: none; padding: 0; }
        #worddef-body ul, #worddef-body ol { margin: 4px 0; padding-left: 20px; }
        #worddef-body strong { color: #5B3A1A; }
        .ipa {
            color: #8B0000;
            background: #FFF0E0;
            font-family: 'Lucida Sans Unicode', 'Segoe UI', sans-serif;
            font-weight: 600;
            padding: 1px 5px;
            border-radius: 3px;
            border: 1px solid #E8C8A0;
            font-size: 14px;
            letter-spacing: 0.5px;
        }
        .spinner {
            display: inline-block;
            width: 14px;
            height: 14px;
            border: 2px solid #ccc;
            border-top-color: #5B3A1A;
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
            vertical-align: middle;
            margin-left: 6px;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div id="bookdiv"><?php echo htmlspecialchars($bookcontent); ?></div>

    <div id="worddef">
        <div id="worddef-header">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                <span id="worddef-title"></span>
                <span id="worddef-ipa"></span>
            </div>
            <button id="worddef-close">&times;</button>
        </div>
        <div id="worddef-body"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script>
        const llm_model = "gemma2:2b";
        let currentController = null;

        document.getElementById('worddef-close').addEventListener('click', () => {
            closeWorddef();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeWorddef();
        });

        function closeWorddef() {
            document.getElementById('worddef').style.display = 'none';
            if (currentController) {
                currentController.abort();
                currentController = null;
            }
        }

        document.getElementById('bookdiv').addEventListener('mouseup', (e) => {
            const selection = window.getSelection();
            const word = selection.toString().trim();
            if (!word || word.length > 80) return;

            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            showWorddef(word, rect, e);
        });

        function showWorddef(word, rect, event) {
            if (currentController) {
                currentController.abort();
            }
            currentController = new AbortController();

            const popup = document.getElementById('worddef');
            const title = document.getElementById('worddef-title');
            const body = document.getElementById('worddef-body');

            title.textContent = word;
            document.getElementById('worddef-ipa').textContent = '';
            body.innerHTML = '<span class="spinner"></span> Looking up...';

            // Fetch IPA from free dictionary API
            fetchIPA(word);

            // Position popup below the highlighted word (absolute positioning, document coords)
            let top = rect.bottom + window.scrollY + 8;
            let left = rect.left + window.scrollX;
            if (left + 440 > window.scrollX + window.innerWidth) left = window.scrollX + window.innerWidth - 450;
            if (left < 10) left = 10;
            if (rect.bottom + 340 > window.innerHeight) top = rect.top + window.scrollY - 340;

            popup.style.top = top + 'px';
            popup.style.left = left + 'px';
            popup.style.display = 'block';

            // Stream from backend
            fetchStream(word, currentController.signal);
        }

        function colorizeIPA(html) {
            // Match IPA between /.../ or [...]
            // IPA contains characters like: ə ɪ ɑ ɔ ʃ ʒ θ ð ŋ ʌ æ ɛ ɜ ː ˈ ˌ etc.
            return html.replace(/([\/\[])([^\/\[\]]*?[əɪɑɔʃʒθðŋʌæɛɜːˈˌɒʊɡɹɾʔɫɵʉɐɯɤɨʝçɲɱβɸʁʀχħʕɦɬɮɻʂʐɕʑɥɰǀǁǂǃ˥˦˧˨˩]+[^\/\[\]]*?)([\/\]])/g,
                '<span class="ipa">$1$2$3</span>');
        }

        async function fetchIPA(word) {
            const ipaSpan = document.getElementById('worddef-ipa');
            try {
                const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word));
                if (!res.ok) { ipaSpan.textContent = ''; return; }
                const data = await res.json();
                const phonetics = data[0]?.phonetics || [];
                const ipa = phonetics.find(p => p.text)?.text || data[0]?.phonetic || '';
                ipaSpan.textContent = ipa;
            } catch (e) {
                ipaSpan.textContent = '';
            }
        }

        async function fetchStream(word, signal) {
            const body = document.getElementById('worddef-body');

            try {
                const response = await fetch('index.php?q=' + encodeURIComponent(word), { signal });

                if (!response.ok) {
                    body.textContent = 'Error: ' + response.statusText;
                    return;
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let fullText = '';
                let streamBuffer = '';

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    streamBuffer += decoder.decode(value, { stream: true });
                    const lines = streamBuffer.split('\n');
                    streamBuffer = lines.pop();

                    for (const line of lines) {
                        if (!line.trim()) continue;
                        try {
                            const json = JSON.parse(line);
                            if (json.response) {
                                fullText += json.response;
                                body.innerHTML = colorizeIPA(marked.parse(fullText));
                                const popup = document.getElementById('worddef');
                                popup.scrollTop = popup.scrollHeight;
                            }
                        } catch (e) {
                            // skip malformed lines
                        }
                    }
                }
            } catch (e) {
                if (e.name !== 'AbortError') {
                    body.textContent = 'Error connecting to LLM service.';
                }
            }
        }
    </script>
</body>
</html>
