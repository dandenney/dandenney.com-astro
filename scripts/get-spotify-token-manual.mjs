/**
 * Manual Spotify Refresh Token Generator
 *
 * Use this if the automatic script isn't working.
 * This script will give you a URL to visit and then you paste the code back.
 */

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n=== Spotify Refresh Token Generator (Manual) ===\n');

  const clientId = await question('Enter your Spotify Client ID: ');
  const clientSecret = await question('Enter your Spotify Client Secret: ');

  const redirectUri = 'http://localhost:8888/callback';
  const scopes = 'user-top-read';

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

  console.log('\n=== STEP 1: Authorize ===');
  console.log('Open this URL in your browser:\n');
  console.log(authUrl);
  console.log('\n');

  console.log('=== STEP 2: Get the Code ===');
  console.log('After authorizing, you\'ll be redirected to a page that doesn\'t load.');
  console.log('Copy the ENTIRE URL from your browser address bar.');
  console.log('It will look like: http://localhost:8888/callback?code=XXXXXXX');
  console.log('\n');

  const callbackUrl = await question('Paste the full callback URL here: ');

  // Extract code from URL
  const urlParams = new URL(callbackUrl).searchParams;
  const code = urlParams.get('code');

  if (!code) {
    console.log('\nError: Could not find authorization code in URL');
    rl.close();
    return;
  }

  console.log('\n=== STEP 3: Exchange for Refresh Token ===');
  console.log('Exchanging authorization code for refresh token...\n');

  try {
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

    if (tokenData.error) {
      console.log('Error:', tokenData.error);
      console.log('Description:', tokenData.error_description);
    } else {
      console.log('=== SUCCESS! ===\n');
      console.log('Add these to your .env.local file:\n');
      console.log(`SPOTIFY_CLIENT_ID=${clientId}`);
      console.log(`SPOTIFY_CLIENT_SECRET=${clientSecret}`);
      console.log(`SPOTIFY_REFRESH_TOKEN=${tokenData.refresh_token}`);
      console.log('\n');
    }
  } catch (error) {
    console.log('Error exchanging code:', error.message);
  }

  rl.close();
}

main();
