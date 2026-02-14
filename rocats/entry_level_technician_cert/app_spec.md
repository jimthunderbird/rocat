# ASE Entry-Level Technician Certification Study Suite — Technical Specification

**Single Source of Truth for Regenerating This Application**

---

## 1. Project Overview

### Purpose
A comprehensive study suite for students preparing for the **ASE Entry-Level Technician Certification Exams (A1–A8 and G1)**, developed from the perspective of a community college mechanic instructor in San Francisco and San Mateo County, California.

### Target Audience
Entry-level automotive technology students at Skyline College (San Bruno, CA) and City College of San Francisco (CCSF) pursuing the 7-unit Entry Level Technician Certificate.

### Data Sources
- **Primary**: ASE Study Guides from `https://www.ase.com/ase-study-guides`
- **Secondary**: `https://freeasestudyguides.com/`
- **PDF Study Guides**: Stored in `./study_guides/` (downloaded from ASE website)

### Scope — ASE Test Areas Covered
| Code | Subject | Questions | Time |
|------|---------|-----------|------|
| A1 | Engine Repair | 45 scored | 75 min |
| A2 | Automatic Transmission/Transaxle | 45 scored | 75 min |
| A3 | Manual Drive Train and Axles | 40 scored | 60 min |
| A4 | Suspension and Steering | 40 scored | 60 min |
| A5 | Brakes | 45 scored | 75 min |
| A6 | Electrical/Electronic Systems | 50 scored | 90 min |
| A7 | Heating and Air Conditioning | 50 scored | 75 min |
| A8 | Engine Performance | 50 scored | 75 min |
| G1 | Auto Maintenance & Light Repair | — | — |

---

## 2. Directory Structure

```
entry_level_technician_cert/
├── init.prompt                              # Master task/prompt file (tracks task status)
├── app_spec.md                              # THIS FILE — single source of truth
├── entry_level_technician_certificate_summary.txt  # Research summary document
├── entry_level_technician_study_guild.txt    # Study guide topic breakdown
├── ase_youtube_study_videos.txt             # Curated YouTube video links (A1–A8)
│
├── study_guides/                            # Downloaded ASE PDF study guides
│   ├── ASE_CertificationNeedtoKnow_2026.pdf
│   ├── ASE_Automobile_Study_Guide_2026.pdf         # Primary (A1–A9)
│   ├── ASE_MaintenanceLtRepair_Study_Guide_2026.pdf # G1
│   ├── ASE_Collision_Study_Guide_2026.pdf
│   ├── ASE_TransitBus_Study_Guide_2026.pdf
│   ├── ASE_L1_Study_Guide_2026.pdf
│   ├── ASE_L2_Study_Guide_2026.pdf
│   ├── ASE_L3_Study_Guide_2026.pdf
│   ├── ASE_L4_Study_Guide_2026.pdf
│   ├── ASE_PrtsSpclst_Study_Guide_2026.pdf
│   ├── ASE_MedHeavyTruck_Study_Guide_2026.pdf
│   ├── ASE_SchoolBus_Study_Guide_2026_260109_154431.pdf
│   ├── ASE_MilitaryTWV_Study_Guide_2024.pdf
│   ├── ASE_MilitaryFundamentals_Study_Guide_2024_v2.pdf
│   ├── ASE_CNGVehicle_Study_Guide_2026.pdf
│   ├── ASE_AutoServiceConsult_Study_Guide_2026.pdf
│   ├── L1_CV4_2021_v2.pdf
│   ├── L2CV4_2021_210112_141626.pdf
│   └── ASE_L4_CV1_2022.pdf
│
├── videos/                                  # Generated study videos
│   ├── entry_level_A1_Engine_Repair_537.mp4
│   ├── entry_level_Brakes_742.mp4
│   ├── entry_level_Electrical_Electronic_Systems_384.mp4
│   ├── entry_level_Suspension_and_Steering_291.mp4
│   ├── entry_level_Automatic_Transmission_Transaxle_647.mp4
│   └── entry_level_Manual_Drive_Train_and_Axles_483.mp4
│
├── a1_to_a8_terms_knowledge_graph/          # Interactive knowledge graph app
│   └── index.html
│
├── entry_level_tech_rpg/                    # RPG-style study game
│   └── index.html
│
├── ase_study_qa/                            # Main Q&A study application
│   ├── index.php                            # Entry point (PHP + HTML/JS/CSS)
│   ├── index.html                           # Static fallback (no AI features)
│   ├── terms_glossary.js                    # Terms glossary data
│   ├── q_a1.js                              # A1 questions (200)
│   ├── q_a2.js                              # A2 questions (200)
│   ├── q_a3.js                              # A3 questions (200)
│   ├── q_a4.js                              # A4 questions (200)
│   ├── q_a5.js                              # A5 questions (200)
│   ├── q_a6.js                              # A6 questions (200)
│   ├── q_a7.js                              # A7 questions (200)
│   ├── q_a8.js                              # A8 questions (200)
│   └── q_g1.js                              # G1 questions (200)
│
├── generate_video.py                        # Video generation scripts
├── generate_video_brakes.py
├── generate_video_transmission.py
├── generate_video_electrical.py
├── generate_video_suspension.py
├── generate_video_manual_drivetrain.py
│
├── study_notes/
│   └── notes_01.prompt
│
└── init.sh                                  # Initialization script
```

---

## 3. Application 1: ASE Study Q&A (`./ase_study_qa`)

### 3.1 Overview
A single-page web application for practicing ASE certification exam questions with bilingual support (English + Simplified Chinese) and AI-powered term lookup.

### 3.2 Entry Point
- **Primary**: `index.php` (requires PHP server + Ollama for AI features)
- **Fallback**: `index.html` (static, no AI term lookup)

### 3.3 Server Requirements
- PHP 7.4+ with `curl` extension
- Ollama running locally (`http://localhost:11434`) with `gemma2:2b` model
- Run via: `php -S localhost:8000` in the `ase_study_qa/` directory

### 3.4 Data Architecture

#### Question Files (`q_a1.js` through `q_a8.js`, `q_g1.js`)
Each file exports a JavaScript array variable (`questionsA1`, `questionsA2`, etc.) containing 200 question objects per section (1,800 total across all 9 sections).

**Question Object Schema:**
```javascript
{
  id: Number,                    // Unique ID within section (1–200)
  q: String,                     // Question text (English)
  qChinese: String,              // Question text (Simplified Chinese)
  options: [String, String, String, String],  // 4 answer options (English)
  optionsChinese: [String, String, String, String],  // 4 answer options (Chinese)
  answer: Number,                // Correct answer index (0–3)
  explanation: String,           // 50–60 word explanation (English)
  explanationChinese: String,    // Explanation (Simplified Chinese)
  diagram: String,               // Optional SVG diagram HTML string
  terms: [String],               // Array of glossary term keys
  image: String,                 // URL to reference image
  youtube: String,               // URL to related YouTube video
  youtubeTitle: String           // Display title for YouTube link
}
```

**Question Content Requirements:**
- 100 questions per section covering all related topics from ASE study guides
- Questions should cover all topic percentages listed in the ASE study guide breakdown
- Each question must have 4 multiple-choice options
- All text must be bilingual (English + Simplified Chinese)
- Each question should reference related glossary terms
- Each question should include an image URL and YouTube video URL

#### Terms Glossary (`terms_glossary.js`)
Exports a `termsGlossary` object keyed by term ID strings.

**Term Object Schema:**
```javascript
{
  term: String,                  // Display name (English)
  termChinese: String,           // Display name (Simplified Chinese)
  section: String,               // ASE section ("A1"–"A8", "G1")
  definition: String,            // 50–60 word definition (English)
  definitionChinese: String,     // Definition (Simplified Chinese)
  image: String,                 // URL to reference image
  youtube: String,               // URL to related YouTube video
  youtubeTitle: String           // Display title for YouTube link
}
```

**Term Coverage Requirements:**
- All important mechanical/technical terms from A1–A8 and G1
- Organized by section
- All images must be valid URLs (prefer Wikimedia Commons)
- All YouTube links must be valid, existing videos

### 3.5 User Interface Specification

#### Layout
- **Header**: Fixed at top. Title "ASE Certification Study Q&A", subtitle showing question count
- **Tab Bar**: Sticky below header. 9 tabs: A1, A2, A3, A4, A5, A6, A7, A8, G1
  - Each tab shows section code and short label (e.g., "A1 Engine Repair")
  - Active tab highlighted in red (#e94560)
- **Score Bar**: Shows Correct (green), Wrong (red), Answered (gold), Remaining, Progress bar
- **Question Card**: Main content area (max-width: 900px, centered)

#### Question Flow
1. User clicks a tab → loads and shuffles that section's 200 questions
2. Random unanswered question displayed with bilingual text
3. User optionally selects an option (highlights in blue)
4. User clicks "Show Answer" button (always enabled, works with or without a selection)
5. Correct option shows green checkmark, wrong selection shows red X
6. Explanation panel slides in with:
   - Correct/Incorrect status (bilingual)
   - Explanation text with **highlighted mechanic terms** (clickable)
   - Chinese translation of explanation
   - Optional diagram
   - Reference image
   - YouTube video link (styled card with play icon)
   - Related terms as clickable pill-shaped badges
7. Three buttons always visible: "Previous Question", "Show Answer", "Next Question"
   - "Previous Question": navigates back through question history (disabled when at start)
   - "Next Question": if at end of history, picks a new random question; otherwise navigates forward in history
   - Question history works like browser history per section — going back and then picking a new question trims forward history

#### Term Highlighting System
- All mechanic-related terms in question text, options, and explanations are auto-detected and highlighted
- Highlighted terms appear with dotted underline, cyan color (#45b7d1), bold weight
- Click detection uses word boundary matching, longest-match-first priority
- **On click**: Opens AI modal (not the glossary modal)

#### Term Glossary Modal
- Triggered by clicking term pills in the "Related Terms" section
- Shows: section badge, term name (EN + CN), definition (EN + CN), image, YouTube link
- Close via X button, overlay click, or Escape key

#### AI Lookup Modal (PHP-only feature)
- Triggered by clicking highlighted terms in question/explanation text
- **Also triggered by text selection**: When user highlights/selects any text (2–200 chars) in the question card, explanation area, **inside the AI modal body itself**, **or inside the Term Glossary modal popup** (triggered from "Related Terms"), the AI modal updates in-place with a new streaming response for the selected text
- Query format for clicked terms: `"in the context of car mechanic, what is {term.name}, explain to me in 200 words, show me the pronunciation of {term.name}, also, please translate the explanation to simplified chinese"`
- Query format for highlighted/selected text: `"in the context of car mechanic, what is {the highlighted text}, explain to me in 200 words, show me the pronunciation of {the highlighted text}, also, please translate the explanation to simplified chinese"`
- Shows loading spinner while streaming
- PHP backend streams response from Ollama API (`gemma2:2b`) via HTTP
- Response rendered as Markdown → HTML using built-in renderer, then post-processed to highlight known glossary terms as clickable spans
- Supports: headers, bold, italic, code blocks, lists, blockquotes, horizontal rules
- **Clickable terms in popup**: After streaming completes, known mechanic terms in the AI response are highlighted and clickable — clicking them triggers a new AI query in the same popup
- Modal has vertical scrolling, stays at top during streaming (no auto-scroll)
- Fixed height of 400px for the modal body (no dynamic resizing during streaming)
- **Draggable**: Modal can be dragged by its header (grab cursor). Position is saved to `localStorage` and restored on next open, so the modal always appears at the user's last-dragged position
- **Ask Question Box**: Sticky input area at the top of the modal body (always visible regardless of scrolling) with:
  - "Ask Question" label on the left
  - Text input field in the center (supports Enter key to submit)
  - "Submit" button on the right
  - On submit, sends query: `"please answer the question: {question}, explain to me in 200 words, also, please translate them to simplified chinese"`
  - Response streams into the same modal body below the input
- **History Navigation**: Previous/Next buttons (browser-like history) at the top of the modal allow navigating back and forth through all AI queries made in the session
  - History tracks each query's display name, query text, and completed response
  - History is persisted in localStorage (max 100 entries, key: `aiPopupHistory`), survives popup close and page reload
  - "Prev" and "Next" buttons with position indicator (e.g., "3 / 7")
  - Starting a new query from a back-navigated position trims forward history (like a browser)
  - Navigating history aborts any in-flight streaming request
  - Buttons are disabled at boundaries (Prev disabled at first entry, Next disabled at latest)
- Close via X button, overlay click, or Escape key

### 3.6 PHP Backend (`index.php`)

**Query Handling:**
```
GET index.php?q={question}
```
- Detects `$_GET['q']` parameter
- Sends POST to Ollama REST API at `http://localhost:11434/api/generate`
- Model: `gemma2:2b`
- Streaming enabled for real-time output
- Uses `curl` with `CURLOPT_WRITEFUNCTION` callback to stream chunks
- Each chunk is a JSON line with `response` field containing text tokens
- Returns plain text content type
- Exits immediately after query response (no HTML rendered)

**HTML Page:**
- When no `?q=` parameter, serves the full HTML application
- All CSS is inline in `<style>` tags (no external stylesheets)
- All JS is inline in `<script>` tags plus external data files

### 3.7 Styling Theme
- Dark theme: background `#1a1a2e`, cards `#16213e`, accents `#0f3460`
- Primary accent: red `#e94560`
- Correct: green `#4ecca3`
- Wrong: red `#e94560`
- Chinese text: gold `#f0c040`
- Term links: cyan `#45b7d1`
- AI badge: red gradient
- Font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Responsive: mobile breakpoint at 600px

### 3.8 JavaScript Architecture

**Global Variables:**
- `sections[]` — Array of section config objects with id, label, and data function
- `scores{}` — Per-section tracking: correct count, wrong count, answered Set, question pool
- `currentSection`, `currentQuestion`, `selectedOption`, `answered` — State
- `questionHistory{}` — Per-section array of visited question objects (browser-like history)
- `questionHistoryIdx{}` — Per-section current index in question history

**Key Functions:**
| Function | Description |
|----------|-------------|
| `selectSection(sectionId)` | Loads section, shuffles questions, shows first random |
| `pickRandomQuestion()` | Picks unanswered question (or random for review) |
| `showRandomQuestion()` | Picks new random question, pushes to history, renders it |
| `showPreviousQuestion()` | Navigates back in question history for current section |
| `showNextQuestion()` | Navigates forward in history or picks new random question |
| `renderQuestion(q)` | Renders question card HTML with term highlighting |
| `selectOption(idx)` | Highlights selected option, enables Answer button |
| `revealAnswer()` | Shows correct/wrong, explanation, media, related terms |
| `highlightTerms(text)` | Scans text for glossary terms, wraps in clickable spans |
| `showTermModal(termKey)` | Opens glossary modal for a term |
| `streamAiQuery(displayName, query)` | Core streaming function — sends query to Ollama, streams response into AI modal with progressive Markdown rendering, highlights terms in final output |
| `highlightTermsInHtml(html)` | Post-processes rendered HTML to add clickable term highlights in text nodes (skips code/pre blocks) |
| `askAiAboutTerm(termKey)` | Opens AI modal, streams Ollama response for a glossary term |
| `askAiAboutText(text)` | Opens AI modal, streams Ollama response for arbitrary selected text |
| `renderMarkdown(text)` | Converts Markdown text to HTML |
| `closeTermModal(event)` | Closes glossary modal |
| `submitAiQuestion()` | Reads the Ask Question textbox, sends custom question to Ollama with bilingual prompt, streams response into the AI modal |
| `aiHistoryBack()` | Navigates to previous entry in AI popup history |
| `aiHistoryForward()` | Navigates to next entry in AI popup history |
| `updateAiNavButtons()` | Updates enabled/disabled state and position indicator for history nav buttons |
| `closeAiModal(event)` | Closes AI modal |

---

## 4. Application 2: Knowledge Graph (`./a1_to_a8_terms_knowledge_graph`)

### 4.1 Overview
A single-page interactive engineering diagram showing relationships between all important ASE A1–A8 technical terms, rendered on HTML5 Canvas with force-directed layout.

### 4.2 Entry Point
`index.html` — self-contained, no server required

### 4.3 Features
- **Canvas-based rendering** with force-directed layout simulation
- **8 category sections** (A1–A8) displayed as labeled boxes in a 4x2 grid
- **~130 term nodes** as rectangular blocks with color-coded left accent bars
- **~100+ link connections**: solid lines for intra-category, dashed for cross-category
- **Interaction**: click node for details, drag to reposition, scroll to zoom, drag background to pan
- **Search box** to filter terms by name
- **Filter buttons** to show/hide by ASE section (A1–A8 or ALL)
- **Modal popup** on node click: shows term name, category, description (30–40 words), connected terms, Wikipedia image (loaded dynamically via Wikipedia API)
- **Legend** showing color codes for each section and link types
- **Touch support** for mobile devices

### 4.4 Data Structure

**Categories Object:**
```javascript
const CATEGORIES = {
  A1: { name: "A1 – Engine Repair", color: "#f47067", ... },
  A2: { name: "A2 – Automatic Transmission", color: "#db6d28", ... },
  A3: { name: "A3 – Manual Drive Train & Axles", color: "#c69026", ... },
  A4: { name: "A4 – Suspension & Steering", color: "#57ab5a", ... },
  A5: { name: "A5 – Brakes", color: "#39d2c0", ... },
  A6: { name: "A6 – Electrical/Electronic", color: "#539bf5", ... },
  A7: { name: "A7 – Heating & A/C", color: "#b083f0", ... },
  A8: { name: "A8 – Engine Performance", color: "#f778ba", ... }
};
```

**Terms Array (TERMS):**
Each term has: `id`, `label`, `cat` (A1–A8), `desc` (30–40 words)

**Links Array (LINKS):**
Each link has: `source` (term id), `target` (term id)
Links include both intra-category and cross-category connections.

**Wikipedia Image Mapping (WIKI_MAP):**
Maps term IDs to Wikipedia article titles for image lookup via Wikipedia API.

### 4.5 Layout Engine
- Category grid: 4 columns x 2 rows
- Force simulation: repulsion within categories, attraction along links
- Constrained to category bounds with damping
- Auto-settles after ~300 iterations or when velocity < 0.5
- Node positions initialized in grid pattern within category boxes

### 4.6 Styling
- Dark theme: background `#0d1117`, borders `#30363d`
- Monospace font: Consolas, 'Courier New'
- Font sizes: 13px for node labels (set to same size as section titles for clarity)
- Modal font: 20px for title, description, and connected terms (all same size for readability)
- Node blocks: 28px height, auto-width based on text
- Color accent bar (3px) on left side of each node

---

## 5. Application 3: RPG Study Game (`./entry_level_tech_rpg`)

### 5.1 Overview
A single-page RPG-style game where the player (entry-level technician learner) navigates a map, encounters questions from A1–A8, and earns XP/levels.

### 5.2 Entry Point
`index.html` — self-contained, no server required

### 5.3 Features
- **Pixel-art style map** rendered on HTML5 Canvas
- **Player character** (technician avatar) navigable via arrow keys or WASD
- **Question nodes** scattered across the map, color-coded by ASE section (A1–A8)
- **40 questions per section** (320 total) covering all ASE study guide topics
- **Collision detection**: player touches a question node → modal popup
- **Question modal** shows question text with "Answer" button
  - Click "Answer" to reveal the correct answer
  - Questions remain on map even after answering (for review)
  - Modal can be closed without answering
- **HUD** (heads-up display): title, level, XP bar, stats, zone indicator
- **Leveling system**: earn XP for correct answers, level up
- **8 themed zones** on the map, one per ASE section
- **Font**: 'Press Start 2P' (retro pixel font) for HUD, 'Inter' for content

### 5.4 Game Data
- Questions organized by section (A1–A8)
- 40 questions per section with question text, 4 options, correct answer index, and explanation
- Questions placed as interactive nodes on a 2D map grid

---

## 6. Generated Study Videos (`./videos`)

### 6.1 Specification
Videos generated via Python scripts using text-to-speech and slide generation.

| Video File | Subject |
|------------|---------|
| `entry_level_A1_Engine_Repair_537.mp4` | A1 Engine Repair |
| `entry_level_Brakes_742.mp4` | A5 Brakes |
| `entry_level_Electrical_Electronic_Systems_384.mp4` | A6 Electrical |
| `entry_level_Suspension_and_Steering_291.mp4` | A4 Suspension & Steering |
| `entry_level_Automatic_Transmission_Transaxle_647.mp4` | A2 Auto Transmission |
| `entry_level_Manual_Drive_Train_and_Axles_483.mp4` | A3 Manual Drive Train |

### 6.2 Video Requirements
- **Tone**: Natural male instructor voice (not robotic)
- **Speed**: Normal speaking pace (explicitly not fast)
- **Length**: 2–4 minutes (may extend to 5–6 minutes for normal pacing)
- **Style**: PowerPoint slide-by-slide presentation
- **Content**: Concept explanation with diagrams (not test question percentages)
- **File naming**: `entry_level_{subject}_{random_number}.mp4`

---

## 7. Reference Documents

### 7.1 Certificate Summary (`entry_level_technician_certificate_summary.txt`)
Research document covering:
- What is the 7-unit Entry Level Technician Certificate (Skyline College)
- Required courses: AUTO 580 (1 unit), AUTO 670 (1 unit), AUTO 711 (5 units)
- Steps to complete the certificate (6 steps)
- ASE Entry-Level Automobile test breakdown (10 tests)
- Answers to key questions about study guide coverage
- Local resources (Skyline College, CCSF, ASE official)

### 7.2 Study Guide Topic Breakdown (`entry_level_technician_study_guild.txt`)
Lists the 3 required study guides and detailed topic breakdown with percentages for each A1–A8 test.

### 7.3 YouTube Study Videos (`ase_youtube_study_videos.txt`)
Curated list of 2 YouTube resources per section (A1–A8):
- **WeberAuto** (Weber State University professor) — primary playlists
- **FreeASEStudyGuides.com** — quiz-style practice videos
- **ScannerDanner** — electrical/engine performance diagnostics (A6, A8)
- Additional channels: South Main Auto, EricTheCarGuy, Pine Hollow, FordTechMakuloco, Mechanic Mindset

---

## 8. Regeneration Instructions

To regenerate the full application from this spec:

### Step 1: Study Guides
Download all PDF study guides from `https://www.ase.com/ase-study-guides` into `./study_guides/`.

### Step 2: Research Document
Generate `./entry_level_technician_certificate_summary.txt` covering the 7-unit certificate at Skyline College, course requirements, ASE entry-level test structure, and study guide mapping.

### Step 3: Study Topic Breakdown
Generate `./entry_level_technician_study_guild.txt` listing the 3 required study guides with detailed A1–A8 topic breakdowns and percentages.

### Step 4: YouTube Resources
Generate `./ase_youtube_study_videos.txt` with 2 curated YouTube resources per section (A1–A8).

### Step 5: Knowledge Graph App
Generate `./a1_to_a8_terms_knowledge_graph/index.html` per Section 4 spec:
- ~130 terms across 8 categories with descriptions
- Link connections (intra-category and cross-category)
- Canvas-based force-directed layout in 4x2 grid
- Wikipedia image integration
- Search and filter functionality
- Large, readable fonts (20px for modal content)

### Step 6: RPG Game App
Generate `./entry_level_tech_rpg/index.html` per Section 5 spec:
- 40 questions per section (A1–A8)
- Canvas map with player navigation
- Question nodes that persist after answering
- Closeable question modals
- XP/leveling system

### Step 7: Q&A Study App
Generate `./ase_study_qa/` per Section 3 spec:

1. **`terms_glossary.js`**: Create comprehensive glossary with bilingual definitions, images, YouTube links
2. **`q_a1.js` through `q_a8.js` and `q_g1.js`**: 100 bilingual questions per file with explanations, images, YouTube links, and term references
3. **`index.php`**: Full application with:
   - PHP backend streaming Ollama `gemma2:2b` responses via REST API
   - Tab navigation (A1–A8, G1)
   - Score tracking per section
   - Term highlighting with AI lookup on click
   - Glossary modal for related terms
   - Markdown rendering for AI responses
   - Bilingual support throughout
4. **`index.html`**: Static fallback version (same UI, no AI features, no term highlighting)

### Step 8: Videos (Optional)
Generate study videos using Python scripts with:
- Natural male voice, normal speed
- Slide-by-slide presentation style
- 2–6 minutes per topic
- Concept-focused content with diagrams

---

## 9. Key Design Decisions

1. **PHP over Node.js**: Chosen for simplicity — single `index.php` handles both the API proxy and the HTML page with minimal setup (`php -S localhost:8000`)
2. **Ollama REST API over CLI**: Initially used `shell_exec('ollama run ...')` which produced terminal escape codes in output. Switched to Ollama HTTP API (`http://localhost:11434/api/generate`) with streaming for clean, fast responses
3. **Streaming response**: Uses `fetch()` with `ReadableStream` reader for real-time AI output display with progressive Markdown rendering
4. **No build tools**: All apps are vanilla HTML/JS/CSS with no bundler, framework, or npm dependencies
5. **Data in separate JS files**: Question banks and glossary stored as JS files loaded via `<script>` tags to keep the main HTML manageable and allow independent updates
6. **Bilingual by design**: Every piece of user-facing text has a Chinese Simplified translation for non-native English speaking students
7. **Term highlighting**: Uses longest-match-first algorithm with word boundary detection to avoid partial matches and overlapping replacements
8. **Wikipedia images**: Knowledge graph fetches images dynamically from Wikipedia API with search fallback, avoiding bundling static image assets
9. **Dark theme**: Consistent across all 3 apps for reduced eye strain during extended study sessions
