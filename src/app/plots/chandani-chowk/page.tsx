import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "Plots near Chandani Chowk Pune | K Raheja Viva — Villa Plots West Pune",
  description: "Buy NA villa plots near Chandani Chowk, Pune. K Raheja Viva is 12 km from Chandani Chowk on Paud Road — luxury plotted development with Sahyadri views and MahaRERA approval.",
  keywords: ["plots near Chandani Chowk","NA plots Chandani Chowk Pune","villa plots near Chandani Chowk","real estate Chandani Chowk","luxury plots near Chandani Chowk"],
  path: "/plots/chandani-chowk",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Chandani Chowk?",
    "a": "K Raheja Viva is exactly 12 km from Chandani Chowk on Paud Road, approximately a 20-25 minute drive."
  },
  {
    "q": "Are there villa plots near Chandani Chowk?",
    "a": "K Raheja Viva in Pirangut is the closest premium master-planned plotted development to Chandani Chowk with RERA-registered NA plots."
  },
  {
    "q": "What infrastructure is planned near Chandani Chowk?",
    "a": "The Western Ring Road, Pune Metro Bavdhan extension, and NH-48 expansion are all major infrastructure projects within 10-15 km of K Raheja Viva."
  },
  {
    "q": "Why invest in plots near Chandani Chowk?",
    "a": "Chandani Chowk is Pune's fastest growing infrastructure node. Proximity drives consistent 15-20% annual appreciation for land in the adjacent Pirangut corridor."
  },
  {
    "q": "Can NRIs buy plots near Chandani Chowk?",
    "a": "Yes. K Raheja Viva is open to NRI buyers. The estate is RERA-registered with clear NA title, eligible for NRI purchase under FEMA regulations."
  }
];

export default function ChandaniChowkPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Chandani Chowk", href: "/plots/chandani-chowk" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 CHANDANI CHOWK · WEST PUNE · 12 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">Villa Plots near Chandani Chowk Pune — K Raheja Viva Pirangut</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Chandani Chowk is Pune's most critical infrastructure hub on NH-48. K Raheja Viva, 12 km from Chandani Chowk via Paud Road, is the premier luxury plotted development offering NA villa plots with Sahyadri views.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "12 km" }, { label: 'Primary Highway', value: "NH-48" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Chandani Chowk — Real Estate & Investment Overview</h2>
          <p>Chandani Chowk has emerged as one of Pune\'s most critical junctions — the confluence of the Mumbai–Bangalore National Highway (NH-48), the Bangalore Bypass, the Kothrud grid, and the Bavdhan–Hinjawadi link road. This infrastructure node is the gateway to West Pune\'s growth corridor. The Chandani Chowk flyover and its ongoing infrastructure upgrades are catalysing unprecedented real estate appreciation in a 15-km radius.</p>
          <p>K Raheja Viva, located 12 km from Chandani Chowk on the Paud Road towards Pirangut, is uniquely positioned to capture this appreciation. The estate offers buyers the opportunity to invest in nature-facing plotted land while maintaining direct access to Chandani Chowk\'s connectivity advantages. Travel time from the estate to Chandani Chowk is approximately 20–25 minutes under normal traffic conditions.</p>
          <p>The Pune Metro\'s planned extension towards Bavdhan and the Western Ring Road alignment near Pirangut will further improve Chandani Chowk\'s importance as an infrastructure hub, enhancing the value of plotted investments along the Paud Road corridor. Plot values at K Raheja Viva have appreciated 18–22% per annum since launch, significantly outpacing the broader Pune property market.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/pirangut'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Pirangut →</Link>
            <Link href={'/plots/bavdhan'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Bavdhan →</Link>
            <Link href={'/plots/kothrud'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Kothrud →</Link>
            <Link href={'/plots/hinjawadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Hinjawadi →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Chandani Chowk</h2>
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
