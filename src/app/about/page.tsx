// src/app/about/page.tsx

export const metadata = {
  title: "About — Benjamin Arce",
  description: "Decisions, lessons, and what I’m building.",
};

export default function AboutPage() {
  return (
    <div className="page">
      <div className="container-read">
        <h1 className="page-title">
          About <span className="accent">/</span>
        </h1>

        <p className="page-subtitle">
          Decisions, lessons, and what I’m building <span className="accent">/</span>
        </p>

        <div style={{ marginTop: 18 }}>
          <div className="kicker">Notes from my brain</div>
          <ul style={{ margin: "12px 0 0", paddingLeft: 18 }}>
            <li>“Just trust me.” No.</li>
            <li>It’s not that deep (until it is).</li>
            <li>I’m awkward until I lock in.</li>
            <li>Pressure is fine. Confusion is not.</li>
            <li>Coffee runs are thinking time.</li>
            <li>Music stays on.</li>
            <li>I like learning too much.</li>
            <li>I can do anything.</li>
            <li>Peace, then output.</li>
          </ul>
        </div>

        <div style={{ marginTop: 26 }}>
          <div className="kicker">Current focus</div>
          <ul style={{ margin: "12px 0 0", paddingLeft: 18 }}>
            <li>Building portfolio sites as a side job (and getting sharper every build).</li>
            <li>Shipping client work: filmmaker projects + an upcoming Mexican product brand.</li>
            <li>My path to a U.S. master’s: tightening the story, the work, and the proof.</li>
            <li>First thesis: stuck in reading mode — turning “topic fog” into an actual model.</li>
            <li>Keeping this site honest: quick scan first, then deep dives if you care.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
