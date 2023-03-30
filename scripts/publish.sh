#!/usr/bin/env bash

PACKAGES=("react" "solid" "styles")
for package in ${PACKAGES[@]}; do
  echo "Publish $package"
  pushd packages/$package
  npm publish --access public
  popd
done
