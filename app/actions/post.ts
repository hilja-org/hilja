"use server";

import { assistantId, openai } from "../openai";
import { FORM_INPUT_NAME_USER_INPUT } from "./post-shared";

export async function POST(data: FormData) {
  const thread = await openai.beta.threads.create();

  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: ensureString(data.get(FORM_INPUT_NAME_USER_INPUT)),
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistantId,
    instructions:
      "The usre knows who you are so there is no need to introduce your self. Focuse on helping the user with their problem.",
  });

  return { runId: run.id, threadId: thread.id };
}

const ensureString = (entry: FormDataEntryValue | null): string => {
  if (typeof entry !== "string") {
    throw new Error("Form entry was not string");
  }
  return entry;
};
