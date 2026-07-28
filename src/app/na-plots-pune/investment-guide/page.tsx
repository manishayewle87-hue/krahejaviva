import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { RoiCalculator } from '@/components/calculator/RoiCalculator';
import { TrendingUp, ChevronRight, Phone, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: 'NA Plot Investment ROI Pune 2025 | Land vs Apartment Returns | K Raheja Viva',
  description: 'Complete investment analysis for NA plots in Pune 2025. West Pune land appreciation CAGR data, plot vs apartment ROI comparison, tax benefits, NRI investment guide, and capital gains analysis. Updated 2025 data.',
  keywords: ['NA plot investment Pune', 'land vs apartment ROI Pune', 'NA plot appreciation Pune', 'plot investment returns', 'West Pune real estate investment 2025', 'NRI plot investment Pune'],
  path: '/na-plots-pune/investment-guide',
});

const faqs = [
  { q: 'Is buying an NA plot a good investment in Pune?', a: 'Yes, highly. NA plots in growth corridors like West Pune (Pirangut, Mulshi) have historically delivered 15-22% CAGR, significantly outperforming apartments and fixed deposits, driven by infrastructure development and a scarcity of quality plotted land.' },
  { q: 'What is the ROI difference between an apartment and a plot?', a: 'Over a 5 to 10-year period, plots generally appreciate at 15-20% per year due to land scarcity. Apartments typically appreciate at 6-10% per year because building structures depreciate over time, and new supply is constantly added.' },
  { q: 'What are the capital gains tax rules for selling an NA plot?', a: 'If sold within 24 months, Short-Term Capital Gains (STCG) apply at your income tax slab rate. If held for more than 24 months, it is considered a Long-Term Capital Asset, and LTCG is taxed at 20% with the benefit of indexation, which significantly lowers the taxable amount.' },
  { q: 'How can I save tax on plot capital gains?', a: 'Under Section 54F of the Income Tax Act, you can claim exemption on LTCG from selling a plot if you reinvest the entire net sale consideration into purchasing or constructing a residential house within a specified timeframe.' },
  { q: 'Can NRIs invest in NA plots in Pune?', a: 'Yes. Under FEMA, Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can freely invest in residential and commercial NA plots in India. They can also repatriate the sale proceeds subject to tax rules and FEMA guidelines.' },
  { q: 'How does the upcoming Pune Ring Road affect plot prices?', a: 'The Pune Ring Road is a massive catalyst. It will drastically cut commute times across the city. Areas adjacent to the Ring Road, like Pirangut, are experiencing front-loaded price appreciation as investors anticipate a surge in demand upon the road\'s completion.' },
  { q: 'Should I buy a plot in a gated community or a standalone plot?', a: 'A gated community plot (like K Raheja Viva) offers vastly superior security, maintained infrastructure (roads, water, electricity), world-class amenities, and legal safety (RERA). Standalone plots are cheaper but carry high risks of encroachment, poor infrastructure, and legal disputes.' },
  { q: 'Can I get a home loan tax deduction on a plot?', a: 'You do not get Section 80C/24(b) deductions for merely buying a plot. However, if you take a loan to buy the plot AND construct a house on it, you can claim deductions on the principal and interest once construction is complete.' }
];

export default function InvestmentGuidePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'NA Plots Pune', url: '/na-plots-pune' },
    { name: 'Investment Guide', url: '/na-plots-pune/investment-guide' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema(breadcrumbItems)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'NA Plots Pune', href: '/na-plots-pune' }, { label: 'Investment Guide', href: '/na-plots-pune/investment-guide' }]} />

        <div className="space-y-6">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📈 EXCLUSIVE INVESTMENT REPORT — 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Plot Investment in Pune 2025 — Complete ROI & Market Analysis</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">Discover why premium NA bungalow plots are the best-performing real estate asset class in Pune. This data-driven guide analyzes West Pune appreciation rates, compares land versus apartment ROI, and details tax strategies for maximum wealth creation.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/na-plots-pune/buy-guide" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122A23] text-white font-bold text-sm hover:bg-[#1a3d33] transition-colors">How to Buy Guide <ArrowRight className="w-4 h-4"/></Link>
            <Link href="/na-plots-pune/legal-checklist" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#122A23] border border-[#C5A059] font-bold text-sm hover:bg-amber-50 transition-colors">Legal Checklist <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Why NA Plots Are the Best Investment in Pune Right Now</h2>
          <div className="text-[#5A6E67] space-y-4 text-base leading-relaxed text-justify">
            <p>For decades, the Indian real estate mindset heavily favored apartments. However, a structural shift is occurring in Pune, and astute investors are pivoting aggressively towards NA (Non-Agricultural) plots, particularly in master-planned gated communities. The foundational economic principle driving this shift is scarcity. While high-rise apartments can be continuously built vertically, creating endless supply, land is an absolutely finite resource. In premium micro-markets, the supply of legally clear, fully developed plotted land is severely constrained.</p>
            <p>Furthermore, Pune is undergoing an unprecedented infrastructure boom. Mega-projects like the Pune Ring Road, the expansion of the Hinjawadi IT Park (Phase III), the Metro line extensions, and the upcoming Missing Link on the Mumbai-Pune Expressway are radically altering the city's accessibility map. Areas in West Pune, once considered peripheral, are rapidly becoming highly connected prime suburbs. Investing in land in these corridors right now captures the massive value uplift generated by this infrastructure.</p>
            <p>Post-COVID, the lifestyle aspirations of the upper-middle class have permanently shifted. There is a surging demand for spacious villas, private gardens, and low-density living, which only NA plots can provide. From an investment perspective, while apartments suffer from depreciation of the physical structure and high maintenance costs, raw land requires near-zero maintenance and appreciates purely on the inherent value of the location. This combination of fixed supply, surging infrastructure-driven demand, and structural appreciation makes NA plots the ultimate long-term wealth multiplier in Pune.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold text-center">Interactive Investment Calculator</h2>
          <RoiCalculator />
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">West Pune Price Appreciation Table (2019-2025)</h2>
          <p className="text-[#5A6E67]">Historical data proves the extraordinary growth trajectory of land in West Pune. Here is the comparative price appreciation for NA plots across key micro-markets.</p>
          <div className="overflow-x-auto bg-white rounded-xl border border-[#C5A059]/30 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#122A23] text-white">
                  <th className="p-4 border-b border-[#122A23] font-semibold">Location</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">2019 Price/sqft</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">2022 Price/sqft</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold text-amber-300">2025 Price/sqft</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold text-green-400">CAGR (6 Years)</th>
                </tr>
              </thead>
              <tbody className="text-[#3A4E45]">
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-[#122A23]">Pirangut</td>
                  <td className="p-4">₹1,800</td>
                  <td className="p-4">₹2,800</td>
                  <td className="p-4 font-bold">₹4,200</td>
                  <td className="p-4 font-bold text-green-600">15.2%</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#122A23]">Mulshi</td>
                  <td className="p-4">₹2,200</td>
                  <td className="p-4">₹3,500</td>
                  <td className="p-4 font-bold">₹5,500</td>
                  <td className="p-4 font-bold text-green-600">16.5%</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-[#122A23]">Bhugaon</td>
                  <td className="p-4">₹1,600</td>
                  <td className="p-4">₹2,400</td>
                  <td className="p-4 font-bold">₹3,600</td>
                  <td className="p-4 font-bold text-green-600">14.5%</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#122A23]">Bavdhan</td>
                  <td className="p-4">₹4,500</td>
                  <td className="p-4">₹6,500</td>
                  <td className="p-4 font-bold">₹9,000</td>
                  <td className="p-4 font-bold text-green-600">12.3%</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-[#122A23]">Hinjawadi</td>
                  <td className="p-4">₹5,000</td>
                  <td className="p-4">₹7,500</td>
                  <td className="p-4 font-bold">₹11,000</td>
                  <td className="p-4 font-bold text-green-600">14.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A6E67] italic font-semibold">Contrast: The average apartment in Pune appreciated at a CAGR of only 8.2% during the same 2019-2025 period.</p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">NA Plot vs. Apartment vs. Agricultural Land</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-green-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#122A23] mb-4 border-b pb-2">Premium NA Plot</h3>
              <ul className="space-y-3 text-sm text-[#5A6E67]">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>Appreciation:</strong> Very High (15-20%+)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>Depreciation:</strong> None (Land never ages)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>Flexibility:</strong> Build custom villa anytime</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>Legal Risk:</strong> Zero (if RERA registered)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <strong>Maintenance:</strong> Minimal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#122A23] mb-4 border-b pb-2">Apartment</h3>
              <ul className="space-y-3 text-sm text-[#5A6E67]">
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"/> <strong>Appreciation:</strong> Moderate (6-10%)</li>
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"/> <strong>Depreciation:</strong> High (Building ages)</li>
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"/> <strong>Flexibility:</strong> Zero (Fixed layout)</li>
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"/> <strong>Legal Risk:</strong> Low</li>
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5"/> <strong>Maintenance:</strong> High & recurring</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#122A23] mb-4 border-b pb-2">Agricultural Land</h3>
              <ul className="space-y-3 text-sm text-[#5A6E67]">
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"/> <strong>Appreciation:</strong> Highly variable</li>
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"/> <strong>Depreciation:</strong> None</li>
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"/> <strong>Flexibility:</strong> Very Low (Farming only)</li>
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"/> <strong>Legal Risk:</strong> Extreme (Encroachment)</li>
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"/> <strong>Eligibility:</strong> Restricted to farmers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Tax Benefits on NA Plot Investment</h2>
          <div className="bg-[#FAF8F5] p-6 md:p-8 rounded-2xl border border-[#C5A059]/30 shadow-sm space-y-4">
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#122A23] mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#C5A059]"/> No GST Implication</h4>
                <p className="text-sm text-[#5A6E67]">Unlike under-construction apartments which attract 5% GST, the purchase of land/plots is entirely exempt from GST, saving you lakhs immediately.</p>
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#122A23] mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#C5A059]"/> Section 54F Exemption</h4>
                <p className="text-sm text-[#5A6E67]">You can completely avoid paying LTCG tax on the sale of a plot if you reinvest the net sale proceeds into purchasing or constructing a new residential property within the specified timelines.</p>
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#122A23] mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#C5A059]"/> Indexation Benefits</h4>
                <p className="text-sm text-[#5A6E67]">Plots held for more than 24 months qualify for Long-Term Capital Gains. You pay 20% tax, but after applying 'indexation', which adjusts your purchase price for inflation, drastically lowering the taxable profit.</p>
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#122A23] mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#C5A059]"/> Section 80C Deduction</h4>
                <p className="text-sm text-[#5A6E67]">If you take a loan to buy the plot and subsequently construct a villa, you can claim tax deductions up to ₹1.5 Lakhs on principal and ₹2 Lakhs on interest upon completion.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">NRI Investment in NA Plots — FEMA Guide</h2>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#C5A059]/30 shadow-sm text-[#5A6E67] leading-relaxed space-y-4">
            <p>For NRIs, investing in Pune plots is a preferred route for wealth repatriation. Key regulations include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Absolute Freedom:</strong> NRIs can acquire residential NA plots without requiring specific permissions from the Reserve Bank of India (RBI).</li>
              <li><strong>Funding Rules:</strong> Payments must be made via inward remittance through regular banking channels or out of funds held in NRE, FCNR, or NRO accounts.</li>
              <li><strong>Restriction:</strong> NRIs are strictly prohibited from purchasing agricultural land, plantation property, or farmhouses in India.</li>
              <li><strong>TDS & Taxation:</strong> When an NRI sells the plot, the buyer must deduct TDS at 20% (plus surcharge) on Long-Term Capital Gains. NRIs can claim refunds by filing returns in India and utilize Double Taxation Avoidance Agreements (DTAA) to prevent being taxed twice.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">5-Year ROI Scenarios (On ₹1 Cr Investment)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-4">Conservative</span>
              <h3 className="text-3xl font-bold text-[#122A23] mb-2">12% CAGR</h3>
              <p className="text-lg font-semibold text-gray-600 mb-4">Value in 5 Years</p>
              <div className="text-4xl font-serif text-[#C5A059] font-bold">₹1.76 Cr</div>
              <p className="text-sm text-[#5A6E67] mt-4 pt-4 border-t">Assuming slower market growth.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-[#C5A059] shadow-md text-center transform scale-105 z-10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white px-3 py-1 text-xs font-bold rounded-full">Most Likely</div>
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full mb-4 mt-2">Moderate</span>
              <h3 className="text-3xl font-bold text-[#122A23] mb-2">15% CAGR</h3>
              <p className="text-lg font-semibold text-gray-600 mb-4">Value in 5 Years</p>
              <div className="text-5xl font-serif text-[#122A23] font-bold">₹2.01 Cr</div>
              <p className="text-sm text-[#5A6E67] mt-4 pt-4 border-t">Historical average for West Pune.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-4">Optimistic</span>
              <h3 className="text-3xl font-bold text-[#122A23] mb-2">20% CAGR</h3>
              <p className="text-lg font-semibold text-gray-600 mb-4">Value in 5 Years</p>
              <div className="text-4xl font-serif text-green-600 font-bold">₹2.49 Cr</div>
              <p className="text-sm text-[#5A6E67] mt-4 pt-4 border-t">Assuming major infra (Ring Road) completion.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Infrastructure Catalysts Driving Pirangut</h2>
          <p className="text-[#5A6E67] text-base leading-relaxed text-justify">
            The extraordinary ROI in West Pune, particularly Pirangut, is underpinned by massive state infrastructure projects. The <strong>Pune Ring Road</strong>, slated for completion around 2026-27, is the biggest game-changer, integrating Pirangut directly with major highways and industrial zones, drastically reducing logistics and travel time. The massive expansion of the <strong>Hinjawadi IT Park</strong> continues to bring tens of thousands of highly-paid professionals into the region annually, driving residential demand. Furthermore, the <strong>Hinjawadi-Shivajinagar Metro Line</strong> will seamlessly connect West Pune to the city center. Finally, the <strong>Mumbai-Pune Expressway Missing Link</strong> project will cut travel time to Mumbai by 30 minutes, making Pirangut a highly attractive weekend home and primary residence destination for Mumbai investors.
          </p>
        </section>

        <section className="bg-[#122A23] rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5] font-bold">Start Your Wealth Creation Journey</h2>
          <p className="text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto">Invest in Pune's fastest-growing corridor with K Raheja Viva. Secure your piece of premium West Pune land before the next wave of appreciation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all">Explore Investment Plots</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-base text-[#C5A059] font-bold pt-4"><Phone className="w-5 h-5" /><span>Consult our investment experts: +91 80 8044 5445</span></div>
        </section>

        <section className="space-y-6 pt-8">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="bg-white rounded-xl border border-[#C5A059]/30 p-6 group cursor-pointer hover:shadow-md transition-all">
                <summary className="font-semibold text-lg text-[#122A23] list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-[#C5A059] group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <p className="text-base text-[#5A6E67] mt-4 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
