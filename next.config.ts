import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://192.168.1.134:3000"],
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true, // Added this section
  },
};

export default nextConfig;
