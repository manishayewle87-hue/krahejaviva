import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots in Bhugaon | K Raheja Viva — Premium Plots West Pune",
  description: "Buy NA villa plots near Bhugaon, West Pune. K Raheja Viva is 4 km from Bhugaon — luxury gated plotted development with Sahyadri views. MahaRERA approved.",
  keywords: ["NA plots Bhugaon","plots in Bhugaon Pune","villa plots Bhugaon","Bhugaon real estate","plots near Bhugaon","luxury plots Bhugaon"],
  path: "/plots/bhugaon",
});

const faqs = [
  {
    "q": "Are there NA plots in Bhugaon?",
    "a": "K Raheja Viva, located 4 km from Bhugaon, offers premium RERA-registered NA villa plots in a master-planned estate on the Paud Road corridor."
  },
  {
    "q": "What is the price of plots near Bhugaon?",
    "a": "Plots near Bhugaon at K Raheja Viva start from ₹80 Lakh for 2,000 sq ft and go up to ₹4 Crore+ for large 6,000+ sq ft estates."
  },
  {
    "q": "How far is Bhugaon from Pune city centre?",
    "a": "Bhugaon is approximately 15 km from Pune city centre via Paud Road and Karve Road."
  },
  {
    "q": "Is Bhugaon good for plot investment?",
    "a": "Yes. Bhugaon sits in the Western Growth Corridor with strong appreciation driven by IT sector spillover and improving infrastructure."
  },
  {
    "q": "What amenities are available near Bhugaon?",
    "a": "Schools, hospitals, and retail are available in adjacent Kothrud (5 km). K Raheja Viva itself provides 40+ amenities including a Signature Clubhouse."
  }
];

export default function BhugaonPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Bhugaon", href: "/plots/bhugaon" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 BHUGAON · WEST PUNE · 4 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Plots near Bhugaon — Premium Villa Plots in West Pune</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Bhugaon is a rapidly growing residential micro-market situated on the Paud Road corridor between Kothrud and Pirangut. Just 4 km from K Raheja Viva, Bhugaon is witnessing a surge in premium plotted development demand.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "4 km" }, { label: 'Primary Highway', value: "Paud Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Bhugaon — Real Estate & Investment Overview</h2>
          <p>Bhugaon occupies a strategic position in the West Pune residential map — far enough from the urban density of Kothrud to offer open land and clean air, yet connected enough via Paud Road to access Pune\'s core within 25 minutes. This corridor has attracted premium plotted development buyers seeking land that combines future capital appreciation with present lifestyle quality.</p>
          <p>K Raheja Viva, located 4 km from Bhugaon at Survey No. 273, Pirangut, is the most accessible master-planned luxury estate for Bhugaon residents and investors. The estate offers NA villa plots ranging from 2,000 to 6,000+ sq ft with RERA registration, clear title, and full infrastructure.</p>
          <p>The Bhugaon-Pirangut micro-corridor has recorded consistent appreciation of 12–18% per annum over the last five years, driven by growing spillover demand from Kothrud, improving Paud Road infrastructure, and proximity to nature reserves.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/pirangut'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Pirangut →</Link>
            <Link href={'/plots/mulshi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Mulshi →</Link>
            <Link href={'/plots/kothrud'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Kothrud →</Link>
            <Link href={'/plots/paud-road'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Paud Road →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Bhugaon</h2>
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
