"use client";

import { useEffect, useState } from "react";

export default function VoiceInput() {
  const [recognition, setRecognition] = useState<
    SpeechRecognition | undefined
  >();
  useEffect(() => {
    setRecognition(initWebSpeech());
  }, []);

  return <button onClick={() => recognition?.start()}>🎙️</button>;
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
