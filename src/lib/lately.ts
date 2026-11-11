import type { CollectionEntry } from "astro:content";
import aliases from "@/data/lately/aliases.json";
import playlist from "@/data/lately/playlist.json";

export type LatelySong = CollectionEntry<"songs"> & { addedAt: string | null };

const addedAtById = new Map(playlist.tracks.map((track) => [track.id, track.addedAt]));
// A review keeps its original Spotify ID when Lately holds another release of the same song.
for (const [playlistId, reviewId] of Object.entries(aliases as Record<string, string>)) {
  const addedAt = addedAtById.get(playlistId);
  if (addedAt && !addedAtById.has(reviewId)) addedAtById.set(reviewId, addedAt);
}

export const latelySyncedAt = playlist.syncedAt;

/** Splits songs into those still on the Lately playlist (newest add first) and those removed from it. */
export function orderByLately(songs: CollectionEntry<"songs">[]) {
  const withAdded = songs.map((song) => ({ ...song, addedAt: addedAtById.get(song.data.spotifyId) ?? null }));
  const active = withAdded
    .filter((song) => song.addedAt)
    .sort((a, b) => b.addedAt!.localeCompare(a.addedAt!));
  const retired = withAdded
    .filter((song) => !song.addedAt)
    .sort((a, b) => a.data.title.localeCompare(b.data.title));
  return { active, retired };
}

export const songSlug = (song: CollectionEntry<"songs">) => song.id.replace(/\.mdx?$/, "");

export const formatAddedAt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", timeZone: "America/Chicago" });
