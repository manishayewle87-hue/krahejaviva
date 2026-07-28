import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Lavale Pune | K Raheja Viva — Villa Plots West Pune",
  description: "Buy NA villa plots near Lavale, Pune. K Raheja Viva is 15 km from Lavale — luxury plotted development with Sahyadri views. MIT-WPU campus proximity makes this ideal for education investors.",
  keywords: ["NA plots near Lavale","villa plots Lavale Pune","Lavale real estate","plots near Lavale MIT","buy plot near Lavale Pune"],
  path: "/plots/lavale",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Lavale?",
    "a": "K Raheja Viva is approximately 15 km from Lavale, a 30-40 minute drive via NH-48 and Paud Road."
  },
  {
    "q": "Is Lavale a good real estate investment in Pune?",
    "a": "Lavale is at an early growth stage, anchored by MIT-WPU. Adjacent areas like Pirangut offer strong appreciation as the education corridor matures."
  },
  {
    "q": "Are there quality schools near K Raheja Viva for Lavale residents?",
    "a": "Yes. MIT-WPU, D.Y. Patil International, and Symbiosis International are all within 15-20 km of K Raheja Viva."
  },
  {
    "q": "What infrastructure is planned near Lavale?",
    "a": "The Hinjawadi Metro extension and Western Ring Road will significantly improve Lavale's connectivity to Pune's core over the next 3-5 years."
  },
  {
    "q": "Can I buy a plot near Lavale for investment?",
    "a": "K Raheja Viva in Pirangut is the best RERA-registered NA villa plot investment in the Lavale-Hinjawadi-Pirangut triangle."
  }
];

export default function LavalePlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('lavale', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Lavale", href: "/plots/lavale" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 LAVALE · WEST PUNE · 15 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Lavale Pune — K Raheja Viva Pirangut Estate</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Lavale is Pune's emerging education-residential hub anchored by MIT-WPU campus. K Raheja Viva offers NA villa plots 15 km from Lavale — ideal for faculty, investors and nature-seekers.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "15 km" }, { label: 'Primary Highway', value: "Lavale Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Lavale — Real Estate & Investment Overview</h2>
          <p>Lavale is transforming rapidly from a rural landscape into an education and residential hub. The MIT World Peace University (MIT-WPU) campus anchors Lavale\'s growth, attracting faculty, students, and residential development. The Lavale-Pirangut-Mulshi belt is increasingly popular with academic professionals, tech entrepreneurs, and families seeking quality education proximity combined with natural surroundings.</p>
          <p>K Raheja Viva in Pirangut (15 km from Lavale) is ideally positioned for Lavale-area buyers. The estate\'s combination of peaceful nature living, 40+ amenities, and proximity to quality schools and IT hubs makes it particularly attractive for faculty at MIT-WPU and IT professionals in adjacent Hinjawadi seeking a nature retreat within a managed community.</p>
          <p>Lavale\'s real estate market is still at an early appreciation stage, meaning adjacent plotted developments in Pirangut like K Raheja Viva offer strong capital appreciation potential as the education and IT corridors mature over the next 5–7 years.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/sus'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Sus →</Link>
            <Link href={'/plots/baner'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Baner →</Link>
            <Link href={'/plots/hinjawadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Hinjawadi →</Link>
            <Link href={'/plots/wakad'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Wakad →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Lavale</h2>
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
