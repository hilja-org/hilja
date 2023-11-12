import { POST } from "../app/actions/post";
import {
  FORM_INPUT_NAME_USER_INPUT,
  FORM_INPUT_NAME_THREAD_ID,
} from "../app/actions/post-shared";
import { SubmitButton } from "./SubmitButton";
import TextArea from "./TextArea";

export default function UserInputForm({ threadId }: UserInputFormProps) {
  return (
    <form
      className="max-w-xl w-full flex gap-2 mb-2"
      action={POST as unknown as string}
      id={`${FORM_INPUT_NAME_USER_INPUT}-form`}
    >
      <TextArea />

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
