/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images.podbay.fm',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.simplecastcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'megaphone.imgix.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.npr.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chumley.barstoolsports.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.simplecastcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.mzstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.imgix.net',
        pathname: '/**',
      },
    ],
    
    unoptimized: process.env.NODE_ENV === 'development',
    
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  experimental: {
    turbo: {
      resolveAlias: {
      },
    },
  },
};

module.exports = nextConfig;