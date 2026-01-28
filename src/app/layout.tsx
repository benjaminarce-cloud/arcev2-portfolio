import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const display = Newsreader({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Benjamin Arce",
  description: "Builds systems that turn messy data into decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${display.variable}`}>
      <body>
        <div className="tux-vignette" />
        {children}
      </body>
    </html>
  );
}
