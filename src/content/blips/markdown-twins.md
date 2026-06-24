---
summary: Every post has a markdown version for agents now — exposed, not force-fed
title: Markdown Twins
pubDate: '2026-06-23'
---

Every.to started shipping articles with an "agent" toggle. If you flip it, the post turns into a clean markdown doc you can hand to an LLM. Most of my site is already markdown on disk, so this felt ripe to copy.

The part I wasn't sure about was whether to serve the markdown to agents by default. I could sniff the user agent and quietly hand bots markdown while people get the HTML. Claude talked me out of it. That means giving up static rendering on every post, leaning on a bot list that's stale the day you write it, and risking Google treating the two versions as cloaking. So instead every eligible page just gets a companion `.md` URL (`/posts/this-post.md`), a "View as markdown" toggle up in the meta row, and a link in the page head so agents can find it on their own. An `/llms.txt` indexes the whole thing too.

What surprised me is how little code it took. Since the posts are already markdown, the twin is just the raw body with a small header glued on — title, source URL, date, and a few per-type fields like the Spotify link on a music review. No conversion, no HTML-to-markdown round trip. The build spit out 445 of them across posts, blips, restaurant reviews, and song reviews, each one a plain-text file an agent can read without running my JavaScript. I think I used like 17% of the context window for planning and execution.

I left the twins indexable on purpose. A personal site is for poking around, and if someone (or something) would rather read the markdown, that's fine by me. Plus, I'll get to learn if they get indexed.

The one thing I didn't do (yet) is fully copy the approach that Every.to took. They summarize the content and provide some prompts at the end. That feels like a cool idea, but baby steps.