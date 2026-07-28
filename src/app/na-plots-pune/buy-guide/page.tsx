import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'How to Buy NA Plot in Pune 2025 | Step-by-Step Guide | K Raheja Viva',
  description: 'Complete 12-step guide to buying an NA bungalow plot in Pune 2025. Stamp duty calculator, bank loan comparison, legal checklist, registration process and tips. MahaRERA approved plots from ₹80L.',
  keywords: ['how to buy NA plot Pune', 'NA plot buying process', 'NA plot registration Pune', 'stamp duty NA plot Pune', 'NA plot home loan', 'buy NA bungalow plot Pune guide'],
  path: '/na-plots-pune/buy-guide',
});

const faqs = [
  { q: 'Can I get a home loan for an NA plot in Pune?', a: 'Yes, major banks offer plot loans up to 70-75% of the agreement value for NA plots in RERA-approved projects. The tenure is typically 15 years. K Raheja Viva plots are pre-approved by SBI, HDFC, ICICI, and Axis Bank.' },
  { q: 'What is the stamp duty for NA plots in Pune in 2025?', a: 'The stamp duty is 5% for male buyers, 4% for female buyers, and 4.5% for joint male-female registrations. Registration charges are 1% capped at ₹30,000.' },
  { q: 'Is it safe to buy NA plots in Pune?', a: 'Yes, provided the plot is RERA-registered, has a clear title, a valid NA order from the District Collector, and is free from encumbrances. Conducting thorough legal due diligence is crucial.' },
  { q: 'Can NRIs buy NA plots in Pune?', a: 'Yes, under FEMA guidelines, NRIs and OCIs can freely purchase residential NA plots in India without requiring special RBI permission. However, they cannot purchase agricultural land or plantation property.' },
  { q: 'How long does the plot registration process take?', a: 'The actual registration at the Sub-Registrar office takes just one day. However, the entire process—including legal verification, loan processing, and document preparation—takes about 4 to 8 weeks.' },
  { q: 'What is mutation or Naam Nondani?', a: 'Mutation is the process of updating the government revenue records (7/12 extract) to reflect the new owner\'s name after the sale deed is registered. It legally establishes your ownership in government records.' },
  { q: 'Are there maintenance charges for NA plots?', a: 'If you buy a plot in a gated community like K Raheja Viva, there will be maintenance charges for upkeep of roads, security, clubhouses, and common amenities. Independent plots may not have these charges but lack amenities and security.' },
  { q: 'Do I have to pay GST on an NA plot purchase?', a: 'No, the sale of land/plots does not attract GST. However, if you purchase a plot and engage a contractor to construct a villa, the construction services will attract GST as per applicable rates.' },
];

const steps = [
  {
    step: 1,
    title: 'Define your requirements and budget',
    desc: 'The journey to purchasing an NA (Non-Agricultural) plot in Pune begins with absolute clarity on your requirements and financial capacity. A well-defined budget is paramount, and it should encompass more than just the base plot cost. You must account for stamp duty (4-5%), registration fees (1%), legal consultation charges, broker fees (if applicable), and potential infrastructure or development charges. Next, clearly outline your purpose: is this an investment for capital appreciation, a site for a weekend holiday home, or a primary residence? This purpose will dictate your preferred location. For instance, primary residences require proximity to schools, hospitals, and workplaces, while weekend homes prioritize scenic beauty and tranquility. Determine the ideal plot size, which in premium developments typically ranges from 2,000 to over 6,000 square feet. By establishing these parameters early, you significantly narrow down the market, ensuring that your search is focused, efficient, and aligned with your long-term wealth and lifestyle goals.'
  },
  {
    step: 2,
    title: 'Research NA plot locations in Pune',
    desc: 'Pune’s geography offers a diverse range of micro-markets, each with its own appreciation trajectory and lifestyle proposition. Researching these locations thoroughly is critical for securing a plot that meets your objectives. West Pune, particularly areas like Pirangut, Mulshi, and Bhugaon, has emerged as the premier destination for NA villa plots. These areas offer a compelling blend of pristine natural surroundings, cooler microclimates, and excellent connectivity to the Hinjawadi IT hub and the Mumbai-Pune Expressway. You can explore specific plots in /plots/pirangut or /plots/mulshi. Evaluate the upcoming infrastructure in these zones; for example, the proposed Pune Ring Road is set to dramatically enhance accessibility in West Pune, acting as a major catalyst for land value appreciation. Visit multiple locations, understand the neighborhood dynamics, check the availability of basic utilities like water and electricity, and gauge the general development pace. Location is the single most immutable factor in real estate, so choose a micro-market that promises both livability and strong capital growth.'
  },
  {
    step: 3,
    title: 'Shortlist RERA-registered projects',
    desc: 'In the post-2017 regulatory environment, MahaRERA (Maharashtra Real Estate Regulatory Authority) is your strongest safeguard against real estate fraud and project delays. You must strictly limit your shortlist to projects that are officially registered with MahaRERA. A RERA registration signifies that the developer has submitted all essential legal titles, layout approvals, and financial disclosures to the government. To verify a project, visit the official MahaRERA portal (maharera.mahaonline.gov.in) and enter the project’s registration number. Review the project details carefully: check the promoter’s track record, the sanctioned layout plans, the list of encumbrances, and the committed possession date. Avoid unorganized, unregistered plot schemes, as they carry immense legal and financial risks, including disputed titles, lack of basic infrastructure, and regulatory violations. Premium plotted developments, like K Raheja Viva, are fully RERA-compliant, offering absolute transparency, legally sound documentation, and peace of mind for buyers.'
  },
  {
    step: 4,
    title: 'Conduct site visits and due diligence',
    desc: 'A physical site visit is an irreplaceable step in the NA plot buying process. It bridges the gap between marketing brochures and ground reality. During your visit, assess the exact location of your shortlisted plot within the layout. Check its orientation (Vastu compliance, if important to you), topography (is it flat or sloping?), and the immediate surroundings. Verify the progress of promised infrastructure—are the internal roads laid? Is there a functional drainage system? Are electricity and water supply lines in place? Engage with the sales team to understand the development timeline and community guidelines. Beyond the physical aspects, this is the time for initial due diligence. Ask for the basic documentation set: the RERA certificate, the NA order, and the approved layout plan. Pay attention to the neighborhood—proximity to polluting industries, high-tension wires, or dispute-prone lands should be noted. A thorough site visit empowers you to make an informed, confident decision.'
  },
  {
    step: 5,
    title: 'Verify NA status (7/12 extract, NA order)',
    desc: 'The bedrock of your plot purchase is its legal status. In Maharashtra, purchasing agricultural land is restricted to registered farmers; hence, verifying the Non-Agricultural (NA) status is non-negotiable for residential buyers. You must demand the 7/12 extract (Satbara Utara) and the official NA Order issued by the District Collector. The 7/12 extract is the primary revenue document detailing ownership and land use. Crucially, the "upayog" (purpose) section must explicitly state "NA Residential" or its Marathi equivalent. The NA Order is the formal decree converting the land use from agricultural to residential. Scrutinize this order to ensure all conditions stipulated by the Collector have been fulfilled and that the survey number matches the plot you intend to buy. Buying land without a clear NA status exposes you to the risk of government demolition, inability to secure bank loans, and severe legal penalties. For a deep dive into document verification, refer to our comprehensive /na-plots-pune/legal-checklist.'
  },
  {
    step: 6,
    title: 'Engage a qualified property advocate',
    desc: 'Real estate transactions in India involve complex legal nuances, making the engagement of a qualified, independent property advocate an absolute necessity. Do not rely solely on the developer’s legal team or your broker’s assurances. Your advocate’s primary responsibility is to conduct a rigorous Title Search spanning the last 30 years. This involves tracing the unbroken chain of ownership from the original landowner to the current seller, ensuring there are no missing links or fraudulent transfers. The advocate will obtain an Encumbrance Certificate (EC) from the Sub-Registrar’s office to confirm the property is free from mortgages, liens, or ongoing litigation. They will also verify the authenticity of the NA order, layout approvals from PMRDA/Town Planning, and the developer’s right to sell the property (e.g., through a registered Development Agreement). The culmination of this process is a formal Title Search Report and a Title Certificate, giving you the green light that the plot is legally safe to purchase.'
  },
  {
    step: 7,
    title: 'Review and negotiate the Sale Agreement',
    desc: 'Once the legal verification is complete, the next crucial step is finalizing the commercial and legal terms through the Agreement for Sale (or Builder-Buyer Agreement). This document binds both parties and outlines the entire transaction framework. Review every clause meticulously with your advocate. Pay close attention to the total consideration value, the payment schedule (which should be linked to development milestones, not just time-based), the possession date, and penalty clauses for delays. Check the exact dimensions and boundaries of the plot as mentioned in the agreement, ensuring they match the allotment letter. Negotiate terms where possible, especially regarding flexible payment options or specific customized clauses. Ensure there are no hidden charges regarding maintenance, club memberships, or utility connections that were not previously disclosed. Once both parties are satisfied, you will execute this agreement, typically accompanied by the payment of a token amount (earnest money) to secure the plot.'
  },
  {
    step: 8,
    title: 'Arrange financing (plot loan pre-approval)',
    desc: 'If you plan to finance your purchase, securing a plot loan is the next hurdle. Plot loans differ slightly from standard home loans; they typically offer a lower Loan-to-Value (LTV) ratio, usually financing up to 70-75% of the plot’s agreement value, meaning you must fund the remaining 25-30% out of pocket. To streamline the process, seek pre-approval from leading financial institutions like SBI, HDFC, ICICI Bank, or Axis Bank. The bank will conduct its own legal and technical valuation of the property before sanctioning the loan. Opting for a plot in a premium, reputed project like K Raheja Viva offers a significant advantage: these projects are usually pre-approved by major banks (APF - Approved Project Finance). This pre-approval means the bank has already vetted the project’s legal standing, drastically reducing your loan processing time and minimizing the paperwork required from your end. Compare interest rates, processing fees, and foreclosure terms across banks to secure the best deal.'
  },
  {
    step: 9,
    title: 'Execute the Sale Deed / Agreement',
    desc: 'The execution of the Sale Deed (or Conveyance Deed) is the definitive legal act that transfers the ownership of the NA plot from the seller to you. This document must be drafted by your advocate, adhering strictly to the terms agreed upon in the preceding Sale Agreement. It contains detailed descriptions of the property, including survey numbers, exact dimensions, boundaries, and the total consideration paid. Both the buyer and the seller (or their authorized representatives with a valid Power of Attorney) must sign the Sale Deed in the presence of at least two independent witnesses. It is crucial to ensure that all financial transactions (bank transfers, demand drafts) are completed and properly recorded within the deed before execution. The Sale Deed is the most critical document in your property portfolio; any errors or omissions here can lead to severe legal and financial complications down the line. Review it multiple times before signing.'
  },
  {
    step: 10,
    title: 'Pay stamp duty and registration charges',
    desc: 'Before the Sale Deed can be legally registered, you are obligated to pay the requisite stamp duty and registration charges to the Government of Maharashtra. Stamp duty is a state tax levied on property transactions, and its rate depends on the gender of the buyer and the location of the property. In Pune, as of 2025, the stamp duty for NA plots is generally 5% for male buyers. To encourage female property ownership, a concession is offered, bringing the rate down to 4% for female buyers, and 4.5% for joint male-female purchases. In addition to stamp duty, a registration fee of 1% of the property value (capped at a maximum of ₹30,000) is applicable. These payments are now made online through the Government Receipt Accounting System (GRAS) via an e-Challan. Keep the challan receipts safe, as they are mandatory documents required by the Sub-Registrar during the final registration process. Note that PMRDA areas may attract additional infrastructure or metro cess charges.'
  },
  {
    step: 11,
    title: 'Complete Sub-Registrar registration in Pune',
    desc: 'With the Sale Deed executed and taxes paid, you must now officially register the transaction. Registration provides public notice of your ownership and is mandatory under the Registration Act. You need to book an appointment at the office of the Sub-Registrar of Assurances under whose jurisdiction the plot falls. On the appointed day, the buyer, the seller, and the two witnesses must be physically present at the office. You will need to submit the original Sale Deed, the e-Challans for stamp duty and registration fees, identity proofs (Aadhaar and PAN cards), and the RERA certificate (if applicable). The Sub-Registrar will verify the documents, capture the biometric data (fingerprints and photographs) of all parties, and record the transaction in the government registry. Once processed, you will receive the original registered Sale Deed, complete with the Sub-Registrar’s seal and registration number. This document is your ultimate proof of absolute ownership.'
  },
  {
    step: 12,
    title: 'Mutation of name in 7/12 extract (Naam Nondani)',
    desc: 'The registration of the Sale Deed does not automatically update your name in the local revenue records; this requires a separate process known as Mutation or \'Naam Nondani\'. Mutation is essential for the calculation and payment of property taxes and for establishing your ownership in the eyes of the local administration (Talathi). You or your advocate must apply for mutation at the local Tahsildar or Talathi office, submitting a copy of the registered Sale Deed and an application form. The Talathi will issue a notice calling for objections (if any) within a stipulated timeframe (usually 15 days). If no objections are raised, the revenue records are updated, and your name replaces the seller’s name on the 7/12 extract and the Village Form 8A (Property Card). Obtaining the updated 7/12 extract with your name is the final, concluding step in the NA plot buying process, securing your investment fully and formally.'
  }
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Buy an NA Plot in Pune",
  "description": "Complete 12-step guide to buying an NA bungalow plot in Pune.",
  "step": steps.map((s) => ({
    "@type": "HowToStep",
    "position": s.step,
    "name": s.title,
    "text": s.desc
  }))
};

export default function BuyGuidePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'NA Plots Pune', url: '/na-plots-pune' },
    { name: 'Buy Guide', url: '/na-plots-pune/buy-guide' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema(breadcrumbItems), howToSchema]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'NA Plots Pune', href: '/na-plots-pune' }, { label: 'Buy Guide', href: '/na-plots-pune/buy-guide' }]} />

        <div className="space-y-6">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📋 STEP-BY-STEP BUYER GUIDE — UPDATED 2025</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">How to Buy an NA Plot in Pune — 12-Step Complete Guide 2025</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">Purchasing a Non-Agricultural (NA) bungalow plot in Pune is a significant milestone and a highly rewarding investment. This definitive 12-step guide covers everything from budgeting and RERA verification to stamp duty calculation and the final registration process. Follow this blueprint to ensure a safe, legal, and seamless property acquisition in 2025.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/na-plots-pune/legal-checklist" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122A23] text-white font-bold text-sm hover:bg-[#1a3d33] transition-colors">Legal Checklist <ArrowRight className="w-4 h-4"/></Link>
            <Link href="/na-plots-pune/investment-guide" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#122A23] border border-[#C5A059] font-bold text-sm hover:bg-amber-50 transition-colors">Investment Guide <ArrowRight className="w-4 h-4"/></Link>
            <Link href="/masterplan" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-sm hover:scale-105 transition-all">View Masterplan <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Why Buy an NA Plot in Pune?</h2>
          <div className="text-[#5A6E67] space-y-4 text-base leading-relaxed">
            <p>Pune’s real estate landscape is undergoing a massive transformation, and NA plots are emerging as the most sought-after asset class. The primary driver is the unparalleled freedom to design and build a custom villa that reflects your personal style, a luxury that standard apartments simply cannot offer. Beyond the lifestyle upgrade, NA plots in strategic locations like West Pune offer exceptional wealth creation opportunities.</p>
            <p>Historically, premium land in Pune has appreciated at a staggering 15-22% CAGR, significantly outperforming apartments and other traditional asset classes. This rapid capital appreciation is fueled by the city's expanding IT corridors, particularly Hinjawadi, and massive infrastructure upgrades like the upcoming Pune Ring Road. Furthermore, investing in NA plots is highly tax-efficient; there is absolutely no GST on land purchases, unlike under-construction apartments.</p>
            <p>For Non-Resident Indians (NRIs), NA plots present a frictionless investment avenue. Under FEMA regulations, NRIs are fully eligible to purchase residential NA plots in India, offering a secure way to build an asset base back home. To sweeten the deal, major banks readily offer pre-approved home and plot loans for RERA-registered projects, ensuring liquidity and leverage for savvy investors. Choosing an NA plot is not just buying land; it's securing a high-growth, flexible, and prestigious asset for generations.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">The 12-Step Buying Process</h2>
          <div className="space-y-6">
            {steps.map(s => (
              <div key={s.step} className="flex gap-5 bg-white rounded-2xl p-6 md:p-8 border border-[#C5A059]/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#122A23] text-[#C5A059] font-serif font-bold text-xl flex items-center justify-center shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#122A23] mb-3">Step {s.step}: {s.title}</h3>
                  <p className="text-base text-[#5A6E67] leading-relaxed text-justify">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Stamp Duty & Registration Calculator 2025</h2>
          <p className="text-[#5A6E67]">Understanding your tax liabilities is critical. Below is the detailed stamp duty structure for NA plots in Pune for the year 2025, illustrated with an example of a ₹1 Crore plot.</p>
          <div className="overflow-x-auto bg-white rounded-xl border border-[#C5A059]/30 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#122A23] text-white">
                  <th className="p-4 border-b border-[#122A23] font-semibold">Buyer Type</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">Stamp Duty</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">Registration</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">Total on ₹1Cr plot</th>
                </tr>
              </thead>
              <tbody className="text-[#3A4E45]">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Male</td>
                  <td className="p-4">5%</td>
                  <td className="p-4">1% (max ₹30,000)</td>
                  <td className="p-4 font-bold text-[#122A23]">₹5,30,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-medium">Female</td>
                  <td className="p-4">4%</td>
                  <td className="p-4">1% (max ₹30,000)</td>
                  <td className="p-4 font-bold text-[#122A23]">₹4,30,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium">Joint M+F</td>
                  <td className="p-4">4.5%</td>
                  <td className="p-4">1% (max ₹30,000)</td>
                  <td className="p-4 font-bold text-[#122A23]">₹4,80,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A6E67] italic">Note: PMRDA areas may have additional infrastructure or metro cess charges. For a precise calculation tailored to your specific plot value, please use our <Link href="/na-plots-pune/stamp-duty-calculator" className="text-[#C5A059] font-semibold hover:underline">interactive stamp duty calculator</Link>.</p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Bank Loan Guide for NA Plots</h2>
          <p className="text-[#5A6E67]">Financing an NA plot is straightforward when you choose a RERA-registered project. Leading banks offer competitive plot loans with tenures up to 15 years. Here is a comparison of indicative rates for 2025.</p>
          <div className="overflow-x-auto bg-white rounded-xl border border-[#C5A059]/30 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#122A23] text-white">
                  <th className="p-4 border-b border-[#122A23] font-semibold">Bank</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">Plot Loan LTV</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">Rate (2025)</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">Max Tenure</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">Pre-approved at K Raheja Viva</th>
                </tr>
              </thead>
              <tbody className="text-[#3A4E45]">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">SBI</td>
                  <td className="p-4">75%</td>
                  <td className="p-4">8.40-9.20% p.a.</td>
                  <td className="p-4">15 years</td>
                  <td className="p-4 text-green-600 font-bold">Yes</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-medium">HDFC</td>
                  <td className="p-4">75%</td>
                  <td className="p-4">8.50-9.35% p.a.</td>
                  <td className="p-4">15 years</td>
                  <td className="p-4 text-green-600 font-bold">Yes</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">ICICI Bank</td>
                  <td className="p-4">70%</td>
                  <td className="p-4">8.55-9.40% p.a.</td>
                  <td className="p-4">15 years</td>
                  <td className="p-4 text-green-600 font-bold">Yes</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-medium">Axis Bank</td>
                  <td className="p-4">70%</td>
                  <td className="p-4">8.70-9.50% p.a.</td>
                  <td className="p-4">15 years</td>
                  <td className="p-4 text-green-600 font-bold">Yes</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium">Bajaj Housing</td>
                  <td className="p-4">70%</td>
                  <td className="p-4">8.80-9.60% p.a.</td>
                  <td className="p-4">15 years</td>
                  <td className="p-4 text-green-600 font-bold">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5A6E67] italic">Note: Interest rates and LTV are indicative and subject to individual credit profiles. K Raheja Viva enjoys coveted APF (Approved Project Finance) status with all major banks, ensuring rapid loan processing.</p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">NRI Buyer Guide</h2>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#C5A059]/30 shadow-sm space-y-4 text-[#5A6E67] leading-relaxed">
            <p>Investing in Indian real estate is highly lucrative for Non-Resident Indians (NRIs), but it requires strict adherence to FEMA (Foreign Exchange Management Act) rules. Here is a quick guide:</p>
            <ul className="space-y-3 list-disc pl-5">
              <li><strong>FEMA Eligibility:</strong> NRIs and OCIs can purchase residential or commercial NA plots without seeking prior permission from the RBI. However, purchasing agricultural land, farmhouses, or plantation property is strictly prohibited.</li>
              <li><strong>Payment Mechanism:</strong> All payments must be routed through official banking channels via an NRE (Non-Resident External), NRO (Non-Resident Ordinary), or FCNR (Foreign Currency Non-Resident) account. Traveler's cheques or foreign currency notes are not permitted.</li>
              <li><strong>Power of Attorney (PoA):</strong> Since NRIs cannot always be physically present for registration, they can grant a Special Power of Attorney to a trusted relative or friend in India to execute the Sale Deed on their behalf.</li>
              <li><strong>PAN Requirements:</strong> A valid Indian PAN (Permanent Account Number) card is mandatory for all property transactions in India.</li>
              <li><strong>TDS Rules:</strong> When buying property, a 1% TDS applies if the property value exceeds ₹50 Lakhs (and the seller is a resident Indian). If the seller is an NRI, the TDS rate is significantly higher (typically 20% + surcharge) under Section 195.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Buying Timeline</h2>
          <p className="text-[#5A6E67]">A realistic timeline for completing an NA plot purchase in Pune from start to finish.</p>
          <div className="overflow-x-auto bg-white rounded-xl border border-[#C5A059]/30 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#122A23] text-white">
                  <th className="p-4 border-b border-[#122A23] font-semibold w-1/4">Week</th>
                  <th className="p-4 border-b border-[#122A23] font-semibold">Activity</th>
                </tr>
              </thead>
              <tbody className="text-[#3A4E45]">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#C5A059]">Week 1-2</td>
                  <td className="p-4 font-medium">Site visits, project shortlisting, and initial due diligence</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-[#C5A059]">Week 2-3</td>
                  <td className="p-4 font-medium">Thorough legal verification and obtaining the advocate's title report</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#C5A059]">Week 3-4</td>
                  <td className="p-4 font-medium">Securing bank loan pre-approval and processing (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-[#C5A059]">Week 4-5</td>
                  <td className="p-4 font-medium">Execution of the Sale Agreement and payment of token/earnest money</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#C5A059]">Week 5-7</td>
                  <td className="p-4 font-medium">Payment of stamp duty, registration charges, and booking the Sub-Registrar appointment</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-[#C5A059]">Week 7-8</td>
                  <td className="p-4 font-medium">Physical registration of the Sale Deed at the Sub-Registrar office</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-[#C5A059]">Week 8-12</td>
                  <td className="p-4 font-medium">Mutation of name (Naam Nondani) in local revenue records and 7/12 extract</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-[#122A23] rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5] font-bold">Ready to Secure Your NA Plot?</h2>
          <p className="text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto">Experience a hassle-free buying process with K Raheja Viva. 100% clear titles, RERA registered, and pre-approved by leading banks.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all">Explore K Raheja Viva Plots</Link>
            <Link href="/na-plots-pune/legal-checklist" className="px-8 py-4 rounded-full bg-transparent text-[#FAF8F5] font-bold text-sm border border-[#FAF8F5]/30 hover:bg-white/10 transition-all">View Legal Checklist</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-base text-[#C5A059] font-bold pt-4"><Phone className="w-5 h-5" /><span>Call us: +91 80 8044 5445</span></div>
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
