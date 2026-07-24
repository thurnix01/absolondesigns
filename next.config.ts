import type { NextConfig } from "next";

// This site is served on a custom domain (absolondesigns.com / cbhrcom.com),
// so we intentionally do not set a GitHub repo basePath.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
};

export default nextConfig;
