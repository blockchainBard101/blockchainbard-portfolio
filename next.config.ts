import { withContentlayer } from 'next-contentlayer'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  output: 'standalone',
  turbopack: {},
};

export default withContentlayer(nextConfig);
