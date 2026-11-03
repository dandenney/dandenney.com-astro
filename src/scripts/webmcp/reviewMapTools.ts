import { asLimit, asText, registerPageTools, toSlug } from "@/lib/webmcp";

interface ReviewFeature {
  properties: {
    id: number;
    title: string;
    city: string;
    state: string;
    country: string;
    address: string;
    description: string;
    tags: string;
    url: string;
    pubDate: string;
  };
}

/** Exposed by public/js/no-reserv-ai-tions-map/main.js */
interface ReviewMapApi {
  all(): ReviewFeature[];
  setFilters(filters: { state: string; city: string }): ReviewFeature[];
  show(feature: ReviewFeature): void;
}

const US_STATES: Record<string, string> = {
  al: "alabama", ak: "alaska", az: "arizona", ar: "arkansas", ca: "california", co: "colorado",
  ct: "connecticut", de: "delaware", fl: "florida", ga: "georgia", hi: "hawaii", id: "idaho",
  il: "illinois", in: "indiana", ia: "iowa", ks: "kansas", ky: "kentucky", la: "louisiana",
  me: "maine", md: "maryland", ma: "massachusetts", mi: "michigan", mn: "minnesota",
  ms: "mississippi", mo: "missouri", mt: "montana", ne: "nebraska", nv: "nevada",
  nh: "new-hampshire", nj: "new-jersey", nm: "new-mexico", ny: "new-york", nc: "north-carolina",
  nd: "north-dakota", oh: "ohio", ok: "oklahoma", or: "oregon", pa: "pennsylvania",
  ri: "rhode-island", sc: "south-carolina", sd: "south-dakota", tn: "tennessee", tx: "texas",
  ut: "utah", vt: "vermont", va: "virginia", wa: "washington", wv: "west-virginia",
  wi: "wisconsin", wy: "wyoming", dc: "district-of-columbia",
};

const reviewMap = (window as Window & { noReservAItionsMap?: ReviewMapApi }).noReservAItionsMap;

function summarize(feature: ReviewFeature) {
  const p = feature.properties;
  return {
    title: p.title,
    city: p.city,
    state: p.state || undefined,
    country: p.country,
    tags: p.tags,
    description: p.description,
    url: new URL(p.url, location.origin).href,
  };
}

function resolve(value: unknown, known: Set<string>, aliases: Record<string, string> = {}): string | null {
  const raw = asText(value);
  if (!raw) return "";
  const slug = toSlug(raw);
  const match = aliases[slug] ?? slug;
  return known.has(match) ? match : null;
}

if (reviewMap) {
  const features = reviewMap.all();
  const states = new Set(features.map((f) => f.properties.state).filter(Boolean));
  const cities = new Set(features.map((f) => f.properties.city));

  registerPageTools([
    {
      name: "list-review-locations",
      title: "List review locations",
      description: "Lists the states/regions and cities that have No ReservAItions reviews on the map, with review counts.",
      annotations: { readOnlyHint: true },
      execute() {
        const counts = new Map<string, { city: string; state?: string; country: string; reviews: number }>();
        for (const { properties: p } of features) {
          const key = `${p.city}|${p.state}`;
          const entry = counts.get(key) ?? { city: p.city, state: p.state || undefined, country: p.country, reviews: 0 };
          entry.reviews += 1;
          counts.set(key, entry);
        }
        return { total: features.length, locations: [...counts.values()].sort((a, b) => b.reviews - a.reviews) };
      },
    },
    {
      name: "filter-review-map",
      title: "Filter the review map",
      description:
        "Filters the No ReservAItions map and list to a state/region and/or city, zooms the map to the results, and returns the matching reviews. Call with neither to show every review.",
      inputSchema: {
        type: "object",
        properties: {
          state: { type: "string", description: "State or region, e.g. 'Tennessee', 'TN', or 'Porto'." },
          city: { type: "string", description: "City, e.g. 'Nashville' or 'St. Petersburg'." },
          limit: { type: "number", description: "Maximum reviews to return, 1-50. Defaults to 20." },
        },
      },
      execute(input) {
        const state = resolve(input.state, states, US_STATES);
        if (state === null) return { error: `No reviews in "${input.state}". Use list-review-locations for valid values.` };
        const city = resolve(input.city, cities);
        if (city === null) return { error: `No reviews in "${input.city}". Use list-review-locations for valid values.` };
        const matches = reviewMap.setFilters({ state, city });
        return { total: matches.length, reviews: matches.slice(0, asLimit(input.limit, 20, 50)).map(summarize) };
      },
    },
    {
      name: "show-review-on-map",
      title: "Show a review on the map",
      description: "Flies the map to a reviewed place and opens its popup. Matches on the review title or URL.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string", description: "Review title, part of it, or its URL." } },
        required: ["name"],
      },
      execute(input) {
        const query = asText(input.name).toLowerCase();
        if (!query) return { error: "Provide a review title or URL." };
        const slug = toSlug(query).replace(/^.*\/no-reserv-ai-tions\//, "").replace(/\/$/, "");
        const feature =
          features.find((f) => f.properties.title.toLowerCase() === query) ??
          features.find((f) => f.properties.url.includes(`/${slug}/`)) ??
          features.find((f) => f.properties.title.toLowerCase().includes(query));
        if (!feature) return { error: `No review on the map matches "${input.name}".` };
        reviewMap.show(feature);
        return { shown: summarize(feature) };
      },
    },
  ]);
}
