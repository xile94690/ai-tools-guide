import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // LAN / phone preview of `next dev` (e.g. http://192.168.x.x:3000)
  allowedDevOrigins: ["127.0.0.1", "192.168.*.*", "10.*.*.*", "172.*.*.*"],
};

export default nextConfig;
