"use client";

import { FORM_INPUT_NAME_USER_INPUT } from "../app/actions/post-shared";

export default function TextArea() {
  return (
    <textarea
      onInput={(event) => {
        const el = event.currentTarget;
        el.style.height = "1px";
        el.style.height = 1 + el.scrollHeight + "px";
      }}
      rows={1}
      className="w-full border-none rounded-md shadow-sm focus:border-black focus:ring-black bg-teal text-white resize-none  placeholder:text-white/70"
      placeholder={"Speak or type your answer"}
      name={FORM_INPUT_NAME_USER_INPUT}
      id={FORM_INPUT_NAME_USER_INPUT}
    />
  );
}
