import { Client } from "@notionhq/client";

// Validate required environment variables
function validateEnv() {
  const hasToken = !!import.meta.env.NOTION_TOKEN;
  const hasDatabaseId = !!import.meta.env.NOTION_DATABASE_ID;
  const hasDataSourceId = !!import.meta.env.NOTION_DATA_SOURCE_ID;

  const missing = [];
  if (!hasToken) missing.push('NOTION_TOKEN');
  // For backward compatibility, accept either DATA_SOURCE_ID (preferred) or DATABASE_ID
  if (!hasDataSourceId && !hasDatabaseId) missing.push('NOTION_DATA_SOURCE_ID or NOTION_DATABASE_ID');

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

export async function getLinks() {
  try {
    // Validate environment variables first
    validateEnv();

    const dataSourceId = import.meta.env.NOTION_DATA_SOURCE_ID;

    // Prefer new Data Sources API if NOTION_DATA_SOURCE_ID is provided.
    // Falls back to legacy database query if only NOTION_DATABASE_ID exists.
    let links;
    if (dataSourceId) {
      const notion = new Client({
        auth: import.meta.env.NOTION_TOKEN,
        notionVersion: '2025-09-03',
      });

      const filter = {
        property: "Archived",
        select: { does_not_equal: "Archived" },
      };

      // Prefer SDK v5 typed method if available, else fallback to raw request
      if (notion.dataSources && typeof notion.dataSources.query === 'function') {
        const resp = await notion.dataSources.query({
          data_source_id: dataSourceId,
          filter,
        });
        links = resp;
      } else {
        const resp = await notion.request({
          path: `/v1/data_sources/${dataSourceId}/query`,
          method: 'POST',
          body: { filter },
        });
        links = resp;
      }
    } else {
      // Legacy path: databases.query using the older database_id
      const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });
      links = await notion.databases.query({
        database_id: import.meta.env.NOTION_DATABASE_ID,
        // filter for Archived = false
        filter: {
          property: "Archived",
          select: {
            does_not_equal: "Archived",
          },
        },
      });
      // Soft warning to encourage migration
      console.warn(
        'Using legacy Notion database query. Set NOTION_DATA_SOURCE_ID to adopt API 2025-09-03.'
      );
    }

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
