import path from "node:path";

export async function importProjectMdx(slug: string) {
  // IMPORTANT: this path is relative to project root
  const mod = await import(`../../content/projects/${slug}.mdx`);
  return mod.default;
}

export async function importNoteMdx(slug: string) {
  const mod = await import(`../../content/notes/${slug}.mdx`);
  return mod.default;
}
