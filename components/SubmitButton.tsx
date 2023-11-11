"use client";

import { SendIcon } from "../components/SendIcon";
// @ts-expect-error no type support yet
import { useFormStatus } from "react-dom";

const buttonStyles =
  "rounded-full font-medium p-2 h-full bg-light-blue text-white";

export const SubmitButton = () => {
  // eslint-disable-next-line
  const { pending } = useFormStatus();

  return (
    <button className={buttonStyles} type="submit" disabled={Boolean(pending)}>
      {!pending ? (
        <SendIcon />
      ) : (
        <span className="loading">
          <span style={{ backgroundColor: "white" }} />
          <span style={{ backgroundColor: "white" }} />
          <span style={{ backgroundColor: "white" }} />
        </span>
      )}
    </button>
  );
};
