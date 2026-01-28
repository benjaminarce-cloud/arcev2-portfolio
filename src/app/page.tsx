import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Row } from "@/components/Row";

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
    constraint: "Inputs are static CSV today; live feeds next.",
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

export default function HomePage() {
  return (
    <Shell>
      <div className="py-14 md:py-16">
        {/* Header */}
        <header className="pt-2">
          <div className="flex items-baseline justify-between gap-6">
            <h1 className="text-[44px] md:text-[56px] leading-[0.98] tracking-[-0.04em]">
              Benjamin Arce
            </h1>

            <nav className="hidden md:flex items-center gap-5 text-[12px] text-[color:var(--muted)]">
              <Link className="hover:text-[color:var(--text)]" href="/work">
                Work
              </Link>
              <Link className="hover:text-[color:var(--text)]" href="/notes">
                Notes
              </Link>
              <Link className="hover:text-[color:var(--text)]" href="/contact">
                Contact
              </Link>
            </nav>
          </div>

          <p className="mt-6 max-w-[68ch] text-[15px] leading-7 text-[color:var(--muted)]">
            Builds systems that turn messy data into decisions.
          </p>

          <p className="mt-2 text-[12px] text-[color:var(--faint)] tabular">
            Status: open to internships • selective builds
          </p>
        </header>

        <div className="my-10 border-t hairline" />

        {/* Selected */}
        <section aria-labelledby="selected-builds">
          <div className="flex items-end justify-between gap-6">
            <h2
              id="selected-builds"
              className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]"
            >
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

        {/* Notes */}
        <section aria-labelledby="latest-notes">
          <div className="flex items-end justify-between gap-6">
            <h2
              id="latest-notes"
              className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]"
            >
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
                    <div className="mt-2 text-[13px] leading-6 text-[color:var(--muted)] max-w-[72ch]">
                      {n.summary}
                    </div>
                    <div className="mt-2 font-mono text-[12px] text-[color:var(--faint)] tabular">
                      {n.meta}
                    </div>
                  </div>

                  <div className="shrink-0 text-[12px] text-[color:var(--faint)] group-hover:text-[color:var(--accent)]">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer micro-links */}
        <footer className="mt-12 text-[12px] text-[color:var(--faint)]">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a className="hover:text-[color:var(--text)]" href="mailto:arceb3013@gmail.com">
              Email
            </a>
            <a
              className="hover:text-[color:var(--text)]"
              href="https://www.linkedin.com/in/arcebenjamin/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-[color:var(--text)]"
              href="https://github.com/benjaminarce-cloud"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span>Proof over pitch.</span>
          </div>
        </footer>
      </div>
    </Shell>
  );
}
