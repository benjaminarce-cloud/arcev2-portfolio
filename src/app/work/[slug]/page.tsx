// src/app/work/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

/**
 * Source of truth for Work detail pages.
 * Keep this file self-contained (no lib imports).
 * Add/edit bodies freely.
 */
const WORK = [
  {
    slug: "inbox-inventory-radar",
    title: "Inbox → Inventory Radar",
    desc: "Daily export → live LATAM traffic-light view of stock risk.",
    date: "2025-10",
    body: [
      "This started as a simple problem: every morning an Incorta export landed in someone’s inbox, and decision-making depended on who had time to open it and scroll.",
      "So I built a small pipeline that saves the attachment into SharePoint automatically and feeds a Power BI model that classifies each material–country pair into green / yellow / red.",
      "The main win wasn’t the charting. It was the shared language. People stopped debating raw numbers and started asking: “How many reds do we have, and why?”",
      "What made it harder than expected: inconsistent material codes across reports. Some joins failed silently, so I had to reconcile formats and build mapping logic that doesn’t quietly lie.",
      "Where it goes next: validation that fails loudly when the upstream schema changes, plus basic alerting when new reds appear in key lanes.",
    ],
  },
  {
    slug: "chokepoint-frontier-model",
    title: "Chokepoint Frontier Model",
    desc: "Tri-objective mapping: cost vs resilience vs carbon at a CoWoS/HBM bottleneck.",
    date: "2025-09",
    body: [
      "This is my long-game thesis direction: model one narrow chokepoint (CoWoS/HBM advanced packaging) and quantify the trade-offs instead of writing another generic “resilience framework.”",
      "The core question: if you assume no magical cross-firm coordination, what levers can a single enterprise pull to buy resilience without exploding cost and carbon?",
      "The model is structured as a design layer that generates candidate network configurations, then a simulation layer that stress-tests them under disruption scenarios.",
      "What I’m trying to be strict about: the modeling choices should be honest before they’re elegant. I’d rather ship a smaller model that’s believable than a bigger one that’s convenient.",
      "This page is a log. If it reads unfinished, that’s accurate.",
    ],
  },
  {
    slug: "cost-flight-simulator",
    title: "Cost Flight Simulator",
    desc: "Manufacturing what-if engine: margin impact in seconds.",
    date: "2025-08",
    body: [
      "The goal is a “flight simulator” for manufacturing decisions: move one driver (materials, labor, logistics) and see portfolio-level margin impact immediately.",
      "The key upgrade was separating the brain from the UI. Once the calculation engine lived outside the dashboard layer, everything got easier to test and extend.",
      "The uncomfortable part: it quickly exposes products that look healthy on volume but are actually one shock away from becoming margin traps.",
      "This is not an ERP replacement. It’s a thinking tool that makes trade-offs visible fast enough to have a real conversation.",
      "Next steps: multi-driver scenarios, uncertainty via Monte Carlo, and cleaner data interfaces (FX, fuel, freight indices).",
    ],
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    desc: "CVRPTW day plan optimized for cost (not distance).",
    date: "2025-07",
    body: [
      "This turns a whiteboard-style dispatch problem into a Python planner for a tiny cross-border fleet: five trucks, multiple cities, demand, and basic time windows.",
      "The first version worked but felt fake until I replaced straight-line distances with realistic travel times via routing data.",
      "The moment it clicked: the optimizer sometimes chose a longer route in kilometers but lower total cost once driver time was priced correctly.",
      "What’s still janky: a simplified cost model and constraints that can fail hard when a real dispatcher would accept “least bad.”",
      "What I’d add next: richer cost structure (tolls, overtime), soft penalties for time windows, and a simple UI for scenario uploads.",
    ],
  },
] as const;

function renderBody(body: readonly string[] | undefined) {
  if (!body?.length) return null;
  return body.map((p, i) => <p key={i}>{p}</p>);
}

export default async function WorkDetailPage({ params }: { params: Params }) {
  const { slug } = await params;

  const item = WORK.find((x) => x.slug === slug);
  if (!item) return notFound();

  return (
    <div className="page">
      <div className="container-read">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
          <div className="kicker">Work</div>
          <Link className="nav-link" href="/work">
            Back
          </Link>
        </div>

        <h1 className="page-title" style={{ marginTop: 12 }}>
          {item.title}
        </h1>

        {item.desc ? <p className="page-subtitle">{item.desc}</p> : null}

        <div className="prose">{renderBody(item.body)}</div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return WORK.map((x) => ({ slug: x.slug }));
}
