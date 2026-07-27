import React from 'react';
import type { Metadata } from 'next';
import { MasterplanClient } from '@/components/masterplan/MasterplanClient';
import { buildMetadata, realEstateProjectSchema, breadcrumbSchema, localBusinessSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/seo/Breadcrumb';

export const metadata: Metadata = buildMetadata({
  title: 'Interactive 100+ Acre Masterplan & GIS Plot Engine | K Raheja Viva',
  description: 'Explore the 100+ acre low-density master plan at K Raheja Viva, Pirangut. Inspect plot dimensions, availability, elevation profiles, and 40+ lifestyle amenity zones.',
  keywords: ['K Raheja Viva masterplan', 'interactive plot map Pune', 'gated community layout Pirangut', 'plotted development layout Pune', 'NA plot layout Pirangut'],
  path: '/masterplan',
});

export default function MasterplanPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Masterplan', url: '/masterplan' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <JsonLd schema={[localBusinessSchema(), realEstateProjectSchema(), breadcrumbSchema(breadcrumbItems)]} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Masterplan', href: '/masterplan' }]} />
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-4 py-1.5 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em] border border-[#C5A059]/30 inline-block">
          INTERACTIVE GIS PLOT ENGINE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">
          K Raheja Viva Masterplan
        </h1>
        <p className="text-sm text-[#5A6E67]">
          Inspect plot boundaries, orientation, live availability, and simulated sunlight shadows across the 100+ acre estate.
        </p>
      </div>

      <MasterplanClient />
    </div>
  );
}
