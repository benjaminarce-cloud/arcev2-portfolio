// src/app/work/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type Params = Promise<{ slug: string }>;

function normalizeToText(input: unknown): string {
  if (!input) return "";

  // If it's already a string
  if (typeof input === "string") return input;

  // If it's an array (strings or mixed), join into blocks
  if (Array.isArray(input)) {
    return input
      .map((x) => (typeof x === "string" ? x : JSON.stringify(x)))
      .join("\n\n");
  }

  // If it's an object, try common keys
  if (typeof input === "object") {
    const obj = input as Record<string, unknown>;
    const maybe =
      obj.body ??
      obj.content ??
      obj.text ??
      obj.markdown ??
      obj.md ??
      obj.description ??
      "";
    return normalizeToText(maybe);
  }

  // Fallback
  return String(input);
}

function renderProse(raw: unknown) {
  const text = normalizeToText(raw).trim();
  if (!text) return null;

  // Split into paragraphs by blank lines
  const blocks = text.split(/\n\s*\n/g);

  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Simple "Heading:" detection for nicer structure
    // Example: "Technical appendix" or "What this is" etc.
    if (
      trimmed.length <= 80 &&
      !trimmed.includes(".") &&
      !trimmed.startsWith("*") &&
      !trimmed.startsWith("-") &&
      !trimmed.startsWith("•")
    ) {
      // IMPORTANT: no “for the nerds / plumbing” wording here.
      return <h2 key={i}>{trimmed}</h2>;
    }

    // Preserve lightweight bullets if you have lines that start with "-" or "•"
    const lines = trimmed.split("\n");
    const looksLikeList = lines.every((l) => /^\s*([-•*])\s+/.test(l));

    if (looksLikeList) {
      return (
        <ul key={i} className="bullets">
          {lines.map((l, j) => (
            <li key={j}>{l.replace(/^\s*([-•*])\s+/, "").trim()}</li>
          ))}
        </ul>
      );
    }

    return <p key={i}>{trimmed}</p>;
  });
}

export default async function WorkDetailPage({ params }: { params: Params }) {
  const { slug } = await params;

  const p = projects.find((x: any) => x.slug === slug);
  if (!p) return notFound();

  return (
    <div className="page">
      <div className="container-read">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
          <div className="kicker">Work</div>
          <Link className="nav-link" href="/work">
            Back
          </Link>
        </div>

        <h1 className="page-title" style={{ marginTop: 12 }}>
          {p.title}
        </h1>

        {p.desc ? <p className="page-subtitle">{p.desc}</p> : null}

        {/* Main body */}
        <div className="prose">
          {renderProse((p as any).body ?? (p as any).content ?? (p as any).detail)}
        </div>
      </div>
    </div>
  );
}

// Required for static export/building static pages
export function generateStaticParams() {
  return projects.map((p: any) => ({ slug: p.slug }));
}
