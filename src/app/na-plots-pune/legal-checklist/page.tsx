import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, AlertTriangle, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'NA Plot Legal Checklist Pune 2025 | 15 Documents to Verify | K Raheja Viva',
  description: '15-point legal checklist for buying an NA plot in Pune 2025. Title verification, NA order, 7/12 extract, encumbrance certificate, RERA check, and more. Expert guide by K Raheja Corp.',
  keywords: ['NA plot legal checklist', 'documents for NA plot Pune', 'NA plot title verification', '7/12 extract plot', 'encumbrance certificate plot', 'legal due diligence plot Pune'],
  path: '/na-plots-pune/legal-checklist',
});

const faqs = [
  { q: 'What is the 7/12 Utara and why is it important?', a: 'The 7/12 Utara (Satbara extract) is a land record maintained by the Revenue Department. It contains ownership details, land survey number, area, and most importantly, the land use purpose. For NA plots, the land use must say "NA Residential."' },
  { q: 'What is an Encumbrance Certificate?', a: 'An Encumbrance Certificate (EC) shows all registered transactions (mortgages, loans, liens) on a property. An EC for the last 30 years with nil encumbrances confirms the plot is free from financial liabilities.' },
  { q: 'What should I check on the NA Order?', a: 'The NA Order issued by the District Collector should specify the survey number, area, converted purpose (residential), conditions of conversion, and the conversion fee paid. Verify it matches the plot you are purchasing.' },
  { q: 'Is RERA registration mandatory for plot purchases?', a: 'Under MahaRERA, plotted developments of more than 500 sq meters or 8 plots must be RERA registered. Always verify on maharera.mahaonline.gov.in before purchasing.' },
  { q: 'What is mutation and why is it important?', a: 'Mutation is the process of updating the revenue records to reflect the new owner after a property transaction. Without mutation, the previous owner remains on record, which can create complications in future transactions.' },
];

const checklist = [
  { num: 1, doc: '7/12 Utara (Satbara Extract)', category: 'Revenue Document', check: 'Land use must say NA Residential. Verify survey number, area, and current ownership name.', risk: 'High' },
  { num: 2, doc: 'NA Order', category: 'Revenue Document', check: 'Issued by District Collector. Verify survey number, area, converted purpose, and conditions of conversion.', risk: 'High' },
  { num: 3, doc: 'Title Search Report (30 years)', category: 'Legal Document', check: 'Prepared by a qualified advocate. Confirms unbroken chain of title from original landowner to present seller.', risk: 'High' },
  { num: 4, doc: 'Encumbrance Certificate', category: 'Legal Document', check: 'From Sub-Registrar. Nil encumbrance for last 30 years confirms no mortgages, loans, or liens on the plot.', risk: 'High' },
  { num: 5, doc: 'Property Card (Village Form 8A)', category: 'Revenue Document', check: 'Confirms current ownership in CTS/revenue records. Must match the seller name in the Sale Agreement.', risk: 'High' },
  { num: 6, doc: 'RERA Registration Certificate', category: 'Regulatory', check: 'Verify on maharera.mahaonline.gov.in. Check RERA number, project details, developer details, and possession date.', risk: 'High' },
  { num: 7, doc: 'Layout Approval / TP Scheme', category: 'Planning', check: 'Verify plot layout is approved by PMRDA/Gram Panchayat. Confirm internal roads, open spaces, and utility zones are properly demarcated.', risk: 'High' },
  { num: 8, doc: 'Original Sale Deed Chain', category: 'Legal Document', check: 'Review all registered Sale Deeds from the original grant to the current seller. Each transfer must be properly registered.', risk: 'High' },
  { num: 9, doc: 'Survey / Measurement Certificate', category: 'Technical', check: 'Licensed government surveyor must confirm plot boundaries match the registered area and survey number.', risk: 'Medium' },
  { num: 10, doc: 'NOC from Gram Panchayat / PMRDA', category: 'Regulatory', check: 'No-objection certificates from relevant local body confirming no outstanding dues, disputes, or orders on the plot.', risk: 'Medium' },
  { num: 11, doc: 'Development Agreement (if applicable)', category: 'Legal Document', check: 'If the seller is a developer who has purchased from a landowner under a DA, verify the DA is registered and all conditions are met.', risk: 'Medium' },
  { num: 12, doc: 'Water Connection Certificate', category: 'Utility', check: 'Confirm water connection is either in place or formally committed by the developer. Check source (borewell/MIDC/municipal).', risk: 'Medium' },
  { num: 13, doc: 'Electricity Connection Document', category: 'Utility', check: 'Verify MSEDCL/MSEB connection or formal commitment for electrical infrastructure to each plot.', risk: 'Medium' },
  { num: 14, doc: 'Tax Receipts (Property Tax)', category: 'Revenue Document', check: "Verify all property tax receipts up to the current date are paid. Outstanding taxes become the buyer's liability after purchase.", risk: 'Low' },
  { num: 15, doc: 'Builder-Buyer Agreement (BBA)', category: 'Legal Document', check: 'Under RERA, the BBA must be a standardised agreement. Review all clauses: price, possession, penalty, maintenance, force majeure.', risk: 'High' },
];

export default function LegalChecklistPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'NA Plots Pune', url: '/na-plots-pune' },
    { name: 'Legal Checklist', url: '/na-plots-pune/legal-checklist' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema(breadcrumbItems)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'NA Plots Pune', href: '/na-plots-pune' }, { label: 'Legal Checklist', href: '/na-plots-pune/legal-checklist' }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">⚖️ LEGAL DUE DILIGENCE CHECKLIST — 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">NA Plot Legal Checklist — 15 Documents to Verify Before Buying</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">A comprehensive 15-point legal due diligence checklist for buying an NA plot in Pune. Protect your investment by verifying these critical documents before signing any agreement.</p>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 font-medium">Always appoint a qualified property advocate to conduct this due diligence. Never rely solely on the seller or developer for document verification.</p>
        </div>

        <div className="space-y-4">
          {checklist.map(item => (
            <div key={item.num} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 shadow-sm flex gap-4">
              <div className="w-9 h-9 rounded-full bg-[#122A23] text-[#C5A059] font-bold text-sm flex items-center justify-center shrink-0">{item.num}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-serif text-base font-bold text-[#122A23]">{item.doc}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.risk === 'High' ? 'bg-red-50 text-red-700 border border-red-200' : item.risk === 'Medium' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>{item.risk} Risk</span>
                </div>
                <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">{item.category}</span>
                <p className="text-sm text-[#5A6E67] mt-1.5 leading-relaxed">{item.check}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Skip the Legal Hassle — Buy at K Raheja Viva</h2>
          <p className="text-sm text-[#FAF8F5]/80 max-w-lg mx-auto">All 15 points are already verified at K Raheja Viva. RERA registered, 100% clear NA title, advocate-certified documentation. Zero legal risk.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View Verified NA Plots</Link>
            <Link href="/na-plots-pune/buy-guide" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">Buying Process Guide →</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — NA Plot Legal Due Diligence</h2>
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
