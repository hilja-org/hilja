import { SendIcon } from "../components/SendIcon";
import { POST } from "../app/actions/post";
import { FORM_INPUT_NAME_USER_INPUT } from "../app/actions/post-shared";

export default function UserInputForm() {
  const isLoading = false;

  return (
    <form
      className="max-w-xl w-full flex gap-1 fixed bottom-5 px-4"
      action={POST}
    >
      <textarea
        rows={1}
        className="w-full rounded-md shadow-sm focus:border-black focus:ring-black bg-teal text-white resize-none"
        placeholder={"Speak or type your answer"}
        name={FORM_INPUT_NAME_USER_INPUT}
      />

      {!isLoading && (
        <button
          className="rounded-xl font-medium px-4 py-2 h-full bg-light-blue text-white"
          type="submit"
        >
          <SendIcon />
        </button>
      )}
      {isLoading && (
        <button
          className="rounded-xl font-medium px-4 py-2 h-full bg-bg-light-blue text-white"
          disabled
        >
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
