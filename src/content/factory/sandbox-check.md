---
title: "Sandbox Check"
summary: "What can untrusted HTML reach from your preview iframe? Set up a frame the way your chat app or artifact feature renders model-written HTML, and a probe page inside it tries, harmlessly, to read your cookies, call your API, send data out, submit forms and move your tab. You get a pass/fail report with the fix for each leak."
pubDate: 2026-11-04
ideaId: 88
ideaTitle: "Artifact Sandbox Escape Kit: Test Your HTML-Preview Iframes"
pitch: "A small test harness that renders LLM-generated HTML the way chat apps do (sandboxed iframes, srcdoc, blob URLs) and runs a battery of harmless probes: cookie access, postMessage abuse, top navigation, and fetches to the parent origin. It outputs a pass/fail report for devs building their own artifact or preview feature."
whyNow: "Parameter Labs just showed account takeover through ChatGPT's HTML previews, and the lawyer prompt-injection sanctions show how far untrusted model output is spreading. Anyone building an artifacts-style feature needs a quick checklist."
kind: web
url: "https://sandbox-check.netlify.app"
repoUrl: "https://github.com/dandenney/the-possibility-factory/tree/main/projects/sandbox-check"
image: "/factory/sandbox-check.png"
imageAlt: "Sandbox Check preview"
signals:
  - title: "How We Took Over ChatGPT Accounts"
    url: "https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/"
  - title: "Parameter Labs' write-up"
    url: "https://www.parameter.ai/labs/we-found-a-gap-at-openai"
  - title: "Brazilian Court Sanctions Lawyers for Prompt Injection in Court Filing"
    url: "https://jetstream.security/?p=2949"
aiGenerated: true
---
