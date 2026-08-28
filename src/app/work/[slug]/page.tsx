// src/app/work/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WORK, findWork } from "@/lib/work";

export function generateStaticParams() {
  return WORK.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findWork(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findWork(slug);
  if (!project) return notFound();

  return (
    <article className="page">
      <div className="container-read">
        <p className="kicker">
          {project.date} &nbsp;·&nbsp; {project.tags.join(" · ")}
        </p>

        <h1 className="page-title" style={{ marginTop: 16 }}>
          {project.title}
        </h1>

        <p className="lede">{project.subtitle}</p>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(19px, 2vw, 24px)",
            lineHeight: 1.4,
            color: "var(--ink)",
            margin: "clamp(28px, 3.6vw, 40px) 0 0",
            maxWidth: "42ch",
            textWrap: "pretty",
          }}
        >
          {project.oneLine}
        </p>

        <div className="scan" aria-label="Quick scan">
          <p>
            <span className="emph">What it is.</span> {project.quickScan.whatItIs}
          </p>
          <p>
            <span className="emph">Why it matters.</span>{" "}
            {project.quickScan.whyItMatters}
          </p>
          <p>
            <span className="emph">Payoff.</span> {project.quickScan.payoff}
          </p>
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
              <p>{project.footerNote}</p>
            </>
          ) : null}
        </div>

        <div className="folio" style={{ paddingBottom: 0 }}>
          <Link href="/work" className="pill">
            ← All work
          </Link>
          <span>{project.date}</span>
        </div>
      </div>
    </article>
  );
}
