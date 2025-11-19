# Music Reviews Automation

Automated generation of AI-powered song reviews from Spotify URLs using GitHub Actions.

## How It Works

1. **Share a Spotify link** in a Pull Request comment or description
2. **GitHub Actions triggers** and detects the Spotify URL
3. **Script fetches** track metadata from Spotify API
4. **OpenAI generates** an authentic, conversational review
5. **Markdown file created** in `src/content/songs/`
6. **Changes committed** to your PR automatically

## Quick Start

### 1. Set Up GitHub Secrets

Add these secrets to your GitHub repository settings:

- `SPOTIFY_CLIENT_ID` - Already configured
- `SPOTIFY_CLIENT_SECRET` - Already configured
- `SPOTIFY_REFRESH_TOKEN` - Already configured
- `OPENAI_API_KEY` - **NEW** - Get from https://platform.openai.com/api-keys

### 2. Share a Spotify Link in a PR

Create or comment on a PR with a Spotify track URL:

```
🎵 https://open.spotify.com/track/7CLGZhsRlRaZzJf2g0Qry
```

The workflow will:
- Fetch track metadata (title, artist, album, duration, genres)
- Generate an AI review using GPT-4o-mini
- Create a markdown file: `src/content/songs/morgan-wallen-last-night.md`
- Commit the file to your PR branch
- Comment on the PR with confirmation

### 3. View Your Reviews

- **Gallery**: `/music-reviews` - Grid view of all reviews
- **Individual**: `/music-reviews/[slug]` - Full review with album art
- **Your Listening**: `/music` - Already exists, links to reviews

## Manual Usage

You can also run the script locally:

```bash
# Generate a review for a specific track
node scripts/generate-song-review.mjs https://open.spotify.com/track/7CLGZhsRlRaZzJf2g0Qry

# Or add it to package.json:
yarn review-song https://open.spotify.com/track/...
```

## File Structure

```
src/
├── content/
│   └── songs/                    # Generated song reviews
│       ├── .gitkeep
│       └── artist-track.md       # Auto-generated files
├── layouts/
│   └── SongReview.astro          # Individual review layout
└── pages/
    └── music-reviews/
        ├── index.astro           # Gallery of all reviews
        └── [...slug].astro       # Dynamic review pages
```

## Review Frontmatter Schema

Each generated markdown file includes:

```yaml
---
title: "Last Night"
artist: "Morgan Wallen"
artists: ["Morgan Wallen"]
album: "One Thing at a Time"
releaseDate: "2023-02-03"
spotifyUrl: "https://open.spotify.com/track/..."
spotifyId: "7CLGZhsRlRaZzJf2g0Qry"
albumArt: "https://i.scdn.co/image/..."
duration: 175626
genres: ["contemporary country", "country road"]
preview: "https://p.scdn.co/mp3-preview/..."
pubDate: "2025-01-19"
rating: 4
tags: ["country", "2023", "heartbreak"]
aiGenerated: true
---

[AI-generated review content]
```

## Customization

### Modify the AI Prompt

Edit `scripts/generate-song-review.mjs` around line 120 to change the review style:

```javascript
const prompt = `Write a review for:
Track: ${track.name}
Artist: ${artist.name}

Your custom guidelines here...
`;
```

### Adjust Review Display

- **Layout**: Edit `src/layouts/SongReview.astro`
- **Gallery**: Edit `src/pages/music-reviews/index.astro`
- **Styling**: Modify Tailwind classes in either file

### Add Filtering

Create new pages:
- `/music-reviews/artists/[artist].astro` - Filter by artist
- `/music-reviews/tags/[tag].astro` - Filter by genre/year
- `/music-reviews/[page].astro` - Pagination

## Workflow Configuration

The GitHub Action runs when:
- A PR is opened or edited with a Spotify URL in the body
- A comment is added to a PR containing a Spotify URL

**File**: `.github/workflows/generate-song-review.yml`

To disable: Delete the workflow file or change the trigger conditions.

## Costs

- **Spotify API**: Free (rate-limited to 1 request per second)
- **OpenAI API**: ~$0.002-0.01 per review (GPT-4o-mini pricing)
- **GitHub Actions**: Free for public repos, included in private repo plans

## Troubleshooting

### "No Spotify credentials" error
Add the required secrets to GitHub repository settings.

### "Failed to fetch track" error
- Verify the Spotify URL is valid
- Check that your refresh token hasn't expired
- Run `scripts/get-spotify-refresh-token.mjs` to get a new token

### "OpenAI API error" error
- Verify your OpenAI API key is valid and has credits
- Check the API key has the correct permissions

### Workflow doesn't trigger
- Ensure the PR contains a Spotify **track** URL (not playlist/album)
- Check GitHub Actions is enabled for your repository
- Verify the workflow file syntax is correct

### Duplicate reviews
The script creates a new file each time. To prevent duplicates, you can:
- Check if a file exists before creating (modify the script)
- Use the same filename convention (currently: `artist-track.md`)

## Future Enhancements

Potential additions:
- [ ] Batch processing (multiple URLs in one comment)
- [ ] Album reviews (full album analysis)
- [ ] Spotify audio features (danceability, energy, valence)
- [ ] Lyrics analysis (via Genius API)
- [ ] Rating system (auto-rate 1-5 stars)
- [ ] Similar tracks recommendations
- [ ] Manual review editing workflow
- [ ] Cross-reference with listening history

## Related Files

- **Script**: `scripts/generate-song-review.mjs`
- **Workflow**: `.github/workflows/generate-song-review.yml`
- **Schema**: `src/content/config.ts` (songs collection)
- **Layout**: `src/layouts/SongReview.astro`
- **Pages**: `src/pages/music-reviews/*.astro`
