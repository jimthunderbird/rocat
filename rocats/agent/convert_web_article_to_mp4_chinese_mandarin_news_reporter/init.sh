#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: ./init.sh <web_article_source_url>"
  exit 1
fi

echo "$1" > ./web_article_source_url

cat init.prompt | claude --dangerously-skip-permissions
