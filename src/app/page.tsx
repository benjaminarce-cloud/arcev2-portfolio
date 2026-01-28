import Link from "next/link";
import { Shell } from "@/components/Shell";

type Item = {
  slug: string;
  title: string;
  hook: string;
  meta: string;
  constraint: string;
};

type NoteItem = {
  slug: string;
  title: string;
  summary: string;
  meta: string;
};

const selected: Item[] = [
  {
    slug: "inbox-inventory-radar",
    title: "Inbox → Inventory Radar",
    hook: "Turns a daily Incorta export into a live LATAM traffic-light view of stock risk.",
    meta: "Power BI • Power Automate • SharePoint • daily refresh • v1",
    constraint: "Upstream schema changes break it; v1 favors speed over hard validation.",
  },
  {
    slug: "chokepoint-frontier-model",
    title: "Chokepoint Frontier Model",
    hook: "Tri-objective sim–opt map of cost vs resilience vs carbon at the CoWoS/HBM bottleneck.",
    meta: "simulation • multi-objective • disruption scenarios • thesis log",
    constraint: "Deliberately narrow scope: one chokepoint, but modeled honestly.",
  },
  {
    slug: "cost-flight-simulator",
    title: "Cost Flight Simulator",
    hook: "What-if manufacturing P&L engine that shows portfolio margin impact in seconds, not spreadsheets.",
    meta: "Python • Streamlit • scenario engine • portfolio view • AI brief",
    constraint: "Not an ERP replacement; v1 is a decision simulator with clean assumptions.",
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    hook: "CVRPTW solver that plans a five-truck cross-border day optimized for cost, not distance.",
    meta: "Python • OR-Tools • OSRM • time windows • cost objective",
    constraint: "Mexico routing is a fallback approximation; Texas is road-real via OSRM.",
  },
];

const notes: NoteItem[] = [
  {
    slug: "spark-join-the-real-bottleneck",
    title: "Spark Join: The Real Bottleneck",
    summary: "A slow job that wasn’t compute-bound. Fix was skew + shuffle layout, not more executors.",
    meta: "2025-10-03 • spark • performance • debugging",
  },
];

function SectionHeader({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="flex items-end justify-between">
      <h2 className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]">
        {title}
      </h2>
      <Link
        href={href}
        className="text-[12px] text-[color:var(--muted)] hover:text-[color:var(--text)]"
      >
        View all
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <Shell>
      <div className="py-14">
        {/* top label */}
        <div className="text-[11px] tracking-[0.22em] text-[color:var(--faint)] uppercase">
          Benjamin Arce
        </div>

        {/* hero */}
        <h1 className="mt-4 display text-[44px] leading-[1.02] tracking-[-0.035em] max-w-[18ch]">
          Builds systems that turn messy data into decisions.
        </h1>

        <div className="mt-5 text-[12px] text-[color:var(--faint)] tabular">
          Status: open to internships • selective builds
        </div>

        <div className="mt-10 border-t hairline" />

        {/* selected */}
        <section className="mt-6">
          <SectionHeader title="Selected Builds" href="/work" />

          <div className="mt-4 border-t hairline">
            {selected.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group block border-b hairline py-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-[18px] tracking-[-0.01em]">
                      {p.title}
                    </div>

                    <div className="mt-1 text-[13px] leading-5 text-[color:var(--muted)] max-w-[78ch]">
                      {p.hook}
                    </div>

                    <div className="mt-2 text-[12px] leading-5 text-[color:var(--faint)] tabular">
                      {p.meta}
                    </div>

                    <div className="mt-3 hidden text-[12px] leading-5 text-[color:var(--muted)] group-hover:block group-focus-visible:block">
                      <span className="text-[color:var(--faint)]">Constraint:</span>{" "}
                      {p.constraint}
                    </div>
                  </div>

                  <div className="pt-1 text-[12px] text-[color:var(--faint)] opacity-70 group-hover:opacity-100">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10 border-t hairline" />

        {/* notes */}
        <section className="mt-6">
          <SectionHeader title="Latest Notes" href="/notes" />

          <div className="mt-4 border-t hairline">
            {notes.map((n) => (
              <Link
                key={n.slug}
                href={`/notes/${n.slug}`}
                className="group block border-b hairline py-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-[15px] tracking-[-0.005em]">
                      {n.title}
                    </div>
                    <div className="mt-1 text-[13px] leading-5 text-[color:var(--muted)] max-w-[78ch]">
                      {n.summary}
                    </div>
                    <div className="mt-2 text-[12px] text-[color:var(--faint)] tabular">
                      {n.meta}
                    </div>
                  </div>
                  <div className="pt-1 text-[12px] text-[color:var(--faint)] opacity-0 group-hover:opacity-70">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
