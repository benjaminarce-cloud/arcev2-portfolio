import Link from "next/link";
import { notFound } from "next/navigation";

type NoteData = {
  title: string;
  date: string;
  tags: string[];
  content: string[];
};

const notes: Record<string, NoteData> = {
  "this-site": {
    title: "This site: turning a portfolio into something honest and alive",
    date: "Dec 27, 2025",
    tags: ["meta", "portfolio", "vercel"],
    content: [
      "Built this site on Next.js + Vercel, not as a glossy brochure, but as a place to be honest about projects, what broke, and what I'm learning.",
      "Big recurring confusion: Vercel vs GitHub vs my brain. More than once I was clicking 'Visit' on an old deployment and assuming the code hadn't updated, when in reality I was just on a stale URL.",
      "Ran into weird 'not reflecting' moments that ended up being MDX issues: a couple of characters and math-y formatting broke the content build, so Vercel silently rolled back. Learned to keep MDX clean and watch the build logs instead of assuming it's magic.",
      "Had to get comfortable with the 'projects as conversations' tone: these pages are not pitch decks. They're me talking through what I tried, what worked, what was ugly, and then giving a technical appendix for people who care about the plumbing.",
      "The Log you're reading now exists because I didn't want a dead portfolio. This is the running timeline of how the Cross-Border optimizer, the manufacturing system, the thesis, the dashboard, and this very site evolved.",
    ],
  },
  "latam-dashboard": {
    title: "LATAM Inventory Health Dashboard finally stops breaking",
    date: "Dec 05, 2025",
    tags: ["powerbi", "supply-chain", "automation"],
    content: [
      "Built a Power BI dashboard for the LATAM supply chain team that compares safety stock vs on-hand stock and classifies each material–country pair as green / yellow / red.",
      "Redid the Power BI model multiple times after the DAX logic turned into spaghetti. At one point, every new measure felt like a patch on top of another patch.",
      "Ran into a nasty issue where different Incorta reports used slightly different material codes, so the joins silently failed and comparisons made no sense. Had to design a 'family' mapping to reconcile codes with formats like ***-***-*** vs ***-**.",
      "The planning for the material-code mapping was not glamorous: lots of manual checking, pattern spotting, and making sure a single bad slash didn't break the lookup.",
      "Power Automate turned out to be surprisingly fragile. Small changes in conditions or dynamic content broke the flow that takes the daily Incorta email and pushes files into SharePoint. Debugging was just: edit, wait for the next run, hope it doesn't silently die.",
      "The payoff: the team now talks in terms of 'reds' and 'yellows' instead of screenshotting spreadsheets. That alone made the pain worth it.",
    ],
  },
  "thesis-chokepoint": {
    title: "Thesis: from 'I want to do semiconductors' to a real chokepoint model",
    date: "Nov 10, 2025",
    tags: ["thesis", "semiconductors", "research"],
    content: [
      "Locked in the CoWoS/HBM chokepoint as the core of the thesis and started turning frustration with the literature into a concrete tri-objective model.",
      "Spent a lot of time stuck at the 'topic fog' stage: I knew I wanted semiconductors + resilience + climate, but everything sounded either too generic or too impossible to execute as a student.",
      "Kept running into papers that ended with some version of 'firms should share more data and collaborate across the chain' as the big conclusion. It felt unrealistic for semiconductors and honestly lazy as a final recommendation.",
      "The turning point was deciding to bake that disagreement into the thesis: assume no magical cross-firm data sharing, and focus on what a single firm can control at the CoWoS/HBM stage.",
      "Started drafting the formal structure: sets, decision variables, tri-objective function (cost, resilience, carbon), and a simulation layer for disruption scenarios. The math itself is fine; the real curve has been understanding which modeling choices are honest vs just convenient.",
    ],
  },
  "cost-intelligence": {
    title: "Manufacturing Cost Intelligence System becomes a real thinking tool",
    date: "Jul 20, 2025",
    tags: ["manufacturing", "analytics", "streamlit"],
    content: [
      "Took the idea of 'flight simulator for manufacturing decisions' and pushed it far enough that you can actually feel portfolio-level impact in a slider move.",
      "Built the first version of the P&L simulator that ties together BOM data, cost drivers, and a simple demand model. Streamlit made it easy to iterate, but it was very tempting to keep adding sliders with no structure.",
      "Hit a wall when I mixed in too much logic directly into the UI. Refactored the whole thing so /app/core holds the real brain and Streamlit is just the face. That hurt for a day but made everything cleaner.",
      "Prompt engineering for the AI 'strategist' took several tries. Early versions just rephrased charts ('costs increased because inputs increased'). I had to explicitly feed feasibility scores and tell it what not to say to get something that sounded like a junior consultant instead of a narrator.",
      "Learned the hard way that static CSVs are both a blessing and a limitation: great for controlled experiments, bad if you pretend it's production-ready. Accepted that this version is a thinking tool, not an ERP replacement.",
    ],
  },
  "fleet-optimizer": {
    title: "Cross-Border Fleet Optimizer actually starts working",
    date: "Jun 15, 2025",
    tags: ["logistics", "python", "optimization"],
    content: [
      "First real 'systems' project: turning a whiteboard-style Laredo dispatch problem into a Python tool that plans better routes than I would by hand.",
      "Got the first version of the optimizer running with straight-line distances and basic capacity and time-window constraints. It worked on paper but felt fake for real logistics.",
      "Biggest early headache: wrestling with OR-Tools' routing model. I kept wiring callbacks wrong and ended up with routes that technically 'solved' but made no real-world sense.",
      "Hooked up a local OSRM container so Texas routes use real road travel times. That was a whole journey of Docker image pulls, port issues, and matching city coordinates so OSRM didn't just say 'no route'.",
      "First time the model chose a longer route in kilometers but cheaper in total cost (driver time + fuel) was the moment it stopped feeling like a school assignment and more like a tiny real tool.",
    ],
  },
};

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes[slug];

  if (!note) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="max-w-[720px] mx-auto px-8">
        {/* Back link */}
        <div className="pt-10 pb-16">
          <Link href="/notes" className="back-link inline-flex items-center gap-1.5">
            ← Back to Log
          </Link>
        </div>

        {/* Header */}
        <header className="pb-12 border-b border-[var(--hair)]">
          <p className="text-[14px] text-[var(--faint)] mb-2">
            {note.date}
          </p>
          <h1 className="text-[32px] font-semibold tracking-[-0.02em] text-[var(--text)] leading-[1.2]">
            {note.title}
          </h1>
          <p className="mt-4 text-[13px] text-[var(--faint)]">
            {note.tags.join(", ")}
          </p>
        </header>

        {/* Content */}
        <main className="pt-12 pb-32">
          {note.content.map((p, i) => (
            <p
              key={i}
              className="mb-6 text-[16px] leading-[1.8] text-[var(--muted)]"
            >
              {p}
            </p>
          ))}
        </main>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(notes).map((slug) => ({ slug }));
}
