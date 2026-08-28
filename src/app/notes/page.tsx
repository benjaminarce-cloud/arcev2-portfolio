// src/app/notes/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { NOTES } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Engineering logs: what shipped, what broke, and what changed because of it.",
};

export default function NotesPage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Notes</h1>

        <p className="lede">
          Working logs rather than essays. What shipped, what broke, and what
          changed because of it.
        </p>

        <div className="list" aria-label="Notes">
          {NOTES.map((n) => (
            <Link key={n.slug} href={`/notes/${n.slug}`} className="row">
              <div className="row-main">
                <h2 className="row-title" data-title={n.title}>
                  <span>{n.title}</span>
                </h2>
                <p className="row-desc">{n.desc ?? n.oneLine}</p>
              </div>
              <span className="row-meta">{n.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
