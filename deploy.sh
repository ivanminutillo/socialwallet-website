#!/bin/bash

echo "Making sure changes are committed..."
git add *
git commit -m "Site update (autocommit while deploying)"

echo "Making sure commits have been pushed..."
git push

echo "Building the static site..."
npm run export

echo "Deploying the static content to docs folder..."
cp -R ./__sapper__/export/* ./docs
git add *
git commit -m "docs update"
git pull
git push -u origin master

