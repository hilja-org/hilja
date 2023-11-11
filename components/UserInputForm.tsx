import { SendIcon } from "../components/SendIcon";
import { POST } from "../app/actions/post";
import {
  FORM_INPUT_NAME_USER_INPUT,
  FORM_INPUT_NAME_THREAD_ID,
} from "../app/actions/post-shared";

const buttonStyles =
  "rounded-full font-medium p-2 h-full bg-light-blue text-white";

export default function UserInputForm({ threadId }: UserInputFormProps) {
  const isLoading = false;

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
        <input hidden value={threadId} name={FORM_INPUT_NAME_THREAD_ID} />
      )}

      {!isLoading && (
        <button className={buttonStyles} type="submit">
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

interface UserInputFormProps {
  threadId: string | undefined;
}
