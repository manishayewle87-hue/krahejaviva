import React from 'react';
import Link from 'next/link';
import { Sparkles, ChevronRight, TrendingUp, Calculator } from 'lucide-react';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { InvestmentCalculators } from '@/components/investment/InvestmentCalculators';

export const metadata = buildMetadata({
  title: 'Price List & ROI Calculator | K Raheja Viva NA Bungalow Plots',
  description: 'View pricing breakdown, stamp duty estimates, and capital appreciation ROI calculators for K Raheja Viva NA Bungalow Plots in Pirangut Pune.',
  keywords: [
    'k raheja viva price list',
    'raheja viva plot rate per sqft',
    'na plot investment return pirangut',
    'pune plot roi calculator',
    'raheja viva stamp duty cost'
  ],
  path: '/raheja-viva-na-bungalow-plots/price-investment',
});

export default function PriceInvestmentPage() {
  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'K Raheja Viva NA Bungalow Plots', url: '/raheja-viva-na-bungalow-plots' },
    { name: 'Price List & Investment ROI', url: '/raheja-viva-na-bungalow-plots/price-investment' }
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950 pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span>Capital ROI & Financial Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 mb-4">
            Pricing, Payment Plans & <span className="text-amber-400">ROI Calculator</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Plotted developments in Pirangut have delivered a stellar 14.2% CAGR capital appreciation over 5 years. Calculate your expected returns, bank loan EMIs, and stamp duty below.
          </p>
        </div>

        {/* Investment Calculators Module */}
        <InvestmentCalculators />

        <div className="mt-16 text-center">
          <Link
            href="/raheja-viva-na-bungalow-plots"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 font-semibold hover:bg-slate-800"
          >
            <span>Back to Raheja Viva Bungalow Plots Overview</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
