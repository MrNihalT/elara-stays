import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dtpcwayanad.com",
      },
      {
        protocol: "https",
        hostname: "journeyjunctiontrips.com",
      },
    ],
  },
};

export default nextConfig;
