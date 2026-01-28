import { notFound } from "next/navigation";

const allowed = new Set(["margin-forecasting-system"]);

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (!allowed.has(params.slug)) return notFound();

  return (
    <div className="py-12">
      <h1 className="text-[36px] leading-[1.1] tracking-[-0.03em]">
        Margin Forecasting System
      </h1>
      <p className="mt-3 text-[15px] leading-6 text-[color:var(--muted)] max-w-[75ch]">
        Forecasts margin under inflation shocks with what-if drivers and uncertainty bounds.
      </p>

      <div className="my-8 border-t hairline" />

      <div className="prose-tux">
        <p>Next step: this becomes MDX-driven (Overview + collapsible Notes).</p>
      </div>
    </div>
  );
}
