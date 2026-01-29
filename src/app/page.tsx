import Link from "next/link";
import { Shell } from "@/components/Shell";

type Project = {
  slug: string;
  title: string;
  overview: string;
  date: string; // YYYY-MM or YYYY-MM-DD
};

const projects: Project[] = [
  {
    slug: "inbox-inventory-radar",
    title: "Inbox → Inventory Radar",
    overview: "Daily export → live LATAM traffic-light view of stock risk.",
    date: "2025-10",
  },
  {
    slug: "chokepoint-frontier-model",
    title: "Chokepoint Frontier Model",
    overview:
      "Cost vs resilience vs carbon at the CoWoS/HBM bottleneck (tri-objective sim/opt).",
    date: "2025-09",
  },
  {
    slug: "cost-flight-simulator",
    title: "Cost Flight Simulator",
    overview: "What-if manufacturing P&L engine for margin impact in seconds.",
    date: "2025-08",
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    overview: "CVRPTW cross-border day plan optimized for cost, not distance.",
    date: "2025-07",
  },
];

export default function HomePage() {
  return (
    <Shell>
      <div className="pt-14 pb-24">
        {/* Top bar */}
        <header className="flex items-baseline justify-between gap-10">
          {/* Name */}
          <div className="text-[12px] tracking-[0.18em] uppercase text-[color:var(--faint)]">
            Benjamin Arce
          </div>

          {/* Nav */}
          <nav className="flex items-baseline gap-5 text-[12px] tracking-[0.18em] uppercase text-[color:var(--faint)]">
            <Link className="hover:text-[color:var(--text)]" href="/work">
              Work
            </Link>
            <Link className="hover:text-[color:var(--text)]" href="/notes">
              Notes
            </Link>
            <Link className="hover:text-[color:var(--text)]" href="/about">
              About
            </Link>
          </nav>

          {/* Socials */}
          <div className="flex items-baseline gap-5 text-[12px] tracking-[0.18em] uppercase text-[color:var(--faint)]">
            <a className="hover:text-[color:var(--text)]" href="#">
              GitHub
            </a>
            <a className="hover:text-[color:var(--text)]" href="#">
              LinkedIn
            </a>
            <a className="hover:text-[color:var(--text)]" href="#">
              Email
            </a>
          </div>
        </header>

        {/* Spacer */}
        <div className="mt-10 border-t hairline" />

        {/* Work list (this is the hero) */}
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--faint)]">
              Selected Work
            </div>

            <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--faint)]">
              {projects.length} projects
            </div>
          </div>

          <div className="mt-6 border-t hairline">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group block border-b hairline py-8"
              >
                <div className="grid grid-cols-[1fr_auto] gap-10 items-start">
                  <div>
                    <div className="text-[20px] leading-[1.2] tracking-[-0.01em]">
                      {p.title}
                    </div>

                    <div className="mt-2 max-w-[72ch] text-[14px] leading-6 text-[color:var(--muted)]">
                      {p.overview}
                    </div>
                  </div>

                  <div className="pt-1 text-[12px] tabular-nums text-[color:var(--faint)]">
                    {p.date}
                  </div>
                </div>

                <div className="mt-4 text-[12px] text-[color:var(--faint)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Open →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Notes preview */}
        <section className="mt-14">
          <div className="flex items-end justify-between">
            <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--faint)]">
              Notes
            </div>

            <Link
              href="/notes"
              className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--faint)] hover:text-[color:var(--text)]"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 border-t hairline py-8 text-[14px] leading-6 text-[color:var(--muted)]">
            One page, quick reads. Abstracts, fixes, and build notes.
          </div>
        </section>
      </div>
    </Shell>
  );
}
