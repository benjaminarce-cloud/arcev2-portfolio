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
      "Built a Power BI dashboard for a LATAM supply chain team comparing safety stock vs on-hand stock, classifying each material–country pair as green / yellow / red.",
    quickScan: {
      context:
        "Daily/weekly exports were being handled manually. Definitions drifted across countries. Small schema differences made joins fail silently.",
      breakage:
        "DAX measures turned into spaghetti; Incorta variants used different material-code formats; Power Automate flows were fragile and failed quietly.",
      takeaway:
        "Reliability beats cleverness: normalize inputs, reconcile identifiers, and make the operational language (reds/yellows/greens) stable.",
    },
    sections: [
      {
        heading: "What actually happened",
        body: [
          "I rebuilt the Power BI model multiple times after the DAX logic turned into spaghetti.",
          "At one point, every new measure felt like a patch on top of another patch.",
        ],
      },
      {
        heading: "The material-code problem",
        body: [
          "Different Incorta reports used slightly different material codes, so the joins silently failed and comparisons made no sense.",
          "I had to design a ‘family’ mapping to reconcile formats like ***-***-*** vs ***-**.",
          "The planning was not glamorous: manual checking, pattern spotting, and making sure one bad slash didn’t break the lookup.",
        ],
      },
      {
        heading: "Automation wasn’t magic",
        body: [
          "Power Automate turned out to be surprisingly fragile.",
          "Small changes in conditions or dynamic content broke the flow that takes the daily Incorta email and pushes files into SharePoint.",
          "Debugging was basically: edit, wait for the next run, hope it doesn’t silently die.",
        ],
      },
      {
        heading: "The payoff",
        body: [
          "The team now talks in terms of “reds” and “yellows” instead of screenshotting spreadsheets.",
          "That alone made the pain worth it.",
        ],
      },
    ],
    related: { label: "LATAM Inventory Health Dashboard", href: "/work/inbox-inventory-radar" },
  },

  {
    slug: "thesis-chokepoint-model",
    title: "Thesis: from ‘I want to do semiconductors’ to a real chokepoint model",
    date: "Nov 10, 2025",
    tags: ["thesis", "semiconductors", "research"],
    oneLine:
      "Locked in the CoWoS/HBM chokepoint and started turning frustration with the literature into a concrete tri-objective model.",
    quickScan: {
      context:
        "I got stuck in topic fog: semis + resilience + climate felt either too generic or too impossible as a student.",
      breakage:
        "I kept reading papers that end with ‘firms should collaborate more’ as the conclusion — which felt unrealistic for semiconductors and honestly lazy.",
      takeaway:
        "Bake the disagreement into the thesis: assume no magical data sharing; focus on levers a single firm can control at the chokepoint.",
    },
    sections: [
      {
        heading: "Topic fog (the real enemy)",
        body: [
          "I knew what I cared about, but everything sounded either too broad or too hand-wavy.",
          "Reading kept expanding the problem instead of narrowing it.",
        ],
      },
      {
        heading: "The literature conclusion I didn’t buy",
        body: [
          "I kept running into some version of: ‘firms should share more data and collaborate across the chain.’",
          "Nice idea. Also not how semiconductors behaves in the real world.",
        ],
      },
      {
        heading: "Turning point",
        body: [
          "I decided to bake that disagreement into the thesis: assume no magical cross-firm data sharing.",
          "Focus on what a single enterprise can control at the CoWoS/HBM stage to buy resilience without blowing up cost and carbon.",
        ],
      },
      {
        heading: "Where it is right now",
        body: [
          "The math itself is fine; the hard part is choosing modeling assumptions that are honest instead of convenient.",
          "I’m formalizing sets, decision variables, tri-objective (cost, resilience, carbon), plus a simulation layer for disruption scenarios.",
        ],
      },
    ],
    related: { label: "CoWoS/HBM Chokepoint Thesis", href: "/work/chokepoint-frontier-model" },
  },

  {
    slug: "manufacturing-cost-intelligence-tool",
    title: "Manufacturing Cost Intelligence System becomes a real thinking tool",
    date: "Jul 20, 2025",
    tags: ["manufacturing", "analytics", "streamlit"],
    oneLine:
      "Took the ‘flight simulator’ idea far enough that one slider move actually feels like portfolio-level impact.",
    quickScan: {
      context:
        "I wanted a decision tool, not spreadsheet babysitting: change drivers, see margin impact, then discuss strategy like adults.",
      breakage:
        "UI logic got messy fast; early ‘AI strategist’ versions just narrated charts; static CSVs tempted me to pretend it was production-ready.",
      takeaway:
        "Separate brain from UI, feed feasibility explicitly, and be honest about what is a thinking tool vs an ERP replacement.",
    },
    sections: [
      {
        heading: "What changed the quality level",
        body: [
          "I built the first P&L simulator tying BOM data, cost drivers, and a simple demand model.",
          "Streamlit made iteration fast, but it was tempting to add sliders with no structure.",
        ],
      },
      {
        heading: "Refactor that hurt (and fixed it)",
        body: [
          "I hit a wall mixing logic into the UI.",
          "Refactored so /app/core holds the real brain and Streamlit is just the face.",
          "It hurt for a day and then everything became cleaner.",
        ],
      },
      {
        heading: "Making the AI not cringe",
        body: [
          "Early versions just rephrased charts (“costs increased because inputs increased”).",
          "I had to feed feasibility scores and explicitly tell it what not to say to get something that sounded like a junior consultant instead of a narrator.",
        ],
      },
      {
        heading: "The honest limitation",
        body: [
          "Static CSVs are great for controlled experiments, bad if you pretend it’s production-ready.",
          "I accepted this version as a thinking tool, not an ERP replacement.",
        ],
      },
    ],
    related: { label: "Manufacturing Cost Intelligence System", href: "/work/cost-flight-simulator" },
  },

  {
    slug: "cross-border-fleet-optimizer-working",
    title: "Cross-Border Fleet Optimizer actually starts working",
    date: "Jun 15, 2025",
    tags: ["logistics", "python", "optimization"],
    oneLine:
      "First real systems project: turned a whiteboard dispatch problem into a Python tool that plans better routes than I would by hand.",
    quickScan: {
      context:
        "Routing is one of those problems humans are bad at: constraints, tradeoffs, and too many combinations for intuition.",
      breakage:
        "OR-Tools wiring errors created ‘solved’ routes that made no real-world sense; OSRM setup was Docker + ports + coords pain.",
      takeaway:
        "Real road times change everything; cost-based objectives expose non-obvious wins; output maps tell the story faster than tables.",
    },
    sections: [
      {
        heading: "The first version felt fake",
        body: [
          "The optimizer ran with straight-line distances, basic capacity, and time windows.",
          "It technically worked, but it didn’t feel like real logistics.",
        ],
      },
      {
        heading: "The OR-Tools headache",
        body: [
          "I kept wiring callbacks wrong and ended up with routes that ‘solved’ but made no operational sense.",
          "The early phase was debugging logic more than doing optimization.",
        ],
      },
      {
        heading: "When it became real",
        body: [
          "I hooked up a local OSRM container so Texas routes use real road travel times.",
          "Docker pulls, port issues, and coordinate mismatches were part of the journey.",
          "The first time it chose a longer route in kilometers but cheaper total cost (driver time + fuel) was the moment it stopped feeling like a school assignment.",
        ],
      },
    ],
    related: { label: "Cross-Border Fleet Optimizer", href: "/work/border-fleet-optimizer" },
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
