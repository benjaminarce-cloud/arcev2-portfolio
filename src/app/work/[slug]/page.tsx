// src/app/work/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type Section = {
  heading: string;
  body: string[];
};

type WorkDetail = {
  slug: string;
  title: string;
  date: string; // YYYY-MM
  oneLine: string;
  highlights: string[];
  stack?: string[];
  sections: Section[];
};

const WORK: WorkDetail[] = [
  {
    slug: "inbox-inventory-radar",
    title: "Inbox → Inventory Radar",
    date: "2025-10",
    oneLine: "Daily export → live LATAM traffic-light view of stock risk.",
    highlights: [
      "Turns a daily email attachment into a single, reliable view of stock risk.",
      "Gives planners a shared language: reds/yellows/greens instead of screenshots.",
      "Cuts time-to-answer for “where are we exposed?” from minutes to seconds.",
    ],
    stack: ["Power BI", "SharePoint", "Power Automate", "Excel"],
    sections: [
      {
        heading: "What this is",
        body: [
          "Every day the team receives a report with on-hand stock, safety stock, and metadata by material and country.",
          "Instead of manually opening files and filtering in a dozen different ways, the system normalizes the export into a consistent dataset and publishes a traffic-light view: green (healthy), yellow (close), red (below safety).",
        ],
      },
      {
        heading: "Why it needed to exist",
        body: [
          "The previous workflow was reactive: open the file, scroll until something looks scary, then follow up.",
          "There was no consistent definition of “healthy” vs “risky,” and no portfolio-level view across LATAM.",
          "This creates one place to see what matters, fast, using a shared definition.",
        ],
      },
      {
        heading: "What worked",
        body: [
          "Traffic-light logic made conversations simpler: the team could ask concrete questions instead of debating raw numbers.",
          "The key win was reliability: same columns, same definitions, same view every time the report arrives.",
        ],
      },
      {
        heading: "What I’d improve next",
        body: [
          "Add simple drill paths: click a country → see top contributors → see material history.",
          "Add data quality checks (missing materials, stale dates) so the dashboard never silently lies.",
        ],
      },
    ],
  },
  {
    slug: "chokepoint-frontier-model",
    title: "Chokepoint Frontier Model",
    date: "2025-09",
    oneLine: "Tri-objective sim/opt mapping cost vs resilience vs carbon at CoWoS/HBM bottleneck.",
    highlights: [
      "Frames capacity constraints as an explicit trade space (not a single ‘optimal’ answer).",
      "Makes risk visible: how fragile is the system when demand shifts?",
      "Outputs a frontier you can actually discuss with stakeholders.",
    ],
    stack: ["Python", "Optimization", "Simulation"],
    sections: [
      {
        heading: "What this is",
        body: [
          "A model that explores tradeoffs across cost, resilience, and carbon when the system is constrained by a chokepoint (e.g., advanced packaging).",
          "Instead of chasing one number, it produces a frontier of plausible policies so decisions are transparent.",
        ],
      },
      {
        heading: "What it’s for",
        body: [
          "Stakeholders rarely agree on weights upfront. The frontier lets them see consequences first, then choose.",
          "It turns “this feels risky” into measurable sensitivity under scenarios.",
        ],
      },
      {
        heading: "Next iteration",
        body: [
          "Add realistic capacity ramp dynamics (lead times, learning curves).",
          "Calibrate scenario distributions using actual demand + macro indicators.",
        ],
      },
    ],
  },
  {
    slug: "cost-flight-simulator",
    title: "Cost Flight Simulator",
    date: "2025-08",
    oneLine: "What-if manufacturing P&L engine for margin impact in seconds.",
    highlights: [
      "Instant what-ifs: materials, labor, energy, scrap, uptime.",
      "Makes margin sensitivity obvious (what actually moves the needle).",
      "Designed for fast iteration, not static spreadsheets.",
    ],
    stack: ["Python", "Excel", "Power BI (optional)"],
    sections: [
      {
        heading: "What this is",
        body: [
          "A lightweight cost and margin simulator that lets you change assumptions and immediately see the impact.",
          "The focus is speed-to-insight: quickly test scenarios and compare outcomes side by side.",
        ],
      },
      {
        heading: "How it’s structured",
        body: [
          "Inputs are modular cost drivers (materials, labor, energy, etc.).",
          "Outputs are margin deltas and sensitivity signals you can explain without hand-waving.",
        ],
      },
      {
        heading: "Next iteration",
        body: [
          "Add uncertainty ranges (Monte Carlo) for key drivers so results include confidence, not false precision.",
        ],
      },
    ],
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    date: "2025-07",
    oneLine: "CVRPTW cross-border day plan optimized for cost, not distance.",
    highlights: [
      "Optimizes routes under realistic constraints (time windows, service time, capacity).",
      "Cost-first objective: reflects business reality better than shortest path.",
      "Designed to be explainable: why this route, why this stop order.",
    ],
    stack: ["Python", "OR-Tools (or similar)", "Data cleaning"],
    sections: [
      {
        heading: "What this is",
        body: [
          "A daily planning optimizer for cross-border fleet routes under time windows.",
          "The objective prioritizes cost drivers (not just distance) to match how the operation is evaluated.",
        ],
      },
      {
        heading: "What mattered",
        body: [
          "Constraints are the real product: time windows, service time, vehicle limits.",
          "Explainability beats perfect optimality when humans need to trust the output.",
        ],
      },
      {
        heading: "Next iteration",
        body: [
          "Add robust planning for border delays (scenario-based buffers).",
          "Add a simple UI for dispatchers (review → approve → export).",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = WORK.find((w) => w.slug === slug);

  if (!item) return notFound();

  return (
    <div className="page">
      <div className="container-read">
        <div className="kicker">{item.date}</div>
        <h1 className="page-title" style={{ marginTop: 10 }}>
          {item.title}
        </h1>
        <p className="page-subtitle">{item.oneLine}</p>

        <div className="prose">
          <hr />

          <h2>Highlights</h2>
          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            {item.highlights.map((h) => (
              <li key={h} style={{ marginBottom: 8, color: "rgba(21, 21, 21, 0.82)" }}>
                {h}
              </li>
            ))}
          </ul>

          {item.stack?.length ? (
            <>
              <h2>Stack</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
                {item.stack.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </>
          ) : null}

          {item.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}

          <hr />
          <Link href="/work" className="nav-link">
            ← Back to Work
          </Link>
        </div>
      </div>
    </div>
  );
}
