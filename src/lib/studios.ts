import type { CollectionEntry } from "astro:content";
import { studios, type Studio } from "@/data/music/nashvilleStudios";

type RecordedAt = NonNullable<CollectionEntry<"songs">["data"]["recordedAt"]>[number];

const NASHVILLE_AREA = /\b(nashville|berry hill|franklin|leipers fork|brentwood|goodlettsville|hendersonville|madison|east nashville|forest hills|oak hill|antioch|old hickory|mount juliet|murfreesboro|nolensville|thompson'?s station)\b/i;

export const normalizeStudio = (name: string) =>
  name
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[’']/g, "")
    .replace(/\b(the|historic|recording|studios?|nashville|llc)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim() || name.toLowerCase().trim();

const byName = new Map<string, Studio>();
for (const studio of studios) {
  for (const name of [studio.name, ...(studio.aliases ?? [])]) byName.set(normalizeStudio(name), studio);
}

export const isNashvilleArea = (place: RecordedAt) =>
  (!place.state || /^(tn|tennessee)$/i.test(place.state)) && NASHVILLE_AREA.test(place.city);

export const findStudio = (place: RecordedAt) =>
  place.studio && isNashvilleArea(place) ? byName.get(normalizeStudio(place.studio)) ?? null : null;

export type StudioWithSongs = Studio & { songs: CollectionEntry<"songs">[] };

/** Groups songs by the Nashville-area studios they were recorded at. */
export function nashvilleRecordings(songs: CollectionEntry<"songs">[]) {
  const mapped = new Map<string, StudioWithSongs>();
  const unplaced: { song: CollectionEntry<"songs">; studio: string | null }[] = [];
  for (const song of songs) {
    const places = (song.data.recordedAt ?? []).filter(isNashvilleArea);
    if (!places.length) continue;
    let placed = false;
    for (const place of places) {
      const studio = findStudio(place);
      if (!studio) continue;
      placed = true;
      const entry = mapped.get(studio.slug) ?? { ...studio, songs: [] };
      if (!entry.songs.includes(song)) entry.songs.push(song);
      mapped.set(studio.slug, entry);
    }
    if (!placed) unplaced.push({ song, studio: places.find((p) => p.studio)?.studio ?? null });
  }
  const sorted = [...mapped.values()].sort((a, b) => b.songs.length - a.songs.length || a.name.localeCompare(b.name));
  return { studios: sorted, unplaced };
}
