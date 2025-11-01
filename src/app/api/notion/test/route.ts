import { NextResponse } from "next/server";
import { testNotionConnection } from "@/lib/notion";

/**
 * API endpoint to test the Notion connection
 * GET /api/notion/test
 */
export async function GET() {
  try {
    const result = await testNotionConnection();
    
    return NextResponse.json(result, {
      status: result.success ? 200 : 500,
    });
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
