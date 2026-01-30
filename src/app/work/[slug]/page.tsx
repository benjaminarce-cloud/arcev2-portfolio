// src/app/work/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type WorkProject = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  oneLine: string;

  quickScan: {
    whatItIs: string;
    whyItMatters: string;
    payoff: string;
  };

  sections: {
    heading: string;
    body?: string[];
    bullets?: string[];
  }[];

  technical?: {
    heading: string;
    bullets: string[];
  }[];

  footerNote?: string;
};

const WORK: WorkProject[] = [
  {
    slug: "inbox-inventory-radar",
    title: "Inventory Health Dashboard for a LATAM Supply Chain Team",
    subtitle:
      "Turning a daily Incorta email into a live traffic-light view of safety stock vs actual stock across LATAM.",
    date: "2025-10",
    tags: ["powerbi", "supply-chain", "automation"],
    oneLine:
      "No AI, no fancy optimizer. Just wiring up the basics so people stop flying blind on inventory.",

    quickScan: {
      whatItIs:
        "A Power BI dashboard that classifies each material–country pair as green/yellow/red based on on-hand vs safety stock, refreshes automatically, and supports quick slicing by country/material/status.",
      whyItMatters:
        "The original workflow was manual, inconsistent, and reactive: open Excel, scroll, guess what’s scary, then respond. No shared definition of “healthy” vs “risky.”",
      payoff:
        "The team moved from screenshotting spreadsheets to speaking a shared language: “reds” and “yellows.” Faster triage, clearer leadership updates, less daily churn.",
    },

    sections: [
      {
        heading: "What this actually is",
        body: [
          "This is an Inventory Health Dashboard for a regional supply chain team in LATAM.",
          "Every day they get an export from an upstream analytics system (Incorta) with on-hand stock, safety stock, and basic metadata.",
          "Instead of manually filtering Excel and guessing where the problems are, this system turns that daily email into a Power BI dashboard with a traffic-light status per material and country.",
        ],
        bullets: [
          "Green: stock comfortably above safety stock",
          "Yellow: getting close",
          "Red: below safety stock (attention needed)",
        ],
      },
      {
        heading: "Why this needed to exist",
        body: [
          "The starting point was basic but real: planners were getting a report in their inbox every morning, opening it in Excel, scrolling until they spotted something scary, and reacting.",
          "There was no consistent definition of “healthy” vs “risky” stock, no portfolio-level view by country, and no quick way to explain exposure to leadership.",
          "This dashboard fixes that with the least drama: use the report they already have, automate the boring part, and give a single place to see what matters.",
        ],
      },
      {
        heading: "What actually worked",
        bullets: [
          "Traffic-light semantics made conversations simpler (shared language instead of raw-number debates).",
          "Automation chain removed a daily chore (email → SharePoint → scheduled refresh).",
          "One-page LATAM view changed the discussion (countries side-by-side, patterns visible).",
        ],
      },
      {
        heading: "Where it is still rough",
        bullets: [
          "Tied to a single upstream report: if the Incorta layout changes, things break (no schema control yet).",
          "Safety stock is treated as truth (doesn’t question calibration).",
          "No forward-looking overlay yet (no demand/lead time “how fast could green become red”).",
          "No formal alerting yet (visual is strong, but no “notify me when X becomes red”).",
        ],
      },
      {
        heading: "What I would do next",
        bullets: [
          "Add validation so upstream changes fail loudly (not silently wrong).",
          "Log ingestion history so refresh gaps are obvious.",
          "Start questioning safety stock with demand history and candidate recalibration.",
          "Add alerts + subscriptions (daily/weekly summaries, key SKU watches).",
        ],
      },
    ],

    technical: [
      {
        heading: "Technical details (plumbing)",
        bullets: [
          "Data source: daily Incorta export delivered by email",
          "Orchestration: Power Automate (email → SharePoint)",
          "Storage: SharePoint folder as landing zone",
          "BI layer: Power BI (Power Query clean/select/derive status; scheduled refresh)",
          "Core measures: StockGap = OnHand − SafetyStock; Status = green/yellow/red based on bands",
          "My role: status logic + thresholds, automation flow + folder structure, BI model + visuals, iteration based on real usage",
        ],
      },
    ],

    footerNote:
      "I can’t show real data, but the architecture and the decision language are the point.",
  },

  {
    slug: "chokepoint-frontier-model",
    title: "Choke Point: CoWoS/HBM Thesis Log",
    subtitle:
      "Tri-objective sim–opt model of the resilience–decarbonization trade-off at the CoWoS/HBM packaging chokepoint.",
    date: "2025-09",
    tags: ["thesis", "semiconductors", "research"],
    oneLine:
      "This is my long-game project: less a polished product, more a running log of building something honest and narrow.",

    quickScan: {
      whatItIs:
        "A tri-objective simulation–optimization model focused on the CoWoS/HBM advanced packaging chokepoint, under disruption scenarios, optimizing cost vs resilience vs carbon.",
      whyItMatters:
        "A lot of resilience literature ends with “just collaborate and share data.” For semiconductors, that’s often unrealistic. The thesis flips the assumption and asks what one enterprise can do with private levers.",
      payoff:
        "Instead of a generic framework, the goal is a numeric frontier: what trade-offs are possible, what levers move the frontier, and where resilience directly conflicts with decarbonization.",
    },

    sections: [
      {
        heading: "What this actually is (plain language)",
        body: [
          "I’m trying to answer a specific question: if the world keeps depending on Taiwan for advanced packaging, how do we buy resilience without dumping the cost onto the climate?",
          "More concretely: model HBM suppliers → CoWoS packaging sites → downstream demand, under disruptions (outages, spikes, logistics shocks), with three conflicting objectives: cost, resilience, and emissions.",
        ],
        bullets: [
          "Chokepoint focus: CoWoS / HBM advanced packaging",
          "Disruption layer: outages, demand spikes, combined shocks",
          "Objectives: total cost, service/recovery resilience, CO2e",
          "Key assumption: no magical cross-firm data sharing",
        ],
      },
      {
        heading: "Why I cared enough to go this deep",
        body: [
          "I kept reading the same ending: “firms should increase transparency and collaborate.” It sounds nice, but it often ignores the politics and incentives in semiconductors.",
          "So the thesis bakes in the disagreement: assume no magical coordination. Focus on levers a single firm can plausibly control at the chokepoint.",
        ],
      },
      {
        heading: "Where the thesis is right now",
        bullets: [
          "Motivation + context drafted (why CoWoS/HBM matters; why resilience vs decarb isn’t fake here).",
          "Literature map sketched (quant resilience modeling, decarb multi-objective, semiconductor-specific resilience).",
          "Research questions locked (frontier shape, lever sensitivity, conflict zones).",
          "Current phase: turning sets/variables/objectives into clean math instead of vibes.",
        ],
      },
      {
        heading: "How I’m planning to attack it",
        bullets: [
          "Define a minimal but realistic network around the chokepoint (regions, capacities, lead times, risks, emission factors).",
          "Optimization layer generates candidate designs along the Pareto frontier (regional split, safety capacity, mode mix).",
          "Simulation layer stress-tests designs under disruption scenarios (service loss, recovery time, cost, emissions).",
          "Carbon accounting: freight emissions via ton-km × mode factor; process emissions via energy/unit × grid intensity; optional carbon price scenarios.",
        ],
      },
      {
        heading: "What I expect to learn (and might be wrong about)",
        bullets: [
          "Resilience can improve surprisingly far with private levers (even without industry-wide coordination).",
          "There are zones where resilience and decarb align (cleaner + diversified sites).",
          "There are ugly zones where resilience means more cost and more emissions (especially with air freight under tight carbon pricing).",
        ],
      },
    ],

    technical: [
      {
        heading: "Technical appendix (for the nerds)",
        bullets: [
          "Problem type: tri-objective simulation–optimization at a single chokepoint in a multi-echelon supply chain",
          "Decision layer: regions r, time t, products p, modes m; decisions like x_pr (alloc shares), c_r (safety capacity), mode shares by route/time",
          "Objectives: expected total cost; resilience metric (service loss / recovery time); life-cycle CO2 (process + logistics)",
          "Solution idea: multi-objective heuristic (e.g., NSGA-style) to generate designs; simulation evaluates designs across scenarios",
          "Emissions: logistics via ton-km × mode EF; process via energy/unit × grid intensity; optional carbon price shifts the frontier",
        ],
      },
    ],
  },

  {
    slug: "cost-flight-simulator",
    title: "Manufacturing Cost Intelligence System",
    subtitle:
      "A flight simulator for manufacturing decisions that replaces gut-feel spreadsheets.",
    date: "2025-08",
    tags: ["manufacturing", "analytics", "streamlit"],
    oneLine:
      "Reality check: not an ERP replacement. But it’s already better than messy spreadsheets for multi-million-dollar decisions.",

    quickScan: {
      whatItIs:
        "An interactive what-if engine: change a cost driver (chips, labor, logistics) and see immediate portfolio P&L / margin impact, plus a short strategy brief that behaves like an analyst who actually read the numbers.",
      whyItMatters:
        "Old workflow: someone asks “fuel is up, what happens?” then an analyst opens giant spreadsheets, changes cells, hopes formulas don’t break, and gives a partial answer days later.",
      payoff:
        "Move a slider, see the impact, and have a strategy conversation instead of babysitting Excel. The system forces portfolio visibility and highlights hidden margin fragility.",
    },

    sections: [
      {
        heading: "What this actually is",
        body: [
          "Think of this as a flight simulator for manufacturing decisions.",
          "A manager can move a single slider (“+15% on semiconductors”, “−5% logistics”, “+5% labor”) and see how the portfolio responds: gross profit, risky products, and levers that matter.",
          "Then an AI writes a short strategy brief based on feasibility inputs instead of narrating charts.",
        ],
      },
      {
        heading: "Why I cared enough to build it",
        body: [
          "The real workflow was slow and fragile: multiple spreadsheets, formula landmines, and limited visibility beyond a couple of products.",
          "It felt more like damage control than decision-making.",
          "I wanted a system where you can change one driver, see portfolio impact immediately, and talk strategy like an adult.",
        ],
      },
      {
        heading: "What actually worked",
        bullets: [
          "The what-if engine: portfolio P&L simulation that makes impact visible in seconds.",
          "The AI strategist: had to be trained to avoid chart narration; feasibility signals made recommendations realistic.",
          "Portfolio health view: exposed high-volume products sitting on razor-thin margins (risk magnets).",
        ],
      },
      {
        heading: "What is still messy (being honest)",
        bullets: [
          "Static inputs (CSV-based). Great for controlled experiments, not production-grade without live integrations.",
          "Feasibility scores are subjective; real deployments would need structured ops input.",
          "Over-linear assumptions (no step-changes, discounts, or complex elasticity).",
          "Simplified geography; a serious version needs region/plant-level costs, taxes, tariffs, risk profiles.",
        ],
      },
      {
        heading: "What I would do next",
        bullets: [
          "Live data integration (FX, fuel, freight index).",
          "Multi-driver scenario stacking in one run (+10% steel, +5% labor, −3% logistics).",
          "Monte Carlo forecasting for distributions (best/worst/bands).",
          "Make AI interactive: compare interventions, ROI, implementation difficulty.",
        ],
      },
    ],

    technical: [
      {
        heading: "Technical details (plumbing)",
        bullets: [
          "Frontend: Streamlit",
          "Compute: Pandas simulation engine",
          "Visualization/export: Plotly + PDF export tooling",
          "AI: strategy brief driven by explicit inputs (including feasibility) + hard constraints on what not to say",
          "Architecture: core logic separated into /app/core; UI is just the face",
          "Validation: startup checks to fail fast (unit mismatches, duplicates) instead of silently wrong output",
        ],
      },
    ],
  },

  {
    slug: "border-fleet-optimizer",
    title: "Cross-Border Fleet Optimizer",
    subtitle:
      "A super-opinionated GPS for a tiny cross-border fleet, optimized for cost not just distance.",
    date: "2025-07",
    tags: ["logistics", "python", "optimization"],
    oneLine:
      "Reality check: not a full TMS. But it already plans better than a stressed human with Google Maps, a whiteboard, and vibes.",

    quickScan: {
      whatItIs:
        "A Python tool that plans multi-truck routes with demand and time windows, outputs a route plan and a map, and minimizes total cost (distance + driver time) rather than pure kilometers.",
      whyItMatters:
        "Border logistics is huge and weirdly low-tech. Humans are forced to do combinatorial planning manually, under stress, with poor cost visibility.",
      payoff:
        "Once cost + real travel times were wired in, the tool started making non-obvious but believable decisions (longer distance, cheaper total cost). That’s when it became a real tool.",
    },

    sections: [
      {
        heading: "What this actually is",
        body: [
          "You give it a depot, a set of cities, demand per city, and simple delivery windows.",
          "It outputs: which stops each truck visits, the order, rough arrival timing, and a map that makes the day obvious.",
          "It’s meant for the person planning routes with a whiteboard, Google Maps, and intuition.",
        ],
      },
      {
        heading: "Why I bothered to build it",
        body: [
          "Humans are bad at this class of problems: too many combinations, messy constraints, and tradeoffs between time, distance, and cost.",
          "I wanted to see if I could build something that plans better than a human while still being simple enough to trust.",
        ],
      },
      {
        heading: "What actually worked",
        bullets: [
          "Cost-based routing produced good non-obvious routes (not just shortest distance).",
          "Switching from straight-line distances to real road data changed everything.",
          "One-command scenario runs made testing fast (CSV in → plan out).",
          "Map output tells the story faster than any table.",
        ],
      },
      {
        heading: "What is still janky",
        bullets: [
          "Texas routes are real (OSRM). Mexico side still has approximation gaps depending on coverage.",
          "Cost model is simple (flat per-km + per-hour; no tolls, overtime, fuel differences).",
          "Time windows are hard constraints; no ‘least bad’ soft penalties yet.",
          "Setup is not dispatcher-friendly (Docker + OSRM + patience).",
        ],
      },
      {
        heading: "What I would do next",
        bullets: [
          "Full-region routing data for true cross-border realism.",
          "Richer cost model (overtime, tolls, country-specific fuel).",
          "Soft time-window penalties (late at a cost instead of solver failure).",
          "Simple web UI (upload CSV → run → map + report download).",
        ],
      },
    ],

    technical: [
      {
        heading: "Technical appendix (for the nerds)",
        bullets: [
          "Problem type: CVRPTW (Capacitated Vehicle Routing Problem with Time Windows)",
          "Language: Python",
          "Libraries: pandas (data), OR-Tools (routing), folium (maps), geopy (fallback distances)",
          "Routing: local OSRM in Docker for realistic travel times/distances; straight-line fallback when needed",
          "Objective: minimize total cost = distance × cost_per_km + time × cost_per_hour",
          "Design detail: routing logic separated so OSRM can be swapped without touching optimization core; timestamped outputs for traceability",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return WORK.map((p) => ({ slug: p.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = WORK.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="page">
      <div className="container-read">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <Link href="/work" className="pill">
            ← Work
          </Link>
          <div className="kicker">{project.date}</div>
        </div>

        <h1 className="page-title" style={{ marginBottom: 12 }}>
          {project.title}
        </h1>

        <p className="page-subtitle" style={{ marginBottom: 10 }}>
          {project.subtitle}
        </p>

        {/* Accent row UNDER subtitle (the thing you meant) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12, marginBottom: 18 }}>
          {project.tags.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>

        <p className="page-subtitle" style={{ marginBottom: 18 }}>
          {project.oneLine}
        </p>

        {/* Quick scan */}
        <div
          style={{
            borderTop: "1px solid var(--hair)",
            borderBottom: "1px solid var(--hair)",
            padding: "18px 0",
            margin: "18px 0 26px",
          }}
          aria-label="Quick scan"
        >
          <div className="kicker" style={{ marginBottom: 12 }}>
            Quick scan
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <div>
              <span className="emph">What it is</span>{" "}
              <span style={{ color: "rgba(21,21,21,0.82)" }}>{project.quickScan.whatItIs}</span>
            </div>
            <div>
              <span className="emph">Why it matters</span>{" "}
              <span style={{ color: "rgba(21,21,21,0.82)" }}>{project.quickScan.whyItMatters}</span>
            </div>
            <div>
              <span className="emph">Payoff</span>{" "}
              <span style={{ color: "rgba(21,21,21,0.82)" }}>{project.quickScan.payoff}</span>
            </div>
          </div>
        </div>

        <div className="prose">
          {project.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>

              {sec.body?.map((p) => (
                <p key={p}>{p}</p>
              ))}

              {sec.bullets ? (
                <ul>
                  {sec.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {project.technical?.length ? <hr /> : null}

          {project.technical?.map((t) => (
            <section key={t.heading}>
              <h2>{t.heading}</h2>
              <ul>
                {t.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}

          {project.footerNote ? (
            <>
              <hr />
              <p style={{ color: "rgba(21,21,21,0.82)" }}>{project.footerNote}</p>
            </>
          ) : null}

          <hr />
          <Link href="/work" className="nav-link">
            ← Back to Work
          </Link>
        </div>
      </div>
    </div>
  );
}
