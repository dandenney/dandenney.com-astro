#!/usr/bin/env node

/**
 * Spotify Song Review Generator
 *
 * Automatically generates AI-powered song reviews from Spotify URLs
 * Can be run via GitHub Actions or locally
 *
 * Usage:
 *   GitHub Actions: Triggered by workflow with lyrics passed via SONG_LYRICS env var
 *   Local: node scripts/generate-song-review.mjs <spotify-url> [lyrics]
 *     OR: SONG_LYRICS="lyrics here" node scripts/generate-song-review.mjs <spotify-url>
 *
 *   If lyrics are provided, they'll be included in the review prompt.
 *   Lyrics can be passed as:
 *   - Command line argument: node scripts/generate-song-review.mjs "https://..." "verse 1 lyrics\nchorus lyrics..."
 *   - Environment variable: SONG_LYRICS="verse 1 lyrics\nchorus lyrics..." node scripts/generate-song-review.mjs "https://..."
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Environment variables
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const GITHUB_EVENT_PATH = process.env.GITHUB_EVENT_PATH;
const SONG_LYRICS = process.env.SONG_LYRICS;

// Spotify API endpoints
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const TRACK_ENDPOINT = 'https://api.spotify.com/v1/tracks';
const ARTIST_ENDPOINT = 'https://api.spotify.com/v1/artists';

// OpenAI API endpoint
const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

/**
 * Get Spotify access token using refresh token
 */
async function getSpotifyAccessToken() {
  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to get Spotify access token: ${data.error_description || data.error}`);
  }

  return data.access_token;
}

/**
 * Extract Spotify track ID from URL
 */
function extractTrackId(url) {
  const match = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
  if (!match) {
    throw new Error(`Invalid Spotify URL: ${url}`);
  }
  return match[1];
}

/**
 * Fetch track metadata from Spotify
 */
async function getTrackMetadata(trackId, accessToken) {
  const response = await fetch(`${TRACK_ENDPOINT}/${trackId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to fetch track: ${data.error?.message || 'Unknown error'}`);
  }

  return data;
}

/**
 * Fetch artist metadata from Spotify (for genres)
 */
async function getArtistMetadata(artistId, accessToken) {
  const response = await fetch(`${ARTIST_ENDPOINT}/${artistId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to fetch artist: ${data.error?.message || 'Unknown error'}`);
  }

  return data;
}


/**
 * Generate review using OpenAI API
 */
async function generateReview(track, artist, lyrics = null) {
  const lyricsSection = lyrics ? `
Lyrics:
${lyrics}
` : '';

  const prompt = `
Write a music review for this song in the style of Amanda Petrusich.

Track: ${track.name}
Artist: ${artist.name}
Album: ${track.album.name}
Genre: ${artist.genres.join(', ') || 'Unknown'}
Release Date: ${track.album.release_date}
${lyricsSection}
Important context:
- You do NOT have access to streaming audio
- Write based on what you genuinely know about this song from your training data${lyrics ? ' and the lyrics provided above' : ''}
- If you know specific details (lyrics, sound, structure), focus on those
- If you don't know the song well, write about the artist's style, the genre, and what the title suggests
- NEVER acknowledge that you lack information - just write the best review you can

Guidelines:
- Write 3 thoughtful paragraphs (around 200-250 words total)
- Use literary, evocative language that captures both sound and feeling
- Blend close attention to detail with broader reflections on why music matters
- Be intellectually curious but emotionally honest
- Let your sentences breathe with varied rhythm and length
- Focus on themes, emotional resonance, and what the song reveals about human experience
- Situate the song in the artist's trajectory or within its genre when possible
- Avoid cliches and insider jargon
- Write with warmth, vulnerability, and genuine insight
- DO NOT mention whether lyrics were available or unavailable
- DO NOT use phrases like "with only the title to go on" or "it's hard to say exactly"
- Write as if you're familiar with the song, drawing on your knowledge of the artist and genre

Output:
- Write only the review text, no title or metadata
- Do not include any notes about missing information
`;

  const response = await fetch(OPENAI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a literary music critic in the tradition of Amanda Petrusich - writing for The New Yorker with depth, vulnerability, and attention to the ways music shapes our inner lives. Your writing is thoughtful, personal, and culturally aware, blending close listening with broader reflections on what music means to us.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.9,
      max_tokens: 600,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${data.error?.message || 'Unknown error'}`);
  }

  return data.choices[0].message.content.trim();
}

/**
 * Create slugified string for filenames
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Format duration from ms to readable string
 */
function formatDuration(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds.padStart(2, '0')}`;
}

/**
 * Create markdown file with frontmatter and review
 */
function createMarkdownFile(track, artist, review, lyrics = null) {
  const artistSlug = slugify(artist.name);
  const trackSlug = slugify(track.name);
  const filename = `${artistSlug}-${trackSlug}.md`;

  const artistNames = track.artists.map(a => a.name);
  const albumArt = track.album.images[0]?.url || '';
  const previewUrl = track.preview_url || '';

  const frontmatter = `---
title: "${track.name.replace(/"/g, '\\"')}"
artist: "${artist.name.replace(/"/g, '\\"')}"
artists: ${JSON.stringify(artistNames)}
album: "${track.album.name.replace(/"/g, '\\"')}"
releaseDate: "${track.album.release_date}"
spotifyUrl: "${track.external_urls.spotify}"
spotifyId: "${track.id}"
albumArt: "${albumArt}"
duration: ${track.duration_ms}
genres: ${JSON.stringify(artist.genres)}
${previewUrl ? `preview: "${previewUrl}"` : '# preview: ""'}
pubDate: "${new Date().toISOString().split('T')[0]}"
tags: ${JSON.stringify([...new Set(artist.genres.slice(0, 2))])}
aiGenerated: true
---

${review}
`;

  const outputPath = path.join(__dirname, '..', 'src', 'content', 'songs', filename);

  fs.writeFileSync(outputPath, frontmatter, 'utf8');

  return filename;
}

/**
 * Extract Spotify URLs from GitHub event
 */
function extractSpotifyUrlsFromGitHub() {
  if (!GITHUB_EVENT_PATH) {
    return [];
  }

  const eventData = JSON.parse(fs.readFileSync(GITHUB_EVENT_PATH, 'utf8'));
  const urls = [];

  // Check PR comment
  if (eventData.comment?.body) {
    const matches = eventData.comment.body.matchAll(/https:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9]+/g);
    urls.push(...matches);
  }

  // Check PR body
  if (eventData.pull_request?.body) {
    const matches = eventData.pull_request.body.matchAll(/https:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9]+/g);
    urls.push(...matches);
  }

  return urls.map(m => m[0]);
}

/**
 * Main execution
 */
async function main() {
  // Validate environment variables
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    console.error('❌ Missing Spotify credentials. Set SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN.');
    process.exit(1);
  }

  if (!OPENAI_API_KEY) {
    console.error('❌ Missing OpenAI API key. Set OPENAI_API_KEY.');
    process.exit(1);
  }

  // Get Spotify URLs and optional lyrics
  let spotifyUrls = [];
  let providedLyrics = null;

  if (process.argv.length > 2) {
    // Local mode: URL provided as argument
    spotifyUrls = [process.argv[2]];
    // Optional lyrics as second argument or from environment variable
    providedLyrics = process.argv[3] || SONG_LYRICS || null;
  } else {
    // GitHub Actions mode: Extract from event
    spotifyUrls = extractSpotifyUrlsFromGitHub();
    // Use lyrics from environment variable if available
    providedLyrics = SONG_LYRICS || null;
  }

  if (spotifyUrls.length === 0) {
    process.exit(0);
  }

  // Process each URL
  for (const url of spotifyUrls) {
    try {
      // Extract track ID
      const trackId = extractTrackId(url);

      // Get Spotify access token
      const accessToken = await getSpotifyAccessToken();

      // Fetch track metadata
      const track = await getTrackMetadata(trackId, accessToken);

      // Fetch artist metadata (for genres)
      const artist = await getArtistMetadata(track.artists[0].id, accessToken);

      // Use provided lyrics or null
      const lyrics = providedLyrics;

      // Generate AI review
      const review = await generateReview(track, artist, lyrics);

      // Create markdown file
      createMarkdownFile(track, artist, review, lyrics);

    } catch (error) {
      console.error(`❌ Error processing ${url}:`, error.message);
      console.error(error.stack);
      process.exit(1);
    }
  }
}

main();
