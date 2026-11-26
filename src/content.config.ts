import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { UI_KINDS } from "@/lib/ui-kinds";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    strapiSeries: z.boolean().optional(),
    summary: z.string(),
    tags: z.array(z.string()),
    cloudinaryThumb: z.string().optional(),
    socialImageFilename: z.string().optional(),
    thumb: z.string().optional(),
    thumbAlt: z.string().optional(),
    title: z.string(),
  }),
});

const blips = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blips" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

const tinkerings = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/tinkerings" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    summary: z.string().optional(),
    thumb: z.string().optional(),
    title: z.string(),
  }),
});

const factory = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/factory" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    ideaId: z.number(),
    ideaTitle: z.string(),
    pitch: z.string(),
    whyNow: z.string(),
    kind: z.enum(["web", "package"]),
    url: z.url(),
    repoUrl: z.url(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    signals: z.array(z.object({ title: z.string(), url: z.url() })).default([]),
    // slug of a tinkering that writes up what Dan learned from this one
    tinkering: z.string().optional(),
    aiGenerated: z.boolean().default(true),
  }),
});

// UI explorations: ui/<slug>/BRIEF.md, beside the <variant>.html files it describes (ui/README.md)
const uiEntryId = ({ entry }: { entry: string }) => entry.split("/")[0];

const ui = defineCollection({
  loader: glob({ pattern: "*/BRIEF.md", base: "./ui", generateId: uiEntryId }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(UI_KINDS),
    tags: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    // variant (file name without .html) shown first; defaults to the only or first one
    shipped: z.string().optional(),
    // "free" opts out of the house taste in ui/AGENTS.md
    style: z.enum(["house", "free"]).default("house"),
    // frame height in px on the exploration's page
    height: z.number().int().positive().default(560),
  }),
});

const uiNotes = defineCollection({
  loader: glob({ pattern: "*/NOTES.md", base: "./ui", generateId: uiEntryId }),
  schema: z.object({}).passthrough(),
});

const trueCrime = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/true-crime" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/reviews" }),
  schema: z.object({
    address: z.string().optional(),
    city: z.string(),
    coordinates: z.string().optional(),
    country: z.string(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    heroImageAttribution: z.string().optional(),
    heroImageUrl: z.string().optional(),
    infoUrl: z.string().optional(),
    state: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    aiGenerated: z.boolean().default(false),
  }),
});

const songs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/songs" }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    artists: z.array(z.string()),
    album: z.string(),
    releaseDate: z.string(),
    spotifyUrl: z.string().url(),
    spotifyId: z.string(),
    albumArt: z.string().optional(),
    duration: z.number(),
    genres: z.array(z.string()),
    preview: z.string().url().optional(),
    pubDate: z.coerce.date(),
    rating: z.number().min(1).max(5).optional(),
    tags: z.array(z.string()),
    sources: z
      .array(z.object({ title: z.string(), url: z.url() }))
      .optional(),
    recordedAt: z
      .array(
        z.object({
          studio: z.string().optional(),
          city: z.string(),
          state: z.string().optional(),
          country: z.string().optional(),
          source: z.url().optional(),
        })
      )
      .optional(),
    pipeline: z.enum(["legacy", "agent", "lately"]).default("legacy"),
    aiGenerated: z.boolean().default(true),
  }),
});

const plusEv = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/plus-ev" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    title: z.string(),
    summary: z.string(),
    sport: z.enum(["nba", "mlb", "both"]).optional(),
    recapDate: z.string().optional(),
    picks: z
      .array(
        z.object({
          recommender: z.string(),
          pick: z.string(),
          result: z.enum(["win", "loss", "pending"]),
        })
      )
      .optional(),
  }),
});

const artificiallyIntelligent = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/artificially-intelligent" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    title: z.string(),
    summary: z.string().optional(),
    githubPath: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const golfVenues = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/golf-venues" }),
  schema: z.object({
    title: z.string(),
    format: z.enum(["course", "range", "simulator", "putting", "coaching"]),
    city: z.string(),
    state: z.string().optional(),
    country: z.string(),
    // "lng, lat", matches the No Reserv-AI-tions convention
    coordinates: z.string().optional(),
    address: z.string().optional(),
    infoUrl: z.string().optional(),
    // Site-relative path, e.g. /no-reserv-ai-tions/topgolf-nashville.webp
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    summary: z.string(),
    // course-only
    par: z.number().optional(),
    yardage: z.number().optional(),
    holes: z.number().optional(),
    designer: z.string().optional(),
    opened: z.number().optional(),
    // membership context, the whole point of the section
    membership: z.enum(["annual", "visit", "one-off"]).default("visit"),
    cadence: z.string().optional(),
    // cross-link to the No Reserv-AI-tions review
    nraiSlug: z.string().optional(),
    pubDate: z.coerce.date(),
    aiGenerated: z.boolean().default(false),
  }),
});

export const collections = {
  "artificially-intelligent": artificiallyIntelligent,
  blips,
  factory,
  "golf-venues": golfVenues,
  "plus-ev": plusEv,
  posts,
  reviews,
  songs,
  tinkerings,
  "true-crime": trueCrime,
  ui,
  "ui-notes": uiNotes,
};
