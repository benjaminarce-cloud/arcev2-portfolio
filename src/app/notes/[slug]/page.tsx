// src/app/notes/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NOTES, findNote } from "@/lib/notes";

export function generateStaticParams() {
  return NOTES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = findNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.desc ?? note.oneLine,
  };
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = findNote(slug);
  if (!note) return notFound();

  return (
    <article className="page">
      <div className="container-read">
        <p className="kicker">
          {note.date} &nbsp;·&nbsp; {note.tags.join(" · ")}
        </p>

        <h1 className="page-title" style={{ marginTop: 16 }}>
          {note.title}
        </h1>

        <p className="lede">{note.oneLine}</p>

        <div className="scan" aria-label="Quick scan">
          <p>
            <span className="emph">Context.</span> {note.quickScan.context}
          </p>
          <p>
            <span className="emph">What broke.</span> {note.quickScan.breakage}
          </p>
          <p>
            <span className="emph">Takeaway.</span> {note.quickScan.takeaway}
          </p>
        </div>

        <div className="prose">
          {note.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}

          {note.related ? (
            <>
              <hr />
              <p>
                Related: <Link href={note.related.href}>{note.related.label}</Link>
              </p>
            </>
          ) : null}
        </div>

        <div className="folio" style={{ paddingBottom: 0 }}>
          <Link href="/notes" className="pill">
            ← All notes
          </Link>
          <span>{note.date}</span>
        </div>
      </div>
    </article>
  );
}
