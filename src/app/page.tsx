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
    meta: "Power BI • Power Automate • SharePoint • daily refresh • V1",
    constraint: "Breaks if the upstream export schema changes.",
  },
  {
    slug: "chokepoint-frontier-model",
    title: "Chokepoint Frontier Model",
    hook: "Tri-objective sim–opt map of cost vs resilience vs carbon at the CoWoS/HBM bottleneck.",
    meta: "simulation • multi-objective • disruption scenarios • thesis log",
    constraint: "Minimal network on purpose to stay tractable and honest.",
  },
  {
    slug: "cost-flight-simulator",
    title: "Cost Flight Simulator",
    hook: "What-if manufacturing P&L engine that shows portfolio margin impact in seconds, not spreadsheets.",
    meta: "Python • Streamlit • scenario engine • portfolio view • AI brief",
    constraint: "Static CSV inputs today; live feeds next.",
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    hook: "CVRPTW solver that plans a five-truck cross-border day optimized for cost, not distance.",
    meta: "Python • OR-Tools • OSRM • time windows • cost objective",
    constraint: "Mexico routing uses approximations in current map setup.",
  },
];

const notes: NoteItem[] = [
  {
    slug: "spark-join-the-real-bottleneck",
    title: "Spark Join: The Real Bottleneck",
    summary:
      "A slow job that wasn’t compute-bound. Fix was skew + shuffle layout, not more executors.",
    meta: "2025-10-03 • spark • performance • debugging",
  },
];

function Row({
  href,
  title,
  hook,
  meta,
  kicker,
}: {
  href: string;
  title: string;
  hook: string;
  meta: string;
  kicker: string;
}) {
  return (
    <Link
      href={href}
      className="group block border-b hairline py-6 md:py-7"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="text-[18px] md:text-[19px] tracking-[-0.02em]">
            {title}
          </div>

          <div className="mt-1 text-[13px] md:text-[13.5px] leading-6 text-[color:var(--muted)] max-w-[80ch]">
            {hook}
          </div>

          <div className="mt-2 mono text-[12px] leading-5 text-[color:var(--faint)] tabular">
            {meta}
          </div>

          <div className="mt-3 hidden text-[12px] leading-5 text-[color:var(--muted)] group-hover:block group-focus-visible:block">
            <span className="text-[color:var(--faint)]">Constraint:</span>{" "}
            {kicker}
          </div>
        </div>

        <div className="shrink-0 pt-[2px] text-[12px] text-[color:var(--faint)] group-hover:text-[color:var(--accent)]">
          →
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <Shell>
      <div className="py-14 md:py-16">
        {/* Top */}
        <section>
          <div className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]">
            Benjamin Arce
          </div>

          <h1 className="mt-3 display text-[42px] md:text-[56px] leading-[0.98] tracking-[-0.05em]">
            Builds systems that turn messy data into decisions.
          </h1>

          <div className="mt-5 text-[12px] text-[color:var(--faint)]">
            Status: open to internships <span className="mx-2">•</span> selective builds
          </div>
        </section>

        <div className="my-10 border-t hairline" />

        {/* Selected Builds */}
        <section>
          <div className="flex items-end justify-between">
            <h2 className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]">
              Selected Builds
            </h2>
            <Link
              href="/work"
              className="text-[12px] text-[color:var(--muted)] hover:text-[color:var(--text)]"
            >
              View all
            </Link>
          </div>

          <div className="mt-4 border-t hairline">
            {selected.map((p) => (
              <Row
                key={p.slug}
                href={`/work/${p.slug}`}
                title={p.title}
                hook={p.hook}
                meta={p.meta}
                kicker={p.constraint}
              />
            ))}
          </div>
        </section>

        <div className="my-10 border-t hairline" />

        {/* Latest Notes */}
        <section>
          <div className="flex items-end justify-between">
            <h2 className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]">
              Latest Notes
            </h2>
            <Link
              href="/notes"
              className="text-[12px] text-[color:var(--muted)] hover:text-[color:var(--text)]"
            >
              View all
            </Link>
          </div>

          <div className="mt-4 border-t hairline">
            {notes.map((n) => (
              <Link
                key={n.slug}
                href={`/notes/${n.slug}`}
                className="group block border-b hairline py-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="text-[16px] tracking-[-0.01em]">
                      {n.title}
                    </div>
                    <div className="mt-2 text-[13px] leading-6 text-[color:var(--muted)] max-w-[80ch]">
                      {n.summary}
                    </div>
                    <div className="mt-2 mono text-[12px] text-[color:var(--faint)] tabular">
                      {n.meta}
                    </div>
                  </div>

                  <div className="shrink-0 pt-[2px] text-[12px] text-[color:var(--faint)] group-hover:text-[color:var(--accent)]">
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
