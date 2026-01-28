import Link from "next/link";
import { Shell } from "@/components/Shell";

type NoteItem = {
  slug: string;
  title: string;
  summary: string;
  meta: string;
};

const notes: NoteItem[] = [
  {
    slug: "spark-join-the-real-bottleneck",
    title: "Spark Join: The Real Bottleneck",
    summary:
      "A slow job that wasn’t compute-bound. Fix was skew + shuffle layout, not more executors.",
    meta: "2025-10-03 • spark • performance • debugging",
  },
];

export default function NotesPage() {
  return (
    <Shell>
      <div className="py-14 md:py-16">
        <header>
          <div className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]">
            Notes
          </div>
          <h1 className="mt-3 text-[34px] md:text-[42px] leading-[1.02] tracking-[-0.04em]">
            Lab notes, not a blog.
          </h1>
          <p className="mt-4 max-w-[70ch] text-[14px] leading-7 text-[color:var(--muted)]">
            Short, scannable, and specific. Mostly failures and fixes.
          </p>
        </header>

        <div className="my-10 border-t hairline" />

        <section className="border-t hairline">
          {notes.map((n) => (
            <Link
              key={n.slug}
              href={`/notes/${n.slug}`}
              className="group block border-b hairline py-6"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-[16px] tracking-[-0.01em]">{n.title}</div>
                  <div className="mt-2 text-[13px] leading-6 text-[color:var(--muted)] max-w-[72ch]">
                    {n.summary}
                  </div>
                  <div className="mt-2 font-mono text-[12px] text-[color:var(--faint)] tabular">
                    {n.meta}
                  </div>
                </div>

                <div className="shrink-0 text-[12px] text-[color:var(--faint)] group-hover:text-[color:var(--accent)]">
                  →
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Shell>
  );
}
