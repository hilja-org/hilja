import { NextResponse } from "next/server";
import { MessageContentText, openai } from "../../../openai";
import { Throw } from "throw-expression";

export async function GET(
  request: Request,
  {
    params: { threadId },
  }: {
    params: { threadId: string };
  },
) {
  let responseToStream: Response | undefined;
  if (threadId) {
    const messages = await openai.beta.threads.messages.list(threadId, {
      limit: 3,
    });
    const latestAssistantMessage = messages.data
      .flat()
      .find(
        (msg) =>
          !!msg.assistant_id &&
          !!msg.content.find(({ type }) => type === "text"),
      );
    if (latestAssistantMessage) {
      responseToStream = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: (
          latestAssistantMessage.content.find(
            (msg): msg is MessageContentText => msg.type === "text",
          ) ?? Throw("This should never happen")
        ).text.value,
      });
    }
  }
  return responseToStream
    ? new NextResponse(responseToStream.body, {
        status: 200,
        headers: {
          "content-type": responseToStream.headers.get("content-type") ?? "no",
          "transfer-encoding":
            responseToStream.headers.get("transfer-encoding") ?? "no",
        },
      })
    : new NextResponse();
}

export interface RequestData {
  text: string;
}
