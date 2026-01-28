export default function ContactPage() {
  return (
    <div className="py-12">
      <h1 className="text-[28px] tracking-[-0.02em]">Contact</h1>
      <p className="mt-3 text-[13px] leading-5 text-[color:var(--muted)] max-w-[70ch]">
        Email is best. Messages should be short and specific.
      </p>

      <div className="mt-6 flex flex-col gap-2 text-[13px]">
        <a className="border hairline rounded-[14px] bg-[color:var(--surface)] px-4 py-3 inline-block w-fit"
           href="mailto:benjamin@example.com">
          Email
        </a>
        <a className="border hairline rounded-[14px] bg-[color:var(--surface)] px-4 py-3 inline-block w-fit"
           href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="border hairline rounded-[14px] bg-[color:var(--surface)] px-4 py-3 inline-block w-fit"
           href="https://linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <p className="mt-6 text-[12px] text-[color:var(--faint)] tabular">
        Availability: internships • selective builds
      </p>
    </div>
  );
}
