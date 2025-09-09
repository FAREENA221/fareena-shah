import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
  eslint: { ignoreDuringBuilds: true },

  // ✅ Forward env vars (so it works even if only .env.development.local exists)
 
};

export default nextConfig;
