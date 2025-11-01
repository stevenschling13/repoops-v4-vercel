import { NextResponse } from "next/server";
import { getNotionClient } from "@/lib/notion";

/**
 * API endpoint to get Notion connection status
 * GET /api/notion/status
 */
export async function GET() {
  try {
    // Check if API key is configured
    const apiKey = process.env.NOTION_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "NOTION_API_KEY is not configured",
        },
        { status: 500 }
      );
    }

    // Try to initialize client
    const notion = getNotionClient();
    
    return NextResponse.json(
      {
        success: true,
        message: "Notion client initialized successfully",
        configured: true,
        apiKeyPresent: !!apiKey,
        apiKeyPrefix: apiKey.substring(0, 10) + "...",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
