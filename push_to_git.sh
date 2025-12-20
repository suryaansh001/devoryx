#!/bin/bash

# Initialize git repository
git init

# Add all files to staging area
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/username/repo.git

# Push to GitHub
git push -u origin main