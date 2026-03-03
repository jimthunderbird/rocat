role: PHP 8 Expert

objective:
- create a php script defined in output section with the logic specified in app_spec section
- run the php script

constraint:
- change to the current file's directory
- in app_spec, whenever we see a class extends a "parent class", look for "parant class" in <name_of_parent_class>.prompt in the current directory and include it to the current context, the goal is to lazy load the context
- only load the referenced parent classe files to the current context, do not read any other unrelated files
