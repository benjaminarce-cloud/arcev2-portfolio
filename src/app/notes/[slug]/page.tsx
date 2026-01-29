// src/app/notes/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type Note = {
  slug: string;
  title: string;
  date: string;
  oneLine: string;
  tags?: string[];
  sections: { heading: string; body: string[] }[];
};

const NOTES: Note[] = [
  {
    slug: "risk-scoring-rebalance",
    title: "Risk scoring that doesn’t inflate everything to ‘High’",
    date: "2025-10",
    oneLine: "A constraint-based rebalance: keep severity honest, make likelihood discriminative.",
    tags: ["model-risk", "scoring", "decision-systems"],
    sections: [
      {
        heading: "The problem",
        body: [
          "When most models land in ‘High,’ the system stops being a prioritization tool and becomes noise.",
          "This usually happens because likelihood criteria are too easy to trigger or too correlated.",
        ],
      },
      {
        heading: "The fix",
        body: [
          "Put explicit constraints on the number of ‘High’ ratings allowed in likelihood dimensions.",
          "Separate severity vs likelihood so severity can stay strict while likelihood becomes discriminative.",
        ],
      },
      {
        heading: "Why this works",
        body: [
          "You preserve the seriousness of true ‘High’ cases while forcing tradeoffs and clarity.",
          "The output distribution becomes meaningful again without gaming the scoring.",
        ],
      },
    ],
  },
  {
    slug: "site-honest-and-alive",
    title: "This site: turning a portfolio into something honest and alive",
    date: "2025-12-27",
    oneLine: "A portfolio as a working log — fast scan, click for truth, no brochure energy.",
    tags: ["meta", "portfolio", "systems"],
    sections: [
      {
        heading: "What I wanted",
        body: [
          "A site that communicates like a CV: quick scan first, deeper detail only if you care.",
          "Design-wise: calm, warm, and readable — typography does the work, not UI chrome.",
        ],
      },
      {
        heading: "The rule",
        body: [
          "If it’s on the site, it’s there for a reason. No filler sections, no generic fluff.",
          "Every item needs one line that explains why it matters.",
        ],
      },
    ],
  },
  {
    slug: "latam-inventory-dashboard-stops-breaking",
    title: "LATAM Inventory Health Dashboard finally stops breaking",
    date: "2025-12-05",
    oneLine: "Stop debating spreadsheets. Agree on status and focus on action.",
    tags: ["powerbi", "automation", "supply-chain"],
    sections: [
      {
        heading: "What changed",
        body: [
          "A daily attachment became a consistent dataset with consistent definitions.",
          "The team shifted from screenshots and ad-hoc checks to a shared operational view.",
        ],
      },
      {
        heading: "What I learned",
        body: [
          "Reliability beats complexity. The first win is a stable pipeline and stable semantics.",
          "Once trust exists, you can add drilldowns, alerts, and optimization later.",
        ],
      },
    ],
  },
  {
    slug: "thesis-chokepoint-model",
    title: "Thesis: from 'I want to do semiconductors' to a real chokepoint model",
    date: "2025-11-10",
    oneLine: "Pick the bottleneck first. Then build the thesis around what the bottleneck implies.",
    tags: ["semiconductors", "research", "modeling"],
    sections: [
      {
        heading: "The pivot",
        body: [
          "The vague goal (‘do semiconductors’) became concrete once the chokepoint was chosen.",
          "From there, the research question stopped being a topic and became a mechanism.",
        ],
      },
      {
        heading: "What this unlocked",
        body: [
          "A clearer model scope, clearer evaluation, and stronger claims with fewer hand-wavy parts.",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return NOTES.map((n) => ({ slug: n.slug }));
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = NOTES.find((n) => n.slug === slug);
  if (!note) return notFound();

  return (
    <div className="page">
      <div className="container-read">
        <div className="kicker">{note.date}</div>
        <h1 className="page-title" style={{ marginTop: 10 }}>
          {note.title}
        </h1>
        <p className="page-subtitle">{note.oneLine}</p>

        {note.tags?.length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
            {note.tags.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="prose">
          <hr />
          {note.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          <hr />
          <Link href="/notes" className="nav-link">
            ← Back to Notes
          </Link>
        </div>
      </div>
    </div>
  );
}
