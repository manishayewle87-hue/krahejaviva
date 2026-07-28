import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "Plot vs Flat in Pune 2025 | Which Gives Better ROI?",
  description: "Unbiased comparison of plot vs flat investment in Pune 2025. Capital appreciation, rental yield, tax benefits, and long-term wealth creation analysed.",
  keywords: ["plot vs flat Pune","plot or apartment Pune investment","land vs flat returns Pune","plot investment vs flat 2025"],
  path: "/compare/plot-vs-flat-pune",
});

const faqs = [
  { q: 'What is better — Plot (K Raheja Viva) or Flat (Pune)?', a: 'The choice depends on your goals. For long-term capital appreciation and lifestyle quality, Plot (K Raheja Viva) offers superior value. Review our detailed comparison above for factor-by-factor analysis.' },
  { q: 'Which has better ROI — plot or flat in Pune?', a: 'Premium plotted developments in West Pune have delivered 18-22% CAGR versus 8-12% for apartments over the last 5 years. Plots also offer zero GST on purchase and complete design freedom.' },
  { q: 'Can I get a home loan for a plot purchase in Pune?', a: 'Yes. Plot loans are available from SBI, HDFC, ICICI and Axis Bank covering 70-75% of the plot value. K Raheja Viva plots are pre-approved.' },
  { q: 'Is K Raheja Viva Pirangut better than other options?', a: 'K Raheja Viva is the only 100+ acre RERA-registered master-planned NA villa plot community in this micro-corridor, offering the most comprehensive amenity package (40+) and the highest investor trust.' },
  { q: 'How do I decide between Plot (K Raheja Viva) and Flat (Pune)?', a: 'Consider: investment horizon (5+ years favours plots), lifestyle preferences (nature vs urban convenience), budget (plots offer better value per sq ft), and RERA compliance (always verify).' },
];

export default function ComparisonplotvsflatpunePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Compare', href: '/compare/villa-plot-vs-apartment' }, { label: 'Comparison', href: "/compare/plot-vs-flat-pune" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">⚖️ PROPERTY COMPARISON — UPDATED 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">Plot vs Flat in Pune — Which is the Better Investment in 2025?</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">Unbiased comparison of plot vs flat investment in Pune 2025. Capital appreciation, rental yield, tax benefits, and long-term wealth creation analysed.</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden shadow-sm">
          <div className="bg-[#122A23] grid grid-cols-3 p-5 gap-4 text-center">
            <div className="text-left text-xs font-bold text-[#C5A059] uppercase tracking-wider">Factor</div>
            <div className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Plot (K Raheja Viva) ✓</div>
            <div className="text-xs font-bold text-[#FAF8F5]/70 uppercase tracking-wider">Flat (Pune)</div>
          </div>
          <div className="divide-y divide-[#C5A059]/15">
            {[{"factor":"5-Year Appreciation","a":"18–22% CAGR (West Pune plots)","b":"8–12% CAGR (apartments)"},{"factor":"Capital Gain Tax","a":"20% LTCG with indexation (after 24 months)","b":"20% LTCG with indexation (after 24 months)"},{"factor":"GST","a":"Nil on land purchase","b":"5% on under-construction units"},{"factor":"Home Loan LTV","a":"70–75% (plot loan)","b":"80–90% (home loan)"},{"factor":"Entry Price (Pune)","a":"From ₹80 Lakh (prime communities)","b":"From ₹50 Lakh (small apt)"},{"factor":"Design Flexibility","a":"Complete freedom to build custom villa","b":"Fixed layout, no structural changes"},{"factor":"Rental Income","a":"High once villa built","b":"Moderate immediately"},{"factor":"Privacy & Lifestyle","a":"Maximum (independent villa)","b":"Limited (shared building)"},{"factor":"Scarcity Value (long-term)","a":"Very High (land is finite)","b":"Moderate (easily replicated)"}].map((row, i) => (
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
