// src/app/work/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <div className="page">
      <div className="container-read">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
          <Link className="nav-link" href="/work">
            Back
          </Link>
          <div className="row-meta">{p.date}</div>
        </div>

        <h1 className="page-title" style={{ marginTop: 14 }}>
          {p.title}
        </h1>

        {p.desc ? <p className="page-subtitle">{p.desc}</p> : null}

        <div className="prose" style={{ marginTop: 18 }}>
          {Array.isArray(p.body)
            ? p.body.map((para: string, i: number) => <p key={i}>{para}</p>)
            : p.body}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
