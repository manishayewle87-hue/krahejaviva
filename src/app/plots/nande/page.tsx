import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Nande Pune | K Raheja Viva — Weekend Villa Plots",
  description: "Buy NA villa plots near Nande, Pune. K Raheja Viva is 19 km from Nande — luxury plotted development ideal for weekend homes with Sahyadri views and 40+ amenities.",
  keywords: ["NA plots near Nande","villa plots Nande Pune","Nande real estate","weekend home plots Nande","luxury plots near Nande Pune"],
  path: "/plots/nande",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Nande?",
    "a": "K Raheja Viva is approximately 19 km from Nande, a 35-45 minute drive."
  },
  {
    "q": "Is Nande good for a weekend home investment?",
    "a": "Nande has natural appeal but lacks managed community infrastructure. K Raheja Viva in Pirangut offers a superior managed estate alternative 19 km from Nande."
  },
  {
    "q": "Can I build a weekend villa at K Raheja Viva?",
    "a": "Yes. All K Raheja Viva plots are residential NA plots ideal for weekend or permanent villa construction with no construction timeline restrictions."
  },
  {
    "q": "What is the appreciation potential near Nande?",
    "a": "The West Pune plotted corridor including areas near Nande has appreciated 15-20% per annum. K Raheja Viva has shown consistent appreciation as a master-planned estate."
  },
  {
    "q": "Are there nature trails near K Raheja Viva?",
    "a": "Yes. The estate borders Sahyadri forest land with walking and trekking trails. The wider Mulshi-Pirangut corridor has extensive nature trails, forts, and waterfalls."
  }
];

export default function NandePlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('nande', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Nande", href: "/plots/nande" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 NANDE · WEST PUNE · 19 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Nande Pune — K Raheja Viva Weekend Estate</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Nande is a peaceful low-density suburb popular for weekend homes. K Raheja Viva offers premium NA villa plots 19 km from Nande — a fully managed nature estate ideal for second homes.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "19 km" }, { label: 'Primary Highway', value: "Nande Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Nande — Real Estate & Investment Overview</h2>
          <p>Nande village, located in the folds of the Sahyadri ranges west of Pune, has emerged as a popular destination for weekend home seekers from Pune and Mumbai. Its low population density, clean air, proximity to nature trails, and relatively affordable land prices make it an attractive alternative to more expensive weekend home markets like Lonavala or Mulshi. However, Nande lacks organised, master-planned residential communities with comprehensive amenities.</p>
          <p>K Raheja Viva in Pirangut (19 km from Nande) provides a compelling solution for buyers drawn to Nande\'s natural character but desiring the security, amenities, and professionally managed environment of a premium gated estate. The estate\'s 100+ acres of Sahyadri foothills land, 6,500+ native trees, 20,000 sq ft Signature Clubhouse, and RERA-registered NA title offer a superior alternative to raw land purchase in Nande.</p>
          <p>For buyers considering Nande for a weekend villa plot investment, K Raheja Viva\'s combination of mature community infrastructure, verified NA title, and institutional developer credentials (K Raheja Corp — 60+ years) makes it the most secure and rewarding investment choice in this micro-corridor.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/hinjawadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Hinjawadi →</Link>
            <Link href={'/plots/mahalunge'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Mahalunge →</Link>
            <Link href={'/plots/sus'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Sus →</Link>
            <Link href={'/plots/lavale'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Lavale →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Nande</h2>
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
