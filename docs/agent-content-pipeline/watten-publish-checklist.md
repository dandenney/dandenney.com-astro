# Watten Publish Checklist (Pre-PR Gate)

## 1) Packet validation

- [ ] Packet JSON matches the correct schema
- [ ] `confidence` and canonical `sources[]` are present
- [ ] `narrativeContext` is present with at least two grounded anchors
- [ ] Every researched narrative anchor has `claim` and `sourceUrl`
- [ ] `followUpNeeded` is `false`; otherwise drafting stopped for Dan's answer
- [ ] `prompt.md` contains `## Narrative anchors` and `## Dan-approved calibration`
- [ ] Flags and missing context are surfaced in run notes

## 2) Frontmatter validation

### No Reservaitions (`src/content/reviews/*.md`)

- [ ] Required fields present: `title`, `address`, `city`, `state`, `country`, `coordinates`, `description`, `pubDate`, `tags`, `aiGenerated`
- [ ] Coordinates are valid `lng, lat`
- [ ] City/state use project normalization
- [ ] Country uses a canonical name such as `United States`
- [ ] `pubDate` uses `YYYY-MM-DD`
- [ ] Tags are 1-4 broad routing-safe categories
- [ ] Tags do not repeat title, venue, slug, city, state, or neighborhood
- [ ] Golf entries use exactly `["golf"]`
- [ ] If an image was supplied, full and thumbnail WebP assets exist at the expected dimensions
- [ ] If an image was supplied, `heroImage` is the slug basename only

### Music (`src/content/songs/*.md`)

- [ ] Required music frontmatter is present
- [ ] Packet includes `lyrics.status|text|source`
- [ ] Missing lyrics are flagged with lookup attempts
- [ ] Spotify URL and ID are consistent
- [ ] Duration is integer milliseconds
- [ ] Artists and genres are populated when data exists

## 3) File/path/slug rules

- [ ] Filename slug matches project conventions
- [ ] Target collection path is correct
- [ ] Duplicate slug/file check ran before write

## 4) No Reservaitions editorial gate

- [ ] `yarn agent:content:test` passes
- [ ] Publisher gate passes against the exact final body
- [ ] The opening places the reader in a real scene, occasion, or sourced piece of history
- [ ] The body connects food or drink to people, place, appetite, or occasion
- [ ] The swap-name test fails: another venue name cannot be substituted without breaking the review
- [ ] Venue history illuminates this visit instead of reading like an encyclopedia insert
- [ ] No unsupported sensory, atmospheric, service, dialogue, reaction, ownership, or history claims appear
- [ ] No source-artifact or publishing-process narration appears
- [ ] Abstract order-analysis does not substitute for lived experience
- [ ] The ending is specific to this visit and avoids generic consumer advice

## 5) Project checks

- [ ] Install dependencies if the declared packages are missing locally
- [ ] Run `fnm exec --using=$(cat .nvmrc) npx astro check`
- [ ] Run `fnm exec --using=$(cat .nvmrc) yarn build`

## 6) Delivery

- [ ] Include packet summary, assumptions, confidence, and fallback notes
- [ ] State local-only versus committed/pushed
- [ ] If pushed, include commit hash
- [ ] Verify the remote ref matches local HEAD
- [ ] For published content, verify the live URL contains the expected title and distinctive body text
