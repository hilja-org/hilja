import { NextApiResponse } from 'next/types';
import OpenAI from 'openai';

// Create an OpenAI API client (that's edge friendly!)
const assistantId = process.env.OPENAI_ASSISTANT_ID as string;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST() {
  const thread = await openai.beta.threads.create()

  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: "My back hurts quite bad today."
    }
  );

  const run = await openai.beta.threads.runs.create(
    thread.id,
    {
      assistant_id: assistantId,
      instructions: "The usre knows who you are so there is no need to introduce your self. Focuse on helping the user with their problem."
    }
  );

  const response = await openai.beta.threads.runs.retrieve(
    thread.id,
    run.id
  );
  
  console.log(response);

  return new Response(JSON.stringify(response), { status: 200 });
}
