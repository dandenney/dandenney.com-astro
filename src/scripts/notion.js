import { Client } from "@notionhq/client";

export async function getLinks() {
  const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });
  const links = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
    // filter for Archived = false
    filter: {
      property: "Archived",
      select: {
        does_not_equal: "Archived",
      },
    },
  });
  console.log(links.results[1].properties.Title.title[0].plain_text);
  const results = links.results.map((link) => {
    return {
      created: new Date(link.created_time),
      notes: link.properties.Notes.rich_text[0]?.text.content,
      tag:
        link.properties.Tags.multi_select[0]?.name === "video"
          ? "Watched"
          : "Read",
      title: link.properties.Title.title[0].plain_text,
      url: link.properties.URL.url,
    };
  });
  return results;
}
