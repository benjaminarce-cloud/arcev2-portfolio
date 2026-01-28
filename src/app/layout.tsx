import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Benjamin Arce",
  description: "Data-first portfolio: projects and notes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <div className="tux-vignette" />
        <div className="tux-grain" />
        <div className="min-h-[100dvh]">
          <SiteHeader />
          <main className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
