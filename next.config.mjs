/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? '/portfolioV2/' : '',
    basePath: isProd ? '/portfolioV2':'',
    output: 'export',
    images: {
    unoptimized: true,
  },
};

export default nextConfig;
