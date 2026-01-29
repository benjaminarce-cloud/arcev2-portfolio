import Link from "next/link";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto w-full max-w-[1320px] px-8 md:px-14">
        {/* Keep a subtle top rail like A24 */}
        <div className="pt-10 md:pt-14">
          <div className="flex items-center justify-between">
            <div className="mono text-[11px] tracking-[0.22em] text-[color:var(--faint)]">
              BENJAMIN ARCE
            </div>
            <div className="hidden sm:flex items-center gap-6 mono text-[11px] tracking-[0.22em] text-[color:var(--faint)]">
              <Link href="/work" className="hover:text-[color:var(--text)]">WORK</Link>
              <Link href="/notes" className="hover:text-[color:var(--text)]">NOTES</Link>
              <Link href="/contact" className="hover:text-[color:var(--text)]">CONTACT</Link>
            </div>
          </div>

          <div className="mt-6 border-t hairline" />
        </div>

        {/* Stage */}
        <main className="pb-24 md:pb-32">{children}</main>
      </div>
    </div>
  );
}
