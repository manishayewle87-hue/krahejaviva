/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
    webpackBuildWorker: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year
    unoptimized: false,
    remotePatterns: [],
  },

  async redirects() {
    return [
      {
        source: '/k-raheja-viva-bungalow-plots',
        destination: '/raheja-viva-na-bungalow-plots',
        permanent: true,
      },
      {
        source: '/raheja-viva-bungalow-plots',
        destination: '/raheja-viva-na-bungalow-plots',
        permanent: true,
      },
      {
        source: '/raheja-viva-plots-pirangut',
        destination: '/raheja-viva-na-bungalow-plots/pirangut-pune',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // ── Security & Trust Signals ──────────────────────────────────
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection',          value: '1; mode=block' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=(self)' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://s.ytimg.com https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; frame-src 'self' https://www.youtube.com; upgrade-insecure-requests;",
          },
          // ── Performance ───────────────────────────────────────────────
          { key: 'Vary', value: 'Accept-Encoding' },
        ],
      },
      {
        // Long-lived cache for static assets
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
