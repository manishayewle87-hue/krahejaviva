import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'How to Buy NA Plot in Pune 2025 — Step by Step Guide | K Raheja Viva',
  description: 'Complete step-by-step guide to buying an NA plot in Pune 2025. Documents required, legal verification, RERA compliance, stamp duty, and registration. K Raheja Viva expert guide.',
  keywords: ['how to buy NA plot Pune', 'buy NA plot guide', 'NA plot buying process', 'documents for NA plot', 'NA plot registration Pune', 'plot buying steps Pune'],
  path: '/na-plots-pune/buy-guide',
});

const faqs = [
  { q: 'What is the first step to buying an NA plot in Pune?', a: 'The first step is verifying the NA status of the plot through the 7/12 Utara (Satbara) extract from the District Revenue Office. This confirms the land has been officially converted for residential use.' },
  { q: 'What documents are required to buy an NA plot?', a: 'Key documents include: NA Order, 7/12 Extract, Title Certificate (30 years), Encumbrance Certificate, RERA Certificate, Sale Deed, Property Card, Building Plan Approval (if applicable), and NOC from relevant authorities.' },
  { q: 'How much stamp duty do I pay for an NA plot in Pune?', a: 'Stamp duty for an NA plot in Pune is 5% for male buyers, 4% for female buyers, and 4.5% for joint male-female purchase. Registration charges are 1% (max ₹30,000).' },
  { q: 'How long does NA plot registration take?', a: 'Registration of an NA plot sale deed at the Sub-Registrar office typically takes 1-3 working days. Prior to registration, document verification and payment of stamp duty must be completed.' },
  { q: 'Can I get a bank loan for an NA plot?', a: 'Yes. Most leading banks (SBI, HDFC, ICICI, Axis) offer plot loans covering 70-75% of the plot value for RERA-registered NA plots. K Raheja Viva plots are pre-approved by multiple banks.' },
  { q: 'What is the TDS on NA plot purchase?', a: 'If the plot value exceeds ₹50 Lakh, the buyer must deduct TDS at 1% of the total sale consideration and deposit it with the Income Tax department before completing registration.' },
];

const steps = [
  { step: 1, title: 'Define Budget & Requirements', desc: 'Determine your total investment budget (plot cost + stamp duty + registration + legal fees), preferred plot size (2,000–6,000+ sq ft), and location requirements (proximity to workplace, schools, highway).' },
  { step: 2, title: 'Shortlist RERA-Registered Projects', desc: 'Only consider plots in RERA-registered projects. Verify registration on MahaRERA portal (maharera.mahaonline.gov.in). RERA registration ensures legal compliance, transparent disclosures, and buyer protection.' },
  { step: 3, title: 'Verify NA Status', desc: 'Request the 7/12 Utara (Satbara extract) and the NA Order from the seller. Confirm the land use purpose mentions "NA Residential." Non-NA land cannot legally be used for construction.' },
  { step: 4, title: 'Conduct Title Verification (30-Year Search)', desc: 'Appoint a qualified property advocate to conduct a 30-year title search. This verifies chain of ownership, absence of encumbrances, litigation, mortgages, or disputes on the plot.' },
  { step: 5, title: 'Review All Documents', desc: 'Review: 7/12 extract, NA Order, Property Card (Village Form 8A), Encumbrance Certificate, RERA registration, existing Sale Deeds, Survey plans, and building permission (if applicable).' },
  { step: 6, title: 'Negotiate & Agree on Price', desc: 'Negotiate the final plot price, payment plan, possession timeline, and all terms. For RERA projects, obtain the Builder-Buyer Agreement (BBA) and cost sheet.' },
  { step: 7, title: 'Pay Stamp Duty & Register', desc: 'Calculate stamp duty (5% male / 4% female) and registration charges (1%). Pay via eChallan online. Execute the Sale Deed in presence of Sub-Registrar with both parties.' },
  { step: 8, title: 'Complete Mutation & Take Possession', desc: 'After registration, apply for mutation in revenue records to transfer the plot in your name. Take physical possession of the plot with a measurement survey done by a licensed surveyor.' },
];

export default function BuyGuidePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'NA Plots Pune', url: '/na-plots-pune' },
    { name: 'Buy Guide', url: '/na-plots-pune/buy-guide' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema(breadcrumbItems)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'NA Plots Pune', href: '/na-plots-pune' }, { label: 'Buy Guide', href: '/na-plots-pune/buy-guide' }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📋 STEP-BY-STEP BUYER GUIDE — UPDATED 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">How to Buy an NA Plot in Pune — Complete Guide 2025</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">A definitive 8-step guide to buying a Non-Agricultural (NA) villa plot in Pune safely and legally in 2025. Covers RERA verification, document checklist, stamp duty calculation, and registration process.</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">8-Step NA Plot Buying Process in Pune</h2>
          <div className="space-y-4">
            {steps.map(s => (
              <div key={s.step} className="flex gap-5 bg-white rounded-2xl p-6 border border-[#C5A059]/30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#122A23] text-[#C5A059] font-serif font-bold text-lg flex items-center justify-center shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#122A23]">{s.title}</h3>
                  <p className="text-sm text-[#5A6E67] mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Buy a Pre-Verified NA Plot at K Raheja Viva</h2>
          <p className="text-sm text-[#FAF8F5]/80 max-w-lg mx-auto">Skip the complexity. K Raheja Viva is RERA-registered with 100% clear NA title, pre-verified documentation, and bank-approved financing — making the buying process seamless.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View Available Plots</Link>
            <Link href="/na-plots-pune/legal-checklist" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">Legal Checklist →</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Buying an NA Plot in Pune</h2>
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
