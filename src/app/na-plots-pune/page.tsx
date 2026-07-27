import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, realEstateProjectSchema, faqSchema, locationHubs, breadcrumbSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone, ShieldCheck, TrendingUp, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'NA Plots in Pune 2025 | Buy NA Bungalow Plots | K Raheja Viva Pirangut',
  description: 'Complete guide to buying NA plots in Pune 2025. K Raheja Viva offers RERA-approved residential NA villa plots in Pirangut, West Pune with 40+ amenities and Sahyadri views. Clear NA title.',
  keywords: [
    'NA plots Pune', 'NA bungalow plots Pune', 'buy NA plot Pune', 'NA villa plots Pune',
    'residential NA plot Pune', 'RERA approved NA plots Pune', 'premium NA plots Pune',
    'what is NA plot', 'NA plot meaning', 'approved NA plots West Pune', 'gated NA plots Pune'
  ],
  path: '/na-plots-pune',
});

const faqs = [
  { q: 'What is an NA plot?', a: 'NA stands for Non-Agricultural. An NA plot is land that has been officially converted from agricultural use to residential or commercial use by the state government. Only NA-converted land can legally be used for residential construction in Maharashtra.' },
  { q: 'What is the difference between NA and agricultural land?', a: 'Agricultural land cannot be used for residential construction without NA conversion. NA land has received government approval for residential/commercial use, making it legally safe for buying, building, and home loan purposes.' },
  { q: 'How do I verify if a plot has NA status?', a: 'You can verify NA status through the 7/12 extract (Satbara Utara) from the District Revenue Office. The purpose field should mention "residential" or "NA residential." Additionally, check the NA order issued by the District Collector.' },
  { q: 'Is K Raheja Viva a RERA registered project?', a: 'Yes. K Raheja Viva is fully registered under MahaRERA with a valid RERA registration number. All plots come with complete legal documentation, clear NA title, and RERA-compliant sale agreement.' },
  { q: 'Can I get a home loan for an NA plot?', a: 'Yes. NA plots at K Raheja Viva are pre-approved for plot loans from SBI, HDFC, ICICI, Axis Bank, and other leading institutions. Plot loans typically cover 70-75% of the plot value.' },
  { q: 'What documents should I check before buying an NA plot?', a: 'Key documents include: NA Order, 7/12 extract, Title Certificate (last 30 years), Encumbrance Certificate, RERA registration certificate, Sale Deed of previous transactions, Property Card, and NOC from relevant authorities.' },
  { q: 'What is the price of NA plots in Pune?', a: 'NA plot prices in Pune vary widely by location and development quality. In West Pune\'s Pirangut corridor, developed NA plots in master-planned communities like K Raheja Viva range from ₹80 Lakh to ₹4 Crore+ (2,000-6,000+ sq ft).' },
  { q: 'What is stamp duty on NA plot purchase in Pune?', a: 'Stamp duty on NA plot purchase in Pune is 5% of the agreement value for male buyers, 4% for female buyers, and 4.5% for joint male-female purchase. Registration charges are 1% additional (max ₹30,000).' },
  { q: 'Can NRIs buy NA plots in Pune?', a: 'Yes. NRIs can purchase residential NA plots in Pune under FEMA regulations without RBI permission. The plot must be residential NA land (not agricultural or plantation). Payment must be through NRE/NRO accounts.' },
  { q: 'What is the ROI on NA plot investment in Pune?', a: 'NA plots in premium West Pune locations like Pirangut have delivered 15-22% CAGR over the last 5 years, significantly outperforming apartment investments (8-10% CAGR). K Raheja Viva plots have shown particularly strong appreciation due to master-planned community premium.' },
];

const comparisonData = [
  { factor: 'Legal Status', na: 'Residential NA (safe to build)', agri: 'Agricultural (cannot build legally)', apartment: 'N/A - Built unit' },
  { factor: 'Construction Freedom', na: 'Full freedom to design custom villa', agri: 'Cannot construct without NA conversion', apartment: 'Fixed as-is, no structural changes' },
  { factor: 'Price per sq ft (Pune)', na: '₹3,000–₹6,000', agri: '₹800–₹1,500', apartment: '₹8,000–₹18,000' },
  { factor: 'Annual Appreciation', na: '15–22% (West Pune)', agri: '8–12% (risky, illiquid)', apartment: '8–12%' },
  { factor: 'Maintenance Cost', na: 'Low (as per community rules)', agri: 'Negligible', apartment: 'High (society charges)' },
  { factor: 'Home Loan Eligibility', na: 'Yes (70–75% LTV)', agri: 'No', apartment: 'Yes (80–90% LTV)' },
  { factor: 'Resale Liquidity', na: 'High (in premium communities)', agri: 'Low (restricted buyer pool)', apartment: 'High' },
  { factor: 'GST Applicability', na: 'Exempt (no GST on land)', agri: 'Exempt', apartment: '5% GST on under-construction' },
];

export default function NAPlotsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'NA Plots Pune', url: '/na-plots-pune' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        <JsonLd schema={[localBusinessSchema(), realEstateProjectSchema(), faqSchema(faqs), breadcrumbSchema(breadcrumbItems)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'NA Plots Pune', href: '/na-plots-pune' }]} />

        {/* Hero */}
        <div className="space-y-5">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📋 COMPLETE NA PLOTS GUIDE — PUNE 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">
            NA Plots in Pune — Complete Buyer's Guide 2025
          </h1>
          <p className="text-xl text-[#5A6E67] leading-relaxed max-w-3xl">
            Everything you need to know about buying Non-Agricultural (NA) villa plots in Pune — what NA means, legal verification, price guide by location, and why K Raheja Viva is the most trusted NA plotted development in West Pune.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/na-plots-pune/buy-guide" className="px-5 py-2.5 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold border border-[#C5A059]/40 hover:bg-[#1A3D33] transition-colors">Step-by-Step Buying Guide →</Link>
            <Link href="/na-plots-pune/legal-checklist" className="px-5 py-2.5 rounded-full bg-white text-[#122A23] text-xs font-bold border border-[#C5A059]/30 hover:border-[#C5A059] transition-colors">Legal Checklist (15 Points) →</Link>
            <Link href="/na-plots-pune/investment-guide" className="px-5 py-2.5 rounded-full bg-white text-[#122A23] text-xs font-bold border border-[#C5A059]/30 hover:border-[#C5A059] transition-colors">Investment ROI Guide →</Link>
          </div>
        </div>

        {/* What is NA Plot */}
        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">What is an NA Plot? (Non-Agricultural Land)</h2>
          <p>
            In Maharashtra, all land is classified as either Agricultural or Non-Agricultural (NA). An NA Plot — officially called a Non-Agricultural Land — is a parcel that has been formally converted from agricultural use to an approved residential, commercial, or industrial purpose by the State Government through a process called "NA Conversion" or "Change of Purpose" under the Maharashtra Land Revenue Code (MLRC), 1966.
          </p>
          <p>
            Buying an NA plot is the only legally safe way to purchase land in Maharashtra for residential construction. If you build on agricultural land without obtaining NA conversion, the structure can be declared illegal and demolished by authorities. This makes NA status verification the single most critical step in any plot purchase decision.
          </p>

          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Types of NA Plots in Pune</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { type: 'Residential NA', desc: 'Approved for residential villa construction. The most common and desirable type for home buyers.', tag: 'Best for homes' },
              { type: 'Commercial NA', desc: 'Approved for commercial construction — shops, offices, hotels, resorts.', tag: 'Business use' },
              { type: 'Industrial NA', desc: 'Approved for light/heavy industrial development. Not suitable for residential use.', tag: 'Industrial only' },
            ].map(t => (
              <div key={t.type} className="bg-white rounded-xl p-5 border border-[#C5A059]/30">
                <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">{t.tag}</span>
                <h3 className="font-serif text-base font-bold text-[#122A23] mt-1">{t.type}</h3>
                <p className="text-xs text-[#5A6E67] mt-2">{t.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-[#122A23] font-bold">How to Verify NA Status</h2>
          <ul className="space-y-2">
            {[
              'Check the 7/12 Utara (Satbara extract) from the District Revenue Office — the "Land Use" or "Purpose" column must show "NA Residential" or "Residential"',
              'Obtain and verify the NA Order (issued by the District Collector or State Government)',
              'Verify the Property Card (Village Form 8A) for current ownership and NA purpose',
              'Cross-check with RERA registration on the MahaRERA portal (https://maharera.mahaonline.gov.in)',
              'Obtain a Search Report from a qualified advocate covering the last 30 years of title history',
            ].map(item => (
              <li key={item} className="flex items-start space-x-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" /><span>{item}</span></li>
            ))}
          </ul>

          <h2 className="font-serif text-3xl text-[#122A23] font-bold">NA Plot vs Agricultural Land vs Apartment — Full Comparison</h2>
        </article>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden shadow-sm">
          <div className="bg-[#122A23] p-4 grid grid-cols-4 gap-2 text-center">
            <div className="text-left text-xs font-bold text-[#C5A059] uppercase tracking-wider">Factor</div>
            <div className="text-xs font-bold text-[#FAF8F5] uppercase tracking-wider">NA Plot ✓</div>
            <div className="text-xs font-bold text-[#FAF8F5]/70 uppercase tracking-wider">Agricultural Land</div>
            <div className="text-xs font-bold text-[#FAF8F5]/70 uppercase tracking-wider">Apartment</div>
          </div>
          <div className="divide-y divide-[#C5A059]/15">
            {comparisonData.map((row, i) => (
              <div key={row.factor} className={`grid grid-cols-4 gap-2 px-4 py-3 text-xs ${i % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <span className="font-semibold text-[#122A23]">{row.factor}</span>
                <span className="text-[#122A23] font-medium">{row.na}</span>
                <span className="text-[#5A6E67]">{row.agri}</span>
                <span className="text-[#5A6E67]">{row.apartment}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location Hub Grid */}
        <div className="space-y-5">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">NA Plots by Location in Pune</h2>
          <p className="text-sm text-[#5A6E67]">Browse available NA villa plots by locality. K Raheja Viva in Pirangut serves all key West Pune corridors.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {locationHubs.map(loc => (
              <Link key={loc.slug} href={`/plots/${loc.slug}`}
                className="bg-white rounded-xl p-4 border border-[#C5A059]/30 hover:border-[#C5A059] hover:shadow-md transition-all group">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] mb-2" />
                <div className="font-semibold text-sm text-[#122A23] group-hover:text-[#C5A059] transition-colors">{loc.name}</div>
                <div className="text-[11px] text-[#5A6E67] mt-0.5">{loc.distance}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4 border border-[#C5A059]/30">
          <ShieldCheck className="w-10 h-10 text-[#C5A059] mx-auto" />
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">India's Most Trusted NA Plotted Development</h2>
          <p className="text-sm text-[#FAF8F5]/80 max-w-lg mx-auto">K Raheja Viva is RERA-registered, 100% NA clear title, with 60+ years of K Raheja Corp's trusted legacy in Indian real estate.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View Available Plots</Link>
            <Link href="/rera-guide" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">RERA & Legal Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Frequently Asked Questions — NA Plots in Pune</h2>
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
