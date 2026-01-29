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
        <p className="page-subtitle">
          Scan-first briefs. <span className="emph">One line tells you why it matters</span>.
          Click for full detail.
        </p>

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
