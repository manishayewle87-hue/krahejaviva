import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'NA Plots near Mulshi | K Raheja Viva — Premium Villa Plots West Pune',
  description: 'Buy premium NA villa plots near Mulshi Lake, West Pune. K Raheja Viva is located 8 km from Mulshi — luxury plotted development with Sahyadri forest views and 40+ amenities.',
  keywords: ['NA plots Mulshi', 'plots near Mulshi', 'villa plots Mulshi Pune', 'Mulshi real estate', 'weekend home plots Mulshi', 'luxury plots near Mulshi lake', 'Mulshi property investment'],
  path: '/plots/mulshi',
});

const faqs = [
  { q: 'Are there NA villa plots near Mulshi in Pune?', a: 'K Raheja Viva in Pirangut offers premium NA villa plots just 8 km from Mulshi — the closest master-planned luxury plotted estate to the Mulshi reservoir and nature reserve.' },
  { q: 'What is the price of plots near Mulshi?', a: 'Plots near Mulshi range from ₹1 Crore to ₹5 Crore+ depending on size and proximity to the lake. K Raheja Viva plots start at ₹80 Lakh for 2,000 sq ft within a gated estate.' },
  { q: 'Is Mulshi a good investment for weekend homes?', a: 'Yes. Mulshi is one of Maharashtra\'s most coveted weekend home destinations with clean air, dam views, and minimal construction. Combined with K Raheja Viva\'s managed community, it is ideal for weekend villa ownership.' },
  { q: 'What is the connectivity from Mulshi to Pune?', a: 'Mulshi is connected to Pune via Paud Road and Mulshi Road. Chandani Chowk is approximately 20 km away. The Western Ring Road will improve connectivity further.' },
  { q: 'Can I build a weekend villa on a K Raheja Viva plot?', a: 'Yes. All K Raheja Viva plots are residential NA plots suitable for constructing weekend or permanent villas. The estate has no construction restrictions beyond FAR norms and design guidelines.' },
];

export default function MulshiPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('mulshi', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: 'Mulshi', href: '/plots/mulshi' }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 MULSHI · WEST PUNE</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">NA Plots near Mulshi — Weekend Villa Plots in West Pune</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Premium NA villa plots near Mulshi Lake and nature reserve. K Raheja Viva is located just 8 km from Mulshi — the only master-planned luxury plotted estate in this Sahyadri micro-corridor.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'From Mulshi Lake', value: '8 km' }, { label: 'From Chandani Chowk', value: '20 km' }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Bird Species', value: '60+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-2xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Mulshi — Maharashtra's Most Coveted Nature Retreat Corridor</h2>
          <p>Mulshi is internationally recognised as one of Maharashtra's most pristine ecological zones. The Mulshi Lake, formed by the Mulshi Dam on the Mula River, is surrounded by dense Sahyadri forests, migratory bird sanctuaries, and rolling hill plateaus that receive the highest monsoon rainfall in the Western Ghats. This natural abundance has made the Mulshi micro-market one of the most sought-after weekend home destinations for Pune and Mumbai affluent buyers.</p>
          <p>The demand for villa plots near Mulshi stems from a powerful lifestyle-investment thesis: own a piece of pristine nature close enough to Pune for weekend access, yet in an environment that will never be commercially overdeveloped due to ecological sensitivity restrictions. Land values in the Mulshi-Pirangut corridor have appreciated at 18–22% CAGR over the last five years, driven by growing demand from IT professionals, HNI families, and NRI buyers seeking second-home investments.</p>
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">K Raheja Viva — Best Plotted Development near Mulshi</h2>
          <p>For buyers seeking the natural beauty of Mulshi with the safety and amenities of a professionally managed community, K Raheja Viva represents the optimal choice. Located at Survey No. 273, Pirangut (8 km from Mulshi), Raheja Viva brings together 100+ acres of Sahyadri foothills land, 6,500+ native trees, 40+ lifestyle amenities, and a 20,000 sq ft Signature Clubhouse — creating a permanent resort living experience. Every plot has clear NA title, RERA registration, underground utilities, and is fully ready for immediate villa construction.</p>
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Social Infrastructure near Mulshi–Pirangut</h2>
          <p>The Mulshi–Pirangut corridor has matured significantly in terms of social infrastructure. The Aditya Birla Memorial Hospital in Chinchwad provides tertiary healthcare within 35 km. D.Y. Patil International School, Symbiosis International School, and Indus International School are all within 15 km via Bavdhan. The Xion Mall in Hinjawadi and the Balewadi High Street provide premium retail and dining within 20 km.</p>
          <ul className="space-y-2 list-none pl-0">
            {['RERA-approved NA plots with clear title', 'Gated estate with 24x7 security and CCTV', 'Ready infrastructure: roads, water, electricity, drainage', 'Weekend villa construction support from K Raheja team', '20,000 sq ft Signature Clubhouse 8 km from Mulshi Lake'].map(item => (
              <li key={item} className="flex items-start space-x-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" /><span>{item}</span></li>
            ))}
          </ul>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            {[['Pirangut', 'pirangut'], ['Bhugaon', 'bhugaon'], ['Bavdhan', 'bavdhan'], ['Paud Road', 'paud-road']].map(([n, s]) => (
              <Link key={s} href={`/plots/${s}`} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near {n} →</Link>
            ))}
          </div>
        </div>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4 border border-[#C5A059]/30">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Book Your Weekend Villa Plot Site Visit</h2>
          <p className="text-sm text-[#FAF8F5]/80">Experience the estate and Mulshi views firsthand. Complimentary site visits 7 days a week.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View Plot Masterplan</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Mulshi</h2>
          {faqs.map(faq => (
            <details key={faq.q} className="bg-white rounded-xl border border-[#C5A059]/30 p-5 group">
              <summary className="font-semibold text-sm text-[#122A23] cursor-pointer list-none flex items-center justify-between">{faq.q}<ChevronRight className="w-4 h-4 text-[#C5A059] group-open:rotate-90 transition-transform shrink-0 ml-2" /></summary>
              <p className="text-sm text-[#5A6E67] mt-3 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
