import Link from "next/link";
import { Shell } from "@/components/Shell";

type Item = {
  slug: string;
  title: string;
  hook: string;
  meta: string;
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
  },
  {
    slug: "chokepoint-frontier-model",
    title: "Chokepoint Frontier Model",
    hook: "Tri-objective sim–opt map of cost vs resilience vs carbon at the CoWoS/HBM bottleneck.",
    meta: "simulation • multi-objective • disruption scenarios • thesis log",
  },
  {
    slug: "cost-flight-simulator",
    title: "Cost Flight Simulator",
    hook: "What-if manufacturing P&L engine that shows portfolio margin impact in seconds, not spreadsheets.",
    meta: "Python • Streamlit • scenario engine • portfolio view • AI brief",
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    hook: "CVRPTW solver that plans a five-truck cross-border day optimized for cost, not distance.",
    meta: "Python • OR-Tools • OSRM • time windows • cost objective",
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

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono text-[11px] tracking-[0.22em] text-[color:var(--faint)]">
      {children}
    </div>
  );
}

function BigRow({
  href,
  title,
  hook,
  meta,
}: {
  href: string;
  title: string;
  hook: string;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="group block border-b hairline py-12 md:py-16"
    >
      <div className="flex items-start justify-between gap-10">
        <div className="min-w-0">
          <div className="display text-[30px] md:text-[38px] leading-[1.05] tracking-[-0.02em]">
            {title}
          </div>

          <div className="mt-5 max-w-[78ch] text-[15px] md:text-[16px] leading-7 text-[color:var(--muted)]">
            {hook}
          </div>

          <div className="mt-6 mono text-[12px] tracking-[0.12em] text-[color:var(--faint)]">
            {meta}
          </div>
        </div>

        <div className="mt-2 flex-none mono text-[16px] text-[color:var(--faint)] opacity-70 group-hover:opacity-100 transition">
          →
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <Shell>
      <div className="pt-16 md:pt-20">
        {/* HERO */}
        <header className="pt-10 md:pt-14">
          <h1 className="display text-[72px] md:text-[108px] leading-[0.9] tracking-[-0.04em]">
            Benjamin Arce
          </h1>

          <p className="mt-10 max-w-[70ch] text-[16px] md:text-[18px] leading-8 text-[color:var(--muted)]">
            Data-first tools: pipelines, dashboards, optimization, and decision systems people actually use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 mono text-[11px] tracking-[0.22em] text-[color:var(--faint)]">
            <span>STATUS: OPEN TO INTERNSHIPS</span>
            <span className="opacity-60">•</span>
            <span>FOCUS: PIPELINES / OPTIMIZATION / DECISION SYSTEMS</span>
          </div>
        </header>

        {/* BIG WHITESPACE BREAK (intentional) */}
        <div className="mt-16 md:mt-20 border-t hairline" />

        {/* SELECTED BUILDS */}
        <section className="mt-12 md:mt-16">
          <div className="flex items-end justify-between">
            <Label>SELECTED BUILDS</Label>
            <Link
              href="/work"
              className="mono text-[11px] tracking-[0.22em] text-[color:var(--faint)] hover:text-[color:var(--text)]"
            >
              VIEW ALL
            </Link>
          </div>

          <div className="mt-8 border-t hairline">
            {selected.map((p) => (
              <BigRow
                key={p.slug}
                href={`/work/${p.slug}`}
                title={p.title}
                hook={p.hook}
                meta={p.meta}
              />
            ))}
          </div>
        </section>

        {/* LATEST NOTES */}
        <section className="mt-16 md:mt-24">
          <div className="flex items-end justify-between">
            <Label>LATEST NOTES</Label>
            <Link
              href="/notes"
              className="mono text-[11px] tracking-[0.22em] text-[color:var(--faint)] hover:text-[color:var(--text)]"
            >
              VIEW ALL
            </Link>
          </div>

          <div className="mt-8 border-t hairline">
            {notes.map((n) => (
              <BigRow
                key={n.slug}
                href={`/notes/${n.slug}`}
                title={n.title}
                hook={n.summary}
                meta={n.meta}
              />
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
