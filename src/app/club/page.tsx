import React from 'react';
import type { Metadata } from 'next';
import { ClubClient } from '@/components/club/ClubClient';
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/seo/Breadcrumb';

export const metadata: Metadata = buildMetadata({
  title: '20,000 Sq Ft Signature Clubhouse & 40+ Lifestyle Amenities | K Raheja Viva',
  description: 'Experience world-class living at K Raheja Viva Signature Clubhouse. Featuring an infinity pool overlooking Sahyadri hills, grand ballroom, tennis courts, spa, gym, and 40+ amenities.',
  keywords: ['K Raheja Viva clubhouse', 'luxury amenities Pune plots', 'clubhouse Pirangut', 'plotted township amenities Pune', 'luxury lifestyle West Pune'],
  path: '/club',
});

export default function ClubPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Signature Club', url: '/club' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <JsonLd schema={[localBusinessSchema(), breadcrumbSchema(breadcrumbItems)]} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Signature Club', href: '/club' }]} />
      <ClubClient />
    </div>
  );
}
