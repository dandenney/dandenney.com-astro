#!/usr/bin/env bash
set -euo pipefail

ENV_FILE="${1:-${NETLIFY_ENV_FILE:-.env.netlify}}"

if ! command -v netlify >/dev/null 2>&1; then
  echo "Error: Netlify CLI is not installed or not on your PATH." >&2
  echo "Install it with: npm install -g netlify-cli" >&2
  exit 1
fi

if [ ! -f "$ENV_FILE" ]; then
  echo "Error: env file '$ENV_FILE' was not found." >&2
  echo "Create it (or pass a path): ./scripts/sync-netlify-env.sh path/to/.env.file" >&2
  exit 1
fi

if [ ! -f ".netlify/state.json" ]; then
  echo "Error: This repo is not linked to a Netlify site yet." >&2
  echo "Run: netlify link" >&2
  exit 1
fi

echo "Importing variables from '$ENV_FILE' into linked Netlify site..."
netlify env:import "$ENV_FILE"

echo
echo "✅ Netlify env sync complete."
echo "Safe verification (names only):"
echo "  netlify env:list"
echo "Then trigger a redeploy so runtime changes take effect:"
echo "  netlify deploy --prod"
