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
    desc: "Tri-objective mapping: cost vs resilience vs carbon at a CoWoS/HBM bottleneck.",
    date: "2025-09",
    href: "/work/chokepoint-frontier-model",
  },
  {
    title: "Cost Flight Simulator",
    desc: "Manufacturing what-if engine: margin impact in seconds.",
    date: "2025-08",
    href: "/work/cost-flight-simulator",
  },
  {
    title: "Border Fleet Optimizer",
    desc: "CVRPTW day plan optimized for cost (not distance).",
    date: "2025-07",
    href: "/work/border-fleet-optimizer",
  },
];

const latestNote = {
  title: "This site: turning a portfolio into something honest and alive",
  desc: "Next.js + Vercel, built as a log — the important part is what broke and what changed.",
  date: "Dec 27, 2025",
  href: "/notes/site-honest-and-alive",
};

export default function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">
          Portfolio <span className="accent">/</span>
        </h1>

        <p className="page-subtitle" style={{ maxWidth: 720 }}>
          A quick scan of what I’ve shipped <span className="accent">/</span> details on click.
        </p>

        {/* Optional accent row under subtitle */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12, marginBottom: 18 }}>
          <span className="pill">work</span>
          <span className="pill">notes</span>
          <span className="pill">now</span>
        </div>

        <div style={{ marginTop: 10 }}>
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
