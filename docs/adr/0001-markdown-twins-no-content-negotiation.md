# Agent-readable content via static Markdown twins, not content negotiation

To make content agent-readable (inspired by Every.to's "agent" toggle), each eligible page exposes a static **Markdown twin** at a `.md` URL (e.g. `/posts/slug.md`) served as `text/plain`, discoverable via a per-page `<link rel="alternate">`, a visible `.md` toggle, and a generated `/llms.txt`. We deliberately do **not** content-negotiate the HTML URL to return markdown when an agent is detected.

## Considered Options

- **Content negotiation on the canonical URL** (inspect `Accept`/`User-Agent`, return markdown to agents). Rejected: it forces content pages off `prerender = true` into per-request SSR (losing static/CDN delivery), depends on a fragile, ever-churning bot-detection list, and risks search engines flagging the HTML/markdown divergence as cloaking.
- **In-page DOM-swap toggle only** (no standalone artifact). Rejected: nothing fetchable for an agent that isn't running JS or guessing a query param.

## Why this way

The raw markdown already exists on disk (all content is 100% `.md`; layouts already receive `post.body`), so a static twin is nearly free to produce and stays prerenderable and CDN-cacheable. Exposing-not-auto-serving keeps the HTML pages untouched and the URL behavior predictable, while still giving agents a real, discoverable artifact.

## Consequences

- A future reader seeing `.md` endpoints and no user-agent handling might assume content negotiation was forgotten. It was not — adding it would reintroduce the SSR/cloaking/bot-list costs above. Do not "fix" this by negotiating the canonical URL.
- Twins are intentionally indexable (no `noindex`), favoring discovery over duplicate-content hygiene on a personal site.

See `CONTEXT.md` for the full vocabulary (Markdown twin, Agent toggle, llms.txt) and the rest of the resolved decisions.
