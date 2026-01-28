import Link from "next/link";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-10">
          {/* Main stage */}
          <main className="col-span-12 md:col-span-8">
            {children}
          </main>

          {/* Right rail (desktop) */}
          <aside className="hidden md:block md:col-span-4">
            <div className="sticky top-10">
              <div className="border-l hairline pl-6">
                <div className="mono text-[11px] tracking-[0.18em] text-[color:var(--faint)]">
                  NAV
                </div>

                <nav className="mt-6 flex flex-col gap-5">
                  <Link className="display text-[22px] leading-[1.1] hover:no-underline" href="/work">
                    Work
                  </Link>
                  <Link className="display text-[22px] leading-[1.1] hover:no-underline" href="/notes">
                    Notes
                  </Link>
                  <Link className="display text-[22px] leading-[1.1] hover:no-underline" href="/contact">
                    Contact
                  </Link>
                </nav>

                <div className="mt-10 border-t hairline pt-8">
                  <div className="mono text-[11px] tracking-[0.18em] text-[color:var(--faint)]">
                    STATUS
                  </div>
                  <div className="mt-3 text-[12px] leading-5 text-[color:var(--muted)]">
                    Open to internships. Selective builds.
                  </div>
                </div>

                <div className="mt-10 border-t hairline pt-8">
                  <div className="mono text-[11px] tracking-[0.18em] text-[color:var(--faint)]">
                    LINKS
                  </div>
                  <div className="mt-4 flex flex-col gap-3 text-[12px] text-[color:var(--muted)]">
                    <a href="mailto:arceb3013@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/arcebenjamin/" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                    <a href="https://github.com/benjaminarce-cloud" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="mt-10 border-t hairline pt-8 text-[11px] text-[color:var(--faint)] mono tabular">
                  © {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
