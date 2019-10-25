#!/bin/bash

echo "NOTE: setup.sh needs to have been run at least once previously!"

echo "Making sure changes are committed..."
git add *
git commit -m "Site update (autocommit while deploying)"

echo "Making sure commits have been pushed..."
git push

echo "Building the static site..."
npm run export

echo "Deploying the static content to a dedicated git repo..."
cp -R __sapper__/export/* ../socialwallet-website-export/
cd ../socialwallet-website-export/
git add *
git commit -m "Site update"
git pull
git push -u origin master


