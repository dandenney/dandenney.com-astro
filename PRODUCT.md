# .impeccable.md

## Design Context

### Users
Web workers — primarily developers and designers. They're visiting during work hours or personal browsing, likely on desktop but mobile too. Context is casual and lateral — not evaluative. They're not judging a portfolio; they're reading something a colleague made. This audience notices what others miss: optical sizing, grid decisions, spacing choices. Design with that double awareness: immediately legible to anyone, quietly impressive to peers.

### Brand Personality
Clean, bold, whimsical. In physical form: somewhere between a zine and a workshop journal. Not precious — it has a personality and isn't afraid to show it. The illustrated portrait, the big typographic logotype, the diagonal hatching pattern on grids — these are intentional character marks that should be preserved and refined, not replaced.

If pressed to 3 words: **deliberate, playful, direct**.

### Aesthetic Direction
**References:** arielsalminen.com — typographically strong, editorial, clean with personality. Various SaaS sites that have actual design opinions (not generic SaaS). The zine/journal register is more accurate than a pure SaaS reference.

**Anti-reference:** Generic SaaS templates. AI-aesthetic (glowing cards, purple-blue gradients, dark-by-default-because-cool). Over-engineered portfolio vibes. Gratuitous demos.

**Theme:** Light and dark mode both supported, user-toggled. Light is the primary reading context. Dark should feel equally resolved, not just inverted. Functional sub-sections (plus-ev, betting trackers) are allowed to diverge into their own aesthetic register.

**Color:** Primary accent is `#b91c1c` (red-700). White and gray (slate family) are the foundation — this combination is a keeper and should not be diluted with extra accent colors. The custom avatar's teal-green highlight (`#03ef62`) is a secondary accent that appears sparingly. When red appears, it means something. The existing diagonal hatching motif and animated link underlines are established brand details — preserve and refine rather than replace.

**Typography:** Montserrat is the current brand font. It doesn't need to be permanent in all sections, but any display font must be bold enough to carry the large logotype-style treatments and distinctive enough to feel chosen, not defaulted to.

### Design Principles

1. **Editorial over component.** Typography leads every section. Think zine page, not UI widget. Headings should have weight and presence; body text should be readable and calm.

2. **Whimsy lives in the details.** The base is clean and restrained. Surprising moments (the diagonal hatch, the animated radar blips, the illustrated portrait) are earned because they're sparse. Don't add flourishes everywhere — place them where they'll land.

3. **Commit to the palette.** White, gray, red. The power of this combination comes from discipline. Don't introduce new accent colors without a strong reason.

4. **Sections can have identity.** The main editorial voice is consistent, but functional/experimental sections (plus-ev, betting trackers) are allowed to diverge in tone. They should still feel coherent within themselves.

5. **Peer-to-peer, not presenter-to-audience.** Design decisions should feel collegial. Avoid anything that positions the site as a stage. Copy and hierarchy should feel like a smart person talking, not a brand broadcasting.

6. **Accessible by default.** No specific WCAG grade target, but shoot for AA contrast and sensible focus states throughout. Reduced motion preferences should always be respected.

---

## Plus EV Section Context

### Identity
Plus EV is a standalone sub-section with its own visual identity — dark-only, emerald accent — modeled after the martingale-tracker page. It does not inherit the main site's red accent or dual-mode system. It should feel like a project that lives inside dandenney.com, not a detached product.

### Ownership framing
Dan owns the project; Gale (an AI persona) writes the daily recaps. This split must be clear on the index page — Dan is the experimenter, Gale is the narrator. Neither should be hidden.

### Visual reference
The martingale-tracker page sets the register: font-black headlines, monospace micro-labels with extreme tracking, backdrop-blur cards, emerald/cyan glows, tactical grid overlay. Plus EV should match that energy — bold, data-forward — without being a copy.

### Common failure modes to avoid
- Low contrast labels (text-slate-600 on dark bg is invisible)
- Undersized numbers in stat cards
- No hero weight — the page needs a strong opening, not just a title
- Missing site navigation — Plus EV should link back to dandenney.com
