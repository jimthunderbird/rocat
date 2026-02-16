<?php
// Handle image search proxy - fetches first image from Google Image search
if (isset($_GET['img']) && !empty(trim($_GET['img']))) {
    header('Content-Type: application/json; charset=utf-8');
    $keyword = trim($_GET['img']);
    $searchQuery = $keyword . ' computer science artificial intelligence';
    $searchUrl = 'https://www.google.com/search?q=' . urlencode($searchQuery) . '&udm=2&tbs=isz:lt,islt:4mp,ic:color';

    $ch = curl_init($searchUrl);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_USERAGENT => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        CURLOPT_HTTPHEADER => [
            'Accept-Language: en-US,en;q=0.9',
            'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        ],
    ]);
    $html = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    function decodeGoogleUrl($url) {
        $url = preg_replace_callback('/\\\\u([0-9a-fA-F]{4})/', function($m) {
            return mb_convert_encoding(pack('H*', $m[1]), 'UTF-8', 'UTF-16BE');
        }, $url);
        $url = html_entity_decode($url, ENT_QUOTES, 'UTF-8');
        return $url;
    }

    function isGoogleDomain($url) {
        return strpos($url, 'google.com') !== false
            || strpos($url, 'gstatic.com') !== false
            || strpos($url, 'googleapis.com') !== false
            || strpos($url, 'googleusercontent.com') !== false;
    }

    $imageUrls = [];
    $maxImages = 4;
    if ($html && $httpCode === 200) {
        $candidates = [];
        if (preg_match_all('/\["(https?:\/\/[^"]+\.(?:jpg|jpeg|png|gif|webp)[^"]*)",\s*\d+,\s*\d+\]/', $html, $matches)) {
            foreach ($matches[1] as $url) {
                $decoded = decodeGoogleUrl($url);
                if (!isGoogleDomain($decoded)) { $candidates[] = $decoded; }
            }
        }
        if (preg_match_all('/"(https?:\/\/[^"]*\.(?:jpg|jpeg|png|gif|webp)[^"]*)"/', $html, $matches)) {
            foreach ($matches[1] as $url) {
                $decoded = decodeGoogleUrl($url);
                if (!isGoogleDomain($decoded) && strlen($decoded) > 30) { $candidates[] = $decoded; }
            }
        }
        if (preg_match_all('/(https?:\/\/[^\s"\'<>\\\\]+\.(?:jpg|jpeg|png|gif|webp)[^\s"\'<>\\\\]*)/', $html, $matches)) {
            foreach ($matches[1] as $url) {
                $decoded = decodeGoogleUrl($url);
                if (!isGoogleDomain($decoded) && strlen($decoded) > 30) { $candidates[] = $decoded; }
            }
        }
        if (preg_match_all('/"(https?:\/\/encrypted-tbn0\.gstatic\.com\/images\?[^"]+)"/', $html, $matches)) {
            foreach ($matches[1] as $url) { $candidates[] = decodeGoogleUrl($url); }
        }
        if (preg_match_all('/(https?:\/\/encrypted-tbn0\.gstatic\.com\/images\?[^\s"\'<>\\\\]+)/', $html, $matches)) {
            foreach ($matches[1] as $url) { $candidates[] = decodeGoogleUrl($url); }
        }

        $seen = [];
        foreach ($candidates as $url) {
            if (!in_array($url, $seen)) {
                $seen[] = $url;
                $imageUrls[] = $url;
                if (count($imageUrls) >= $maxImages) break;
            }
        }
    }

    echo json_encode(['imageUrl' => !empty($imageUrls) ? $imageUrls[0] : '', 'imageUrls' => $imageUrls, 'searchUrl' => $searchUrl]);
    exit;
}

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
<title>UCSD BS AI Study Q&A</title>
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
.header h1 { font-size: 1.5rem; color: #fff; margin-bottom: 8px; }
.header .subtitle { font-size: 0.85rem; color: #a0a0c0; }
.tabs {
  display: flex; justify-content: center; flex-wrap: wrap; gap: 4px;
  padding: 12px 10px; background: #16213e; border-bottom: 2px solid #0f3460;
  position: sticky; top: 72px; z-index: 99;
}
.tab {
  padding: 10px 18px; border: 2px solid #0f3460; border-radius: 8px;
  cursor: pointer; font-size: 1rem; font-weight: 700; transition: all 0.3s;
  background: #1a1a2e; color: #a0a0c0; user-select: none;
}
.tab:hover { background: #0f3460; color: #fff; transform: translateY(-2px); }
.tab.active { background: #e94560; color: #fff; border-color: #e94560; box-shadow: 0 4px 15px rgba(233, 69, 96, 0.4); }
.tab .tab-label { display: block; font-size: 0.65rem; font-weight: 400; margin-top: 2px; opacity: 0.8; }
.main { max-width: 900px; margin: 0 auto; padding: 20px; }
.score-bar {
  display: flex; justify-content: space-between; align-items: center;
  background: #16213e; border-radius: 12px; padding: 12px 20px;
  margin-bottom: 20px; border: 1px solid #0f3460;
}
.score-item { text-align: center; }
.score-item .label { font-size: 0.75rem; color: #a0a0c0; text-transform: uppercase; letter-spacing: 1px; }
.score-item .value { font-size: 1.4rem; font-weight: 700; color: #fff; }
.score-item .value.correct { color: #4ecca3; }
.score-item .value.wrong { color: #e94560; }
.score-item .value.total { color: #f0c040; }
.progress-bar { width: 100%; height: 6px; background: #0f3460; border-radius: 3px; margin-top: 8px; overflow: hidden; }
.progress-fill { height: 100%; background: linear-gradient(90deg, #4ecca3, #45b7d1); border-radius: 3px; transition: width 0.5s ease; }
.question-card {
  background: #16213e; border-radius: 16px; padding: 30px;
  border: 1px solid #0f3460; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
.question-number { display: inline-block; background: #e94560; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin-bottom: 15px; }
.question-topic { display: inline-block; background: #0f3460; color: #45b7d1; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; margin-left: 8px; margin-bottom: 15px; }
.question-text { font-size: 1.15rem; line-height: 1.6; color: #fff; margin-bottom: 8px; }
.question-text-chinese { font-size: 1.05rem; line-height: 1.6; color: #f0c040; margin-bottom: 25px; }
.question-diagram { text-align: center; margin-bottom: 20px; padding: 15px; background: #1a1a2e; border-radius: 10px; border: 1px solid #0f3460; }
.question-diagram svg { max-width: 100%; height: auto; }
.options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 25px; }
.option {
  padding: 15px 20px; background: #1a1a2e; border: 2px solid #0f3460;
  border-radius: 10px; cursor: pointer; font-size: 1rem; line-height: 1.5;
  transition: all 0.3s; position: relative;
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
.btn-next { background: linear-gradient(135deg, #4ecca3, #38a88a); color: #fff; }
.btn-next:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(78,204,163,0.4); }
.btn-reset { background: linear-gradient(135deg, #f0c040, #d4a017); color: #1a1a2e; }
.btn-reset:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(240,192,64,0.4); }
.explanation { margin-top: 20px; padding: 20px; background: #1a1a2e; border-radius: 12px; border-left: 4px solid #4ecca3; display: none; }
.explanation.show { display: block; animation: fadeIn 0.4s ease; }
.explanation h3 { color: #4ecca3; margin-bottom: 10px; font-size: 1.05rem; }
.explanation p { line-height: 1.7; font-size: 1rem; color: #c0c0d0; }
.explanation .explanation-chinese { line-height: 1.7; font-size: 0.95rem; color: #f0c040; margin-top: 8px; padding-top: 8px; border-top: 1px solid #0f3460; }
.explanation .diagram-explain { margin-top: 15px; text-align: center; padding: 10px; background: #16213e; border-radius: 8px; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.no-questions { text-align: center; padding: 60px 20px; color: #a0a0c0; }
.no-questions h2 { margin-bottom: 10px; color: #fff; }
.related-terms { margin-top: 18px; padding: 15px; background: #16213e; border-radius: 10px; border: 1px solid #0f3460; }
.related-terms h4 { color: #f0c040; font-size: 0.95rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
.term-link {
  display: inline-block; background: linear-gradient(135deg, #0f3460, #1a1a4e); color: #45b7d1;
  padding: 6px 14px; border-radius: 20px; margin: 4px; font-size: 0.9rem; font-weight: 600;
  cursor: pointer; border: 1px solid #45b7d1; transition: all 0.3s; text-decoration: none;
}
.term-link:hover { background: #45b7d1; color: #1a1a2e; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(69, 183, 209, 0.3); }
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
.term-modal-image { margin-top: 14px; text-align: center; background: #1a1a2e; border-radius: 8px; padding: 10px; border: 1px solid #0f3460; }
.term-modal-image img { max-width: 100%; max-height: 200px; border-radius: 6px; object-fit: contain; }
.term-modal-video { display: flex; align-items: center; gap: 10px; margin-top: 14px; background: linear-gradient(135deg, #1a1a3e, #16213e); border: 1px solid #e94560; border-radius: 8px; padding: 10px 14px; text-decoration: none; transition: all 0.3s; }
.term-modal-video:hover { background: linear-gradient(135deg, #2a1a3e, #261a3e); box-shadow: 0 4px 12px rgba(233, 69, 96, 0.3); }
.term-modal-video .yt-icon { flex-shrink: 0; width: 36px; height: 26px; background: #e94560; border-radius: 5px; display: flex; align-items: center; justify-content: center; }
.term-modal-video .yt-icon::after { content: ''; display: block; width: 0; height: 0; border-style: solid; border-width: 6px 0 6px 10px; border-color: transparent transparent transparent #fff; }
.term-modal-video .yt-label { font-size: 0.7rem; color: #e94560; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
.term-modal-video .yt-title { font-size: 0.85rem; color: #e0e0e0; margin-top: 2px; }
.code-block { background: #0d1117; border: 1px solid #30363d; border-radius: 8px; padding: 12px 16px; margin: 10px 0; font-family: 'Consolas', 'Courier New', monospace; font-size: 0.9rem; color: #e6edf3; overflow-x: auto; white-space: pre; line-height: 1.5; }
/* Term highlighting */
.term-highlight { color: #45b7d1; font-weight: 700; text-decoration: underline dotted #45b7d1; cursor: pointer; }
.term-highlight:hover { color: #7dd3e8; }
/* AI Modal */
.ai-modal-overlay { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.45); z-index: 1300; justify-content: center; align-items: center; }
.ai-modal-overlay.show { display: flex; }
.ai-modal { background: #16213e; border: 2px solid #e94560; border-radius: 16px; max-width: 682px; width: 96%; max-height: 88vh; box-shadow: 0 12px 40px rgba(0,0,0,0.5); position: relative; display: flex; flex-direction: column; }
.ai-modal-header { padding: 14px 20px; border-bottom: 1px solid #0f3460; display: flex; align-items: center; justify-content: space-between; cursor: grab; }
.ai-modal-header h3 { color: #e94560; font-size: 1rem; flex: 1; }
.ai-modal-close { font-size: 1.6rem; color: #a0a0c0; cursor: pointer; border: none; background: none; }
.ai-modal-close:hover { color: #e94560; }
.ai-modal-body { padding: 20px; overflow-y: auto; height: 440px; color: #c0c0d0; line-height: 1.7; font-size: 1rem; }
.ai-modal-body .ai-loading { color: #45b7d1; font-style: italic; }
/* Mini Tutorial button */
.mini-tutorial-btn { display: inline-block; background: linear-gradient(135deg, #f0c040, #d4a017); color: #1a1a2e; padding: 4px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; margin-left: 8px; margin-bottom: 15px; cursor: pointer; border: none; transition: all 0.3s; }
.mini-tutorial-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(240,192,64,0.4); }
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
}
</style>
</head>
<body>

<div class="header">
  <h1>UCSD BS Artificial Intelligence Study Q&A</h1>
  <div class="subtitle">BS in Artificial Intelligence Curriculum Prep | 9 Sections | 2700 Questions</div>
</div>

<div class="tabs" id="tabs"></div>

<div class="main">
  <div class="score-bar" id="scoreBar">
    <div class="score-item"><div class="label">Correct</div><div class="value correct" id="scoreCorrect">0</div></div>
    <div class="score-item"><div class="label">Wrong</div><div class="value wrong" id="scoreWrong">0</div></div>
    <div class="score-item"><div class="label">Answered</div><div class="value total" id="scoreAnswered">0</div></div>
    <div class="score-item"><div class="label">Remaining</div><div class="value" id="scoreRemaining">300</div></div>
    <div class="score-item" style="flex: 1; max-width: 200px;">
      <div class="label">Progress</div>
      <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
    </div>
  </div>

  <div class="question-card" id="questionCard">
    <div class="no-questions">
      <h2>Select a topic section above to begin</h2>
      <p>Choose from PF, MF, DA, AI, ML, DL, CV, NP, or RL to start studying</p>
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

<!-- AI Modal -->
<div class="ai-modal-overlay" id="aiModalOverlay" onclick="closeAiModal(event)">
  <div class="ai-modal" onclick="event.stopPropagation()">
    <div class="ai-modal-header">
      <h3 id="aiModalTitle">AI Lookup</h3>
      <button class="ai-modal-close" onclick="closeAiModal()">&times;</button>
    </div>
    <div class="ai-modal-body" id="aiModalBody">
      <p class="ai-loading">Select a term to look up...</p>
    </div>
  </div>
</div>

<script src="terms_glossary.js"></script>
<script src="q_pf.js"></script>
<script src="q_mf.js"></script>
<script src="q_da.js"></script>
<script src="q_ai.js"></script>
<script src="q_ml.js"></script>
<script src="q_dl.js"></script>
<script src="q_cv.js"></script>
<script src="q_np.js"></script>
<script src="q_rl.js"></script>

<script>
const sections = [
  { id: 'PF', label: 'Programming', data: () => questionsPF },
  { id: 'MF', label: 'Math Found.', data: () => questionsMF },
  { id: 'DA', label: 'DS & Algo', data: () => questionsDA },
  { id: 'AI', label: 'AI Core', data: () => questionsAI },
  { id: 'ML', label: 'Machine Learning', data: () => questionsML },
  { id: 'DL', label: 'Deep Learning', data: () => questionsDL },
  { id: 'CV', label: 'Comp Vision', data: () => questionsCV },
  { id: 'NP', label: 'NLP', data: () => questionsNP },
  { id: 'RL', label: 'Robotics & RL', data: () => questionsRL }
];

let currentSection = null;
let currentQuestions = [];
let currentQuestion = null;
let selectedOption = -1;
let answered = false;
let scores = {};
let aiAbortController = null;

sections.forEach(s => {
  scores[s.id] = { correct: 0, wrong: 0, answered: new Set(), pool: [] };
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
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
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
      document.getElementById('questionCard').innerHTML = `<div class="no-questions"><h2>Loading questions...</h2><p>Questions for ${sectionId} are still loading. Please try again.</p></div>`;
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
  let unanswered = pool.filter(q => !score.answered.has(q.id));
  let q;
  if (unanswered.length > 0) {
    q = unanswered[Math.floor(Math.random() * unanswered.length)];
  } else {
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
  const total = score.pool.length || 300;
  const remaining = total - score.answered.size;
  document.getElementById('scoreRemaining').textContent = Math.max(0, remaining);
  const pct = (score.answered.size / total) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
}

function highlightTerms(text) {
  if (!termsGlossary || !text) return text;
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

function renderQuestion(q) {
  const card = document.getElementById('questionCard');
  const score = scores[currentSection];
  const isReview = score.answered.has(q.id);
  let html = `
    <div class="question-number">Question #${q.id} of ${score.pool.length}</div>
    <span class="question-topic">${currentSection}${isReview ? ' (Review)' : ''}</span>
    <button class="mini-tutorial-btn" onclick="showMiniTutorial()">Mini Tutorial</button>
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
  document.querySelectorAll('.option').forEach(o => {
    o.classList.add('disabled');
    const idx = parseInt(o.dataset.idx);
    if (idx === q.answer) o.classList.add('correct');
    if (hasSelection && idx === selectedOption && idx !== q.answer) o.classList.add('wrong');
  });
  if (isNew && hasSelection) {
    score.answered.add(q.id);
    if (selectedOption === q.answer) score.correct++;
    else score.wrong++;
  }
  updateScoreDisplay();
  const expEl = document.getElementById('explanation');
  const answerChinese = q.optionsChinese && q.optionsChinese[q.answer] ? ` / ${q.optionsChinese[q.answer]}` : '';
  let resultLabel = !hasSelection ? 'Answer Revealed \u7B54\u6848\u63ED\u6653' : (selectedOption === q.answer ? 'Correct! \u6B63\u786E!' : 'Incorrect \u4E0D\u6B63\u786E');
  let expHtml = `
    <h3>${resultLabel} - The answer is ${q.options[q.answer]}${answerChinese}</h3>
    <p>${highlightTerms(q.explanation)}</p>
    ${q.explanationChinese ? `<p class="explanation-chinese">${q.explanationChinese}</p>` : ''}
  `;
  if (q.diagram && q.diagram.length > 0) {
    expHtml += `<div class="diagram-explain">${q.diagram}</div>`;
  }
  if ((q.image && q.image.length > 0) || (q.youtube && q.youtube.length > 0)) {
    expHtml += `<div class="explanation-media">`;
    if (q.image && q.image.length > 0) {
      expHtml += `<div class="explanation-image"><img src="${q.image}" alt="Illustration" onerror="this.parentElement.style.display='none'"><div class="img-caption">Reference illustration</div></div>`;
    }
    if (q.youtube && q.youtube.length > 0) {
      const ytTitle = q.youtubeTitle || 'Watch Related Video';
      expHtml += `<a class="explanation-video" href="${q.youtube}" target="_blank" rel="noopener noreferrer"><div class="yt-icon"></div><div class="yt-text"><div class="yt-label">YouTube Video</div><div class="yt-title">${ytTitle}</div></div></a>`;
    }
    expHtml += `</div>`;
  }
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
  document.getElementById('btnAnswer').style.display = 'none';
  document.getElementById('btnNext').style.display = 'inline-block';
}

function resetSection() {
  if (!currentSection) return;
  scores[currentSection] = { correct: 0, wrong: 0, answered: new Set(), pool: scores[currentSection].pool };
  scores[currentSection].pool = shuffle(scores[currentSection].pool);
  showRandomQuestion();
}

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
  const imgEl = document.getElementById('termModalImage');
  if (termData.image && termData.image.length > 0) {
    imgEl.innerHTML = `<img src="${termData.image}" alt="${termData.term}" onerror="this.parentElement.style.display='none'">`;
    imgEl.style.display = 'block';
  } else { imgEl.style.display = 'none'; }
  const vidEl = document.getElementById('termModalVideo');
  if (termData.youtube && termData.youtube.length > 0) {
    const ytTitle = termData.youtubeTitle || 'Watch Video About ' + termData.term;
    vidEl.innerHTML = `<a class="term-modal-video" href="${termData.youtube}" target="_blank" rel="noopener noreferrer"><div class="yt-icon"></div><div class="yt-text"><div class="yt-label">YouTube Video</div><div class="yt-title">${ytTitle}</div></div></a>`;
    vidEl.style.display = 'block';
  } else { vidEl.style.display = 'none'; }
  document.getElementById('termModalOverlay').classList.add('show');
}

function closeTermModal(event) {
  if (event && event.target !== event.currentTarget) return;
  document.getElementById('termModalOverlay').classList.remove('show');
}

function closeAiModal(event) {
  if (event && event.target !== event.currentTarget) return;
  if (aiAbortController) { aiAbortController.abort(); aiAbortController = null; }
  document.getElementById('aiModalOverlay').classList.remove('show');
}

function renderMarkdown(text) {
  let html = text
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^---$/gm, '<hr>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
  return html;
}

async function streamAiQuery(displayName, query) {
  document.getElementById('aiModalTitle').textContent = displayName;
  document.getElementById('aiModalBody').innerHTML = '<p class="ai-loading">Loading...</p>';
  document.getElementById('aiModalOverlay').classList.add('show');

  if (aiAbortController) aiAbortController.abort();
  aiAbortController = new AbortController();

  try {
    const response = await fetch(`index.php?q=${encodeURIComponent(query)}`, { signal: aiAbortController.signal });
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';
    const body = document.getElementById('aiModalBody');
    body.innerHTML = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      fullText += decoder.decode(value, { stream: true });
      body.innerHTML = renderMarkdown(fullText);
    }
  } catch (e) {
    if (e.name !== 'AbortError') {
      document.getElementById('aiModalBody').innerHTML = `<p style="color:#e94560;">Error: ${e.message}</p>`;
    }
  }
}

function askAiAboutTerm(termKey) {
  const term = termsGlossary[termKey];
  if (!term) return;
  const query = `in the context of computer science and artificial intelligence, what is ${term.term}, explain to me in 200 words, show me the pronunciation of ${term.term}, also, please translate the explanation to simplified chinese`;
  streamAiQuery(term.term, query);
}

function askAiAboutText(text) {
  const query = `in the context of computer science and artificial intelligence, what is ${text}, explain to me in 200 words, also, please translate the explanation to simplified chinese`;
  streamAiQuery(text, query);
}

function showMiniTutorial() {
  if (!currentQuestion) return;
  const query = `Please give me a tutorial in 400 words explaining the knowledge and related terms behind the question: ${currentQuestion.q}`;
  streamAiQuery('Mini Tutorial', query);
}

// Text selection handler for AI lookup
document.addEventListener('mouseup', () => {
  const sel = window.getSelection();
  const text = sel ? sel.toString().trim() : '';
  if (text.length >= 2 && text.length <= 200) {
    const node = sel.anchorNode;
    if (node && (node.closest && (node.closest('.question-card') || node.closest('.ai-modal-body') || node.closest('.term-modal')))) {
      askAiAboutText(text);
    } else if (node && node.parentElement && (node.parentElement.closest('.question-card') || node.parentElement.closest('.ai-modal-body') || node.parentElement.closest('.term-modal'))) {
      askAiAboutText(text);
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAiModal();
    closeTermModal();
  }
});
</script>
</body>
</html>
