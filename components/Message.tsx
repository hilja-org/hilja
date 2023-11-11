import Markdown from "react-markdown";
import Image from "next/image";

export default function Message({
  children,
  role,
}: {
  children: string | JSX.Element;
  role: "assistant" | "user";
}) {
  const youtubeLinks = children.match(
    /https:\/\/www.youtube.com\/watch\?v=([a-zA-Z0-9_-]+)/g,
  );

  return (
    <div
      className={`w-full bg-teal rounded-xl shadow-md px-4 py-2 text-left hover:bg-teal/80 transition ${
        role === "assistant"
          ? "rounded-br-none"
          : "rounded-bl-none bg-violet/50 hover:bg-violet/40"
      }`}
    >
      <Markdown
        components={{
          a: (props) => {
            return (
              <a className="underline" href={props.href}>
                {props.children}
              </a>
            );
          },
        }}
      >
        {children}
      </Markdown>
      {youtubeLinks && (
        <Image
          src={`https://img.youtube.com/vi/${
            youtubeLinks[0].split("=")[1]
          }/0.jpg`}
          alt=""
          width="100"
          height="60"
        />
      )}
    </div>
  );
}
