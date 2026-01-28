import { notFound } from "next/navigation";

const allowed = new Set(["spark-join-the-real-bottleneck"]);

export default function NotePage({ params }: { params: { slug: string } }) {
  if (!allowed.has(params.slug)) return notFound();

  return (
    <div className="py-12">
      <h1 className="text-[28px] tracking-[-0.02em]">Spark Join: The Real Bottleneck</h1>
      <div className="mt-3 text-[12px] text-[color:var(--faint)] tabular">
        2025-10-03 • spark • performance • debugging
      </div>

      <div className="my-8 border-t hairline" />

      <div className="prose-tux">
        <p>Next step: MDX note body.</p>
      </div>
    </div>
  );
}
