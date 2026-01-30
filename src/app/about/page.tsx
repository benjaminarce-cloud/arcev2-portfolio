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
          <h2 className="kicker">Get to know me</h2>
          <p>
            I’m optimization-minded, allergic to fluff, and I like things that
            survive questions. I learn fast when the feedback loop is real.
          </p>

          <h2 className="kicker" style={{ marginTop: 22 }}>
            Current focus
          </h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
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
