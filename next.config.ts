import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://192.168.1.134:3000"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
