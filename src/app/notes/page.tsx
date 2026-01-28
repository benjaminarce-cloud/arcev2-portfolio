import Link from "next/link";

const notes = [
  {
    slug: "spark-join-the-real-bottleneck",
    title: "Spark Join: The Real Bottleneck",
    summary: "A slow job that wasn’t compute-bound. Fix was skew + shuffle layout, not more executors.",
    meta: "2025-10-03  •  spark • performance • debugging",
  },
];

export default function NotesPage() {
  return (
    <div className="py-12">
      <h1 className="text-[28px] tracking-[-0.02em]">Notes</h1>
      <p className="mt-3 max-w-[70ch] text-[13px] leading-5 text-[color:var(--muted)]">
        Lab notes: decisions, bugs, benchmarks, and what changed.
      </p>

      <div className="mt-6 border-t hairline">
        {notes.map((n) => (
          <Link key={n.slug} href={`/notes/${n.slug}`} className="block border-b hairline py-6">
            <div className="text-[16px]">{n.title}</div>
            <div className="mt-1 text-[13px] leading-5 text-[color:var(--muted)]">{n.summary}</div>
            <div className="mt-2 text-[12px] text-[color:var(--faint)] tabular">{n.meta}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
