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
    slug: "film-portfolio-build-quick-overview",
    title: "Film Portfolio Build — Quick Overview",
    desc: "Next.js 15 + Cloudinary video portfolio: what shipped, what broke, and the patterns that stuck.",
    date: "Jan 2026",
  },
  {
    slug: "site-honest-and-alive",
    title: "This site: turning a portfolio into something honest and alive",
    desc: "Next.js + Vercel, built as a log — not a brochure.",
    date: "Dec 27, 2025",
  },
  {
    slug: "latam-inventory-dashboard-stops-breaking",
    title: "LATAM Inventory Health Dashboard finally stops breaking",
    desc: "Power BI + automation: safety stock vs on-hand, green/yellow/red semantics.",
    date: "Dec 05, 2025",
  },
  {
    slug: "thesis-chokepoint-model",
    title: "Thesis: from ‘I want to do semiconductors’ to a real chokepoint model",
    desc: "CoWoS/HBM chokepoint → tri-objective model (cost, resilience, carbon).",
    date: "Nov 10, 2025",
  },
  {
    slug: "manufacturing-cost-intelligence-tool",
    title: "Manufacturing Cost Intelligence System becomes a real thinking tool",
    desc: "Slider-driven portfolio P&L thinking tool (honest about what’s V1).",
    date: "Jul 20, 2025",
  },
  {
    slug: "cross-border-fleet-optimizer-working",
    title: "Cross-Border Fleet Optimizer actually starts working",
    desc: "OR-Tools + OSRM: cost-first routing that starts behaving like a real tool.",
    date: "Jun 15, 2025",
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
          Engineering logs <span className="accent">/</span> decisions, lessons, fixes.
        </p>

        {/* Accent row UNDER subtitle */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12, marginBottom: 18 }}>
          <span className="pill">what shipped</span>
          <span className="pill">what broke</span>
          <span className="pill">what changed</span>
        </div>

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
