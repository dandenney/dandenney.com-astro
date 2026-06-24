export interface BlogrollEntry {
  name: string;
  url: string;
}

/** Blogs Dan reads — surfaced on /posts and in /llms.txt. */
export const blogroll: BlogrollEntry[] = [
  { name: "Rachel Smith", url: "https://rachsmith.com" },
  { name: "Chris Coyier", url: "https://chriscoyier.net" },
  { name: '"Uncle" Dave Rupert', url: "https://daverupert.com" },
  { name: "CSS IRL", url: "https://css-irl.info" },
  { name: "Ire Aderinokun", url: "https://bitsofco.de" },
  { name: "Stephanie Walter", url: "https://stephaniewalter.design/blog" },
  { name: "Tim Kadlec", url: "https://timkadlec.com/remembers" },
  { name: "Brad Frost", url: "https://bradfrost.com/blog" },
  { name: "Modern CSS Solutions", url: "https://moderncss.dev" },
  { name: "CoDrops", url: "https://tympanus.net/codrops" },
  { name: "Raymond Camden", url: "https://www.raymondcamden.com" },
  { name: "Ahmad Shadeed", url: "https://ishadeed.com/articles" },
  { name: "Builder", url: "https://www.builder.io/blog" },
  { name: "Zach Leat", url: "https://www.zachleat.com/web" },
  { name: "Stefan Judis", url: "https://www.stefanjudis.com/blog" },
  { name: "Web.Dev", url: "https://web.dev/blog" },
];
