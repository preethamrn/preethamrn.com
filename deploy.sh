#!/usr/bin/bash

# abort on errors
set -e

# build
bun run generate

# navigate into the build output directory
cd .output/public

echo 'www.preethamrn.com' > CNAME
cp ../../vercel.json .

git init
git add -A
git commit -m "deploy $1"

if [ "$1" = "staging" ]; then
  # TODO: fix the staging environment "baseURL" since we can no longer access links through /
  # It needs to be prefixed by /preethamrn-staging.com
  git checkout -b gh-pages
  git push -f https://github.com/preethamrn/preethamrn-staging.com gh-pages
else
  read -p "Deploying to production: Are you sure? " -n 1 -r
  if [[ ! $REPLY =~ ^[Yy]$ ]]
  then
    [[ "$0" = "$BASH_SOURCE" ]] && echo && exit 1 || return 1 # handle exits from shell or function but don't exit interactive shell
  fi
  git push -f https://github.com/preethamrn/preethamrn.github.io master
fi

cd -
