import { Shell } from "@/components/Shell";

export default function ContactPage() {
  return (
    <Shell>
      <div className="py-14 md:py-16">
        <header>
          <div className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--faint)]">
            Contact
          </div>
          <h1 className="mt-3 text-[34px] md:text-[42px] leading-[1.02] tracking-[-0.04em]">
            One line. Three links.
          </h1>
          <p className="mt-4 max-w-[70ch] text-[14px] leading-7 text-[color:var(--muted)]">
            If something here is useful, reach out. Proof over pitch.
          </p>
        </header>

        <div className="my-10 border-t hairline" />

        <div className="space-y-3 text-[14px]">
          <a
            className="block w-fit text-[color:var(--muted)] hover:text-[color:var(--text)]"
            href="mailto:arceb3013@gmail.com"
          >
            Email
          </a>

          <a
            className="block w-fit text-[color:var(--muted)] hover:text-[color:var(--text)]"
            href="https://www.linkedin.com/in/arcebenjamin/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="block w-fit text-[color:var(--muted)] hover:text-[color:var(--text)]"
            href="https://github.com/benjaminarce-cloud"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <div className="pt-4 text-[12px] text-[color:var(--faint)]">
            Availability: internships (data / supply chain / systems). Mexico / remote.
          </div>
        </div>
      </div>
    </Shell>
  );
}
