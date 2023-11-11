import { assistantId, openai } from "../../openai";

export default async function POST() {
  const thread = await openai.beta.threads.create();

  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: "My back hurts quite bad today.",
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistantId,
    instructions:
      "The usre knows who you are so there is no need to introduce your self. Focuse on helping the user with their problem.",
  });

  return new Response(JSON.stringify({ runId: run.id, threadId: thread.id }), {
    status: 200,
  });
}
