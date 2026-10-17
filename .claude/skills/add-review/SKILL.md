---
name: add-review
description: Publish a No ReservAItions review (restaurant, bar, venue, concert, outing) from review text Dan wrote elsewhere (usually ChatGPT) plus a photo. Handles venue lookup, hero/thumbnail images, frontmatter, and the commit. Use when Dan pastes a review, says "add this review", or runs /add-review.
---

Dan writes the review prose himself (his long-running ChatGPT thread). This skill only automates everything around it. Do not rewrite his voice.

## Inputs

- Review text (pasted in chat or a file path). Required.
- Place name (`--location`) and city. For concerts the title is the performer and the location is the venue (e.g. title "Jesse Welles", location "The Pinnacle").
- A photo (optional but usual).

Ask only for what is genuinely missing (usually city or which venue).

## Step 1: Fact-check the text against what Dan told you

The text was written by another model, so it can be wrong about what he ate or drank. Compare it with Dan's notes and known corrections:

- Local beers are often named like food. Chicken Scratch is a Little Harpeth Brewing beer, not fried chicken.
- If a sentence contradicts what Dan said, make the smallest edit that fixes the fact and tell him exactly what changed. Do not otherwise edit, "improve", or restyle his prose.

## Step 2: Run the generator

Save the text to a file outside the repo (e.g. `~/review-drafts/<slug>.md`), then:

```bash
yarn review:generate \
  --location "The Pinnacle" --city "nashville" --state "tennessee" \
  --title "Jesse Welles" \
  --body-file ~/review-drafts/jesse-welles.md \
  --image /path/to/photo.jpeg
```

Needs `ANTHROPIC_API_KEY` (Node 22). With `--body-file` the script skips drafting and publishes the text as written. It researches address, coordinates, and info URL, writes description and tags, and with `--image` writes `public/no-reserv-ai-tions/<slug>.webp` (2500px wide) and `<slug>-thumb.webp` (320x240), takes `pubDate` from the photo's EXIF, writes alt text from the photo, and adds `heroImageAttribution: "Photo by Dan Denney"`.

Useful flags: `--slug`, `--date YYYY-MM-DD` (overrides EXIF), `--hero-image-alt`, `--photo-credit`, `--dry-run`, `--force` (overwrite an existing review).

## Step 3: Check the output

Open `src/content/reviews/<slug>.md` and verify:

- `description` repeats no factual mistakes from Step 1.
- Tags: concerts are exactly `["concert","music"]`. Restaurants use cuisine/venue tags already in use.
- Coordinates exist (otherwise the review is missing from the map; ask Dan or look them up).
- `pubDate` is the day of the visit, not the upload day.

## Step 4: Verify and commit

Run `npx astro check`. Stage the review and both images, commit straight to `main` with `feat(reviews): add <Title> review`, and push.

## Step 5: Summary

Report the commit, any fact fixes you made to Dan's text, and anything the script could not find.
