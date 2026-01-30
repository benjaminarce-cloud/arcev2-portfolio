// src/app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page">
      <div className="container-read">
        <h1 className="page-title">
          Now <span className="accent">/</span>
        </h1>
        <p className="page-subtitle">
          Current focus, short and honest. If it’s here, it’s because it’s real.
        </p>

        <div className="prose">
          <hr />

          <h2>Current focus</h2>
          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              Building websites as a side job: film portfolios and product launches (shipping fast, clean, and scan-first).
            </li>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              Working toward a master’s in the U.S. while building a track record of real shipped projects.
            </li>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              First thesis in progress — currently stuck in the reading phase, trying to turn “too many papers” into a clear mechanism.
            </li>
          </ul>

          <h2>What I’m building</h2>
          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              A small pipeline of client work (sites that feel premium but stay simple).
            </li>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              A portfolio that behaves like a CV: quick scan first, details only on demand.
            </li>
          </ul>

          <h2>How I work</h2>
          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              Signal over story. One line should tell you why something matters.
            </li>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              Systems over polish. Reliability first, then iteration.
            </li>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              Minimal UI. Typography does the work.
            </li>
          </ul>

          <h2>What I’m optimizing for</h2>
          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              Becoming dangerous at building data-driven tools that ship (not just prototypes).
            </li>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              A strong U.S. master’s application backed by proof of work.
            </li>
          </ul>

          <h2>Links</h2>
          <p>
            <span className="emph">GitHub</span>{" "}
            <a className="nav-link" href="https://github.com/" target="_blank" rel="noreferrer">
              github.com
            </a>
          </p>
          <p>
            <span className="emph">LinkedIn</span>{" "}
            <a className="nav-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              linkedin.com
            </a>
          </p>

          <hr />

          <Link href="/" className="nav-link">
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
