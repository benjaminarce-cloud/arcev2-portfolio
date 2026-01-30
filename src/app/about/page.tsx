// src/app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page">
      <div className="container-read">
        <h1 className="page-title">
          Now <span className="accent">/</span>
        </h1>

        <p className="page-subtitle" style={{ maxWidth: 720 }}>
          Decisions, lessons, and what I’m building <span className="accent">/</span> current focus.
        </p>

        <div className="prose">
          <hr />

          <h2>Current focus</h2>
          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              Building sites on the side (film portfolios + a product launch).
            </li>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              Building a U.S. master’s path backed by shipped work.
            </li>
            <li style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
              Thesis: stuck in reading right now — turning noise into a tight mechanism.
            </li>
          </ul>

          <h2>Get to know me</h2>
          <p style={{ color: "rgba(21, 21, 21, 0.82)" }}>
            (Drop your bullets here later.)
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
