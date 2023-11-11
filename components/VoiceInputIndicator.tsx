export default function VoiceInputIndicator() {
  return (
    <>
      <path
        d="M64 87L64 112"
        stroke="#FBFBFB"
        strokeWidth="12"
        strokeLinecap="round"
        className="animate-bounce"
      />
      <path
        d="M82 82L82 117"
        stroke="#FBFBFB"
        strokeWidth="12"
        strokeLinecap="round"
        className="animate-bounce [animation-delay:100ms]"
      />
      <path
        d="M118 94L118 107"
        stroke="#FBFBFB"
        strokeWidth="12"
        strokeLinecap="round"
        className="animate-bounce [animation-delay:300ms]"
      />
      <path
        d="M136 98L136 102"
        stroke="#FBFBFB"
        strokeWidth="12"
        strokeLinecap="round"
        className="animate-bounce [animation-delay:600ms]"
      />
      <path
        d="M100 94L100 106"
        stroke="#FBFBFB"
        strokeWidth="12"
        strokeLinecap="round"
        className="animate-bounce [animation-delay:400ms]"
      />
    </>
  );
}
