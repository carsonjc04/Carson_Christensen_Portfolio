import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Carson Christensen — Software Engineer",
  description:
    "Carson Christensen is a backend-focused software engineer at Pacific Life working with Java, Spring Boot, AWS, and RAG systems.",
};

export const viewport: Viewport = {
  themeColor: "#0c1117",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased leading-relaxed`}>{children}</body>
    </html>
  );
}
