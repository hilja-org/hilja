import { cookies } from "next/headers";
import {
  MessageContentImageFile,
  MessageContentText,
  OpenAIRunStatus,
  openai,
} from "../openai";
import { RunSubmitToolOutputsParams } from "openai/resources/beta/threads/runs/runs";
import functions from "../openai-functions";
import { Throw } from "throw-expression";

const DEFAULT_API_POLL_INTERVAL = 1000 * 3;

async function debounceResponse<T>(
  callback: () => T,
  timeout: number,
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Incase callback is not a promise
      Promise.resolve(callback()).then(resolve).catch(reject);
    }, timeout);
  });
}

/**
 * Will poll the API untill there is a resopnse
 */
export const getMessages = async (): Promise<
  | {
      message: MessageContentText | MessageContentImageFile;
      role: "user" | "assistant";
    }[]
  | undefined
> => {
  const runId = cookies().get("runId")?.value;
  const threadId = cookies().get("threadId")?.value;
  if (!runId || !threadId) return;

  let run = await openai.beta.threads.runs.retrieve(threadId, runId);
  if (run.status === OpenAIRunStatus.COMPLETED) {
    console.log("completed");
    const openAiResponse = await openai.beta.threads.messages.list(threadId);
    return openAiResponse.data.map((message) => {
      return {
        message: message.content[0],
        role: message.role,
      };
    });
  } else if (
    run.status === OpenAIRunStatus.IN_PROGRESS ||
    run.status === OpenAIRunStatus.QUEUED
  ) {
    console.log("in progress");
    return debounceResponse<ReturnType<typeof getMessages>>(
      getMessages,
      DEFAULT_API_POLL_INTERVAL,
    );
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
        getMessages,
        DEFAULT_API_POLL_INTERVAL,
      );
    }
  } else {
    console.log("I thing there is something wrong state: ", run.status);
  }
};
