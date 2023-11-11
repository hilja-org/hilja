"use client";

import { FormEventHandler, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useChat } from "ai/react";
import PlaceholderSVG from "../components/PlaceholderSVG";

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

  const [recognition, setRecognition] = useState<
    SpeechRecognition | undefined
  >();
  useEffect(() => {
    setRecognition(initWebSpeech());
  }, []);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    setBio(input);
    handleSubmit(e);
  };

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

        <form className="max-w-xl w-full flex gap-1" onSubmit={onSubmit}>
          <textarea
            value={input}
            onChange={handleInputChange}
            rows={1}
            className="w-full rounded-md shadow-sm focus:border-black focus:ring-black bg-teal text-white resize-none"
            placeholder={"Speak or type your answer"}
          />
          <button onClick={() => recognition?.start()}>🎙️</button>

          {!isLoading && (
            <button
              className="rounded-xl font-medium px-4 py-2 h-full bg-black/80 text-white"
              type="submit"
            >
              &rarr;
            </button>
          )}
          {isLoading && (
            <button
              className="rounded-xl font-medium px-4 py-2 h-full bg-black/80 text-white"
              disabled
            >
              <span className="loading">
                <span style={{ backgroundColor: "white" }} />
                <span style={{ backgroundColor: "white" }} />
                <span style={{ backgroundColor: "white" }} />
              </span>
            </button>
          )}
        </form>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
      </main>
    </div>
  );
}

// See https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
const initWebSpeech = () => {
  const recognitionCtor =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new recognitionCtor();

  // const grammarListCtor =
  //   window.SpeechGrammarList || window.webkitSpeechGrammarList;
  // const grammarList = new grammarListCtor();
  // grammarList.addFromString(
  //   "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;",
  //   1,
  // );

  // recognition.grammars = grammarList;
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (evt) => {
    // eslint-disable-next-line no-console
    console.log("DEBUG: SPEECH RESULT", evt.results, evt);
    // eslint-disable-next-line no-console
    console.log("SPEECH FINAL RESULT", evt.results[0]?.[0]?.transcript);
  };
  recognition.onspeechend = (evt) => {
    // eslint-disable-next-line no-console
    console.log("DEBUG: SPEECH END", evt);
    recognition.stop();
  };
  recognition.onnomatch = (evt) => {
    // eslint-disable-next-line no-console
    console.log("DEBUG: SPEECH NO MATCH", evt);
  };
  recognition.onerror = (evt) => {
    // eslint-disable-next-line no-console
    console.log("DEBUG: SPEECH ERROR", evt);
  };

  return recognition;

  // const SpeechRecognitionEvent =
  //   window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
};
