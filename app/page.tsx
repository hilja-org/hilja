import { Toaster } from "react-hot-toast";
import PlaceholderSVG from "../components/PlaceholderSVG";
import VoiceInputIndicator from "../components/VoiceInputIndicator";
import Link from "next/link";
import { AnalyticsIcon } from "../components/AnalyticsIcon";
import UserInput from "../components/UserInput";

export default function Page() {
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
