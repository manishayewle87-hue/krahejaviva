import { MetadataRoute } from 'next';
import { locationHubs, plotSizes, comparisonPages } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.krahejacorpviva.com';
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/masterplan`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/na-plots-pune`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/villa-studio`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/club`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/investment`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/location`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/rera-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/na-plots-pune/buy-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/na-plots-pune/legal-checklist`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/na-plots-pune/investment-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/investment/pune-real-estate-2025`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/investment/west-pune-growth-corridor`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/investment/nri-plot-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const locationPages: MetadataRoute.Sitemap = locationHubs.map(loc => ({
    url: `${base}/plots/${loc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const plotSizePages: MetadataRoute.Sitemap = plotSizes.map(size => ({
    url: `${base}/plots/${size.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const orientationPages: MetadataRoute.Sitemap = [
    'corner-plot', 'east-facing', 'north-facing', 'forest-facing', 'hill-facing'
  ].map(slug => ({
    url: `${base}/plots/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const comparePages: MetadataRoute.Sitemap = comparisonPages.map(p => ({
    url: `${base}/compare/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...locationPages,
    ...plotSizePages,
    ...orientationPages,
    ...comparePages,
  ];
}
