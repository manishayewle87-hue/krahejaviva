import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Villa Plots near Kothrud Pune | K Raheja Viva Pirangut",
  description: "Buy NA villa plots near Kothrud, Pune. K Raheja Viva is 11 km from Kothrud via Paud Road — premium gated plotted development with Sahyadri views and 40+ amenities.",
  keywords: ["NA plots near Kothrud","villa plots near Kothrud Pune","Kothrud real estate","plots near Kothrud","buy plot near Kothrud Pune","luxury plots Kothrud"],
  path: "/plots/kothrud",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Kothrud?",
    "a": "K Raheja Viva is 11 km from Kothrud via Paud Road, approximately a 20-25 minute drive."
  },
  {
    "q": "Are there NA plots near Kothrud?",
    "a": "K Raheja Viva in Pirangut is the premier NA villa plot community closest to Kothrud, offering master-planned plots with clear title and RERA registration."
  },
  {
    "q": "What hospitals are near K Raheja Viva for Kothrud residents?",
    "a": "Ruby Hall Clinic, KEM Hospital and Deenanath Mangeshkar Hospital in Erandwane are all within 15-20 km of K Raheja Viva."
  },
  {
    "q": "What schools are accessible from K Raheja Viva for families from Kothrud?",
    "a": "Symbiosis International, D.Y. Patil International, Orchid School, and Pawar Public School are all within 15 km via Paud Road."
  },
  {
    "q": "Is buying a plot near Kothrud better than buying an apartment in Kothrud?",
    "a": "Plots near Kothrud in Pirangut have appreciated 18-20% annually versus 8-10% for Kothrud apartments, while offering a fraction of the price with superior long-term flexibility."
  }
];

export default function KothrudPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Kothrud", href: "/plots/kothrud" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 KOTHRUD · WEST PUNE · 11 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Kothrud — K Raheja Viva Pirangut Estate</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Kothrud is Pune's most prestigious residential address. K Raheja Viva offers NA villa plots just 11 km from Kothrud via Paud Road — ideal for Kothrud residents seeking a nature retreat with city conveniences.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "11 km" }, { label: 'Primary Highway', value: "Paud Road / Karve Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Kothrud — Real Estate & Investment Overview</h2>
          <p>Kothrud is universally acknowledged as Pune\'s most desirable residential suburb — a blend of old-world Maharashtrian cultural heritage, premium educational institutions, quality healthcare, and modern retail infrastructure. Home to Symbiosis, IISER Pune, and some of Pune\'s finest schools, Kothrud attracts the city\'s most affluent families. However, apartment prices in Kothrud have crossed ₹15,000–₹20,000 per sq ft, making plotted land investment in the adjacent Paud Road corridor an increasingly compelling alternative.</p>
          <p>Paud Road, which originates in Kothrud\'s Anand Nagar, is the primary artery connecting Kothrud to Bhugaon, Pirangut, and Mulshi. The 11 km distance from Kothrud to K Raheja Viva can be covered in 20–25 minutes, making Raheja Viva a genuine option for Kothrud residents seeking land for a secondary residence, weekend villa, or long-term investment.</p>
          <p>Kothrud-based buyers represent a significant portion of K Raheja Viva\'s investor base. The familiar social infrastructure of Kothrud — schools, hospitals like Ruby Hall and KEM Hospital, malls, and restaurants — is all accessible from the estate within a short drive, giving buyers the best of nature living and urban convenience.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/pirangut'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Pirangut →</Link>
            <Link href={'/plots/bhugaon'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Bhugaon →</Link>
            <Link href={'/plots/paud-road'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Paud Road →</Link>
            <Link href={'/plots/bavdhan'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Bavdhan →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Kothrud</h2>
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
