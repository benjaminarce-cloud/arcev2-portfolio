// src/lib/work.ts
// Single source of truth for the work index and its detail pages.

export type WorkProject = {
  slug: string;
  title: string;
  subtitle: string;
  /** Short line for the index. Falls back to `subtitle` when absent. */
  desc?: string;
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

export const WORK: WorkProject[] = [
  {
    slug: "enterprise-mcp-server",
    title: "An MCP Server That Turns Ten Systems Into One Question",
    subtitle:
      "Exposing a freight carrier's enterprise stack to Claude and ChatGPT as typed, auth-scoped tools under a single query surface.",
    desc: "Five enterprise platforms as one query surface. Cross-system lookups: three hours to fifteen seconds.",
    date: "Since 2026",
    tags: ["mcp", "claude", "integration", "logistics"],
    oneLine:
      "The company had ten systems and no way to ask them a single question. This is the layer that lets you.",

    quickScan: {
      whatItIs:
        "A production MCP server at TBM Carriers that exposes enterprise platforms (fleet maintenance, TMS, telematics, accounting, and CRM) to Claude and ChatGPT as typed, auth-scoped tools. Five are live; the goal is the whole stack.",
      whyItMatters:
        "Any question that crossed two systems was a human errand. Someone filed a request, someone else opened five separate UIs, and the answer arrived hours later, by which point the decision had usually been made without it.",
      payoff:
        "Cross-platform lookups that spanned five separate UIs went from about three hours to under fifteen seconds, and ops and finance staff now query live operational data themselves instead of queueing behind an analyst.",
    },

    sections: [
      {
        heading: "What this actually is",
        body: [
          "TBM Carriers is a logistics operator running the usual sprawl: a TMS for loads, telematics for the trucks, a maintenance system for the fleet, an accounting platform for the money, and a CRM for the customers. Each one is fine on its own. None of them talk.",
          "The CEO's framing was a second brain: one place to ask the company a question and get an answer drawn from every system at once, including the questions nobody thought to ask.",
          "The build is an MCP server. Each platform gets a set of typed tools with real auth scoping, so an assistant can read across the stack without anyone handing out standing credentials to five different systems.",
        ],
      },
      {
        heading: "The part that isn't the server",
        body: [
          "Standing up the connector was the tractable half. The harder half is integration into how people actually work (operations, finance, HR, billing, planning), because a query surface nobody reaches for is just a well-typed API.",
          "That means meeting each function where its questions already live, and being specific about which ones are worth asking a model at all.",
        ],
        bullets: [
          "Auth scoping per tool, so read access is granted deliberately rather than inherited",
          "Typed inputs and outputs, so the model fails loudly on a bad query instead of confidently inventing a plausible one",
          "One query surface across both Claude and ChatGPT, so the answer doesn't depend on which assistant someone happens to open",
        ],
      },
      {
        heading: "What I'd tell someone starting this",
        body: [
          "The temptation is to connect everything first and figure out the questions later. That produces a large, impressive, unused surface.",
          "The order that worked was the reverse: find the lookup that a person does by hand every week, make that one instant, then let the next tool be pulled in by an actual question rather than pushed in by a roadmap.",
        ],
      },
    ],

    footerNote:
      "Ongoing. The five platforms live today are the floor, not the target.",
  },
  {
    slug: "voxtruck",
    title: "VoxTruck",
    subtitle:
      "An English learning platform built for truck drivers, taught in the vocabulary of the job rather than the classroom.",
    desc: "English for drivers, taught in logistics context. Speech scoring and adaptive difficulty. In internal pilot.",
    date: "Since 2026",
    tags: ["product", "ml", "speech", "logistics"],
    oneLine:
      "Generic language apps teach you to order coffee. Drivers need to handle a dispatcher, a border officer, and a DOT inspection.",

    quickScan: {
      whatItIs:
        "A language platform that teaches drivers English inside the situations they actually hit (dispatch calls, border crossings, paperwork, inspections) with speech scoring and lesson difficulty that adapts to the individual driver.",
      whyItMatters:
        "For a cross-border carrier, a driver's English is an operational variable, not a personal enrichment goal. It shows up in delays, misread instructions, and inspections that go longer than they should.",
      payoff:
        "In internal pilot with TBM Carriers drivers. Too early for outcome numbers, and I'd rather say that than invent one.",
    },

    sections: [
      {
        heading: "What this actually is",
        body: [
          "VoxTruck is an English learning platform for professional drivers, built with TBM Carriers.",
          "The premise is that context is most of the value. A driver doesn't need a general A1-to-C1 ladder; they need to be fluent in the forty situations that make up their week, and confident enough to speak in them under pressure.",
          "So the content is logistics-native: the phrasing a dispatcher actually uses, the questions an officer actually asks, the documents that actually get handed across.",
        ],
      },
      {
        heading: "Where the machine learning does work",
        bullets: [
          "Speech scoring: the driver speaks, and the model scores pronunciation and fluency, so practice doesn't require a human on the other end",
          "Adaptive difficulty: the system tracks what an individual driver keeps missing and reshapes what it serves next, instead of marching everyone through the same sequence",
        ],
        body: [
          "Both exist for the same reason: a driver's schedule doesn't accommodate a fixed class. The learning has to fit into the gaps, and it has to be useful without a teacher present.",
        ],
      },
      {
        heading: "Honest status",
        body: [
          "Internal pilot with the company's own drivers. Contained on purpose. A language product with confident-sounding wrong feedback is worse than no product, so the scoring gets tested against real drivers before it gets tested against a market.",
        ],
      },
    ],

    footerNote: "In pilot. Numbers when there are numbers worth reporting.",
  },
  {
    slug: "autonomous-finance-pipeline",
    title: "Autonomous Finance Reporting Pipeline",
    subtitle:
      "A zero-touch pipeline that ingests accounting ledgers and five platform exports and writes a reconciled dataset, with schema drift caught rather than absorbed.",
    desc: "Ten chained-VLOOKUP workbooks retired. A six-hour weekly build compressed to twenty minutes.",
    date: "2026",
    tags: ["automation", "claude-api", "finance", "power-automate"],
    oneLine:
      "The old process worked right up until a column moved, and then it quietly produced a wrong number nobody checked.",

    quickScan: {
      whatItIs:
        "A pipeline built on Power Automate, the Claude API, and Power Query that ingests accounting ledgers and five platform exports, extracts and normalizes line items through structured-output model calls, and writes a reconciled dataset with schema-drift detection.",
      whyItMatters:
        "The reporting it replaced ran through ten chained-VLOOKUP workbooks. Its failure mode wasn't crashing. It was a shifted column silently corrupting totals that then went out unreviewed.",
      payoff:
        "A six-hour weekly build became twenty minutes, a 94% reduction, and the silent-failure path is now a loud one.",
    },

    sections: [
      {
        heading: "What this actually is",
        body: [
          "Finance was assembling a weekly picture by hand out of an accounting ledger and five separate platform exports, each with its own idea of how a line item should be shaped.",
          "The glue was ten workbooks of chained VLOOKUPs. That structure is fragile in a specific and dangerous way: it doesn't announce failure. If an upstream export gains a column, the lookups keep returning values, just the wrong ones.",
          "The pipeline replaces the glue. Exports land, structured-output model calls extract and normalize the line items into one schema, and the result is written as a reconciled dataset.",
        ],
      },
      {
        heading: "Why an LLM belongs here at all",
        body: [
          "Not for judgment. For shape.",
          "The variance across five exports isn't semantic, it's cosmetic: the same concept described five ways, renamed between versions, with inconsistent nesting. Writing deterministic parsers for all of it is possible and miserable, and every upstream change reopens the work.",
          "Structured outputs handle the normalization while keeping the result typed, which means it can be validated rather than trusted.",
        ],
      },
      {
        heading: "Schema drift is the actual feature",
        body: [
          "The speed is the headline, but the reason I'd defend this build is the drift detection.",
          "The old process was fast enough to survive and wrong often enough to matter. Catching the moment an upstream schema changes, and stopping loudly, is worth more than the five hours and forty minutes.",
        ],
      },
    ],
  },
  {
    slug: "latam-freight-rate-audit",
    title: "The Freight Rate That Passed and Shouldn't Have",
    subtitle:
      "A 2.13% aggregate freight rate, comfortably under a 3% target, was hiding a 57.8% per-order breach across 1,634 deliveries.",
    desc: "An already-signed-off KPI, reopened. $0.5M MXN in recoverable freight spend, reframed as an order-sizing problem.",
    date: "2026",
    tags: ["analysis", "supply-chain", "freight", "asp"],
    oneLine:
      "The metric was green. The metric was also an average, and averages are where problems go to hide.",

    quickScan: {
      whatItIs:
        "An audit of LATAM freight performance across six countries that took a KPI already signed off as healthy and disaggregated it down to the order level.",
      whyItMatters:
        "Aggregate freight-to-sales came in at 2.13% against a 3% target. That is a passing number, and passing numbers stop getting looked at. Underneath it, 57.8% of individual orders across 1,634 deliveries, against $275M MXN of revenue, were in breach.",
      payoff:
        "$0.5M MXN quantified as recoverable, traced to northern-Mexico shipments running freight-to-sales above 1,000%, and the whole thing reframed from a rate problem into an order-sizing problem.",
    },

    sections: [
      {
        heading: "What this actually is",
        body: [
          "The team measured freight health as freight cost over sales, rolled up across the region. At 2.13% against a 3% ceiling, there was nothing to discuss.",
          "But a regional average weights by revenue, which means large healthy orders can carry an arbitrary number of small catastrophic ones. Splitting the same data per order, the majority of deliveries were failing the same target the region was passing.",
          "The extreme tail was northern-Mexico shipments where freight-to-sales ran above 1,000%, freight costing more than ten times the value of what was on the truck.",
        ],
      },
      {
        heading: "The reframe",
        body: [
          "The instinct with a freight problem is to go negotiate rates. That would have been the wrong project.",
          "Nothing was wrong with the rates. What was wrong was the size of the orders being shipped against them. Small orders moving on the same lanes as large ones, each one paying a fixed cost the order value couldn't support.",
          "That makes it an order-sizing and consolidation question, owned by commercial and planning, not a procurement question owned by logistics. Getting that distinction right is most of what the analysis was for.",
        ],
      },
      {
        heading: "What I'd tell someone starting this",
        body: [
          "Be suspicious of any KPI that has been green long enough that nobody reads it anymore. Aggregation is not neutral. It is a choice about what you are willing to stop seeing.",
          "Also: the finding is only half the work. A number nobody owns doesn't get fixed, so the deliverable had to name whose problem it was.",
        ],
      },
    ],

    footerNote:
      "Advanced Sterilization Products, LATAM commercial and logistics analytics.",
  },
  {
    slug: "quicksight-analytics-layer",
    title: "Plain-Language Analytics Across Six Countries",
    subtitle:
      "An AI-assisted layer in Amazon QuickSight that turns business questions into dashboard visuals, on top of an automated suite that replaced the manual prep underneath it.",
    desc: "Ad-hoc turnaround from three days to under ten minutes, across six markets.",
    date: "2026",
    tags: ["quicksight", "bi", "automation", "asp"],
    oneLine:
      "Most BI work isn't building the chart. It's the four hours of prep per country before anyone can ask for one.",

    quickScan: {
      whatItIs:
        "An automated QuickSight suite covering LATAM freight spend, sales, demurrage, and target-vs-actual across six countries, plus an AI-assisted layer that converts plain-language business questions directly into dashboard visuals.",
      whyItMatters:
        "Every ad-hoc question entered a queue. Answering one meant four hours of manual preparation per country before the analysis even started, so most questions were never asked.",
      payoff:
        "Ad-hoc turnaround dropped from three days to under ten minutes across six countries, the manual prep was removed entirely, and the suite exposed the 3% freight-target breach at seller level.",
    },

    sections: [
      {
        heading: "What this actually is",
        body: [
          "Two layers, and the order matters.",
          "Underneath is the automated suite: freight spend, sales, demurrage, and target-vs-actual for six markets, refreshing without anyone assembling it. That replaced roughly four hours of manual prep per country.",
          "On top is the AI-assisted layer, which lets someone ask a question in plain language and get a dashboard visual back rather than filing a request.",
        ],
      },
      {
        heading: "Why the top layer only works because of the bottom one",
        body: [
          "Natural-language analytics is easy to demo and hard to trust, and the reason is almost never the language model. It's that it gets pointed at data nobody has cleaned.",
          "The automation wasn't a prerequisite I did first out of diligence. It's the thing that makes the question-asking layer safe. A plain-language query over a hand-assembled export inherits every inconsistency in that export and presents the result with total confidence.",
        ],
      },
      {
        heading: "The intake piece",
        body: [
          "A related automation handled the front door: an AI document-classification flow in Power Automate that routed incoming LATAM freight attachments to SharePoint by country and type, with bilingual replies.",
          "Unglamorous, and it removed about fifty triage actions a week that had been someone's job to do by hand.",
        ],
      },
    ],

    footerNote:
      "Advanced Sterilization Products, six-country LATAM operations.",
  },
  {
    slug: "llm-search-visibility-engine",
    title: "LLM Search Visibility Engine",
    subtitle:
      "Getting a live DTC brand cited by ChatGPT, from 0% to 36% on a 53-query benchmark.",
    desc: "Zero to 36% citation rate on a 53-query benchmark, with retrieval tracked rather than assumed.",
    date: "2025",
    tags: ["nextjs", "json-ld", "claude-api", "retrieval"],
    oneLine:
      "Search visibility used to mean ranking. Increasingly it means being the source a model reaches for, which is a different problem.",

    quickScan: {
      whatItIs:
        "A visibility system for a live direct-to-consumer brand, built on Next.js with JSON-LD entity schema, an llms.txt surface, canary-ID retrieval tracking, and a seven-article NIH-referenced content layer.",
      whyItMatters:
        "The brand was invisible to assistant-mediated search. On a 53-query benchmark it was cited 0% of the time. Not ranked low, absent.",
      payoff:
        "Citation rate went from 0% to 36% on the same benchmark, and the canary IDs made it possible to prove retrieval rather than infer it from traffic.",
    },

    sections: [
      {
        heading: "What this actually is",
        body: [
          "The question was simple to state and awkward to answer: when someone asks an assistant about this product category, does this brand come back?",
          "Step one was making that measurable: a fixed 53-query benchmark, run repeatedly, so the answer was a rate and not an anecdote. The starting rate was zero.",
        ],
      },
      {
        heading: "The pieces",
        bullets: [
          "JSON-LD entity schema, so the brand is a described entity rather than a page of prose a model has to infer structure from",
          "An llms.txt surface stating plainly what the brand is and what it can be cited for",
          "A seven-article content layer with NIH references, because unsourced claims in this category are correctly ignored",
          "Canary IDs, distinctive retrievable strings, so a citation could be traced back to the exact document that produced it",
        ],
      },
      {
        heading: "Why the canary IDs were the interesting part",
        body: [
          "Everything else in this build is a hypothesis about what makes a source citable. Without a way to attribute a citation to a specific document, you're optimizing on a number that moves for reasons you can't see.",
          "The canaries turned it into something closer to an experiment: change one layer, re-run the benchmark, and know which document the model actually pulled from.",
        ],
      },
    ],
  },
  {
    slug: "inbox-inventory-radar",
    title: "Inventory Health Dashboard for a LATAM Supply Chain Team",
    subtitle:
      "Turning a daily Incorta email into a live traffic-light view of safety stock vs actual stock across LATAM.",
    date: "Oct 2025",
    tags: ["powerbi", "supply-chain", "automation"],
    oneLine:
      "No AI, no fancy optimizer. Just wiring up the basics so people stop flying blind on inventory.",

    quickScan: {
      whatItIs:
        "A Power BI dashboard that classifies each material-country pair as green/yellow/red based on on-hand vs safety stock, refreshes automatically, and supports quick slicing by country/material/status.",
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
      "Tri-objective sim-opt model of the resilience-decarbonization trade-off at the CoWoS/HBM packaging chokepoint.",
    date: "Sep 2025",
    tags: ["thesis", "semiconductors", "research"],
    oneLine:
      "This is my long-game project: less a polished product, more a running log of building something honest and narrow.",

    quickScan: {
      whatItIs:
        "A tri-objective simulation-optimization model focused on the CoWoS/HBM advanced packaging chokepoint, under disruption scenarios, optimizing cost vs resilience vs carbon.",
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
        heading: "Technical appendix",
        bullets: [
          "Problem type: tri-objective simulation-optimization at a single chokepoint in a multi-echelon supply chain",
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
    date: "Aug 2025",
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
    date: "Jul 2025",
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
        heading: "Technical appendix",
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
  },];

export function findWork(slug: string) {
  return WORK.find((p) => p.slug === slug);
}
