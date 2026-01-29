import Link from "next/link";

const logs = [
  {
    title: "This site: turning a portfolio into something honest and alive",
    date: "Dec 27, 2025",
    tags: ["meta", "portfolio", "vercel"],
    content: [
      "Built this site on Next.js + Vercel, not as a glossy brochure, but as a place to be honest about projects, what broke, and what I'm learning.",
      "Big recurring confusion: Vercel vs GitHub vs my brain. More than once I was clicking 'Visit' on an old deployment and assuming the code hadn't updated, when in reality I was just on a stale URL.",
      "Ran into weird 'not reflecting' moments that ended up being MDX issues: a couple of characters and math-y formatting broke the content build, so Vercel silently rolled back.",
      "Had to get comfortable with the 'projects as conversations' tone: these pages are not pitch decks.",
    ],
  },
  {
    title: "LATAM Inventory Health Dashboard finally stops breaking",
    date: "Dec 05, 2025",
    tags: ["powerbi", "supply-chain", "automation"],
    content: [
      "Built a Power BI dashboard for the LATAM supply chain team that compares safety stock vs on-hand stock and classifies each material–country pair as green / yellow / red.",
      "Redid the Power BI model multiple times after the DAX logic turned into spaghetti.",
      "Ran into a nasty issue where different Incorta reports used slightly different material codes, so joins silently failed.",
      "Power Automate turned out to be surprisingly fragile. Small changes in conditions broke the flow.",
      "The payoff: the team now talks in terms of 'reds' and 'yellows' instead of screenshotting spreadsheets.",
    ],
  },
  {
    title: "Thesis: from 'I want to do semiconductors' to a real chokepoint model",
    date: "Nov 10, 2025",
    tags: ["thesis", "semiconductors", "research"],
    content: [
      "Locked in the CoWoS/HBM chokepoint as the core of the thesis.",
      "Spent a lot of time stuck at the 'topic fog' stage: I knew I wanted semiconductors + resilience + climate, but everything sounded either too generic or too impossible.",
      "Kept running into papers that ended with 'firms should share more data and collaborate' as the big conclusion. Felt unrealistic and lazy.",
      "The turning point was deciding to bake that disagreement into the thesis: assume no magical cross-firm data sharing.",
      "Started drafting the formal structure: sets, decision variables, tri-objective function.",
    ],
  },
  {
    title: "Manufacturing Cost Intelligence System becomes a real thinking tool",
    date: "Jul 20, 2025",
    tags: ["manufacturing", "analytics", "streamlit"],
    content: [
      "Took the idea of 'flight simulator for manufacturing decisions' and pushed it far enough that you can feel portfolio-level impact in a slider move.",
      "Built the first version of the P&L simulator. Streamlit made it easy to iterate, but very tempting to keep adding sliders with no structure.",
      "Hit a wall when I mixed too much logic into the UI. Refactored so /app/core holds the brain and Streamlit is just the face.",
      "Prompt engineering for the AI 'strategist' took several tries. Early versions just rephrased charts.",
      "Accepted that this version is a thinking tool, not an ERP replacement.",
    ],
  },
  {
    title: "Cross-Border Fleet Optimizer actually starts working",
    date: "Jun 15, 2025",
    tags: ["logistics", "python", "optimization"],
    content: [
      "First real 'systems' project: turning a whiteboard-style Laredo dispatch problem into a Python tool.",
      "Got the first version running with straight-line distances. Worked on paper but felt fake.",
      "Biggest early headache: wrestling with OR-Tools' routing model. Kept wiring callbacks wrong.",
      "Hooked up a local OSRM container so Texas routes use real road travel times. Whole journey of Docker pulls and port issues.",
      "First time the model chose a longer route in kilometers but cheaper in total cost was the moment it stopped feeling like a school assignment.",
    ],
  },
];

export default function NotesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 32px",
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
                color: "var(--text)",
                fontWeight: 500,
              }}
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
        </header>

        {/* Intro */}
        <section style={{ paddingTop: 64, paddingBottom: 48, borderBottom: "1px solid var(--hair)" }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              margin: 0,
              marginBottom: 16,
            }}
          >
            Log
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: "56ch",
            }}
          >
            This isn't a polished blog. It's more like a changelog of what I'm
            actually working on: research, side projects, and the occasional "I
            finally wired this thing correctly" moment.
          </p>
        </section>

        {/* Entries */}
        <main style={{ paddingTop: 48, paddingBottom: 120 }}>
          {logs.map((log, i) => (
            <article
              key={i}
              style={{
                paddingBottom: 48,
                marginBottom: 48,
                borderBottom: i < logs.length - 1 ? "1px solid var(--hair)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "var(--faint)",
                  marginBottom: 12,
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <span>{log.date}</span>
                <span style={{ color: "var(--hair)" }}>·</span>
                <span>{log.tags.join(", ")}</span>
              </div>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: "var(--text)",
                  margin: 0,
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                {log.title}
              </h2>
              {log.content.map((p, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "var(--muted)",
                    marginBottom: 12,
                  }}
                >
                  {p}
                </p>
              ))}
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
