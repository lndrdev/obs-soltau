/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['obs-soltau.de'],
    unoptimized: true,
  },
  assetPrefix: '/obs-soltau/',
  basePath: '/obs-soltau',
  
};

module.exports = nextConfig;

