import OpenAI from "openai";

export const assistantId = process.env.OPENAI_ASSISTANT_ID as string;
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type MessageContentText =
  OpenAI.Beta.Threads.Messages.MessageContentText;
export type MessageContentImageFile =
  OpenAI.Beta.Threads.Messages.MessageContentImageFile;

export * from "./enum";
