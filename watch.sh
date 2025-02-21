#!/bin/bash

# Watch resume.md and style.css for changes and run build.sh
fswatch -o resume.md | while read; do
    ./build.sh
done