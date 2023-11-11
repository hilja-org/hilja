/* eslint-disable no-console */
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";
import PlaceholderSVG from "../components/PlaceholderSVG";
import VoiceInputIndicator from "../components/VoiceInputIndicator";
import Image from "next/image";
import Link from "next/link";
import AnalyticsIcon from "../components/AnalyticsIcon";
import {
  MessageContentImageFile,
  MessageContentText,
  openai,
  OpenAIRunStatus,
} from "./openai";
import UserInputForm from "../components/UserInputForm";
import Message from "../components/Message";
import VoiceInput from "../components/VoiceInput";

const DEFAULT_API_POLL_INTERVAL = 1000 * 3;

async function redoAgainAndAgain<T>(
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

export default async function Page() {
  // const lastMessage = messages[messages.length - 1];
  // const generatedBios =
  //   lastMessage?.role === "assistant" ? lastMessage.content : null;
  const getStuff = async (): Promise<
    (MessageContentText | MessageContentImageFile)[][] | undefined
  > => {
    const runId = cookies().get("runId")?.value;
    const threadId = cookies().get("threadId")?.value;
    if (!runId || !threadId) return;

    const run = await openai.beta.threads.runs.retrieve(threadId, runId);
    if (run.status === OpenAIRunStatus.COMPLETED) {
      console.log("completed");
      const openAiResponse = await openai.beta.threads.messages.list(threadId);
      return openAiResponse.data.map((message) => message.content);
    } else if (run.status === OpenAIRunStatus.IN_PROGRESS) {
      console.log("in progress");
      return redoAgainAndAgain<ReturnType<typeof getStuff>>(
        getStuff,
        DEFAULT_API_POLL_INTERVAL,
      );
    } else if (run.status === OpenAIRunStatus.REQUIRES_ACTION) {
      console.log("requires action");
    } else {
      console.log("I thing there is something wrong state: ", run.status);
    }
  };

  const messages = await getStuff();

  const userSpeaking = false;
  const botSpeaking = false;

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="w-full flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="flex w-full gap-4 mx-2 my-4">
          <output className="flex flex-col items-center justify-center gap-2 flex-1">
            {messages &&
              messages.flat().map((message, index) => {
                if (!message) return;
                if (message?.type === "image_file") {
                  return (
                    <Image
                      key={index}
                      src={message.image_file.file_id}
                      alt="generated bio"
                      className="rounded-xl shadow-md"
                    />
                  );
                }
                if (message?.type === "text") {
                  return <Message key={index}>{message?.text?.value}</Message>;
                }
              })}
            <Message role="assistant">How can I help?</Message>
          </output>
          <Link href="/analytics">
            <AnalyticsIcon />
          </Link>
        </div>

        <div className="flex-1 grid items-center">
          <PlaceholderSVG>
            {userSpeaking ? (
              <VoiceInputIndicator />
            ) : botSpeaking ? null : (
              <VoiceInput />
            )}
          </PlaceholderSVG>
        </div>

        <UserInputForm />

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
      </main>
    </div>
  );
}
