const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    domains: [
      "randomuser.me",
      "img.youtube.com",
      "lifehacking.co.kr",
      "cdn.inflearn.com",
    ],
  },
};

module.exports = withMDX(nextConfig);
