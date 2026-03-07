---
name: yml_php_spa_webapp.app
description: yml based php single page web application entrypoint 
---

- SpecDirectory:(directory of init.sh)/spec
- Role: PHP8/HTML/Javascript/CSS Expert
- Objective: Create a single page web application based on {SpecDirectory}/#$0.yml
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
