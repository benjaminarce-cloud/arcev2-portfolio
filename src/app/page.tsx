// src/app/page.tsx
import Link from "next/link";

type WorkItem = {
  title: string;
  desc: string;
  date: string;
  href: string;
  live?: { label: string; url: string };
};

const workItems: WorkItem[] = [
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
  {
    title: "Film Portfolio Platform",
    desc: "Next.js 15 + Cloudinary video pipeline: hover previews, autoplay rules, mobile-safe behavior.",
    date: "2026-01",
    href: "/work/film-portfolio-platform",
    live: { label: "mandoaguilar.com", url: "https://mandoaguilar.com" },
  },
];

const latestNote = {
  title: "Film Portfolio Build — Quick Overview",
  desc: "Next.js 15 + Cloudinary: what shipped, what broke, and patterns that stuck.",
  date: "Jan 2026",
  href: "/notes/film-portfolio-build-quick-overview",
};

export default function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">
          Portfolio <span className="accent">/</span>
        </h1>

        <p className="page-subtitle" style={{ maxWidth: 720 }}>
          Shipped work. Working notes. Nothing polished on purpose.
        </p>

        <div style={{ marginTop: 10 }}>
          <div className="kicker">Work</div>
          <div className="list" aria-label="Work overview">
            {workItems.map((item) => (
              <Link key={item.href} href={item.href} className="row">
                <div className="row-main">
                  <h2 className="row-title">{item.title}</h2>
                  <p className="row-desc">{item.desc}</p>

                  {item.live ? (
                    <div className="row-links">
                      <a
                        className="row-link"
                        href={item.live.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.live.label}
                      </a>
                    </div>
                  ) : null}
                </div>

                <div className="row-meta">{item.date}</div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 34 }}>
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
