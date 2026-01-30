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

        <div className="prose">
          <div className="kicker" style={{ marginTop: 18 }}>
            Notes from my brain
          </div>

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

          <div className="kicker" style={{ marginTop: 28 }}>
            Current focus
          </div>

          <ul style={{ margin: "12px 0 0", paddingLeft: 18 }}>
            <li>Building systems that hold up under scrutiny.</li>
            <li>Getting faster without getting sloppy.</li>
            <li>Training like a hybrid athlete: strength + engine.</li>
            <li>Learning on purpose (and too much).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
