<?php
// API endpoint: handle ?q= requests with streaming
if (isset($_GET['q']) && !empty($_GET['q'])) {
    header('Content-Type: text/plain; charset=utf-8');
    header('X-Accel-Buffering: no');
    header('Cache-Control: no-cache');

    // Disable output buffering for streaming
    while (ob_get_level()) ob_end_clean();
    set_time_limit(0);

    $question = $_GET['q'];

    // State for filtering <think>...</think> blocks
    $thinkState = 'init'; // 'init', 'thinking', 'output'
    $thinkBuf = '';

    $ch = curl_init('http://127.0.0.1:11434/api/generate');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'model' => 'gemma2:2b',
        'prompt' => $question,
        'stream' => true
    ]));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, function($ch, $data) use (&$thinkState, &$thinkBuf) {
        foreach (explode("\n", $data) as $line) {
            $line = trim($line);
            if ($line === '') continue;
            $json = json_decode($line, true);
            if ($json && isset($json['response'])) {
                $token = $json['response'];

                if ($thinkState === 'output') {
                    echo $token;
                    flush();
                    continue;
                }

                $thinkBuf .= $token;

                if ($thinkState === 'init') {
                    $t = ltrim($thinkBuf);
                    if (strpos($t, '<think>') === 0) {
                        $thinkState = 'thinking';
                        $pos = strpos($thinkBuf, '</think>');
                        if ($pos !== false) {
                            $thinkState = 'output';
                            $after = ltrim(substr($thinkBuf, $pos + 8), "\n\r");
                            if ($after !== '' && $after !== false) {
                                echo $after;
                                flush();
                            }
                            $thinkBuf = '';
                        }
                    } else if (strlen($t) >= 7 || ($t !== '' && $t[0] !== '<')) {
                        $thinkState = 'output';
                        echo $thinkBuf;
                        flush();
                        $thinkBuf = '';
                    }
                } else if ($thinkState === 'thinking') {
                    $pos = strpos($thinkBuf, '</think>');
                    if ($pos !== false) {
                        $thinkState = 'output';
                        $after = ltrim(substr($thinkBuf, $pos + 8), "\n\r");
                        if ($after !== '' && $after !== false) {
                            echo $after;
                            flush();
                        }
                        $thinkBuf = '';
                    }
                }
            }
        }
        return strlen($data);
    });

    $result = curl_exec($ch);
    // Flush any remaining buffered content
    if ($thinkBuf !== '' && $thinkState !== 'thinking') {
        echo $thinkBuf;
    }
    if ($result === false) {
        echo 'Error: Could not connect to Ollama server at 127.0.0.1:11434.';
    }
    curl_close($ch);
    exit;
}

// API endpoint: save URL to history
if (isset($_GET['save_url']) && !empty($_GET['save_url'])) {
    header('Content-Type: application/json; charset=utf-8');
    $url = $_GET['save_url'];
    $content = @file_get_contents($url);
    if ($content === false) {
        http_response_code(400);
        echo json_encode(['error' => 'Could not load content from the given URL.']);
    } else {
        // Extract book name from content (first non-empty line)
        $lines = explode("\n", $content);
        $bookName = 'Unknown';
        foreach ($lines as $line) {
            $line = trim($line);
            if (!empty($line)) {
                $bookName = substr($line, 0, 100); // Limit to 100 chars
                break;
            }
        }

        // Save to history.txt
        $historyFile = __DIR__ . '/history.txt';
        $entry = $bookName . '|' . $url . "\n";

        // Read existing history
        $existingHistory = '';
        if (file_exists($historyFile)) {
            $existingHistory = file_get_contents($historyFile);
        }

        // Add new entry at the top (only if not already first)
        $lines = array_filter(explode("\n", $existingHistory));
        $newHistory = $entry;
        foreach ($lines as $line) {
            if (trim($line) !== trim($entry)) {
                $newHistory .= $line . "\n";
            }
        }

        file_put_contents($historyFile, $newHistory);
        echo json_encode(['success' => true, 'content' => $content]);
    }
    exit;
}

// API endpoint: handle ?url= requests to fetch remote content
if (isset($_GET['url']) && !empty($_GET['url'])) {
    header('Content-Type: text/plain; charset=utf-8');
    $url = $_GET['url'];
    $content = @file_get_contents($url);
    if ($content === false) {
        http_response_code(400);
        echo 'Error: Could not load content from the given URL.';
    } else {
        echo $content;
    }
    exit;
}

// API endpoint: get history
if (isset($_GET['get_history'])) {
    header('Content-Type: application/json; charset=utf-8');
    $historyFile = __DIR__ . '/history.txt';
    $history = [];

    if (file_exists($historyFile)) {
        $content = file_get_contents($historyFile);
        $lines = array_filter(explode("\n", $content));

        foreach ($lines as $line) {
            $parts = explode('|', $line, 2);
            if (count($parts) === 2) {
                $history[] = [
                    'name' => trim($parts[0]),
                    'url' => trim($parts[1])
                ];
            }
        }
    }

    echo json_encode(['history' => $history]);
    exit;
}

// Read book content from history or default URL
$default_url = 'https://www.gutenberg.org/cache/epub/1661/pg1661.txt';
$book_url = $default_url;

$historyFile = __DIR__ . '/history.txt';
if (file_exists($historyFile)) {
    $historyContent = file_get_contents($historyFile);
    $lines = array_filter(explode("\n", $historyContent));
    if (!empty($lines)) {
        $firstLine = trim($lines[0]);
        $parts = explode('|', $firstLine, 2);
        if (count($parts) === 2) {
            $book_url = trim($parts[1]);
        }
    }
}

$book_content = @file_get_contents($book_url);
if ($book_content === false) {
    $book_content = 'Error: Could not load book content. Please refresh the page.';
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Book Reader</title>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Georgia, 'Times New Roman', serif;
    background: #f5f0e8;
    color: #333;
}

#header {
    position: sticky;
    top: 0;
    background: #3e2723;
    color: #f5f0e8;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: bold;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    gap: 16px;
}

#header .title {
    white-space: nowrap;
    flex-shrink: 0;
}

#header span {
    font-size: 13px;
    font-weight: normal;
    opacity: 0.8;
    white-space: nowrap;
    flex-shrink: 0;
}



#summarize-btn {
    border: none;
    background: #5d4037;
    color: #fff;
    padding: 6px 14px;
    cursor: pointer;
    font-size: 13px;
    font-family: Arial, sans-serif;
    border-radius: 16px;
    transition: background 0.2s;
    white-space: nowrap;
    flex-shrink: 0;
}

#summarize-btn:hover {
    background: #4e342e;
}

#summarize-btn:disabled {
    background: #999;
    cursor: not-allowed;
}

#full-simple-english-btn {
    border: none;
    background: #5d4037;
    color: #fff;
    padding: 6px 14px;
    cursor: pointer;
    font-size: 13px;
    font-family: Arial, sans-serif;
    border-radius: 16px;
    transition: background 0.2s;
    white-space: nowrap;
    flex-shrink: 0;
}

#full-simple-english-btn:hover {
    background: #4e342e;
}

#full-simple-english-btn:disabled {
    background: #999;
    cursor: not-allowed;
}

#full-simple-english-progress {
    display: none;
    width: 200px;
    height: 8px;
    background: #e0d8cc;
    border-radius: 4px;
    overflow: hidden;
    flex-shrink: 0;
}

#full-simple-english-progress.active {
    display: block;
}

#full-simple-english-progress-bar {
    height: 100%;
    width: 0%;
    background: #5d4037;
    border-radius: 4px;
    transition: width 0.3s;
}

#full-simple-english-progress-text {
    font-size: 11px;
    color: white;
    font-weight: bold;
    font-family: Arial, sans-serif;
    display: none;
    flex-shrink: 0;
}

#full-simple-english-progress-text.active {
    display: block;
}

#url-bar {
    width: 100%;
    max-width: 520px;
    display: flex;
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 1px 6px rgba(0,0,0,0.2);
    transition: box-shadow 0.2s;
}

#url-bar:focus-within {
    box-shadow: 0 2px 12px rgba(0,0,0,0.35);
}

#url-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 8px 18px;
    font-size: 14px;
    font-family: Arial, sans-serif;
    color: #333;
    background: transparent;
    min-width: 0;
}

#url-input::placeholder {
    color: #aaa;
}

#url-btn {
    border: none;
    background: #5d4037;
    color: #fff;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    font-family: Arial, sans-serif;
    transition: background 0.2s;
    white-space: nowrap;
}

#url-btn:hover {
    background: #4e342e;
}

#url-btn:disabled {
    background: #999;
    cursor: not-allowed;
}

#history-btn {
    border: none;
    background: #5d4037;
    color: #fff;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    font-family: Arial, sans-serif;
    transition: background 0.2s;
    white-space: nowrap;
}

#history-btn:hover {
    background: #4e342e;
}

#history-dropdown {
    display: none;
    position: absolute;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    max-width: 520px;
    width: 100%;
    max-height: 400px;
    overflow-y: auto;
    z-index: 50;
    margin-top: 4px;
}

#history-dropdown.active {
    display: block;
}

#history-dropdown .history-item {
    padding: 10px 16px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    transition: background 0.2s;
    color: #000;
    font-weight: normal;
    font-size: 14px;
}

#history-dropdown .history-item:hover {
    background: #f5f0e8;
}

#history-dropdown .history-item:last-child {
    border-bottom: none;
}

#url-form {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
}

#book_content {
    max-width: 800px;
    margin: 0 auto;
    padding: 32px 24px 80px;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 1.8;
    font-size: 16px;
    cursor: text;
}

/* Modal overlay */
#modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: transparent;
    z-index: 100;
    pointer-events: none;
    justify-content: center;
    align-items: center;
}

#modal-overlay.active {
    display: flex;
}

#modal {
    background: #fff;
    border-radius: 12px;
    width: 90%;
    max-width: 560px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    overflow: hidden;
    pointer-events: auto;
}

#modal-header {
    background: #3e2723;
    color: #fff;
    padding: 14px 20px;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    cursor: move;
    user-select: none;
}

#modal-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    padding: 0 4px;
    line-height: 1;
}

#modal-close:hover {
    opacity: 0.7;
}

#modal-word {
    padding: 12px 20px;
    background: #f9f6f0;
    border-bottom: 1px solid #e0d8cc;
    flex-shrink: 0;
}

#modal-word .label {
    font-size: 12px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
}

#modal-word .text {
    font-size: 18px;
    font-weight: bold;
    color: #3e2723;
    margin-top: 4px;
    word-break: break-word;
    display: flex;
    align-items: center;
    gap: 8px;
}

.voice-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    flex-shrink: 0;
}

.voice-btn:hover {
    background: rgba(62, 39, 35, 0.1);
}

.voice-btn svg {
    width: 20px;
    height: 20px;
    fill: #5d4037;
}

.ipa-voice-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 2px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    vertical-align: middle;
    margin-left: 4px;
}

.ipa-voice-btn:hover {
    background: rgba(62, 39, 35, 0.15);
}

#modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
    font-size: 15px;
    line-height: 1.7;
    color: #444;
    word-wrap: break-word;
}

#modal-body h1, #modal-body h2, #modal-body h3,
#modal-body h4, #modal-body h5, #modal-body h6 {
    color: #3e2723;
    margin: 16px 0 8px;
    line-height: 1.3;
}
#modal-body h1 { font-size: 1.4em; }
#modal-body h2 { font-size: 1.25em; }
#modal-body h3 { font-size: 1.1em; }

#modal-body p {
    margin: 0 0 12px;
}

#modal-body ul, #modal-body ol {
    margin: 0 0 12px;
    padding-left: 24px;
}

#modal-body li {
    margin-bottom: 4px;
}

#modal-body code {
    background: #f0ebe3;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: 'Courier New', Courier, monospace;
}

#modal-body pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 14px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 0 0 12px;
}

#modal-body pre code {
    background: none;
    padding: 0;
    color: inherit;
    font-size: 0.85em;
}

#modal-body blockquote {
    border-left: 4px solid #3e2723;
    padding: 8px 16px;
    margin: 0 0 12px;
    background: #f9f6f0;
    color: #555;
}

#modal-body strong {
    color: #3e2723;
}

#modal-body hr {
    border: none;
    border-top: 1px solid #e0d8cc;
    margin: 16px 0;
}

#modal-body a {
    color: #5d4037;
    text-decoration: underline;
}

#modal-body a:hover {
    color: #3e2723;
}

#modal-body table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 0 12px;
    font-size: 0.9em;
}

#modal-body th, #modal-body td {
    border: 1px solid #d7cfc4;
    padding: 8px 12px;
    text-align: left;
}

#modal-body th {
    background: #f0ebe3;
    font-weight: bold;
    color: #3e2723;
}

#modal-body tr:nth-child(even) {
    background: #faf8f4;
}

#modal-body em {
    font-style: italic;
    color: #555;
}

.para-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    transition: background 0.3s;
}

.para-wrapper.highlighted {
    background: #fff3cd;
    border-radius: 4px;
}

.para-wrapper .para-text {
    flex: 1;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.para-voice-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, opacity 0.2s;
    flex-shrink: 0;
    opacity: 0.3;
    margin-top: 2px;
}

.para-voice-btn:hover {
    background: rgba(62, 39, 35, 0.1);
    opacity: 1;
}

.para-voice-btn.speaking {
    opacity: 1;
}

.para-voice-btn svg {
    width: 16px;
    height: 16px;
    fill: #5d4037;
}

.button-convert-to-simple-english {
    background: none;
    border: 1px solid #5d4037;
    cursor: pointer;
    padding: 1px 6px;
    border-radius: 8px;
    font-size: 10px;
    font-family: Arial, sans-serif;
    color: #5d4037;
    transition: background 0.2s, opacity 0.2s;
    flex-shrink: 0;
    opacity: 0.3;
    margin-top: 2px;
    white-space: nowrap;
}

.button-convert-to-simple-english:hover {
    background: rgba(62, 39, 35, 0.1);
    opacity: 1;
}

.button-show-original-text {
    background: none;
    border: 1px solid #5d4037;
    cursor: pointer;
    padding: 1px 6px;
    border-radius: 8px;
    font-size: 10px;
    font-family: Arial, sans-serif;
    color: #5d4037;
    transition: background 0.2s, opacity 0.2s;
    flex-shrink: 0;
    opacity: 0.3;
    margin-top: 2px;
    white-space: nowrap;
}

.button-show-original-text:hover {
    background: rgba(62, 39, 35, 0.1);
    opacity: 1;
}

#modal-body .loading-text {
    text-align: center;
    color: #999;
    padding: 20px;
}

#modal-body .spinner {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 3px solid #ddd;
    border-top-color: #3e2723;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 8px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

#modal-body .error {
    color: #c62828;
}

#modal-hint {
    padding: 6px 20px;
    font-size: 11px;
    color: #aaa;
    text-align: center;
    border-top: 1px solid #eee;
    flex-shrink: 0;
}

/* Nested (secondary) modal */
#nested-modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: transparent;
    z-index: 200;
    pointer-events: none;
    justify-content: center;
    align-items: center;
}

#nested-modal-overlay.active {
    display: flex;
}

#nested-modal {
    background: #fff;
    border-radius: 12px;
    width: 88%;
    max-width: 520px;
    max-height: 75vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 12px 40px rgba(0,0,0,0.4);
    overflow: hidden;
    pointer-events: auto;
}

#nested-modal-header {
    background: #5d4037;
    color: #fff;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    cursor: move;
    user-select: none;
}

#nested-modal-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    padding: 0 4px;
    line-height: 1;
}

#nested-modal-close:hover {
    opacity: 0.7;
}

#nested-modal-word {
    padding: 10px 20px;
    background: #f9f6f0;
    border-bottom: 1px solid #e0d8cc;
    flex-shrink: 0;
}

#nested-modal-word .label {
    font-size: 11px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
}

#nested-modal-word .text {
    font-size: 16px;
    font-weight: bold;
    color: #5d4037;
    margin-top: 3px;
    word-break: break-word;
    display: flex;
    align-items: center;
    gap: 8px;
}

#nested-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
    font-size: 15px;
    line-height: 1.7;
    color: #444;
    word-wrap: break-word;
}

#nested-modal-body h1, #nested-modal-body h2, #nested-modal-body h3,
#nested-modal-body h4, #nested-modal-body h5, #nested-modal-body h6 {
    color: #5d4037;
    margin: 16px 0 8px;
    line-height: 1.3;
}
#nested-modal-body h1 { font-size: 1.4em; }
#nested-modal-body h2 { font-size: 1.25em; }
#nested-modal-body h3 { font-size: 1.1em; }

#nested-modal-body p { margin: 0 0 12px; }
#nested-modal-body ul, #nested-modal-body ol { margin: 0 0 12px; padding-left: 24px; }
#nested-modal-body li { margin-bottom: 4px; }

#nested-modal-body code {
    background: #f0ebe3;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: 'Courier New', Courier, monospace;
}

#nested-modal-body pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 14px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 0 0 12px;
}

#nested-modal-body pre code {
    background: none;
    padding: 0;
    color: inherit;
    font-size: 0.85em;
}

#nested-modal-body blockquote {
    border-left: 4px solid #5d4037;
    padding: 8px 16px;
    margin: 0 0 12px;
    background: #f9f6f0;
    color: #555;
}

#nested-modal-body strong { color: #5d4037; }

#nested-modal-body hr {
    border: none;
    border-top: 1px solid #e0d8cc;
    margin: 16px 0;
}

#nested-modal-body a {
    color: #5d4037;
    text-decoration: underline;
}

#nested-modal-body a:hover {
    color: #3e2723;
}

#nested-modal-body table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 0 12px;
    font-size: 0.9em;
}

#nested-modal-body th, #nested-modal-body td {
    border: 1px solid #d7cfc4;
    padding: 8px 12px;
    text-align: left;
}

#nested-modal-body th {
    background: #f0ebe3;
    font-weight: bold;
    color: #5d4037;
}

#nested-modal-body tr:nth-child(even) {
    background: #faf8f4;
}

#nested-modal-body em {
    font-style: italic;
    color: #555;
}

#nested-modal-body .loading-text {
    text-align: center;
    color: #999;
    padding: 20px;
}

#nested-modal-body .spinner {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 3px solid #ddd;
    border-top-color: #5d4037;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 8px;
}

#nested-modal-body .error { color: #c62828; }

#nested-modal-hint {
    padding: 6px 20px;
    font-size: 11px;
    color: #aaa;
    text-align: center;
    border-top: 1px solid #eee;
    flex-shrink: 0;
}
</style>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
<script>
marked.setOptions({
    gfm: true,
    breaks: true
});
</script>

<div id="header">
    <div class="title">Book Reader</div>
    <form id="url-form" onsubmit="return loadUrl(event)">
        <div id="url-bar">
            <input type="text" id="url-input" placeholder="Enter a book or article URL..." />
            <button type="submit" id="url-btn">Go</button>
            <button type="button" id="history-btn" onclick="toggleHistory(event)">▼</button>
        </div>
        <div id="history-dropdown"></div>
    </form>
    <span>Highlight text to look up</span>
    <button id="summarize-btn" onclick="summarizeBook()">Summarize</button>
    <button id="full-simple-english-btn" onclick="fullSimpleEnglish()">Full Simple English</button>
    <div id="full-simple-english-progress"><div id="full-simple-english-progress-bar"></div></div>
    <span id="full-simple-english-progress-text"></span>
</div>

<div id="book_content"><?php echo htmlspecialchars($book_content, ENT_QUOTES, 'UTF-8'); ?></div>

<!-- Modal -->
<div id="modal-overlay">
    <div id="modal">
        <div id="modal-header">
            <span>Definition & Translation</span>
            <button id="modal-close">&times;</button>
        </div>
        <div id="modal-word">
            <div class="label">Selected text</div>
            <div class="text"><span id="modal-selected-text"></span><button class="voice-btn" id="modal-voice-btn" title="Listen to pronunciation"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg></button></div>
        </div>
        <div id="modal-body"></div>
        <div id="modal-hint">Highlight text here to look up</div>
    </div>
</div>

<!-- Nested Modal (for lookups within the popup) -->
<div id="nested-modal-overlay">
    <div id="nested-modal">
        <div id="nested-modal-header">
            <span>Nested Lookup</span>
            <button id="nested-modal-close">&times;</button>
        </div>
        <div id="nested-modal-word">
            <div class="label">Selected text</div>
            <div class="text"><span id="nested-modal-selected-text"></span><button class="voice-btn" id="nested-modal-voice-btn" title="Listen to pronunciation"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg></button></div>
        </div>
        <div id="nested-modal-body"></div>
        <div id="nested-modal-hint">Highlight text here for another lookup</div>
    </div>
</div>

<script>
async function loadUrl(e) {
    e.preventDefault();
    const input = document.getElementById('url-input');
    const btn = document.getElementById('url-btn');
    const url = input.value.trim();
    if (!url) return false;

    btn.disabled = true;
    btn.textContent = 'Loading...';
    const bookDiv = document.getElementById('book_content');
    bookDiv.textContent = 'Loading content...';

    try {
        const resp = await fetch('index.php?save_url=' + encodeURIComponent(url));
        if (!resp.ok) throw new Error('Failed to fetch');
        const result = await resp.json();
        if (result.error) {
            throw new Error(result.error);
        }
        bookDiv.textContent = result.content;
        processBookParagraphs();
        window.scrollTo(0, 0);
    } catch (err) {
        bookDiv.textContent = 'Error: Could not load content from the given URL. Please check the URL and try again.';
    } finally {
        btn.disabled = false;
        btn.textContent = 'Go';
    }
    return false;
}

const overlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalSelectedText = document.getElementById('modal-selected-text');
const modalClose = document.getElementById('modal-close');

const nestedOverlay = document.getElementById('nested-modal-overlay');
const nestedModalBody = document.getElementById('nested-modal-body');
const nestedModalSelectedText = document.getElementById('nested-modal-selected-text');
const nestedModalClose = document.getElementById('nested-modal-close');

let mainController = null;
let nestedController = null;

modalClose.addEventListener('click', closeMainModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeMainModal(); });

nestedModalClose.addEventListener('click', closeNestedModal);
nestedOverlay.addEventListener('click', (e) => { if (e.target === nestedOverlay) closeNestedModal(); });

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (nestedOverlay.classList.contains('active')) {
            closeNestedModal();
        } else {
            closeMainModal();
        }
    }
});

function closeMainModal() {
    overlay.classList.remove('active');
    closeNestedModal();
    // Clear paragraph highlight
    document.querySelectorAll('.para-wrapper.highlighted').forEach(el => el.classList.remove('highlighted'));
    if (mainController) {
        mainController.abort();
        mainController = null;
    }
}

function closeNestedModal() {
    nestedOverlay.classList.remove('active');
    if (nestedController) {
        nestedController.abort();
        nestedController = null;
    }
}

// Draggable modals with remembered positions
function makeModalDraggable(modalEl, headerEl, storageKey) {
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    headerEl.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'BUTTON') return;
        isDragging = true;
        const rect = modalEl.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        // Switch to absolute positioning on first drag
        modalEl.style.position = 'absolute';
        modalEl.style.left = rect.left + 'px';
        modalEl.style.top = rect.top + 'px';
        modalEl.style.margin = '0';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;
        // Clamp to viewport
        newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - 100));
        newTop = Math.max(0, Math.min(newTop, window.innerHeight - 50));
        modalEl.style.left = newLeft + 'px';
        modalEl.style.top = newTop + 'px';
        e.preventDefault();
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        // Save position
        localStorage.setItem(storageKey, JSON.stringify({
            left: parseInt(modalEl.style.left),
            top: parseInt(modalEl.style.top)
        }));
    });
}

function applyStoredPosition(modalEl, storageKey) {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
        try {
            const pos = JSON.parse(stored);
            // Validate position is still within viewport
            const left = Math.max(0, Math.min(pos.left, window.innerWidth - 100));
            const top = Math.max(0, Math.min(pos.top, window.innerHeight - 50));
            modalEl.style.position = 'absolute';
            modalEl.style.left = left + 'px';
            modalEl.style.top = top + 'px';
            modalEl.style.margin = '0';
        } catch(e) {}
    }
}

const mainModal = document.getElementById('modal');
const nestedModal = document.getElementById('nested-modal');

makeModalDraggable(mainModal, document.getElementById('modal-header'), 'modalLastPos');
makeModalDraggable(nestedModal, document.getElementById('nested-modal-header'), 'nestedModalLastPos');

function getSurroundingContext(highlighted) {
    const paraTexts = document.querySelectorAll('#book_content .para-text');
    let fullText = '';
    paraTexts.forEach(p => { fullText += p.textContent + '\n\n'; });
    if (!fullText) fullText = document.getElementById('book_content').textContent;
    const idx = fullText.indexOf(highlighted);
    if (idx === -1) return highlighted;

    const before = fullText.substring(0, idx).trim().split(/\s+/).slice(-30).join(' ');
    const after = fullText.substring(idx + highlighted.length).trim().split(/\s+/).slice(0, 30).join(' ');
    return (before + ' ' + highlighted + ' ' + after).trim();
}

function injectVoiceIcons(targetBody, word) {
    const html = targetBody.innerHTML;
    const escaped = word.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const newHtml = html.replace(/\/([^\/\n]{1,50})\//g, function(match, inner) {
        if (/[ˈˌːʃʒθðŋæɑɒɔəɜɪʊʌɛɐɾ]/.test(inner)) {
            return match + '<button class="ipa-voice-btn" data-word="' + escaped + '" title="Listen to pronunciation"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="#5d4037" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg></button>';
        }
        return match;
    });
    if (newHtml !== html) {
        targetBody.innerHTML = newHtml;
    }
}

// Capture-phase mouseup to prevent voice buttons from triggering popup highlights
document.addEventListener('mouseup', function(e) {
    if (e.target.closest('.ipa-voice-btn') || e.target.closest('.voice-btn')) {
        e.stopPropagation();
    }
}, true);

// Click handler for IPA voice buttons (event delegation)
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.ipa-voice-btn');
    if (btn) {
        e.stopPropagation();
        e.preventDefault();
        const word = btn.getAttribute('data-word');
        if (word) speakWord(word);
    }
});

async function streamAIResponse(question, targetBody, controller, word) {
    try {
        const resp = await fetch('index.php?q=' + encodeURIComponent(question), {
            signal: controller.signal
        });
        if (!resp.ok) throw new Error('Request failed');

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let rawText = '';
        targetBody.innerHTML = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            rawText += decoder.decode(value, { stream: true });
            targetBody.innerHTML = marked.parse(rawText);
            if (word) injectVoiceIcons(targetBody, word);
            targetBody.scrollTop = targetBody.scrollHeight;
        }
    } catch (e) {
        if (e.name === 'AbortError') return;
        targetBody.innerHTML = '<div class="error">Error: Could not get a response. Please try again.</div>';
    }
}

// Main book content: highlight to look up with context
document.getElementById('book_content').addEventListener('mouseup', async () => {
    const sel = window.getSelection();
    const highlighted = sel.toString().trim();
    if (!highlighted || highlighted.length < 1) return;

    if (mainController) mainController.abort();
    mainController = new AbortController();

    modalSelectedText.textContent = highlighted;
    modalBody.innerHTML = '<div class="loading-text"><div class="spinner"></div><div>Asking AI...</div></div>';
    overlay.classList.add('active');
    applyStoredPosition(mainModal, 'modalLastPos');

    const context = getSurroundingContext(highlighted);
    const question = 'in the context of "' + context + '", show me the pronounciation of "' + highlighted + '" in International Phonetic Alphabet, show the meaning of "' + highlighted + '" in 30 words, translate the meaning of "' + highlighted + '" in simplified chinese, no extra words';

    await streamAIResponse(question, modalBody, mainController, highlighted);
});

// Popup body & word area: highlight to open nested popup
function handlePopupHighlight(e) {
    e.stopPropagation();
    const sel = window.getSelection();
    const highlighted = sel.toString().trim();
    if (!highlighted || highlighted.length < 1) return;

    if (nestedController) nestedController.abort();
    nestedController = new AbortController();

    nestedModalSelectedText.textContent = highlighted;
    nestedModalBody.innerHTML = '<div class="loading-text"><div class="spinner"></div><div>Asking AI...</div></div>';
    nestedOverlay.classList.add('active');
    applyStoredPosition(nestedModal, 'nestedModalLastPos');

    const question = 'show me the pronounciation of "' + highlighted + '" in International Phonetic Alphabet, show the meaning of "' + highlighted + '" in 30 words, translate the meaning of "' + highlighted + '" in simplified chinese, no extra words';

    streamAIResponse(question, nestedModalBody, nestedController, highlighted);
}

modalBody.addEventListener('mouseup', handlePopupHighlight);
document.getElementById('modal-word').addEventListener('mouseup', handlePopupHighlight);

// Nested popup body: highlight to re-query in the same nested popup
function handleNestedHighlight(e) {
    e.stopPropagation();
    const sel = window.getSelection();
    const highlighted = sel.toString().trim();
    if (!highlighted || highlighted.length < 1) return;

    if (nestedController) nestedController.abort();
    nestedController = new AbortController();

    nestedModalSelectedText.textContent = highlighted;
    nestedModalBody.innerHTML = '<div class="loading-text"><div class="spinner"></div><div>Asking AI...</div></div>';

    const question = 'show me the pronounciation of "' + highlighted + '" in International Phonetic Alphabet, show the meaning of "' + highlighted + '" in 30 words, translate the meaning of "' + highlighted + '" in simplified chinese, no extra words';

    streamAIResponse(question, nestedModalBody, nestedController, highlighted);
}

nestedModalBody.addEventListener('mouseup', handleNestedHighlight);
document.getElementById('nested-modal-word').addEventListener('mouseup', handleNestedHighlight);

// Voice pronunciation using Web Speech API
function speakWord(text) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
}

document.getElementById('modal-voice-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    speakWord(modalSelectedText.textContent);
});

document.getElementById('nested-modal-voice-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    speakWord(nestedModalSelectedText.textContent);
});

// History dropdown functionality
function toggleHistory(e) {
    e.preventDefault();
    const dropdown = document.getElementById('history-dropdown');
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    } else {
        loadHistoryDropdown();
    }
}

async function loadHistoryDropdown() {
    const dropdown = document.getElementById('history-dropdown');
    dropdown.innerHTML = '<div style="padding: 10px; text-align: center; color: #999;">Loading...</div>';
    dropdown.classList.add('active');

    try {
        const resp = await fetch('index.php?get_history=1');
        const data = await resp.json();

        if (data.history && data.history.length > 0) {
            dropdown.innerHTML = '';
            data.history.slice(0, 10).forEach(item => {
                const div = document.createElement('div');
                div.className = 'history-item';
                div.textContent = item.name;
                div.setAttribute('data-url', item.url);
                div.addEventListener('click', () => selectHistoryItem(item.url));
                dropdown.appendChild(div);
            });
        } else {
            dropdown.innerHTML = '<div style="padding: 10px; text-align: center; color: #999;">No history yet</div>';
        }
    } catch (err) {
        dropdown.innerHTML = '<div style="padding: 10px; text-align: center; color: #c62828;">Error loading history</div>';
    }
}

function selectHistoryItem(url) {
    const dropdown = document.getElementById('history-dropdown');
    dropdown.classList.remove('active');
    document.getElementById('url-input').value = url;
    loadUrl({ preventDefault: () => {} });
}

// Summarize book functionality
async function summarizeBook() {
    const bookText = document.getElementById('book_content').textContent.trim();
    if (!bookText || bookText.length < 50) {
        alert('No book content loaded to summarize.');
        return;
    }

    if (mainController) mainController.abort();
    mainController = new AbortController();

    // Take first ~30000 chars of the book as context for the summary
    const excerpt = bookText.substring(0, 30000);

    modalSelectedText.textContent = 'Book Summary';
    modalBody.innerHTML = '<div class="loading-text"><div class="spinner"></div><div>Generating summary...</div></div>';
    overlay.classList.add('active');
    applyStoredPosition(mainModal, 'modalLastPos');

    const question = 'Here is the beginning of a book:\n\n' + excerpt + '\n\nBased on the text above, provide a summary of this book in about 500 words. No extra words.';

    await streamAIResponse(question, modalBody, mainController, null);
}

// Paragraph voice buttons
const voiceSvg = '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';

function processBookParagraphs() {
    const bookDiv = document.getElementById('book_content');
    const text = bookDiv.textContent;
    // Split on double newlines (paragraph breaks)
    const paragraphs = text.split(/\n\s*\n/);
    bookDiv.innerHTML = '';
    bookDiv.style.whiteSpace = 'normal';

    paragraphs.forEach((para) => {
        const trimmed = para.trim();
        if (!trimmed) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'para-wrapper';

        const textDiv = document.createElement('div');
        textDiv.className = 'para-text';
        textDiv.textContent = trimmed;

        const btn = document.createElement('button');
        btn.className = 'para-voice-btn';
        btn.title = 'Read this paragraph aloud';
        btn.innerHTML = voiceSvg;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            speakParagraph(trimmed, btn);
        });
        // Prevent mouseup from triggering highlight popup
        btn.addEventListener('mouseup', (e) => e.stopPropagation());

        const simpleBtn = document.createElement('button');
        simpleBtn.className = 'button-convert-to-simple-english';
        simpleBtn.textContent = 'Simple English';
        simpleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            convertToSimpleEnglish(trimmed, wrapper);
        });
        simpleBtn.addEventListener('mouseup', (e) => e.stopPropagation());

        wrapper.appendChild(textDiv);
        wrapper.appendChild(simpleBtn);
        wrapper.appendChild(btn);
        bookDiv.appendChild(wrapper);
    });
}

let currentSpeakingBtn = null;
let currentAudio = null;
let currentSentencePlayback = null;

function splitIntoSentences(text) {
    // Normalize newlines to spaces so only "." (and ! ?) terminate sentences, not newlines
    const normalized = text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
    // Split on sentence-ending punctuation
    const parts = normalized.match(/[^.]*\./g);
    if (!parts || parts.length === 0) return [normalized];
    // Capture any trailing text without a period
    const matched = parts.join('');
    const remaining = normalized.substring(matched.length).trim();
    const sentences = parts.map(s => s.trim()).filter(s => s.length > 0);
    if (remaining) sentences.push(remaining);
    return sentences;
}

function speakParagraph(text, btn) {
    // Toggle off if already playing this paragraph
    if (currentSentencePlayback && currentSpeakingBtn === btn) {
        currentSentencePlayback.stop();
        currentSentencePlayback = null;
        btn.classList.remove('speaking');
        currentSpeakingBtn = null;
        currentAudio = null;
        return;
    }
    // Stop any other playing audio
    if (currentSentencePlayback) {
        currentSentencePlayback.stop();
        currentSentencePlayback = null;
    }
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    if (currentSpeakingBtn) {
        currentSpeakingBtn.classList.remove('speaking');
    }

    btn.classList.add('speaking');
    currentSpeakingBtn = btn;

    const sentences = splitIntoSentences(text);
    const ttsUrl = 'http://127.0.0.1:4000/tts?text=';

    const playback = {
        index: 0,
        stopped: false,
        preloaded: {},

        stop() {
            this.stopped = true;
            if (currentAudio) {
                currentAudio.pause();
                currentAudio = null;
            }
        },

        preload(i) {
            if (i >= sentences.length || this.preloaded[i]) return;
            const a = new Audio(ttsUrl + encodeURIComponent(sentences[i]));
            a.preload = 'auto';
            this.preloaded[i] = a;
        },

        playNext() {
            if (this.stopped || this.index >= sentences.length) {
                btn.classList.remove('speaking');
                if (currentSpeakingBtn === btn) currentSpeakingBtn = null;
                currentAudio = null;
                currentSentencePlayback = null;
                return;
            }

            const audio = this.preloaded[this.index] || new Audio(ttsUrl + encodeURIComponent(sentences[this.index]));
            currentAudio = audio;

            // Pre-load next sentence while current one plays
            this.preload(this.index + 1);

            const self = this;
            audio.addEventListener('ended', function() {
                self.index++;
                self.playNext();
            });
            audio.addEventListener('error', function() {
                if (!self.stopped) {
                    // Fallback to browser TTS for remaining text
                    const remaining = sentences.slice(self.index).join(' ');
                    btn.classList.remove('speaking');
                    currentSpeakingBtn = null;
                    currentAudio = null;
                    currentSentencePlayback = null;
                    speakParagraphFallback(remaining, btn);
                }
            });

            audio.play().catch(() => {
                if (!self.stopped) {
                    const remaining = sentences.slice(self.index).join(' ');
                    btn.classList.remove('speaking');
                    currentSpeakingBtn = null;
                    currentAudio = null;
                    currentSentencePlayback = null;
                    speakParagraphFallback(remaining, btn);
                }
            });
        }
    };

    // Pre-load first two sentences for fastest start
    playback.preload(0);
    playback.preload(1);
    currentSentencePlayback = playback;
    playback.playNext();
}

// Fallback to browser speechSynthesis if TTS server unavailable
function speakParagraphFallback(text, btn) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    const voices = speechSynthesis.getVoices();
    const enVoices = voices.filter(v => v.lang.startsWith('en'));
    const maleVoice = enVoices.find(v => /premium|enhanced/i.test(v.name) && /aaron|daniel|james/i.test(v.name))
        || enVoices.find(v => /aaron|daniel|james|guy|tom/i.test(v.name))
        || enVoices.find(v => !/female|samantha|karen|victoria|fiona/i.test(v.name))
        || enVoices[0];
    if (maleVoice) utterance.voice = maleVoice;
    btn.classList.add('speaking');
    currentSpeakingBtn = btn;
    utterance.onend = () => { btn.classList.remove('speaking'); currentSpeakingBtn = null; };
    utterance.onerror = () => { btn.classList.remove('speaking'); currentSpeakingBtn = null; };
    speechSynthesis.speak(utterance);
}

// Process paragraphs on initial page load
processBookParagraphs();

// Simple English conversion
async function convertToSimpleEnglish(paragraphText, wrapperEl) {
    // Remove highlight from any previously highlighted paragraph
    document.querySelectorAll('.para-wrapper.highlighted').forEach(el => el.classList.remove('highlighted'));
    // Highlight the related paragraph
    if (wrapperEl) wrapperEl.classList.add('highlighted');

    if (mainController) mainController.abort();
    mainController = new AbortController();

    modalSelectedText.textContent = 'Simple English';
    modalBody.innerHTML = '<div class="loading-text"><div class="spinner"></div><div>Converting to simple English...</div></div>';
    overlay.classList.add('active');
    applyStoredPosition(mainModal, 'modalLastPos');

    const prompt = 'please convert the following paragraph to a new version using only the words in The Oxford 3000, also use non-fiction style.No Explanation and No Extra Words, <paragraph>' + paragraphText + '</paragraph>';

    await streamAIResponse(prompt, modalBody, mainController, null);
}

// Show original text in a modal
function showOriginalTextModal(originalText) {
    if (mainController) mainController.abort();
    mainController = new AbortController();

    modalSelectedText.textContent = 'Original Text';
    modalBody.innerHTML = '<div style="white-space: pre-wrap; word-wrap: break-word; padding: 4px 0;">' + originalText.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>';
    overlay.classList.add('active');
    applyStoredPosition(mainModal, 'modalLastPos');
}

// Full Simple English conversion
let fullSimpleEnglishAbort = null;

async function fullSimpleEnglish() {
    const btn = document.getElementById('full-simple-english-btn');
    const progressContainer = document.getElementById('full-simple-english-progress');
    const progressBar = document.getElementById('full-simple-english-progress-bar');
    const progressText = document.getElementById('full-simple-english-progress-text');

    // If already running, cancel it
    if (fullSimpleEnglishAbort) {
        fullSimpleEnglishAbort.abort();
        fullSimpleEnglishAbort = null;
        btn.textContent = 'Full Simple English';
        btn.disabled = false;
        progressContainer.classList.remove('active');
        progressText.classList.remove('active');
        document.querySelectorAll('.para-wrapper.highlighted').forEach(el => el.classList.remove('highlighted'));
        return;
    }

    // Remove all "Simple English" buttons
    document.querySelectorAll('.button-convert-to-simple-english').forEach(el => el.remove());

    fullSimpleEnglishAbort = new AbortController();
    btn.textContent = 'Stop Converting';

    const wrappers = document.querySelectorAll('#book_content .para-wrapper');

    // Count eligible paragraphs for progress
    const eligible = [];
    wrappers.forEach(w => {
        const td = w.querySelector('.para-text');
        if (td && td.textContent.trim().length >= 20) eligible.push(w);
    });
    const total = eligible.length;

    // Show progress bar
    progressBar.style.width = '0%';
    progressContainer.classList.add('active');
    progressText.classList.add('active');
    progressText.textContent = '0%';

    for (let i = 0; i < eligible.length; i++) {
        if (fullSimpleEnglishAbort.signal.aborted) break;

        const wrapper = eligible[i];
        const textDiv = wrapper.querySelector('.para-text');

        const paragraphText = textDiv.textContent.trim();
        const originalText = paragraphText;

        // Highlight the paragraph being processed
        document.querySelectorAll('.para-wrapper.highlighted').forEach(el => el.classList.remove('highlighted'));
        wrapper.classList.add('highlighted');

        const prompt = 'please convert the following paragraph to a new version using very very simple words and sentences. DO NOT RETURN CHINESE CHARACTERS! ONLY ENGLISH! No Explanation and No Extra Words! <paragraph>' + paragraphText + '</paragraph>';

        try {
            const resp = await fetch('index.php?q=' + encodeURIComponent(prompt), {
                signal: fullSimpleEnglishAbort.signal
            });
            if (!resp.ok) throw new Error('Request failed');

            const reader = resp.body.getReader();
            const decoder = new TextDecoder();
            let rawText = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                rawText += decoder.decode(value, { stream: true });
                textDiv.textContent = rawText;
            }

            textDiv.textContent = rawText.trim();

            // Add "Original Text" button after successful conversion
            if (!wrapper.querySelector('.button-show-original-text')) {
                const origBtn = document.createElement('button');
                origBtn.className = 'button-show-original-text';
                origBtn.textContent = 'Original Text';
                origBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showOriginalTextModal(originalText);
                });
                origBtn.addEventListener('mouseup', (e) => e.stopPropagation());
                wrapper.appendChild(origBtn);
            }
        } catch (e) {
            if (e.name === 'AbortError') break;
        }

        // Update progress bar
        const pct = Math.round(((i + 1) / total) * 100);
        progressBar.style.width = pct + '%';
        progressText.textContent = pct + '%';
    }

    // Clean up
    document.querySelectorAll('.para-wrapper.highlighted').forEach(el => el.classList.remove('highlighted'));
    fullSimpleEnglishAbort = null;
    btn.textContent = 'Full Simple English';
    btn.disabled = false;
    progressContainer.classList.remove('active');
    progressText.classList.remove('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('history-dropdown');
    const historyBtn = document.getElementById('history-btn');
    if (!dropdown.contains(e.target) && e.target !== historyBtn) {
        dropdown.classList.remove('active');
    }
});
</script>
</body>
</html>
