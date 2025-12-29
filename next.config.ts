import type { NextConfig } from 'next';

const { NEXT_PUBLIC_API_URL } = process.env;

const nextConfig: NextConfig = {
  distDir: process.env.BUILD_DIR || '.next',
  rewrites: async () => {
    return [
    {
      source: '/arquivos/:resource*',
      destination: `${NEXT_PUBLIC_API_URL}/attachments/:resource*`,
    },
    {
      source: '/api/:resource*',
      destination: `${NEXT_PUBLIC_API_URL}/:resource*`,
    },
  ]}
};

export default nextConfig;
