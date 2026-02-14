#!/bin/bash
# ask_gemini.sh - Send a question to Gemini and capture the response in terminal
# Usage: ./ask_gemini.sh "your question here"
#
# PREREQUISITE: In Chrome, enable View > Developer > Allow JavaScript from Apple Events

QUESTION="$1"

if [ -z "$QUESTION" ]; then
    echo "Usage: $0 \"your question here\""
    echo "Example: $0 \"What is the capital of France?\""
    exit 1
fi

# --- Step 1: Navigate to Gemini ---
osascript > /dev/null 2>&1 <<'APPLESCRIPT'
tell application "Google Chrome"
    set foundTab to false
    repeat with w in windows
        set tabIndex to 0
        repeat with t in tabs of w
            set tabIndex to tabIndex + 1
            if URL of t contains "gemini.google.com" then
                set active tab index of w to tabIndex
                set foundTab to true
                exit repeat
            end if
        end repeat
        if foundTab then exit repeat
    end repeat

    if not foundTab then
        if (count of windows) = 0 then
            make new window
        end if
        tell window 1
            make new tab with properties {URL:"https://gemini.google.com/app"}
        end tell
    end if

    activate
    delay 2
end tell
APPLESCRIPT

# --- Step 2: Ensure we are on a fresh Gemini page ---
# Navigate to /app to get a clean input (new conversation)
osascript > /dev/null 2>&1 <<'NAVSCRIPT'
tell application "Google Chrome"
    set curURL to URL of active tab of window 1
    if curURL does not contain "gemini.google.com/app" or curURL contains "/app/" then
        set URL of active tab of window 1 to "https://gemini.google.com/app"
        delay 3
    end if
end tell
NAVSCRIPT

# --- Step 3: Wait for the page to fully load (up to 25s) ---
INPUT_READY=false
for ((i=0; i<25; i++)); do
    CHECK=$(osascript 2>/dev/null <<'CHECKSCRIPT'
tell application "Google Chrome"
    set jsResult to execute active tab of window 1 javascript "
        (document.readyState === 'complete' && (
            document.querySelector('.ql-editor') ||
            document.querySelector('rich-textarea') ||
            document.querySelector('[contenteditable=\"true\"]') ||
            document.querySelector('textarea')
        )) ? 'READY' : 'WAITING';
    "
    return jsResult
end tell
CHECKSCRIPT
    )
    if [ "$CHECK" = "READY" ]; then
        INPUT_READY=true
        break
    fi
    sleep 1
done

if [ "$INPUT_READY" = false ]; then
    echo "Error: Gemini page did not load in time."
    exit 1
fi

# Extra wait for UI to be fully interactive
sleep 2

# --- Step 4: Type question using execCommand (works with Quill/contenteditable) ---
# Escape question for safe embedding in JavaScript string
ESCAPED_Q=$(printf '%s' "$QUESTION" | sed "s/\\\\/\\\\\\\\/g; s/'/\\\\'/g; s/\"/\\\\\\\\\"/g; s/\`/\\\\\`/g")

# Activate Chrome and ensure focus
osascript > /dev/null 2>&1 <<'ACTIVATESCRIPT'
tell application "Google Chrome"
    activate
end tell
ACTIVATESCRIPT

sleep 0.5

# Use execCommand to insert text (this properly triggers Quill/Angular change detection)
SUBMIT_RESULT=$(osascript 2>/dev/null <<SUBMITSCRIPT
tell application "Google Chrome"
    set jsResult to execute active tab of window 1 javascript "
        (function() {
            // Find the input editor
            var editor = document.querySelector('.ql-editor[contenteditable]');
            if (!editor) editor = document.querySelector('rich-textarea .ql-editor');
            if (!editor) editor = document.querySelector('rich-textarea [contenteditable]');
            if (!editor) editor = document.querySelector('[contenteditable=\"true\"][role=\"textbox\"]');
            if (!editor) {
                var allCE = document.querySelectorAll('[contenteditable=\"true\"]');
                for (var x = 0; x < allCE.length; x++) {
                    if (allCE[x].closest('.input-area-container, rich-textarea, .text-input-field')) {
                        editor = allCE[x]; break;
                    }
                }
            }
            if (!editor) editor = document.querySelector('[contenteditable=\"true\"]');
            if (!editor) editor = document.querySelector('textarea');
            if (!editor) return 'NO_EDITOR';

            // Focus and select all existing content
            editor.focus();
            window.getSelection().selectAllChildren(editor);

            // Use execCommand to insert text - this triggers framework change detection
            document.execCommand('selectAll', false, null);
            document.execCommand('delete', false, null);
            document.execCommand('insertText', false, '${ESCAPED_Q}');

            return 'TEXT_SET';
        })()
    "
    return jsResult
end tell
SUBMITSCRIPT
)

if [ "$SUBMIT_RESULT" = "NO_EDITOR" ]; then
    echo "Error: Could not find the Gemini text editor."
    echo "Make sure Chrome is open with gemini.google.com."
    exit 1
fi

# If execCommand didn't set the text, fallback to clipboard paste
if [ "$SUBMIT_RESULT" != "TEXT_SET" ]; then
    echo "(Trying clipboard paste fallback...)" >&2
    OLD_CLIPBOARD=$(pbpaste 2>/dev/null)
    printf '%s' "$QUESTION" | pbcopy
    osascript > /dev/null 2>&1 <<'CLIPFALLBACK'
tell application "Google Chrome"
    activate
end tell
delay 0.3
tell application "System Events"
    tell process "Google Chrome"
        keystroke "a" using command down
        delay 0.1
        keystroke "v" using command down
    end tell
end tell
CLIPFALLBACK
    sleep 0.8
    printf '%s' "$OLD_CLIPBOARD" | pbcopy 2>/dev/null
fi

sleep 1

# --- Step 5: Submit - try clicking send button, then fallback to Enter ---
SEND_RESULT=$(osascript 2>/dev/null <<SENDSCRIPT
tell application "Google Chrome"
    set jsResult to execute active tab of window 1 javascript "
        (function() {
            // Try to find the send button by various selectors
            var sendBtn = null;
            var candidates = document.querySelectorAll('button[aria-label*=\"end\"], button[mattooltip*=\"end\"], button.send-button, [data-test-id=\"send-button\"]');
            for (var i = 0; i < candidates.length; i++) {
                var label = (candidates[i].getAttribute('aria-label') || '').toLowerCase();
                var tooltip = (candidates[i].getAttribute('mattooltip') || '').toLowerCase();
                if (label.indexOf('send') !== -1 || tooltip.indexOf('send') !== -1) {
                    sendBtn = candidates[i];
                    break;
                }
            }

            // Search all buttons for send-related icons
            if (!sendBtn) {
                var allBtns = document.querySelectorAll('button');
                for (var j = 0; j < allBtns.length; j++) {
                    var icons = allBtns[j].querySelectorAll('mat-icon, .material-icons-extended, [class*=\"icon\"]');
                    for (var k = 0; k < icons.length; k++) {
                        var txt = (icons[k].textContent || '').trim().toLowerCase();
                        if (txt === 'send' || txt === 'arrow_upward' || txt === 'arrow_upward_alt') {
                            sendBtn = allBtns[j];
                            break;
                        }
                    }
                    if (sendBtn) break;
                }
            }

            if (sendBtn && !sendBtn.disabled) {
                sendBtn.click();
                return 'CLICKED';
            }
            return 'NO_BUTTON';
        })()
    "
    return jsResult
end tell
SENDSCRIPT
)

# If JS button click didn't work, fallback to Enter keystroke
if [ "$SEND_RESULT" != "CLICKED" ]; then
    osascript > /dev/null 2>&1 <<'ENTERSCRIPT'
tell application "Google Chrome"
    activate
end tell
delay 0.3
tell application "System Events"
    tell process "Google Chrome"
        keystroke return
    end tell
end tell
ENTERSCRIPT
fi

# --- Step 6: Bring terminal back to the foreground ---
sleep 2
osascript > /dev/null 2>&1 <<'FOCUSTERM'
tell application "System Events"
    set termApp to ""
    if exists process "Terminal" then
        set termApp to "Terminal"
    else if exists process "iTerm2" then
        set termApp to "iTerm2"
    else if exists process "Alacritty" then
        set termApp to "Alacritty"
    else if exists process "kitty" then
        set termApp to "kitty"
    else if exists process "WezTerm" then
        set termApp to "WezTerm"
    end if
    if termApp is not "" then
        tell application termApp to activate
    end if
end tell
FOCUSTERM

echo "Question sent to Gemini: $QUESTION"
echo "(Editor: $SUBMIT_RESULT | Send: $SEND_RESULT)" >&2
echo "Waiting for response..."

# --- Step 7: Poll for the response with streaming output ---

# JavaScript to extract the last Gemini model response
read -r -d '' JS_EXTRACT << 'JSEOF'
(function() {
    // Check if a user message exists (confirms question was submitted)
    var userEls = document.querySelectorAll('user-query, .user-query-text, [data-message-author-role="user"], .query-text');
    var hasUserMsg = false;
    for (var k = 0; k < userEls.length; k++) {
        if ((userEls[k].innerText || '').trim().length > 0) { hasUserMsg = true; break; }
    }

    // Also check if URL changed to include a conversation ID (another sign of submission)
    var onLandingPage = (window.location.pathname === '/app' || window.location.pathname === '/app/');
    if (!hasUserMsg && onLandingPage) {
        // Check if there's a loading indicator (means it was submitted but response hasn't appeared)
        var loading = document.querySelectorAll('mat-spinner, .loading-spinner, mat-progress-bar, [aria-label*="top"]');
        if (loading.length > 0) return '';  // Submitted, waiting for response
        return '__NOT_SUBMITTED__';
    }

    // Look for model response
    var selectors = [
        'model-response .markdown-main-panel',
        'model-response .response-container-content',
        'model-response .markdown',
        '.markdown-main-panel',
        '.response-container-content',
        'message-content .markdown',
        'message-content',
        'model-response',
        '[class*="response-content"]',
        '[class*="model-response"]',
        '.conv-response .text-content',
        '.response-text'
    ];
    for (var i = 0; i < selectors.length; i++) {
        try {
            var els = document.querySelectorAll(selectors[i]);
            if (els.length > 0) {
                var text = els[els.length - 1].innerText;
                if (text && text.trim().length > 10) {
                    var t = text.trim();
                    // Filter out the landing page greeting
                    if (t.indexOf('Where should we start') !== -1 && t.length < 120) continue;
                    if (t.indexOf('Hi ') === 0 && t.length < 80 && t.indexOf('Where should') !== -1) continue;
                    return t;
                }
            }
        } catch(e) {}
    }

    // Fallback: look for large text blocks in divs with response/markdown/message classes
    var allDivs = document.querySelectorAll('div');
    var best = '';
    for (var j = 0; j < allDivs.length; j++) {
        var cl = allDivs[j].className || '';
        if (typeof cl === 'string' && (cl.indexOf('response') !== -1 || cl.indexOf('markdown') !== -1)) {
            var t2 = allDivs[j].innerText || '';
            if (t2.trim().length > best.length && t2.trim().length > 20) {
                // Skip greeting
                if (t2.indexOf('Where should we start') !== -1 && t2.trim().length < 120) continue;
                best = t2.trim();
            }
        }
    }
    return best;
})()
JSEOF

# JavaScript to check if Gemini is still generating
read -r -d '' JS_IS_GENERATING << 'JSEOF'
(function() {
    var indicators = document.querySelectorAll(
        '[aria-label="Stop"], [aria-label="Stop generating"], [data-test-id="stop-button"], .loading-indicator, .response-streaming'
    );
    var spinners = document.querySelectorAll('mat-spinner, .loading-spinner, mat-progress-bar');
    var buttons = document.querySelectorAll('button');
    var hasStop = false;
    for (var i = 0; i < buttons.length; i++) {
        var label = (buttons[i].getAttribute('aria-label') || '').toLowerCase();
        if (label.indexOf('stop') !== -1) { hasStop = true; break; }
    }
    return (indicators.length > 0 || spinners.length > 0 || hasStop) ? 'true' : 'false';
})()
JSEOF

# Escape the JS for embedding inside AppleScript double-quoted strings
escape_js_for_applescript() {
    printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

JS_EXTRACT_ESCAPED=$(escape_js_for_applescript "$JS_EXTRACT")
JS_IS_GENERATING_ESCAPED=$(escape_js_for_applescript "$JS_IS_GENERATING")

# Wait for Gemini to start generating
sleep 4

PREV_LEN=0
PREV_RESPONSE=""
STABLE_COUNT=0
MAX_CHECKS=120
POLL_INTERVAL=0.8
STABLE_THRESHOLD=4
STARTED=false
NOT_SUBMITTED_COUNT=0

echo ""
echo "============================================"
echo "Gemini Response:"
echo "============================================"

for ((i=0; i<MAX_CHECKS; i++)); do
    # Get current response text
    CURRENT=$(osascript 2>/dev/null <<POLLSCRIPT
tell application "Google Chrome"
    set jsResult to execute active tab of window 1 javascript "${JS_EXTRACT_ESCAPED}"
    return jsResult
end tell
POLLSCRIPT
    )

    # Check if still generating
    GENERATING=$(osascript 2>/dev/null <<GENSCHRIPT
tell application "Google Chrome"
    set jsResult to execute active tab of window 1 javascript "${JS_IS_GENERATING_ESCAPED}"
    return jsResult
end tell
GENSCHRIPT
    )

    # If question was not submitted, track and eventually error
    if [ "$CURRENT" = "__NOT_SUBMITTED__" ]; then
        NOT_SUBMITTED_COUNT=$((NOT_SUBMITTED_COUNT + 1))
        if [ "$NOT_SUBMITTED_COUNT" -ge 12 ]; then
            echo ""
            echo "(Error: Question does not appear to have been submitted.)"
            echo "(Check that Chrome is open and Gemini page loaded correctly.)"
            break
        fi
        printf "." >&2
        sleep "$POLL_INTERVAL"
        continue
    fi

    # If we have meaningful content, stream the new portion
    if [ -n "$CURRENT" ] && [ "$CURRENT" != "missing value" ] && [ "${#CURRENT}" -gt 5 ]; then
        CUR_LEN=${#CURRENT}
        if [ "$CUR_LEN" -gt "$PREV_LEN" ]; then
            # Print only the newly arrived text
            NEW_TEXT="${CURRENT:$PREV_LEN}"
            printf '%s' "$NEW_TEXT"
            PREV_LEN=$CUR_LEN
            STABLE_COUNT=0
            STARTED=true
        else
            # Content length unchanged
            if [ "$STARTED" = true ] && [ "$GENERATING" != "true" ]; then
                STABLE_COUNT=$((STABLE_COUNT + 1))
                if [ "$STABLE_COUNT" -ge "$STABLE_THRESHOLD" ]; then
                    break
                fi
            fi
        fi
        PREV_RESPONSE="$CURRENT"
    else
        if [ "$STARTED" = false ]; then
            printf "." >&2
        fi
    fi

    sleep "$POLL_INTERVAL"
done

# Ensure a trailing newline after streamed output
if [ "$STARTED" = true ]; then
    echo ""
fi

# If nothing was captured at all, show debug info
if [ "$STARTED" = false ] && [ "$NOT_SUBMITTED_COUNT" -lt 12 ]; then
    echo "(Could not capture response.)"
    echo ""
    echo "Tip: Make sure 'Allow JavaScript from Apple Events' is enabled in Chrome:"
    echo "     Chrome menu > View > Developer > Allow JavaScript from Apple Events"
fi

echo "============================================"
