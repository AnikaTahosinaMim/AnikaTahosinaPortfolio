import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anika Tahosina Mim   | ",
  description: "Portfolio of Anika Tahosina Mim — Senior Full Stack Developer specializing in Next.js, React, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB.",
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "TanStack Query", "RTK Query", "Recharts"],
  authors: [{ name: "Anika Tahosina Mim" }],
  openGraph: {
    title: "Anika Tahosina Mim | Senior Full Stack Engineer Portfolio",
    description: "Building production-grade web applications with Next.js, React, TypeScript, Tailwind CSS, Node.js, and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100">{children}</body>
    </html>
  );
}
