import { getCollection, type CollectionEntry } from "astro:content";

export type GolfVenue = CollectionEntry<"golf-venues">;
export type VenueFormat = GolfVenue["data"]["format"];
export type Membership = GolfVenue["data"]["membership"];

export const FORMAT_LABEL: Record<VenueFormat, string> = {
  course: "Course",
  range: "Range",
  simulator: "Simulator",
  putting: "Putting",
  coaching: "Coaching",
};

export const FORMAT_ORDER: VenueFormat[] = ["coaching", "range", "putting", "simulator", "course"];

export const MEMBERSHIP_LABEL: Record<Membership, string> = {
  annual: "Annual",
  visit: "Visits",
  "one-off": "One-off",
};

export function venueHref(slug: string): string {
  return `/golf/venues/${slug}`;
}

export function venueSlug(entry: GolfVenue): string {
  return entry.id.replace(/\.mdx?$/, "");
}

export async function getVenues(): Promise<GolfVenue[]> {
  const all = await getCollection("golf-venues");
  return all.sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());
}

export async function getVenueMap(): Promise<Map<string, GolfVenue>> {
  const map = new Map<string, GolfVenue>();
  for (const v of await getVenues()) map.set(venueSlug(v), v);
  return map;
}

export function venueName(map: Map<string, GolfVenue>, slug: string): string {
  return map.get(slug)?.data.title ?? slug.replace(/-/g, " ");
}

/** "GOLFTEC" from "GOLFTEC Nashville West": the short form for tight readouts. */
export function venueShort(map: Map<string, GolfVenue>, slug: string): string {
  const name = venueName(map, slug);
  return name.replace(/\s+(Nashville( West)?|Golf (Club|Links))$/i, "");
}
