import React from 'react';
import type { Metadata } from 'next';
import { LocationIntelligenceMap } from '@/components/location/LocationIntelligenceMap';
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/seo/Breadcrumb';

export const metadata: Metadata = buildMetadata({
  title: 'Location & Connectivity | K Raheja Viva Pirangut West Pune',
  description: 'Explore the strategic location of K Raheja Viva in Pirangut, West Pune. 12 mins from Chandani Chowk, 20 mins from Hinjawadi IT Park, close to Pune-Paud Road & Ring Road.',
  keywords: ['K Raheja Viva location', 'Pirangut location Pune', 'Chandani Chowk to Pirangut', 'Hinjawadi to Pirangut distance', 'West Pune growth corridor'],
  path: '/location',
});

export default function LocationPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Location & Connectivity', url: '/location' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <JsonLd schema={[localBusinessSchema(), breadcrumbSchema(breadcrumbItems)]} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Location & Connectivity', href: '/location' }]} />
      <LocationIntelligenceMap />
    </div>
  );
}
