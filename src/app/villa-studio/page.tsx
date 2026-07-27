import React from 'react';
import type { Metadata } from 'next';
import { VillaStudioClient } from '@/components/studio/VillaStudioClient';
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/seo/Breadcrumb';

export const metadata: Metadata = buildMetadata({
  title: 'Villa Design & Architecture Studio | K Raheja Viva Custom Villas',
  description: 'Design your dream luxury bungalow or custom villa at K Raheja Viva. Explore architectural layouts, 3D elevation concepts, interior finishes, and villa customization options.',
  keywords: ['villa design studio Pune', 'custom villa design Pirangut', 'luxury bungalow architecture Pune', 'K Raheja Viva villa designs'],
  path: '/villa-studio',
});

export default function VillaStudioPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Villa Design Studio', url: '/villa-studio' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <JsonLd schema={[localBusinessSchema(), breadcrumbSchema(breadcrumbItems)]} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Villa Design Studio', href: '/villa-studio' }]} />
      <VillaStudioClient />
    </div>
  );
}
