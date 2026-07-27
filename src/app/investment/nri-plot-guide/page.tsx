import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, articleSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { TrendingUp, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NRI Plot Investment Pune 2025 | FEMA Guide & K Raheja Viva NA Plots",
  description: "Complete NRI guide to buying NA plots in Pune. FEMA regulations, eligible property types, NRE/NRO accounts, tax implications, repatriation rules, and POA process.",
  keywords: ["NRI plot investment Pune","NRI buy plot Pune","FEMA plot purchase NRI","NRI NA plot India","NRI real estate Pune 2025","NRI buy land Maharashtra"],
  path: "/investment/nri-plot-guide",
});

const faqs = [
  {
    "q": "Can NRIs buy NA plots in Pune?",
    "a": "Yes. NRIs can purchase residential NA plots in Pune without RBI permission under FEMA regulations. Agricultural land requires specific RBI approval, but NA residential plots like K Raheja Viva are open to NRI purchase."
  },
  {
    "q": "What accounts should NRIs use to pay for plots in Pune?",
    "a": "NRI plot purchases must be paid through NRE, NRO, or FCNR bank accounts. Overseas wire transfers to these accounts are permitted."
  },
  {
    "q": "Can an NRI buy a plot in Pune without visiting India?",
    "a": "Yes. NRIs can execute a Power of Attorney (POA) in favour of a trusted person in India. K Raheja Corp assists NRI buyers with the POA process including notarisation and apostille."
  },
  {
    "q": "What is the tax on capital gains for NRI plot sale in India?",
    "a": "LTCG (property held 24+ months) is taxed at 20% with indexation. DTAA provisions may allow credit against tax in the country of NRI residence."
  },
  {
    "q": "Can NRI repatriate proceeds from plot sale in India?",
    "a": "Yes. After payment of applicable taxes, NRIs can repatriate up to $1 million per financial year from plot sale proceeds through the NRO account route with Form 15CA/CB filing."
  },
  {
    "q": "Why is K Raheja Viva a good NRI investment?",
    "a": "K Raheja Viva offers NRIs: RERA registered security, 60+ year developer credibility, 18-22% appreciation, full POA support, video site tours, NRI pricing transparency, and NRI-dedicated relationship managers."
  }
];

export default function InvestmentArticlenriplotguidePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), articleSchema({ title: "NRI Plot Investment Pune 2025 | FEMA Guide & K Raheja Viva NA Plots", description: "Complete NRI guide to buying NA plots in Pune. FEMA regulations, eligible property types, NRE/NRO accounts, tax implications, repatriation rules, and POA process.", path: "/investment/nri-plot-guide", datePublished: '2025-01-15' }), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Investment', href: '/investment' }, { label: 'Article', href: "/investment/nri-plot-guide" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📊 INVESTMENT RESEARCH — 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NRI Guide to Buying NA Plot in Pune — FEMA, Taxation & Repatriation 2025</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">Complete NRI guide to buying NA plots in Pune. FEMA regulations, eligible property types, NRE/NRO accounts, tax implications, repatriation rules, and POA process.</p>
        </div>

        <article className="space-y-5 text-[#3A4E45] text-sm leading-relaxed">
          <p>For Non-Resident Indians (NRIs), investing in NA villa plots in Pune represents one of the most compelling real estate opportunities available globally. Premium plotted developments in West Pune like K Raheja Viva offer the unique combination of high capital appreciation (18-22% per annum), ancestral homeland connection, lifestyle aspiration, and tax-efficient long-term wealth creation.</p>
          <p>Under FEMA (Foreign Exchange Management Act, 1999), NRIs are permitted to purchase residential or commercial property in India without requiring Reserve Bank of India (RBI) permission. This blanket permission covers NA villa plots, apartments, and commercial properties. The critical restriction is that NRIs cannot purchase agricultural land, plantation land, or farmhouses without specific RBI approval. Since K Raheja Viva\'s plots are fully converted Residential NA land, they fall squarely within the category available to NRI buyers.</p>
          <p>Payment for NRI plot purchases must be made through India-based bank accounts — specifically NRE (Non-Resident External), NRO (Non-Resident Ordinary), or FCNR (Foreign Currency Non-Resident) accounts. Funds transferred from overseas via banking channels qualify. Payment cannot be made by travellers\' cheques or foreign currency notes.</p>
          <p>For NRIs unable to be present in India for registration, a Power of Attorney (POA) can be executed in favour of a trusted resident individual (family member or advocate). The POA must be notarised in the country of residence and apostilled (or attested by the Indian Embassy) before it is admissible in India. K Raheja Corp\'s legal team assists NRI buyers through the entire POA process.</p>
          <p>From a tax perspective, NRIs purchasing NA plots in India are subject to Indian capital gains tax on eventual sale. Short-term gains (held under 24 months) are taxed as ordinary income. Long-term gains (24+ months) attract 20% LTCG tax with indexation benefits — significantly reducing the effective tax burden. Under Double Taxation Avoidance Agreements (DTAA) between India and the country of NRI residence, tax already paid in India may be eligible for credit in the NRI\'s country of residence.</p>
          <p>K Raheja Viva specifically structures its NRI purchase process to be seamless: online site tours via video call, digital document review, POA assistance, NRI-friendly payment schedules accepting overseas wire transfers, and dedicated NRI relationship managers for post-purchase support.</p>
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
