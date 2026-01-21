# If $1 is undefined, the script exits here with the error message
target_dir=${1:?"Error: Please provide the rocat directory name"}

command="init"

# Check if $2 is set and not an empty string
if [ -n "$2" ]; then
    command="$2"
fi

cd ./rocats/$target_dir

# Check if the script file exists
if [ -f "$command.sh" ]; then
    sh "$command".sh
else
    echo "Error: File '$command.sh' not found in ./rocats/$target_dir"
    exit 1
fi
