import AnalyticsIcon from "../../components/AnalyticsIcon";
import UserInputForm from "../../components/UserInputForm";
import Message from "../../components/Message";
import MessageContainer from "../../components/MessageContainer";
import MiddleRing from "../../components/MiddleRing";
import Link from "next/link";

export default function Page({
  params: { threadId },
}: {
  params: { threadId: string };
}) {
  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="w-full flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="flex w-full gap-4 mx-2 my-4">
          <output className="flex flex-col items-center justify-center gap-2 flex-1">
            <Message role="assistant">How can I help?</Message>
            <MessageContainer threadId={threadId} />
          </output>
          <Link href="/analytics">
            <AnalyticsIcon />
          </Link>
        </div>

        <MiddleRing />

        <UserInputForm />
      </main>
    </div>
  );
}
