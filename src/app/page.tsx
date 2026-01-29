import Link from "next/link";
import { Shell } from "@/components/Shell";
import { TopNav } from "@/components/TopNav";

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
    overview:
      "Daily export → live LATAM traffic-light view of stock risk.",
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
    overview:
      "What-if manufacturing P&L engine for margin impact in seconds, not spreadsheets.",
    date: "2025-08",
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    overview:
      "CVRPTW cross-border day plan optimized for cost, not distance.",
    date: "2025-07",
  },
];

function ProjectRow({ p }: { p: Project }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className="group block py-8 md:py-10"
    >
      <div className="flex items-baseline justify-between gap-8">
        <div className="text-[20px] md:text-[22px] tracking-[-0.01em] text-[color:var(--text)]">
          {p.title}
        </div>

        <div className="tabular text-[12px] text-[color:var(--faint)]">
          {p.date}
        </div>
      </div>

      <div className="mt-2 max-w-[78ch] text-[14px] md:text-[15px] leading-6 text-[color:var(--muted)]">
        {p.overview}
      </div>

      <div className="mt-8 border-t hairline2 opacity-60 group-hover:opacity-100 transition" />
    </Link>
  );
}

export default function HomePage() {
  return (
    <Shell>
      <TopNav />

      <main className="pt-12 md:pt-16 pb-16 md:pb-24">
        <section>
          <div className="flex items-end justify-between">
            <div className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]">
              Selected work
            </div>

            <div className="text-[12px] text-[color:var(--faint)]">
              {projects.length} projects
            </div>
          </div>

          <div className="mt-6">
            {projects.map((p) => (
              <ProjectRow key={p.slug} p={p} />
            ))}
          </div>
        </section>

        <section className="mt-14 md:mt-20">
          <div className="flex items-end justify-between">
            <div className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]">
              Notes
            </div>

            <Link
              href="/notes"
              className="text-[12px] text-[color:var(--muted)] hover:text-[color:var(--text)]"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 border-t hairline2" />

          <div className="mt-6 text-[14px] text-[color:var(--muted)]">
            One page, quick reads. Abstracts, fixes, and build notes.
          </div>
        </section>
      </main>
    </Shell>
  );
}
