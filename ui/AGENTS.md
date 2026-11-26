# Building a UI exploration

You're making one variant of an interface exploration for dandenney.com/ui. Your brief is `ui/<slug>/BRIEF.md`: its frontmatter says what kind of thing this is, and its body says what it's for. Make the most beautiful version you can of something that communicates or works unusually well. People will poke at it, so it has to really work, not just screenshot well.

## The file

- One complete HTML document, `<!doctype html>` to `</html>`, with no build step and no local assets. It's saved as `ui/<slug>/<variant>.html`, named for you (the model or agent).
- Style it with Tailwind v4 by loading the browser build in `<head>`:
  `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`
  Put tokens and custom CSS in `<style type="text/tailwindcss">` blocks (`@theme { … }`, `@layer components { … }`). The site compiles these at build time, so don't use any other way to load Tailwind.
- Plain CSS in ordinary `<style>` blocks is fine for what utilities can't say (keyframes, `@property`, complex selectors).
- Behavior goes in inline `<script>` tags using vanilla JS and the platform. No frameworks. A small library from a CDN is fine only when the brief calls for one, such as a physics or WebGL effect.
- Web fonts from Google Fonts or another public CDN are fine. Images are CSS, inline SVG, or `data:` URIs.
- It renders in an iframe of any width from 320px up, including as a 1280×800 thumbnail scaled down. Fill the frame and look composed at both sizes. Put the subject near the top, because the thumbnail and the 1200×630 social image crop to it.
- Keep markup portable. Someone may port this to React and shadcn/ui later, so use semantic elements, Tailwind classes on them, tokens in `@theme`, and state in `data-*`/`aria-*` attributes rather than in scattered inline styles.

## Must

- Use real content that fits the brief, never lorem ipsum.
- Cover every state the brief names: empty, loading, error, success, disabled.
- Make it keyboard operable, with visible focus, real labels and roles, and AA contrast.
- Respect `prefers-reduced-motion`: motion that carries information stays and gets simpler, decoration stops.
- Hold up on touch: no hover-only affordances, targets of at least 44px.

## House taste (skip this section when the brief says `style: free`)

- A light, quiet surface: warm paper rather than pure white, one accent used sparingly, thin rules over heavy boxes.
- Type leads. Pair a display face with a body face, and don't reach for the usual suspects (Inter, Space Grotesk, the IBM Plex family, Fraunces, Playfair, DM, Syne).
- Use OKLCH colors and tint the neutrals toward the accent. Never pure #000 or #fff.
- Avoid AI tells: purple-to-blue gradients, gradient text, glowing cards on dark, thick colored side borders on cards, identical icon-card grids, and hero-metric templates.
- One memorable detail beats ten decorations.

`style: free` means the brief wants something that breaks these on purpose. Go all the way in the direction it describes.
