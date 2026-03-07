# Spec
- **Extends:** BaseAppSpec

### init()
- div.book_content.**style**.background: "wheat"

### Layout
- body
  - **style**:
    - background: wheat
- div
  - **style**: 
    - background: BurlyWood
    - component_layout: horizontal
    - padding: 10px
  - **components**: 
    - {textbox.book_url}
    - ui.BookHistory
- div
  - {book_content}

### div.book_content
- **words.@highlighted**:
  - Show modal.highlighted_words_translation(highlighted words).
- **paragraphs.each(paragraph)**:
  - **@load**:
    - Add SimpleEnglishConversionButton:
      - **text**: "Convert to Simple English"
      - **behavior**: Show when **paragraph** is visible.
      - **params**: 
        - paragraph
      - **position**: Append at the end of **paragraph** instead of below it.
      - **style**: background: gold
