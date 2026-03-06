# SimpleEnglishConversionButton
- **Extends:** None

### Parameter
- **text_to_convert**

### Text
- "Convert To Simple English"

### @click
- **prompt**: "Given <text>**text_to_convert**</text>, convert it to a version that uses very simple English words. Show me the converted result only, no explanation, no extra words."
- **result**: Config.local_llm(**prompt**).
- Show modal.simple_english_displayer.
  - **Extends:** SimpleModal
  - **content**: **result**
  - **style**: background: wheat
