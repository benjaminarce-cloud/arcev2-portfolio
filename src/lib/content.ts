import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();

function readDir(dir: string) {
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

export type ProjectFrontmatter = {
  slug: string;
  title: string;
  hook: string;
  stack: string;
  scale: string;
  result: string;
  time: string;
  chips: string[];
  tags?: string[];
  featured?: boolean;
  constraint?: string;
};

export type NoteFrontmatter = {
  slug: string;
  title: string;
  summary: string;
  date: string; // YYYY-MM-DD
  tags: string[];
};

export function getProjects() {
  const dir = path.join(ROOT, "content/projects");
  const files = readDir(dir);

  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    return { frontmatter: data as ProjectFrontmatter, content };
  });

  return items.sort((a, b) => Number(!!b.frontmatter.featured) - Number(!!a.frontmatter.featured));
}

export function getProjectBySlug(slug: string) {
  const dir = path.join(ROOT, "content/projects");
  const file = path.join(dir, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as ProjectFrontmatter, content };
}

export function getNotes() {
  const dir = path.join(ROOT, "content/notes");
  const files = readDir(dir);

  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    return { frontmatter: data as NoteFrontmatter, content };
  });

  // newest first
  return items.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getNoteBySlug(slug: string) {
  const dir = path.join(ROOT, "content/notes");
  const file = path.join(dir, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as NoteFrontmatter, content };
}
