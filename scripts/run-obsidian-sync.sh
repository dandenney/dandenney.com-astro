#!/bin/bash
# Shell wrapper for launchd — sets up PATH and runs the sync script.
# Logs go to ~/Library/Logs/sync-obsidian-library.log

NODE=/Users/dandenney/.local/share/fnm/node-versions/v22.13.0/installation/bin/node
REPO=/Users/dandenney/Repos/dandenney.com-astro

export HOME=/Users/dandenney
export PATH="/usr/bin:/usr/local/bin:/opt/homebrew/bin:$PATH"

exec "$NODE" "$REPO/scripts/sync-obsidian-library.mjs"
