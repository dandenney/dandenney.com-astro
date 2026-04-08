import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
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
  schema: z.object({
    pubDate: z.coerce.date(),
    summary: z.string().optional(),
    title: z.string(),
  }),
});

const tinkerings = defineCollection({
  schema: z.object({
    pubDate: z.coerce.date(),
    summary: z.string().optional(),
    thumb: z.string().optional(),
    title: z.string(),
  }),
});

const reviews = defineCollection({
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
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    aiGenerated: z.boolean().default(false), // Flag for AI-generated reviews
  }),
});

const songs = defineCollection({
  schema: z.object({
    title: z.string(), // Track name
    artist: z.string(), // Primary artist
    artists: z.array(z.string()), // All artists
    album: z.string(), // Album name
    releaseDate: z.string(), // YYYY-MM-DD
    spotifyUrl: z.string().url(), // Track URL
    spotifyId: z.string(), // Track ID
    albumArt: z.string().optional(), // Album cover URL
    duration: z.number(), // Duration in ms
    genres: z.array(z.string()), // From artist data
    preview: z.string().url().optional(), // 30s preview URL
    pubDate: z.coerce.date(), // Review publish date
    rating: z.number().min(1).max(5).optional(), // Star rating
    tags: z.array(z.string()), // Custom tags
    aiGenerated: z.boolean().default(true), // Flag for AI reviews
  }),
});

const plusEv = defineCollection({
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
  schema: z.object({
    pubDate: z.coerce.date(),
    title: z.string(),
    summary: z.string().optional(),
    githubPath: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  "artificially-intelligent": artificiallyIntelligent,
  blips,
  "plus-ev": plusEv,
  posts,
  reviews,
  songs,
  tinkerings,
};
