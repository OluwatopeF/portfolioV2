/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir:'dist',
    output: "export",
    images:{
        unoptimized:true,
    },
    reactStrictMode: true,
};

export default nextConfig;
