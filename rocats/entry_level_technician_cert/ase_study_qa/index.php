<?php
// Handle AI query via ollama HTTP API with streaming (much faster than CLI shell_exec)
if (isset($_GET['q']) && !empty(trim($_GET['q']))) {
    header('Content-Type: text/plain; charset=utf-8');
    header('X-Accel-Buffering: no'); // Disable nginx buffering if behind nginx
    // Disable output buffering for real-time streaming
    while (ob_get_level()) { ob_end_flush(); }
    ob_implicit_flush(true);

    $question = trim($_GET['q']);

    // Use Ollama REST API with streaming for real-time output
    $ch = curl_init('http://localhost:11434/api/generate');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode([
            'model' => 'gemma2:2b',
            'prompt' => $question,
            'stream' => true
        ]),
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => false,
        CURLOPT_TIMEOUT => 60,
        CURLOPT_WRITEFUNCTION => function($ch, $data) {
            // Each chunk is a JSON line from ollama streaming API
            $lines = explode("\n", $data);
            foreach ($lines as $line) {
                $line = trim($line);
                if (empty($line)) continue;
                $json = json_decode($line, true);
                if (isset($json['response'])) {
                    echo $json['response'];
                    flush();
                }
            }
            return strlen($data);
        },
    ]);
    $success = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($success === false || ($httpCode !== 200 && $httpCode !== 0)) {
        echo 'Error: Could not reach Ollama API. Make sure ollama is running (ollama serve).' . "\n" . $curlError;
    }
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ASE Study Q&A - A1 to A8 & G1</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #1a1a2e;
  color: #e0e0e0;
  min-height: 100vh;
}
.header {
  background: linear-gradient(135deg, #0f3460, #16213e);
  padding: 15px 20px;
  text-align: center;
  border-bottom: 3px solid #e94560;
  position: sticky;
  top: 0;
  z-index: 100;
}
.header h1 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 8px;
}
.header .subtitle {
  font-size: 0.85rem;
  color: #a0a0c0;
}
.tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  padding: 12px 10px;
  background: #16213e;
  border-bottom: 2px solid #0f3460;
  position: sticky;
  top: 72px;
  z-index: 99;
}
.tab {
  padding: 10px 18px;
  border: 2px solid #0f3460;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.3s;
  background: #1a1a2e;
  color: #a0a0c0;
  user-select: none;
}
.tab:hover {
  background: #0f3460;
  color: #fff;
  transform: translateY(-2px);
}
.tab.active {
  background: #e94560;
  color: #fff;
  border-color: #e94560;
  box-shadow: 0 4px 15px rgba(233, 69, 96, 0.4);
}
.tab .tab-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 400;
  margin-top: 2px;
  opacity: 0.8;
}
.main {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
.score-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #16213e;
  border-radius: 12px;
  padding: 12px 20px;
  margin-bottom: 20px;
  border: 1px solid #0f3460;
}
.score-item {
  text-align: center;
}
.score-item .label {
  font-size: 0.75rem;
  color: #a0a0c0;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.score-item .value {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
}
.score-item .value.correct { color: #4ecca3; }
.score-item .value.wrong { color: #e94560; }
.score-item .value.total { color: #f0c040; }
.progress-bar {
  width: 100%;
  height: 6px;
  background: #0f3460;
  border-radius: 3px;
  margin-top: 8px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ecca3, #45b7d1);
  border-radius: 3px;
  transition: width 0.5s ease;
}
.question-card {
  background: #16213e;
  border-radius: 16px;
  padding: 30px;
  border: 1px solid #0f3460;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
.question-number {
  display: inline-block;
  background: #e94560;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
}
.question-topic {
  display: inline-block;
  background: #0f3460;
  color: #45b7d1;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  margin-left: 8px;
  margin-bottom: 15px;
}
.question-text {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #fff;
  margin-bottom: 8px;
}
.question-text-chinese {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #f0c040;
  margin-bottom: 25px;
}
.question-diagram {
  text-align: center;
  margin-bottom: 20px;
  padding: 15px;
  background: #1a1a2e;
  border-radius: 10px;
  border: 1px solid #0f3460;
}
.question-diagram svg {
  max-width: 100%;
  height: auto;
}
.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
}
.option {
  padding: 15px 20px;
  background: #1a1a2e;
  border: 2px solid #0f3460;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5;
  transition: all 0.3s;
  position: relative;
}
.option .option-chinese {
  display: block;
  font-size: 0.9rem;
  color: #f0c040;
  margin-top: 4px;
}
.option:hover:not(.disabled) {
  border-color: #45b7d1;
  background: #0f3460;
  transform: translateX(5px);
}
.option.selected {
  border-color: #45b7d1;
  background: rgba(69, 183, 209, 0.15);
}
.option.correct {
  border-color: #4ecca3;
  background: rgba(78, 204, 163, 0.15);
}
.option.correct::after {
  content: '\2713';
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #4ecca3;
  font-size: 1.4rem;
  font-weight: 700;
}
.option.wrong {
  border-color: #e94560;
  background: rgba(233, 69, 96, 0.15);
}
.option.wrong::after {
  content: '\2717';
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #e94560;
  font-size: 1.4rem;
  font-weight: 700;
}
.option.disabled {
  cursor: default;
  opacity: 0.7;
}
.btn-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-answer {
  background: linear-gradient(135deg, #e94560, #c23152);
  color: #fff;
}
.btn-answer:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(233,69,96,0.4); }
.btn-answer:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
.btn-next {
  background: linear-gradient(135deg, #4ecca3, #38a88a);
  color: #fff;
}
.btn-next:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(78,204,163,0.4); }
.btn-reset {
  background: linear-gradient(135deg, #f0c040, #d4a017);
  color: #1a1a2e;
}
.btn-reset:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(240,192,64,0.4); }
.explanation {
  margin-top: 20px;
  padding: 20px;
  background: #1a1a2e;
  border-radius: 12px;
  border-left: 4px solid #4ecca3;
  display: none;
}
.explanation.show { display: block; animation: fadeIn 0.4s ease; }
.explanation h3 {
  color: #4ecca3;
  margin-bottom: 10px;
  font-size: 1.05rem;
}
.explanation p {
  line-height: 1.7;
  font-size: 1rem;
  color: #c0c0d0;
}
.explanation .explanation-chinese {
  line-height: 1.7;
  font-size: 0.95rem;
  color: #f0c040;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #0f3460;
}
.explanation .diagram-explain {
  margin-top: 15px;
  text-align: center;
  padding: 10px;
  background: #16213e;
  border-radius: 8px;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.no-questions {
  text-align: center;
  padding: 60px 20px;
  color: #a0a0c0;
}
.no-questions h2 { margin-bottom: 10px; color: #fff; }

/* Related Terms */
.related-terms {
  margin-top: 18px;
  padding: 15px;
  background: #16213e;
  border-radius: 10px;
  border: 1px solid #0f3460;
}
.related-terms h4 {
  color: #f0c040;
  font-size: 0.95rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.term-link {
  display: inline-block;
  background: linear-gradient(135deg, #0f3460, #1a1a4e);
  color: #45b7d1;
  padding: 6px 14px;
  border-radius: 20px;
  margin: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #45b7d1;
  transition: all 0.3s;
  text-decoration: none;
}
.term-link:hover {
  background: #45b7d1;
  color: #1a1a2e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(69, 183, 209, 0.3);
}

/* Highlighted terms in text */
.term-highlight {
  color: #45b7d1;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 3px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}
.term-highlight:hover {
  color: #7dd3e8;
  text-decoration-style: solid;
  background: rgba(69, 183, 209, 0.1);
  border-radius: 3px;
  padding: 0 2px;
}

/* Term Modal */
.term-modal-overlay {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}
.term-modal-overlay.show {
  display: flex;
}
.term-modal {
  background: #16213e;
  border: 2px solid #45b7d1;
  border-radius: 16px;
  padding: 30px;
  max-width: 520px;
  width: 90%;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  position: relative;
  animation: fadeIn 0.3s ease;
}
.term-modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 1.6rem;
  color: #a0a0c0;
  cursor: pointer;
  border: none;
  background: none;
  transition: color 0.3s;
}
.term-modal-close:hover { color: #e94560; }
.term-modal-section {
  display: inline-block;
  background: #e94560;
  color: #fff;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 10px;
}
.term-modal-title {
  color: #45b7d1;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.term-modal-title-chinese {
  color: #f0c040;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 15px;
}
.term-modal-body {
  color: #c0c0d0;
  font-size: 1.05rem;
  line-height: 1.7;
}
.term-modal-body-chinese {
  color: #a0c0a0;
  font-size: 1rem;
  line-height: 1.7;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #0f3460;
}

/* Explanation Image & Video */
.explanation-media {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.explanation-image {
  text-align: center;
  background: #16213e;
  border-radius: 10px;
  padding: 12px;
  border: 1px solid #0f3460;
}
.explanation-image img {
  max-width: 100%;
  max-height: 280px;
  border-radius: 8px;
  object-fit: contain;
}
.explanation-image .img-caption {
  margin-top: 6px;
  font-size: 0.8rem;
  color: #a0a0c0;
  font-style: italic;
}
.explanation-video {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #1a1a3e, #16213e);
  border: 1px solid #e94560;
  border-radius: 10px;
  padding: 12px 16px;
  text-decoration: none;
  transition: all 0.3s;
}
.explanation-video:hover {
  background: linear-gradient(135deg, #2a1a3e, #261a3e);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(233, 69, 96, 0.3);
}
.explanation-video .yt-icon {
  flex-shrink: 0;
  width: 42px;
  height: 30px;
  background: #e94560;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.explanation-video .yt-icon::after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 0 7px 12px;
  border-color: transparent transparent transparent #fff;
}
.explanation-video .yt-text {
  flex: 1;
}
.explanation-video .yt-label {
  font-size: 0.7rem;
  color: #e94560;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}
.explanation-video .yt-title {
  font-size: 0.95rem;
  color: #e0e0e0;
  margin-top: 2px;
  line-height: 1.3;
}

/* Term Modal Image & Video */
.term-modal-image {
  margin-top: 14px;
  text-align: center;
  background: #1a1a2e;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #0f3460;
}
.term-modal-image img {
  max-width: 100%;
  max-height: 200px;
  border-radius: 6px;
  object-fit: contain;
}
.term-modal-video {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  background: linear-gradient(135deg, #1a1a3e, #16213e);
  border: 1px solid #e94560;
  border-radius: 8px;
  padding: 10px 14px;
  text-decoration: none;
  transition: all 0.3s;
}
.term-modal-video:hover {
  background: linear-gradient(135deg, #2a1a3e, #261a3e);
  box-shadow: 0 4px 12px rgba(233, 69, 96, 0.3);
}
.term-modal-video .yt-icon {
  flex-shrink: 0;
  width: 36px;
  height: 26px;
  background: #e94560;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.term-modal-video .yt-icon::after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 0 6px 10px;
  border-color: transparent transparent transparent #fff;
}
.term-modal-video .yt-label {
  font-size: 0.7rem;
  color: #e94560;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}
.term-modal-video .yt-title {
  font-size: 0.85rem;
  color: #e0e0e0;
  margin-top: 2px;
}

/* AI Lookup Modal */
.ai-modal-overlay {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.75);
  z-index: 1100;
  animation: fadeIn 0.3s ease;
}
.ai-modal-overlay.show {
  display: block;
}
.ai-modal {
  background: #16213e;
  border: 2px solid #e94560;
  border-radius: 16px;
  padding: 0;
  max-width: 620px;
  width: 92%;
  max-height: 80vh;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.6);
  position: fixed;
  animation: fadeIn 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 1101;
}
.ai-modal-header {
  padding: 20px 25px 15px;
  border-bottom: 1px solid #0f3460;
  flex-shrink: 0;
  cursor: grab;
  user-select: none;
}
.ai-modal-header:active {
  cursor: grabbing;
}
.ai-modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 1.6rem;
  color: #a0a0c0;
  cursor: pointer;
  border: none;
  background: none;
  transition: color 0.3s;
  z-index: 10;
}
.ai-modal-close:hover { color: #e94560; }
.ai-modal-badge {
  display: inline-block;
  background: linear-gradient(135deg, #e94560, #c23152);
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.ai-modal-query {
  color: #45b7d1;
  font-size: 1.15rem;
  font-weight: 700;
  margin-top: 10px;
  line-height: 1.4;
}
.ai-modal-body {
  padding: 20px 25px 25px;
  overflow-y: auto;
  height: 400px;
  flex-shrink: 0;
  color: #d0d0e0;
  font-size: 1.05rem;
  line-height: 1.8;
  word-wrap: break-word;
}
.ai-modal-body h1, .ai-modal-body h2, .ai-modal-body h3 {
  color: #45b7d1;
  margin: 16px 0 8px;
  line-height: 1.4;
}
.ai-modal-body h1 { font-size: 1.3rem; }
.ai-modal-body h2 { font-size: 1.15rem; }
.ai-modal-body h3 { font-size: 1.05rem; }
.ai-modal-body p {
  margin: 8px 0;
}
.ai-modal-body ul, .ai-modal-body ol {
  margin: 8px 0 8px 20px;
  padding-left: 10px;
}
.ai-modal-body li {
  margin: 4px 0;
}
.ai-modal-body code {
  background: #0f3460;
  color: #4ecca3;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.95em;
}
.ai-modal-body pre {
  background: #0f3460;
  padding: 12px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 10px 0;
}
.ai-modal-body pre code {
  background: none;
  padding: 0;
}
.ai-modal-body strong, .ai-modal-body b {
  color: #f0c040;
}
.ai-modal-body em, .ai-modal-body i {
  color: #a0c0e0;
}
.ai-modal-body blockquote {
  border-left: 3px solid #e94560;
  margin: 10px 0;
  padding: 8px 16px;
  color: #a0a0c0;
  background: rgba(15, 52, 96, 0.5);
  border-radius: 0 8px 8px 0;
}
.ai-modal-body hr {
  border: none;
  border-top: 1px solid #0f3460;
  margin: 12px 0;
}
.ai-modal-body::-webkit-scrollbar {
  width: 8px;
}
.ai-modal-body::-webkit-scrollbar-track {
  background: #0f3460;
  border-radius: 4px;
}
.ai-modal-body::-webkit-scrollbar-thumb {
  background: #45b7d1;
  border-radius: 4px;
}
.ai-modal-body::-webkit-scrollbar-thumb:hover {
  background: #7dd3e8;
}
/* Ask Question Box */
.ai-modal-askbox {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: #1a1a2e;
  border-bottom: 1px solid #0f3460;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 5;
}
.ai-modal-askbox label {
  color: #f0c040;
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: 0.5px;
}
.ai-modal-askbox input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #0f3460;
  border-radius: 8px;
  background: #16213e;
  color: #e0e0e0;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.3s;
}
.ai-modal-askbox input:focus {
  border-color: #45b7d1;
}
.ai-modal-askbox input::placeholder {
  color: #606080;
}
.ai-modal-askbox button {
  padding: 8px 18px;
  background: linear-gradient(135deg, #e94560, #c23152);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}
.ai-modal-askbox button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(233, 69, 96, 0.4);
}
.ai-loading {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #a0a0c0;
  font-style: italic;
}
/* History Navigation */
.ai-modal-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: #1a1a2e;
  border-bottom: 1px solid #0f3460;
  flex-shrink: 0;
}
.ai-modal-nav button {
  padding: 6px 14px;
  background: #0f3460;
  color: #a0a0c0;
  border: 1px solid #45b7d1;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
}
.ai-modal-nav button:hover:not(:disabled) {
  background: #45b7d1;
  color: #1a1a2e;
}
.ai-modal-nav button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  border-color: #0f3460;
}
.ai-modal-nav .nav-position {
  flex: 1;
  text-align: center;
  font-size: 0.8rem;
  color: #a0a0c0;
  letter-spacing: 0.5px;
}
.ai-loading .spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #0f3460;
  border-top: 3px solid #e94560;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* Mobile responsive */
@media (max-width: 600px) {
  .tabs { gap: 3px; padding: 8px 5px; }
  .tab { padding: 8px 10px; font-size: 0.85rem; }
  .tab .tab-label { display: none; }
  .question-card { padding: 20px 15px; }
  .question-text { font-size: 1.05rem; }
  .header h1 { font-size: 1.2rem; }
  .score-bar { flex-wrap: wrap; gap: 8px; }
  .explanation-image img { max-height: 200px; }
  .term-modal-image img { max-height: 150px; }
  .ai-modal { width: 96%; max-height: 85vh; }
  .ai-modal-body { font-size: 0.95rem; height: 400px; }
}
</style>
</head>
<body>

<div class="header">
  <h1>ASE Certification Study Q&A</h1>
  <div class="subtitle">Entry-Level Technician Certification Prep | A1-A8 & G1 | 1800 Questions</div>
</div>

<div class="tabs" id="tabs"></div>

<div class="main">
  <div class="score-bar" id="scoreBar">
    <div class="score-item">
      <div class="label">Correct</div>
      <div class="value correct" id="scoreCorrect">0</div>
    </div>
    <div class="score-item">
      <div class="label">Wrong</div>
      <div class="value wrong" id="scoreWrong">0</div>
    </div>
    <div class="score-item">
      <div class="label">Answered</div>
      <div class="value total" id="scoreAnswered">0</div>
    </div>
    <div class="score-item">
      <div class="label">Remaining</div>
      <div class="value" id="scoreRemaining">100</div>
    </div>
    <div class="score-item" style="flex: 1; max-width: 200px;">
      <div class="label">Progress</div>
      <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
    </div>
  </div>

  <div class="question-card" id="questionCard">
    <div class="no-questions">
      <h2>Select a test section above to begin</h2>
      <p>Choose from A1-A8 or G1 to start studying</p>
    </div>
  </div>
</div>

<!-- Term Detail Modal -->
<div class="term-modal-overlay" id="termModalOverlay" onclick="closeTermModal(event)">
  <div class="term-modal">
    <button class="term-modal-close" onclick="closeTermModal()">&times;</button>
    <div class="term-modal-section" id="termModalSection"></div>
    <div class="term-modal-title" id="termModalTitle"></div>
    <div class="term-modal-title-chinese" id="termModalTitleChinese"></div>
    <div class="term-modal-body" id="termModalBody"></div>
    <div class="term-modal-body-chinese" id="termModalBodyChinese"></div>
    <div class="term-modal-image" id="termModalImage" style="display:none"></div>
    <div id="termModalVideo" style="display:none"></div>
  </div>
</div>

<!-- AI Lookup Modal -->
<div class="ai-modal-overlay" id="aiModalOverlay" onclick="closeAiModal(event)">
  <div class="ai-modal">
    <button class="ai-modal-close" onclick="closeAiModal()">&times;</button>
    <div class="ai-modal-header">
      <div class="ai-modal-badge">AI - Gemma2:2B</div>
      <div class="ai-modal-query" id="aiModalQuery"></div>
    </div>
    <div class="ai-modal-nav" id="aiModalNav">
      <button id="aiNavPrev" onclick="aiHistoryBack()" disabled>&larr; Prev</button>
      <span class="nav-position" id="aiNavPosition"></span>
      <button id="aiNavNext" onclick="aiHistoryForward()" disabled>Next &rarr;</button>
    </div>
    <div class="ai-modal-askbox">
      <label for="aiAskInput">Ask Question</label>
      <input type="text" id="aiAskInput" placeholder="Type your question here..." onkeydown="if(event.key==='Enter')submitAiQuestion()">
      <button onclick="submitAiQuestion()">Submit</button>
    </div>
    <div class="ai-modal-body" id="aiModalBody">
      <div class="ai-loading"><div class="spinner"></div>Asking AI...</div>
    </div>
  </div>
</div>

<script src="terms_glossary.js"></script>
<script src="q_a1.js"></script>
<script src="q_a2.js"></script>
<script src="q_a3.js"></script>
<script src="q_a4.js"></script>
<script src="q_a5.js"></script>
<script src="q_a6.js"></script>
<script src="q_a7.js"></script>
<script src="q_a8.js"></script>
<script src="q_g1.js"></script>

<script>
// Build a lookup map: term display name -> glossary key
// Sort by term length descending so longer terms match first
const termLookup = [];
for (const key in termsGlossary) {
  const t = termsGlossary[key];
  // Add main term name
  termLookup.push({ name: t.term, key: key });
  // Also add the short name without parenthetical for matching
  const shortName = t.term.replace(/\s*\(.*?\)\s*/g, '').trim();
  if (shortName !== t.term && shortName.length > 3) {
    termLookup.push({ name: shortName, key: key });
  }
}
// Sort by name length descending to match longest terms first
termLookup.sort((a, b) => b.name.length - a.name.length);

// Highlight mechanic terms in text - returns HTML string
function highlightTerms(text) {
  if (!text) return text;
  // Use a marker system to avoid replacing inside already-replaced segments
  let result = text;
  const replacements = [];
  const lowerText = result.toLowerCase();

  for (const entry of termLookup) {
    const termLower = entry.name.toLowerCase();
    let searchFrom = 0;
    while (true) {
      const idx = lowerText.indexOf(termLower, searchFrom);
      if (idx === -1) break;
      const end = idx + entry.name.length;
      // Check word boundaries
      const charBefore = idx > 0 ? lowerText[idx - 1] : ' ';
      const charAfter = end < lowerText.length ? lowerText[end] : ' ';
      const isBoundaryBefore = /[\s,.:;!?()/"'\-]/.test(charBefore) || idx === 0;
      const isBoundaryAfter = /[\s,.:;!?()/"'\-]/.test(charAfter) || end === lowerText.length;
      if (isBoundaryBefore && isBoundaryAfter) {
        // Check overlap with existing replacements
        let overlaps = false;
        for (const r of replacements) {
          if (idx < r.end && end > r.start) { overlaps = true; break; }
        }
        if (!overlaps) {
          replacements.push({ start: idx, end: end, key: entry.key, name: entry.name });
        }
      }
      searchFrom = idx + 1;
    }
  }

  // Sort replacements by position (reverse) to replace from end to start
  replacements.sort((a, b) => b.start - a.start);
  for (const r of replacements) {
    const original = result.substring(r.start, r.end);
    const escaped = r.key.replace(/'/g, "\\'");
    result = result.substring(0, r.start) +
      '<span class="term-highlight" onclick="askAiAboutTerm(\'' + escaped + '\')" title="Click to ask AI about this term">' + original + '</span>' +
      result.substring(r.end);
  }
  return result;
}

const sections = [
  { id: 'A1', label: 'Engine Repair', data: () => questionsA1 },
  { id: 'A2', label: 'Auto Trans', data: () => questionsA2 },
  { id: 'A3', label: 'Manual Drive', data: () => questionsA3 },
  { id: 'A4', label: 'Susp & Steer', data: () => questionsA4 },
  { id: 'A5', label: 'Brakes', data: () => questionsA5 },
  { id: 'A6', label: 'Electrical', data: () => questionsA6 },
  { id: 'A7', label: 'HVAC', data: () => questionsA7 },
  { id: 'A8', label: 'Engine Perf', data: () => questionsA8 },
  { id: 'G1', label: 'Maint & Lt Repair', data: () => questionsG1 }
];

let currentSection = null;
let currentQuestions = [];
let currentQuestion = null;
let selectedOption = -1;
let answered = false;
let scores = {};

// Initialize scores for each section
sections.forEach(s => {
  scores[s.id] = { correct: 0, wrong: 0, answered: new Set(), pool: [] };
});

// Build tabs
const tabsEl = document.getElementById('tabs');
sections.forEach(s => {
  const tab = document.createElement('div');
  tab.className = 'tab';
  tab.innerHTML = `${s.id}<span class="tab-label">${s.label}</span>`;
  tab.onclick = () => selectSection(s.id);
  tab.id = `tab-${s.id}`;
  tabsEl.appendChild(tab);
});

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function selectSection(sectionId) {
  currentSection = sectionId;
  const section = sections.find(s => s.id === sectionId);

  // Update tab active state
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${sectionId}`).classList.add('active');

  // Initialize pool if needed
  if (scores[sectionId].pool.length === 0) {
    try {
      const allQ = section.data();
      scores[sectionId].pool = shuffle(allQ);
    } catch(e) {
      document.getElementById('questionCard').innerHTML = `
        <div class="no-questions">
          <h2>Loading questions...</h2>
          <p>Questions for ${sectionId} are still loading. Please try again.</p>
        </div>`;
      return;
    }
  }

  answered = false;
  selectedOption = -1;
  showRandomQuestion();
}

function showRandomQuestion() {
  const sectionId = currentSection;
  const score = scores[sectionId];
  const pool = score.pool;

  // Find unanswered questions first, otherwise pick any random one
  let unanswered = pool.filter(q => !score.answered.has(q.id));
  let q;
  if (unanswered.length > 0) {
    q = unanswered[Math.floor(Math.random() * unanswered.length)];
  } else {
    // All answered, pick random for review
    q = pool[Math.floor(Math.random() * pool.length)];
  }

  currentQuestion = q;
  answered = false;
  selectedOption = -1;

  updateScoreDisplay();
  renderQuestion(q);
}

function updateScoreDisplay() {
  const score = scores[currentSection];
  document.getElementById('scoreCorrect').textContent = score.correct;
  document.getElementById('scoreWrong').textContent = score.wrong;
  document.getElementById('scoreAnswered').textContent = score.answered.size;
  const total = score.pool.length || 100;
  const remaining = total - score.answered.size;
  document.getElementById('scoreRemaining').textContent = Math.max(0, remaining);
  const pct = (score.answered.size / total) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
}

function renderQuestion(q) {
  const card = document.getElementById('questionCard');
  const score = scores[currentSection];
  const isReview = score.answered.has(q.id);

  let html = `
    <div class="question-number">Question #${q.id} of ${score.pool.length}</div>
    <span class="question-topic">${currentSection}${isReview ? ' (Review)' : ''}</span>
    <p class="question-text">${highlightTerms(q.q)}</p>
    ${q.qChinese ? `<p class="question-text-chinese">${q.qChinese}</p>` : ''}
  `;

  if (q.diagram) {
    html += `<div class="question-diagram">${q.diagram}</div>`;
  }

  html += `<div class="options" id="optionsContainer">`;
  q.options.forEach((opt, i) => {
    const chineseOpt = q.optionsChinese && q.optionsChinese[i] ? `<span class="option-chinese">${q.optionsChinese[i]}</span>` : '';
    html += `<div class="option" data-idx="${i}" onclick="selectOption(${i})">${highlightTerms(opt)}${chineseOpt}</div>`;
  });
  html += `</div>`;

  html += `
    <div class="btn-row">
      <button class="btn btn-answer" id="btnAnswer" onclick="revealAnswer()">Show Answer</button>
      <button class="btn btn-next" id="btnNext" onclick="showRandomQuestion()" style="display:none">Next Question</button>
      <button class="btn btn-reset" onclick="resetSection()">Reset Section</button>
    </div>
    <div class="explanation" id="explanation"></div>
  `;

  card.innerHTML = html;
}

function selectOption(idx) {
  if (answered) return;
  selectedOption = idx;
  document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  document.querySelector(`.option[data-idx="${idx}"]`).classList.add('selected');
}

function revealAnswer() {
  if (answered) return;
  answered = true;

  const q = currentQuestion;
  const score = scores[currentSection];
  const isNew = !score.answered.has(q.id);
  const hasSelection = selectedOption !== -1;

  // Mark options
  document.querySelectorAll('.option').forEach(o => {
    o.classList.add('disabled');
    const idx = parseInt(o.dataset.idx);
    if (idx === q.answer) {
      o.classList.add('correct');
    }
    if (hasSelection && idx === selectedOption && idx !== q.answer) {
      o.classList.add('wrong');
    }
  });

  // Update score only for new answers when a selection was made
  if (isNew && hasSelection) {
    score.answered.add(q.id);
    if (selectedOption === q.answer) {
      score.correct++;
    } else {
      score.wrong++;
    }
  }

  updateScoreDisplay();

  // Show explanation
  const expEl = document.getElementById('explanation');
  const answerChinese = q.optionsChinese && q.optionsChinese[q.answer] ? ` / ${q.optionsChinese[q.answer]}` : '';
  let resultLabel = !hasSelection ? 'Answer Revealed 答案揭晓' : (selectedOption === q.answer ? 'Correct! 正确!' : 'Incorrect 不正确');
  let expHtml = `
    <h3>${resultLabel} - The answer is ${highlightTerms(q.options[q.answer])}${answerChinese}</h3>
    <p>${highlightTerms(q.explanation)}</p>
    ${q.explanationChinese ? `<p class="explanation-chinese">${q.explanationChinese}</p>` : ''}
  `;
  if (q.diagram && q.diagram.length > 0) {
    expHtml += `<div class="diagram-explain">${q.diagram}</div>`;
  }
  // Show image and YouTube video
  if ((q.image && q.image.length > 0) || (q.youtube && q.youtube.length > 0)) {
    expHtml += `<div class="explanation-media">`;
    if (q.image && q.image.length > 0) {
      expHtml += `<div class="explanation-image"><img src="${q.image}" alt="Illustration for question" onerror="this.parentElement.style.display='none'"><div class="img-caption">Reference illustration</div></div>`;
    }
    if (q.youtube && q.youtube.length > 0) {
      const ytTitle = q.youtubeTitle || 'Watch Related Video Explanation';
      expHtml += `<a class="explanation-video" href="${q.youtube}" target="_blank" rel="noopener noreferrer"><div class="yt-icon"></div><div class="yt-text"><div class="yt-label">YouTube Video</div><div class="yt-title">${ytTitle}</div></div></a>`;
    }
    expHtml += `</div>`;
  }
  // Show related terms
  if (q.terms && q.terms.length > 0) {
    expHtml += `<div class="related-terms"><h4>Related Terms</h4>`;
    q.terms.forEach(termKey => {
      const termData = termsGlossary[termKey];
      if (termData) {
        expHtml += `<span class="term-link" onclick="showTermModal('${termKey}')">${termData.term}</span>`;
      }
    });
    expHtml += `</div>`;
  }
  expEl.innerHTML = expHtml;
  expEl.classList.add('show');

  // Show next button, hide answer button
  document.getElementById('btnAnswer').style.display = 'none';
  document.getElementById('btnNext').style.display = 'inline-block';
}

function resetSection() {
  if (!currentSection) return;
  scores[currentSection] = { correct: 0, wrong: 0, answered: new Set(), pool: scores[currentSection].pool };
  scores[currentSection].pool = shuffle(scores[currentSection].pool);
  showRandomQuestion();
}

// Term modal functions
function showTermModal(termKey) {
  const termData = termsGlossary[termKey];
  if (!termData) return;
  document.getElementById('termModalSection').textContent = termData.section;
  document.getElementById('termModalTitle').textContent = termData.term;
  document.getElementById('termModalTitleChinese').textContent = termData.termChinese || '';
  document.getElementById('termModalTitleChinese').style.display = termData.termChinese ? 'block' : 'none';
  document.getElementById('termModalBody').textContent = termData.definition;
  document.getElementById('termModalBodyChinese').textContent = termData.definitionChinese || '';
  document.getElementById('termModalBodyChinese').style.display = termData.definitionChinese ? 'block' : 'none';
  // Show term image
  const imgEl = document.getElementById('termModalImage');
  if (termData.image && termData.image.length > 0) {
    imgEl.innerHTML = `<img src="${termData.image}" alt="${termData.term}" onerror="this.parentElement.style.display='none'">`;
    imgEl.style.display = 'block';
  } else {
    imgEl.style.display = 'none';
  }
  // Show term YouTube video
  const vidEl = document.getElementById('termModalVideo');
  if (termData.youtube && termData.youtube.length > 0) {
    const ytTitle = termData.youtubeTitle || 'Watch Video About ' + termData.term;
    vidEl.innerHTML = `<a class="term-modal-video" href="${termData.youtube}" target="_blank" rel="noopener noreferrer"><div class="yt-icon"></div><div class="yt-text"><div class="yt-label">YouTube Video</div><div class="yt-title">${ytTitle}</div></div></a>`;
    vidEl.style.display = 'block';
  } else {
    vidEl.style.display = 'none';
  }
  document.getElementById('termModalOverlay').classList.add('show');
}

function closeTermModal(event) {
  if (event && event.target !== event.currentTarget) return;
  document.getElementById('termModalOverlay').classList.remove('show');
}

// Simple Markdown to HTML renderer
function renderMarkdown(text) {
  if (!text) return '';
  let html = text;
  // Escape HTML entities first
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // Code blocks (``` ... ```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr>');
  // Unordered lists
  html = html.replace(/^\* (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  // Wrap consecutive <li> in <ul>
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');
  // Paragraphs - split by double newlines
  html = html.replace(/\n\n+/g, '</p><p>');
  // Single newlines to <br> (except inside pre/code blocks)
  html = html.replace(/(?<!<\/h[123]>|<\/pre>|<\/ul>|<\/blockquote>|<\/li>|<hr>|<\/p>|<p>)\n/g, '<br>');
  // Wrap in paragraph
  html = '<p>' + html + '</p>';
  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  // Clean up paragraphs around block elements
  html = html.replace(/<p>(<h[123]>)/g, '$1');
  html = html.replace(/(<\/h[123]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<pre>)/g, '$1');
  html = html.replace(/(<\/pre>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul>)/g, '$1');
  html = html.replace(/(<\/ul>)<\/p>/g, '$1');
  html = html.replace(/<p>(<blockquote>)/g, '$1');
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1');
  html = html.replace(/<p>(<hr>)/g, '$1');
  html = html.replace(/(<hr>)<\/p>/g, '$1');
  return html;
}

// --- AI Popup History (persistent, max 100) ---
const AI_HISTORY_MAX = 100;
const AI_HISTORY_KEY = 'aiPopupHistory';

function loadAiHistory() {
  try {
    const saved = localStorage.getItem(AI_HISTORY_KEY);
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return [];
}

function saveAiHistory() {
  try {
    localStorage.setItem(AI_HISTORY_KEY, JSON.stringify(aiHistory));
  } catch(e) {}
}

let aiHistory = loadAiHistory(); // Array of { displayName, query, responseText }
let aiHistoryIndex = aiHistory.length > 0 ? aiHistory.length - 1 : -1; // Point to latest entry
let aiCurrentStreamAbort = null; // AbortController for current stream

function updateAiNavButtons() {
  const prevBtn = document.getElementById('aiNavPrev');
  const nextBtn = document.getElementById('aiNavNext');
  const posEl = document.getElementById('aiNavPosition');
  prevBtn.disabled = aiHistoryIndex <= 0;
  nextBtn.disabled = aiHistoryIndex >= aiHistory.length - 1;
  if (aiHistory.length > 0) {
    posEl.textContent = (aiHistoryIndex + 1) + ' / ' + aiHistory.length;
  } else {
    posEl.textContent = '';
  }
}

function aiHistoryBack() {
  if (aiHistoryIndex <= 0) return;
  // Abort any current stream
  if (aiCurrentStreamAbort) { aiCurrentStreamAbort.abort(); aiCurrentStreamAbort = null; }
  aiHistoryIndex--;
  const entry = aiHistory[aiHistoryIndex];
  document.getElementById('aiModalQuery').textContent = entry.query;
  const bodyEl = document.getElementById('aiModalBody');
  bodyEl.innerHTML = highlightTermsInHtml(renderMarkdown(entry.responseText));
  bodyEl.scrollTop = 0;
  updateAiNavButtons();
}

function aiHistoryForward() {
  if (aiHistoryIndex >= aiHistory.length - 1) return;
  // Abort any current stream
  if (aiCurrentStreamAbort) { aiCurrentStreamAbort.abort(); aiCurrentStreamAbort = null; }
  aiHistoryIndex++;
  const entry = aiHistory[aiHistoryIndex];
  document.getElementById('aiModalQuery').textContent = entry.query;
  const bodyEl = document.getElementById('aiModalBody');
  bodyEl.innerHTML = highlightTermsInHtml(renderMarkdown(entry.responseText));
  bodyEl.scrollTop = 0;
  updateAiNavButtons();
}

// Shared streaming AI function - streams into the existing AI modal
function streamAiQuery(displayName, query) {
  // Abort any ongoing stream
  if (aiCurrentStreamAbort) { aiCurrentStreamAbort.abort(); aiCurrentStreamAbort = null; }

  // If we navigated back and then start a new query, trim forward history
  if (aiHistoryIndex < aiHistory.length - 1) {
    aiHistory = aiHistory.slice(0, aiHistoryIndex + 1);
  }

  // Create new history entry
  const historyEntry = { displayName: displayName, query: query, responseText: '' };
  aiHistory.push(historyEntry);

  // Enforce max 100 entries
  if (aiHistory.length > AI_HISTORY_MAX) {
    aiHistory = aiHistory.slice(aiHistory.length - AI_HISTORY_MAX);
  }

  aiHistoryIndex = aiHistory.length - 1;
  saveAiHistory();
  updateAiNavButtons();

  document.getElementById('aiModalQuery').textContent = query;
  document.getElementById('aiModalBody').innerHTML = '<div class="ai-loading"><div class="spinner"></div>Asking AI about "' + displayName + '"...</div>';
  document.getElementById('aiModalOverlay').classList.add('show');

  const bodyEl = document.getElementById('aiModalBody');
  let rawText = '';
  const abortCtrl = new AbortController();
  aiCurrentStreamAbort = abortCtrl;

  fetch('index.php?q=' + encodeURIComponent(query), { signal: abortCtrl.signal })
    .then(response => {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      bodyEl.innerHTML = '';
      function readChunk() {
        reader.read().then(({ done, value }) => {
          if (done) {
            historyEntry.responseText = rawText;
            aiCurrentStreamAbort = null;
            // Final render with full markdown + highlight terms for clickability
            bodyEl.innerHTML = highlightTermsInHtml(renderMarkdown(rawText));
            saveAiHistory();
            updateAiNavButtons();
            return;
          }
          rawText += decoder.decode(value, { stream: true });
          historyEntry.responseText = rawText;
          bodyEl.innerHTML = renderMarkdown(rawText);
          readChunk();
        }).catch(err => {
          if (err.name === 'AbortError') return;
          rawText += '\n\n[Stream error: ' + err.message + ']';
          historyEntry.responseText = rawText;
          bodyEl.innerHTML = renderMarkdown(rawText);
        });
      }
      readChunk();
    })
    .catch(err => {
      if (err.name === 'AbortError') return;
      const errText = 'Error: Could not reach the AI backend. Make sure PHP server is running and ollama is available.\n\n' + err.message;
      historyEntry.responseText = errText;
      bodyEl.innerHTML = renderMarkdown(errText);
    });
}

// Highlight known terms inside already-rendered HTML (only in text nodes, not inside tags)
function highlightTermsInHtml(html) {
  const container = document.createElement('div');
  container.innerHTML = html;
  function walkTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (!text || text.trim().length === 0) return;
      const replacements = [];
      const lowerText = text.toLowerCase();
      for (const entry of termLookup) {
        const termLower = entry.name.toLowerCase();
        let searchFrom = 0;
        while (true) {
          const idx = lowerText.indexOf(termLower, searchFrom);
          if (idx === -1) break;
          const end = idx + entry.name.length;
          const charBefore = idx > 0 ? lowerText[idx - 1] : ' ';
          const charAfter = end < lowerText.length ? lowerText[end] : ' ';
          const isBoundaryBefore = /[\s,.:;!?()/"'\-]/.test(charBefore) || idx === 0;
          const isBoundaryAfter = /[\s,.:;!?()/"'\-]/.test(charAfter) || end === lowerText.length;
          if (isBoundaryBefore && isBoundaryAfter) {
            let overlaps = false;
            for (const r of replacements) {
              if (idx < r.end && end > r.start) { overlaps = true; break; }
            }
            if (!overlaps) {
              replacements.push({ start: idx, end: end, key: entry.key, name: entry.name });
            }
          }
          searchFrom = idx + 1;
        }
      }
      if (replacements.length === 0) return;
      replacements.sort((a, b) => a.start - b.start);
      const frag = document.createDocumentFragment();
      let lastEnd = 0;
      for (const r of replacements) {
        if (r.start > lastEnd) {
          frag.appendChild(document.createTextNode(text.substring(lastEnd, r.start)));
        }
        const span = document.createElement('span');
        span.className = 'term-highlight';
        span.title = 'Click to ask AI about this term';
        span.textContent = text.substring(r.start, r.end);
        span.setAttribute('data-term-key', r.key);
        const escapedKey = r.key.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        span.setAttribute('onclick', "askAiAboutTerm('" + escapedKey + "')");
        frag.appendChild(span);
        lastEnd = r.end;
      }
      if (lastEnd < text.length) {
        frag.appendChild(document.createTextNode(text.substring(lastEnd)));
      }
      node.parentNode.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && !['CODE', 'PRE', 'SCRIPT', 'STYLE'].includes(node.tagName)) {
      // Walk children in reverse to handle replacements safely
      const children = Array.from(node.childNodes);
      children.forEach(child => walkTextNodes(child));
    }
  }
  walkTextNodes(container);
  return container.innerHTML;
}

// AI Lookup Modal functions
function askAiAboutTerm(termKey) {
  const termData = termsGlossary[termKey];
  if (!termData) return;
  const termName = termData.term;
  const query = 'what is ' + termName + ', explain to me in 200 words, also, please translate them to simplified chinese';
  streamAiQuery(termName, query);
}

function closeAiModal(event) {
  if (event && event.target !== event.currentTarget) return;
  document.getElementById('aiModalOverlay').classList.remove('show');
}

// Submit custom question from the Ask Question textbox
function submitAiQuestion() {
  const input = document.getElementById('aiAskInput');
  const question = input.value.trim();
  if (!question) return;
  const query = 'please answer the question: ' + question + ', explain to me in 200 words, also, please translate them to simplified chinese';
  streamAiQuery(question, query);
  input.value = '';
}

// Ask AI about arbitrary highlighted text
function askAiAboutText(text) {
  if (!text || text.trim().length === 0) return;
  const trimmed = text.trim();
  const query = 'in the context of car mechanic, what is ' + trimmed + ', explain to me in 200 words, also, please translate them to simplified chinese';
  streamAiQuery(trimmed, query);
}

// Detect text selection in question/answer areas AND in the AI popup, trigger AI lookup
document.addEventListener('mouseup', function(e) {
  // Small delay to let the browser finalize the selection
  setTimeout(function() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const selectedText = sel.toString().trim();
    if (selectedText.length < 2 || selectedText.length > 200) return;

    // Check if selection is inside the question card area
    const anchorNode = sel.anchorNode;
    const focusNode = sel.focusNode;
    if (!anchorNode || !focusNode) return;

    const questionCard = document.getElementById('questionCard');
    const explanation = document.getElementById('explanation');
    const aiModalBody = document.getElementById('aiModalBody');
    const isInQuestion = questionCard && questionCard.contains(anchorNode);
    const isInExplanation = explanation && explanation.contains(anchorNode);
    const isInAiPopup = aiModalBody && aiModalBody.contains(anchorNode);

    if (isInQuestion || isInExplanation || isInAiPopup) {
      askAiAboutText(selectedText);
      // Clear selection after triggering
      sel.removeAllRanges();
    }
  }, 10);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAiModal();
    closeTermModal();
  }
});

// --- Draggable AI Modal ---
(function() {
  const modal = document.querySelector('.ai-modal');
  const header = document.querySelector('.ai-modal-header');
  let isDragging = false;
  let dragOffsetX = 0, dragOffsetY = 0;

  // Save position to localStorage
  function saveModalPosition() {
    const rect = modal.getBoundingClientRect();
    localStorage.setItem('aiModalPos', JSON.stringify({ left: rect.left, top: rect.top }));
  }

  // Restore saved position, or center if none saved
  function restoreModalPosition() {
    const saved = localStorage.getItem('aiModalPos');
    if (saved) {
      try {
        const pos = JSON.parse(saved);
        // Clamp to viewport bounds
        const maxLeft = window.innerWidth - modal.offsetWidth;
        const maxTop = window.innerHeight - modal.offsetHeight;
        const left = Math.max(0, Math.min(pos.left, maxLeft));
        const top = Math.max(0, Math.min(pos.top, maxTop));
        modal.style.left = left + 'px';
        modal.style.top = top + 'px';
        return;
      } catch(e) {}
    }
    // Default: center
    centerModal();
  }

  function centerModal() {
    const left = Math.max(0, (window.innerWidth - modal.offsetWidth) / 2);
    const top = Math.max(0, (window.innerHeight - modal.offsetHeight) / 2);
    modal.style.left = left + 'px';
    modal.style.top = top + 'px';
  }

  header.addEventListener('mousedown', function(e) {
    // Don't drag when clicking the close button
    if (e.target.classList.contains('ai-modal-close')) return;
    isDragging = true;
    const rect = modal.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;
    e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    let newLeft = e.clientX - dragOffsetX;
    let newTop = e.clientY - dragOffsetY;
    // Clamp so modal stays on screen
    newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - modal.offsetWidth));
    newTop = Math.max(0, Math.min(newTop, window.innerHeight - 40));
    modal.style.left = newLeft + 'px';
    modal.style.top = newTop + 'px';
  });

  document.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      saveModalPosition();
    }
  });

  // Observe when the overlay becomes visible to position the modal
  const overlay = document.getElementById('aiModalOverlay');
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      if (m.attributeName === 'class' && overlay.classList.contains('show')) {
        restoreModalPosition();
      }
    });
  });
  observer.observe(overlay, { attributes: true });
})();

// Auto-select first tab
// selectSection('A1');
</script>

</body>
</html>
