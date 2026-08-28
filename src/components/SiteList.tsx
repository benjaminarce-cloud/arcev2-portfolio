import type { Site } from "@/lib/sites";

function Body({ site }: { site: Site }) {
  return (
    <>
      <div className="row-main">
        <h3 className="row-title" data-title={site.name}>
          <span>{site.name}</span>
        </h3>
        <p className="row-desc">{site.blurb}</p>
      </div>
      <span className="row-meta">{site.meta}</span>
    </>
  );
}

/**
 * Live sites link out; ones still in build render as plain rows so they don't
 * look clickable and lead nowhere.
 */
export default function SiteList({
  sites,
  label,
}: {
  sites: Site[];
  label: string;
}) {
  return (
    <div className="list" aria-label={label}>
      {sites.map((site) =>
        site.url ? (
          <a
            key={site.name}
            className="row"
            href={site.url}
            target="_blank"
            rel="noreferrer"
          >
            <Body site={site} />
          </a>
        ) : (
          <div key={site.name} className="row row-static">
            <Body site={site} />
          </div>
        )
      )}
    </div>
  );
}
