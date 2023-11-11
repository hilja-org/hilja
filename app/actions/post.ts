"use server";

import { redirect } from "next/navigation";
import { assistantId, openai } from "../openai";
import {
  FORM_INPUT_NAME_USER_INPUT,
  FORM_INPUT_NAME_THREAD_ID,
} from "./post-shared";
import { cookies } from "next/headers";

export async function POST(data: FormData) {
  let threadId =
    ensureMaybeString(data.get(FORM_INPUT_NAME_THREAD_ID)) ?? undefined;
  let threadCreated = false;

  if (!threadId) {
    console.log("CREATING THREAD!!!!!");
    const thread = await openai.beta.threads.create();
    threadId = thread.id;

    threadCreated = true;
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
  if (threadCreated) {
    redirect(`/${threadId}`);
  }
}

const ensureString = (entry: FormDataEntryValue | null): string => {
  if (typeof entry !== "string") {
    throw new Error("Form entry was not string");
  }
  return entry;
};

const ensureMaybeString = (entry: FormDataEntryValue | null): string | null => {
  if (entry !== null && typeof entry !== "string") {
    throw new Error("Form entry was not string");
  }
  return entry;
};
