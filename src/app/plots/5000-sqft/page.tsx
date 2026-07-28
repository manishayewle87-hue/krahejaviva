import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone, Ruler } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "5,000 Sq Ft NA Plot Pune | K Raheja Viva — Grand Villa Estate",
  description: "Buy 5000 sq ft NA plot in Pune at K Raheja Viva Pirangut. Grand estate plot for luxury 5-6 BHK villa with private pool and landscape garden. RERA approved, Sahyadri views.",
  keywords: ["5000 sq ft plot Pune","5000 sqft NA plot","555 sq yard plot","grand villa plot Pune","large estate plot Pirangut","5000 sqft bungalow plot"],
  path: "/plots/5000-sqft",
});

const faqs = [
  {
    "q": "What villa can I build on a 5000 sq ft plot?",
    "a": "A 5,000 sq ft plot can accommodate a 5-6 BHK luxury mansion of 5,000-7,000 sq ft with private pool, garden, staff quarters, and 5-car garage."
  },
  {
    "q": "What is the price of a 5000 sq ft NA plot in Pune?",
    "a": "At K Raheja Viva, 5,000 sq ft NA plots are priced between ₹2 Crore and ₹3 Crore."
  },
  {
    "q": "What is 5000 sq ft in square yards?",
    "a": "5,000 sq ft equals approximately 555 square yards."
  },
  {
    "q": "Is 5000 sq ft plot a good investment in Pune?",
    "a": "Yes. Large plots are relatively scarce in organised gated communities. 5,000 sq ft plots at K Raheja Viva have shown superior appreciation as they become increasingly rare."
  }
];

export default function Plot5000sqftPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('5000-sqft', '8000000', '5000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "5,000 Sq Ft", href: "/plots/5000-sqft" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📐 5,000 SQ FT PLOT · 555 SQ YARDS · GRAND VILLA ESTATE</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">5,000 Sq Ft NA Villa Plots in Pune — K Raheja Viva</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">A 5,000 sq ft plot is a truly grand canvas for a 5–6 BHK luxury villa mansion of 5,000–7,000 sq ft BUA with a dedicated pool house, full-scale landscape garden, staff quarters, and multi-car garage.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Plot Size', value: "5,000 Sq Ft" },
            { label: 'Sq Yards', value: "555 sq yds" },
            { label: 'Est. Villa BUA', value: "5,000–7,000 sq ft BUA" },
            { label: 'Price Range', value: "₹2 Cr – ₹3 Cr" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-lg font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden shadow-sm">
          <div className="p-5 bg-[#122A23]">
            <h2 className="font-serif text-xl text-[#FAF8F5] font-bold">Plot Investment Overview — 5,000 Sq Ft</h2>
          </div>
          <div className="divide-y divide-[#C5A059]/20">
            {[
              { label: 'Plot Area', value: "5,000 Sq Ft" },
              { label: 'Plot Area (Sq Yards)', value: "555 sq yds (approx.)" },
              { label: 'Estimated Villa BUA', value: "5,000–7,000 sq ft BUA" },
              { label: 'Price Range', value: "₹2 Cr – ₹3 Cr" },
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
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Book Your 5,000 Sq Ft Plot Site Visit</h2>
          <p className="text-sm text-[#FAF8F5]/80">Visit K Raheja Viva and walk 5,000 Sq Ft plots with our land investment advisors.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View Available 5,000 Sq Ft Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Complete Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — 5,000 Sq Ft Plots</h2>
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
