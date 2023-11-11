import { NextRequest } from "next/server";
import { openai } from "../../openai";

export async function GET(req: NextRequest) {
  const threadId = req.nextUrl.searchParams.get("threadId") as string;
  const runId = req.nextUrl.searchParams.get("runId") as string;

  const run = await openai.beta.threads.runs.retrieve(threadId, runId);

  return new Response(JSON.stringify(run), { status: 200 });
}
