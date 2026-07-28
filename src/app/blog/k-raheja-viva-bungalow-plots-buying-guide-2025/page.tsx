import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ChevronRight, ShieldCheck, CheckCircle2, Phone, BookOpen } from 'lucide-react';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Ultimate Buying Guide for K Raheja Viva Bungalow Plots (2025)',
  description: 'Complete 2025 buyer guide for K Raheja Viva Bungalow Plots in Pirangut, Pune. Masterplan analysis, PMRDA NA sanction rules, FSI guidelines, and pricing insights.',
  keywords: [
    'k raheja viva bungalow plots guide',
    'buying na plot in pirangut pune',
    'raheja viva plot price list 2025',
    'pune bungalow plot buying steps'
  ],
  path: '/blog/k-raheja-viva-bungalow-plots-buying-guide-2025',
  ogImage: '/images/viva/hero-estate-aerial.jpg',
});

export default function BlogBuyingGuidePage() {
  const articleSchemaData = articleSchema({
    title: 'Ultimate Buying Guide for K Raheja Viva Bungalow Plots (2025)',
    description: 'Complete 2025 buyer guide for K Raheja Viva Bungalow Plots in Pirangut, Pune. Masterplan analysis, PMRDA NA sanction rules, FSI guidelines, and pricing insights.',
    path: '/blog/k-raheja-viva-bungalow-plots-buying-guide-2025',
    datePublished: '2025-01-15'
  });

  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'K Raheja Viva Bungalow Plots Buying Guide 2025', url: '/blog/k-raheja-viva-bungalow-plots-buying-guide-2025' }
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
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Buyer&apos;s Handbook 2025</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 leading-tight mb-6">
            Ultimate Buying Guide for <span className="text-amber-400">K Raheja Viva Bungalow Plots</span> in Pune (2025 Edition)
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs sm:text-sm border-b border-slate-800 pb-6">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-amber-400" /> Antigravity Real Estate Advisory</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> January 15, 2025</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> 8 Min Read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-amber max-w-none space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
          <p className="lead text-xl text-slate-200 font-light leading-relaxed">
            Investing in a luxury land asset is the pinnacle of wealth creation in Indian real estate. Among all options in West Pune, <strong className="text-amber-300">K Raheja Viva Bungalow Plots</strong> in Pirangut stands as a benchmark for gated luxury, clear non-agricultural (NA) title, and world-class masterplanning.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-100 mt-8">1. Why K Raheja Viva Bungalow Plots Lead West Pune</h2>
          <p>
            Developed by K Raheja Corp Homes across 100+ acres of pristine Sahyadri foothills, K Raheja Viva offers custom NA villa sites with 100% PMRDA Collector NA Sanction. Unlike unorganized layout plots, K Raheja Viva provides underground utility cabling, piped water supply, asphalted internal roads, and a 20,000 sq ft Signature Clubhouse.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-100 mt-8">2. Understanding PMRDA FSI & Fencing Norms</h2>
          <p>
            When purchasing a plot at K Raheja Viva, buyers enjoy an FSI (Floor Space Index) that allows constructing multi-level villas (Ground + 2 Floors) with open sit-outs, swimming pools, and rooftop gardens.
          </p>

          <div className="my-8 p-6 rounded-2xl bg-slate-900 border border-amber-500/30">
            <h3 className="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Key RERA & Title Metrics
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> MahaRERA Registration: P52100004980</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Land Status: 100% Collector NA Sanctioned</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bank Pre-Approvals: HDFC, ICICI, SBI, Axis</li>
            </ul>
          </div>
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
