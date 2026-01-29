import Link from "next/link";
import { notFound } from "next/navigation";

const projectData: Record<
  string,
  {
    title: string;
    description: string;
    date: string;
    problem: string;
    approach: string;
    stack: string[];
    result: string;
    constraints?: string;
  }
> = {
  "inbox-inventory-radar": {
    title: "Inbox → Inventory Radar",
    description: "Daily export → live LATAM traffic-light view of stock risk.",
    date: "2025-10",
    problem:
      "Regional inventory reports arrived as email attachments with inconsistent formats. Teams spent hours manually consolidating data to identify stockout risks.",
    approach:
      "Built a Power Automate flow that extracts attachments, normalizes schemas, and pushes to SharePoint. Power BI dashboard refreshes daily with traffic-light risk indicators.",
    stack: ["Power BI", "Power Automate", "SharePoint", "Excel"],
    result:
      "Reduced inventory review time from 4 hours to 15 minutes. Caught 3 potential stockouts in first month.",
    constraints:
      "Had to work within existing Microsoft 365 licensing. No Azure budget for custom compute.",
  },
  "chokepoint-frontier-model": {
    title: "Chokepoint Frontier Model",
    description:
      "Tri-objective sim/opt mapping cost vs resilience vs carbon at CoWoS/HBM bottleneck.",
    date: "2025-09",
    problem:
      "Semiconductor supply chain decisions were made on cost alone, ignoring resilience to disruption and carbon footprint.",
    approach:
      "Built a simulation model with three competing objectives. Used Pareto frontier visualization to show decision-makers the tradeoff space.",
    stack: ["Python", "NumPy", "Plotly", "Linear Programming"],
    result:
      "Identified sourcing strategy that reduced carbon 18% with only 3% cost increase.",
  },
  "cost-flight-simulator": {
    title: "Cost Flight Simulator",
    description: "What-if manufacturing P&L engine for margin impact in seconds.",
    date: "2025-08",
    problem:
      "Finance needed to model cost scenarios (tariffs, FX, material prices) but existing spreadsheets took days to update.",
    approach:
      "Created a parameterized P&L model with sliders for key variables. Pre-computed sensitivity matrices for instant feedback.",
    stack: ["Python", "Streamlit", "Pandas", "NumPy"],
    result: "Scenario analysis that took 2 days now takes 30 seconds.",
  },
  "border-fleet-optimizer": {
    title: "Border Fleet Optimizer",
    description: "CVRPTW cross-border day plan optimized for cost, not distance.",
    date: "2025-07",
    problem:
      "Cross-border logistics planned routes by distance, ignoring toll costs, wait times, and vehicle capacity constraints.",
    approach:
      "Formulated as Capacitated Vehicle Routing Problem with Time Windows. Objective function weighted actual costs, not kilometers.",
    stack: ["Python", "OR-Tools", "Google Maps API"],
    result: "12% reduction in daily fleet operating cost.",
    constraints:
      "Real-time border wait data was unreliable. Used historical averages with safety buffer.",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 md:px-16 max-w-[900px] mx-auto">
      {/* Back link */}
      <div className="pt-12 pb-16">
        <Link
          href="/"
          className="text-[13px] tracking-[0.08em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          ← Back
        </Link>
      </div>

      {/* Header */}
      <header className="pb-12 border-b hairline">
        <h1 className="font-serif italic text-[40px] leading-[1.15] tracking-[-0.02em] text-[var(--text)]">
          {project.title}
        </h1>
        <p className="mt-4 text-[16px] leading-[1.6] text-[var(--muted)] max-w-[60ch]">
          {project.description}
        </p>
        <p className="mt-4 text-[13px] tabular-nums text-[var(--faint)]">
          {project.date}
        </p>
      </header>

      {/* Sections */}
      <main className="py-12 space-y-10">
        <Section label="Problem" content={project.problem} />
        <Section label="Approach" content={project.approach} />
        <Section label="Stack" content={project.stack.join(" · ")} />
        <Section label="Result" content={project.result} />
        {project.constraints && (
          <Section label="Constraints" content={project.constraints} />
        )}
      </main>
    </div>
  );
}

function Section({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <h2 className="text-[11px] tracking-[0.14em] uppercase text-[var(--faint)] mb-3">
        {label}
      </h2>
      <p className="text-[15px] leading-[1.7] text-[var(--muted)] max-w-[60ch]">
        {content}
      </p>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}
