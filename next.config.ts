import type { NextConfig } from "next";

// Detect when running inside GitHub Actions so we can set the correct basePath
const isGithubActions = !!process.env.GITHUB_ACTIONS;

let basePath = "";
let assetPrefix = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (repo) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix,
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
