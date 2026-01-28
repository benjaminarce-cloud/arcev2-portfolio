import Link from "next/link";

const projects = [
  {
    slug: "margin-forecasting-system",
    title: "Margin Forecasting System",
    hook: "Forecasts margin under inflation shocks with what-if drivers and uncertainty bounds.",
    meta: "stack: Python, Pandas, FastAPI, Next.js  •  scale: 10k–1M rows  •  result: pricing cycles days→minutes  •  time: 3 weeks",
    constraint: "Optimized for iteration speed over full ERP integration in v1.",
  },
];

export default function WorkPage() {
  return (
    <div className="py-12">
      <h1 className="text-[28px] tracking-[-0.02em]">Work</h1>
      <p className="mt-3 max-w-[70ch] text-[13px] leading-5 text-[color:var(--muted)]">
        Editorial list. High-signal only. Details live inside each project.
      </p>

      <div className="mt-6 border-t hairline">
        {projects.map((p) => (
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
    </div>
  );
}
