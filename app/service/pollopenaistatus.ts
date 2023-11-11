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

const DEFAULT_API_POLL_INTERVAL = 1000 * 3;

async function debounceResponse<T>(
  callback: () => T | Promise<T>,
  timeout: number,
): Promise<T> {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    setTimeout(async () => {
      try {
        resolve(await callback());
      } catch (e) {
        reject(e);
      }
    }, timeout);
  });
}

type OpenAiMessages = {
  message: MessageContentText | MessageContentImageFile;
  role: "user" | "assistant";
}[];

/**
 * Will poll the API untill there is a resopnse
 */
export const getMessages = async (
  threadId: string,
): Promise<
  | {
      status: OpenAIRunStatus;
      messages: OpenAiMessages;
    }
  | undefined
> => {
  const runId = cookies().get("runId")?.value;
  if (!runId || !threadId) return;

  let run = await openai.beta.threads.runs.retrieve(threadId, runId);
  if (run.status === OpenAIRunStatus.COMPLETED) {
    console.log("completed");
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
    const required_action = run.required_action;
    if (required_action) {
      run = await openai.beta.threads.runs.submitToolOutputs(threadId, run.id, {
        tool_outputs: await Promise.all(
          required_action.submit_tool_outputs.tool_calls.map(
            async ({
              id,
              function: { name, arguments: argsString },
            }): Promise<RunSubmitToolOutputsParams.ToolOutput> => ({
              tool_call_id: id,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
              output: await (
                functions[name] ??
                Throw(`Implement support for function "${name}"`)
              )(JSON.parse(argsString)),
            }),
          ),
        ),
      });

      return debounceResponse<ReturnType<typeof getMessages>>(
        () => getMessages(threadId),
        DEFAULT_API_POLL_INTERVAL,
      );
    }
  }

  return makeResponse(run.status);
};

const makeResponse = (status: string, messages: OpenAiMessages = []) => ({
  status: status as OpenAIRunStatus,
  messages,
});
