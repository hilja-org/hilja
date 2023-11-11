import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

const title = "Hilja";
const description =
  "AI-powered solution providing personalised approach to pain relief, reducing the need for medication";

export const metadata: Metadata = {
  metadataBase: new URL("https://hilja.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#012A36" />
      <body className="bg-dark-teal text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
