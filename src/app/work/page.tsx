// src/app/work/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { WORK } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Systems, analysis, and automation for freight, finance, and supply chain operations.",
};

export default function WorkPage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Work</h1>

        <p className="lede">
          Systems, analysis, and automation — mostly for freight, finance, and
          supply chain teams. Each one has a page with what it is, what it cost
          to learn, and what I&rsquo;d do differently.
        </p>

        <div className="list" aria-label="Work">
          {WORK.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="row">
              <div className="row-main">
                <h2 className="row-title" data-title={item.title}>
                  <span>{item.title}</span>
                </h2>
                <p className="row-desc">{item.desc ?? item.subtitle}</p>
              </div>
              <span className="row-meta">{item.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
