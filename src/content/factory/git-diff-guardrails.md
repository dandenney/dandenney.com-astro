---
title: "diffrails"
summary: "Instruction files drift; hooks don't. diffrails reads the conventions in your AGENTS.md / CLAUDE.md, turns the ones a diff can show into rules, and checks every commit against them, whether a person or a coding agent wrote it."
pubDate: 2026-10-16
ideaId: 4
ideaTitle: "Git-Diff Guardrails: Pre-commit Hooks for Agents"
pitch: "A CLI that reads your AGENTS.md or CLAUDE.md conventions and generates pre-commit hooks that inspect the git diff, for example flagging direct calls that should go through your diagnostics library. It can also replay recent agent commits to show which rules got violated most."
whyNow: "Geoffrey Huntley argues that hooks beat instruction files, which drift. Claude Code and Codex are shipping new releases, and Anthropic is rebuilding source control around the surge in agent-written changes."
kind: package
url: "https://www.npmjs.com/package/diffrails"
repoUrl: "https://github.com/dandenney/the-possibility-factory/tree/main/projects/git-diff-guardrails"
signals:
  - title: "anthropics/claude-code v2.1.300"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.300"
  - title: "openai/codex 0.163.0"
    url: "https://github.com/openai/codex/releases/tag/rust-v0.163.0"
  - title: "Redesigning source control at Anthropic"
    url: "https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/"
  - title: "Quoting Geoffrey Huntley"
    url: "https://simonwillison.net/2026/Oct/13/geoffrey-huntley/"
aiGenerated: true
---
