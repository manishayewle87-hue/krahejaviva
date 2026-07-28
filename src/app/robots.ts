import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: ['Googlebot', 'Googlebot-Mobile', 'Googlebot-Image', 'Googlebot-Video', 'Google-InspectionTool'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['Bingbot', 'msnbot', 'BingPreview'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-Web', 'anthropic-ai', 'Google-Extended'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: [
      'https://www.krahejacorpviva.com/sitemap.xml',
      'https://www.krahejacorpviva.com/sitemap-news.xml',
      'https://www.krahejacorpviva.com/sitemap-video.xml',
      'https://www.krahejacorpviva.com/rss.xml',
    ],
    host: 'https://www.krahejacorpviva.com',
  };
}

