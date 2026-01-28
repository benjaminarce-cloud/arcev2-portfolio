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
    constraint: "Deliberately narrow scope: one chokepoint, modeled honestly.",
  },
  {
    slug: "cost-flight-simulator",
    title: "Cost Flight Simulator",
    hook: "What-if manufacturing P&L engine that shows portfolio margin impact in seconds, not spreadsheets.",
    meta: "Python • Streamlit • scenario engine • portfolio view • AI brief",
    constraint: "Not an ERP; it’s a decision simulator with explicit assumptions.",
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    hook: "CVRPTW solver that plans a five-truck cross-border day optimized for cost, not distance.",
    meta: "Python • OR-Tools • OSRM • time windows • cost objective",
    constraint: "Mexico routing falls back to approximation; Texas is road-real via OSRM.",
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

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono text-[11px] tracking-[0.28em] text-[color:var(--faint)] uppercase">
      {children}
    </div>
  );
}

function SectionHead({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <h2 className="mono text-[11px] tracking-[0.28em] text-[color:var(--faint)] uppercase">
        {title}
      </h2>
      <Link
        href={href}
        className="mono text-[11px] tracking-[0.18em] text-[color:var(--muted)] hover:text-[color:var(--text)] uppercase"
      >
        View all
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <Shell>
      <div className="pt-16 pb-20">
        {/* HERO: title card */}
        <section className="max-w-[980px]">
          <Kicker>Benjamin Arce</Kicker>

          {/* Name owns the room */}
          <h1 className="mt-6 display text-[54px] leading-[0.98] tracking-[-0.045em] md:text-[74px]">
            Benjamin Arce
          </h1>

          {/* Positioning as subtitle (still signal, not hype) */}
          <p className="mt-6 max-w-[60ch] text-[15px] leading-7 text-[color:var(--muted)]">
            Builds systems that turn messy data into decisions.
          </p>

          <div className="mt-5 mono text-[11px] tracking-[0.18em] text-[color:var(--faint)] uppercase">
            Status: open to internships • selective builds
          </div>
        </section>

        {/* AIR */}
        <div className="h-14 md:h-20" />

        {/* RULE */}
        <div className="border-t hairline" />

        {/* SELECTED BUILDS: editorial list with breathing room */}
        <section className="mt-10">
          <SectionHead title="Selected Builds" href="/work" />

          <div className="mt-6">
            {selected.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group block py-7 md:py-9"
              >
                <div className="grid grid-cols-[1fr_auto] gap-6 items-start">
                  <div className="min-w-0">
                    <div className="text-[20px] md:text-[22px] tracking-[-0.015em]">
                      {p.title}
                    </div>

                    <div className="mt-2 text-[13px] md:text-[14px] leading-6 text-[color:var(--muted)] max-w-[82ch]">
                      {p.hook}
                    </div>

                    <div className="mt-3 mono text-[11px] leading-5 tracking-[0.10em] text-[color:var(--faint)] uppercase">
                      {p.meta}
                    </div>

                    <div className="mt-4 hidden text-[13px] leading-6 text-[color:var(--muted)] group-hover:block group-focus-visible:block">
                      <span className="mono text-[11px] tracking-[0.18em] text-[color:var(--faint)] uppercase">
                        Constraint:
                      </span>{" "}
                      {p.constraint}
                    </div>
                  </div>

                  {/* subtle arrow */}
                  <div className="mono text-[12px] tracking-[0.20em] text-[color:var(--faint)] opacity-60 group-hover:opacity-100">
                    →
                  </div>
                </div>

                {/* separator as part of rhythm */}
                <div className="mt-7 border-t hairline2" />
              </Link>
            ))}
          </div>
        </section>

        {/* AIR */}
        <div className="h-8 md:h-12" />

        {/* NOTES */}
        <section className="mt-6">
          <SectionHead title="Latest Notes" href="/notes" />

          <div className="mt-6 border-t hairline2">
            {notes.map((n) => (
              <Link
                key={n.slug}
                href={`/notes/${n.slug}`}
                className="group block py-7"
              >
                <div className="grid grid-cols-[1fr_auto] gap-6 items-start">
                  <div className="min-w-0">
                    <div className="text-[16px] tracking-[-0.01em]">
                      {n.title}
                    </div>
                    <div className="mt-2 text-[13px] leading-6 text-[color:var(--muted)] max-w-[82ch]">
                      {n.summary}
                    </div>
                    <div className="mt-3 mono text-[11px] tracking-[0.12em] text-[color:var(--faint)] uppercase">
                      {n.meta}
                    </div>
                  </div>
                  <div className="mono text-[12px] tracking-[0.20em] text-[color:var(--faint)] opacity-0 group-hover:opacity-60">
                    →
                  </div>
                </div>

                <div className="mt-7 border-t hairline2" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
