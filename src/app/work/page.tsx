// src/app/work/page.tsx
import Link from "next/link";

const workItems = [
  {
    title: "Inbox → Inventory Radar",
    desc: "Daily export → live LATAM traffic-light view of stock risk.",
    date: "2025-10",
    slug: "inbox-inventory-radar",
  },
  {
    title: "Chokepoint Frontier Model",
    desc: "Tri-objective sim/opt mapping cost vs resilience vs carbon at CoWoS/HBM bottleneck.",
    date: "2025-09",
    slug: "chokepoint-frontier-model",
  },
  {
    title: "Cost Flight Simulator",
    desc: "What-if manufacturing P&L engine for margin impact in seconds.",
    date: "2025-08",
    slug: "cost-flight-simulator",
  },
  {
    title: "Border Fleet Optimizer",
    desc: "CVRPTW cross-border day plan optimized for cost, not distance.",
    date: "2025-07",
    slug: "border-fleet-optimizer",
  },
];

export default function WorkPage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">
          Work <span className="accent">/</span>
        </h1>

        <p className="page-subtitle" style={{ maxWidth: 720 }}>
          Selected professional work <span className="accent">/</span> systems, modeling, automation.
        </p>

        {/* Accent row UNDER subtitle */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12, marginBottom: 18 }}>
          <span className="pill">ship-first</span>
          <span className="pill">clean interfaces</span>
          <span className="pill">data → decisions</span>
        </div>

        <div className="list" aria-label="Work list">
          {workItems.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="row">
              <div className="row-main">
                <h2 className="row-title">{item.title}</h2>
                <p className="row-desc">{item.desc}</p>
              </div>
              <div className="row-meta">{item.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
