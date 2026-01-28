export function Footer() {
  return (
    <footer className="mt-16 border-t hairline">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-2 px-4 py-8 text-[13px] text-[color:var(--muted)] sm:px-8">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
  <a href="mailto:benjamin@example.com">Email</a>
  <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
  <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
</div>
        <div className="text-[11px] text-[color:var(--faint)]">Proof over pitch.</div>
      </div>
    </footer>
  );
}
