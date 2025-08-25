import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Headers, redirects and rewrites don't work with 'export' mode
  // They need to be handled by your hosting provider or CDN
  /*
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security Headers - Configure these in your hosting provider
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          // Add CSP and other security headers via hosting provider
        ]
      }
    ];
  },
  */
  // Advanced Performance optimizations
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    
    // Bundle optimization
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          common: {
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
    };
    
    return config;
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    scrollRestoration: true,
  },
  
  // Image optimization
  images: {
    unoptimized: true,
    domains: [
      'pulseguard.pro',
      'www.pulseguard.pro',
      'imdigital.info',
      'www.che.nl',
      'arjandenhartog.com'
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  // Compression
  compress: true,
  
  // Redirects and rewrites don't work with 'export' mode
  // Configure these in your hosting provider or CDN
  /*
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true }
    ];
  },
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/sitemap.xml' },
      { source: '/robots.txt', destination: '/robots.txt' },
      { source: '/ai.txt', destination: '/ai.txt' }
    ];
  }
  */
};

export default nextConfig;
