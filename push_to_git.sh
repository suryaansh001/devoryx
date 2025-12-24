#!/bin/bash

# Check if remote origin exists, if not add it
if ! git remote get-url origin &>/dev/null; then
  git remote add origin https://github.com/suryaansh001/erebor.git
fi

# Add all files to staging area
git add .

# Read commit message from command line argument or use default
COMMIT_MESSAGE=${1:-"Update project files"}

# Commit changes
git commit -m "$COMMIT_MESSAGE"

# Get the current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Push to GitHub using the current branch
git push -u origin $CURRENT_BRANCH