# Spec
- **Extends:** None

### Parameter
- **paragraph**

### Text
- "Convert To Simple English"

### @click
- **text_to_convert**:**paragraph**.text
- **prompt**: "Given <text>**text_to_convert**</text>, convert it to a version that uses very simple English words. Show me the converted result only, no explanation, no extra words."
- **result**: Config.local_llm(**prompt**).
- replace paragraph.text with **result**
  **@after_replace**
  - show button:**OriginalTextButton**(**paragraph**, **text_to_convert**)
