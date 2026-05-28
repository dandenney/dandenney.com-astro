---
name: new-content
description: Scaffold a new content entry file with correct frontmatter for any content type on dandenney.com-astro (post, blip, review, song, tinkering, plus-ev, artificially-intelligent). Pass the type and title as arguments.
---

Scaffold a new content entry for dandenney.com-astro. The user will provide a content type and a title (and optionally extra details). You will:

1. Determine the correct directory and filename convention for the type
2. Write a file with all required frontmatter fields pre-populated and optional fields commented out
3. Leave the body as a placeholder comment
4. Report the absolute file path created

---

## Directory Map

| Type | Directory | Filename convention |
|------|-----------|-------------------|
| `blip` | `src/content/blips/` | `kebab-case-title.md` |
| `post` | `src/content/posts/general/` (default) or user-specified subcategory | `kebab-case-title.md` |
| `review` | `src/content/reviews/` | `kebab-case-venue-name.md` |
| `song` | `src/content/songs/` | `kebab-artist-kebab-title.md` |
| `tinkering` | `src/content/tinkerings/` | `kebab-case-title.md` |
| `plus-ev` | `src/content/plus-ev/` | `YYYY-MM-DD.md` (today's date) |
| `artificially-intelligent` | `src/content/artificially-intelligent/` | `kebab-case-title.md` |

---

## Frontmatter Templates

### blip
```yaml
---
pubDate: "YYYY-MM-DD"
title: "Title Here"
# summary: ""   # optional
---

<!-- content here -->
```

### post
```yaml
---
pubDate: "YYYY-MM-DD"
title: "Title Here"
summary: ""
tags:
  - general
# cloudinaryThumb: ""   # optional: Cloudinary image ID
# socialImageFilename: ""   # optional
# thumb: ""   # optional: Cloudinary path
# thumbAlt: ""   # optional
# strapiSeries: false   # optional
---

<!-- content here -->
```

### review
```yaml
---
pubDate: "YYYY-MM-DD"
title: "Venue Name"
description: ""
city: "city-name"
country: "United States"
tags:
  - food
aiGenerated: false
# address: ""   # optional but recommended
# coordinates: longitude, latitude   # optional: required for map pin (format: -86.7816, 36.1627)
# state: ""   # optional
# heroImage: ""   # optional: base name without extension
# heroImageAlt: ""   # optional
# heroImageAttribution: ""   # optional
# heroImageUrl: ""   # optional
# infoUrl: ""   # optional
# updatedDate: ""   # optional
---

<!-- content here -->
```

> ⚠️ Coordinates must be `longitude, latitude` order (not lat/long) — the map rendering depends on this exact format.

### song
```yaml
---
pubDate: "YYYY-MM-DD"
title: "Song Title"
artist: "Artist Name"
artists:
  - "Artist Name"
album: "Album Name"
releaseDate: "YYYY-MM-DD"
spotifyUrl: "https://open.spotify.com/track/TRACK_ID"
spotifyId: "TRACK_ID"
duration: 0   # milliseconds
genres: []
tags: []
aiGenerated: true
# albumArt: ""   # optional: Spotify album art URL (https://i.scdn.co/...)
# preview: ""   # optional: 30s preview URL
# rating: 4   # optional: 1–5
---

<!-- content here -->
```

### tinkering
```yaml
---
pubDate: "YYYY-MM-DD"
title: "Title Here"
# summary: ""   # optional
# thumb: ""   # optional: Cloudinary path (e.g. v1234567890/tinkerings/name.png)
# thumbAlt: ""   # optional
---

<!-- content here -->
```

### plus-ev
```yaml
---
pubDate: "YYYY-MM-DD"
title: "Recap: YYYY-MM-DD"
summary: ""
# sport: "nba"   # optional: "nba" | "mlb" | "both"
# recapDate: "YYYY-MM-DD"   # optional
# picks:   # optional
#   - recommender: ""
#     pick: ""
#     result: "pending"
---

<!-- content here -->
```

### artificially-intelligent
```yaml
---
pubDate: "YYYY-MM-DD"
title: "Title Here"
githubPath: "https://github.com/dandenney/..."
# summary: ""   # optional
# tags:   # optional
#   - ai
---

<!-- content here -->
```

---

## Rules

- Always use today's date for `pubDate`
- All paths written with absolute path using `/Users/dandenney/Repos/dandenney.com-astro/` prefix
- Never use relative imports anywhere in the file
- For songs: the filename is `artist-name-song-title.md` (both in kebab-case, joined with a hyphen)
- For plus-ev: always use today's date as the filename (`YYYY-MM-DD.md`)
- If the user provides extra info (artist, venue city, Spotify URL, etc.) populate those fields immediately instead of leaving placeholders
- After writing the file, report the full path so the user can open it directly
