"use server";

import { assistantId, openai } from "../openai";
import { FORM_INPUT_NAME_USER_INPUT } from "./post-shared";
import { cookies } from "next/headers";

export async function POST(data: FormData) {
  let threadId = cookies().get("threadId")?.value ?? undefined;

  if (!threadId) {
    const thread = await openai.beta.threads.create();
    threadId = thread.id;
    cookies().set("threadId", threadId);
  }

  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: ensureString(data.get(FORM_INPUT_NAME_USER_INPUT)),
  });

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
    instructions:
      "The user knows who you are so there is no need to introduce your self. Focus on helping the user with their problem.",
  });
  cookies().set("runId", run.id);
}

const ensureString = (entry: FormDataEntryValue | null): string => {
  if (typeof entry !== "string") {
    throw new Error("Form entry was not string");
  }
  return entry;
};
