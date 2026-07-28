import React from 'react';
import Link from 'next/link';
import { Calendar, User, Clock, ChevronRight, TrendingUp, BookOpen, ShieldCheck } from 'lucide-react';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Why Invest in K Raheja Viva NA Bungalow Plots Pirangut',
  description: 'Top financial & growth reasons to invest in K Raheja Viva NA Bungalow Plots in Pirangut, West Pune. 14.2% CAGR capital appreciation, Pune Ring Road impact & NRI demand.',
  keywords: [
    'why invest in raheja viva plots',
    'k raheja viva bungalow plots investment',
    'pirangut land appreciation rate',
    'best land investment west pune'
  ],
  path: '/blog/why-invest-in-k-raheja-viva-na-bungalow-plots-pirangut',
});

export default function BlogWhyInvestPage() {
  const articleSchemaData = articleSchema({
    title: 'Why Invest in K Raheja Viva NA Bungalow Plots Pirangut',
    description: 'Top financial & growth reasons to invest in K Raheja Viva NA Bungalow Plots in Pirangut, West Pune. 14.2% CAGR capital appreciation, Pune Ring Road impact & NRI demand.',
    path: '/blog/why-invest-in-k-raheja-viva-na-bungalow-plots-pirangut',
    datePublished: '2025-02-01'
  });

  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Why Invest in K Raheja Viva NA Bungalow Plots', url: '/blog/why-invest-in-k-raheja-viva-na-bungalow-plots-pirangut' }
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
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span>Investment Analysis</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 leading-tight mb-6">
            Why <span className="text-amber-400">K Raheja Viva NA Bungalow Plots</span> in Pirangut are West Pune&apos;s #1 Real Estate Asset
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs sm:text-sm border-b border-slate-800 pb-6">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-amber-400" /> Capital Growth Team</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> February 1, 2025</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> 6 Min Read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-amber max-w-none space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
          <p className="lead text-xl text-slate-200 font-light leading-relaxed">
            Real estate dynamics in Pune have shifted dramatically towards low-density, high-value land assets. <strong className="text-amber-300">K Raheja Viva Bungalow Plots</strong> represent a rare combination of brand trust, prime connectivity, and rapid capital appreciation.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-100 mt-8">1. The West Pune Growth Corridor Acceleration</h2>
          <p>
            Pirangut serves as the natural extension of Kothrud, Bavdhan, and Paud Road. With the completion of Chandani Chowk multi-tier flyover and ongoing work on the 128 km Pune Ring Road, travel times to Hinjawadi IT Hub and Mumbai Expressway have decreased by up to 40%.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-100 mt-8">2. Scarcity of Gated NA Plotted Estates</h2>
          <p>
            While high-rise apartments degrade over time due to structural depreciation, land appreciates exponentially. K Raheja Viva offers a gated 100+ acre ecosystem with maintenance governance, ensuring long-term value protection for generations.
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
