import Link from "next/link";

const projects = [
  {
    slug: "inbox-inventory-radar",
    title: "Inbox → Inventory Radar",
    description: "Daily export → live LATAM traffic-light view of stock risk.",
    date: "2025-10",
  },
  {
    slug: "chokepoint-frontier-model",
    title: "Chokepoint Frontier Model",
    description: "Tri-objective sim/opt mapping cost vs resilience vs carbon at CoWoS/HBM bottleneck.",
    date: "2025-09",
  },
  {
    slug: "cost-flight-simulator",
    title: "Cost Flight Simulator",
    description: "What-if manufacturing P&L engine for margin impact in seconds.",
    date: "2025-08",
  },
  {
    slug: "border-fleet-optimizer",
    title: "Border Fleet Optimizer",
    description: "CVRPTW cross-border day plan optimized for cost, not distance.",
    date: "2025-07",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen px-6 md:px-16 max-w-[900px] mx-auto">
      {/* Header */}
      <header className="pt-12 pb-24 flex items-baseline justify-between">
        <Link 
          href="/" 
          className="text-[14px] tracking-[0.12em] uppercase text-[var(--text)]"
        >
          Benjamin Arce
        </Link>
        
        <nav className="flex items-baseline gap-8">
          <Link 
            href="/work" 
            className="text-[13px] tracking-[0.08em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            Work
          </Link>
          <Link 
            href="/notes" 
            className="text-[13px] tracking-[0.08em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            Notes
          </Link>
          <Link 
            href="/about" 
            className="text-[13px] tracking-[0.08em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            About
          </Link>
        </nav>
        
        <div className="flex items-baseline gap-6">
          <a 
            href="https://github.com/benjaminarce" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[13px] tracking-[0.08em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            GH
          </a>
          <a 
            href="https://linkedin.com/in/benjaminarce" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[13px] tracking-[0.08em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            LI
          </a>
        </div>
      </header>

      {/* Work List */}
      <main className="pb-24">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block mb-16 last:mb-0"
          >
            <div className="flex justify-between items-start gap-8">
              <div className="flex-1">
                <h2 className="font-serif italic text-[32px] leading-[1.2] tracking-[-0.02em] text-[var(--text)] group-hover:text-white transition-colors">
                  {project.title}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--muted)] max-w-[54ch]">
                  {project.description}
                </p>
              </div>
              <span className="text-[13px] tabular-nums text-[var(--faint)] pt-2 shrink-0">
                {project.date}
              </span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
