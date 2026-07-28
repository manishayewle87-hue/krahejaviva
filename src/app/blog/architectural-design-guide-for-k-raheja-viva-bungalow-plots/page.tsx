import React from 'react';
import Link from 'next/link';
import { Calendar, User, Clock, ChevronRight, BookOpen, Compass } from 'lucide-react';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Architectural Design Guide for K Raheja Viva Bungalow Plots',
  description: 'Design and construction guidelines for custom villas on K Raheja Viva Bungalow Plots. FSI norms, Sahyadri slope integration, materials, and landscaping.',
  keywords: [
    'architectural guide raheja viva plots',
    'villa construction rules pirangut',
    'k raheja viva bungalow layout plans',
    'fsi guidelines na plots pune'
  ],
  path: '/blog/architectural-design-guide-for-k-raheja-viva-bungalow-plots',
});

export default function BlogArchitecturalGuidePage() {
  const articleSchemaData = articleSchema({
    title: 'Architectural Design Guide for K Raheja Viva Bungalow Plots',
    description: 'Design and construction guidelines for custom villas on K Raheja Viva Bungalow Plots. FSI norms, Sahyadri slope integration, materials, and landscaping.',
    path: '/blog/architectural-design-guide-for-k-raheja-viva-bungalow-plots',
    datePublished: '2025-02-20'
  });

  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Architectural Design Guide for K Raheja Viva Bungalow Plots', url: '/blog/architectural-design-guide-for-k-raheja-viva-bungalow-plots' }
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
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Architecture & Design</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 leading-tight mb-6">
            Building Your Dream Villa on <span className="text-amber-400">K Raheja Viva Bungalow Plots</span>: Floor Plans, FSI, & Construction Guidelines
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs sm:text-sm border-b border-slate-800 pb-6">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-amber-400" /> Architecture Studio</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> February 20, 2025</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> 9 Min Read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-amber max-w-none space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
          <p className="lead text-xl text-slate-200 font-light leading-relaxed">
            Constructing a luxury villa on a <strong className="text-amber-300">K Raheja Viva Bungalow Plot</strong> allows homeowners to blend modern tropical architectural principles with panoramic Sahyadri mountain vistas.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-100 mt-8">1. Topography & Slope Integration</h2>
          <p>
            The natural contours of the 100+ acre estate provide natural terracing. Villa designs can utilize split-level entries, cantilevered infinity decks, and double-height glass facades to maximize ventilation and views.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-100 mt-8">2. Sustainable & Biophilic Materials</h2>
          <p>
            K Raheja Corp Homes encourages biophilic design using exposed terracotta, natural basalt stone cladding, teakwood louvres, and solar PV roof integrations.
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
