import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [require("remark-gfm")],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
