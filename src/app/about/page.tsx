// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Benjamin Arce — AI systems engineer in Guadalajara, currently at TBM Carriers.",
};

const roles = [
  {
    when: "2026 — now",
    what: "AI Engineer",
    where: "TBM Carriers",
    note: "MCP servers and agent integration across the operating stack — operations, finance, HR, billing, planning.",
  },
  {
    when: "Nov 2025 — Jul 2026",
    what: "Supply Chain Data & BI Analyst, Internship",
    where: "Advanced Sterilization Products",
    note: "Freight, commercial, and logistics analytics across six-country LATAM operations.",
  },
  {
    when: "Feb 2024 — Aug 2025",
    what: "Logistics & Operations Analyst, Internship",
    where: "ROCA Logistics",
    note: "Carrier billing audits and weekly reporting, rebuilt to run on their own.",
  },
];

const toolkit = [
  {
    label: "AI",
    items:
      "MCP servers, Claude API, agent and tool integration, structured outputs, RAG, prompt engineering",
  },
  {
    label: "Data",
    items:
      "Amazon QuickSight, Power BI (DAX), Python, SQL, Power Query, ETL, Supabase, Next.js",
  },
  {
    label: "Systems",
    items:
      "SAP, ERP and accounting platforms, TMS, fleet telematics, SharePoint, Power Automate",
  },
];

export default function AboutPage() {
  return (
    <div className="page">
      <div className="container-read">
        <h1 className="page-title">About</h1>

        <p className="lede">
          I&rsquo;m Benjamin Arce. I build AI systems for companies that move
          physical things — trucks, freight, inventory — and for the finance
          teams that have to account for them.
        </p>

        <div className="prose">
          <p>
            Right now I&rsquo;m an AI Engineer at TBM Carriers, a logistics
            company. The work is an MCP server that exposes their enterprise
            platforms as one query surface, and then the harder half: getting
            that surface into the actual workflow of operations, finance, HR,
            billing, and planning. A connector nobody reaches for is just a
            well-typed API.
          </p>

          <p>
            Before that I spent nine months on a six-country LATAM supply chain
            team at Advanced Sterilization Products, where the most useful thing
            I did was reopen a freight KPI that had already been signed off as
            healthy. It was healthy in aggregate and failing on 57.8% of
            individual orders. Averages are where problems go to hide.
          </p>

          <p>
            The through-line is that I build tools that retire work rather than
            speed it up. Less manual assembly, fewer steps between a question
            and an answer, and fewer processes whose failure mode is producing a
            wrong number quietly. Half the bugs are still just me discovering
            the &ldquo;obvious&rdquo; assumption I never stated.
          </p>

          <p>
            This site is a working log, not a brochure. I write the honest
            version: what I built, what broke, why it broke, what I changed, and
            what I&rsquo;d do differently if I started again tomorrow.
          </p>

          <h2>Where I&rsquo;ve been</h2>
          <ul className="cv">
            {roles.map((r) => (
              <li key={r.where}>
                <span className="cv-when">{r.when}</span>
                <span className="cv-what">
                  <strong>{r.what}</strong>, {r.where}
                  <span className="cv-note">{r.note}</span>
                </span>
              </li>
            ))}
          </ul>

          <h2>Toolkit</h2>
          <ul className="cv">
            {toolkit.map((t) => (
              <li key={t.label}>
                <span className="cv-when">{t.label}</span>
                <span className="cv-what">{t.items}</span>
              </li>
            ))}
          </ul>

          <h2>Studying</h2>
          <p>
            B.S. Industrial and Systems Engineering at Universidad Autónoma de
            Guadalajara, finishing 2027, currently at a 9.7/10 GPA. Lean Six
            Sigma White Belt, and Vice President of the Industrial Engineering
            student club. Spanish native, English C2.
          </p>

          <h2>Currently</h2>
          <ul className="bullets">
            <li>
              Extending the MCP server at TBM Carriers past its first five
              platforms.
            </li>
            <li>
              Building VUX Truck, an English platform for drivers, through its
              internal pilot.
            </li>
            <li>
              Working toward a U.S. master&rsquo;s — tightening the story, the
              work, and the proof.
            </li>
            <li>Keeping this site honest: quick scan first, then the detail.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
