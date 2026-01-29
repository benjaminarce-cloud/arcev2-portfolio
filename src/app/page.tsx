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
    <div style={{ minHeight: "100vh", padding: "0 64px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <header style={{ 
        paddingTop: 48, 
        paddingBottom: 96, 
        display: "flex", 
        alignItems: "baseline", 
        justifyContent: "space-between" 
      }}>
        <Link 
          href="/" 
          style={{ 
            fontSize: 14, 
            letterSpacing: "0.12em", 
            textTransform: "uppercase",
            color: "var(--text)"
          }}
        >
          Benjamin Arce
        </Link>
        
        <nav style={{ display: "flex", alignItems: "baseline", gap: 32 }}>
          <Link 
            href="/work" 
            style={{ 
              fontSize: 13, 
              letterSpacing: "0.08em", 
              textTransform: "uppercase",
              color: "var(--muted)"
            }}
          >
            Work
          </Link>
          <Link 
            href="/notes" 
            style={{ 
              fontSize: 13, 
              letterSpacing: "0.08em", 
              textTransform: "uppercase",
              color: "var(--muted)"
            }}
          >
            Notes
          </Link>
          <Link 
            href="/about" 
            style={{ 
              fontSize: 13, 
              letterSpacing: "0.08em", 
              textTransform: "uppercase",
              color: "var(--muted)"
            }}
          >
            About
          </Link>
        </nav>
        
        <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
          <a 
            href="https://github.com/benjaminarce" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              fontSize: 13, 
              letterSpacing: "0.08em", 
              textTransform: "uppercase",
              color: "var(--muted)"
            }}
          >
            GH
          </a>
          <a 
            href="https://linkedin.com/in/benjaminarce" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              fontSize: 13, 
              letterSpacing: "0.08em", 
              textTransform: "uppercase",
              color: "var(--muted)"
            }}
          >
            LI
          </a>
        </div>
      </header>

      {/* Work List */}
      <main style={{ paddingBottom: 96 }}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            style={{ display: "block", marginBottom: 64 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 32 }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontStyle: "italic",
                  fontSize: 32, 
                  lineHeight: 1.2, 
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  margin: 0
                }}>
                  {project.title}
                </h2>
                <p style={{ 
                  marginTop: 12, 
                  fontSize: 15, 
                  lineHeight: 1.6, 
                  color: "var(--muted)",
                  maxWidth: "54ch"
                }}>
                  {project.description}
                </p>
              </div>
              <span style={{ 
                fontSize: 13, 
                fontVariantNumeric: "tabular-nums",
                color: "var(--faint)",
                paddingTop: 8,
                flexShrink: 0
              }}>
                {project.date}
              </span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
