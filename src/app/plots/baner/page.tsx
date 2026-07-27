import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Baner Pune | K Raheja Viva — Villa Plots West Pune",
  description: "Buy premium NA villa plots near Baner, Pune. K Raheja Viva is 14 km from Baner — luxury plotted development with Sahyadri views. RERA approved, clear NA title.",
  keywords: ["NA plots near Baner","villa plots near Baner Pune","Baner real estate investment","plots near Baner Hinjawadi","luxury plots near Baner Pune"],
  path: "/plots/baner",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Baner?",
    "a": "K Raheja Viva is approximately 14 km from Baner, a 25-35 minute drive via NH-48 and Paud Road."
  },
  {
    "q": "Are there NA villa plots near Baner?",
    "a": "K Raheja Viva in Pirangut is the most accessible luxury master-planned plotted estate for Baner residents, offering RERA-approved NA villa plots."
  },
  {
    "q": "Is Baner good for real estate investment?",
    "a": "Baner apartments are highly valued but expensive. Plotted land in Pirangut offers superior ROI at lower entry price with greater long-term flexibility."
  },
  {
    "q": "Can IT professionals from Hinjawadi commute and live at K Raheja Viva?",
    "a": "Yes. Hinjawadi IT Park is 18 km from K Raheja Viva via Chandani Chowk. Many residents work in Hinjawadi and use the estate as a primary or weekend residence."
  },
  {
    "q": "What is the investment potential of plots near Baner?",
    "a": "Plots in Pirangut near Baner have appreciated 15-20% annually, driven by IT sector demand spillover and infrastructure development in West Pune."
  }
];

export default function BanerPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Baner", href: "/plots/baner" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 BANER · WEST PUNE · 14 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Baner Pune — K Raheja Viva Luxury Estate</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Baner is Pune's IT corridor residential hub. K Raheja Viva offers premium NA villa plots 14 km from Baner — perfect for IT professionals seeking nature living with Hinjawadi proximity.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "14 km" }, { label: 'Primary Highway', value: "Baner Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Baner — Real Estate & Investment Overview</h2>
          <p>Baner has transformed from a sleepy suburb into Pune\'s premier IT corridor residential destination over the past decade. The combination of proximity to Hinjawadi IT Park (6 km), premium shopping at the Pavillion Mall, quality schools, and vibrant nightlife has made Baner one of Maharashtra\'s most sought-after real estate markets. However, apartment prices have escalated to ₹12,000–₹18,000 per sq ft, making plotted land in the adjacent Pirangut corridor an increasingly attractive alternative for investment-minded Baner residents.</p>
          <p>K Raheja Viva in Pirangut (14 km from Baner via NH-48 and Paud Road) represents the perfect second-home or primary land investment for Baner\'s IT workforce. The estate offers NA villa plots in a master-planned low-density community with Sahyadri mountain views — a perfect antidote to Baner\'s urban density. The drive from Baner to K Raheja Viva takes approximately 25–35 minutes.</p>
          <p>For Baner-based IT professionals, K Raheja Viva offers a compelling lifestyle proposition: work in Hinjawadi or Baner during the week, and retreat to your own villa plot in a nature estate with 6,500+ trees, floodlit cricket lawns, a 25-metre infinity pool, and Sahyadri mountain views every weekend.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/hinjawadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Hinjawadi →</Link>
            <Link href={'/plots/balewadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Balewadi →</Link>
            <Link href={'/plots/mahalunge'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Mahalunge →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Baner</h2>
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
