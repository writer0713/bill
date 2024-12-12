import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'specials-images.forbesimg.com',
      },
    ],
  },
};

export default nextConfig;
