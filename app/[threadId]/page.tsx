/* eslint-disable no-console */
import { Toaster } from "react-hot-toast";
import PlaceholderSVG from "../../components/PlaceholderSVG";
import Image from "next/image";
import Link from "next/link";
import AnalyticsIcon from "../../components/AnalyticsIcon";
import UserInputForm from "../../components/UserInputForm";
import Message from "../../components/Message";
import VoiceInput from "../../components/VoiceInput";
import { getMessages } from "../service/pollopenaistatus";

export default async function Page({
  params,
}: {
  params: { threadId: string };
}) {
  const messages = await getMessages(params.threadId);

  const botSpeaking = false;

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="w-full flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="flex w-full gap-4 mx-2 my-4">
          <output className="flex flex-col items-center justify-center gap-2 flex-1">
            <Message role="assistant">How can I help?</Message>
            {messages &&
              messages
                .flat()
                .reverse()
                .map(({ message, role }, index) => {
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
                    return (
                      <Message role={role} key={index}>
                        {message?.text?.value}
                      </Message>
                    );
                  }
                })}
          </output>
          <Link href="/analytics">
            <AnalyticsIcon />
          </Link>
        </div>

        <div className="flex-1 grid items-center">
          <PlaceholderSVG>{botSpeaking ? null : <VoiceInput />}</PlaceholderSVG>
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
