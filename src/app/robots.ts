import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/*.json$'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/images/',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 3,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'ia_archiver', // Alexa/Internet Archive
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: ['GPTBot', 'CCBot', 'Claude-Web', 'anthropic-ai', 'ChatGPT-User', 'cohere-ai', 'PerplexityBot', 'Google-Extended'],
        disallow: ['/'],
      },
    ],
    sitemap: [
      'https://www.krahejacorpviva.com/sitemap.xml',
      'https://www.krahejacorpviva.com/sitemap-news.xml',
      'https://www.krahejacorpviva.com/sitemap-video.xml',
    ],
    host: 'https://www.krahejacorpviva.com',
  };
}
