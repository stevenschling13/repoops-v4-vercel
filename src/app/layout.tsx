import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="bg-zinc-950 text-zinc-100">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
