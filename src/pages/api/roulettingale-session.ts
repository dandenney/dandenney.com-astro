import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

const DATA_FILE = path.join(process.cwd(), 'src/data/roulettingale-sessions.json');

export const POST: APIRoute = async ({ request }) => {
  try {
    const session = await request.json();

    // Read existing data
    let data = { sessions: [] as any[] };
    try {
      const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
      data = JSON.parse(fileContent);
    } catch {
      // File doesn't exist or is invalid, start fresh
    }

    // Add new session with incremented ID
    const newId = data.sessions.length > 0
      ? Math.max(...data.sessions.map((s: any) => s.id)) + 1
      : 1;

    const newSession = {
      id: newId,
      timestamp: new Date().toISOString(),
      ...session
    };

    data.sessions.push(newSession);

    // Write back to file
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

    return new Response(JSON.stringify({ success: true, session: newSession }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error saving session:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to save session' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async () => {
  try {
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    const data = JSON.parse(fileContent);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response(JSON.stringify({ sessions: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
