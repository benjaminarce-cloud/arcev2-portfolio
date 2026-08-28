// src/app/work/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteList from "@/components/SiteList";
import { SITES } from "@/lib/sites";
import { WORK } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Systems, analysis, and automation for freight, finance, and supply chain operations, plus the client sites built on the side.",
};

export default function WorkPage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Work</h1>

        <p className="lede">
          Systems, analysis, and automation, mostly for freight, finance, and
          supply chain teams. Each one has a page with what it is, what it cost
          to learn, and what I&rsquo;d do differently.
        </p>

        <section style={{ marginTop: "var(--space-block)" }}>
          <h2 className="kicker">Engineering</h2>

          <div className="list" aria-label="Engineering work">
            {WORK.map((item) => (
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
          <h2 className="kicker">Sites</h2>

          <p className="page-subtitle">
            Side work, built for the fun of it and to keep the visual side of my
            brain awake. Two are live, two are still in build.
          </p>

          <SiteList sites={SITES} label="Client sites" />
        </section>
      </div>
    </div>
  );
}
