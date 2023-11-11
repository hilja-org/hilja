"use client";

import { useEffect, useRef } from "react";

export default function VoiceOutput({
  audioSource,
  messageCount,
}: VoiceOutputProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause();
      audioElement.load();
      void audioElement.play();
    }
  }, [messageCount]);
  return <audio ref={audioRef} src={audioSource} />;
}

export interface VoiceOutputProps {
  audioSource: string;
  messageCount: number;
}
