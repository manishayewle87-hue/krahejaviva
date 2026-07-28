import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "Plots on Paud Road Pune | K Raheja Viva — NA Villa Plots Pirangut",
  description: "Buy NA villa plots on Paud Road, Pune. K Raheja Viva is directly on Paud Road (6 km from Bhugaon junction) — the premier luxury plotted development in this West Pune corridor.",
  keywords: ["plots on Paud Road","NA plots Paud Road Pune","villa plots Paud Road","Paud Road real estate","property on Paud Road Pune","Paud Road investment"],
  path: "/plots/paud-road",
});

const faqs = [
  {
    "q": "What makes Paud Road a good investment corridor?",
    "a": "Paud Road connects Kothrud to Mulshi through Bhugaon and Pirangut, offering the best balance of urban accessibility and natural beauty in West Pune."
  },
  {
    "q": "How far is K Raheja Viva from the Paud Road–Bhugaon junction?",
    "a": "K Raheja Viva is approximately 6 km from the Bhugaon junction, and 11 km from Kothrud on Paud Road."
  },
  {
    "q": "What is the price of plots on Paud Road?",
    "a": "NA plots on Paud Road range from ₹800-₹2,500 per sq ft for raw land, with developed master-planned community plots at K Raheja Viva priced from ₹80 Lakh."
  },
  {
    "q": "Is Paud Road safe to invest in 2025?",
    "a": "Yes. Paud Road has all regulatory approvals, improving infrastructure, and strong demand drivers from Kothrud, Bavdhan, and Mulshi-seeking buyers."
  },
  {
    "q": "What infrastructure is being developed on Paud Road?",
    "a": "Paud Road (SH-60) is being upgraded with widening, new bridges, and improved junctions. The Western Ring Road will create a high-speed bypass near Pirangut."
  }
];

export default function PaudRoadPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('paud-road', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Paud Road", href: "/plots/paud-road" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 PAUD ROAD · WEST PUNE · 6 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots on Paud Road Pune — K Raheja Viva Pirangut</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Paud Road is West Pune's primary growth corridor from Kothrud to Mulshi. K Raheja Viva is the flagship luxury plotted development on Paud Road — just 6 km from Bhugaon junction.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "6 km" }, { label: 'Primary Highway', value: "Paud Road SH-60" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Paud Road — Real Estate & Investment Overview</h2>
          <p>Paud Road (State Highway SH-60) is the primary arterial road connecting Pune\'s urban core at Kothrud with the natural landscapes of Bhugaon, Pirangut, and Mulshi. Over the past five years, Paud Road has evolved from a quiet rural road into one of West Pune\'s most dynamic real estate corridors. The stretch from Bhugaon to Pirangut has witnessed the development of premium residential projects, commercial establishments, schools, and hospitality venues, driven by growing demand from Kothrud, Bavdhan, and IT sector buyers.</p>
          <p>K Raheja Viva is the most prestigious plotted development directly on Paud Road, located at Survey No. 273, Pirangut (adjacent to Aditya Nisarg colony). The project\'s frontage on Paud Road provides excellent accessibility, while its depth into the Sahyadri foothills ensures privacy and natural surroundings.</p>
          <p>The Paud Road corridor has consistently delivered 15–20% per annum land appreciation, driven by infrastructure improvements, growing social amenities, and the organic westward expansion of Pune\'s premium residential market. The upcoming Western Ring Road alignment near Pirangut will provide a second axis of connectivity, further accelerating Paud Road\'s position as West Pune\'s most important plotted development corridor.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/pirangut'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Pirangut →</Link>
            <Link href={'/plots/bhugaon'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Bhugaon →</Link>
            <Link href={'/plots/kothrud'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Kothrud →</Link>
            <Link href={'/plots/mulshi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Mulshi →</Link>
          </div>
        </div>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4 border border-[#C5A059]/30">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Book Your Private Site Visit</h2>
          <p className="text-sm text-[#FAF8F5]/80">Complimentary estate walkthroughs 7 days a week, 10 AM – 7 PM.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View GIS Masterplan & Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Complete Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Paud Road</h2>
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
