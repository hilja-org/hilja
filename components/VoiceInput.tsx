/* eslint-disable no-console */
"use client";

import { useEffect, useState } from "react";
import MicrophoneIcon from "./MicrophoneIcon";
import { FORM_INPUT_NAME_USER_INPUT } from "../app/actions/post-shared";

export default function VoiceInput() {
  const [recognition, setRecognition] = useState<
    SpeechRecognition | undefined
  >();
  useEffect(() => {
    setRecognition(initWebSpeech());
  }, []);

  const onAudioInputStart = () => {
    console.log("DEBUG", recognition);
    if (!recognition) {
      // Either not initialized, or already listening - do nothing
    } else {
      recognition.onresult = (endEvent) => {
        console.log("SPEECH RESULTS", endEvent);
        const result = endEvent.results?.[0]?.[0];
        if (result) {
          if (result.confidence > 0.5) {
            console.log("Was confident enough to set", result);
            // We are confident enough to send this to API

            const $ = document.querySelector.bind(document); // You know this shouldn't be here
            ($(`#${FORM_INPUT_NAME_USER_INPUT}`) as HTMLInputElement).value =
              result.transcript;
            (
              $(`#${FORM_INPUT_NAME_USER_INPUT}-form`) as HTMLFormElement
            ).requestSubmit();
          } else {
            // TODO show to user that we didn't understand input
            console.warn("Was not confident enough to process", result);
          }
        } else {
          console.warn("Failed to get speech result");
        }
      };
      recognition.start();
    }
  };

  return (
    <button onClick={onAudioInputStart}>
      <MicrophoneIcon />
    </button>
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

  recognition.onresult = null;
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
