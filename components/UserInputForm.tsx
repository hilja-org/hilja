import { POST } from "../app/actions/post";
import {
  FORM_INPUT_NAME_USER_INPUT,
  FORM_INPUT_NAME_THREAD_ID,
} from "../app/actions/post-shared";
import { SubmitButton } from "./SubmitButton";

export default function UserInputForm({ threadId }: UserInputFormProps) {
  return (
    <form
      className="max-w-xl w-full flex gap-2"
      action={POST as unknown as string}
      id={`${FORM_INPUT_NAME_USER_INPUT}-form`}
    >
      <textarea
        rows={1}
        className="w-full border-none rounded-md shadow-sm focus:border-black focus:ring-black bg-teal text-white resize-none  placeholder:text-white/70"
        placeholder={"Speak or type your answer"}
        name={FORM_INPUT_NAME_USER_INPUT}
        id={FORM_INPUT_NAME_USER_INPUT}
      />

      {!!threadId && (
        <input
          hidden
          readOnly
          value={threadId}
          name={FORM_INPUT_NAME_THREAD_ID}
        />
      )}

      <SubmitButton />
    </form>
  );
}

interface UserInputFormProps {
  threadId: string | undefined;
}
