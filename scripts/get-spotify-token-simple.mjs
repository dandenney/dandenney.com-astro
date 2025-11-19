/**
 * Simplest Spotify Refresh Token Generator
 *
 * This uses Spotify's own redirect page to avoid localhost issues
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
  console.log('\n=== Spotify Refresh Token Generator (Simple Method) ===\n');

  const clientId = await question('Enter your Spotify Client ID: ');
  const clientSecret = await question('Enter your Spotify Client Secret: ');

  // Use Spotify's own example redirect URI
  const redirectUri = 'https://example.com/callback';
  const scopes = 'user-top-read';

  console.log('\n=== IMPORTANT ===');
  console.log('Go to your Spotify app settings and ADD this redirect URI:');
  console.log('https://example.com/callback');
  console.log('(Yes, https, not http)');
  console.log('Click Save, then press Enter here to continue...');
  await question('');

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

  console.log('\n=== STEP 1: Authorize ===');
  console.log('Open this URL in your browser:\n');
  console.log(authUrl);
  console.log('\n');

  console.log('=== STEP 2: Get the Code ===');
  console.log('After authorizing, you\'ll be redirected to example.com.');
  console.log('The page will show an error (that\'s OK!).');
  console.log('Look at the URL in your browser - it will look like:');
  console.log('https://example.com/callback?code=AQD...(long string)');
  console.log('\nCopy ONLY the code part (everything after "code=")');
  console.log('If there\'s a "&state=" or other parameters, don\'t include those.\n');

  const code = await question('Paste the code here: ');

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
        code: code.trim(),
        redirect_uri: redirectUri
      })
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      console.log('\n❌ Error:', tokenData.error);
      console.log('Description:', tokenData.error_description);
      console.log('\nTroubleshooting:');
      console.log('- Make sure you copied the ENTIRE code (it\'s very long)');
      console.log('- The code expires quickly - try getting a new one');
      console.log('- Verify your Client ID and Secret are correct');
    } else {
      console.log('\n✅ SUCCESS! ===\n');
      console.log('Copy these values to your .env.local file:\n');
      console.log(`SPOTIFY_CLIENT_ID=${clientId}`);
      console.log(`SPOTIFY_CLIENT_SECRET=${clientSecret}`);
      console.log(`SPOTIFY_REFRESH_TOKEN=${tokenData.refresh_token}`);
      console.log('\n');
    }
  } catch (error) {
    console.log('\n❌ Error exchanging code:', error.message);
  }

  rl.close();
}

main();
