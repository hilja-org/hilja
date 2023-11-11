"use client";
import { useRef, useState } from "react";
import UserInputForm from "./UserInputForm";
import VoiceInput from "./VoiceInput";

export default function UserInput() {
  const [userTextInput, setUserTextInput] = useState<string>("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <UserInputForm
        userTextInput={userTextInput}
        setUserTextInput={setUserTextInput}
        buttonRef={buttonRef}
      />
      <VoiceInput
        setUserTextInput={(textInput) => {
          setUserTextInput(textInput);
          setTimeout(() => buttonRef.current?.click(), 100);
        }}
      />
    </>
  );
}
