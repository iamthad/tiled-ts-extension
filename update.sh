#!/usr/bin/env bash

if [[ ! -d vendor/tiled ]]; then
    git -C vendor clone --filter=blob:none --no-checkout https://github.com/mapeditor/tiled
fi
git -C vendor/tiled sparse-checkout set docs/scripting-doc
git -C vendor/tiled checkout v1.9.1
rm -rf vendor/types/tiled
cp -r vendor/tiled/docs/scripting-doc vendor/types/tiled
