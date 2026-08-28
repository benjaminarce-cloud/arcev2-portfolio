// src/lib/sites.ts
// Side work. Client sites, built to keep the visual side of the brain awake.

export type Site = {
  name: string;
  blurb: string;
  /** Absent while a site is still in build. */
  url?: string;
  /** Domain when live, status when not. */
  meta: string;
};

export const SITES: Site[] = [
  {
    name: "Mando Aguilar",
    blurb:
      "Portfolio for a San Diego filmmaker and photographer. Sports documentary, commercial work, and portraits on a Cloudinary-backed grid, built to put the footage first and the interface nowhere.",
    url: "https://mandoaguilar.com",
    meta: "mandoaguilar.com",
  },
  {
    name: "JUUN",
    blurb:
      "Site for a Mexican functional energy drink. Sugar-free, guaraná and L-theanine, and a product story that had to explain a formula without reading like a supplement label.",
    url: "https://juunwellness.com",
    meta: "juunwellness.com",
  },
  {
    name: "A second film portfolio",
    blurb:
      "In build. Same discipline as the first, different footage and a different argument about how it should be shown.",
    meta: "In build",
  },
  {
    name: "A DJ in Ibiza",
    blurb:
      "In build. The brief is closer to a poster than a website, which is the interesting part.",
    meta: "In build",
  },
];

export const LIVE_SITES = SITES.filter((s) => s.url);
