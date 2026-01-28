import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const PROJECTS_DIR = path.join(ROOT, "src/content/projects");
const NOTES_DIR = path.join(ROOT, "src/content/notes");

export type Project = {
  slug: string;
  title: string;
  hook: string;
  stack: string[];
  scale: string;
  result: string;
  time: string;
  kpis: string[];
  status: "shipped" | "in-progress" | "draft";
  featured?: boolean;
  content: string; // mdx body
};

export type Note = {
  slug: string;
  title: string;
  summary: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  content: string;
};

function readMdxDir(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const full = path.join(dir, file);
      const raw = fs.readFileSync(full, "utf8");
      const parsed = matter(raw);
      return { file, data: parsed.data, content: parsed.content };
    });
}

export function getProjects(): Project[] {
  const rows = readMdxDir(PROJECTS_DIR).map(({ data, content }) => ({
    slug: String(data.slug),
    title: String(data.title),
    hook: String(data.hook),
    stack: (data.stack ?? []) as string[],
    scale: String(data.scale),
    result: String(data.result),
    time: String(data.time),
    kpis: (data.kpis ?? []) as string[],
    status: String(data.status) as Project["status"],
    featured: Boolean(data.featured),
    content,
  }));

  // featured first, then alphabetical (or later we can add ordering)
  return rows.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.title.localeCompare(b.title));
}

export function getProject(slug: string): Project | null {
  return getProjects().find((p) => p.slug === slug) ?? null;
}

export function getNotes(): Note[] {
  const rows = readMdxDir(NOTES_DIR).map(({ data, content }) => ({
    slug: String(data.slug),
    title: String(data.title),
    summary: String(data.summary),
    date: String(data.date),
    tags: (data.tags ?? []) as string[],
    content,
  }));

  // newest first
  return rows.sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug: string): Note | null {
  return getNotes().find((n) => n.slug === slug) ?? null;
}
