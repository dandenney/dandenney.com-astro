import { Client } from "@notionhq/client";

// Validate required environment variables
function validateEnv() {
  const requiredVars = ['NOTION_TOKEN', 'NOTION_DATABASE_ID'];
  const missingVars = requiredVars.filter(varName => !import.meta.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

export async function getLinks() {
  try {
    // Validate environment variables first
    validateEnv();

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
  } catch (error) {
    // Log the error for debugging
    console.error('Error fetching Notion links:', error.message);
    
    // Return empty array as fallback to prevent build failure
    // This allows the site to build even if the Notion API is unavailable
    return [];
  }
}
