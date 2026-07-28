import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, MapPin, Sparkles, CheckCircle2, ChevronRight, Phone, Download, Compass, Award, Building2, Trees, ArrowUpRight
} from 'lucide-react';
import { buildMetadata, realEstateProjectSchema, breadcrumbSchema } from '@/lib/seo';
import { RahejaVivaFaqSection } from '@/components/common/RahejaVivaFaqSection';
import { VIVA_RERA_INFO } from '@/data/reraData';

export const metadata = buildMetadata({
  title: 'K Raheja Viva NA Bungalow Plots in Pirangut Pune | Official Estate Site',
  description: 'Explore K Raheja Viva NA Bungalow Plots in Pirangut, West Pune. 100+ acre luxury estate with 2,000–6,000+ sq.ft. PMRDA NA sanctioned plots, 20,000 sq ft Signature Clubhouse, and 40+ amenities. MahaRERA P52100004980.',
  keywords: [
    'k raheja viva bungalow plots',
    'raheja viva na bungalow plots',
    'raheja viva plots pirangut',
    'na bungalow plots in pune',
    'luxury villa plots west pune',
    'pmrda na plots pirangut',
    'k raheja viva price list',
    'raheja viva rera p52100004980'
  ],
  path: '/raheja-viva-na-bungalow-plots',
  ogImage: '/images/viva/viva-panoramic-aerial.jpg',
});

const subHubs = [
  {
    title: 'Pirangut West Pune Location',
    path: '/raheja-viva-na-bungalow-plots/pirangut-pune',
    desc: 'Explore micro-market connectivity to Kothrud, Bavdhan, Hinjawadi IT Hub & Pune Ring Road.',
    badge: 'Location Hub'
  },
  {
    title: 'Plot Sizes & Masterplan Layout',
    path: '/raheja-viva-na-bungalow-plots/sizes-masterplan',
    desc: 'View 2,000 to 6,000+ sq.ft. NA bungalow plot dimensions, FSI rules & villa layout designs.',
    badge: 'Sizes Guide'
  },
  {
    title: 'Price List & ROI Calculator',
    path: '/raheja-viva-na-bungalow-plots/price-investment',
    desc: 'Analyze 14.2% CAGR capital growth, stamp duty calculations, and bank loan EMI offers.',
    badge: 'Pricing & ROI'
  },
  {
    title: 'Legal 7/12 & RERA Sanction',
    path: '/raheja-viva-na-bungalow-plots/legal-rera-sanction',
    desc: 'Download MahaRERA (P52100004980) certificates, PMRDA collector NA order & title report.',
    badge: 'Legal Desk'
  }
];

const plotSizes = [
  { size: '2,000 Sq.Ft.', tagline: 'Starter Villa Site', desc: 'Ideal for 3BHK modern luxury villa with private sit-out garden.', price: '₹80 Lakhs onwards' },
  { size: '3,000 Sq.Ft.', tagline: 'Family Villa Estate', desc: 'Spacious 4BHK bungalow site with double-height lounge and car garage.', price: '₹1.20 Cr onwards' },
  { size: '4,000 Sq.Ft.', tagline: 'Grand Estate Plot', desc: 'Generous site for multi-tier villa, infinity lap pool and deck.', price: '₹1.60 Cr onwards' },
  { size: '5,000+ Sq.Ft.', tagline: 'Trophy Mansion Estate', desc: 'Ultra-exclusive plot for sprawling custom mansions with full landscaping.', price: '₹2.00 Cr onwards' },
];

export default function RahejaVivaNaBungalowPlotsPage() {
  const projectSchemaData = realEstateProjectSchema();
  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'K Raheja Viva NA Bungalow Plots', url: '/raheja-viva-na-bungalow-plots' }
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-slate-950 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-7/12 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>MahaRERA Registered P52100004980</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-100 leading-tight mb-6">
                K Raheja Viva <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                  NA Bungalow Plots
                </span> in Pirangut, Pune
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 font-light">
                Discover West Pune’s premier 100+ acre gated luxury estate. Offering 100% PMRDA Collector NA Sanctioned bungalow plots from 2,000 to 6,000+ sq.ft. with Sahyadri mountain views, 20,000 sq.ft. Signature Clubhouse, and 40+ world-class amenities.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+918080445445"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Estate Desk: +91 8080 445 445</span>
                </a>
                <Link
                  href="/raheja-viva-na-bungalow-plots/price-investment"
                  className="px-8 py-4 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 font-semibold text-base hover:bg-slate-800 hover:border-amber-500/60 transition-all flex items-center gap-2"
                >
                  <span>Explore Pricing & Cost Sheets</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800/80">
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">100+ Acres</p>
                  <p className="text-xs sm:text-sm text-slate-400">Low-Density Estate</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">100% NA</p>
                  <p className="text-xs sm:text-sm text-slate-400">PMRDA Sanctioned</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">20,000 SqFt</p>
                  <p className="text-xs sm:text-sm text-slate-400">Signature Clubhouse</p>
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-500/10 group">
                <Image
                  src="/images/viva/viva-panoramic-aerial.jpg"
                  alt="K Raheja Viva NA Bungalow Plots Pirangut Pune Aerial View"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-amber-500/20">
                  <p className="text-amber-400 font-serif font-bold text-lg">K Raheja Corp Viva Estate</p>
                  <p className="text-slate-300 text-xs flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Paud Road, Pirangut, West Pune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Hub Cluster Navigation */}
      <section className="py-16 bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-100 mb-4">
              Explore <span className="text-amber-400">K Raheja Viva Bungalow Plots</span> Topics
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Navigate dedicated guides and technical resources for home buyers and NRI investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subHubs.map((hub, idx) => (
              <Link
                key={idx}
                href={hub.path}
                className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-500/10 text-amber-300 text-xs font-semibold mb-4">
                    {hub.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors mb-2 flex items-center justify-between">
                    <span>{hub.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 text-amber-400 text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plot Sizes Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-2 block">Custom Villa Plot Sizes</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
                Available Bungalow Plot Configurations
              </h2>
            </div>
            <Link
              href="/raheja-viva-na-bungalow-plots/sizes-masterplan"
              className="text-amber-400 hover:text-amber-300 text-sm font-semibold flex items-center gap-1"
            >
              <span>View Interactive Masterplan Layout</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plotSizes.map((plot, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all group"
              >
                <span className="text-amber-400 font-mono font-bold text-sm block mb-1">{plot.tagline}</span>
                <h3 className="text-2xl font-serif font-bold text-slate-100 mb-3">{plot.size}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">{plot.desc}</p>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Starting Price</span>
                  <span className="text-amber-300 font-bold">{plot.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <RahejaVivaFaqSection />

      {/* RERA Footer Banner */}
      <section className="py-12 bg-slate-900/80 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            <strong className="text-slate-200">MahaRERA Registration:</strong> K Raheja Corp Viva is registered under MahaRERA No. <span className="text-amber-400 font-semibold">{VIVA_RERA_INFO.reraRegNumbers[0].number}</span>. Project details available on the official MahaRERA website <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="underline text-amber-400 hover:text-amber-300">maharera.mahaonline.gov.in</a> under registered projects.
          </p>
        </div>
      </section>
    </main>
  );
}
