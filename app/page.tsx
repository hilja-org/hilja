import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";
import PlaceholderSVG from "../components/PlaceholderSVG";
import VoiceInputIndicator from "../components/VoiceInputIndicator";
import Link from "next/link";
import { AnalyticsIcon } from "../components/AnalyticsIcon";
import UserInput from "../components/UserInput";
import { openai, OpenAIRunStatus } from "./openai";

const DEFAULT_API_POLL_INTERVAL = 1000;

export default async function Page() {
  // const lastMessage = messages[messages.length - 1];
  // const generatedBios =
  //   lastMessage?.role === "assistant" ? lastMessage.content : null;
  const getStuff = async () => {
    const runId = cookies().get("runId")?.value;
    const threadId = cookies().get("threadId")?.value;
    if (!runId || !threadId) return;

    const run = await openai.beta.threads.runs.retrieve(threadId, runId);
    switch (run.status) {
      case OpenAIRunStatus.COMPLETED:
        console.log(run);
        break;
      case OpenAIRunStatus.IN_PROGRESS:
        setTimeout(() => {
          void getStuff();
        }, DEFAULT_API_POLL_INTERVAL);
        void getStuff();
        return;
      case OpenAIRunStatus.REQUIRES_ACTION:
        // @TODO: what now?
        console.log(run);
        break;
      default:
        // This measn something has failed
        console.log(run);
        break;
    }
  };

  void getStuff();

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="w-full flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="flex">
          <output className="space-y-10 my-10">
            {/* {generatedBios && (
            <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
              {generatedBios
                .substring(generatedBios.indexOf("1") + 3)
                .split("2.")
                .map((generatedBio) => {
                  return (
                    <div
                      className="bg-teal rounded-xl shadow-md p-4 hover:bg-teal/80 transition border"
                      onClick={() => {
                        void navigator.clipboard.writeText(generatedBio);
                        toast("Bio copied to clipboard", {
                          icon: "✂️",
                        });
                      }}
                      key={generatedBio}
                    >
                      <p>{generatedBio}</p>
                    </div>
                  );
                })}
            </div>
          )} */}
          </output>
          <Link href="/analytics">
            <AnalyticsIcon />
          </Link>
        </div>

        <div className="flex-1">
          <PlaceholderSVG>
            <VoiceInputIndicator />
          </PlaceholderSVG>
        </div>

        <UserInput />

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
      </main>
    </div>
  );
}
