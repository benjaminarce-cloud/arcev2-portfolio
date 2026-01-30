// src/app/notes/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type Note = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  oneLine: string;
  quickScan: {
    context: string;
    breakage: string;
    takeaway: string;
  };
  sections: { heading: string; body: string[] }[];
  related?: { label: string; href: string };
};

const NOTES: Note[] = [
  {
    slug: "film-portfolio-build-quick-overview",
    title: "Film Portfolio Build — Quick Overview",
    date: "Jan 2026",
    tags: ["nextjs", "video", "cloudinary", "ffmpeg", "debugging"],
    oneLine:
      "Built a 31-project film portfolio on Next.js 15 with hover previews, autoplay flows, Cloudinary hosting, and a minimal A24-ish aesthetic — plus a bunch of real-world breakage fixes.",
    quickScan: {
      context:
        "Client needed a fast, modern film portfolio: full-screen hero, responsive grid, video-first UX, and clean navigation that still feels premium.",
      breakage:
        "Hero gaps, mobile header sizing, Next.js 15 params in client components, mobile fullscreen restrictions, Cloudinary ID chaos, bad poster frames, header overlap, and the classic ‘hide in UI vs delete from data’ trap.",
      takeaway:
        "Build incrementally, test on real devices, expect platform constraints, use tooling when third parties are messy, and prioritize UX and robustness over clever code.",
    },
    sections: [
      {
        heading: "What we built",
        body: [
          "A Next.js 15 film portfolio with 31 video projects.",
          "Full-screen video hero + parallax-ish work sections.",
          "Hover-preview video cards in a responsive grid.",
          "Autoplay behavior on click, with platform-safe fallbacks.",
          "Cloudinary video hosting with dynamic poster extraction.",
          "Light/dark theme + scroll-responsive header.",
          "Minimalist aesthetic influenced by A24 (typography + whitespace doing the work).",
        ],
      },
      {
        heading: "What broke and how we fixed it",
        body: [
          "1) Work section ‘leaked’ into the hero: `min-h` left a gap where the next section peeked through. Fix: use `h-screen` for true 100vh coverage.",
          "2) Mobile header got cut off: desktop padding was too big. Fix: responsive padding/text, hide non-critical header content on mobile, reduce gaps.",
          "3) Next.js 15 client component params caused 404s: `params` is a Promise. Fix: server can `await`, client must `use(params)`.",
          "4) Mobile auto-fullscreen failed: iOS blocks fullscreen requests without direct user gesture. Fix: device detection + desktop-only fullscreen, always allow play.",
          "5) Cloudinary asset naming chaos: random suffixes meant filenames weren’t predictable. Fix: pull asset list via Cloudinary API and map manually (reliable, tedious).",
          "6) Bad poster frames: first frame often black/blurry. Fix: use Cloudinary frame extraction (`so_X`) to pick better frames without re-uploading.",
          "7) Header overlapped detail page content: fixed header + top-starting content caused collisions. Fix: simplify the detail page UI and avoid duplicating header navigation.",
          "8) Year removed from UI but still needed: almost deleted it from the data model. Fix: hide in UI, keep in data for future filtering/sorting.",
        ],
      },
      {
        heading: "New challenges and patterns that worked",
        body: [
          "Compression pipeline: raw videos were too big. Built an FFmpeg flow for preview loops and compressed 1080p full versions (big size cuts with no visible quality loss).",
          "Priority ordering: client wanted featured projects first. Chose manual array order (curation beats sorting logic for small datasets).",
          "Autoplay URL flag: used `?autoplay=true` to differentiate click-through vs direct navigation (better UX and shareable URLs).",
          "Header state machine: combined Intersection Observer (hero in view) + scroll direction tracking (hide on scroll down).",
          "Hover preview without fighting autoplay policies: muted autoplay runs; CSS opacity reveals on hover (smoother than JS play/pause spam).",
          "Fluid type: used `clamp()` for typography that scales smoothly instead of breakpoint jumps.",
          "Theme switching without re-renders: CSS variables + `data-theme` attribute for instant updates.",
        ],
      },
      {
        heading: "Summary",
        body: [
          "Built: 31-project video portfolio with autoplay flows, hover previews, responsive layout, theme switching.",
          "Broke: hero gaps, mobile header sizing, Next.js 15 params, fullscreen policies, asset management, posters, header overlap, UI vs data confusion.",
          "Fixed: all of it with better patterns: full viewport sections, responsive sizing, `use()` for params in client components, device-safe fallbacks, tooling, transformations, minimal UI, data preservation.",
          "Key lesson: test on real devices, have fallbacks for everything, and keep the design simple so the work stays loud.",
        ],
      },
    ],
    related: { label: "Work (site-building)", href: "/about" },
  },

  {
    slug: "site-honest-and-alive",
    title: "This site: turning a portfolio into something honest and alive",
    date: "Dec 27, 2025",
    tags: ["meta", "portfolio", "vercel"],
    oneLine:
      "Built on Next.js + Vercel — not as a brochure, but as a place to be honest about what I built, what broke, and what I learned.",
    quickScan: {
      context:
        "I wanted a portfolio that behaves like a CV: fast scan first, detail only when you care. The site is the log.",
      breakage:
        "Recurring confusion: stale Vercel deployments + MDX quirks causing silent rollbacks and “why isn’t it updating?” moments.",
      takeaway:
        "Treat deployments like systems: verify URLs, watch build logs, keep content clean, and write in a ‘projects as conversations’ tone.",
    },
    sections: [
      {
        heading: "Why I built it this way",
        body: [
          "Most portfolios waste time: big visuals, vague claims, and a lot of copy before you learn what someone actually shipped.",
          "This site is strict on purpose: one line should tell you why something matters; the rest is proof for people who want it.",
          "The goal isn’t to pitch. It’s to leave a trail of real work — what worked, what was ugly, and what changed.",
        ],
      },
      {
        heading: "What broke (and why it confused me)",
        body: [
          "Big recurring confusion: Vercel vs GitHub vs my brain.",
          "More than once I was clicking “Visit” on an old deployment and assuming the code hadn’t updated, when I was just on a stale URL.",
          "I also ran into “not reflecting” moments that were MDX issues: a couple of characters and math-y formatting broke the content build, so Vercel rolled back.",
          "The lesson: keep MDX clean and watch build logs instead of assuming deploys are magic.",
        ],
      },
      {
        heading: "Tone shift that mattered",
        body: [
          "I had to get comfortable with ‘projects as conversations.’",
          "These pages are not pitch decks. They’re me talking through what I tried, what worked, what was ugly — then a technical appendix for people who care about the plumbing.",
        ],
      },
      {
        heading: "Why the log exists",
        body: [
          "I didn’t want a dead portfolio.",
          "This is the running timeline of how the fleet optimizer, the manufacturing system, the thesis, the dashboard, and the site itself evolved.",
        ],
      },
    ],
    related: { label: "This Portfolio", href: "/" },
  },

  {
    slug: "latam-inventory-dashboard-stops-breaking",
    title: "LATAM Inventory Health Dashboard finally stops breaking",
    date: "Dec 05, 2025",
    tags: ["powerbi", "supply-chain", "automation"],
    oneLine:
      "Built a Power BI dashboard for the LATAM supply chain team that compares safety stock vs on-hand stock and classifies each material–country pair as green / yellow / red.",
    quickScan: {
      context:
        "Daily/weekly files were being handled manually. Definitions drifted across countries. The dashboard broke the moment a column changed.",
      breakage:
        "DAX logic turned into spaghetti; Incorta reports used different material-code formats; joins failed silently; automation was fragile.",
      takeaway:
        "A stable pipeline beats a fancy dashboard. Normalize, validate, and make the operational language stable first.",
    },
    sections: [
      {
        heading: "What was happening",
        body: [
          "The workflow failed in small ways: inconsistent columns, missing tabs, mixed currencies, and country-level “creative formatting.”",
          "The dashboard wasn’t wrong because visuals were wrong — it was wrong because inputs were unstable.",
        ],
      },
      {
        heading: "The real problem",
        body: [
          "The dashboard was acting like a data pipeline, but it had no pipeline discipline.",
          "No contracts. No validation. No stable definition of what a row means across countries.",
        ],
      },
      {
        heading: "What I changed",
        body: [
          "Standardized intake and semantics so green/yellow/red means the same thing every time.",
          "Made the model more robust to upstream drift instead of letting Power BI guess.",
        ],
      },
      {
        heading: "What I’d do next",
        body: [
          "Add basic data quality flags and ingestion history.",
          "Add weekly roll-ups: what flipped status and what stays chronically red.",
        ],
      },
    ],
  },

  {
    slug: "thesis-chokepoint-model",
    title: "Thesis: from ‘I want to do semiconductors’ to a real chokepoint model",
    date: "Nov 10, 2025",
    tags: ["thesis", "semiconductors", "research"],
    oneLine: "Pick the bottleneck first. Then force everything to orbit it.",
    quickScan: {
      context:
        "Reading spirals when the topic is too wide. Every paper feels relevant and none of them produce a concrete next step.",
      breakage:
        "Papers ended with “collaborate more,” which felt unrealistic in semiconductors. I needed a mechanism, not vibes.",
      takeaway:
        "Choose the chokepoint and treat it as the mechanism. Scope becomes a filter, not a constraint.",
    },
    sections: [
      {
        heading: "Why reading feels like quicksand",
        body: [
          "When you don’t have a mechanism, reading becomes collecting: you keep adding papers because you’re not sure what you’re trying to explain.",
          "You end up with a bibliography, not a model.",
        ],
      },
      {
        heading: "The filter that helped",
        body: [
          "Force the chokepoint: if a paper doesn’t change the mechanism, assumptions, or evaluation, it’s not needed right now.",
        ],
      },
      {
        heading: "Next step (practical)",
        body: [
          "Write a one-page model sketch: variables, constraints, and the minimum output that would make the thesis real.",
          "Then read again only to fill specific holes.",
        ],
      },
    ],
  },

  {
    slug: "manufacturing-cost-intelligence-tool",
    title: "Manufacturing Cost Intelligence System becomes a real thinking tool",
    date: "Jul 20, 2025",
    tags: ["manufacturing", "analytics", "streamlit"],
    oneLine:
      "Took the idea of ‘flight simulator for manufacturing decisions’ and pushed it far enough that you can actually feel portfolio-level impact in a slider move.",
    quickScan: {
      context:
        "I wanted a decision tool that replaces fragile spreadsheets with fast, portfolio-level visibility.",
      breakage:
        "Too much logic in the UI; early AI was just narrating charts; static CSVs tempted me to pretend it was production-ready.",
      takeaway:
        "Separate brain from UI, feed feasibility explicitly, and be honest about what is V1 vs production.",
    },
    sections: [
      {
        heading: "What changed the quality level",
        body: [
          "Built a first version tying BOM, cost drivers, and demand into a portfolio simulator.",
          "Refactored to keep core logic separate from Streamlit UI.",
        ],
      },
      {
        heading: "Making the AI not cringe",
        body: [
          "Had to feed feasibility and tell it what not to say so it behaved like a junior consultant, not a narrator.",
        ],
      },
      {
        heading: "The honest limitation",
        body: [
          "Static CSVs are great for controlled experiments. Not production-ready without live integrations.",
        ],
      },
    ],
  },

  {
    slug: "cross-border-fleet-optimizer-working",
    title: "Cross-Border Fleet Optimizer actually starts working",
    date: "Jun 15, 2025",
    tags: ["logistics", "python", "optimization"],
    oneLine:
      "First real systems project: turning a dispatch whiteboard problem into a Python tool that plans better routes than I would by hand.",
    quickScan: {
      context:
        "Routing is combinatorial; humans are forced to approximate under stress. I wanted cost-aware plans.",
      breakage:
        "OR-Tools wiring mistakes + fake straight-line distances made routes technically valid but operationally wrong.",
      takeaway:
        "Real road times (OSRM) + cost-based objective is what makes it believable.",
    },
    sections: [
      {
        heading: "When it became real",
        body: [
          "Hooked up OSRM for real travel times; first time it chose longer km but cheaper total cost was the turning point.",
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
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <Link href="/notes" className="pill">
            ← Notes
          </Link>
          <div className="kicker">{note.date}</div>
        </div>

        <h1 className="page-title" style={{ marginBottom: 12 }}>
          {note.title}
        </h1>

        <p className="page-subtitle" style={{ marginBottom: 14 }}>
          {note.oneLine}
        </p>

        {/* Accent row UNDER subtitle */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
          {note.tags.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
          {note.related ? (
            <Link href={note.related.href} className="pill">
              Related: {note.related.label} ↗
            </Link>
          ) : null}
        </div>

        {/* Quick Scan */}
        <div
          style={{
            borderTop: "1px solid var(--hair)",
            borderBottom: "1px solid var(--hair)",
            padding: "18px 0",
            margin: "18px 0 26px",
          }}
          aria-label="Quick scan"
        >
          <div className="kicker" style={{ marginBottom: 12 }}>
            Quick scan
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <div>
              <span className="emph">Context</span>{" "}
              <span style={{ color: "rgba(21,21,21,0.82)" }}>{note.quickScan.context}</span>
            </div>
            <div>
              <span className="emph">Breakage</span>{" "}
              <span style={{ color: "rgba(21,21,21,0.82)" }}>{note.quickScan.breakage}</span>
            </div>
            <div>
              <span className="emph">Takeaway</span>{" "}
              <span style={{ color: "rgba(21,21,21,0.82)" }}>{note.quickScan.takeaway}</span>
            </div>
          </div>
        </div>

        <div className="prose">
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
