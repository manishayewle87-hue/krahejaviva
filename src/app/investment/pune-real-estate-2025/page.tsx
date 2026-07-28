import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, articleSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { TrendingUp, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "Pune Real Estate Market 2025 | Property Trends & Investment Guide",
  description: "Comprehensive Pune real estate market report 2025. Price trends, top investment corridors, infrastructure impact, and expert outlook for West Pune plots.",
  keywords: ["Pune real estate 2025","Pune property market","real estate trends Pune","best investment Pune 2025","Pune property prices 2025"],
  path: "/investment/pune-real-estate-2025",
});

const faqs = [
  {
    "q": "What is the current state of Pune real estate in 2025?",
    "a": "Pune real estate in 2025 is characterised by sustained demand, infrastructure-driven appreciation in West Pune, and strong NRI investment interest. West Pune plotted developments are the standout performers."
  },
  {
    "q": "Which is the best area to invest in Pune in 2025?",
    "a": "West Pune — specifically the Pirangut-Mulshi-Hinjawadi triangle — offers the best combination of appreciation potential, infrastructure tailwinds, and quality of life for 2025 investors."
  },
  {
    "q": "What are the price trends in West Pune for 2025?",
    "a": "Apartment prices in West Pune rose 12-15% YoY in 2024. Premium plotted developments like K Raheja Viva appreciated 18-22% per annum. Both trends are expected to continue into 2025."
  },
  {
    "q": "How is the Hinjawadi Metro impacting West Pune real estate?",
    "a": "Metro Line 3 (Hinjawadi-Shivajinagar) has already lifted land values along its 23-km alignment by 15-20%. On completion, it will significantly improve connectivity and sustain appreciation."
  },
  {
    "q": "Is 2025 a good time to buy a plot in Pune?",
    "a": "Yes. With strong infrastructure pipeline, IT sector growth, and NRI demand, 2025 is considered a high-conviction buying window for premium NA plots in West Pune."
  }
];

export default function InvestmentArticlepunerealestate2025Page() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), articleSchema({ title: "Pune Real Estate Market 2025 | Property Trends & Investment Guide", description: "Comprehensive Pune real estate market report 2025. Price trends, top investment corridors, infrastructure impact, and expert outlook for West Pune plots.", path: "/investment/pune-real-estate-2025", datePublished: '2025-01-15' }), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Investment', href: '/investment' }, { label: 'Article', href: "/investment/pune-real-estate-2025" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📊 INVESTMENT RESEARCH — 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">Pune Real Estate Market Report 2025 — Trends, Prices & Best Investment Locations</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">Comprehensive Pune real estate market report 2025. Price trends, top investment corridors, infrastructure impact, and expert outlook for West Pune plots.</p>
        </div>

        <article className="space-y-5 text-[#3A4E45] text-sm leading-relaxed">
          <p>Pune\'s real estate market in 2025 stands at a significant inflection point. After a robust 2023-2024 recovery cycle that saw residential sales volumes reach a decade high, 2025 is characterised by sustained demand from end-users, rising NRI investment interest, and infrastructure-driven appreciation in select micro-markets.</p>
          <p>West Pune — encompassing Baner, Balewadi, Hinjawadi, Mahalunge, Sus, Wakad, Bavdhan, Bhugaon, and Pirangut — continues to outpace the Pune average. The IT sector, which directly employs 600,000+ professionals in Pune, drives disproportionate demand for quality housing in the western corridor. Average apartment prices in West Pune have risen 12-15% year-on-year in 2024, while premium plotted developments like K Raheja Viva Pirangut have appreciated 18-22% per annum.</p>
          <p>Key infrastructure catalysts shaping the 2025 West Pune market include: the Pune Metro Line 3 (Hinjawadi-Shivajinagar) construction, which has lifted land values along its alignment by 15-20%; the Western Ring Road project connecting Pirangut to NH-48; and the Chandani Chowk flyover upgrades improving NH-48 throughput. PMRDA\'s new Development Plan 2021-2041 has designated significant portions of the Pirangut-Mulshi belt as low-density residential zones, protecting the character of premium plotted developments in this corridor.</p>
          <p>The plotted development segment in Pune has emerged as the standout performer of the 2024-2025 cycle. Demand for NA villa plots in organised gated communities has grown 35% year-on-year in West Pune, driven by post-pandemic lifestyle shifts (preference for owned land over rented apartments), HNI wealth diversification into real estate, and NRI appetite for Pune plotted investments.</p>
          <p>For investors in 2025, the Pirangut-Mulshi-Bhugaon triangle represents the highest conviction West Pune land investment thesis. K Raheja Viva, as the only 100+ acre RERA-registered master-planned plotted estate in this micro-corridor, is the benchmark investment at this cycle stage.</p>
        </article>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <TrendingUp className="w-10 h-10 text-[#C5A059] mx-auto" />
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Invest in West Pune's Best NA Plotted Development</h2>
          <p className="text-sm text-[#FAF8F5]/80 max-w-lg mx-auto">K Raheja Viva Pirangut — RERA registered, clear NA title, 18-22% CAGR, 40+ amenities.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View Available Plots</Link>
            <Link href="/investment" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">ROI Calculator →</Link>
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
