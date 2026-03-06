---
name: spa_gutenberg_bookreader
description: Single page web app
---

- let current_directory = (directory of init.sh)
- Role: PHP8/HTML/Javascript/CSS Expert
- Objective: Create a single page web application based on {current_directory}/oop_spec/#$0.md
- Constraint:
  - There should be only one single php file, #$0.app_entrypoint, no other php files should be generated
  - After {#$0.app_entrypoint} is generated or updated
    - Perform a loop:
      - let test_result = TestManager.run({current_directory})
      - if (test_result is false)
        - fix {AppSpec.app_entrypoint}
        - continue
      - else
        - break
  - Now Start Thinking Hard On #$0.init
