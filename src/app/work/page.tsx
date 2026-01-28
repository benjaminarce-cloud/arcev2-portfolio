import { Shell } from "@/components/Shell";
import { Row } from "@/components/Row";

type Item = {
  slug: string;
  title: string;
  hook: string;
  meta: string;
  constraint: string;
};

const projects: Item[] = [
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

export default function WorkPage() {
  return (
    <Shell>
      <div className="py-14 md:py-16">
        <header>
          <div className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]">
            Work
          </div>
          <h1 className="mt-3 text-[34px] md:text-[42px] leading-[1.02] tracking-[-0.04em]">
            Projects, not vibes.
          </h1>
          <p className="mt-4 max-w-[70ch] text-[14px] leading-7 text-[color:var(--muted)]">
            Each item has a one-screen overview. Notes are optional and honest.
          </p>
        </header>

        <div className="my-10 border-t hairline" />

        <section className="border-t hairline">
          {projects.map((p) => (
            <Row
              key={p.slug}
              href={`/work/${p.slug}`}
              title={p.title}
              hook={p.hook}
              meta={p.meta}
              kicker={p.constraint}
            />
          ))}
        </section>
      </div>
    </Shell>
  );
}
