export default function Message({
  children,
  role,
}: {
  children: string;
  role: "assistant" | "user";
}) {
  return (
    <div
      className={`w-full bg-teal rounded-xl shadow-md px-4 py-2 text-left hover:bg-teal/80 transition ${
        role === "assistant" ? "rounded-br-none" : "rounded-bl-none"
      }`}
    >
      {children}
    </div>
  );
}
