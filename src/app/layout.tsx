import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

// Use a high-taste serif for the name/headlines.
// Option A: local font file if you have it.
// Option B: swap this to another google serif later.
const display = localFont({
  src: "./fonts/DisplaySerif.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Benjamin Arce",
  description: "Builds systems that turn messy data into decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
