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
    constraint: "Hard dependency on upstream file layout; v1 favors speed over schema robustness.",
  },
  {
    slug: "chokepoint-frontier-model",
    title: "Chokepoint Frontier Model",
    hook: "Tri-objective sim–opt map of cost vs resilience vs carbon at the CoWoS/HBM bottleneck.",
    meta: "simulation • multi-objective • disruption scenarios • thesis log",
    constraint: "Early model spine first; accuracy comes after clean assumptions + stress tests.",
  },
  {
    slug: "cost-flight-simulator",
    title: "Cost Flight Simulator",
    hook: "What-if manufacturing P&L engine that shows portfolio margin impact in seconds, not spreadsheets.",
    meta: "Python • Streamlit • scenario engine • portfolio view • AI brief",
    constraint: "V1 uses static CSV drivers; next step is live FX/commodity/freight feeds.",
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    hook: "CVRPTW solver that plans a five-truck cross-border day optimized for cost, not distance.",
    meta: "Python • OR-Tools • OSRM • time windows • cost objective",
    constraint: "Texas routing is real; Mexico leg still falls back to approximations in v1.",
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono text-[11px] tracking-[0.18em] text-[color:var(--faint)]">
      {children}
    </div>
  );
}

function Row({
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
      className="group block border-b hairline py-10 md:py-12"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="display text-[22px] md:text-[26px] leading-[1.12] tracking-[-0.01em]">
            {title}
          </div>
          <div className="mt-3 max-w-[72ch] text-[13px] md:text-[14px] leading-6 text-[color:var(--muted)]">
            {hook}
          </div>
          <div className="mt-4 mono text-[11px] md:text-[12px] text-[color:var(--faint)] tabular">
            {meta}
          </div>
        </div>

        <div className="mt-1 flex-none mono text-[14px] text-[color:var(--faint)] opacity-70 group-hover:opacity-100 transition">
          →
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <Shell>
      <div className="pt-16 md:pt-24 pb-20 md:pb-28">
        {/* HERO */}
        <header>
          <div className="mono text-[11px] tracking-[0.22em] text-[color:var(--faint)]">
            BENJAMIN ARCE
          </div>

          <h1 className="mt-6 display text-[52px] md:text-[72px] leading-[0.98] tracking-[-0.03em]">
            Builds systems
            <br />
            that turn messy
            <br />
            data into decisions.
          </h1>

          <p className="mt-8 max-w-[62ch] text-[14px] md:text-[15px] leading-7 text-[color:var(--muted)]">
            Data-first tools: pipelines, dashboards, and decision systems people actually use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 mono text-[11px] tracking-[0.18em] text-[color:var(--faint)]">
            <span>STATUS: OPEN TO INTERNSHIPS</span>
            <span className="opacity-60">•</span>
            <span>FOCUS: PIPELINES / OPTIMIZATION / DECISION SYSTEMS</span>
          </div>
        </header>

        <div className="mt-14 md:mt-16 border-t hairline" />

        {/* SELECTED BUILDS */}
        <section className="mt-12 md:mt-16">
          <div className="flex items-end justify-between">
            <SectionLabel>SELECTED BUILDS</SectionLabel>
            <Link
              href="/work"
              className="mono text-[11px] tracking-[0.18em] text-[color:var(--faint)] hover:text-[color:var(--text)]"
            >
              VIEW ALL
            </Link>
          </div>

          <div className="mt-6 border-t hairline">
            {selected.map((p) => (
              <Row
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
        <section className="mt-14 md:mt-20">
          <div className="flex items-end justify-between">
            <SectionLabel>LATEST NOTES</SectionLabel>
            <Link
              href="/notes"
              className="mono text-[11px] tracking-[0.18em] text-[color:var(--faint)] hover:text-[color:var(--text)]"
            >
              VIEW ALL
            </Link>
          </div>

          <div className="mt-6 border-t hairline">
            {notes.map((n) => (
              <Link
                key={n.slug}
                href={`/notes/${n.slug}`}
                className="block border-b hairline py-10 md:py-12"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="display text-[18px] md:text-[20px] leading-[1.15]">
                      {n.title}
                    </div>
                    <div className="mt-3 max-w-[72ch] text-[13px] md:text-[14px] leading-6 text-[color:var(--muted)]">
                      {n.summary}
                    </div>
                    <div className="mt-4 mono text-[11px] md:text-[12px] text-[color:var(--faint)] tabular">
                      {n.meta}
                    </div>
                  </div>
                  <div className="mt-1 flex-none mono text-[14px] text-[color:var(--faint)] opacity-70">
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
