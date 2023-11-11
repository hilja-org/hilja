import Link from "next/link";
import AnalyticsIcon from "../components/AnalyticsIcon";
import UserInputForm from "../components/UserInputForm";
import Message from "../components/Message";
import VoiceInput from "../components/VoiceInput";
import EchoRing from "../components/EchoRing";

export default function Page() {
  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="w-full flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="flex w-full gap-4 mx-2 my-4">
          <output className="flex flex-col items-center justify-center gap-2 flex-1">
            <Message role="assistant">
              Hey, I&apos;m Hilja! 👋 I&apos;m your AI pain management
              assistant. How can I help you?
            </Message>
          </output>
          <Link href="/analytics">
            <AnalyticsIcon />
          </Link>
        </div>

        <div className="flex-1 grid items-center">
          <EchoRing>
            <VoiceInput />
          </EchoRing>
        </div>

        <UserInputForm threadId={undefined} />
      </main>
    </div>
  );
}
