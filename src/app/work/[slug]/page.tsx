import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectData = {
  title: string;
  tagline: string;
  date: string;
  reality: string;
  what: string[];
  why: string[];
  worked: { title: string; text: string }[];
  rough: { title: string; text: string }[];
  next: string[];
  stack: string[];
};

const projects: Record<string, ProjectData> = {
  "inbox-inventory-radar": {
    title: "Inbox → Inventory Radar",
    tagline: "Turning a daily Incorta email into a live traffic-light view of safety stock vs actual stock across LATAM.",
    date: "2025-10",
    reality: "No AI, no fancy optimizer. Just wiring up the basics so people stop flying blind on inventory.",
    what: [
      "Every day, the team gets an export from Incorta with on-hand stock, safety stock levels, and metadata by material and country.",
      "Instead of manually opening that file and filtering it a hundred ways, this project turns the daily email into a Power BI dashboard with traffic-light status: green (comfortable), yellow (getting close), red (below safety stock).",
      "Slice by country, material code, or status. Answer 'Where are we exposed right now?' in seconds."
    ],
    why: [
      "Planners were getting a report in their inbox every morning, opening it in Excel, scrolling until they spotted something scary, and then reacting.",
      "No consistent definition of 'healthy' vs 'risky' stock. No portfolio-level view. A lot of 'let me check and get back to you.'",
      "This dashboard uses the report they already have, automates the boring part, and gives them one place to see what matters."
    ],
    worked: [
      { title: "Traffic-light logic made conversations simpler", text: "Instead of debating raw numbers, people started talking in a shared language: 'How many reds in Country X?' The thresholds are simple, but having them codified turned vague concerns into concrete questions." },
      { title: "Automation chain removed a daily chore", text: "Incorta report arrives → Power Automate detects attachment → drops into SharePoint → Power BI refreshes on schedule. Nobody downloads, renames, or remembers to refresh." },
      { title: "One-page LATAM view changed the discussion", text: "Before, each country was its own universe. Now you see all countries side by side, compare reds and yellows, spot patterns like a material chronically understocked everywhere." }
    ],
    rough: [
      { title: "Tied to a single upstream report", text: "If Incorta layout changes, everything breaks. No robust schema validation yet." },
      { title: "Safety stock taken as given", text: "Dashboard doesn't question whether those levels are well calibrated—probably where a lot of value is hiding." },
      { title: "No forward-looking view", text: "Everything is 'as of today.' No demand forecast overlay, no lead time view, no estimate of how fast green becomes red." },
      { title: "No alerting yet", text: "Visual is strong, but no automated 'email me when a red appears in these key SKUs.'" }
    ],
    next: [
      "Add validation so upstream file changes fail loudly instead of silently giving wrong numbers.",
      "Pull in demand history and recompute candidate safety stock levels.",
      "Let users subscribe to materials/countries and get daily/weekly summaries."
    ],
    stack: ["Power BI", "Power Automate", "SharePoint", "Incorta (upstream)"]
  },

  "chokepoint-frontier-model": {
    title: "Chokepoint Frontier Model",
    tagline: "Tri-objective sim–opt model of the resilience–decarbonization trade-off at the CoWoS/HBM packaging chokepoint.",
    date: "2025-09",
    reality: "This is my 'long game' project. Less a polished product, more a running log of making sense of one very narrow, very important chokepoint in the semiconductor supply chain.",
    what: [
      "Trying to answer: If the world keeps depending on Taiwan for advanced packaging, how do we make the supply chain more resilient without dumping cost onto the climate?",
      "Building a tri-objective simulation–optimization model for CoWoS/HBM advanced packaging under disruptions, with three objectives in conflict: total cost, resilience (service + recovery time), life-cycle carbon emissions.",
      "The goal is not 'another generic resilience framework' but a tool that shows, in numbers, what trade-offs are possible when you don't assume all firms share data."
    ],
    why: [
      "Most semiconductor resilience papers end with 'firms should increase transparency, share data, and collaborate.' Sounds nice. Also sounds like something that will almost never happen when advanced chips are strategic technologies and export controls are normal.",
      "Flipped the question: Assume no magical cross-firm data sharing. What can a single enterprise still do, at the CoWoS/HBM stage, to buy resilience without blowing up cost and carbon?",
      "This thesis is my attempt to answer that honestly about the politics, not just the math."
    ],
    worked: [
      { title: "Motivation & context drafted", text: "Introduction on semis as 'invisible infrastructure,' why CoWoS/HBM is a chokepoint, why resilience vs decarb isn't a fake trade-off." },
      { title: "Literature map sketched", text: "Three pillars: quantitative resilience modeling (Ivanov, Hosseini, Klos), decarbonization + multi-objective optimization, semiconductor-specific resilience (Ramírez & Le, CSET, Wu)." },
      { title: "Research questions locked", text: "What does the cost–resilience–carbon Pareto frontier look like? Which levers move you along that frontier most? Where do resilience gains directly clash with decarb goals?" }
    ],
    rough: [
      { title: "Still early stage", text: "Currently in 'turn this into a clean model' phase: formalizing sets, decisions, and objectives in math instead of vibes." },
      { title: "Data assumptions untested", text: "Many emission factors and capacity numbers are placeholder estimates pending better sources." }
    ],
    next: [
      "Formalize the decision layer: regional capacity split, safety capacity, transport mode mix.",
      "Build Monte Carlo simulation layer for disruption scenarios.",
      "Map candidate designs into cost–resilience–carbon space."
    ],
    stack: ["Python", "NumPy", "NSGA-II/III", "Discrete-event simulation", "LaTeX"]
  },

  "cost-flight-simulator": {
    title: "Cost Flight Simulator",
    tagline: "A 'flight simulator' for manufacturing decisions that replaces gut-feel spreadsheets.",
    date: "2025-08",
    reality: "This will not replace an ERP. But it's already better than the messy spreadsheets most teams use to make multi-million-dollar decisions.",
    what: [
      "An interactive dashboard where a manager can say 'Semiconductor costs go up 15%' or 'Logistics costs drop 5%' and the system answers: How does that hit total gross profit? Which products are still safe? Which ones just became a problem?",
      "Built for CFO, COO, or Operations Manager who live in questions like 'What happens to our portfolio if input X changes?' and 'Where are we secretly losing money?'",
      "Turns those questions into numbers in seconds and hands them to an AI that writes a strategic briefing instead of leaving you alone with charts."
    ],
    why: [
      "Before this, the workflow was: someone says 'fuel is going up, what does that mean?' An analyst opens three giant spreadsheets, changes a few cells, hopes formulas don't break, gives a rough answer for one or two products.",
      "Slow, fragile, reactive. More like damage control than decision-making.",
      "Wanted something where you move a slider, see portfolio-level impact immediately, and have a decent strategy conversation instead of babysitting Excel."
    ],
    worked: [
      { title: "What-if engine", text: "Moving a slider like '+15% on semiconductors' and watching annual impact ripple through the whole portfolio in real time. Used to take days of manual work. Now it's a single run." },
      { title: "AI strategist", text: "Not just ChatGPT stapled onto a dashboard. In a semiconductor shock test, it flagged chips as the immediate pain point but recommended focusing on internal machine-time optimization as the highest-leverage move, using Feasibility scores to justify why that was more realistic." },
      { title: "Portfolio health view", text: "The 'Stars' vs 'At-Risk' view showed some high-volume 'successful' products were living on razor-thin margins—huge risk magnets when any cost driver moves. Now highlighted in one screen." }
    ],
    rough: [
      { title: "Static input data", text: "All costs live in CSV files. Needs live APIs for commodity prices, FX rates, maybe a freight index." },
      { title: "Subjective Feasibility scores", text: "Currently my judgment call. Real deployment needs structured input from operations workshops." },
      { title: "Over-linear world", text: "10% cost increase → 10% impact. No volume discounts, step changes, or demand elasticity modeling." },
      { title: "Simplified geography", text: "Acts like everything happens in one region. Needs per-plant costs, taxes, tariffs, risk profiles." }
    ],
    next: [
      "Live data integration: fuel prices, currency rates, logistics index.",
      "Multi-driver scenarios: stack shocks in one run.",
      "Monte-Carlo forecasting: volatility ranges → distribution of outcomes.",
      "Interactive AI: turn static report into a conversation."
    ],
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "OpenAI API", "FPDF2"]
  },

  "border-fleet-optimizer": {
    title: "Border Fleet Optimizer",
    tagline: "A super-opinionated GPS for a tiny cross-border fleet, optimized for cost not just distance.",
    date: "2025-07",
    reality: "This will not replace a full TMS. But it already plans better than a stressed human with Google Maps, a whiteboard, and vibes.",
    what: [
      "Give it a depot in Laredo, Texas, a set of cities in the US and Mexico, how many kilograms each needs, and delivery windows.",
      "It spits out a plan for five trucks: which cities each visits, in what order, when it arrives, and a map that makes the whole day visually obvious.",
      "Meant for the person who currently plans routes with a whiteboard, Google Maps, and intuition."
    ],
    why: [
      "Grew up near the border. Logistics there is huge and weirdly low-tech.",
      "Dispatchers juggle customs, drivers, last-minute changes, but plan routes by hand with almost no help thinking about cost beyond 'shortest distance.'",
      "Exactly the kind of problem humans are bad at: five trucks, ten cities, different demands and time windows, messy trade-off between distance, time, and cost."
    ],
    worked: [
      { title: "Routes were non-obvious in a good way", text: "Once I wired in cost model (fuel + driver wages), optimizer chose routes longer in kilometers but cheaper overall because they used faster highways and less driver time. That's when it stopped feeling like a school project." },
      { title: "Real road data changed everything", text: "Started with straight-line distances—looked pretty but lied. Hooking in OSRM for real travel times made it something you could believe." },
      { title: "One-command workflow", text: "Moving from interactive CLI to a single scenario_input.csv plus one command made it easy to test lots of scenarios." },
      { title: "Map output tells the story", text: "Folium map with each truck color-coded instantly shows whether load split makes sense. You can literally see when one truck is doing too much." }
    ],
    rough: [
      { title: "Texas is real; Mexico is a hack", text: "OSRM runs on Texas map file. Inside Texas you get real distances. Cross into Mexico, falls back to straight-line approximations." },
      { title: "Simple cost model", text: "Flat cost per km, flat cost per hour. No overtime, toll roads, or fuel price differences across countries." },
      { title: "Time windows are all-or-nothing", text: "Impossible window = solver fails. Real planner would say 'we're one hour late, we'll call them.' Model doesn't understand 'least bad' yet." },
      { title: "Setup not dispatcher-friendly", text: "Requires Docker, OSRM, patience. No chance a stressed dispatcher is doing that at 6:30 AM." }
    ],
    next: [
      "Map data for all North America so US–Mexico traffic uses real roads on both sides.",
      "Richer cost model: overtime wages, different fuel costs per country, toll road penalties.",
      "Soft time-window penalties: break a window at a cost instead of failing.",
      "Simple web UI: upload CSV, hit Run, see plan and map, download report."
    ],
    stack: ["Python", "OR-Tools", "OSRM", "Folium", "Pandas", "Docker"]
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  
  if (!project) {
    notFound();
  }

  return (
    <div style={{ minHeight: "100vh", padding: "0 64px", maxWidth: 900, margin: "0 auto" }}>
      {/* Back link */}
      <div style={{ paddingTop: 48, paddingBottom: 48 }}>
        <Link 
          href="/" 
          style={{ 
            fontSize: 13, 
            letterSpacing: "0.08em", 
            textTransform: "uppercase",
            color: "var(--muted)"
          }}
        >
          ← Back
        </Link>
      </div>

      {/* Header */}
      <header style={{ paddingBottom: 48, borderBottom: "1px solid var(--hair)" }}>
        <h1 style={{ 
          fontFamily: "var(--font-serif)", 
          fontStyle: "italic",
          fontSize: 40, 
          lineHeight: 1.15, 
          letterSpacing: "-0.02em",
          color: "var(--text)",
          margin: 0
        }}>
          {project.title}
        </h1>
        <p style={{ 
          marginTop: 16, 
          fontSize: 17, 
          lineHeight: 1.6, 
          color: "var(--muted)",
          maxWidth: "60ch"
        }}>
          {project.tagline}
        </p>
        <p style={{ 
          marginTop: 12, 
          fontSize: 14, 
          fontStyle: "italic",
          color: "var(--faint)"
        }}>
          {project.reality}
        </p>
        <p style={{ 
          marginTop: 16, 
          fontSize: 13, 
          fontVariantNumeric: "tabular-nums",
          color: "var(--faint)"
        }}>
          {project.date}
        </p>
      </header>

      {/* Content */}
      <main style={{ paddingTop: 48, paddingBottom: 96 }}>
        <Section title="What this is">
          {project.what.map((p, i) => (
            <p key={i} style={{ marginBottom: 16, fontSize: 15, lineHeight: 1.7, color: "var(--muted)", maxWidth: "60ch" }}>
              {p}
            </p>
          ))}
        </Section>

        <Section title="Why it needed to exist">
          {project.why.map((p, i) => (
            <p key={i} style={{ marginBottom: 16, fontSize: 15, lineHeight: 1.7, color: "var(--muted)", maxWidth: "60ch" }}>
              {p}
            </p>
          ))}
        </Section>

        <Section title="What worked">
          {project.worked.map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 15, fontWeight: 500, color: "var(--text)", marginBottom: 6 }}>
                {item.title}
              </h4>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)", maxWidth: "60ch" }}>
                {item.text}
              </p>
            </div>
          ))}
        </Section>

        <Section title="What's still rough">
          {project.rough.map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 15, fontWeight: 500, color: "var(--text)", marginBottom: 6 }}>
                {item.title}
              </h4>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)", maxWidth: "60ch" }}>
                {item.text}
              </p>
            </div>
          ))}
        </Section>

        <Section title="What I'd do next">
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {project.next.map((item, i) => (
              <li key={i} style={{ marginBottom: 10, fontSize: 15, lineHeight: 1.6, color: "var(--muted)", maxWidth: "60ch" }}>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Stack">
          <p style={{ fontSize: 15, color: "var(--muted)" }}>
            {project.stack.join(" · ")}
          </p>
        </Section>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ 
        fontSize: 11, 
        letterSpacing: "0.14em", 
        textTransform: "uppercase",
        color: "var(--faint)",
        marginBottom: 16
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}
