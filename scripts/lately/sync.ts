// Snapshots the public Lately playlist into src/data/lately/playlist.json (newest first)
// and prints the tracks that don't have a review yet.
// Usage: node --experimental-strip-types --no-warnings scripts/lately/sync.ts
import { readdirSync, readFileSync } from "node:fs";
import { LATELY_FILE, PLAYLIST_ID, SONGS_DIR, readJson, spotify, writeJson, type LatelySnapshot } from "./lib.ts";

const fields = "next,items(added_at,is_local,track(id,type))";
let page = await spotify(`/playlists/${PLAYLIST_ID}/tracks?limit=100&fields=${encodeURIComponent(fields)}`);
const tracks: LatelySnapshot["tracks"] = [];
while (page) {
  for (const item of page.items) {
    if (item.is_local || !item.track?.id || item.track.type !== "track") continue;
    tracks.push({ id: item.track.id, addedAt: item.added_at });
  }
  page = page.next ? await spotify(page.next) : null;
}
tracks.sort((a, b) => b.addedAt.localeCompare(a.addedAt));

const previous = readJson<LatelySnapshot | null>(LATELY_FILE, null);
const before = new Set(previous?.tracks.map((t) => t.id) ?? []);
const now = new Set(tracks.map((t) => t.id));
const added = tracks.filter((t) => !before.has(t.id));
const removed = [...before].filter((id) => !now.has(id));

const changed = !previous || added.length > 0 || removed.length > 0;
writeJson(LATELY_FILE, {
  playlistId: PLAYLIST_ID,
  syncedAt: changed ? new Date().toISOString() : previous!.syncedAt,
  tracks,
});

const reviewed = new Set(
  readdirSync(SONGS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readFileSync(`${SONGS_DIR}/${f}`, "utf8").match(/^spotifyId:\s*"?(\w+)"?/m)?.[1]),
);
const unreviewed = tracks.filter((t) => !reviewed.has(t.id));

console.log(`Lately: ${tracks.length} tracks (+${previous ? added.length : 0} / -${removed.length} since last sync)`);
console.log(`Unreviewed: ${unreviewed.length}`);
