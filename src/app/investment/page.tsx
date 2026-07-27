import React from 'react';
import type { Metadata } from 'next';
import { InvestmentCalculators } from '@/components/investment/InvestmentCalculators';
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/seo/Breadcrumb';

export const metadata: Metadata = buildMetadata({
  title: 'Real Estate Investment & ROI Calculator Pune | K Raheja Viva',
  description: 'Analyze land ROI, capital growth projections, and plot financial calculators for West Pune real estate investment at K Raheja Viva, Pirangut.',
  keywords: ['plot investment Pune', 'land ROI calculator Pune', 'Pirangut appreciation rate', 'West Pune growth corridor investment', 'K Raheja Viva investment ROI'],
  path: '/investment',
});

export default function InvestmentPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Investment Analysis', url: '/investment' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <JsonLd schema={[localBusinessSchema(), breadcrumbSchema(breadcrumbItems)]} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Investment Analysis', href: '/investment' }]} />
      <InvestmentCalculators />
    </div>
  );
}
