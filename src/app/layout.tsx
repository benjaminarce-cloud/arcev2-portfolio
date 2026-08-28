// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  // Real italics, not a synthesized slant. The index hover depends on it.
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
});

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benjaminarce.dev"),
  title: {
    default: "Benjamin Arce",
    template: "%s · Benjamin Arce",
  },
  description:
    "AI systems engineer. I build MCP servers, agent integrations, and automated reporting for supply chain and finance operations.",
  openGraph: {
    title: "Benjamin Arce",
    description:
      "AI systems engineer. I build MCP servers, agent integrations, and automated reporting for supply chain and finance operations.",
    type: "website",
    locale: "en_US",
  },
};

// Set the theme before first paint so the cream never flashes in dark mode.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})()`;

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.579 2 12.253c0 4.537 2.865 8.387 6.839 9.744.5.095.682-.224.682-.5 0-.247-.009-.902-.014-1.771-2.782.621-3.369-1.376-3.369-1.376-.454-1.189-1.11-1.505-1.11-1.505-.908-.646.069-.633.069-.633 1.004.072 1.532 1.06 1.532 1.06.892 1.571 2.341 1.118 2.91.855.091-.667.349-1.118.635-1.374-2.221-.262-4.555-1.143-4.555-5.087 0-1.124.39-2.043 1.03-2.764-.103-.262-.447-1.319.098-2.75 0 0 .84-.276 2.75 1.056A9.3 9.3 0 0 1 12 6.844c.85.004 1.705.12 2.504.35 1.909-1.332 2.748-1.056 2.748-1.056.546 1.431.202 2.488.099 2.75.64.721 1.028 1.64 1.028 2.764 0 3.954-2.338 4.822-4.566 5.078.359.318.678.945.678 1.905 0 1.375-.012 2.484-.012 2.822 0 .278.18.6.688.498C19.138 20.636 22 16.788 22 12.253 22 6.579 17.523 2 12 2z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="currentColor">
      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.986V9h3.104v1.561h.044c.432-.82 1.49-1.686 3.067-1.686 3.279 0 3.882 2.159 3.882 4.967v6.61zM5.337 7.433a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608zM6.956 20.452H3.716V9h3.24v11.452z" />
    </svg>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${grotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <header className="site-header">
          <div className="container">
            <div className="header-inner">
              <Link href="/" className="brand">
                Benjamin Arce
              </Link>

              <nav className="nav" aria-label="Primary">
                <div className="nav-links">
                  <Link className="nav-link" href="/work">
                    Work
                  </Link>
                  <Link className="nav-link" href="/notes">
                    Notes
                  </Link>
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </div>

                <div className="icon-links">
                  <a
                    className="icon-link"
                    href="https://github.com/benjaminarce-cloud"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <IconGitHub />
                  </a>
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com/in/arcebenjamin/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <IconLinkedIn />
                  </a>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            <div className="folio">
              <span>Guadalajara, México</span>
              <a href="mailto:arceb3013@gmail.com">arceb3013@gmail.com</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
