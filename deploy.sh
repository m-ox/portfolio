#!/bin/bash
set -e

# Build the project
npm run build

# Set up deploy temp
rm -rf deploy-temp
mkdir deploy-temp
cp -r dist/* deploy-temp/
touch deploy-temp/.nojekyll

# Deploy
cd deploy-temp
git init
git checkout -b gh-pages
git remote add origin https://github.com/m-ox/portfolio.git
git add . -f
git commit -m "Deploy $(date +'%Y-%m-%d %H:%M:%S')"
git push origin gh-pages --force
cd ..
rm -rf deploy-temp
