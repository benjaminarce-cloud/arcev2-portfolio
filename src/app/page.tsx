// src/app/page.tsx
import Link from "next/link";
import SiteList from "@/components/SiteList";
import { LIVE_SITES } from "@/lib/sites";
import { WORK } from "@/lib/work";
import { NOTES } from "@/lib/notes";

const selected = WORK.slice(0, 4);
const latestNote = NOTES[0];

export default function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <p className="kicker now">AI Engineer at TBM Carriers</p>

        <h1 className="home-title" style={{ marginTop: 18 }}>
          I build AI systems that <em>retire</em> manual reporting instead of
          accelerating it.
        </h1>

        <p className="lede">
          Production MCP servers, agent integrations, and automated reporting
          for freight and finance teams, across six-country LATAM operations.
          Based in Guadalajara.
        </p>

        <section style={{ marginTop: "var(--space-block)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <h2 className="kicker" style={{ margin: 0 }}>
              Selected work
            </h2>
            <Link href="/work" className="pill">
              All work
            </Link>
          </div>

          <div className="list" aria-label="Selected work">
            {selected.map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} className="row">
                <div className="row-main">
                  <h3 className="row-title" data-title={item.title}>
                    <span>{item.title}</span>
                  </h3>
                  <p className="row-desc">{item.desc ?? item.subtitle}</p>
                </div>
                <span className="row-meta">{item.date}</span>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ marginTop: "var(--space-block)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <h2 className="kicker" style={{ margin: 0 }}>
              Sites
            </h2>
            <Link href="/work" className="pill">
              And two in build
            </Link>
          </div>

          <SiteList sites={LIVE_SITES} label="Live client sites" />
        </section>

        <section style={{ marginTop: "var(--space-block)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <h2 className="kicker" style={{ margin: 0 }}>
              Latest note
            </h2>
            <Link href="/notes" className="pill">
              All notes
            </Link>
          </div>

          <div className="list" aria-label="Latest note">
            <Link href={`/notes/${latestNote.slug}`} className="row">
              <div className="row-main">
                <h3 className="row-title" data-title={latestNote.title}>
                  <span>{latestNote.title}</span>
                </h3>
                <p className="row-desc">
                  {latestNote.desc ?? latestNote.oneLine}
                </p>
              </div>
              <span className="row-meta">{latestNote.date}</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
