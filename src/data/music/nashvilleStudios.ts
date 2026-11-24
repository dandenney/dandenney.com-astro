export type Studio = {
  slug: string;
  name: string;
  aliases?: string[];
  neighborhood: string;
  /** [lng, lat] */
  coordinates: [number, number];
  /** Private rooms are pinned to their neighborhood, not an address. */
  approximate?: boolean;
};

export const studios: Studio[] = [
  {
    slug: "rca-studio-a",
    name: "RCA Studio A",
    aliases: ["Historic RCA Studio A", "Ben's Studio", "Grand Victor Sound"],
    neighborhood: "Music Row",
    coordinates: [-86.793036, 36.14967],
  },
  {
    slug: "starstruck-studios",
    name: "Starstruck Studios",
    neighborhood: "Music Row",
    coordinates: [-86.793085, 36.148801],
  },
  {
    slug: "sound-stage",
    name: "Sound Stage Studios",
    aliases: ["Back Stage", "Back Stage Studio"],
    neighborhood: "Music Row",
    coordinates: [-86.790819, 36.149608],
  },
  {
    slug: "southern-ground",
    name: "Southern Ground",
    aliases: ["Southern Ground Studios"],
    neighborhood: "Music Row",
    coordinates: [-86.79317, 36.15262],
  },
  {
    slug: "sienna-studios",
    name: "Sienna Studios",
    aliases: ["Sienna Recording Studios"],
    neighborhood: "Music Row",
    coordinates: [-86.795435, 36.147263],
  },
  {
    slug: "ocean-way",
    name: "Ocean Way Nashville",
    aliases: ["Ocean Way Studio A", "Ocean Way"],
    neighborhood: "Music Row",
    coordinates: [-86.794111, 36.143285],
  },
  {
    slug: "big-loud",
    name: "Big Loud Studios",
    aliases: ["Big Loud Mountain"],
    neighborhood: "Music Row",
    coordinates: [-86.79339, 36.143605],
  },
  {
    slug: "sound-emporium",
    name: "Sound Emporium",
    aliases: ["Sound Emporium Studios"],
    neighborhood: "Belmont",
    coordinates: [-86.795928, 36.11853],
  },
  {
    slug: "blackbird",
    name: "Blackbird Studio",
    aliases: ["Blackbird Studio A", "Blackbird Studio D", "Blackbird Studios"],
    neighborhood: "Berry Hill",
    coordinates: [-86.767436, 36.116014],
  },
  {
    slug: "creative-workshop",
    name: "Creative Workshop",
    neighborhood: "Berry Hill",
    coordinates: [-86.767481, 36.116196],
  },
  {
    slug: "east-iris",
    name: "East Iris Studios",
    aliases: ["House of Blues Studios"],
    neighborhood: "Berry Hill",
    coordinates: [-86.76451, 36.11668],
  },
  {
    slug: "farmland",
    name: "Farmland Studios",
    neighborhood: "Berry Hill",
    coordinates: [-86.766991, 36.117285],
  },
  {
    slug: "blue-room",
    name: "The Blue Room",
    neighborhood: "Berry Hill",
    coordinates: [-86.7675, 36.1175],
    approximate: true,
  },
  {
    slug: "the-studio",
    name: "The Studio",
    neighborhood: "Sylvan Park",
    coordinates: [-86.83013, 36.152455],
  },
  {
    slug: "butcher-shoppe",
    name: "The Butcher Shoppe",
    neighborhood: "Germantown",
    coordinates: [-86.783428, 36.17947],
  },
  {
    slug: "neon-cross",
    name: "Neon Cross",
    neighborhood: "East Nashville",
    coordinates: [-86.7502, 36.172145],
  },
  {
    slug: "the-study",
    name: "The Study",
    neighborhood: "East Nashville",
    coordinates: [-86.744, 36.181],
    approximate: true,
  },
  {
    slug: "mr-lemons",
    name: "Mr. Lemons",
    neighborhood: "East Nashville",
    coordinates: [-86.732, 36.19],
    approximate: true,
  },
  {
    slug: "ourvinyl",
    name: "OurVinyl Studios",
    aliases: ["OurVinyl Studio"],
    neighborhood: "Inglewood",
    coordinates: [-86.736936, 36.210001],
  },
  {
    slug: "castle",
    name: "The Castle",
    aliases: ["The Castle Recording Studios"],
    neighborhood: "Franklin",
    coordinates: [-86.900417, 35.994313],
  },
  {
    slug: "purple-house",
    name: "Purple House Studio",
    neighborhood: "Leipers Fork",
    coordinates: [-86.9958, 35.8967],
    approximate: true,
  },
];
