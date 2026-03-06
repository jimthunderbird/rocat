# BaseAppSpec
**Extends:** None
**Entrypoint:** index.php
**Global Style:** ./knowledge/php_page_style.md

---

    ## ## Core Methods

    ### highlighted_text_in_popup_modal(text, popup_modal)
**Context Logic:** 
    1. Capture 30 words before {text}.
    2. Capture 30 words after {text}.
    3. **let context** = (30 words before) + {text} + (30 words after).

**LLM Logic:**
    1. **let question** = "In the context: {context}, show the meaning of {text} using very simple English words. No explanation, no extra words."
    2. **let result** = Config.local_llm(question).

**UI Action:**
    1. Display {result} in {popup_modal}.
    2. Enable vertical scrolling on {popup_modal}.

---

    ## ## Components & Elements

    ### textbox.book_url
**Properties:**
* **value**: ""

**Events:**
* **@load**: 
    1. Read the very last entry from local storage key "book_history".
    2. Trigger key.enter event.
* **@key.enter**: 
    1. Set book_content = "Loading...".
    2. **let book_url** = value.
    3. Append {book_url} to local storage "book_history".
    4. Ensure all entries in "book_history" remain unique.
    5. **let book_content** = PHP_READ({book_url}).
    6. Ensure PHP returns only the pure file content.

    ### div.book_content
**Behavior (Pre-load):** 
    1. Clear innerHTML (must be completely empty).

**Behavior (Post-load):** 
    1. Strip all HTML tags from {book_content} (Pure text only).
    2. Split {book_content} into standard HTML <p> paragraphs.

**Style & Data:**
* **style**: line-height: 1.4
* **innerHTML**: {book_content}

---

    ## ## Modals

    ### modal.highlighted_words_translation(highlighted_text)
**Extends:** SimpleModal
**Behavior:**
    1. When visible, invoke highlighted_text_in_popup_modal({highlighted_text}, self).
