<?php
// Handle AI query via ollama HTTP API with streaming
if (isset($_GET['q']) && !empty(trim($_GET['q']))) {
    header('Content-Type: text/plain; charset=utf-8');
    header('X-Accel-Buffering: no');
    while (ob_get_level()) { ob_end_flush(); }
    ob_implicit_flush(true);

    $question = trim($_GET['q']);

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
<title>AI, ML & Python Knowledge Portal - Study Q&A</title>
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
.score-item { text-align: center; }
.score-item .label {
  font-size: 0.75rem;
  color: #a0a0c0;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.score-item .value { font-size: 1.4rem; font-weight: 700; color: #fff; }
.score-item .value.correct { color: #4ecca3; }
.score-item .value.wrong { color: #e94560; }
.score-item .value.total { color: #f0c040; }
.progress-bar {
  width: 100%; height: 6px; background: #0f3460; border-radius: 3px; margin-top: 8px; overflow: hidden;
}
.progress-fill {
  height: 100%; background: linear-gradient(90deg, #4ecca3, #45b7d1); border-radius: 3px; transition: width 0.5s ease;
}
.question-card {
  background: #16213e; border-radius: 16px; padding: 30px; border: 1px solid #0f3460;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
.question-number {
  display: inline-block; background: #e94560; color: #fff; padding: 4px 12px;
  border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin-bottom: 15px;
}
.question-topic {
  display: inline-block; background: #0f3460; color: #45b7d1; padding: 4px 12px;
  border-radius: 20px; font-size: 0.75rem; margin-left: 8px; margin-bottom: 15px;
}
.question-text { font-size: 1.15rem; line-height: 1.6; color: #fff; margin-bottom: 8px; }
.question-text-chinese { font-size: 1.05rem; line-height: 1.6; color: #f0c040; margin-bottom: 25px; }
.question-diagram { text-align: center; margin-bottom: 20px; padding: 15px; background: #1a1a2e; border-radius: 10px; border: 1px solid #0f3460; }
.question-diagram svg { max-width: 100%; height: auto; }
.options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 25px; }
.option {
  padding: 15px 20px; background: #1a1a2e; border: 2px solid #0f3460; border-radius: 10px;
  cursor: pointer; font-size: 1rem; line-height: 1.5; transition: all 0.3s; position: relative;
}
.option .option-chinese { display: block; font-size: 0.9rem; color: #f0c040; margin-top: 4px; }
.option:hover:not(.disabled) { border-color: #45b7d1; background: #0f3460; transform: translateX(5px); }
.option.selected { border-color: #45b7d1; background: rgba(69, 183, 209, 0.15); }
.option.correct { border-color: #4ecca3; background: rgba(78, 204, 163, 0.15); }
.option.correct::after { content: '\2713'; position: absolute; right: 15px; top: 50%; transform: translateY(-50%); color: #4ecca3; font-size: 1.4rem; font-weight: 700; }
.option.wrong { border-color: #e94560; background: rgba(233, 69, 96, 0.15); }
.option.wrong::after { content: '\2717'; position: absolute; right: 15px; top: 50%; transform: translateY(-50%); color: #e94560; font-size: 1.4rem; font-weight: 700; }
.option.disabled { cursor: default; opacity: 0.7; }
.btn-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.btn { padding: 12px 30px; border: none; border-radius: 10px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s; }
.btn-answer { background: linear-gradient(135deg, #e94560, #c23152); color: #fff; }
.btn-answer:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(233,69,96,0.4); }
.btn-answer:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
.btn-next { background: linear-gradient(135deg, #4ecca3, #38a88a); color: #fff; }
.btn-next:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(78,204,163,0.4); }
.btn-prev { background: linear-gradient(135deg, #f0c040, #d4a017); color: #1a1a2e; }
.btn-prev:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(240,192,64,0.4); }
.btn-prev:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }
.btn-reset { background: linear-gradient(135deg, #a0a0c0, #808098); color: #1a1a2e; }
.btn-reset:hover { transform: translateY(-2px); }
.explanation { margin-top: 20px; padding: 20px; background: #1a1a2e; border-radius: 12px; border-left: 4px solid #4ecca3; display: none; }
.explanation.show { display: block; animation: fadeIn 0.4s ease; }
.explanation h3 { color: #4ecca3; margin-bottom: 10px; font-size: 1.05rem; }
.explanation p { line-height: 1.7; font-size: 1rem; color: #c0c0d0; }
.explanation .explanation-chinese { line-height: 1.7; font-size: 0.95rem; color: #f0c040; margin-top: 8px; padding-top: 8px; border-top: 1px solid #0f3460; }
.explanation .diagram-explain { margin-top: 15px; text-align: center; padding: 10px; background: #16213e; border-radius: 8px; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.no-questions { text-align: center; padding: 60px 20px; color: #a0a0c0; }
.no-questions h2 { margin-bottom: 10px; color: #fff; }
/* Related Terms */
.related-terms { margin-top: 18px; padding: 15px; background: #16213e; border-radius: 10px; border: 1px solid #0f3460; }
.related-terms h4 { color: #f0c040; font-size: 0.95rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
.term-link { display: inline-block; background: linear-gradient(135deg, #0f3460, #1a1a4e); color: #45b7d1; padding: 6px 14px; border-radius: 20px; margin: 4px; font-size: 0.9rem; font-weight: 600; cursor: pointer; border: 1px solid #45b7d1; transition: all 0.3s; text-decoration: none; }
.term-link:hover { background: #45b7d1; color: #1a1a2e; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(69, 183, 209, 0.3); }
/* Highlighted terms */
.term-highlight { color: #45b7d1; text-decoration: underline; text-decoration-style: dotted; text-underline-offset: 3px; cursor: pointer; font-weight: 600; transition: all 0.2s; }
.term-highlight:hover { color: #7dd3e8; text-decoration-style: solid; background: rgba(69, 183, 209, 0.1); border-radius: 3px; padding: 0 2px; }
/* Term Modal */
.term-modal-overlay { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); z-index: 1000; justify-content: center; align-items: center; animation: fadeIn 0.3s ease; }
.term-modal-overlay.show { display: flex; }
.term-modal { background: #16213e; border: 2px solid #45b7d1; border-radius: 16px; padding: 30px; max-width: 520px; width: 90%; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5); position: relative; animation: fadeIn 0.3s ease; }
.term-modal-close { position: absolute; top: 12px; right: 16px; font-size: 1.6rem; color: #a0a0c0; cursor: pointer; border: none; background: none; transition: color 0.3s; }
.term-modal-close:hover { color: #e94560; }
.term-modal-section { display: inline-block; background: #e94560; color: #fff; padding: 3px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-bottom: 10px; }
.term-modal-title { color: #45b7d1; font-size: 1.3rem; font-weight: 700; margin-bottom: 4px; }
.term-modal-title-chinese { color: #f0c040; font-size: 1.15rem; font-weight: 600; margin-bottom: 15px; }
.term-modal-body { color: #c0c0d0; font-size: 1.05rem; line-height: 1.7; }
.term-modal-body-chinese { color: #a0c0a0; font-size: 1rem; line-height: 1.7; margin-top: 10px; padding-top: 10px; border-top: 1px solid #0f3460; }
/* Explanation Media */
.explanation-media { margin-top: 16px; display: flex; flex-direction: column; gap: 14px; }
.explanation-image { text-align: center; background: #16213e; border-radius: 10px; padding: 12px; border: 1px solid #0f3460; }
.explanation-image img { max-width: 100%; max-height: 280px; border-radius: 8px; object-fit: contain; }
.explanation-image .img-caption { margin-top: 6px; font-size: 0.8rem; color: #a0a0c0; font-style: italic; }
.explanation-video { display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #1a1a3e, #16213e); border: 1px solid #e94560; border-radius: 10px; padding: 12px 16px; text-decoration: none; transition: all 0.3s; }
.explanation-video:hover { background: linear-gradient(135deg, #2a1a3e, #261a3e); transform: translateY(-2px); box-shadow: 0 4px 15px rgba(233, 69, 96, 0.3); }
.explanation-video .yt-icon { flex-shrink: 0; width: 42px; height: 30px; background: #e94560; border-radius: 6px; display: flex; align-items: center; justify-content: center; }
.explanation-video .yt-icon::after { content: ''; display: block; width: 0; height: 0; border-style: solid; border-width: 7px 0 7px 12px; border-color: transparent transparent transparent #fff; }
.explanation-video .yt-text { flex: 1; }
.explanation-video .yt-label { font-size: 0.7rem; color: #e94560; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
.explanation-video .yt-title { font-size: 0.95rem; color: #e0e0e0; margin-top: 2px; line-height: 1.3; }
/* Term Modal Image/Video */
.term-modal-image { margin-top: 14px; text-align: center; background: #1a1a2e; border-radius: 8px; padding: 10px; border: 1px solid #0f3460; }
.term-modal-image img { max-width: 100%; max-height: 200px; border-radius: 6px; object-fit: contain; }
.term-modal-video { display: flex; align-items: center; gap: 10px; margin-top: 14px; background: linear-gradient(135deg, #1a1a3e, #16213e); border: 1px solid #e94560; border-radius: 8px; padding: 10px 14px; text-decoration: none; transition: all 0.3s; }
.term-modal-video:hover { background: linear-gradient(135deg, #2a1a3e, #261a3e); box-shadow: 0 4px 12px rgba(233, 69, 96, 0.3); }
.term-modal-video .yt-icon { flex-shrink: 0; width: 36px; height: 26px; background: #e94560; border-radius: 5px; display: flex; align-items: center; justify-content: center; }
.term-modal-video .yt-icon::after { content: ''; display: block; width: 0; height: 0; border-style: solid; border-width: 6px 0 6px 10px; border-color: transparent transparent transparent #fff; }
.term-modal-video .yt-label { font-size: 0.7rem; color: #e94560; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
.term-modal-video .yt-title { font-size: 0.85rem; color: #e0e0e0; margin-top: 2px; }
/* Code blocks */
.question-text code, .option code, .explanation code { background: #0f3460; color: #4ecca3; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 0.92em; }
.question-text pre, .explanation pre { background: #0f3460; padding: 12px; border-radius: 8px; overflow-x: auto; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 0.92em; line-height: 1.5; color: #4ecca3; }
/* AI Lookup Modal */
.ai-modal-overlay { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.75); z-index: 1100; animation: fadeIn 0.3s ease; }
.ai-modal-overlay.show { display: block; }
.ai-modal { background: #16213e; border: 2px solid #e94560; border-radius: 16px; padding: 0; max-width: 620px; width: 92%; max-height: 80vh; box-shadow: 0 16px 50px rgba(0,0,0,0.6); position: fixed; animation: fadeIn 0.3s ease; display: flex; flex-direction: column; z-index: 1101; }
.ai-modal-header { padding: 20px 25px 15px; border-bottom: 1px solid #0f3460; flex-shrink: 0; cursor: grab; user-select: none; }
.ai-modal-header:active { cursor: grabbing; }
.ai-modal-close { position: absolute; top: 12px; right: 16px; font-size: 1.6rem; color: #a0a0c0; cursor: pointer; border: none; background: none; transition: color 0.3s; z-index: 10; }
.ai-modal-close:hover { color: #e94560; }
.ai-modal-badge { display: inline-block; background: linear-gradient(135deg, #e94560, #c23152); color: #fff; padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.ai-modal-query { color: #45b7d1; font-size: 1.15rem; font-weight: 700; margin-top: 10px; line-height: 1.4; }
.ai-modal-body { padding: 20px 25px 25px; overflow-y: auto; height: 400px; flex-shrink: 0; color: #d0d0e0; font-size: 1.05rem; line-height: 1.8; word-wrap: break-word; }
.ai-modal-body h1, .ai-modal-body h2, .ai-modal-body h3 { color: #45b7d1; margin: 16px 0 8px; line-height: 1.4; }
.ai-modal-body h1 { font-size: 1.3rem; } .ai-modal-body h2 { font-size: 1.15rem; } .ai-modal-body h3 { font-size: 1.05rem; }
.ai-modal-body p { margin: 8px 0; }
.ai-modal-body ul, .ai-modal-body ol { margin: 8px 0 8px 20px; padding-left: 10px; }
.ai-modal-body li { margin: 4px 0; }
.ai-modal-body code { background: #0f3460; color: #4ecca3; padding: 2px 6px; border-radius: 4px; font-size: 0.95em; }
.ai-modal-body pre { background: #0f3460; padding: 12px; border-radius: 8px; overflow-x: auto; margin: 10px 0; }
.ai-modal-body pre code { background: none; padding: 0; }
.ai-modal-body strong, .ai-modal-body b { color: #f0c040; }
.ai-modal-body em, .ai-modal-body i { color: #a0c0e0; }
.ai-modal-body blockquote { border-left: 3px solid #e94560; margin: 10px 0; padding: 8px 16px; color: #a0a0c0; background: rgba(15,52,96,0.5); border-radius: 0 8px 8px 0; }
.ai-modal-body hr { border: none; border-top: 1px solid #0f3460; margin: 12px 0; }
.ai-modal-body::-webkit-scrollbar { width: 8px; }
.ai-modal-body::-webkit-scrollbar-track { background: #0f3460; border-radius: 4px; }
.ai-modal-body::-webkit-scrollbar-thumb { background: #45b7d1; border-radius: 4px; }
.ai-modal-body::-webkit-scrollbar-thumb:hover { background: #7dd3e8; }
/* Ask Question Box */
.ai-modal-askbox { display: flex; align-items: center; gap: 10px; padding: 10px 20px; background: #1a1a2e; border-bottom: 1px solid #0f3460; flex-shrink: 0; position: sticky; top: 0; z-index: 5; }
.ai-modal-askbox label { color: #f0c040; font-size: 0.85rem; font-weight: 700; white-space: nowrap; letter-spacing: 0.5px; }
.ai-modal-askbox input { flex: 1; padding: 8px 12px; border: 2px solid #0f3460; border-radius: 8px; background: #16213e; color: #e0e0e0; font-size: 0.95rem; outline: none; transition: border-color 0.3s; }
.ai-modal-askbox input:focus { border-color: #45b7d1; }
.ai-modal-askbox input::placeholder { color: #606080; }
.ai-modal-askbox button { padding: 8px 18px; background: linear-gradient(135deg, #e94560, #c23152); color: #fff; border: none; border-radius: 8px; font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: all 0.3s; white-space: nowrap; }
.ai-modal-askbox button:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(233,69,96,0.4); }
.ai-loading { display: flex; align-items: center; gap: 12px; color: #a0a0c0; font-style: italic; }
/* History Nav */
.ai-modal-nav { display: flex; align-items: center; gap: 8px; padding: 8px 20px; background: #1a1a2e; border-bottom: 1px solid #0f3460; flex-shrink: 0; }
.ai-modal-nav button { padding: 6px 14px; background: #0f3460; color: #a0a0c0; border: 1px solid #45b7d1; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 4px; }
.ai-modal-nav button:hover:not(:disabled) { background: #45b7d1; color: #1a1a2e; }
.ai-modal-nav button:disabled { opacity: 0.35; cursor: not-allowed; border-color: #0f3460; }
.ai-modal-nav .nav-position { flex: 1; text-align: center; font-size: 0.8rem; color: #a0a0c0; letter-spacing: 0.5px; }
.ai-loading .spinner { width: 24px; height: 24px; border: 3px solid #0f3460; border-top: 3px solid #e94560; border-radius: 50%; animation: spin 0.8s linear infinite; }
/* Mobile */
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
  <h1>AI, ML & Python Knowledge Portal</h1>
  <div class="subtitle">Comprehensive Study Q&A | 9 Topics | 1800 Questions</div>
</div>

<div class="tabs" id="tabs"></div>

<div class="main">
  <div class="score-bar" id="scoreBar">
    <div class="score-item"><div class="label">Correct</div><div class="value correct" id="scoreCorrect">0</div></div>
    <div class="score-item"><div class="label">Wrong</div><div class="value wrong" id="scoreWrong">0</div></div>
    <div class="score-item"><div class="label">Answered</div><div class="value total" id="scoreAnswered">0</div></div>
    <div class="score-item"><div class="label">Remaining</div><div class="value" id="scoreRemaining">200</div></div>
    <div class="score-item" style="flex: 1; max-width: 200px;">
      <div class="label">Progress</div>
      <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
    </div>
  </div>
  <div class="question-card" id="questionCard">
    <div class="no-questions">
      <h2>Select a topic above to begin</h2>
      <p>Choose from Python, Data Structures, ML, Deep Learning, NLP, Computer Vision, Data Analysis, AI Concepts, or Generative AI</p>
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
      <label for="aiAskInput">Ask AI</label>
      <input type="text" id="aiAskInput" placeholder="Type your question here..." onkeydown="if(event.key==='Enter')submitAiQuestion()">
      <button onclick="submitAiQuestion()">Submit</button>
    </div>
    <div class="ai-modal-body" id="aiModalBody">
      <div class="ai-loading"><div class="spinner"></div>Asking AI...</div>
    </div>
  </div>
</div>

<script src="terms_glossary.js"></script>
<script src="q_py.js"></script>
<script src="q_ds.js"></script>
<script src="q_ml.js"></script>
<script src="q_dl.js"></script>
<script src="q_nlp.js"></script>
<script src="q_cv.js"></script>
<script src="q_da.js"></script>
<script src="q_ai.js"></script>
<script src="q_gp.js"></script>

<script>
// Build term lookup map
const termLookup = [];
for (const key in termsGlossary) {
  const t = termsGlossary[key];
  termLookup.push({ name: t.term, key: key });
  const shortName = t.term.replace(/\s*\(.*?\)\s*/g, '').trim();
  if (shortName !== t.term && shortName.length > 3) {
    termLookup.push({ name: shortName, key: key });
  }
}
termLookup.sort((a, b) => b.name.length - a.name.length);

function highlightTerms(text) {
  if (!text) return text;
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
      const charBefore = idx > 0 ? lowerText[idx - 1] : ' ';
      const charAfter = end < lowerText.length ? lowerText[end] : ' ';
      const isBoundaryBefore = /[\s,.:;!?()/"'\-]/.test(charBefore) || idx === 0;
      const isBoundaryAfter = /[\s,.:;!?()/"'\-]/.test(charAfter) || end === lowerText.length;
      if (isBoundaryBefore && isBoundaryAfter) {
        let overlaps = false;
        for (const r of replacements) { if (idx < r.end && end > r.start) { overlaps = true; break; } }
        if (!overlaps) { replacements.push({ start: idx, end: end, key: entry.key, name: entry.name }); }
      }
      searchFrom = idx + 1;
    }
  }
  replacements.sort((a, b) => b.start - a.start);
  for (const r of replacements) {
    const original = result.substring(r.start, r.end);
    const escaped = r.key.replace(/'/g, "\\'");
    result = result.substring(0, r.start) +
      '<span class="term-highlight" onclick="askAiAboutTerm(\'' + escaped + '\')" title="Click to ask AI">' + original + '</span>' +
      result.substring(r.end);
  }
  return result;
}

const sections = [
  { id: 'PY', label: 'Python', data: () => questionsPY },
  { id: 'DS', label: 'Data Structures', data: () => questionsDS },
  { id: 'ML', label: 'Machine Learning', data: () => questionsML },
  { id: 'DL', label: 'Deep Learning', data: () => questionsDL },
  { id: 'NLP', label: 'NLP', data: () => questionsNLP },
  { id: 'CV', label: 'Computer Vision', data: () => questionsCV },
  { id: 'DA', label: 'Data Analysis', data: () => questionsDA },
  { id: 'AI', label: 'AI Concepts', data: () => questionsAI },
  { id: 'GP', label: 'Generative AI', data: () => questionsGP }
];

let currentSection = null;
let currentQuestion = null;
let selectedOption = -1;
let answered = false;
let scores = {};
let questionHistory = {};
let questionHistoryIdx = {};

sections.forEach(s => {
  scores[s.id] = { correct: 0, wrong: 0, answered: new Set(), pool: [] };
  questionHistory[s.id] = [];
  questionHistoryIdx[s.id] = -1;
});

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
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function selectSection(sectionId) {
  currentSection = sectionId;
  const section = sections.find(s => s.id === sectionId);
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${sectionId}`).classList.add('active');
  if (scores[sectionId].pool.length === 0) {
    try {
      const allQ = section.data();
      scores[sectionId].pool = shuffle(allQ);
    } catch(e) {
      document.getElementById('questionCard').innerHTML = `<div class="no-questions"><h2>Loading...</h2><p>Questions for ${sectionId} are loading.</p></div>`;
      return;
    }
  }
  answered = false;
  selectedOption = -1;
  showRandomQuestion();
}

function pickRandomQuestion() {
  const score = scores[currentSection];
  const pool = score.pool;
  let unanswered = pool.filter(q => !score.answered.has(q.id));
  return unanswered.length > 0 ? unanswered[Math.floor(Math.random() * unanswered.length)] : pool[Math.floor(Math.random() * pool.length)];
}

function showRandomQuestion() {
  const sectionId = currentSection;
  const history = questionHistory[sectionId];
  const idx = questionHistoryIdx[sectionId];
  if (idx < history.length - 1) { questionHistory[sectionId] = history.slice(0, idx + 1); }
  const q = pickRandomQuestion();
  questionHistory[sectionId].push(q);
  questionHistoryIdx[sectionId] = questionHistory[sectionId].length - 1;
  currentQuestion = q; answered = false; selectedOption = -1;
  updateScoreDisplay(); renderQuestion(q);
}

function showPreviousQuestion() {
  const sectionId = currentSection;
  if (!sectionId) return;
  const idx = questionHistoryIdx[sectionId];
  if (idx <= 0) return;
  questionHistoryIdx[sectionId] = idx - 1;
  const q = questionHistory[sectionId][idx - 1];
  currentQuestion = q; answered = false; selectedOption = -1;
  updateScoreDisplay(); renderQuestion(q);
}

function showNextQuestion() {
  const sectionId = currentSection;
  if (!sectionId) return;
  const idx = questionHistoryIdx[sectionId];
  const history = questionHistory[sectionId];
  if (idx < history.length - 1) {
    questionHistoryIdx[sectionId] = idx + 1;
    const q = history[idx + 1];
    currentQuestion = q; answered = false; selectedOption = -1;
    updateScoreDisplay(); renderQuestion(q);
  } else { showRandomQuestion(); }
}

function updateScoreDisplay() {
  const score = scores[currentSection];
  document.getElementById('scoreCorrect').textContent = score.correct;
  document.getElementById('scoreWrong').textContent = score.wrong;
  document.getElementById('scoreAnswered').textContent = score.answered.size;
  const total = score.pool.length || 200;
  document.getElementById('scoreRemaining').textContent = Math.max(0, total - score.answered.size);
  document.getElementById('progressFill').style.width = (score.answered.size / total * 100) + '%';
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
  if (q.diagram) { html += `<div class="question-diagram">${q.diagram}</div>`; }
  html += `<div class="options" id="optionsContainer">`;
  q.options.forEach((opt, i) => {
    const chineseOpt = q.optionsChinese && q.optionsChinese[i] ? `<span class="option-chinese">${q.optionsChinese[i]}</span>` : '';
    html += `<div class="option" data-idx="${i}" onclick="selectOption(${i})">${highlightTerms(opt)}${chineseOpt}</div>`;
  });
  html += `</div>`;
  const canGoPrev = questionHistoryIdx[currentSection] > 0;
  html += `
    <div class="btn-row">
      <button class="btn btn-prev" onclick="showPreviousQuestion()" ${canGoPrev ? '' : 'disabled'}>&larr; Previous</button>
      <button class="btn btn-answer" id="btnAnswer" onclick="revealAnswer()">Show Answer</button>
      <button class="btn btn-next" onclick="showNextQuestion()">Next &rarr;</button>
      <button class="btn btn-reset" onclick="resetSection()">Reset</button>
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
  document.querySelectorAll('.option').forEach(o => {
    o.classList.add('disabled');
    const idx = parseInt(o.dataset.idx);
    if (idx === q.answer) o.classList.add('correct');
    if (hasSelection && idx === selectedOption && idx !== q.answer) o.classList.add('wrong');
  });
  if (isNew && hasSelection) {
    score.answered.add(q.id);
    if (selectedOption === q.answer) score.correct++; else score.wrong++;
  }
  updateScoreDisplay();
  const expEl = document.getElementById('explanation');
  const answerChinese = q.optionsChinese && q.optionsChinese[q.answer] ? ` / ${q.optionsChinese[q.answer]}` : '';
  let resultLabel = !hasSelection ? 'Answer Revealed' : (selectedOption === q.answer ? 'Correct!' : 'Incorrect');
  let expHtml = `
    <h3>${resultLabel} - The answer is ${highlightTerms(q.options[q.answer])}${answerChinese}</h3>
    <p>${highlightTerms(q.explanation)}</p>
    ${q.explanationChinese ? `<p class="explanation-chinese">${q.explanationChinese}</p>` : ''}
  `;
  if (q.diagram) { expHtml += `<div class="diagram-explain">${q.diagram}</div>`; }
  if ((q.image && q.image.length > 0) || (q.youtube && q.youtube.length > 0)) {
    expHtml += `<div class="explanation-media">`;
    if (q.image && q.image.length > 0) { expHtml += `<div class="explanation-image"><img src="${q.image}" alt="Illustration" onerror="this.parentElement.style.display='none'"><div class="img-caption">Reference</div></div>`; }
    if (q.youtube && q.youtube.length > 0) { expHtml += `<a class="explanation-video" href="${q.youtube}" target="_blank" rel="noopener noreferrer"><div class="yt-icon"></div><div class="yt-text"><div class="yt-label">YouTube</div><div class="yt-title">${q.youtubeTitle || 'Watch Video'}</div></div></a>`; }
    expHtml += `</div>`;
  }
  if (q.terms && q.terms.length > 0) {
    expHtml += `<div class="related-terms"><h4>Related Terms</h4>`;
    q.terms.forEach(termKey => { const td = termsGlossary[termKey]; if (td) expHtml += `<span class="term-link" onclick="showTermModal('${termKey}')">${td.term}</span>`; });
    expHtml += `</div>`;
  }
  expEl.innerHTML = expHtml;
  expEl.classList.add('show');
  document.getElementById('btnAnswer').disabled = true;
  document.getElementById('btnAnswer').style.opacity = '0.5';
}

function resetSection() {
  if (!currentSection) return;
  scores[currentSection] = { correct: 0, wrong: 0, answered: new Set(), pool: shuffle(scores[currentSection].pool) };
  questionHistory[currentSection] = [];
  questionHistoryIdx[currentSection] = -1;
  showRandomQuestion();
}

// Term modal
function showTermModal(termKey) {
  const td = termsGlossary[termKey]; if (!td) return;
  document.getElementById('termModalSection').textContent = td.section;
  document.getElementById('termModalTitle').textContent = td.term;
  document.getElementById('termModalTitleChinese').textContent = td.termChinese || '';
  document.getElementById('termModalTitleChinese').style.display = td.termChinese ? 'block' : 'none';
  document.getElementById('termModalBody').textContent = td.definition;
  document.getElementById('termModalBodyChinese').textContent = td.definitionChinese || '';
  document.getElementById('termModalBodyChinese').style.display = td.definitionChinese ? 'block' : 'none';
  const imgEl = document.getElementById('termModalImage');
  if (td.image) { imgEl.innerHTML = `<img src="${td.image}" alt="${td.term}" onerror="this.parentElement.style.display='none'">`; imgEl.style.display = 'block'; } else { imgEl.style.display = 'none'; }
  const vidEl = document.getElementById('termModalVideo');
  if (td.youtube) { vidEl.innerHTML = `<a class="term-modal-video" href="${td.youtube}" target="_blank" rel="noopener noreferrer"><div class="yt-icon"></div><div class="yt-text"><div class="yt-label">YouTube</div><div class="yt-title">${td.youtubeTitle || 'Watch Video'}</div></div></a>`; vidEl.style.display = 'block'; } else { vidEl.style.display = 'none'; }
  document.getElementById('termModalOverlay').classList.add('show');
}
function closeTermModal(event) { if (event && event.target !== event.currentTarget) return; document.getElementById('termModalOverlay').classList.remove('show'); }

// Markdown renderer
function renderMarkdown(text) {
  if (!text) return '';
  let html = text;
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/^---$/gm, '<hr>');
  html = html.replace(/^[\*\-] (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');
  html = html.replace(/\n\n+/g, '</p><p>');
  html = html.replace(/(?<!<\/h[123]>|<\/pre>|<\/ul>|<\/blockquote>|<\/li>|<hr>|<\/p>|<p>)\n/g, '<br>');
  html = '<p>' + html + '</p>';
  html = html.replace(/<p>\s*<\/p>/g, '');
  return html;
}

// AI Popup History
const AI_HISTORY_MAX = 100;
const AI_HISTORY_KEY = 'aiPopupHistory_aiml';
function loadAiHistory() { try { const s = localStorage.getItem(AI_HISTORY_KEY); if (s) return JSON.parse(s); } catch(e) {} return []; }
function saveAiHistory() { try { localStorage.setItem(AI_HISTORY_KEY, JSON.stringify(aiHistory)); } catch(e) {} }
let aiHistory = loadAiHistory();
let aiHistoryIndex = aiHistory.length > 0 ? aiHistory.length - 1 : -1;
let aiCurrentStreamAbort = null;

function updateAiNavButtons() {
  document.getElementById('aiNavPrev').disabled = aiHistoryIndex <= 0;
  document.getElementById('aiNavNext').disabled = aiHistoryIndex >= aiHistory.length - 1;
  document.getElementById('aiNavPosition').textContent = aiHistory.length > 0 ? (aiHistoryIndex + 1) + ' / ' + aiHistory.length : '';
}

function aiHistoryBack() {
  if (aiHistoryIndex <= 0) return;
  if (aiCurrentStreamAbort) { aiCurrentStreamAbort.abort(); aiCurrentStreamAbort = null; }
  aiHistoryIndex--;
  const entry = aiHistory[aiHistoryIndex];
  document.getElementById('aiModalQuery').textContent = entry.query;
  document.getElementById('aiModalBody').innerHTML = renderMarkdown(entry.responseText);
  document.getElementById('aiModalBody').scrollTop = 0;
  updateAiNavButtons();
}

function aiHistoryForward() {
  if (aiHistoryIndex >= aiHistory.length - 1) return;
  if (aiCurrentStreamAbort) { aiCurrentStreamAbort.abort(); aiCurrentStreamAbort = null; }
  aiHistoryIndex++;
  const entry = aiHistory[aiHistoryIndex];
  document.getElementById('aiModalQuery').textContent = entry.query;
  document.getElementById('aiModalBody').innerHTML = renderMarkdown(entry.responseText);
  document.getElementById('aiModalBody').scrollTop = 0;
  updateAiNavButtons();
}

function streamAiQuery(displayName, query) {
  if (aiCurrentStreamAbort) { aiCurrentStreamAbort.abort(); aiCurrentStreamAbort = null; }
  if (aiHistoryIndex < aiHistory.length - 1) { aiHistory = aiHistory.slice(0, aiHistoryIndex + 1); }
  const historyEntry = { displayName, query, responseText: '' };
  aiHistory.push(historyEntry);
  if (aiHistory.length > AI_HISTORY_MAX) aiHistory = aiHistory.slice(aiHistory.length - AI_HISTORY_MAX);
  aiHistoryIndex = aiHistory.length - 1;
  saveAiHistory(); updateAiNavButtons();
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
          if (done) { historyEntry.responseText = rawText; aiCurrentStreamAbort = null; bodyEl.innerHTML = renderMarkdown(rawText); saveAiHistory(); updateAiNavButtons(); return; }
          rawText += decoder.decode(value, { stream: true });
          historyEntry.responseText = rawText;
          bodyEl.innerHTML = renderMarkdown(rawText);
          readChunk();
        }).catch(err => { if (err.name === 'AbortError') return; rawText += '\n\n[Error: ' + err.message + ']'; bodyEl.innerHTML = renderMarkdown(rawText); });
      }
      readChunk();
    })
    .catch(err => {
      if (err.name === 'AbortError') return;
      const errText = 'Error: Could not reach AI backend. Make sure PHP server and ollama are running.\n\n' + err.message;
      historyEntry.responseText = errText;
      bodyEl.innerHTML = renderMarkdown(errText);
    });
}

function askAiAboutTerm(termKey) {
  const td = termsGlossary[termKey]; if (!td) return;
  const query = 'in the context of AI/Machine Learning/Python, what is ' + td.term + ', explain in 200 words, also translate the explanation to simplified chinese';
  streamAiQuery(td.term, query);
}

function closeAiModal(event) { if (event && event.target !== event.currentTarget) return; document.getElementById('aiModalOverlay').classList.remove('show'); }

function submitAiQuestion() {
  const input = document.getElementById('aiAskInput');
  const question = input.value.trim();
  if (!question) return;
  const query = 'please answer: ' + question + ', explain in 200 words, also translate to simplified chinese';
  streamAiQuery(question, query);
  input.value = '';
}

function askAiAboutText(text) {
  if (!text || text.trim().length === 0) return;
  const trimmed = text.trim();
  const query = 'in the context of AI/ML/Python, what is ' + trimmed + ', explain in 200 words, also translate to simplified chinese';
  streamAiQuery(trimmed, query);
}

// Text selection triggers AI lookup
document.addEventListener('mouseup', function(e) {
  setTimeout(function() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const selectedText = sel.toString().trim();
    if (selectedText.length < 2 || selectedText.length > 200) return;
    const anchorNode = sel.anchorNode;
    if (!anchorNode) return;
    const qCard = document.getElementById('questionCard');
    const expEl = document.getElementById('explanation');
    const aiBody = document.getElementById('aiModalBody');
    const termOverlay = document.getElementById('termModalOverlay');
    if ((qCard && qCard.contains(anchorNode)) || (expEl && expEl.contains(anchorNode)) || (aiBody && aiBody.contains(anchorNode)) || (termOverlay && termOverlay.contains(anchorNode))) {
      askAiAboutText(selectedText);
      sel.removeAllRanges();
    }
  }, 10);
});

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeAiModal(); closeTermModal(); } });

// Draggable AI Modal
(function() {
  const modal = document.querySelector('.ai-modal');
  const header = document.querySelector('.ai-modal-header');
  let isDragging = false, dragOffsetX = 0, dragOffsetY = 0;
  function saveModalPosition() { const r = modal.getBoundingClientRect(); localStorage.setItem('aiModalPos_aiml', JSON.stringify({ left: r.left, top: r.top })); }
  function restoreModalPosition() {
    const saved = localStorage.getItem('aiModalPos_aiml');
    if (saved) { try { const p = JSON.parse(saved); modal.style.left = Math.max(0, Math.min(p.left, window.innerWidth - modal.offsetWidth)) + 'px'; modal.style.top = Math.max(0, Math.min(p.top, window.innerHeight - modal.offsetHeight)) + 'px'; return; } catch(e) {} }
    modal.style.left = Math.max(0, (window.innerWidth - modal.offsetWidth) / 2) + 'px';
    modal.style.top = Math.max(0, (window.innerHeight - modal.offsetHeight) / 2) + 'px';
  }
  header.addEventListener('mousedown', function(e) { if (e.target.classList.contains('ai-modal-close')) return; isDragging = true; const r = modal.getBoundingClientRect(); dragOffsetX = e.clientX - r.left; dragOffsetY = e.clientY - r.top; e.preventDefault(); });
  document.addEventListener('mousemove', function(e) { if (!isDragging) return; modal.style.left = Math.max(0, Math.min(e.clientX - dragOffsetX, window.innerWidth - modal.offsetWidth)) + 'px'; modal.style.top = Math.max(0, Math.min(e.clientY - dragOffsetY, window.innerHeight - 40)) + 'px'; });
  document.addEventListener('mouseup', function() { if (isDragging) { isDragging = false; saveModalPosition(); } });
  const overlay = document.getElementById('aiModalOverlay');
  new MutationObserver(function(mutations) { mutations.forEach(function(m) { if (m.attributeName === 'class' && overlay.classList.contains('show')) restoreModalPosition(); }); }).observe(overlay, { attributes: true });
})();
</script>
</body>
</html>
