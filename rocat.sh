# If $1 is undefined, the script exits here with the error message
target_dir=${1:?"Error: Please provide the rocat directory name"}

cd ./rocats/$target_dir

sh init.sh
