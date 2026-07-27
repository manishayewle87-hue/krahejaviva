import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { TrendingUp, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'NA Plot Investment Guide Pune 2025 | ROI & Appreciation | K Raheja Viva',
  description: 'Complete NA plot investment guide for Pune 2025. Historical appreciation data, ROI comparison, tax benefits, and why West Pune plots outperform apartments. By K Raheja Corp Homes.',
  keywords: ['NA plot investment Pune', 'plot ROI Pune', 'land investment Pune', 'plot appreciation Pune', 'best plot investment West Pune', 'NA plot returns Pune 2025'],
  path: '/na-plots-pune/investment-guide',
});

const faqs = [
  { q: 'What is the average appreciation of NA plots in Pune?', a: 'NA plots in premium West Pune micro-markets like Pirangut, Mulshi corridor have appreciated 15-22% CAGR over the last 5 years, significantly outperforming the apartment market (8-10% CAGR).' },
  { q: 'Do plots give better returns than apartments in Pune?', a: 'Historically yes. Plots in premium gated communities in Pune have delivered 2-2.5x better returns than comparable apartment investments over 5-7 year holding periods.' },
  { q: 'What are the tax benefits of investing in a plot?', a: 'Plots held for more than 24 months qualify for Long-Term Capital Gains (LTCG) tax at 20% with indexation benefits. Indexation significantly reduces the taxable gain, making plots tax-efficient long-term investments.' },
  { q: 'Can I earn rental income from a plot?', a: 'Plots earn no rental income until a villa is constructed. However, constructed villas in premium gated communities like K Raheja Viva command strong rental yields of ₹1.5-3.5 Lakh per month for managed rentals.' },
  { q: 'What is the minimum holding period for NA plot investment?', a: 'For maximum returns, a minimum 5-7 year holding period is recommended. However, some K Raheja Viva early investors have achieved 2x returns in 4-5 years due to strong demand-supply dynamics.' },
];

export default function InvestmentGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'NA Plots Pune', href: '/na-plots-pune' }, { label: 'Investment Guide', href: '/na-plots-pune/investment-guide' }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📈 INVESTMENT GUIDE — UPDATED 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">NA Plot Investment in Pune — ROI, Appreciation & Strategy Guide 2025</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">Data-backed guide on NA plot investment returns in Pune 2025. Compare plot vs apartment ROI, understand tax benefits, and learn why K Raheja Viva Pirangut delivers exceptional land investment returns.</p>
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Why NA Plots Outperform Apartments in Pune</h2>
          <p>The fundamental case for NA plot investment over apartments in Pune rests on three structural advantages: scarcity, flexibility, and appreciation multiplier. Unlike apartments — which are commoditised, easily replicated, and depreciate in relative quality over time — well-located NA plots in premium gated communities are inherently scarce assets that can never be created once the land is developed.</p>
          <p>In West Pune's Pirangut–Mulshi corridor, developed NA plots in master-planned communities have appreciated at 15–22% per annum over the last five years, compared to 8–10% for apartments in established Pune suburbs. This outperformance is driven by a powerful demand-supply imbalance: IT sector growth creates 30,000+ new high-income households annually in Pune's western corridor, while the supply of quality plotted land in low-density master-planned communities remains structurally constrained.</p>

          <h2 className="font-serif text-2xl text-[#122A23] font-bold">5-Year Investment Performance — West Pune Plots</h2>
          <div className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden">
            <div className="bg-[#122A23] grid grid-cols-4 p-4 text-xs font-bold text-center">
              <span className="text-left text-[#C5A059] uppercase tracking-wider">Investment Type</span>
              <span className="text-[#FAF8F5]">5-Yr CAGR</span>
              <span className="text-[#FAF8F5]">₹1 Cr → 5 Yrs</span>
              <span className="text-[#FAF8F5]">Risk Level</span>
            </div>
            {[
              { type: 'NA Plots — Premium Gated (West Pune)', cagr: '18–22%', value: '₹2.3–₹2.7 Cr', risk: 'Low-Medium' },
              { type: 'Apartments — Premium West Pune', cagr: '8–11%', value: '₹1.47–₹1.68 Cr', risk: 'Low' },
              { type: 'Raw Agricultural Land (Pune)', cagr: '8–12%', value: '₹1.47–₹1.76 Cr', risk: 'High' },
              { type: 'Mutual Funds (Equity Large Cap)', cagr: '12–15%', value: '₹1.76–₹2.01 Cr', risk: 'Medium-High' },
            ].map((row, i) => (
              <div key={row.type} className={`grid grid-cols-4 p-4 text-xs ${i % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <span className="font-semibold text-[#122A23]">{row.type}</span>
                <span className="text-center text-[#122A23] font-bold">{row.cagr}</span>
                <span className="text-center text-[#5A6E67]">{row.value}</span>
                <span className="text-center text-[#5A6E67]">{row.risk}</span>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Tax Benefits of NA Plot Investment</h2>
          <ul className="space-y-2">
            {[
              'Long-Term Capital Gains (LTCG) tax of 20% with indexation after 24 months holding — indexation significantly reduces taxable gains',
              'No GST on land purchase (only applicable on apartment construction)',
              'Stamp duty deductible from cost of acquisition for capital gains calculation',
              'Section 54F deduction available on capital gains if proceeds are reinvested in residential construction within 3 years',
              'HUF (Hindu Undivided Family) structure can be used for plot ownership with additional tax efficiency',
              'NRI plot investments benefit from DTAA (Double Taxation Avoidance Agreement) provisions — reducing Indian tax liability',
            ].map(item => (
              <li key={item} className="flex items-start space-x-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" /><span>{item}</span></li>
            ))}
          </ul>

          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Key Investment Drivers — West Pune Land Market</h2>
          <p>The fundamental demand drivers for K Raheja Viva and the broader West Pune land market are structural and multi-year in nature. The Hinjawadi IT corridor employs 250,000+ professionals today and is set to add 100,000+ more through Phase III expansion by 2027. The Pune Metro Line 3 (Hinjawadi–Shivajinagar) under construction will unlock an entirely new wave of real estate demand along its alignment. The Western Ring Road — connecting Pirangut to NH-48 — will dramatically reduce travel times to Pune's airport, CBD, and IT hubs, catalysing a second wave of land appreciation in the Pirangut–Mulshi belt.</p>
        </article>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <TrendingUp className="w-10 h-10 text-[#C5A059] mx-auto" />
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Invest in West Pune's Fastest-Appreciating Plotted Development</h2>
          <p className="text-sm text-[#FAF8F5]/80 max-w-lg mx-auto">K Raheja Viva Pirangut — 18–22% CAGR, RERA registered, clear NA title, K Raheja Corp legacy.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/investment" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View ROI Calculator</Link>
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">View Available Plots</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — NA Plot Investment</h2>
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
