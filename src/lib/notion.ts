import { Client } from "@notionhq/client";

/**
 * Initialize the Notion client with the API key from environment variables
 */
export function getNotionClient(): Client {
  const apiKey = process.env.NOTION_API_KEY;

  if (!apiKey) {
    throw new Error(
      "NOTION_API_KEY is not set in environment variables. Please add it to your .env.local file."
    );
  }

  return new Client({
    auth: apiKey,
  });
}

/**
 * Test the Notion connection by listing users in the workspace
 * Note: This requires the integration to have user read permissions
 */
export async function testNotionConnection(): Promise<{
  success: boolean;
  message: string;
  data?: unknown;
}> {
  try {
    const notion = getNotionClient();
    
    // Try to list users to test the connection
    // Note: This requires appropriate permissions. If it fails due to permissions,
    // it may indicate the connection works but lacks specific scopes.
    const response = await notion.users.list({});
    
    return {
      success: true,
      message: "Successfully connected to Notion API",
      data: response,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
