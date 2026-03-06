# BaseAppSpec
- **Extends:** None
- **Entrypoint:** index.php
- **Global Style:** ./knowledge/php_page_style.md

### highlighted_text_in_popup_modal(text, popup_modal)
- **context**: (30 words before **text**) + **text** + (30 words after **text**).
- **question**: "In the context: **context**, show the meaning of **text** using very simple English words. No explanation, no extra words."
- **result**: Config.local_llm(**question**).
- Display **result** in **popup_modal**.
- Enable vertical scrolling on **popup_modal**.

### textbox.book_url
- **value**: ""
- **@load**: 
  - Read the very last entry from local storage key "book_history".
  - Trigger key.enter event.
- **@key.enter**: 
  - **book_content**:"Loading...".
  - **book_url**:self.value.
- Append **book_url** to local storage "book_history".
- Ensure all entries in "book_history" remain unique.
- **book_content** = PHP_READ(**book_url**).
- Ensure PHP returns only the pure file content.

### div.book_content
- **@preload**
  - Clear innerHTML (must be completely empty).
- **@postload**
  - Strip all HTML tags from {book_content} (Pure text only).
  - Split {book_content} into standard HTML <p> paragraphs.
  - **style**: line-height: 1.4
  - **innerHTML**: {book_content}

### modal.highlighted_words_translation(highlighted_text)
**Extends:** SimpleModal
**Behavior:**
- When visible, invoke highlighted_text_in_popup_modal({highlighted_text}, self).
