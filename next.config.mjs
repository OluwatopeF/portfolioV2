/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'development';

const nextConfig = {
    output: 'export',
};

export default nextConfig;


    // reactStrictMode: false,
    // trailingSlash: true,
    // assetPrefix: isProd ? '/portfolioV2/' : '',
    // basePath: isProd ? '/portfolioV2' : '',
    // output: 'export',
