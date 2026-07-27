import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "Pirangut vs Mulshi | Premium Villa Plots Location Comparison 2025",
  description: "Compare Pirangut and Mulshi for luxury villa plot investment. Connectivity, price trends, liquidity, and lifestyle factors analysed for 2025 buyers.",
  keywords: ["Pirangut vs Mulshi","Mulshi vs Pirangut plots","best luxury plot West Pune","Mulshi Pirangut investment"],
  path: "/compare/pirangut-vs-mulshi",
});

const faqs = [
  { q: 'What is better — Pirangut (K Raheja Viva) or Mulshi?', a: 'The choice depends on your goals. For long-term capital appreciation and lifestyle quality, Pirangut (K Raheja Viva) offers superior value. Review our detailed comparison above for factor-by-factor analysis.' },
  { q: 'Which has better ROI — plot or flat in Pune?', a: 'Premium plotted developments in West Pune have delivered 18-22% CAGR versus 8-12% for apartments over the last 5 years. Plots also offer zero GST on purchase and complete design freedom.' },
  { q: 'Can I get a home loan for a plot purchase in Pune?', a: 'Yes. Plot loans are available from SBI, HDFC, ICICI and Axis Bank covering 70-75% of the plot value. K Raheja Viva plots are pre-approved.' },
  { q: 'Is K Raheja Viva Pirangut better than other options?', a: 'K Raheja Viva is the only 100+ acre RERA-registered master-planned NA villa plot community in this micro-corridor, offering the most comprehensive amenity package (40+) and the highest investor trust.' },
  { q: 'How do I decide between Pirangut (K Raheja Viva) and Mulshi?', a: 'Consider: investment horizon (5+ years favours plots), lifestyle preferences (nature vs urban convenience), budget (plots offer better value per sq ft), and RERA compliance (always verify).' },
];

export default function ComparisonpirangutvsmulshiPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Compare', href: '/compare/villa-plot-vs-apartment' }, { label: 'Comparison', href: "/compare/pirangut-vs-mulshi" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">⚖️ PROPERTY COMPARISON — UPDATED 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">Pirangut vs Mulshi — Best Luxury Villa Plot Investment Location 2025</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">Compare Pirangut and Mulshi for luxury villa plot investment. Connectivity, price trends, liquidity, and lifestyle factors analysed for 2025 buyers.</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden shadow-sm">
          <div className="bg-[#122A23] grid grid-cols-3 p-5 gap-4 text-center">
            <div className="text-left text-xs font-bold text-[#C5A059] uppercase tracking-wider">Factor</div>
            <div className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Pirangut (K Raheja Viva) ✓</div>
            <div className="text-xs font-bold text-[#FAF8F5]/70 uppercase tracking-wider">Mulshi</div>
          </div>
          <div className="divide-y divide-[#C5A059]/15">
            {[{"factor":"Distance from Pune City","a":"25–30 km","b":"35–45 km"},{"factor":"Road Quality","a":"Good (Paud Road SH-60)","b":"Narrow Ghat Roads"},{"factor":"Organised Plotted Developments","a":"K Raheja Viva (100+ acres)","b":"Very limited"},{"factor":"Construction Activity","a":"Active, well-planned","b":"Restricted (green zone)"},{"factor":"RERA-registered Options","a":"Yes","b":"Very few"},{"factor":"Amenities","a":"40+ (Signature Clubhouse)","b":"Negligible"},{"factor":"Land Liquidity","a":"High (organised community)","b":"Low (remote location)"},{"factor":"Weekend Home Suitability","a":"Excellent","b":"Excellent"},{"factor":"Plot Price (sq ft)","a":"₹3,000–₹6,000","b":"₹2,000–₹4,000 (raw)"}].map((row, i) => (
              <div key={row.factor} className={`grid grid-cols-3 gap-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <span className="font-semibold text-[#122A23] text-xs">{row.factor}</span>
                <span className="text-[#122A23] font-medium text-xs">{row.a}</span>
                <span className="text-[#5A6E67] text-xs">{row.b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">The Smart Choice — K Raheja Viva Pirangut</h2>
          <p className="text-sm text-[#FAF8F5]/80 max-w-lg mx-auto">15–22% CAGR, RERA registered, 40+ amenities, Sahyadri views, clear NA title.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View Available Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Frequently Asked Questions</h2>
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
