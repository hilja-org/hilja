import { cookies } from "next/headers";
import {
  MessageContentImageFile,
  MessageContentText,
  OpenAIRunStatus,
  openai,
} from "../openai";
import type { RunSubmitToolOutputsParams } from "openai/resources/beta/threads/runs/runs";
import functions from "../openai-functions";
import { Throw } from "throw-expression";
import { revalidatePath } from "next/cache";

type OpenAiMessage = {
  message: MessageContentText | MessageContentImageFile;
  role: "user" | "assistant";
};

export type MessageResponse = {
  status: OpenAIRunStatus;
  messages: OpenAiMessage[];
};

/**
 * Will poll the API untill there is a resopnse
 */
export const getMessages = async (
  threadId: string,
): Promise<MessageResponse | undefined> => {
  const runId = cookies().get("runId")?.value;
  if (!runId || !threadId) return;

  const run = await openai.beta.threads.runs.retrieve(threadId, runId);
  if (run.status === OpenAIRunStatus.COMPLETED) {
    const openAiResponse = await openai.beta.threads.messages.list(threadId);
    const messages = openAiResponse.data.map((message) => {
      return {
        message: message.content[0],
        role: message.role,
      };
    });
    return {
      status: run.status as OpenAIRunStatus,
      messages,
    };
  } else if (run.status === OpenAIRunStatus.REQUIRES_ACTION) {
    revalidatePath("/");
    const required_action = run.required_action;
    if (required_action) {
      await openai.beta.threads.runs.submitToolOutputs(threadId, run.id, {
        tool_outputs: await Promise.all(
          required_action.submit_tool_outputs.tool_calls.map(
            async ({
              id,
              function: { name, arguments: argsString },
            }): Promise<RunSubmitToolOutputsParams.ToolOutput> => ({
              tool_call_id: id,
              output: await (
                functions[name] ??
                Throw(`Implement support for function "${name}"`)
              )(JSON.parse(argsString)),
            }),
          ),
        ),
      });
    }
  }

  return makeResponse(run.status);
};

const makeResponse = (status: string, messages: OpenAiMessage[] = []) => ({
  status: status as OpenAIRunStatus,
  messages,
});
