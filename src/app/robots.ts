import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/private/', '/_next/static/development/'],
      },
      {
        userAgent: [
          'Googlebot', 'Googlebot-Mobile', 'Googlebot-Image', 'Googlebot-Video',
          'Google-InspectionTool', 'Google-Extended', 'GoogleOther', 'Storebot-Google',
        ],
        allow: '/',
      },
      {
        userAgent: ['Bingbot', 'msnbot', 'BingPreview'],
        allow: '/',
      },
      {
        userAgent: ['Yandex', 'YandexBot', 'YandexMobileBot', 'YandexImages'],
        allow: '/',
      },
      {
        userAgent: ['Applebot', 'DuckDuckBot', 'Baiduspider', 'Slurp', 'Sogou web spider', 'Yeti', 'SeznamBot'],
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-Web', 'ClaudeBot',
          'anthropic-ai', 'Bytespider', 'CCBot', 'cohere-ai', 'FacebookBot',
        ],
        allow: '/',
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
