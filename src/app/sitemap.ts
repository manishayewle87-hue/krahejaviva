import { MetadataRoute } from 'next';
import { locationHubs, plotSizes, comparisonPages } from '@/lib/seo';

const BASE = 'https://www.krahejacorpviva.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'daily', priority: 1.0 },

    // ─── Flagship raheja-viva-na-bungalow-plots Cluster (Priority 1.0 - 0.98) ───
    { url: `${BASE}/raheja-viva-na-bungalow-plots`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/raheja-viva-na-bungalow-plots/pirangut-pune`, lastModified: now, changeFrequency: 'weekly', priority: 0.98 },
    { url: `${BASE}/raheja-viva-na-bungalow-plots/sizes-masterplan`, lastModified: now, changeFrequency: 'weekly', priority: 0.98 },
    { url: `${BASE}/raheja-viva-na-bungalow-plots/price-investment`, lastModified: now, changeFrequency: 'weekly', priority: 0.98 },
    { url: `${BASE}/raheja-viva-na-bungalow-plots/legal-rera-sanction`, lastModified: now, changeFrequency: 'weekly', priority: 0.98 },

    { url: `${BASE}/masterplan`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    
    // ─── NA Plots Hub ──────────────────────────────────────────────────
    { url: `${BASE}/na-plots-pune`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/na-plots-pune/buy-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.93 },
    { url: `${BASE}/na-plots-pune/legal-checklist`, lastModified: now, changeFrequency: 'weekly', priority: 0.93 },
    { url: `${BASE}/na-plots-pune/investment-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.93 },
    { url: `${BASE}/na-plots-pune/stamp-duty-calculator`, lastModified: now, changeFrequency: 'weekly', priority: 0.91 },
    { url: `${BASE}/na-plots-pune/pirangut-market-report`, lastModified: now, changeFrequency: 'weekly', priority: 0.91 },
    { url: `${BASE}/na-plots-pune/na-conversion-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    
    // ─── Core Pages ───────────────────────────────────────────────────────
    { url: `${BASE}/villa-studio`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/club`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/investment`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/location`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/rera-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/investment/pune-real-estate-2025`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${BASE}/investment/west-pune-growth-corridor`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${BASE}/investment/nri-plot-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    
    // ─── Blog (Topical Authority & K Raheja Viva Bungalow Plots Focus) ──────
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: `${BASE}/blog/k-raheja-viva-bungalow-plots-buying-guide-2025`, lastModified: now, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${BASE}/blog/why-invest-in-k-raheja-viva-na-bungalow-plots-pirangut`, lastModified: now, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${BASE}/blog/k-raheja-viva-bungalow-plots-vs-flat-in-pune`, lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: `${BASE}/blog/architectural-design-guide-for-k-raheja-viva-bungalow-plots`, lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: `${BASE}/blog/na-plot-vs-apartment-2025`, lastModified: now, changeFrequency: 'monthly', priority: 0.83 },
    { url: `${BASE}/blog/pirangut-price-trends-2025`, lastModified: now, changeFrequency: 'monthly', priority: 0.83 },
    { url: `${BASE}/blog/west-pune-growth-corridor`, lastModified: now, changeFrequency: 'monthly', priority: 0.83 },
    { url: `${BASE}/blog/nri-na-plot-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.83 },
  ];

  const locationPages: MetadataRoute.Sitemap = locationHubs.map(loc => ({
    url: `${BASE}/plots/${loc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const plotSizePages: MetadataRoute.Sitemap = plotSizes.map(size => ({
    url: `${BASE}/plots/${size.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.80,
  }));

  const orientationPages: MetadataRoute.Sitemap = [
    'corner-plot', 'east-facing', 'north-facing', 'forest-facing', 'hill-facing',
  ].map(slug => ({
    url: `${BASE}/plots/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.80,
  }));

  const comparePages: MetadataRoute.Sitemap = comparisonPages.map(p => ({
    url: `${BASE}/compare/${p.slug}`,
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
