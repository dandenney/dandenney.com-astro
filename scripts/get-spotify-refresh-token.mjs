/**
 * Script to generate a Spotify refresh token
 *
 * Follow these steps:
 * 1. Go to https://developer.spotify.com/dashboard
 * 2. Create a new app or use an existing one
 * 3. Add http://localhost:8888/callback to the Redirect URIs in your app settings
 *    (Note: Try http://127.0.0.1:8888/callback if localhost doesn't work)
 * 4. Copy your Client ID and Client Secret
 * 5. Run this script: node scripts/get-spotify-refresh-token.mjs
 * 6. Follow the prompts and paste the values into your .env.local file
 */

import http from 'http';
import { parse } from 'url';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n=== Spotify Refresh Token Generator ===\n');

  const clientId = await question('Enter your Spotify Client ID: ');
  const clientSecret = await question('Enter your Spotify Client Secret: ');

  const redirectUri = 'http://localhost:8888/callback';
  const scopes = 'user-top-read';

  // Show state for debugging
  console.log(`Using Client ID: ${clientId.substring(0, 8)}...`);
  console.log(`Using Redirect URI: ${redirectUri}\n`);
  console.log('Make sure this EXACTLY matches what\'s in your Spotify app settings!\n');

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

  console.log('\n1. Open this URL in your browser:\n');
  console.log(authUrl);
  console.log('\n2. After authorizing, you\'ll be redirected to localhost:8888/callback');
  console.log('3. The authorization code will be extracted automatically\n');

  // Create a server to catch the callback
  const server = http.createServer(async (req, res) => {
    const urlParts = parse(req.url, true);

    if (urlParts.pathname === '/callback') {
      const code = urlParts.query.code;

      if (code) {
        // Exchange code for refresh token
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri
          })
        });

        const tokenData = await tokenResponse.json();

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Success! You can close this window.</h1><p>Check your terminal for the refresh token.</p>');

        console.log('\n=== SUCCESS! ===\n');
        console.log('Add these to your .env.local file:\n');
        console.log(`SPOTIFY_CLIENT_ID=${clientId}`);
        console.log(`SPOTIFY_CLIENT_SECRET=${clientSecret}`);
        console.log(`SPOTIFY_REFRESH_TOKEN=${tokenData.refresh_token}`);
        console.log('\n');

        server.close();
        rl.close();
      } else {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end('<h1>Error: No authorization code received</h1>');
        server.close();
        rl.close();
      }
    }
  });

  server.listen(8888, () => {
    console.log('Waiting for authorization...\n');
  });
}

main();
