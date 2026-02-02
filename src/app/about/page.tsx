// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="page">
      <div className="container-read">
        <h1 className="page-title">
          About <span className="accent">/</span>
        </h1>

        <p className="page-subtitle">
          How I think. What I’m shipping{" "}
          <span className="accent" style={{ opacity: 0.75 }}>
            /
          </span>
        </p>

        <div className="prose">
          {/* Replace "Notes from my brain" bullets with the new text */}
          <div style={{ marginTop: 22 }}>
            <div className="kicker">About me</div>

            <p>
              I’m an industrial engineering student focused on data, optimization,
              systems, and continuous improvement. Right now I’m an intern on a
              LATAM supply chain team, where my job is to make processes cleaner
              through dashboards, automation, and small tools that reduce friction.
            </p>

            <p>
              My curiosity started with a Python fleet optimizer that cut waste and
              CO2 by turning routing into something you can actually reason about.
              Since then I’ve kept building across whatever layer matters: Python,
              SQL, Excel, Power BI, Power Automate, and the occasional website when
              someone needs something better than a PDF.
            </p>

            <p>
              If there’s a pattern here, it’s that I build tools that make people’s
              jobs easier: less manual work, less repetition, fewer steps between a
              question and an answer. Half the bugs are just me discovering the
              “obvious” assumption I never stated.
            </p>

            <p>
              This site is a working log, not a brochure. I write the honest
              version: what I built, what broke, why it broke, what I changed, and
              what I’d do differently if I restarted tomorrow.
            </p>
          </div>

          {/* Keep Current focus exactly as-is */}
          <div style={{ marginTop: 20 }}>
            <div className="kicker">Current focus</div>
            <ul className="bullets">
              <li>Building portfolio sites as a side job (and getting sharper every build).</li>
              <li>Shipping client work: filmmaker projects + an upcoming brand.</li>
              <li>My path to a U.S. master’s: tightening the story, the work, and the proof.</li>
              <li>First thesis: stuck in reading mode turning “topic fog” into an actual model.</li>
              <li>Keeping this site honest: quick scan first, then deep dives if you care.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
