#!/usr/bin/env node

/**
 * Spotify Song Review Generator
 *
 * Automatically generates AI-powered song reviews from Spotify URLs
 * Can be run via GitHub Actions or locally
 *
 * Usage:
 *   GitHub Actions: Triggered by PR comments containing Spotify URLs
 *   Local: node scripts/generate-song-review.mjs <spotify-url>
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
 * Fetch song lyrics using web search
 */
async function fetchLyrics(trackName, artistName) {
  try {
    console.log(`   Fetching lyrics via web search...`);
    console.log(`   Search query: "${trackName}" by "${artistName}"`);

    // Search for lyrics using a lyrics-specific site
    const searchQuery = `${trackName} ${artistName} lyrics site:genius.com OR site:azlyrics.com OR site:musixmatch.com`;
    const encodedQuery = encodeURIComponent(searchQuery);

    const response = await fetch(`https://html.duckduckgo.com/html/?q=${encodedQuery}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      console.warn(`   ⚠️  Search request failed with status: ${response.status}`);
      return null;
    }

    const html = await response.text();

    // Extract the first result URL from DuckDuckGo results
    const urlMatch = html.match(/uddg=([^"&]+)/);
    if (!urlMatch) {
      console.log(`   ⚠️  No lyrics pages found in search results`);
      return null;
    }

    const lyricsUrl = decodeURIComponent(urlMatch[1]);
    console.log(`   Found lyrics page: ${lyricsUrl}`);

    // Fetch the lyrics page
    const lyricsResponse = await fetch(lyricsUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!lyricsResponse.ok) {
      console.warn(`   ⚠️  Failed to fetch lyrics page`);
      return null;
    }

    const lyricsHtml = await lyricsResponse.text();

    // Simple extraction based on common patterns
    let lyrics = null;

    // Try Genius.com pattern
    if (lyricsUrl.includes('genius.com')) {
      const geniusMatch = lyricsHtml.match(/<div[^>]*data-lyrics-container="true"[^>]*>(.*?)<\/div>/gs);
      if (geniusMatch) {
        lyrics = geniusMatch.map(m => m.replace(/<[^>]+>/g, '\n').replace(/\n+/g, '\n')).join('\n');
      }
    }

    // Try AZLyrics pattern
    if (!lyrics && lyricsUrl.includes('azlyrics.com')) {
      const azMatch = lyricsHtml.match(/<!-- Usage of azlyrics\.com content.*?-->(.*?)<!-- MxM banner -->/s);
      if (azMatch) {
        lyrics = azMatch[1].replace(/<[^>]+>/g, '\n').replace(/\n+/g, '\n');
      }
    }

    if (lyrics) {
      lyrics = lyrics.trim();
      console.log(`   ✓ Lyrics found (${lyrics.length} characters)`);
      return lyrics;
    } else {
      console.log(`   ⚠️  Could not extract lyrics from page`);
      return null;
    }
  } catch (error) {
    console.warn(`   ⚠️  Failed to fetch lyrics: ${error.message}`);
    return null;
  }
}

/**
 * Generate review using OpenAI API
 */
async function generateReview(track, artist, lyrics = null) {
  const lyricsSection = lyrics
    ? `\n\nLyrics:\n${lyrics}\n`
    : '\n\nNote: Lyrics were not available for this song.\n';

  const prompt = `
Write a music review for this song in the style of Amanda Petrusich.

Track: ${track.name}
Artist: ${artist.name}
Album: ${track.album.name}
Genre: ${artist.genres.join(', ') || 'Unknown'}
Release Date: ${track.album.release_date}${lyricsSection}
Important context about your knowledge:
- You do NOT have access to streaming audio.
- You only know specific details about this song if they were part of your training data.
- If you do not genuinely remember concrete aspects of this recording, do not pretend that you can hear it now.

Decision rule:
1. First, check your own knowledge and the provided lyrics.
   - If lyrics are provided above, you MUST analyze them and incorporate them into your review. The lyrics are a critical part of understanding what makes this song meaningful.
   - If you truly know this track (you can recall specific details about its sound, structure, or lyrics), write a detailed review that focuses on those specifics.
   - If you do NOT know it beyond the metadata and lyrics provided, follow the "limited knowledge mode" below.

When you DO have lyrics (or know the track):
- Write 2–3 thoughtful paragraphs (around 200–250 words).
- If lyrics are provided, BEGIN with a specific lyrical observation - a line, phrase, or image that stands out. The lyrics should be central to your analysis.
- Analyze what the lyrics reveal: themes, imagery, storytelling, emotional truth, wordplay, or vulnerability.
- Focus on concrete details: how the lyrics work with (or against) the musical elements, vocal delivery, rhythm, structure.
- Blend lyrical analysis with personal reflection and cultural or musical context.
- Explore the emotional resonance and what the song reveals about human experience through its words and sound.
- Situate the song in the artist's trajectory or within its genre when you can.
- Avoid cliches and insider jargon.
- Write with warmth, vulnerability, and genuine insight.

"Limited knowledge" mode (when you do NOT know the track):
- Do NOT invent specific lyrics, samples, guest features, or detailed sonic moments.
- Start with one honest sentence that acknowledges the constraint, for example:
  "With only the title and a few bare facts to go on, it is hard to say exactly how this song sounds, but it suggests..."
- Then, in 2 short paragraphs, write a reflective piece that:
  - Uses the title, artist name, genre, and release context as clues.
  - Carefully imagines what someone might look for or feel in a song like this, using language like "likely", "might", "could".
  - Focuses on themes, mood, and listening context rather than fake specifics.
- The goal is to be honest about what you do not know while still giving the reader something thoughtful and evocative to hold onto.

Style guidelines inspired by Amanda Petrusich:
- Use literary, evocative language that captures both sound and feeling.
- Blend close attention to detail with broader reflections on why music matters.
- Be intellectually curious but emotionally honest.
- Let your sentences breathe with varied rhythm and length.

Output:
- Write only the review text, no title or metadata.
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

  // Add note about missing lyrics if they weren't found
  const lyricsNote = !lyrics ? '\n\n> **Note:** Lyrics were not available for this review.\n' : '';

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
lyricsAvailable: ${lyrics ? 'true' : 'false'}
---
${lyricsNote}
${review}
`;

  const outputPath = path.join(__dirname, '..', 'src', 'content', 'songs', filename);

  fs.writeFileSync(outputPath, frontmatter, 'utf8');

  console.log(`✅ Created review: ${filename}`);
  console.log(`   Track: ${track.name}`);
  console.log(`   Artist: ${artist.name}`);
  console.log(`   Duration: ${formatDuration(track.duration_ms)}`);
  console.log(`   Genres: ${artist.genres.join(', ') || 'Unknown'}`);
  console.log(`   Lyrics: ${lyrics ? 'Found' : 'Not found'}`);
  console.log(`   Path: ${outputPath}`);

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
  console.log('🎵 Spotify Song Review Generator\n');

  // Validate environment variables
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    console.error('❌ Missing Spotify credentials. Set SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN.');
    process.exit(1);
  }

  if (!OPENAI_API_KEY) {
    console.error('❌ Missing OpenAI API key. Set OPENAI_API_KEY.');
    process.exit(1);
  }

  // Get Spotify URLs
  let spotifyUrls = [];

  if (process.argv.length > 2) {
    // Local mode: URL provided as argument
    spotifyUrls = [process.argv[2]];
    console.log('📍 Running in local mode\n');
  } else {
    // GitHub Actions mode: Extract from event
    spotifyUrls = extractSpotifyUrlsFromGitHub();
    console.log('🤖 Running in GitHub Actions mode\n');
  }

  if (spotifyUrls.length === 0) {
    console.log('ℹ️  No Spotify track URLs found. Nothing to do.');
    process.exit(0);
  }

  console.log(`Found ${spotifyUrls.length} Spotify URL(s):\n`);
  spotifyUrls.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
  console.log('');

  // Process each URL
  for (const url of spotifyUrls) {
    try {
      console.log(`\n🎧 Processing: ${url}\n`);

      // Extract track ID
      const trackId = extractTrackId(url);
      console.log(`   Track ID: ${trackId}`);

      // Get Spotify access token
      console.log('   Getting Spotify access token...');
      const accessToken = await getSpotifyAccessToken();

      // Fetch track metadata
      console.log('   Fetching track metadata...');
      const track = await getTrackMetadata(trackId, accessToken);

      // Fetch artist metadata (for genres)
      console.log('   Fetching artist metadata...');
      const artist = await getArtistMetadata(track.artists[0].id, accessToken);

      // Fetch lyrics from Genius
      const lyrics = await fetchLyrics(track.name, artist.name);

      // Generate AI review
      console.log('   Generating AI review...');
      const review = await generateReview(track, artist, lyrics);

      // Create markdown file
      console.log('   Creating markdown file...');
      createMarkdownFile(track, artist, review, lyrics);

      console.log('\n✨ Done!\n');

    } catch (error) {
      console.error(`\n❌ Error processing ${url}:`, error.message);
      console.error(error.stack);
      process.exit(1);
    }
  }

  console.log(`\n🎉 Successfully generated ${spotifyUrls.length} review(s)!\n`);
}

main();
