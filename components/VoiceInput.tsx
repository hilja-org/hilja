"use client";

import { useEffect, useState } from "react";
import MicrophoneIcon from "./MicrophoneIcon";
import { FORM_INPUT_NAME_USER_INPUT } from "../app/actions/post-shared";
import VoiceInputIndicator from "./VoiceInputIndicator";

export default function VoiceInput() {
  const [recognition, setRecognition] = useState<
    SpeechRecognition | undefined
  >();

  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    setRecognition(initWebSpeech());
  }, []);

  const onAudioInputStart = () => {
    setIsListening(true);
    if (!recognition) {
      // Either not initialized, or already listening - do nothing
    } else {
      recognition.onresult = (endEvent) => {
        const result = endEvent.results?.[0]?.[0];
        if (result) {
          if (result.confidence > 0.5) {
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
          setIsListening(false);
        } else {
          console.warn("Failed to get speech result");
        }
      };
      recognition.start();
    }
  };

  return (
    <button onClick={onAudioInputStart}>
      {isListening ? <VoiceInputIndicator /> : <MicrophoneIcon />}
    </button>
  );
}

// See https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
const initWebSpeech = () => {
  const recognitionCtor =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new recognitionCtor();

  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = null;
  recognition.onspeechend = () => {
    recognition.stop();
  };

  return recognition;
};
