/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {dirs: ["src"], ignoreDuringBuilds: false},
  typescript: {ignoreBuildErrors: false},
  experimental: {typedRoutes: true},
  output: undefined
};

export default nextConfig;
