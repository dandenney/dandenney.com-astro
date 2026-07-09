import type { CaseFile } from "@/data/cases/types";

const IMG = "/true-crime/cases/jodi-huisentruit";

/**
 * The disappearance of Jodi Huisentruit, Mason City, IA, 1995.
 * Content migrated from my old True Crime Researchers case file
 * (truecrimeresearchers.com/cases/jodi-huisentruit); the apartment
 * coordinates are unchanged from the original.
 */
export const jodiHuisentruitCase: CaseFile = {
  id: "jodi-huisentruit",
  title: "The Disappearance of Jodi Huisentruit",
  subtitle:
    "A morning news anchor oversleeps, tells her producer she'll be right in, and is never seen again.",
  defaultCamera: { center: [-93.1840687, 43.156816], zoom: 13 },
  boundsMaxZoom: 15,

  peopleGroups: [{ label: "Missing", roles: ["missing"] }],

  people: [
    {
      id: "jodi-huisentruit",
      name: "Jodi Huisentruit",
      aka: "Jodi Sue Huisentruit",
      role: "missing",
      photo: `${IMG}/jodi-huisentruit.jpg`,
      photoAlt: "Jodi Huisentruit",
      status: "Missing since June 27, 1995",
      summary:
        "Jodi was a news anchor in Mason City, Iowa, and the last known contact with her was at 4:10 a.m. on June 27, 1995, when a colleague called her home because she was late for work. After she didn't show up hours later, the team at the station called the police for a welfare check. When they arrived, police quickly realized that they were dealing with “unusual circumstances,” as Jodi's belongings were on the ground outside of her car, but she could not be found. She was ruled legally dead in 2001.",
      facts: [
        { label: "Last seen", value: "June 27, 1995", tone: "lastSeen" },
        { label: "Location", value: "Mason City, Iowa" },
        { label: "Date of birth", value: "June 5, 1968" },
        { label: "Age at the time", value: "27" },
        { label: "Height", value: "5'4\"" },
        { label: "Weight", value: "115 lbs" },
        { label: "Hair", value: "Blonde" },
        { label: "Eyes", value: "Brown" },
        { label: "Ruled legally dead", value: "May 14, 2001" },
      ],
    },
  ],

  markers: [
    {
      id: "jodi-apartment",
      kind: "lastSeen",
      coords: [-93.1840687, 43.156816],
      label: "Jodi's apartment, her last known location",
      personId: "jodi-huisentruit",
    },
  ],

  lines: [],

  events: [
    {
      id: "first-call",
      date: "1995-06-27",
      dateLabel: "June 27, 1995 · 4:10 am",
      title: "Producer Amy Kuns calls and wakes Jodi up",
      body: "Jodi was due at the station to prepare for the morning broadcast, and she had overslept. She quickly asked the time and said she'd be right in. That call to her apartment is the last known contact with her.",
      personIds: ["jodi-huisentruit"],
      markerIds: ["jodi-apartment"],
      lineIds: [],
    },
    {
      id: "second-call",
      date: "1995-06-27",
      dateLabel: "June 27, 1995 · 5:00 am",
      title: "Amy calls again, but there is no answer",
      body: "The times of this second call have been reported slightly differently, but it seems to be around 5 a.m.",
      personIds: ["jodi-huisentruit"],
      markerIds: ["jodi-apartment"],
      lineIds: [],
    },
    {
      id: "welfare-check",
      date: "1995-06-27",
      dateLabel: "June 27, 1995 · 7:15 am",
      title: "A co-worker calls police for a welfare check",
      body: "Upon arriving outside her apartment, Mason City Police officers found signs of a struggle. Jodi's belongings, including dress shoes, a hair dryer, hair spray, and her car keys, were on the ground outside of the car. Jodi was nowhere to be found, and police quickly realized that they were dealing with “unusual circumstances.”",
      personIds: ["jodi-huisentruit"],
      markerIds: ["jodi-apartment"],
      lineIds: [],
    },
    {
      id: "legally-dead",
      date: "2001-05-14",
      dateLabel: "May 14, 2001",
      title: "The court rules Jodi legally dead",
      body: "In honor of her family's request, Judge Steven P. Carroll signed the court order. Jodi has been missing ever since that June morning, and the case remains open.",
      personIds: ["jodi-huisentruit"],
      markerIds: [],
      lineIds: [],
    },
  ],

  eras: [
    {
      id: "last-morning",
      label: "The last morning",
      years: "June 27, 1995",
      eventIds: ["first-call", "second-call", "welfare-check"],
    },
    {
      id: "aftermath",
      label: "The aftermath",
      years: "1995–2001",
      eventIds: ["legally-dead"],
    },
  ],

  sources: [
    {
      label: "The search",
      sources: [
        {
          title: "FindJodi.com",
          href: "https://www.findjodi.com/",
          outlet: "findjodi.com",
          note: "A team of investigative journalists keeping the case active, and the place to share any information.",
        },
      ],
    },
    {
      label: "Watch and listen",
      sources: [
        {
          title: "Jodi Huisentruit: The Next Chapter",
          href: "https://www.youtube.com/watch?v=MhjCdPAyPLg",
          outlet: "FindJodi.com",
          note: "A quick synopsis of the case, created by the team behind FindJodi.com.",
        },
        {
          title: "The Huisentruit File: Ep. 1, The Case",
          href: "https://www.youtube.com/watch?v=k_cQRRlt_Cs",
          outlet: "Josh Benson and Gary Peterson",
          note: "The first in a series of videos focused on Jodi's disappearance, created by the investigative journalists behind FindJodi.com.",
        },
        {
          title: "Jodi Huisentruit, episodes 208 and 209",
          href: "https://truecrimegarage.com/podcast/blog/jodi-huisentruit-208-209",
          outlet: "True Crime Garage",
          note: "A two-part series.",
        },
      ],
    },
    {
      label: "Coverage",
      sources: [
        {
          title: "After '48 Hours', Jodi Huisentruit tips pick up at Mason City Police Dept.",
          href: "https://wcfcourier.com/news/local/crime-and-courts/after-hours-jodi-huisentruit-tips-pick-up-at-mason-city/article_ede29843-738c-5597-96ce-fb59745d3883.html",
          outlet: "The Courier",
        },
        {
          title: "Exclusive: John Vansice Speaks",
          href: "https://www.findjodi.com/exclusive-john-vansice-speaks/",
          outlet: "FindJodi.com",
        },
        {
          title: "IA - Jodi Huisentruit, 27, Mason City, 27 June 1995 - Anchorwoman",
          href: "https://www.websleuths.com/forums/threads/ia-jodi-huisentruit-27-mason-city-27-june-1995-anchorwoman.36810/",
          outlet: "Websleuths",
        },
        {
          title: "Jodi Huisentruit",
          href: "https://en.wikipedia.org/wiki/Jodi_Huisentruit",
          outlet: "Wikipedia",
        },
      ],
    },
    {
      label: "Research",
      sources: [
        {
          title: "Jodi Huisentruit",
          href: "https://www.truecrimeresearchers.com/cases/jodi-huisentruit",
          outlet: "True Crime Researchers",
          note: "The original case file this page grew from, an older project of mine.",
        },
      ],
    },
  ],
};
