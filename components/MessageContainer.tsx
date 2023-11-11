"use client";

import { useEffect } from "react";
import { MessageContentImageFile, MessageContentText } from "../app/openai";

export default function MessageContainer(threadId: string) {
  useEffect(() => {
    fetch("/api/chat/poll", {
      method: "POST",
      body: JSON.stringify({ threadId }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  /** return messages
    .flat()
    .reverse()
    .map(({ message, role }, index) => {
      if (!message) return;
      if (message?.type === "image_file") {
        return (
          <Image
            key={index}
            src={message.image_file.file_id}
            alt="generated bio"
            className="rounded-xl shadow-md"
          />
        );
      }
      if (message?.type === "text") {
        return (
          <Message role={role} key={index}>
            {message?.text?.value}
          </Message>
        );
      }
    }); */

  return [];
}
