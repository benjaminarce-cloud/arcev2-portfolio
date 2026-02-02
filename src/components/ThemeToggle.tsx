"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function SunIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A8.5 8.5 0 0 1 11.2 3a6.8 6.8 0 1 0 9.8 9.8z" />
    </svg>
  );
}

function applyTheme(t: Theme) {
  document.documentElement.dataset.theme = t;
  try {
    localStorage.setItem("theme", t);
  } catch {}
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Use saved preference, else system preference
    let saved: Theme | null = null;
    try {
      saved = (localStorage.getItem("theme") as Theme | null) ?? null;
    } catch {}

    const systemDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial: Theme = saved ?? (systemDark ? "dark" : "light");

    setTheme(initial);
    applyTheme(initial);
  }, []);

  function choose(t: Theme) {
    setTheme(t);
    applyTheme(t);
  }

  return (
    <div className="theme-toggle" data-theme={theme} role="group" aria-label="Theme">
      <span className="thumb" aria-hidden="true" />
      <button
        type="button"
        data-side="light"
        onClick={() => choose("light")}
        aria-label="Light theme"
        title="Light"
      >
        <SunIcon />
      </button>
      <button
        type="button"
        data-side="dark"
        onClick={() => choose("dark")}
        aria-label="Dark theme"
        title="Dark"
      >
        <MoonIcon />
      </button>
    </div>
  );
}
