import React from 'react';
import Link from 'next/link';
import { Calendar, User, Clock, ChevronRight, BookOpen, Scale } from 'lucide-react';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'K Raheja Viva Bungalow Plots vs Flat in Pune | Comparative Analysis',
  description: 'Compare K Raheja Viva Bungalow Plots vs 3BHK/4BHK luxury apartments in Pune. Capital appreciation, privacy, FSI control, and maintenance cost comparison.',
  keywords: [
    'k raheja viva plots vs flat pune',
    'bungalow plot vs apartment investment',
    'raheja viva plot returns comparison',
    'land vs apartment ROI pune'
  ],
  path: '/blog/k-raheja-viva-bungalow-plots-vs-flat-in-pune',
});

export default function BlogPlotsVsFlatPage() {
  const articleSchemaData = articleSchema({
    title: 'K Raheja Viva Bungalow Plots vs Flat in Pune | Comparative Analysis',
    description: 'Compare K Raheja Viva Bungalow Plots vs 3BHK/4BHK luxury apartments in Pune. Capital appreciation, privacy, FSI control, and maintenance cost comparison.',
    path: '/blog/k-raheja-viva-bungalow-plots-vs-flat-in-pune',
    datePublished: '2025-02-10'
  });

  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'K Raheja Viva Bungalow Plots vs Flat in Pune', url: '/blog/k-raheja-viva-bungalow-plots-vs-flat-in-pune' }
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950 pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Comparative Asset Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 leading-tight mb-6">
            <span className="text-amber-400">K Raheja Viva Bungalow Plots</span> vs Luxury Apartments in Pune: Financial & Lifestyle Analysis
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs sm:text-sm border-b border-slate-800 pb-6">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-amber-400" /> Financial Analytics Team</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> February 10, 2025</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> 7 Min Read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-amber max-w-none space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
          <p className="lead text-xl text-slate-200 font-light leading-relaxed">
            When deciding between buying a high-rise luxury apartment in Kothrud/Bavdhan or a custom <strong className="text-amber-300">K Raheja Viva Bungalow Plot</strong> in Pirangut, property buyers face a strategic choice between land ownership and vertical living.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-100 mt-8">1. Undivided Land Ownership vs Undivided Share of Land (UDS)</h2>
          <p>
            In an apartment building, your ownership is limited to a small percentage of Undivided Share of Land (UDS). Conversely, a plot at K Raheja Viva grants 100% complete land ownership with individual 7/12 Satbara extract.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-100 mt-8">2. Architectural Freedom and Privacy</h2>
          <p>
            Apartment owners are locked into standard builder floor plans. Plot owners at K Raheja Viva have total control over architectural design, private gardens, swimming pools, and rooftop terraces.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/raheja-viva-na-bungalow-plots"
            className="text-amber-400 hover:text-amber-300 font-semibold text-sm flex items-center gap-1"
          >
            <span>Explore Raheja Viva Bungalow Plots</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </footer>
      </article>
    </main>
  );
}
