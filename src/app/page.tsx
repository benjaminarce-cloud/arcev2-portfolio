import Link from "next/link";

const selected = [
  {
    slug: "margin-forecasting-system",
    title: "Margin Forecasting System",
    hook: "Forecasts margin under inflation shocks with what-if drivers and uncertainty bounds.",
    meta: "stack: Python, Pandas, FastAPI, Next.js  •  scale: 10k–1M rows  •  result: pricing cycles days→minutes  •  time: 3 weeks",
    constraint: "Optimized for iteration speed over full ERP integration in v1.",
  },
];

const notes = [
  {
    slug: "spark-join-the-real-bottleneck",
    title: "Spark Join: The Real Bottleneck",
    summary: "A slow job that wasn’t compute-bound. Fix was skew + shuffle layout, not more executors.",
    meta: "2025-10-03  •  spark • performance • debugging",
  },
];

export default function HomePage() {
  return (
    <div className="py-12">
      <section>
        <h1 className="text-[40px] leading-[1.05] tracking-[-0.03em]">1
          Benjamin Arce
        </h1>
        <p className="mt-4 max-w-[70ch] text-[15px] leading-6 text-[color:var(--muted)]">
          Builds data products: pipelines, dashboards, models, and the glue between them.
        </p>
        <p className="mt-2 text-[12px] text-[color:var(--faint)] tabular">
          Status: open to internships • selective builds
        </p>
      </section>

      <div className="my-8 border-t hairline" />

      <section>
        <div className="flex items-end justify-between">
         <h2 className="text-[13px] uppercase tracking-[0.12em] text-[color:var(--faint)]">
          <Link
            href="/work"
            className="text-[12px] text-[color:var(--muted)] hover:text-[color:var(--text)]"
          >
            View all
          </Link>
        </div>

        <div className="mt-4 border-t hairline">
          {selected.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="group block border-b hairline py-6">
              <div className="text-[18px] tracking-[-0.01em]">{p.title}</div>
              <div className="mt-1 text-[13px] leading-5 text-[color:var(--muted)]">{p.hook}</div>
              <div className="mt-3 text-[12px] leading-5 text-[color:var(--faint)] tabular">{p.meta}</div>

              <div className="mt-3 hidden text-[12px] leading-5 text-[color:var(--muted)] group-hover:block group-focus-visible:block">
                <span className="text-[color:var(--faint)]">Constraint:</span> {p.constraint}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="my-8 border-t hairline" />

      <section>
        <div className="flex items-end justify-between">
          <h2 className="text-[18px] tracking-[-0.01em]">Latest Notes</h2>
          <Link
            href="/notes"
            className="text-[12px] text-[color:var(--muted)] hover:text-[color:var(--text)]"
          >
            View all
          </Link>
        </div>

        <div className="mt-4 border-t hairline">
          {notes.map((n) => (
            <Link key={n.slug} href={`/notes/${n.slug}`} className="block border-b hairline py-5">
              <div className="text-[15px]">{n.title}</div>
              <div className="mt-1 text-[13px] leading-5 text-[color:var(--muted)]">{n.summary}</div>
              <div className="mt-2 text-[12px] text-[color:var(--faint)] tabular">{n.meta}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
