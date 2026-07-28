import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Sus Pune | K Raheja Viva — Premium Villa Plots West Pune",
  description: "Buy NA villa plots near Sus, Pune. K Raheja Viva is 13 km from Sus — luxury plotted development in Pirangut with Sahyadri views, 40+ amenities, RERA approved.",
  keywords: ["NA plots near Sus","villa plots Sus Pune","Sus real estate","plots near Sus Pashan","luxury plots Sus Pune","buy plot Sus Pune"],
  path: "/plots/sus",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Sus?",
    "a": "K Raheja Viva is 13 km from Sus, approximately a 25-30 minute drive via Sus Road and Chandani Chowk."
  },
  {
    "q": "Are there NA plots near Sus in Pune?",
    "a": "K Raheja Viva in Pirangut is the nearest master-planned luxury NA villa plot community for Sus buyers."
  },
  {
    "q": "Is Sus a good real estate investment?",
    "a": "Sus offers excellent lifestyle but land prices are high. K Raheja Viva in Pirangut offers similar low-density nature living at more attractive investment prices."
  },
  {
    "q": "What is Sus known for in Pune real estate?",
    "a": "Sus is known for its low-density residential character, proximity to Pashan Lake, Sus forest buffer, and premium villa communities."
  },
  {
    "q": "What connectivity does Sus Road offer?",
    "a": "Sus Road connects to Aundh, Baner, and Wakad via Hinjawadi Road, and to Chandani Chowk via NH-48, providing excellent West Pune connectivity."
  }
];

export default function SusPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('sus', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Sus", href: "/plots/sus" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 SUS · WEST PUNE · 13 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Sus Pune — K Raheja Viva Pirangut Estate</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Sus is a boutique low-density luxury residential micro-market adjacent to Pashan and Sus forests. K Raheja Viva offers premium NA villa plots 13 km from Sus — ideal for nature-seeking buyers.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "13 km" }, { label: 'Primary Highway', value: "Sus Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Sus — Real Estate & Investment Overview</h2>
          <p>Sus has positioned itself as one of West Pune\'s most exclusive and low-density residential addresses. Bordering the Pashan Lake conservation zone and the Sus reserve forests, Sus attracts premium buyers seeking expansive villas with natural surroundings. Residential plotted developments in Sus are among the most expensive in West Pune, often exceeding ₹3,000–₹5,000 per sq ft for raw land.</p>
          <p>For buyers drawn to Sus\'s natural character but seeking a more developed community with comprehensive amenities and assured infrastructure, K Raheja Viva in Pirangut (13 km from Sus via Aundh-Sus Road and NH-48) provides the optimal alternative. The estate mirrors Sus\'s low-density philosophy across a 100+ acre master-planned estate — with the added advantage of a 20,000 sq ft Signature Clubhouse, 6,500+ trees, underground utilities, and MahaRERA compliance.</p>
          <p>Sus Road\'s organic connectivity to Baner, Aundh, and Hinjawadi via Wakad makes K Raheja Viva easily accessible for Sus-area buyers seeking a larger plot or second-home land investment at a relatively more accessible price point.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/baner'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Baner →</Link>
            <Link href={'/plots/wakad'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Wakad →</Link>
            <Link href={'/plots/lavale'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Lavale →</Link>
            <Link href={'/plots/chandani-chowk'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Chandani Chowk →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Sus</h2>
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
