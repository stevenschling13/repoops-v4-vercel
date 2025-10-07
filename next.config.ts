import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {dirs: ["src"], ignoreDuringBuilds: false},
  typescript: {ignoreBuildErrors: false},
  experimental: {typedRoutes: true},
  output: undefined
};

export default nextConfig;
