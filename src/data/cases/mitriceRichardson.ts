import type { CaseFile } from "@/data/cases/types";

const IMG = "/true-crime/cases/mitrice-richardson";

/**
 * The death of Mitrice Richardson, Malibu, CA, 2009-2010.
 * Content migrated from my old True Crime Researchers case file
 * (truecrimeresearchers.com/cases/mitrice-richardson); coordinates are
 * unchanged from the original. The remains marker is the general area
 * given to the coroner and the family, not exact coordinates.
 */
export const mitriceRichardsonCase: CaseFile = {
  id: "mitrice-richardson",
  title: "The Death of Mitrice Richardson",
  subtitle:
    "Released from a sheriff's station at 12:28 a.m. with no money, phone, or vehicle, Mitrice went missing. Eleven months later, her remains were found in a Malibu canyon.",
  defaultCamera: { center: [-118.6913299, 34.0798331], zoom: 11 },
  boundsMaxZoom: 14,

  peopleGroups: [{ label: "Died under suspicious circumstances", roles: ["victim"] }],

  people: [
    {
      id: "mitrice-richardson",
      name: "Mitrice Richardson",
      aka: "Mitrice Lavon Richardson",
      role: "victim",
      photo: `${IMG}/mitrice-richardson.jpg`,
      photoAlt: "Mitrice Richardson",
      status: "Death unexplained",
      summary:
        "Mitrice was a graduate of California State University, Fullerton, having majored in psychology. She was beautiful, working as an entertainer in a popular club, and had some experience as a model and in beauty contests. On the day of her disappearance, she had been acting unusually, and she walked out of the Lost Hills Sheriff Station at approximately 12:28 a.m. and went missing. Her remains were found eleven months later, and there are still no answers as to what happened to her.",
      facts: [
        { label: "Last seen", value: "September 17, 2009", tone: "lastSeen" },
        { label: "Discovered", value: "August 9, 2010", tone: "remains" },
        { label: "Location", value: "Malibu, California" },
        { label: "Date of birth", value: "April 30, 1985" },
        { label: "Age at the time", value: "24" },
      ],
    },
  ],

  markers: [
    {
      id: "geoffreys",
      kind: "sighting",
      coords: [-118.7720268, 34.0253629],
      label: "Geoffrey's, where police were called",
      personId: "mitrice-richardson",
    },
    {
      id: "lost-hills-station",
      kind: "lastSeen",
      coords: [-118.7164247, 34.1373233],
      label: "Lost Hills Sheriff Station, where Mitrice was last seen",
      personId: "mitrice-richardson",
    },
    {
      id: "smith-house",
      kind: "sighting",
      coords: [-118.6913299, 34.0798331],
      label: "Bill Smith's house, where a woman many believe to be Mitrice was reported",
      personId: "mitrice-richardson",
    },
    {
      id: "remains-area",
      kind: "remains",
      coords: [-118.6787296, 34.072502],
      label: "General location of Mitrice's remains (not exact coordinates)",
      personId: "mitrice-richardson",
    },
  ],

  lines: [
    {
      id: "mitrice-trace",
      kind: "trace",
      from: [-118.7164247, 34.1373233],
      to: [-118.6787296, 34.072502],
      personId: "mitrice-richardson",
    },
  ],

  events: [
    {
      id: "geoffreys-police",
      date: "2009-09-16",
      dateLabel: "September 16, 2009 · 9:00 pm",
      title: "The police arrive at Geoffrey's restaurant",
      body: "Mitrice had multiple unusual interactions and was unable or unwilling to pay her bill. Police arrived and eventually took her into custody, bringing her to the Lost Hills Sheriff Station.",
      personIds: ["mitrice-richardson"],
      markerIds: ["geoffreys"],
      lineIds: [],
    },
    {
      id: "mother-calls",
      date: "2009-09-16",
      dateLabel: "September 16, 2009 · 10:30 pm",
      title: "Mitrice's mother calls the station",
      body: "Concerned about her daughter's safety, Latice offered to come pick her up if she would be released that evening.",
      personIds: ["mitrice-richardson"],
      markerIds: [],
      lineIds: [],
    },
    {
      id: "released",
      date: "2009-09-17",
      dateLabel: "September 17, 2009 · 12:28 am",
      title: "She is released, with only her license and car keys",
      body: "No money, no phone, no vehicle. Mitrice was released from the station 12 to 15 miles from her car, into the middle of the night, and went missing.",
      personIds: ["mitrice-richardson"],
      markerIds: ["lost-hills-station"],
      lineIds: [],
    },
    {
      id: "bond-call",
      date: "2009-09-17",
      dateLabel: "September 17, 2009 · 5:35 am",
      title: "Latice calls to find out how much bond will be",
      body: "To her surprise, Latice was informed that Mitrice had been released after 12 a.m., despite having been told she wouldn't be.",
      personIds: ["mitrice-richardson"],
      markerIds: ["lost-hills-station"],
      lineIds: [],
    },
    {
      id: "missing-report",
      date: "2009-09-17",
      dateLabel: "September 17, 2009 · 5:50 am",
      title: "Latice calls back to file a missing person's report",
      body: "Approximately 15 minutes after her last call, Latice called the station again to file a missing person's report and was instructed to wait 24 hours.",
      personIds: ["mitrice-richardson"],
      markerIds: ["lost-hills-station"],
      lineIds: [],
    },
    {
      id: "smith-call",
      date: "2009-09-17",
      dateLabel: "September 17, 2009 · 6:30 am",
      title: "Bill Smith calls about a woman in his yard",
      body: "A retired reporter called the sheriff's station to say a slim Black woman with afro hair was in his backyard, but she was gone when he returned to the window. A deputy was dispatched but found no sign of the woman. Many believe she was Mitrice.",
      personIds: ["mitrice-richardson"],
      markerIds: ["smith-house"],
      lineIds: [],
    },
    {
      id: "first-search",
      date: "2009-09-19",
      dateLabel: "September 19, 2009",
      title: "The first official search",
      body: "Lasting about eight hours, a scent dog was used from Bill Smith's home, where Mitrice's scent was followed to a neighbor's home. Footsteps believed to be Mitrice's were also followed, but were lost along the road.",
      personIds: ["mitrice-richardson"],
      markerIds: ["smith-house"],
      lineIds: [],
    },
    {
      id: "case-transferred",
      date: "2009-09-23",
      dateLabel: "September 23, 2009",
      title: "The case is transferred",
      body: "The case was transferred to the Robbery/Homicide division. They searched her vehicle, finding her phone, wallet, and a journal with erratic entries.",
      personIds: ["mitrice-richardson"],
      markerIds: [],
      lineIds: [],
    },
    {
      id: "second-search",
      date: "2010-01-09",
      dateLabel: "January 9, 2010",
      title: "The second official search",
      body: "A large search was started, using dogs, horses, ATVs, helicopters, and over 250 people. A radius of 10 miles from Bill Smith's home was covered without finding a clue.",
      personIds: ["mitrice-richardson"],
      markerIds: ["smith-house"],
      lineIds: [],
    },
    {
      id: "footage",
      date: "2010-03-29",
      dateLabel: "March 29, 2010",
      title: "The “non-existent” footage is shared with the family",
      body: "The family got to see the footage from within the sheriff's station. To them, Mitrice's behavior is abnormal. A deputy can be seen exiting the building as the jailer returns from escorting Mitrice out.",
      personIds: ["mitrice-richardson"],
      markerIds: ["lost-hills-station"],
      lineIds: [],
    },
    {
      id: "remains-found",
      date: "2010-08-09",
      dateLabel: "August 9, 2010",
      title: "Human remains are found by park rangers",
      body: "While sweeping a canyon for marijuana plants, rangers found a human skull with curls of dark hair. The remains were later determined to be Mitrice Richardson, and a series of negligent actions by officials occurred in handling them. The marked location is the general area given to the coroner and the family, not exact coordinates.",
      personIds: ["mitrice-richardson"],
      markerIds: ["remains-area"],
      lineIds: ["mitrice-trace"],
    },
  ],

  eras: [
    {
      id: "the-night",
      label: "The night",
      years: "Sept 16–17, 2009",
      eventIds: ["geoffreys-police", "mother-calls", "released", "bond-call", "missing-report", "smith-call"],
    },
    {
      id: "the-searches",
      label: "The searches",
      years: "2009–2010",
      eventIds: ["first-search", "case-transferred", "second-search", "footage"],
    },
    {
      id: "the-discovery",
      label: "The discovery",
      years: "2010",
      eventIds: ["remains-found"],
    },
  ],

  sources: [
    {
      label: "Coverage",
      sources: [
        {
          title: "What Happened To Mitrice Richardson?",
          href: "https://www.lamag.com/longform/what-happened-to-mitrice-richardson/",
          outlet: "Los Angeles Magazine",
          note: "A longform accounting of the case and the questions around the department's handling of it.",
        },
        {
          title: "5 years after Mitrice Richardson's remains were found in Malibu her death still raises questions",
          href: "https://www.dailynews.com/2015/11/28/5-years-after-mitrice-richardsons-remains-were-found-in-malibu-her-death-still-raises-questions/",
          outlet: "Los Angeles Daily News",
          dateLabel: "November 28, 2015",
        },
        {
          title: "Lie and Deny: Secrecy and Suspicion Surround the Los Angeles County Sheriff's Department",
          href: "https://www.newsweek.com/los-angeles-county-sheriffs-department-mitrice-richardson-secrecy-suspicion-450421",
          outlet: "Newsweek",
        },
        {
          title: "Death of Mitrice Richardson",
          href: "https://en.wikipedia.org/wiki/Death_of_Mitrice_Richardson",
          outlet: "Wikipedia",
        },
        {
          title: "CA - Mitrice Richardson, 24, Malibu, 17 Sept 2009",
          href: "https://www.websleuths.com/forums/threads/ca-mitrice-richardson-24-malibu-17-sept-2009.89567/",
          outlet: "Websleuths",
        },
      ],
    },
    {
      label: "Listen",
      sources: [
        {
          title: "Mitrice Richardson, episodes 75 and 76",
          href: "https://www.truecrimegarage.com/podcast/blog/mitrice-richardson-75",
          outlet: "True Crime Garage",
          note: "A two-part series.",
        },
        {
          title: "Death Of Mitrice Richardson, episode 323",
          href: "https://art19.com/shows/generation-why-podcast/episodes/2c410987-eff1-4aa0-ac54-4a220ba992a9",
          outlet: "Generation Why",
        },
        {
          title: "The Mysterious Death of Mitrice Richardson, episode 066",
          href: "https://www.trace-evidence.com/the-mysterious-death-of-mitrice-richardson",
          outlet: "Trace Evidence",
        },
        {
          title: "The Murder of Mitrice Richardson, parts 1 and 2",
          href: "https://podcasts.apple.com/us/podcast/09-the-murder-of-mitrice-richardson/id1355202098?i=1000409974924",
          outlet: "Creep It Real",
          note: "A two-part series, episodes 09 and 10.",
        },
      ],
    },
    {
      label: "Research",
      sources: [
        {
          title: "Mitrice Richardson",
          href: "https://uncovered.com/cases/mitrice-richardson",
          outlet: "Uncovered",
        },
        {
          title: "Mitrice Richardson",
          href: "https://www.truecrimeresearchers.com/cases/mitrice-richardson",
          outlet: "True Crime Researchers",
          note: "The original case file this page grew from, an older project of mine.",
        },
      ],
    },
  ],
};
