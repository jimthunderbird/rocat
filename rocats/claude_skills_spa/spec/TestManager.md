# TestManager
- **Extends:** None

### Properties
- **test_directory**

### create_code_check_list_items()
- **items**: Think hard and thoroughly on AppSpec, examine AppSpec.app_entrypoint, return an extremely detailed list of check items to ensure all requirements in the AppSpec are met.
- Save **items** to **test_directory**/code_check_items.txt.

### create_e2e_check_list_items()
- **items**: Think hard and thoroughly on AppSpec, examine BaseAppSpec.app_entrypoint, return an extremely detailed list of check items for E2E testing with Puppeteer.
- Save **items** to **test_directory**/e2e_check_items.txt.
- **e2e_check_items**: Get list of items from ./e2e_check_items.txt.
- Create ./e2e_test.mjs based on **e2e_check_items**.

### run(current_directory)
- **test_directory**: **current_directory**/test
- If **test_directory**/code_check_items.txt does not exist, or any .prompt file has changed (git status check):
  - Call create_code_check_list_items().
- If **test_directory**/e2e_check_items.txt does not exist, or any .prompt file has changed (git status check):
  - Call create_e2e_check_list_items().
- **result**: Run CLI command: `node **test_directory**/e2e_test.mjs`.
- If all E2E tests passed in **result**, return true; otherwise return false.
