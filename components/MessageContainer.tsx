"use client";

import { useEffect, useState } from "react";
import { OpenAIRunStatus } from "../app/openai/enum";
import Image from "next/image";
import VoiceOutput from "./VoiceOutput";
import Message from "./Message";
import { FORM_INPUT_NAME_USER_INPUT } from "../app/actions/post-shared";
import type { MessageResponse } from "../app/service/pollopenaistatus";

const DEFAULT_API_POLL_INTERVAL = 1000 * 3;

async function redo<T>(
  callback: () => T | Promise<T>,
  timeout: number,
): Promise<T> {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    setTimeout(async () => {
      try {
        resolve(await callback());
      } catch (e) {
        reject(e);
      }
    }, timeout);
  });
}

async function fetchMessages(threadId: string): Promise<MessageResponse> {
  const res = await fetch(`/api/chat/${threadId}/poll`);
  const msgres = (await res.json()) as MessageResponse;
  const { status } = msgres;
  if (status === OpenAIRunStatus.COMPLETED) {
    return msgres;
  }

  return redo<MessageResponse>(
    () => fetchMessages(threadId),
    DEFAULT_API_POLL_INTERVAL,
  );
}

export default function MessageContainer({ threadId }: { threadId: string }) {
  const [messages, setMessages] = useState<MessageResponse["messages"]>([]);

  const runId = getCookie("runId");
  const userCurMsg = getCookie("userCurMsg");

  if (userCurMsg) {
    const inputEl = document.querySelector<HTMLInputElement>(
      `#${FORM_INPUT_NAME_USER_INPUT}`,
    );
    if (inputEl) {
      inputEl.value = "";
    }
  }

  useEffect(() => {
    if (runId === undefined) return;

    fetchMessages(threadId)
      .then(({ messages }) => {
        deleteAllCookies();
        setMessages(messages);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        document
          .querySelector(`#${FORM_INPUT_NAME_USER_INPUT}`)
          ?.scrollIntoView({ behavior: "smooth" });
      });
  }, [threadId, runId]);

  return messages ? (
    <>
      {messages
        .flat()
        .reverse()
        .map(({ message, role }, index) => {
          if (!message) return;
          if (message?.type === "image_file") {
            return (
              <Image
                key={index}
                src={message.image_file.file_id}
                alt=""
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
        })}
      {userCurMsg && (
        <>
          <Message role="user">{decodeURIComponent(userCurMsg)}</Message>
          <Message role="assistant">
            {
              <span className="loading">
                <span style={{ backgroundColor: "white" }} />
                <span style={{ backgroundColor: "white" }} />
                <span style={{ backgroundColor: "white" }} />
              </span>
            }
          </Message>
        </>
      )}
      <VoiceOutput
        messageCount={messages.length}
        audioSource={`/api/speak/${threadId}`}
      />
    </>
  ) : (
    <></>
  );
}

function getCookie(name: string) {
  if (typeof document === "undefined") return;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}

function deleteAllCookies() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
