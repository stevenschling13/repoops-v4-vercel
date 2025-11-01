import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RepoOps V4",
  description:
    "Operational Next.js starter tailored for Vercel deployments with sensible defaults.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="bg-zinc-950 text-zinc-100" lang="en">
      <body>{children}</body>
    </html>
  );
}
