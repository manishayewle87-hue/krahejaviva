import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Bavdhan | K Raheja Viva Luxury Plotted Development Pune",
  description: "Premium NA villa plots near Bavdhan, West Pune. K Raheja Viva is 9 km from Bavdhan — luxury gated plotted development with Sahyadri views and 40+ amenities.",
  keywords: ["NA plots Bavdhan","villa plots near Bavdhan","Bavdhan real estate","plots near Bavdhan Pune","luxury plots Bavdhan","buy plot Bavdhan"],
  path: "/plots/bavdhan",
});

const faqs = [
  {
    "q": "Are there NA plots near Bavdhan?",
    "a": "K Raheja Viva is located 9 km from Bavdhan in Pirangut, offering premium NA villa plots in a master-planned gated estate."
  },
  {
    "q": "What is the price of villa plots near Bavdhan?",
    "a": "K Raheja Viva plots near Bavdhan start at ₹80 Lakh for 2,000 sq ft and go up to ₹4 Crore for 6,000+ sq ft estates."
  },
  {
    "q": "Is Bavdhan well-connected for daily commute?",
    "a": "Yes. Bavdhan has excellent connectivity via NH-48, Baner Road, and Chandani Chowk junction providing access to Hinjawadi IT Park, Pune CBD, and the Mumbai Expressway."
  },
  {
    "q": "What are the best schools near Bavdhan?",
    "a": "Symbiosis International School, Indus International School, D.Y. Patil International, and Pawar Public School are all within 5-10 km of Bavdhan."
  },
  {
    "q": "How does plot investment near Bavdhan compare to buying an apartment?",
    "a": "Plotted land in the Bavdhan-Pirangut corridor has appreciated 15–20% per annum versus 8–10% for apartments, while offering greater flexibility and lower maintenance costs."
  }
];

export default function BavdhanPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('bavdhan', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Bavdhan", href: "/plots/bavdhan" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 BAVDHAN · WEST PUNE · 9 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Plots near Bavdhan — Luxury Villa Plots in West Pune</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Bavdhan is one of Pune's most established premium residential suburbs, located on NH-48. K Raheja Viva offers luxury NA plots just 9 km from Bavdhan, combining Sahyadri nature living with Bavdhan's urban conveniences.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "9 km" }, { label: 'Primary Highway', value: "NH-48" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Bavdhan — Real Estate & Investment Overview</h2>
          <p>Bavdhan is synonymous with established, upscale residential living in West Pune. Home to premium gated societies, quality schools, hospitals, and the Xion and Pavillion malls, Bavdhan offers comprehensive urban amenities alongside relative greenery. Property prices in Bavdhan\'s apartment market have crossed ₹12,000–₹16,000 per sq ft for premium projects, making plotted land investment in the adjacent Pirangut-Bhugaon corridor a highly attractive value proposition.</p>
          <p>K Raheja Viva, 9 km from Bavdhan on the Paud Road, offers buyers the opportunity to own NA villa plots in a low-density master-planned estate while staying within easy reach of Bavdhan\'s social infrastructure. The estate is strategically positioned off the Mumbai–Bangalore National Highway (NH-48) alignment, providing efficient access to Pune\'s IT hubs and airport.</p>
          <p>Bavdhan residents and investors looking to diversify from apartment holdings into land increasingly choose Pirangut corridor plots for their combination of affordability, future appreciation, and lifestyle quality. K Raheja Viva plots have seen 15–20% capital appreciation per annum over the last 5 years.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/pirangut'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Pirangut →</Link>
            <Link href={'/plots/chandani-chowk'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Chandani Chowk →</Link>
            <Link href={'/plots/bhugaon'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Bhugaon →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Bavdhan</h2>
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
