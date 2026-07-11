import type { CaseTone, SourceGroup, TimelineGroup } from "@/data/cases/types";

/**
 * Data for the Shannan Gilbert story page (/true-crime/cases/shannan-gilbert).
 * The night of April 30 – May 1, 2010 is told as scroll-driven "beats" over a
 * WebGL marsh scene; everything after that night reuses the shared
 * case-timeline types so CaseTimeline.astro can render it.
 */

export interface NightBeat {
  id: string;
  /**
   * Minutes since midnight, for the ticking clock tween between beats.
   * Null keeps the previous reading (time unknown). The readout label
   * itself comes from beatClockLabels.
   */
  clockMinutes: number | null;
  /** Small mono kicker above the title, e.g. "The 911 call" */
  kicker: string;
  title: string;
  body: string[];
  /** A short verbatim quote, set apart typographically */
  quote?: { text: string; attribution: string };
  tone?: CaseTone;
}

/** The known sequence of the night, from the public record. */
export const nightBeats: NightBeat[] = [
  {
    id: "arrival",
    clockMinutes: 0,
    kicker: "Oak Beach, NY",
    title: "A drive out to Oak Beach",
    body: [
      "Around midnight, 23-year-old Shannan Gilbert travels from New Jersey to the gated community of Oak Beach, on the south shore of Long Island, to meet a client, Joseph Brewer. Her driver, Michael Pak, waits outside.",
      "She was working as an escort and had arranged the meeting through Craigslist. It was ordinary work on an ordinary night, on a narrow strip of land between the highway and the marsh.",
    ],
    tone: "poi",
  },
  {
    id: "call",
    clockMinutes: 291,
    kicker: "The 911 call",
    title: "Twenty-three minutes",
    body: [
      "Between roughly 4:45 and 4:51 a.m., something changes dramatically inside Brewer's home. Shannan places a frantic 911 call that lasts approximately 23 minutes.",
      "She never clearly identifies who “they” are, and at times she refuses help from the people trying to assist her. Only portions of the recording have ever been publicly released. The full call has never been heard in its entirety.",
    ],
    quote: { text: "They’re trying to kill me.", attribution: "Shannan Gilbert, on the 911 call" },
    tone: "lastSeen",
  },
  {
    id: "flight",
    clockMinutes: 310,
    kicker: "The flight",
    title: "Barefoot into the dark",
    body: [
      "Immediately afterward, Shannan flees Brewer's house barefoot and runs through the quiet Oak Beach neighborhood, away from the house and away from her driver.",
      "The community is small — a huddle of homes behind a gate, porch lights spaced far apart, and beyond them nothing but reeds.",
    ],
    tone: "sighting",
  },
  {
    id: "coletti",
    clockMinutes: 315,
    kicker: "First door",
    title: "Gus Coletti's door",
    body: [
      "She pounds on the door of neighbor Gus Coletti, screaming for help. He lets her briefly into his house — and then, before police arrive, she suddenly runs back outside and continues through the neighborhood.",
      "Coletti later described her as terrified but physically unharmed.",
    ],
    tone: "sighting",
  },
  {
    id: "brennan",
    clockMinutes: 320,
    kicker: "Last confirmed sighting",
    title: "Barbara Brennan's door",
    body: [
      "She next reaches the home of another resident, Barbara Brennan, and again asks for help. Before assistance arrives, she runs away once more.",
      "This is the last time anyone confirms seeing Shannan Gilbert alive.",
    ],
    tone: "lastSeen",
  },
  {
    id: "marsh",
    clockMinutes: null,
    kicker: "The marsh",
    title: "Into the darkness",
    body: [
      "Police respond and search the neighborhood, but they cannot find her. Behind the homes lies dense marshland — reeds taller than a person, mud, and tidal wetlands.",
      "Somewhere out there, in the last dark hour before dawn, Shannan effectively disappears.",
    ],
    tone: "plain",
  },
];

/** Overrides for the clock readout on beats whose time is unknown. */
export const beatClockLabels: Record<string, string> = {
  arrival: "AROUND MIDNIGHT",
  call: "4:45–4:51 AM",
  flight: "MOMENTS LATER",
  coletti: "BEFORE DAWN",
  brennan: "BEFORE DAWN",
  marsh: "EARLY MORNING",
};

/** Everything after that night, in shared case-timeline form. */
export const afterGroups: TimelineGroup[] = [
  {
    label: "The search",
    years: "2010",
    entries: [
      {
        dateLabel: "May 3–6, 2010",
        date: "2010-05-03",
        title: "Dr. Peter Hackett calls Shannan's mother",
        body:
          "Oak Beach physician Peter Hackett phones Mari Gilbert. According to Mari, he claimed he had treated Shannan and said he ran a home for troubled women. Hackett later denied knowing Shannan at all. Phone records confirmed the calls happened, but investigators never found evidence placing Shannan inside his home that night. The contradiction fueled years of speculation.",
        tone: "poi",
      },
      {
        dateLabel: "Summer–Fall 2010",
        title: "The marshes and Ocean Parkway are searched",
        body: "Shannan remains missing. Police begin working the marshland behind Oak Beach and the brush along Ocean Parkway.",
        tone: "plain",
      },
    ],
  },
  {
    label: "The discoveries",
    years: "2010–2011",
    entries: [
      {
        dateLabel: "December 11, 2010",
        date: "2010-12-11",
        title: "A search for Shannan finds someone else",
        body:
          "A Suffolk County police officer and his K-9, searching for Shannan, discover human remains near Gilgo Beach. The body is not hers. It is Melissa Barthelemy, missing since 2009.",
        tone: "remains",
      },
      {
        dateLabel: "December 13, 2010",
        date: "2010-12-13",
        title: "The Gilgo Four",
        body:
          "The search expands, and police locate three more victims nearby: Maureen Brainard-Barnes, Megan Waterman, and Amber Lynn Costello. The four become known as the Gilgo Four.",
        tone: "remains",
      },
      {
        dateLabel: "March–April 2011",
        date: "2011-03-29",
        title: "The investigation becomes something much larger",
        body:
          "Additional searches uncover several more sets of remains along Ocean Parkway. What began as one missing persons case becomes the Gilgo Beach — or Long Island Serial Killer — investigation.",
        tone: "remains",
      },
    ],
  },
  {
    label: "Finding Shannan",
    years: "2011–2012",
    entries: [
      {
        dateLabel: "December 13, 2011",
        date: "2011-12-13",
        title: "Shannan is found",
        body:
          "Nearly 19 months after she disappeared, Shannan's remains are found in the marsh, roughly half a mile from where she was last seen. Unlike the serial killer's victims, she was not wrapped in burlap and not placed beside Ocean Parkway. She was in the marsh itself.",
        tone: "remains",
      },
      {
        dateLabel: "2012",
        date: "2012-05-01",
        title: "Cause of death: undetermined",
        body:
          "The Suffolk County Medical Examiner concludes the likely scenario is accidental drowning and/or exposure after entering the marsh in a state of panic, and states there is no evidence she was murdered.",
        tone: "poi",
      },
      {
        dateLabel: "2012",
        title: "Her family challenges the ruling",
        body:
          "The Gilberts hire forensic pathologist Michael Baden, who conducts an independent examination and argues the missing hyoid bone and other neck findings are more consistent with strangulation than accidental death. Authorities disagree, maintaining there is insufficient evidence to call it homicide.",
        tone: "lead",
      },
    ],
  },
  {
    label: "The years since",
    years: "2022–2026",
    entries: [
      {
        dateLabel: "2022",
        title: "A new task force takes over",
        body: "A reconstituted Gilgo Beach task force reexamines the broader investigation.",
        tone: "plain",
      },
      {
        dateLabel: "July 2023",
        date: "2023-07-13",
        title: "Rex Heuermann is arrested",
        body:
          "Heuermann is charged — and since then charged again and again — with murders connected to the Gilgo Beach victims. He has never been charged in Shannan Gilbert's death. Investigators continue to state they do not believe her death is connected to his murders. Many observers remain unconvinced.",
        tone: "charge",
      },
    ],
  },
];

export interface OpenQuestion {
  question: string;
  body: string;
}

/** The three questions the record cannot answer. */
export const openQuestions: OpenQuestion[] = [
  {
    question: "Why did Shannan panic?",
    body: "Whether she was fleeing a real threat, experiencing a mental health crisis, reacting to drugs, or some combination remains unknown. Only portions of the 911 call have ever been released.",
  },
  {
    question: "Why did she run from help?",
    body: "She ran from neighbors, from her driver, and from every opportunity for safety, which has led investigators to suspect a state of paranoia or extreme fear. No one knows what she believed was behind her.",
  },
  {
    question: "Is her death connected to the murders?",
    body: "Officially, no. But the search for Shannan uncovered one of the largest serial murder investigations in U.S. history, and her death remains its biggest unresolved question. The debate has never fully subsided.",
  },
];

export const shannanSources: SourceGroup[] = [
  {
    sources: [
      {
        title: "Shannan Gilbert — case overview",
        href: "https://www.truecrimeresearchers.com/cases/shannan-gilbert",
        outlet: "True Crime Researchers",
      },
      {
        title: "The Long Island Murders — interactive case board",
        href: "/true-crime/cases/long-island",
        outlet: "dandenney.com",
        note: "Shannan's place among the wider Gilgo Beach investigation, on the map.",
      },
    ],
  },
];
