import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Update repository name to 'absolondesigns'
  basePath: process.env.NODE_ENV === 'production' ? '/' : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
};

export default nextConfig;
