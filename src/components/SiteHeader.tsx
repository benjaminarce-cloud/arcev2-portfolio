import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[rgba(14,15,16,0.68)] backdrop-blur">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
        <Link href="/" className="text-[14px] sm:text-[15px] tracking-[0.02em]">
          Benjamin Arce
        </Link>
        <nav className="flex items-center gap-4 sm:gap-5 text-[12px] sm:text-[13px] text-[color:var(--muted)]">
          <Link href="/work" className="hover:text-[color:var(--text)]">Work</Link>
          <Link href="/notes" className="hover:text-[color:var(--text)]">Notes</Link>
          <Link href="/contact" className="hover:text-[color:var(--text)]">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
