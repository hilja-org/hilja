"use client";

import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useChat } from "ai/react";
import PlaceholderSVG from "../components/PlaceholderSVG";
import UserInputForm from "../components/UserInputform";

export default function Page() {
  const [bio, setBio] = useState("");
  const bioRef = useRef<null | HTMLDivElement>(null);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat({
      body: {
        bio,
      },
      onResponse() {
        scrollToBios();
      },
    });

  const lastMessage = messages[messages.length - 1];
  const generatedBios =
    lastMessage?.role === "assistant" ? lastMessage.content : null;

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen bg-dark-teal text-white">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <output className="space-y-10 my-10">
          {generatedBios && (
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
          )}
        </output>

        <PlaceholderSVG />

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
