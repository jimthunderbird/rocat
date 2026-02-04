# add shared constraint
ln -s ../../constraint constraint

cat init.prompt | claude --dangerously-skip-permissions --settings '{"alwaysThinkingEnabled": false}'
