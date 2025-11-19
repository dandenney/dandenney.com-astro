# Music Page Setup Guide

This guide will help you set up the "Seasons of Dan" music page that displays your Spotify listening history across different time periods.

## Prerequisites

- A Spotify account
- Access to the Spotify Developer Dashboard

## Setup Steps

### 1. Create a Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click "Create an App"
4. Fill in the app name (e.g., "My Personal Website") and description
5. Accept the Terms of Service
6. Click "Create"

### 2. Configure Your App

1. In your app's dashboard, click "Settings"
2. Add `http://localhost:8888/callback` to the "Redirect URIs" field
   - If that doesn't work, try `http://127.0.0.1:8888/callback` instead
3. Click "Save"
4. Note your **Client ID** and **Client Secret** (you'll need these in the next step)

### 3. Generate Your Refresh Token

Run the helper script to generate your refresh token:

```bash
node scripts/get-spotify-refresh-token.mjs
```

Follow the prompts:
1. Enter your Client ID
2. Enter your Client Secret
3. Open the authorization URL in your browser
4. Authorize the app
5. Copy the credentials displayed in the terminal

### 4. Update Your Environment Variables

Update your `.env.local` file with the credentials from the previous step:

```env
SPOTIFY_CLIENT_ID=your_actual_client_id
SPOTIFY_CLIENT_SECRET=your_actual_client_secret
SPOTIFY_REFRESH_TOKEN=your_actual_refresh_token
```

### 5. Start Your Development Server

```bash
yarn dev
```

Navigate to `http://localhost:4321/music` to see your music page!

## Customizing Personal Notes

You can add personal notes to each time period section by editing the `timeRanges` array in `src/pages/music.astro`:

```javascript
const timeRanges = [
  {
    key: 'short_term',
    title: 'Right Now',
    subtitle: 'Last 4 weeks',
    note: 'This era was my "too much work, need synths" phase'
  },
  {
    key: 'medium_term',
    title: 'This Year',
    subtitle: 'Last 6 months',
    note: 'Discovering new indie artists'
  },
  {
    key: 'long_term',
    title: 'All-Timer Stuff',
    subtitle: 'Several years',
    note: 'The classics that never get old'
  }
];
```

Simply update the `note` field for each section with your personal commentary.

## Features

- **Three Time Periods**: Short-term (4 weeks), medium-term (6 months), and long-term (years)
- **Top 10 Lists**: Shows your top 10 tracks and artists for each period
- **Album Art**: Displays album covers for tracks and artist images
- **Dark Mode**: Automatically adapts to your site's dark mode
- **Responsive Design**: Works great on mobile and desktop
- **Spotify Links**: Click any track or artist to open it in Spotify

## Troubleshooting

### "Failed to load music data" Error

1. Check that your `.env.local` file has all three Spotify variables set
2. Verify your credentials are correct
3. Make sure you've added the correct redirect URI in your Spotify app settings
4. Check the browser console for more detailed error messages

### Refresh Token Expired

Spotify refresh tokens typically don't expire, but if you encounter auth errors:
1. Re-run the `get-spotify-refresh-token.mjs` script
2. Update your `.env.local` with the new token

### API Rate Limits

The Spotify API has rate limits. The page caches responses for 24 hours to minimize API calls.

## API Endpoints

The following API endpoints are available:

- `GET /api/spotify/token` - Gets a fresh access token
- `GET /api/spotify/top-items?type=tracks&time_range=short_term` - Gets top tracks
- `GET /api/spotify/top-items?type=artists&time_range=medium_term` - Gets top artists

Query parameters:
- `type`: `tracks` or `artists`
- `time_range`: `short_term`, `medium_term`, or `long_term`
