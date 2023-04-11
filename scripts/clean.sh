#!/usr/bin/env bash

# Fail on error
set -e

# Echo commands
set -x

rm -rf packages/preact/dist
rm -rf packages/preact/public
rm -rf packages/preact/src/components
rm -rf packages/preact/src/icons
rm -rf packages/preact/src/site
rm -rf packages/preact/src/utils

rm -rf packages/react/dist
rm -rf packages/react/public
rm -rf packages/react/src/components
rm -rf packages/react/src/icons
rm -rf packages/react/src/site
rm -rf packages/react/src/utils

rm -rf packages/solid/dist
rm -rf packages/solid/public
rm -rf packages/solid/src/components
rm -rf packages/solid/src/icons
rm -rf packages/solid/src/site
rm -rf packages/solid/src/utils

rm -rf packages/svelte/dist
rm -rf packages/svelte/public
rm -rf packages/svelte/src/components
rm -rf packages/svelte/src/icons
rm -rf packages/svelte/src/site
rm -rf packages/svelte/src/utils

rm -rf packages/vue/dist
rm -rf packages/vue/public
rm -rf packages/vue/src/components
rm -rf packages/vue/src/icons
rm -rf packages/vue/src/site
rm -rf packages/vue/src/utils
