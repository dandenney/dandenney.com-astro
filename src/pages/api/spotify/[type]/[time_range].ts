import type { APIRoute } from 'astro';

export const prerender = false;

export function getStaticPaths() {
  const types = ['tracks', 'artists'];
  const timeRanges = ['short_term', 'medium_term', 'long_term'];

  return types.flatMap(type =>
    timeRanges.map(time_range => ({
      params: { type, time_range }
    }))
  );
}

const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const TOP_ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists';

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

async function getTopItems(
  access_token: string,
  type: 'tracks' | 'artists',
  time_range: 'short_term' | 'medium_term' | 'long_term'
) {
  const endpoint = type === 'tracks' ? TOP_TRACKS_ENDPOINT : TOP_ARTISTS_ENDPOINT;

  const response = await fetch(`${endpoint}?time_range=${time_range}&limit=10`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.json();
}

export const GET: APIRoute = async ({ params }) => {
  try {
    const type = params.type as 'tracks' | 'artists';
    const time_range = params.time_range as 'short_term' | 'medium_term' | 'long_term';

    console.log(`API Request: Type=${type}, Time Range=${time_range}`);

    const { access_token } = await getAccessToken();
    const data = await getTopItems(access_token, type, time_range);

    console.log(`First ${type} for ${time_range}:`, data.items?.[0]?.name);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error fetching top items:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch top items' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
