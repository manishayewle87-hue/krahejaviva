import React from 'react';
import Link from 'next/link';
import { Compass, Sparkles, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { MasterplanClient } from '@/components/masterplan/MasterplanClient';
import { VillaStudioClient } from '@/components/studio/VillaStudioClient';

export const metadata = buildMetadata({
  title: 'Plot Sizes & Masterplan | K Raheja Viva NA Bungalow Plots',
  description: 'Explore plot dimensions and 100+ acre masterplan for K Raheja Viva NA Bungalow Plots. 2,000, 3,000, 4,000, 5,000 & 6,000+ sq ft sites with PMRDA FSI norms.',
  keywords: [
    'k raheja viva plot sizes',
    'raheja viva masterplan pirangut',
    '2000 sqft na plot pirangut',
    '3000 sqft bungalow plot pune',
    'villa architectural guidelines raheja viva'
  ],
  path: '/raheja-viva-na-bungalow-plots/sizes-masterplan',
});

export default function SizesMasterplanPage() {
  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'K Raheja Viva NA Bungalow Plots', url: '/raheja-viva-na-bungalow-plots' },
    { name: 'Plot Sizes & Masterplan', url: '/raheja-viva-na-bungalow-plots/sizes-masterplan' }
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
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Masterplan & Architectural Studio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 mb-4">
            Plot Dimensions & <span className="text-amber-400">100+ Acre Masterplan</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Choose your ideal canvas from 2,000 to 6,000+ sq.ft. NA bungalow plots with low-density layout zoning, underground infrastructure, and Sahyadri slope orientations.
          </p>
        </div>

        {/* Interactive GIS Masterplan */}
        <MasterplanClient />

        {/* Villa Design Inspiration Studio */}
        <div className="mt-20">
          <VillaStudioClient />
        </div>

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
