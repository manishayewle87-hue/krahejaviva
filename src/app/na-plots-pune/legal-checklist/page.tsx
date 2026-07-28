import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, AlertTriangle, ChevronRight, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'NA Plot Legal Checklist Maharashtra 2025 | 15-Point Verification | K Raheja Viva',
  description: 'Complete 15-point legal checklist to verify an NA plot in Pune before buying. 7/12 extract guide, title search, encumbrance certificate, RERA verification steps. Expert legal guide for Maharashtra buyers.',
  keywords: ['NA plot legal checklist', 'how to verify NA plot Pune', '7/12 extract NA plot', 'NA plot documents checklist', 'legal verification NA plot Maharashtra'],
  path: '/na-plots-pune/legal-checklist',
});

const faqs = [
  { q: 'What is a 7/12 extract (Satbara) and why do I need it?', a: 'The 7/12 extract is a crucial revenue document maintained by the Maharashtra state government. It provides vital details like the survey number, land area, ownership history, and land type. For a residential plot, it must explicitly state that the land use is NA (Non-Agricultural) Residential.' },
  { q: 'What does a Title Search Report entail?', a: 'A Title Search Report is a document prepared by a qualified advocate after tracing the property\'s ownership history for the past 30 years. It verifies that the current seller has the absolute, unencumbered right to sell the property and that the title is clear and marketable.' },
  { q: 'Is MahaRERA registration compulsory for NA plots?', a: 'Yes. In Maharashtra, any plotted development project exceeding 500 square meters or containing more than 8 plots must be registered with MahaRERA. Buying a RERA-registered plot ensures regulatory oversight and protects you from fraud.' },
  { q: 'What is an Encumbrance Certificate (EC)?', a: 'An EC is an official certificate issued by the Sub-Registrar indicating whether the property is free from any legal or financial liabilities, such as mortgages or uncleared loans. A \'Nil\' encumbrance certificate is mandatory before purchase.' },
  { q: 'What is the significance of the NA Order (Parvana)?', a: 'The NA Order is the official permission granted by the District Collector to convert agricultural land into non-agricultural use (e.g., residential, commercial). Without a valid NA order, any construction on the plot is deemed illegal.' },
  { q: 'How do I verify if the plot layout is approved?', a: 'You must check the sanctioned layout plan approved by the relevant local authority, such as PMRDA (Pune Metropolitan Region Development Authority) or the local Gram Panchayat. It should clearly demarcate individual plot boundaries, internal roads, and open spaces.' }
];

const checklist = [
  { num: 1, doc: 'NA Order / Permission (NA Parvana)', category: 'Revenue Document', check: 'Verify the official order issued by the District Collector converting the land from agricultural to residential use. Ensure the survey number matches the plot and check for any conditional clauses regarding development timelines.', risk: 'High' },
  { num: 2, doc: '7/12 Extract (Satbara Utara)', category: 'Revenue Document', check: 'The fundamental land record. Crucially, the land use (Upayog) must state \'NA Residential\' or \'Awasiya\'. Check that the seller\'s name appears as the current owner and verify the exact area and survey number.', risk: 'High' },
  { num: 3, doc: 'Village Form 8A (Property Card)', category: 'Revenue Document', check: 'While 7/12 is for rural areas, the Property Card is the equivalent for urban areas. It confirms the current ownership in City Survey (CTS) records. The owner name must perfectly match the seller in your agreement.', risk: 'High' },
  { num: 4, doc: 'Title Deed / Sale Deed History', category: 'Legal Document', check: 'Obtain a 30-year title search report from a competent advocate. This ensures an unbroken chain of ownership from the original owner to the current seller, confirming a clear and marketable title.', risk: 'High' },
  { num: 5, doc: 'Encumbrance Certificate (EC)', category: 'Legal Document', check: 'Procured from the Sub-Registrar\'s office, an EC confirms there are no registered financial charges, loans, or mortgages pending against the property for the past 15 to 30 years.', risk: 'High' },
  { num: 6, doc: 'MahaRERA Registration', category: 'Regulatory', check: 'For projects >500 sqm or >8 plots, RERA registration is mandatory. Visit the MahaRERA website to verify the project\'s status, promoter details, litigations (if any), and the committed completion date.', risk: 'High' },
  { num: 7, doc: 'PMRDA / NA Layout Approval', category: 'Planning', check: 'Review the sanctioned master plan approved by PMRDA or the local Town Planning authority. Confirm that your specific plot number exists on the approved plan and that adequate space is allocated for roads and amenities.', risk: 'High' },
  { num: 8, doc: 'Mutation of Previous Owners (Naam Nondani)', category: 'Revenue Document', check: 'Ensure that all past transfers of the property have been properly mutated in the revenue records. The mutation entries (Ferfar) validate the history seen on the 7/12 extract.', risk: 'Medium' },
  { num: 9, doc: 'Development Agreement / Power of Attorney', category: 'Legal Document', check: 'If the developer selling the plot is not the original landowner, carefully examine the registered Development Agreement and the irrevocable Power of Attorney to ensure the developer has the legal right to sell.', risk: 'High' },
  { num: 10, doc: 'Society NOC / Layout NOC', category: 'Regulatory', check: 'If purchasing a resale plot within an established society or gated layout, a No Objection Certificate (NOC) from the society committee is required, confirming no pending maintenance dues or objections to the sale.', risk: 'Medium' },
  { num: 11, doc: 'Water & Electricity Infrastructure', category: 'Utility', check: 'Verify the physical availability or documented clearance letters/commitments for basic infrastructure. For water, check for Gram Panchayat or municipal supply NOCs. For electricity, check for MSEDCL sanctions.', risk: 'Medium' },
  { num: 12, doc: 'Environmental Clearance', category: 'Regulatory', check: 'For large township projects (typically exceeding 20 hectares), a formal Environmental Clearance from the State Environmental Impact Assessment Authority (SEIAA) is a legal prerequisite.', risk: 'Medium' },
  { num: 13, doc: 'Bank Encumbrances / Mortgage Check', category: 'Financial', check: 'If the developer has taken project finance, ensure they provide an NOC from the lending bank specifically releasing your plot from the master mortgage upon payment.', risk: 'High' },
  { num: 14, doc: 'Litigation Check', category: 'Legal Document', check: 'Your advocate should conduct a search in relevant civil courts and the MahaRERA portal to ensure there are no ongoing disputes, stay orders, or litigation concerning the property.', risk: 'High' },
  { num: 15, doc: 'Individual 7/12 Extract', category: 'Revenue Document', check: 'Post-registration, ensure you obtain an individual 7/12 extract reflecting your specific Hissa (sub-division) number and your name as the sole owner. This is the final proof of the transaction.', risk: 'High' }
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to verify NA status of plot in Pune",
  "description": "5 essential steps to verify the legal NA (Non-Agricultural) status of a plot in Maharashtra.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Request Documents", "text": "Ask the seller for the latest 7/12 extract and the official NA order from the District Collector." },
    { "@type": "HowToStep", "position": 2, "name": "Check 7/12 Extract", "text": "Look at the 'Upayog' (Use) section. It must clearly state 'NA Residential' or 'Awasiya'." },
    { "@type": "HowToStep", "position": 3, "name": "Verify NA Order", "text": "Read the Collector's NA order to ensure the survey number matches and conditions are met." },
    { "@type": "HowToStep", "position": 4, "name": "Check Online", "text": "Verify the digital 7/12 extract on the Mahabhumi portal using the survey number." },
    { "@type": "HowToStep", "position": 5, "name": "Consult Advocate", "text": "Have a property advocate review both documents to confirm their authenticity and legal standing." }
  ]
};

export default function LegalChecklistPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'NA Plots Pune', url: '/na-plots-pune' },
    { name: 'Legal Checklist', url: '/na-plots-pune/legal-checklist' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema(breadcrumbItems), howToSchema]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'NA Plots Pune', href: '/na-plots-pune' }, { label: 'Legal Checklist', href: '/na-plots-pune/legal-checklist' }]} />

        <div className="space-y-6">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">⚖️ LEGAL DUE DILIGENCE CHECKLIST — 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Plot Legal Checklist: 15-Point Verification Guide (Maharashtra 2025)</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">Buying an NA plot is a major financial decision. In Maharashtra, property laws are stringent, and missing a single document can lead to decades of litigation or financial loss. This comprehensive 15-point legal checklist empowers you to verify the title, RERA compliance, and revenue records of any plot in Pune before you sign on the dotted line.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/na-plots-pune/buy-guide" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122A23] text-white font-bold text-sm hover:bg-[#1a3d33] transition-colors">Step-by-Step Buying Guide <ArrowRight className="w-4 h-4"/></Link>
            <Link href="/na-plots-pune/investment-guide" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#122A23] border border-[#C5A059] font-bold text-sm hover:bg-amber-50 transition-colors">Investment Analysis <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>

        <section className="bg-amber-50 border border-amber-300 rounded-2xl p-6 md:p-8 flex gap-4 items-start shadow-sm">
          <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-amber-900 mb-2">Why Legal Verification is Critical</h2>
            <p className="text-base text-amber-800 leading-relaxed text-justify">
              The real estate market, particularly the unorganized plotting sector, is fraught with risks such as double-selling, fake NA orders, and encroachment. Purchasing land without rigorous legal due diligence can result in your investment being frozen in court, or worse, the property being demolished by municipal authorities for lacking proper sanctions. A thorough verification ensures that you acquire a 'clear and marketable title'—meaning the property is indisputably yours and can be easily financed or resold in the future. Never rely on verbal assurances or photocopies. Always engage an independent property advocate and insist on verifying original documents against government portals like MahaRERA and Mahabhumi.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">The 15-Point Master Checklist</h2>
          <div className="space-y-6">
            {checklist.map(item => (
              <div key={item.num} className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-full bg-[#122A23] text-[#C5A059] font-bold text-xl flex items-center justify-center shrink-0">{item.num}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#122A23]">{item.doc}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 ${item.risk === 'High' ? 'bg-red-50 text-red-700 border border-red-200' : item.risk === 'Medium' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>{item.risk} Risk</span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold uppercase tracking-wider mb-3">{item.category}</span>
                  <p className="text-base text-[#5A6E67] leading-relaxed text-justify">{item.check}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">7/12 Extract Field-by-Field Guide</h2>
          <p className="text-[#5A6E67]">The 7/12 extract is in Marathi. Here is a guide to translating and verifying its critical fields.</p>
          <div className="overflow-x-auto bg-white rounded-xl border border-[#C5A059]/30 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#122A23] text-white">
                  <th className="p-4 border-b border-[#122A23] font-semibold w-1/3">Field (English)</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold w-1/3">Marathi Name</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold w-1/3">What to Check</th>
                </tr>
              </thead>
              <tbody className="text-[#3A4E45]">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#122A23]">Survey Number</td>
                  <td className="p-4 text-gray-600">Gut Kramank</td>
                  <td className="p-4 font-medium text-green-700">Must exactly match your agreement/allotment letter</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-[#122A23]">Hissa Number</td>
                  <td className="p-4 text-gray-600">Hissa Kramank</td>
                  <td className="p-4 font-medium">Indicates your specific sub-divided plot</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#122A23]">Owner Name</td>
                  <td className="p-4 text-gray-600">Dharandar Naam</td>
                  <td className="p-4 font-medium text-green-700">Must match the seller's name exactly</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-[#122A23]">Land Type</td>
                  <td className="p-4 text-gray-600">Jamin Prakar</td>
                  <td className="p-4 font-medium">Should note conversion from Jirayat/Bagayat to NA</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#122A23]">Purpose / Land Use</td>
                  <td className="p-4 text-gray-600">Upayog</td>
                  <td className="p-4 font-bold text-red-600">CRITICAL: Must show 'NA Residential' or 'Awasiya'</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-[#122A23]">Area</td>
                  <td className="p-4 text-gray-600">Kshetrafal</td>
                  <td className="p-4 font-medium">Area in Hectares/Ares. Convert to sq.ft and match deed.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#122A23]">Survey Date</td>
                  <td className="p-4 text-gray-600">Nondani Tariikh</td>
                  <td className="p-4 font-medium">Ensure you have a recent printout (within 3-6 months)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">10 Red Flags to Abort the Purchase</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "The seller refuses to provide a clear, 30-year Title Search Report.",
              "The 7/12 extract still shows the land use as Agricultural.",
              "The project is not registered with MahaRERA despite having >8 plots.",
              "The NA order is verbal or a 'provisional' application receipt.",
              "The Encumbrance Certificate shows active bank loans not disclosed.",
              "The physical plot boundaries do not match the sanctioned layout map.",
              "There are ongoing civil court disputes mentioned in the title report.",
              "The developer does not have a registered Development Agreement.",
              "The seller insists on receiving a large portion of payment in cash.",
              "The plot falls in a designated green zone, tribal land, or buffer zone."
            ].map((flag, idx) => (
              <div key={idx} className="flex gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-sm text-red-900 font-medium">{flag}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Documents to Collect Before Registration</h2>
          <div className="bg-white p-6 rounded-2xl border border-[#C5A059]/30 shadow-sm">
            <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-[#5A6E67] font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Original Draft Sale Deed</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> E-Challans for Stamp Duty & Registration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Copy of Seller's PAN and Aadhaar</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Title Search Report and Certificate</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> MahaRERA Registration Certificate</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Approved PMRDA Layout Plan</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Latest 7/12 Extract (Computerized)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Bank NOC (if project was mortgaged)</li>
            </ul>
          </div>
        </section>

        <section className="bg-[#122A23] rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5] font-bold">Invest with Zero Legal Risk</h2>
          <p className="text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto">K Raheja Viva plots are 100% legally vetted, RERA-registered, and come with an impeccable, clear NA title. Secure your legacy without the anxiety of legal loopholes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all">Explore Verified Plots</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-base text-[#C5A059] font-bold pt-4"><Phone className="w-5 h-5" /><span>Speak to our experts: +91 80 8044 5445</span></div>
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
