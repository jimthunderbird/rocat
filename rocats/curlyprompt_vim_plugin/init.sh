# add shared constraint
ln -s ../../constraint constraint

cat init.prompt | claude --allowedTools "Read,Edit,Bash" 
