---
name: spa_gutenberg_bookreader
description: Single page app for reading books on Project Gutenberg
---

- Role: PHP8/HTML/Javascript/CSS Expert
- Objective: Create a single page web application based on ./AppSpec.prompt
- Constraint:
  - There should be only one single php file, {AppSpec.app_entrypoint}, no other php files should be generated
  - After {AppSpec.app_entrypoint} is generated or updated
    - Perform a loop:
      - let current_directory = (path of ./SKILL.md)
      - let test_result = TestManager.run(current_directory)
      - if (test_result is false)
        - fix {AppSpec.app_entrypoint}
        - continue
      - else
        - break
  - Now Start Thinking Hard On AppSpec.init
