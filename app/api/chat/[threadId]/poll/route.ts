import { NextResponse } from "next/server";
import { getMessages } from "../../../../service/pollopenaistatus";

export async function GET(
  request: Request,
  {
    params: { threadId },
  }: {
    params: { threadId: string };
  },
) {
  return new NextResponse(JSON.stringify(await getMessages(threadId)), {
    status: 200,
  });
}
