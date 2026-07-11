#!/usr/bin/env bash
# Stop hook: refuse to end quietly if work isn't on GitHub yet.
# Fires when Claude finishes a turn. Stays silent unless there is
# uncommitted work or committed-but-unpushed work in this repo.

input=$(cat)                                                   # Stop hook payload (JSON) on stdin
echo "$input" | grep -q '"stop_hook_active": *true' && exit 0 # loop guard: we already nudged this turn

cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0 # not a git repo, nothing to do

msgs=()
git diff --quiet && git diff --cached --quiet || msgs+=("uncommitted changes in the working tree")

if up=$(git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null); then
  ahead=$(git rev-list --count "@{u}"..HEAD 2>/dev/null || echo 0)
  [ "${ahead:-0}" -gt 0 ] && msgs+=("$ahead commit(s) not pushed to $up")
fi

[ ${#msgs[@]} -eq 0 ] && exit 0                                # clean and pushed -> say nothing

reason="Before ending this turn, note that work in this repo is not on GitHub yet: "
for m in "${msgs[@]}"; do reason+="$m; "; done
reason+="tell Dan explicitly and offer to commit/push."

printf '{"decision": "block", "reason": "%s"}\n' "$reason"
exit 0
