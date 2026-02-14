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

# Escape backslashes and double quotes for AppleScript string embedding
ESCAPED_QUESTION=$(printf '%s' "$QUESTION" | sed 's/\\/\\\\/g; s/"/\\"/g')

# --- Step 1: Navigate to Gemini and send the question ---
osascript <<APPLESCRIPT
tell application "Google Chrome"
    activate
    delay 0.5

    -- Look for an existing Gemini tab
    set foundTab to false
    repeat with w in windows
        set tabIndex to 0
        repeat with t in tabs of w
            set tabIndex to tabIndex + 1
            if URL of t contains "gemini.google.com" then
                set active tab index of w to tabIndex
                set index of w to 1
                set foundTab to true
                -- Navigate to a fresh conversation
                set URL of active tab of w to "https://gemini.google.com/app"
                exit repeat
            end if
        end repeat
        if foundTab then exit repeat
    end repeat

    if not foundTab then
        -- Open a new tab
        tell window 1
            make new tab with properties {URL:"https://gemini.google.com/app"}
        end tell
    end if

    -- Wait for page to load (Gemini auto-focuses the input)
    delay 3

    -- Type the question via keystrokes and submit
    tell application "System Events"
        tell process "Google Chrome"
            set frontmost to true
            delay 0.3
            keystroke "${ESCAPED_QUESTION}"
            delay 0.5
            keystroke return
        end tell
    end tell
end tell
APPLESCRIPT

echo "Question sent to Gemini: $QUESTION"
echo "Waiting for response..."

# --- Step 2: Poll for the response using JavaScript execution in Chrome ---

# JavaScript to extract the last Gemini response text.
# Tries multiple selectors to be resilient to DOM changes.
read -r -d '' JS_EXTRACT << 'JSEOF'
(function() {
    // Try multiple selectors for Gemini's response elements (updated for 2025/2026 DOM)
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
                if (text && text.trim().length > 20) {
                    return text.trim();
                }
            }
        } catch(e) {}
    }
    // Fallback: look for the last large text block in any div with "response" in class
    var allDivs = document.querySelectorAll('div');
    var best = '';
    for (var j = 0; j < allDivs.length; j++) {
        var cl = allDivs[j].className || '';
        if (typeof cl === 'string' && (cl.indexOf('response') !== -1 || cl.indexOf('markdown') !== -1 || cl.indexOf('message') !== -1)) {
            var t = allDivs[j].innerText || '';
            if (t.trim().length > best.length && t.trim().length > 20) {
                best = t.trim();
            }
        }
    }
    return best;
})()
JSEOF

# JavaScript to check if Gemini is still generating (look for stop button / loading indicators)
read -r -d '' JS_IS_GENERATING << 'JSEOF'
(function() {
    // Check for common "stop generating" / loading indicators
    var indicators = document.querySelectorAll(
        '[aria-label="Stop"], [aria-label="Stop generating"], [data-test-id="stop-button"], .loading-indicator, .response-streaming'
    );
    var spinners = document.querySelectorAll('mat-spinner, .loading-spinner, mat-progress-bar');
    // Also check for any element whose aria-label contains "stop" (case-insensitive)
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

# Wait a bit for Gemini to start generating
sleep 4

PREV_LEN=0           # number of characters already printed
PREV_RESPONSE=""
STABLE_COUNT=0
MAX_CHECKS=120       # max polling iterations (more checks since interval is shorter)
POLL_INTERVAL=0.8    # seconds between checks (faster polling for streaming feel)
STABLE_THRESHOLD=4   # consecutive identical checks before declaring done
STARTED=false

echo ""
echo "============================================"
echo "Gemini Response:"
echo "============================================"

for ((i=0; i<MAX_CHECKS; i++)); do
    # Get current response text
    CURRENT=$(osascript <<POLLSCRIPT
tell application "Google Chrome"
    set jsResult to execute active tab of window 1 javascript "${JS_EXTRACT_ESCAPED}"
    return jsResult
end tell
POLLSCRIPT
    )

    # Check if still generating
    GENERATING=$(osascript <<GENSCHRIPT
tell application "Google Chrome"
    set jsResult to execute active tab of window 1 javascript "${JS_IS_GENERATING_ESCAPED}"
    return jsResult
end tell
GENSCHRIPT
    )

    # If we have meaningful content, stream the new portion
    if [ -n "$CURRENT" ] && [ "$CURRENT" != "missing value" ] && [ "${#CURRENT}" -gt 5 ]; then
        CUR_LEN=${#CURRENT}
        if [ "$CUR_LEN" -gt "$PREV_LEN" ]; then
            # Print only the newly arrived text (substring from PREV_LEN onward)
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
        # No content yet — show a waiting dot
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
if [ "$STARTED" = false ]; then
    echo "(Could not capture response. Attempting DOM debug...)"
    echo ""
    # Debug: dump page element info to help identify correct selectors
    DEBUG_JS='(function(){ var tags=["model-response","message-content"]; var info=[]; tags.forEach(function(t){ var els=document.querySelectorAll(t); info.push(t+": "+els.length+" found"); }); var divs=document.querySelectorAll("div[class]"); var classes={}; for(var i=0;i<divs.length;i++){ var cl=divs[i].className; if(typeof cl==="string" && (cl.indexOf("response")!==-1||cl.indexOf("markdown")!==-1||cl.indexOf("message")!==-1||cl.indexOf("content")!==-1)){ if(!classes[cl]){classes[cl]=0;} classes[cl]++; }} for(var k in classes){ info.push("div."+k+": "+classes[k]); } return info.join("\\n"); })()'
    DEBUG_OUT=$(osascript <<DEBUGSCRIPT
tell application "Google Chrome"
    set jsResult to execute active tab of window 1 javascript "${DEBUG_JS}"
    return jsResult
end tell
DEBUGSCRIPT
    )
    echo "DOM Debug Info:"
    echo "$DEBUG_OUT"
    echo ""
    echo "Raw CURRENT value: [$CURRENT]"
    echo ""
    echo "Tip: Make sure 'Allow JavaScript from Apple Events' is enabled in Chrome:"
    echo "     Chrome menu > View > Developer > Allow JavaScript from Apple Events"
fi

echo "============================================"
