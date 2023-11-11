import { useEffect, useState } from "react";
import { POST } from "../app/api/chat/post";

export default function UserInputForm() {
  // const [input, setInput] = useState<string | undefined>();
  const isLoading = false;

  const [recognition, setRecognition] = useState<
    SpeechRecognition | undefined
  >();
  useEffect(() => {
    setRecognition(initWebSpeech());
  }, []);

  const [currentSpeechAlternative, setCurrentSpeechAlternative] = useState<
    SpeechRecognitionAlternative | undefined
  >();
  useEffect(() => {
    if (currentSpeechAlternative !== undefined) {
      // Either read input from mic, or response arrived
      void (async () => {
        try {
          // eslint-disable-next-line no-console
          console.log("POSTED", await POST());
        } finally {
          setCurrentSpeechAlternative(undefined);
        }
      })();
    }
  }, [currentSpeechAlternative, setCurrentSpeechAlternative]);

  const onAudioInputStart = () => {
    if (
      !recognition ||
      recognition.onresult ||
      currentSpeechAlternative !== undefined
    ) {
      // Either not initialized, or already listening - do nothing
    } else {
      recognition.onresult = (endEvent) => {
        const result = endEvent.results?.[0]?.[0];
        if (result) {
          // We are confident enough to send this to API
          setCurrentSpeechAlternative(result);
        } else {
          // eslint-disable-next-line no-console
          console.warn("Failed to get speech result");
        }
      };
    }
  };
  return (
    <form className="max-w-xl w-full flex gap-1" action={POST}>
      <textarea
        // value={input}
        // onChange={handleInputChange}
        rows={1}
        className="w-full rounded-md shadow-sm focus:border-black focus:ring-black bg-teal text-white resize-none"
        placeholder={"Speak or type your answer"}
      />
      <button onClick={onAudioInputStart}>🎙️</button>

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
