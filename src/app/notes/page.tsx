// src/app/notes/page.tsx
import Link from "next/link";

type NoteRow = {
  slug: string;
  title: string;
  desc: string;
  date: string; // YYYY-MM-DD or YYYY-MM
};

const NOTES: NoteRow[] = [
  {
    slug: "site-honest-and-alive",
    title: "This site: turning a portfolio into something honest and alive",
    desc: "Built on Next.js + Vercel as a changelog of real work, not a glossy brochure.",
    date: "2025-12-27",
  },
  {
    slug: "latam-inventory-dashboard-stops-breaking",
    title: "LATAM Inventory Health Dashboard finally stops breaking",
    desc: "Power BI dashboard that replaced screenshot-driven firefighting with shared status language.",
    date: "2025-12-05",
  },
  {
    slug: "thesis-chokepoint-model",
    title: "Thesis: from 'I want to do semiconductors' to a real chokepoint model",
    desc: "Locked the CoWoS/HBM chokepoint as the core and turned disagreement with the literature into a thesis.",
    date: "2025-11-10",
  },
  {
    slug: "risk-scoring-rebalance",
    title: "Risk scoring that doesn’t inflate everything to ‘High’",
    desc: "A simple constraint-based rebalance: keep severity honest, make likelihood discriminative.",
    date: "2025-10",
  },
];

export default function NotesPage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">
          Notes <span className="accent">/</span>
        </h1>
        <p className="page-subtitle">
          Not a polished blog. More like an engineering log: decisions, lessons, and what I’m building.
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
