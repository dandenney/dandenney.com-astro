import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env.local') });

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
}

async function testEndpoint() {
  console.log('Getting access token...');
  const { access_token } = await getAccessToken();

  // Test the exact endpoint the user is testing
  const testUrl = 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=1&offset=5';

  console.log('\n' + '='.repeat(80));
  console.log('Testing endpoint:', testUrl);
  console.log('='.repeat(80));

  const response = await fetch(testUrl, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await response.json();

  console.log('\nFull Response:');
  console.log(JSON.stringify(data, null, 2));

  if (data.items && data.items.length > 0) {
    console.log('\n--- First Item Details ---');
    const item = data.items[0];
    console.log('Type:', item.type);
    console.log('Name:', item.name);
    console.log('Track ID:', item.id);
    if (item.artists) {
      console.log('Artists:', item.artists.map(a => a.name).join(', '));
    }
  }
}

testEndpoint().catch(console.error);
