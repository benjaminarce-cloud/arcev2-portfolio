// src/app/notes/page.tsx
import Link from "next/link";

type NoteRow = {
  slug: string;
  title: string;
  desc: string;
  date: string;
};

const NOTES: NoteRow[] = [
  {
    slug: "site-honest-and-alive",
    title: "This site: turning a portfolio into something honest and alive",
    desc: "Fast scan, real signal, details only when needed.",
    date: "2025-12-27",
  },
  {
    slug: "latam-inventory-dashboard-stops-breaking",
    title: "LATAM Inventory Health Dashboard finally stops breaking",
    desc: "From screenshot-driven firefighting to one shared operational view.",
    date: "2025-12-05",
  },
  {
    slug: "thesis-chokepoint-model",
    title: "Thesis: from vague interest to a real chokepoint model",
    desc: "Picking the bottleneck first made the entire scope behave.",
    date: "2025-11-10",
  },
];

export default function NotesPage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">
          Notes <span className="accent">/</span>
        </h1>

        <p className="page-subtitle" style={{ maxWidth: 720 }}>
          Engineering notes <span className="accent">/</span> decisions, lessons, fixes.
        </p>

        <div className="list" aria-label="Notes list">
          {NOTES.map((n) => (
            <Link key={n.slug} href={`/notes/${n.slug}`} className="row">
              <div className="row-main">
                <h2 className="row-title">{n.title}</h2>
                <p className="row-desc">{n.desc}</p>
              </div>
              <div className="row-meta">{n.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
