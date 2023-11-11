"use client";

import { useEffect, useState } from "react";
import VoiceInput from "./VoiceInput";
import EchoRingAnimated from "./EchoRingAnimated";
import EchoRing from "./EchoRing";

export default function MiddleRing() {
  const [botSpeaking, setBotSpeaking] = useState(false);

  useEffect(() => {
    const audioElements = document.getElementsByTagName("audio");
    const handlePlayPause = () => {
      for (let i = 0; i < audioElements.length; i++) {
        if (!audioElements[i].paused) {
          setBotSpeaking(true);
          return;
        }
      }
      setBotSpeaking(false);
    };

    for (let i = 0; i < audioElements.length; i++) {
      audioElements[i].addEventListener("play", handlePlayPause);
      audioElements[i].addEventListener("pause", handlePlayPause);
      audioElements[i].addEventListener("ended", handlePlayPause);
    }

    return () => {
      for (let i = 0; i < audioElements.length; i++) {
        audioElements[i].removeEventListener("play", handlePlayPause);
        audioElements[i].removeEventListener("pause", handlePlayPause);
        audioElements[i].removeEventListener("ended", handlePlayPause);
      }
    };
  }, []);

  return (
    <div className="flex-1 grid items-center my-8">
      {botSpeaking ? (
        <EchoRingAnimated />
      ) : (
        <EchoRing>
          <VoiceInput />
        </EchoRing>
      )}
    </div>
  );
}
