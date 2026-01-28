import Link from "next/link";

export function Row({
  href,
  title,
  hook,
  meta,
  kicker,
}: {
  href: string;
  title: string;
  hook: string;
  meta: string;
  kicker?: string;
}) {
  return (
    <Link href={href} className="group block border-b hairline py-7">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="text-[20px] leading-[1.15] tracking-[-0.02em]">
            {title}
          </div>

          <div className="mt-2 text-[13px] leading-[1.6] text-[color:var(--muted)] max-w-[72ch]">
            {hook}
          </div>

          <div className="mt-3 font-mono text-[12px] text-[color:var(--faint)] tabular">
            {meta}
          </div>

          {kicker ? (
            <div className="mt-3 hidden md:block text-[12px] leading-6 text-[color:var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[color:var(--faint)]">constraint:</span>{" "}
              {kicker}
            </div>
          ) : null}
        </div>

        <div className="shrink-0 text-[12px] text-[color:var(--faint)] group-hover:text-[color:var(--accent)]">
          →
        </div>
      </div>
    </Link>
  );
}
