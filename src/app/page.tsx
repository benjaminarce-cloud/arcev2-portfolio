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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Header */}
        <header
          style={{
            paddingTop: 40,
            paddingBottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--hair)",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            Benjamin Arce
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <Link
              href="/work"
              style={{
                fontSize: 14,
                color: "var(--muted)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Work
            </Link>
            <Link
              href="/notes"
              style={{
                fontSize: 14,
                color: "var(--muted)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Notes
            </Link>
            <Link
              href="/about"
              style={{
                fontSize: 14,
                color: "var(--muted)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              About
            </Link>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a
              href="https://github.com/benjaminarce-clouds"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{ color: "var(--muted)", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/benjaminarce"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{ color: "var(--muted)", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </header>

        {/* Main content */}
        <main style={{ paddingTop: 80, paddingBottom: 120 }}>
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              style={{
                display: "block",
                paddingTop: index === 0 ? 0 : 48,
                paddingBottom: 48,
                borderBottom: index < projects.length - 1 ? "1px solid var(--hair)" : "none",
              }}
            >
              <article
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 48,
                }}
              >
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "var(--text)",
                      margin: 0,
                      lineHeight: 1.3,
                      transition: "color 0.15s ease",
                    }}
                    className="project-title"
                  >
                    {project.title}
                  </h2>
                  <p
                    style={{
                      marginTop: 12,
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      maxWidth: "56ch",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--faint)",
                    fontVariantNumeric: "tabular-nums",
                    flexShrink: 0,
                    paddingTop: 4,
                  }}
                >
                  {project.date}
                </span>
              </article>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}
