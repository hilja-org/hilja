import { NextRequest } from "next/server";
import { Throw } from "throw-expression";
import { openai } from "../../openai";
import functions from "../../openai-functions";
import { RunSubmitToolOutputsParams } from "openai/resources/beta/threads/runs/runs";

export async function GET(req: NextRequest) {
  const threadId = req.nextUrl.searchParams.get("threadId") as string;
  const runId = req.nextUrl.searchParams.get("runId") as string;

  let run = await openai.beta.threads.runs.retrieve(threadId, runId);
  const { required_action } = run;
  while (run.status === "requires_action" && required_action) {
    // eslint-disable-next-line no-console
    console.log(
      "Providing additional input for OpenAI assistant...",
      required_action,
    );
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
  }

  return new Response(JSON.stringify(run), { status: 200 });
}
