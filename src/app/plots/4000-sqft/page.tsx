import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone, Ruler } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "4,000 Sq Ft NA Plot Pune | K Raheja Viva — Large Bungalow Estate",
  description: "Buy 4000 sq ft NA plot in Pune at K Raheja Viva Pirangut. Large villa estate plot ideal for 5 BHK luxury bungalow with rooftop deck and pool. RERA approved, MahaRERA compliant.",
  keywords: ["4000 sq ft plot Pune","4000 sqft NA plot","444 sq yard plot Pune","large villa plot Pune","luxury bungalow plot Pirangut","estate plot Pune 4000"],
  path: "/plots/4000-sqft",
});

const faqs = [
  {
    "q": "What villa can I build on a 4000 sq ft plot?",
    "a": "A 4,000 sq ft plot allows a double-storey 5 BHK luxury villa of 4,500-6,000 sq ft with rooftop deck, private pool, and extensive garden."
  },
  {
    "q": "What is the price of a 4000 sq ft NA plot in Pune?",
    "a": "At K Raheja Viva, 4,000 sq ft NA plots are priced between ₹1.6 Crore and ₹2.4 Crore."
  },
  {
    "q": "Is 4000 sq ft a large plot in Pune?",
    "a": "Yes. 4,000 sq ft (444 sq yards) is considered a premium large plot size in West Pune's luxury plotted development market."
  },
  {
    "q": "Can I fit a rooftop terrace and pool on 4000 sq ft?",
    "a": "Yes. With efficient architectural planning, a 4,000 sq ft plot comfortably accommodates a rooftop terrace, a compact pool, garden, and 4-car garage."
  }
];

export default function Plot4000sqftPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "4,000 Sq Ft", href: "/plots/4000-sqft" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📐 4,000 SQ FT PLOT · 444 SQ YARDS · LARGE BUNGALOW ESTATE</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">4,000 Sq Ft NA Villa Plots in Pune — K Raheja Viva</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">A 4,000 sq ft plot provides ample space for a grand double-storey villa of 4,500–6,000 sq ft BUA with 5 bedrooms, a rooftop terrace deck, a private pool, and a landscaped garden.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Plot Size', value: "4,000 Sq Ft" },
            { label: 'Sq Yards', value: "444 sq yds" },
            { label: 'Est. Villa BUA', value: "4,500–6,000 sq ft BUA" },
            { label: 'Price Range', value: "₹1.6 Cr – ₹2.4 Cr" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-lg font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden shadow-sm">
          <div className="p-5 bg-[#122A23]">
            <h2 className="font-serif text-xl text-[#FAF8F5] font-bold">Plot Investment Overview — 4,000 Sq Ft</h2>
          </div>
          <div className="divide-y divide-[#C5A059]/20">
            {[
              { label: 'Plot Area', value: "4,000 Sq Ft" },
              { label: 'Plot Area (Sq Yards)', value: "444 sq yds (approx.)" },
              { label: 'Estimated Villa BUA', value: "4,500–6,000 sq ft BUA" },
              { label: 'Price Range', value: "₹1.6 Cr – ₹2.4 Cr" },
              { label: 'Location', value: 'K Raheja Viva, Pirangut, West Pune 412115' },
              { label: 'NA Status', value: 'Residential Non-Agricultural (NA) — Clear Title' },
              { label: 'RERA Registration', value: 'MahaRERA Registered — P52100031XXXX' },
              { label: 'Infrastructure', value: 'Underground water, electricity, drainage, telecom ducts' },
              { label: 'Road Width', value: '12m–18m BT Internal Roads' },
              { label: 'Loan Eligibility', value: 'Pre-approved with SBI, HDFC, ICICI, Axis' },
            ].map((row, i) => (
              <div key={row.label} className={`grid grid-cols-2 px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <span className="font-semibold text-[#122A23]">{row.label}</span>
                <span className="text-[#5A6E67]">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Book Your 4,000 Sq Ft Plot Site Visit</h2>
          <p className="text-sm text-[#FAF8F5]/80">Visit K Raheja Viva and walk 4,000 Sq Ft plots with our land investment advisors.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View Available 4,000 Sq Ft Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Complete Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — 4,000 Sq Ft Plots</h2>
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
