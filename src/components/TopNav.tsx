import Link from "next/link";

type NavLink = { href: string; label: string };
type SocialLink = { href: string; label: string };

const nav: NavLink[] = [
  { href: "/work", label: "Work" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
];

const socials: SocialLink[] = [
  { href: "https://github.com/benjaminarce-cloud", label: "GitHub" },
  { href: "https://www.linkedin.com/in/YOUR_LINKEDIN/", label: "LinkedIn" },
  { href: "mailto:YOUR_EMAIL@domain.com", label: "Email" },
];

export function TopNav() {
  return (
    <header className="pt-10">
      <div className="flex items-baseline justify-between gap-6">
        {/* Left: name + sections */}
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="text-[13px] tracking-[0.08em] uppercase text-[color:var(--text)]"
          >
            Benjamin Arce
          </Link>

          <nav className="flex items-baseline gap-6">
            {nav.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                className="text-[13px] tracking-[0.02em] text-[color:var(--muted)] hover:text-[color:var(--text)]"
              >
                {x.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: socials */}
        <div className="flex items-baseline gap-6">
          {socials.map((x) => (
            <a
              key={x.href}
              href={x.href}
              target={x.href.startsWith("http") ? "_blank" : undefined}
              rel={x.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-[13px] tracking-[0.02em] text-[color:var(--muted)] hover:text-[color:var(--text)]"
            >
              {x.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t hairline" />
    </header>
  );
}
