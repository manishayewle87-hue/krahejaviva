import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Mahalunge Pune | K Raheja Viva Premium Villa Estate",
  description: "Buy NA villa plots near Mahalunge, Pune. K Raheja Viva is 16 km from Mahalunge — luxury plotted development with Sahyadri views, RERA approved plots from 2000 sqft.",
  keywords: ["NA plots Mahalunge","villa plots near Mahalunge Pune","Mahalunge real estate","plots near Mahalunge Baner","Mahalunge property investment"],
  path: "/plots/mahalunge",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Mahalunge?",
    "a": "K Raheja Viva is approximately 16 km from Mahalunge, a 30-40 minute drive via Baner Road and NH-48."
  },
  {
    "q": "Is Mahalunge a good area for real estate investment?",
    "a": "Yes. Mahalunge benefits from proximity to Hinjawadi IT hub and Baner's social infrastructure, with strong appreciation potential."
  },
  {
    "q": "What are the best NA plot options near Mahalunge?",
    "a": "K Raheja Viva in Pirangut offers the best RERA-registered NA villa plots in the West Pune corridor serving Mahalunge, Baner, and Hinjawadi."
  },
  {
    "q": "What IT companies are near Mahalunge?",
    "a": "Hinjawadi IT Park (Infosys, Wipro, Cognizant, TCS, Syntel and 400+ MNCs) is 3-5 km from Mahalunge, making it highly attractive for IT workforce housing."
  },
  {
    "q": "Will Metro connectivity improve Mahalunge real estate?",
    "a": "Yes. The planned Hinjawadi-Shivajinagar Metro Line 3 passes near Mahalunge, significantly improving connectivity and land value."
  }
];

export default function MahalungePlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Mahalunge", href: "/plots/mahalunge" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 MAHALUNGE · WEST PUNE · 16 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Mahalunge Pune — K Raheja Viva Pirangut</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Mahalunge is rapidly emerging as a premium residential corridor between Baner and Hinjawadi. K Raheja Viva offers NA villa plots 16 km from Mahalunge in a master-planned Sahyadri foothills estate.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "16 km" }, { label: 'Primary Highway', value: "Baner-Mahalunge Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Mahalunge — Real Estate & Investment Overview</h2>
          <p>Mahalunge has emerged as one of West Pune\'s most exciting new residential corridors. Strategically positioned between the established Baner market and the booming Hinjawadi IT hub, Mahalunge offers the convergence of IT workforce demand and residential land supply at relatively accessible price points. The Mahalunge–Baner road has been upgraded, improving connectivity to Hinjawadi, Balewadi, and Chandani Chowk.</p>
          <p>K Raheja Viva in Pirangut (16 km from Mahalunge) serves as an ideal plotted land investment for buyers exploring Mahalunge for real estate opportunities. The estate\'s combination of RERA-registered NA title, full infrastructure, and master-planned community makes it the superior plotted development option in the broader West Pune micro-market.</p>
          <p>Mahalunge\'s growth trajectory is supported by Hinjawadi Phase III IT expansion (creating 100,000+ new IT jobs), improved road connectivity, and the Pune Metro Hinjawadi alignment. These macro drivers will continue to support land value appreciation in adjacent markets including Pirangut through 2027 and beyond.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/baner'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Baner →</Link>
            <Link href={'/plots/hinjawadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Hinjawadi →</Link>
            <Link href={'/plots/wakad'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Wakad →</Link>
            <Link href={'/plots/balewadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Balewadi →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Mahalunge</h2>
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
