import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[{
      protocol: 'https',
      hostname:'img.spoonacular.com'
    }],
    domains:['spoonacular.com']
  },
};

export default nextConfig;
