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
 * Test the Notion connection by retrieving the authenticated user
 */
export async function testNotionConnection(): Promise<{
  success: boolean;
  message: string;
  data?: unknown;
}> {
  try {
    const notion = getNotionClient();
    
    // Try to list users to test the connection
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
