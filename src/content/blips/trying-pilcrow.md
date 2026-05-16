---
summary: Me write pretty one day
title: Trying Pilcrow
pubDate: '2026-05-16'
---

Paul Bakaus [shared this](https://x.com/pbakaus/status/2055288495275708510?s=20), as it's based on his work with Impeccable. I'm giving it a shot and figured I'd share the full thread here

```
❯ /pilcrow document                                                                                           

⏺ Loading shared context and the document playbook.

⏺ Bash(node .claude/skills/pilcrow/scripts/load-context.mjs)
  ⎿  {
       "hasVoice": false,
       "voice": null,
     … +3 lines (ctrl+o to expand)

  Read 4 files (ctrl+o to expand)

⏺ Now finding the corpus. This site stores content under src/content/ — let me survey what's there.

  Searched for 4 patterns, listed 1 directory (ctrl+o to expand)

⏺ Good spread — 86 posts, well over 20k words total. I'll sample 7 representative files spanning recent to
  older, across genres. Running the engine on them now.

⏺ Bash(pilcrow lint \
        "src/content/posts/conferences/datatune-2026.md" \…)
  ⎿  Error: Exit code 1
     {
       "files": [
         {
           "file": "src/content/posts/conferences/datatune-2026.md",
           "findings": [
             {
               "ruleId": "paragraph-monotony",
               "ruleName": "Paragraph monotony",
               "severity": "info",
     … +231 lines (ctrl+o to expand)

⏺ Good engine pass. Now reading the actual prose for stylometric features.

  Read 6 files (ctrl+o to expand)

⏺ I have enough to synthesize. Here's what the corpus shows — 7 files, ~25,000 words sampled across 2012–2026.

  ---
  Proposed VOICE.md (from corpus scan):

  ---
  name: VOICE
  genre: personal-essay (conference posts blend report structure in)
  audience: fellow web developers / designers in Dan's tech community (best-guess)
  stance: explain (best-guess — explains things through the lens of his own experience)
  method: unset — open question for teach
  updated: 2026-05-16
  source: document
  corpus: 7 files, ~25,000 words sampled from 2012–2026
  ---

  # Voice (drafted by document)

  ## Register

  Sentences run conversational — short punches alternating with longer explanations (mean
  ~18 words, wide stdev). The writing lives in first-person throughout: nearly every
  paragraph contains "I" and frequently "we" when referencing a partner, friend, or
  collaborator. Contractions are the default, not the exception (`I'm`, `it's`, `he's`,
  `we're`, `I've`). Enthusiasm is direct: "I'm hooked", "it's so good", "I dig em",
  "seriously amazing" — not performed warmth, but reported reaction. Uncertainty is equally
  direct: "I'm not sure", "I don't know", "¯\_(ツ)_/¯".

  ## Signatures (proposed)

  - **Personal-context opener** — Nearly every post opens with where Dan is, what he just did,
    or what he recently read, before the subject appears. Conference posts, tech posts, and
    general posts all share this pattern. (datatune-2026.md ¶1, a-new-adventure.md ¶1,
    visualizing-disruptive-albums.md ¶1)

  - **"My take:" / "My follow-ups from this one are:" section structure** — Conference posts
    reliably use a per-speaker structure ending in a personal reaction block. This has been
    consistent from 2012 to 2026. (circles-conf-2012.md throughout, datatune-2026.md
    throughout)

  - **Named people and relationships embedded in prose** — Friends, partners, colleagues
    appear by first name: "Eden and I", "Cherrie and I", "Ram and I run". The writing is
    embedded in community.

  - **Rhetorical questions mid-paragraph** — Questions used to invite the reader into the
    thought: "How amazing is it that an album can drop…?", "What's the cutoff for 'that's
    good enough' in its world?" (visualizing-disruptive-albums.md ¶3,
    building-a-lovable-tool-with-ai.md ¶4)

  - **Parenthetical asides for quick clarifications** — Engine found 5–6 per longer post
    (0.2–0.3 per 100 words). Used for friendly tangents ("(and had the option for imbibing)")
    and factual notes ("(Formerly known as Jane Doe No. 7)"). On the high side; confirm
    whether this feels like voice or something to cut.

  - **Vague "some"** — "some great sponsors", "some VPS solutions", "some of the decent Qwen
    ones", "some interesting things". Appears frequently. Confirm: voice habit or tic to flag?

  ## Taboos (proposed — zero-occurrence across corpus)

  - `delve into`, `navigate the complexities`, `rich tapestry` — 0 occurrences.
  - Marketing-template imperative tricolon — 0 occurrences.
  - Bullet-bold-lead lists — 0 occurrences.
  - AI fossil phrases — 0 occurrences in original prose (one engine hit was quoting a speaker,
    not Dan's own language).
  - Colon headlines — 0 occurrences. Titles are plain: "DataTune 2026", "A New Adventure".

  ## Open questions

  1. **Audience.** Stats show strong first-person, community-embedded framing with names and
     relationship context. Best-guess: web developers / designers who know Dan or share his
     interests. Right? Or is there a secondary reader you're writing for?
  2. **Stance.** Stats show explain-through-experience: you're rarely arguing a thesis,
     mostly reporting what you did and what you took from it. Best-guess: `explain` (leaning
     toward `narrate` in the conference posts). Right?
  3. **Method.** Stats can't see this. How do you draft — outliner, discovery, iterative,
     model-drafter?
  4. **Signature vs. tic — parenthetical asides.** Engine flagged density at 5–6 per long
     post. Are these intentional rhythm breaks, or something you'd cut on a polish pass?
  5. **Signature vs. tic — "some".** "Some great sponsors", "some VPS solutions" — do you
     want this flagged, or is it deliberate casual register?

  ---
  Write this to VOICE.md in the project root? Or answer any of the open questions now and I'll update before
  writing.

✻ Brewed for 2m 56s

❯ 1. Exactly                                                                                                  
  2. Correct                                                                                                  
  3. Iterative, I rarely outline. I run through in my head a bunch until I start typing and then iterate      
  4. I can't answer that based on the sentence here, I'd need to see an example of a parenthetical aside      
  5. I'm casual, I'm not opposed to improvin, but I speak and write plainly                                   
  
⏺ Good. For #4, here are representative examples from the corpus — the engine flagged parenthetical asides at
  ~0.3 per 100 words:

  - …I co-organize a local meetup group (Artificial Intelligencers) and because my partner… — name
  clarification
  - …everyone was fell fed (and had the option for imbibing) — friendly tangent
  - …Along Blue Point Beach, people found her legs wrapped in plastic. (Formerly known as Jane Doe No. 7) —
  factual footnote
  - …One really cool feature is that you don't have to bring data, they have a new tool for generative data as
   well. — wrapped in parens in the source

  Are these voice you'd keep, or does seeing them together make you want to cut any class of them?

✻ Crunched for 15s

❯ I'd keep them                                                                                               

⏺ All five questions resolved. Here's the final VOICE.md — no open questions remaining:
  
  ---
  name: VOICE
  genre: personal-essay
  audience: web developers and designers in Dan's tech community
  stance: explain
  method: iterative
  updated: 2026-05-16
  source: document
  corpus: 7 files, ~25,000 words sampled from 2012–2026
  ---

  # Voice

  ## Register

  Conversational throughout — short punches alternating with longer explanations, mean
  sentence length ~18 words with wide variance. Nearly every paragraph contains "I"; "we"
  appears when referencing a partner, friend, or collaborator by name. Contractions are
  the default (`I'm`, `it's`, `he's`, `we're`, `I've`). Enthusiasm is reported plainly:
  "I'm hooked", "it's so good", "seriously amazing". Uncertainty is equally plain:
  "I'm not sure", "I don't know", "¯\_(ツ)_/¯". Plain speech register throughout — no
  academic framing, no marketing register.

  ## Signatures

  - **Personal-context opener.** Nearly every post opens with where Dan is, what he just
    did, or what he recently read before the subject appears. Consistent from 2012 to 2026.
    (datatune-2026.md ¶1, a-new-adventure.md ¶1, visualizing-disruptive-albums.md ¶1)

  - **"My take:" / "My follow-ups:" section structure.** Conference posts use a per-speaker
    block ending in a personal reaction or bullet list of follow-ups. Consistent across a
    14-year span. (circles-conf-2012.md, datatune-2026.md)

  - **Named people and relationships.** Friends, partners, and colleagues appear by first
    name embedded in the prose: "Eden and I", "Cherrie and I", "Ram and I run". The writing
    is community-embedded.

  - **Rhetorical questions mid-paragraph.** Questions invite the reader into the thought
    rather than asserting. "How amazing is it that an album can drop…?", "What's the cutoff
    for 'that's good enough' in its world?" (visualizing-disruptive-albums.md ¶3,
    building-a-lovable-tool-with-ai.md ¶4)

  - **Parenthetical asides.** 5–6 per longer post (0.2–0.3/100 words). Used for name
    clarifications, friendly tangents, and factual footnotes. Voice — do not flag.

  - **Plain casual quantifiers ("some", "a few", "a little").** Part of the plain-speech
    register. Not a tic to flag.

  ## Taboos

  - `delve into`, `navigate the complexities`, `rich tapestry` — 0 occurrences.
  - Marketing-template imperative tricolon — 0 occurrences.
  - Bullet-bold-lead lists — 0 occurrences.
  - AI fossil phrases — 0 occurrences in Dan's own prose.
  - Colon headlines — 0 occurrences. Titles are plain nouns or short phrases.

  Write this to VOICE.md at the project root?

✻ Worked for 29s

❯ yes                                                                                                         

⏺ Write(VOICE.md)
  ⎿  Wrote 55 lines to VOICE.md
       1 ---
       2 name: VOICE
       3 genre: personal-essay
       4 audience: web developers and designers in Dan's tech community
       5 stance: explain
       6 method: iterative
       7 updated: 2026-05-16
       8 source: document
       9 corpus: 7 files, ~25,000 words sampled from 2012–2026
      10 ---
     … +45 lines (ctrl+o to expand)

⏺ Written. VOICE.md is at the project root and pilcrow will pick it up automatically on the next editor
  command.
```