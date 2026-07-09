import type { CaseFile } from "@/data/cases/types";

const IMG = "/true-crime/cases/emma-fillipoff";

/**
 * The disappearance of Emma Fillipoff, Victoria, BC, 2012.
 * Content migrated from my old True Crime Researchers case file
 * (truecrimeresearchers.com/cases/emma-fillipoff); the downtown Victoria
 * coordinates are unchanged from the original, the two Colwood locations
 * from the credit-card lead are approximate.
 */
export const emmaFillipoffCase: CaseFile = {
  id: "emma-fillipoff",
  title: "The Disappearance of Emma Fillipoff",
  subtitle:
    "A 26-year-old vanishes from downtown Victoria in 2012, less than an hour after police interviewed her on the street.",
  defaultCamera: { center: [-123.3687, 48.4228], zoom: 13.2 },
  boundsMaxZoom: 15,

  peopleGroups: [
    { label: "Missing", roles: ["missing"] },
    { label: "Persons of interest", roles: ["personOfInterest"] },
  ],

  people: [
    {
      id: "emma-fillipoff",
      name: "Emma Fillipoff",
      role: "missing",
      photo: `${IMG}/emma-fillipoff.jpg`,
      photoAlt: "Emma Fillipoff",
      status: "Missing since November 28, 2012",
      summary:
        "Emma was an intelligent and artistic young woman who moved across the country by herself to live in Victoria, British Columbia. Some growing psychological issues and a series of unusual events leading up to her disappearance leave us with only questions. There is no crime scene, as Emma seems to have vanished.",
      facts: [
        { label: "Last seen", value: "November 28, 2012", tone: "lastSeen" },
        { label: "Location", value: "Victoria, British Columbia" },
        { label: "Date of birth", value: "January 6, 1986" },
        { label: "Age at the time", value: "26" },
        { label: "Height", value: "5'5\"" },
        { label: "Weight", value: "110 lbs" },
        { label: "Hair", value: "Light brown" },
        { label: "Eyes", value: "Brown" },
      ],
    },
    {
      id: "julien-huard",
      name: "Julien Huard",
      role: "personOfInterest",
      photo: `${IMG}/julien-huard.jpg`,
      photoAlt: "Julien Huard",
      status: "Questioned, passed a polygraph",
      summary:
        "Julien had a brief friendship with Emma before she left Perth for Victoria. He later moved to Victoria sometime after Emma did. He was questioned by police, passed a polygraph, and has since participated in the various media attempts to share her story.",
      facts: [
        { label: "Connection", value: "Knew Emma in Perth" },
        { label: "Polygraph", value: "Passed" },
      ],
    },
    {
      id: "green-shirt-man",
      name: "The Green Shirt Man",
      role: "personOfInterest",
      photo: `${IMG}/green-shirt-man.jpg`,
      photoAlt: "A camera image of the unidentified man known as the Green Shirt Man",
      status: "Unidentified",
      summary:
        "In May 2014, a man tore down a missing poster for Emma, telling people in a store that she was his girlfriend and that she wanted to be left alone. He has yet to be identified.",
      facts: [
        { label: "First reported", value: "May 2014" },
        { label: "Identity", value: "Unknown" },
      ],
    },
  ],

  markers: [
    { id: "red-fish-blue-fish", kind: "poi", coords: [-123.370325, 48.424363], label: "Red Fish Blue Fish", personId: "emma-fillipoff" },
    { id: "sandy-merriman", kind: "poi", coords: [-123.362837, 48.421721], label: "Sandy Merriman House", personId: "emma-fillipoff" },
    { id: "seven-eleven", kind: "sighting", coords: [-123.365572, 48.422385], label: "7-Eleven, footage of Emma", personId: "emma-fillipoff" },
    { id: "empress-lastseen", kind: "lastSeen", coords: [-123.368735, 48.421758], label: "Emma last seen, across from the Empress Hotel", personId: "emma-fillipoff" },
    { id: "juan-de-fuca", kind: "poi", coords: [-123.4665, 48.447], label: "Juan de Fuca Recreation Centre, where the card was found (approximate)" },
    { id: "petro-canada", kind: "poi", coords: [-123.487, 48.443], label: "Petro-Canada on Sooke Road, where the card was used (approximate)" },
  ],

  lines: [
    { id: "card-lead", kind: "lead", from: [-123.4665, 48.447], to: [-123.487, 48.443] },
  ],

  events: [
    {
      id: "red-fish-last-shift",
      date: "2012-10-31",
      dateLabel: "October 31, 2012",
      title: "Emma's last day at Red Fish Blue Fish",
      body: "Emma had spent the busy season working as a chef at Red Fish Blue Fish, on the harbor a few blocks from the Empress Hotel. When the season wound down, October 31 was her last day of work.",
      personIds: ["emma-fillipoff"],
      markerIds: ["red-fish-blue-fish"],
      lineIds: [],
    },
    {
      id: "sandy-merriman",
      date: "2012-11-01",
      dateLabel: "Fall 2012",
      title: "Staying on and off at Sandy Merriman House",
      body: "Emma stayed on and off at Sandy Merriman House, a women's shelter a few blocks from the Inner Harbour. It is where she was living at the end of November, and where her mother would come looking for her.",
      personIds: ["emma-fillipoff"],
      markerIds: ["sandy-merriman"],
      lineIds: [],
    },
    {
      id: "seven-eleven",
      date: "2012-11-28",
      dateLabel: "November 28, 2012",
      title: "Footage shows Emma at a downtown 7-Eleven",
      body: "On the day of her disappearance, there is footage of Emma lingering in the store. She purchased a debit card and a pre-paid cell phone.",
      personIds: ["emma-fillipoff"],
      markerIds: ["seven-eleven"],
      lineIds: [],
    },
    {
      id: "empress-encounter",
      date: "2012-11-28",
      dateLabel: "November 28, 2012 · Evening",
      title: "A distressed encounter in front of the Empress Hotel",
      body: "Dennis Quay, someone who had met Emma once before, ran into her in front of the Empress Hotel. She seemed out of sorts, so he sat and talked with her for an hour. Still concerned, he phoned the police when he left her to report a distressed woman.",
      personIds: ["emma-fillipoff"],
      markerIds: [],
      lineIds: [],
      camera: { center: [-123.368735, 48.421758], zoom: 15 },
    },
    {
      id: "police-interview",
      date: "2012-11-28",
      dateLabel: "November 28, 2012 · 7:15 pm",
      title: "Police interview Emma on the street",
      body: "Police found Emma barefoot, pacing in the same area as reported. They spent around 45 minutes interviewing her, ensuring that she didn't have suicidal or homicidal thoughts, and then they let her go. The video of that interview, across from the Empress, is the last time Emma was seen.",
      personIds: ["emma-fillipoff"],
      markerIds: ["empress-lastseen"],
      lineIds: [],
    },
    {
      id: "reported-missing",
      date: "2012-11-28",
      dateLabel: "November 28, 2012 · 11:00 pm",
      title: "Shelley Fillipoff arrives in Victoria",
      body: "Emma's mom, Shelley, arrived at Sandy Merriman House late that night. Emma had not claimed her bed, so they called the police to report her missing.",
      personIds: ["emma-fillipoff"],
      markerIds: ["sandy-merriman"],
      lineIds: [],
    },
    {
      id: "credit-card",
      date: "2012-12-05",
      dateLabel: "December 5, 2012",
      title: "Emma's prepaid credit card is used",
      body: "A $200 prepaid credit card that Emma purchased on the day of her disappearance was used at a Petro-Canada station on Sooke Road, west of the city. The man who used it believed he found it outside the Juan de Fuca Recreation Centre. He was questioned and cleared by the police.",
      personIds: ["emma-fillipoff"],
      markerIds: ["juan-de-fuca", "petro-canada"],
      lineIds: ["card-lead"],
    },
    {
      id: "green-shirt-man",
      date: "2014-05-01",
      dateLabel: "May 2014",
      title: "A man tears down one of Emma's missing posters",
      body: "In a store, a man told people that Emma was his girlfriend and that she wanted to be left alone. He became known as the Green Shirt Man, and he has yet to be identified.",
      personIds: ["green-shirt-man", "emma-fillipoff"],
      markerIds: [],
      lineIds: [],
    },
    {
      id: "search-continues",
      date: "2016-11-28",
      dateLabel: "November 28, 2016",
      title: "Four years on, the search continues",
      body: "There is no crime scene, as Emma seems to have vanished. Did she willingly disappear? Was she a victim of foul play? Her family and a team of volunteers are still actively looking for her, and they maintain an in-depth timeline of the case at helpfindemmafillipoff.com.",
      personIds: ["emma-fillipoff"],
      markerIds: [],
      lineIds: [],
    },
  ],

  eras: [
    {
      id: "lead-up",
      label: "The lead-up",
      years: "Fall 2012",
      eventIds: ["red-fish-last-shift", "sandy-merriman"],
    },
    {
      id: "last-day",
      label: "The last day",
      years: "Nov 28, 2012",
      eventIds: ["seven-eleven", "empress-encounter", "police-interview", "reported-missing"],
    },
    {
      id: "search",
      label: "The search",
      years: "2012–",
      eventIds: ["credit-card", "green-shirt-man", "search-continues"],
    },
  ],

  sources: [
    {
      label: "The search",
      sources: [
        {
          title: "Help Find Emma Fillipoff, in-depth timeline",
          href: "http://www.helpfindemmafillipoff.com/Timeline.php",
          outlet: "helpfindemmafillipoff.com",
          note: "The family's site, with the most detailed public timeline of the case.",
        },
        {
          title: "Find Emma Facebook group",
          href: "https://www.facebook.com/groups/FindEmma/",
          outlet: "Facebook",
          note: "Family updates, and where unreported information can be shared.",
        },
      ],
    },
    {
      label: "Watch and listen",
      sources: [
        {
          title: "Finding Emma",
          href: "https://www.youtube.com/watch?v=b3FPSmlCmJk",
          outlet: "CBC Firsthand",
          note: "Host Mark Kelley follows Shelley Fillipoff's search, and looks at how hard it is to find any of the roughly 60,000 people reported missing in Canada every year.",
        },
        {
          title: "Emma Fillipoff, episodes 52 and 53",
          href: "https://truecrimegarage.com/podcast/blog/emma-fillipoff-52",
          outlet: "True Crime Garage",
          note: "A two-part series; part two is at truecrimegarage.com/podcast/blog/emma-fillipoff-53.",
        },
        {
          title: "Emma Fillipoff, parts 1 through 5",
          href: "https://www.nighttimepodcast.com/episodes/emmafillipoff1",
          outlet: "The Night Time Podcast",
          note: "Five parts: An Introduction, Digging Deeper, Julien's Narrative, Ellen, and Mikaela.",
        },
      ],
    },
    {
      label: "Coverage",
      sources: [
        {
          title: "A Young Woman Was Last Seen by Police, Then Never Again",
          href: "https://www.vice.com/en_ca/article/8x5wag/a-young-woman-was-last-seen-by-police-then-never-again",
          outlet: "Vice",
        },
        {
          title: "Perth family desperate for clues in four-year search for daughter",
          href: "http://ottawacitizen.com/news/local-news/family-desperate-for-clues-in-four-year-search-for-daughter",
          outlet: "Ottawa Citizen",
          dateLabel: "2016",
        },
        {
          title: "Emma Fillipoff disappeared 3 years ago, man of interest still unidentified",
          href: "http://victoriabuzz.com/2016/01/emma-fillipoff-still-missing/",
          outlet: "Victoria Buzz",
          dateLabel: "January 2016",
        },
        {
          title: "Canada - Emma Fillipoff, 26, Victoria BC, 28 Nov 2012",
          href: "http://www.websleuths.com/forums/showthread.php?192543-Canada-Emma-Fillipoff-26-Victoria-BC-28-Nov-2012",
          outlet: "Websleuths",
        },
      ],
    },
    {
      label: "Research",
      sources: [
        {
          title: "Emma Fillipoff",
          href: "https://www.truecrimeresearchers.com/cases/emma-fillipoff",
          outlet: "True Crime Researchers",
          note: "The original case file this page grew from, an older project of mine.",
        },
      ],
    },
  ],
};
