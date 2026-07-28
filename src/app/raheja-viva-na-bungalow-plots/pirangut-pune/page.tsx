import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, ChevronRight, Navigation, Car, Train, Building, ShieldCheck } from 'lucide-react';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { LocationIntelligenceMap } from '@/components/location/LocationIntelligenceMap';

export const metadata = buildMetadata({
  title: 'Pirangut Pune Location | K Raheja Viva NA Bungalow Plots',
  description: 'Explore Pirangut, West Pune location advantage for K Raheja Viva NA Bungalow Plots. 15 mins to Kothrud, 20 mins to Hinjawadi IT Park, near Chandani Chowk and Pune Ring Road.',
  keywords: [
    'pirangut pune location',
    'k raheja viva pirangut address',
    'bungalow plots near kothrud',
    'na plots near hinjawadi',
    'pirangut real estate growth corridor'
  ],
  path: '/raheja-viva-na-bungalow-plots/pirangut-pune',
});

const travelDistances = [
  { name: 'Kothrud (Chandani Chowk)', time: '12 – 15 Mins', dist: '11 km', route: 'Paud Road Arterial' },
  { name: 'Bavdhan Luxury Precinct', time: '15 – 18 Mins', dist: '9 km', route: 'NH-48 Bypass' },
  { name: 'Hinjawadi Phase 1, 2 & 3 IT Hub', time: '20 – 25 Mins', dist: '18 km', route: 'Ring Road Corridor' },
  { name: 'Baner & Balewadi High Street', time: '25 – 30 Mins', dist: '15 km', route: 'Express Highway' },
  { name: 'Pune Railway Station / Swargate', time: '35 – 40 Mins', dist: '22 km', route: 'Metro Line Connect' },
  { name: 'Pune International Airport (PNQ)', time: '50 – 55 Mins', dist: '32 km', route: 'Airport Road' },
];

export default function PirangutPuneLocationPage() {
  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'K Raheja Viva NA Bungalow Plots', url: '/raheja-viva-na-bungalow-plots' },
    { name: 'Pirangut Pune Location', url: '/raheja-viva-na-bungalow-plots/pirangut-pune' }
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950 pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Strategic West Pune Location</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 mb-4">
            Location Intelligence: <span className="text-amber-400">Pirangut, West Pune</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            K Raheja Viva NA Bungalow Plots are situated in the serene Sahyadri foothills of Pirangut — Pune&apos;s fastest-growing luxury residential corridor with instant access to Kothrud, Bavdhan, and Hinjawadi.
          </p>
        </div>

        {/* Travel Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {travelDistances.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <Navigation className="w-5 h-5" />
                </span>
                <span className="text-amber-300 font-mono text-xs font-bold px-3 py-1 bg-amber-500/10 rounded-full">
                  {item.time}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{item.name}</h3>
              <p className="text-slate-400 text-xs mb-3">{item.dist} distance via {item.route}</p>
            </div>
          ))}
        </div>

        {/* Interactive Map Component */}
        <LocationIntelligenceMap />

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
