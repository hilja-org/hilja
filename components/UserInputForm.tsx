import { SendIcon } from "../components/SendIcon";
import { POST } from "../app/actions/post";
import { FORM_INPUT_NAME_USER_INPUT } from "../app/actions/post-shared";
import type { RefObject } from "react";

const buttonStyles =
  "rounded-full font-medium p-2 h-full bg-light-blue text-white";

export default function UserInputForm({
  userTextInput,
  setUserTextInput,
  buttonRef,
}: UserInputFormProps) {
  const isLoading = false;

  return (
    <form
      className="max-w-xl w-full flex gap-2 px-2"
      action={POST as unknown as string}
    >
      <textarea
        rows={1}
        className="w-full border-none rounded-md shadow-sm focus:border-black focus:ring-black bg-teal text-white resize-none  placeholder:text-white/70"
        placeholder={"Speak or type your answer"}
        name={FORM_INPUT_NAME_USER_INPUT}
        value={userTextInput}
        onChange={(e) => setUserTextInput(e.currentTarget.value)}
      />

      {!isLoading && (
        <button ref={buttonRef} className={buttonStyles} type="submit">
          <SendIcon />
        </button>
      )}
      {isLoading && (
        <button className={buttonStyles} disabled>
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

export interface UserInputFormProps {
  userTextInput: string;
  setUserTextInput: (newValue: string) => void;
  buttonRef: RefObject<HTMLButtonElement>;
}
