// src/app/page.tsx
import Link from "next/link";

const workItems = [
  {
    title: "Inbox → Inventory Radar",
    desc: "Daily export → live LATAM traffic-light view of stock risk.",
    date: "2025-10",
    href: "/work/inbox-inventory-radar",
  },
  {
    title: "Chokepoint Frontier Model",
    desc: "Tri-objective sim/opt mapping cost vs resilience vs carbon at CoWoS/HBM bottleneck.",
    date: "2025-09",
    href: "/work/chokepoint-frontier-model",
  },
  {
    title: "Cost Flight Simulator",
    desc: "What-if manufacturing P&L engine for margin impact in seconds.",
    date: "2025-08",
    href: "/work/cost-flight-simulator",
  },
  {
    title: "Border Fleet Optimizer",
    desc: "CVRPTW cross-border day plan optimized for cost, not distance.",
    date: "2025-07",
    href: "/work/border-fleet-optimizer",
  },
];

// Set this to whatever is truly your most recent engineering note.
const latestNote = {
  title: "LATAM Inventory Health Dashboard finally stops breaking",
  desc: "Power BI dashboard comparing safety stock vs on-hand stock. The team now talks in reds/yellows instead of screenshots.",
  date: "2025-12-05",
  href: "/notes/latam-inventory-dashboard-stops-breaking",
};

export default function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">
          Scan-first portfolio <span className="accent">/</span>
        </h1>
        <p className="page-subtitle">
          Built like a CV: <span className="emph">quick read upfront</span>, full detail on click.
          The point is signal, not story.
        </p>

        <div style={{ marginTop: 34 }}>
          <div className="kicker">Work</div>
          <div className="list" aria-label="Work overview">
            {workItems.map((item) => (
              <Link key={item.href} href={item.href} className="row">
                <div className="row-main">
                  <h2 className="row-title">{item.title}</h2>
                  <p className="row-desc">{item.desc}</p>
                </div>
                <div className="row-meta">{item.date}</div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 44 }}>
          <div className="kicker">Latest note</div>
          <div className="list" aria-label="Latest note">
            <Link href={latestNote.href} className="row">
              <div className="row-main">
                <h2 className="row-title">{latestNote.title}</h2>
                <p className="row-desc">{latestNote.desc}</p>
              </div>
              <div className="row-meta">{latestNote.date}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
