import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Bhukum Pune | K Raheja Viva — Villa Plots West Pune",
  description: "Buy NA villa plots near Bhukum, West Pune. K Raheja Viva is 7 km from Bhukum — luxury gated plotted development with Sahyadri views. RERA approved, clear NA title.",
  keywords: ["NA plots near Bhukum","villa plots Bhukum Pune","Bhukum real estate","plots near Bhukum Pune","Bhukum property investment"],
  path: "/plots/bhukum",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Bhukum?",
    "a": "K Raheja Viva is 7 km from Bhukum, approximately a 15 minute drive via NH-48 and Paud Road."
  },
  {
    "q": "Is Bhukum good for plot investment?",
    "a": "Bhukum is well connected via NH-48 and benefits from proximity to both Bavdhan's infrastructure and Pirangut's nature corridor, making it a strong appreciation micro-market."
  },
  {
    "q": "What facilities are near Bhukum?",
    "a": "Bhukum has excellent access to Bavdhan's schools, hospitals, and malls, along with the natural amenities of the Pirangut-Mulshi corridor."
  },
  {
    "q": "Are there RERA-approved plots near Bhukum?",
    "a": "K Raheja Viva in Pirangut is the nearest RERA-registered NA villa plot community from Bhukum, with clear title and full infrastructure."
  },
  {
    "q": "What is the price of plots near Bhukum?",
    "a": "Developed NA plots near Bhukum at K Raheja Viva start from ₹80 Lakh for 2,000 sq ft, with prices rising based on size and facing."
  }
];

export default function BhukumPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('bhukum', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Bhukum", href: "/plots/bhukum" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 BHUKUM · WEST PUNE · 7 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Bhukum — K Raheja Viva Pirangut Luxury Estate</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Bhukum is the gateway micro-market between Bavdhan and Pirangut on NH-48. K Raheja Viva offers premium NA villa plots 7 km from Bhukum with Sahyadri views.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "7 km" }, { label: 'Primary Highway', value: "NH-48 Bypass" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Bhukum — Real Estate & Investment Overview</h2>
          <p>Bhukum occupies a unique position at the confluence of the Bavdhan residential market and the emerging Pirangut plotted development corridor. Located on the NH-48 Bavdhan Bypass, Bhukum provides excellent connectivity to Chandani Chowk (5 km), Bavdhan (4 km), and Pirangut (7 km). The micro-market is increasingly popular with buyers who want the infrastructure of Bavdhan with the nature quotient of Pirangut.</p>
          <p>K Raheja Viva in Pirangut (7 km from Bhukum via NH-48 Bypass and Paud Road) is the most accessible luxury plotted estate for Bhukum-area buyers. The estate\'s 100+ acre expanse, 6,500+ native trees, Sahyadri mountain backdrop, and 40+ amenities provide the ideal complement to Bhukum\'s connectivity advantages.</p>
          <p>Bhukum\'s land values have appreciated significantly due to its position between two established markets (Bavdhan) and the high-appreciation Pirangut corridor. The NH-48 bypass has opened up Bhukum for commercial and residential development, making adjacent plotted investments in Pirangut even more attractive as spillover demand grows.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/bavdhan'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Bavdhan →</Link>
            <Link href={'/plots/pirangut'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Pirangut →</Link>
            <Link href={'/plots/chandani-chowk'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Chandani Chowk →</Link>
            <Link href={'/plots/bhugaon'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Bhugaon →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Bhukum</h2>
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
