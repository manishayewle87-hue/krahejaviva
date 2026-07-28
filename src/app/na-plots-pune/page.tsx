import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, realEstateProjectSchema, faqSchema, breadcrumbSchema, locationHubs, plotSizes, articleSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone, ShieldCheck, TrendingUp, MapPin, ArrowRight, AlertTriangle, Calculator, FileText, Landmark, Users, BookOpenCheck, BarChart2, Scale3d } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'NA Bungalow Plots Pune 2025 | Complete Buyer Guide | K Raheja Corp Viva',
  description: 'Definitive guide to buying NA bungalow plots in Pune 2025. Price guide, stamp duty calculator, legal checklist, investment ROI, and why K Raheja Corp Viva in Pirangut is Pune\'s #1 NA plotted development. MahaRERA P52100004980.',
  keywords: [
    'NA Bungalow Plots Pune', 'NA Plots Pune', 'Buy NA Plot Pune', 'NA villa plots Pune',
    'residential NA plot Pune', 'RERA approved NA plots Pune', 'premium NA plots Pune',
    'what is NA plot', 'NA plot meaning', 'approved NA plots West Pune', 'gated NA plots Pune',
    'NA plots in Pune with clear title', 'RERA registered NA plots Pune', 'Pune NA plot prices 2025', 'buy land in Pune'
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
  { q: 'What is NA conversion cost in Maharashtra?', a: 'NA conversion fees vary by district. In Pune (PMRDA jurisdiction), NA conversion premium is typically ₹10-50/sqft of land depending on zone classification. Additional charges include stamp duty on NA order (₹100-500), document fees, and advocate fees. Total NA conversion cost for a 2,000 sqft plot typically ranges from ₹25,000 to ₹1,50,000 excluding advocate fees.' },
  { q: 'How long does NA plot registration take in Pune?', a: 'Once you have all documents ready, the registration process at the Sub-Registrar office in Pune takes 1-3 working days. However, the entire process from plot shortlisting to complete registration typically takes 30-45 days.' },
  { q: 'What is the minimum plot size for NA in Pune?', a: 'Under PMRDA (Pune Metropolitan Region Development Authority) regulations, the minimum NA plot size for residential construction is typically 150 sqmt (approximately 1,615 sqft or 180 sqyd). K Raheja Viva offers plots from 2,000 sqft, well above the minimum requirement.' },
  { q: 'Can a plot loan be used to construct a villa on NA land?', a: 'Yes. You can get a plot loan (70-75% LTV) for purchasing the NA plot, and separately apply for a construction loan once you have approved building plans. Several banks offer a "Plot + Construction" combo loan product.' },
  { q: 'What is PMRDA approved NA plot?', a: 'PMRDA (Pune Metropolitan Region Development Authority) is the planning authority for areas outside the PMC/PCMC limits, including Pirangut, Mulshi, Bhugaon, Bavdhan, and surrounding areas. PMRDA approval means the layout/subdivision plan has been officially sanctioned, infrastructure standards met, and individual 7/12 extracts issued.' }
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
  { factor: 'RERA Compliance', na: 'Mandatory for projects > 500 sqmt', agri: 'Not applicable (illegal to sell as plots)', apartment: 'Mandatory' },
  { factor: 'Capital Gains Tax', na: 'Applicable (LTCG after 2 years)', agri: 'Exempt if rural agricultural land', apartment: 'Applicable (LTCG after 2 years)' },
  { factor: 'NRI Eligibility', na: 'Allowed without RBI permission', agri: 'Prohibited (cannot buy agri land)', apartment: 'Allowed' }
];

const priceData = [
  { location: 'Pirangut', range: '₹3,500 - ₹6,000 / sq.ft.' },
  { location: 'Mulshi', range: '₹4,000 - ₹7,000 / sq.ft.' },
  { location: 'Bhugaon', range: '₹3,000 - ₹5,500 / sq.ft.' },
  { location: 'Paud Road', range: '₹3,200 - ₹5,800 / sq.ft.' },
  { location: 'Bavdhan', range: '₹5,000 - ₹9,000 / sq.ft.' },
  { location: 'Hinjawadi', range: '₹5,500 - ₹10,000 / sq.ft.' },
  { location: 'Kothrud', range: '₹8,000 - ₹15,000 / sq.ft.' },
  { location: 'Baner', range: '₹7,000 - ₹13,000 / sq.ft.' },
];

export default function NAPlotsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'NA Plots Pune', url: '/na-plots-pune' },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": locationHubs.map((hub, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://krahejaviva.com/plots/${hub.slug}`,
      "name": `NA Plots in ${hub.name}`
    }))
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <JsonLd schema={[
          localBusinessSchema(), 
          realEstateProjectSchema(), 
          faqSchema(faqs), 
          breadcrumbSchema(breadcrumbItems),
          articleSchema({
            title: "NA Plots in Pune — Complete Buyer's Guide 2025",
            description: "Definitive guide to buying NA bungalow plots in Pune 2025. Price guide, stamp duty calculator, legal checklist, and investment ROI.",
            path: '/na-plots-pune',
            datePublished: "2025-01-01",
          }),
        ]} />
        
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'NA Plots Pune', href: '/na-plots-pune' }]} />

        {/* SECTION 1: Hero */}
        <div className="bg-[#122A23] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl relative overflow-hidden border border-[#C5A059]/30">
          <div className="absolute top-0 right-0 opacity-10 w-64 h-64 bg-[radial-gradient(circle,_#C5A059_0%,_transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/30">
            COMPREHENSIVE NA PLOT GUIDE — PUNE 2025
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight relative z-10">
            NA Plots in Pune — Complete Buyer's Guide 2025
          </h1>
          <p className="text-lg sm:text-xl text-[#FAF8F5]/80 leading-relaxed max-w-3xl relative z-10">
            The definitive resource for understanding, evaluating, and investing in Non-Agricultural (NA) bungalow plots in Pune. Master the legalities, explore pricing, and discover why West Pune is the ultimate destination for your custom villa.
          </p>
          <div className="flex flex-wrap gap-3 pt-4 relative z-10">
            <Link href="/na-plots-pune/buy-guide" className="px-5 py-2.5 rounded-full bg-[#C5A059] text-[#122A23] text-sm font-bold hover:bg-[#b08d4b] transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" /> Buy Guide
            </Link>
            <Link href="/na-plots-pune/legal-checklist" className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-bold border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Legal Checklist
            </Link>
            <Link href="/na-plots-pune/investment-guide" className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-bold border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Investment Guide
            </Link>
            <Link href="/na-plots-pune/stamp-duty-calculator" className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-bold border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2">
              <Calculator className="w-4 h-4" /> Stamp Duty Calculator
            </Link>
          </div>
        </div>

        {/* SECTION 2: What is an NA Plot? */}
        <article className="bg-white p-8 rounded-2xl border border-[#C5A059]/30 shadow-sm space-y-6 text-[#3A4E45] text-base leading-relaxed">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold border-b border-[#C5A059]/20 pb-4">What is an NA Plot? The Complete Legal Definition</h2>
          <div className="space-y-4">
            <p>
              In the state of Maharashtra, all land is fundamentally classified as agricultural land by default. An <strong>NA Plot (Non-Agricultural Plot)</strong> is a parcel of land whose designated use has been legally changed from agricultural purposes to non-agricultural purposes—such as residential, commercial, or industrial development—under the strict provisions of the <strong>Maharashtra Land Revenue Code (MLRC), 1966</strong>.
            </p>
            <p>
              Specifically, Section 42 of the MLRC mandates that no land used for agriculture shall be used for any non-agricultural purpose without the formal permission of the District Collector. Furthermore, Section 44 outlines the exhaustive procedure for obtaining this permission. Once the Collector is satisfied that the proposed change of use adheres to regional development plans and environmental norms, an official <strong>NA Order</strong> is issued. This legal document is the golden ticket that transforms a piece of farmland into a developable real estate asset.
            </p>
            <p>
              Why is this mandatory? The government stringently regulates land use to ensure planned urban development, prevent haphazard construction, protect fertile agricultural tracts, and ensure adequate civic infrastructure (roads, water, electricity) can be provided to residential zones. Without NA conversion, erecting any permanent residential structure on agricultural land is considered completely illegal. The local municipal corporation or town planning authority (like PMRDA or PMC in Pune) has the full legal right to demolish such unauthorized structures without offering any compensation to the owner.
            </p>
            <p>
              Therefore, for any homebuyer or investor looking to build a bungalow or villa in Pune, purchasing an officially sanctioned Residential NA plot is absolutely non-negotiable. It guarantees that the land holds a clear title, is legally safe for construction, is eligible for home loans from nationalized banks, and is fully recognized by real estate regulatory bodies like MahaRERA.
            </p>
          </div>
        </article>

        {/* SECTION 3: Types of NA Plots in Pune */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">Types of NA Plots in Pune</h2>
          <p className="text-[#5A6E67] text-lg">Not all NA plots are created equal. The District Collector grants NA permission for specific uses. Understanding the type of NA plot is crucial before making an investment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-l-[#C5A059] shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#122A23] mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#C5A059]" /> Residential NA
              </h3>
              <p className="text-[#5A6E67]">
                Exclusively approved for building residential dwellings, such as independent bungalows, villas, or apartment complexes. This is the only type of land suitable for building your dream home. Premium developments like K Raheja Viva exclusively offer RERA-approved Residential NA plots, ensuring complete peace of mind for homeowners.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-l-[#122A23] shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#122A23] mb-2 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#122A23]" /> Commercial NA
              </h3>
              <p className="text-[#5A6E67]">
                Sanctioned specifically for commercial enterprises. This includes the construction of shops, office buildings, shopping malls, hotels, restaurants, and resorts. These plots are typically located along major arterial roads or designated commercial zones within town planning schemes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-l-gray-400 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#122A23] mb-2">Industrial NA</h3>
              <p className="text-[#5A6E67]">
                Designated for manufacturing units, factories, warehouses, and IT parks. These plots are situated in specialized industrial zones (like MIDC areas) to keep heavy traffic, noise, and pollution away from residential neighborhoods. Residential construction is strictly prohibited here.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-l-green-600 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#122A23] mb-2">Farm NA / Resort NA</h3>
              <p className="text-[#5A6E67]">
                A hybrid category often found on the outskirts of Pune. It allows for minimal construction (usually 4% to 10% of the total land area) for farmhouses or eco-resorts. It is not equivalent to a full Residential NA plot and comes with severe restrictions on the built-up area and structural scale.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: NA Plot vs Agricultural Land vs Apartment */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">NA Plot vs Agricultural Land vs Apartment — Full Comparison</h2>
          <div className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden shadow-md">
            <div className="bg-[#122A23] p-5 grid grid-cols-4 gap-4 text-center">
              <div className="text-left text-sm font-bold text-[#C5A059] uppercase tracking-wider">Factor</div>
              <div className="text-sm font-bold text-[#FAF8F5] uppercase tracking-wider bg-[#C5A059]/20 py-1 rounded">NA Plot ✓</div>
              <div className="text-sm font-bold text-[#FAF8F5]/70 uppercase tracking-wider">Agricultural Land</div>
              <div className="text-sm font-bold text-[#FAF8F5]/70 uppercase tracking-wider">Apartment</div>
            </div>
            <div className="divide-y divide-[#C5A059]/15">
              {comparisonData.map((row, i) => (
                <div key={row.factor} className={`grid grid-cols-4 gap-4 px-5 py-4 text-sm ${i % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                  <span className="font-bold text-[#122A23] flex items-center">{row.factor}</span>
                  <span className="text-[#122A23] font-semibold text-center border-x border-[#C5A059]/10 px-2">{row.na}</span>
                  <span className="text-[#5A6E67] text-center px-2">{row.agri}</span>
                  <span className="text-[#5A6E67] text-center px-2">{row.apartment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5: How to Verify NA Status */}
        <article className="bg-[#122A23] text-[#FAF8F5] rounded-2xl p-8 sm:p-10 space-y-8">
          <div className="flex items-center gap-4 border-b border-[#C5A059]/30 pb-6">
            <div className="p-3 bg-[#C5A059] rounded-full text-[#122A23]">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold">How to Verify NA Status — Step-by-Step</h2>
              <p className="text-[#FAF8F5]/70 mt-1">Don't fall for scams. Verify these 5 crucial documents before making a payment.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-[#C5A059]">01</div>
                <div>
                  <h3 className="font-bold text-lg">Decode the 7/12 Utara (Satbara)</h3>
                  <p className="text-[#FAF8F5]/80 text-sm mt-2 leading-relaxed">
                    The 7/12 extract is the foundational land record. You must scrutinize specific fields: The <strong>Survey Number/Gat Number</strong> must match your plot. The <strong>Owner's Name</strong> must be the developer selling you the land. Crucially, look at the <strong>Assessment/Pot Kharaba</strong> section—for an NA plot, the assessment is done at NA rates, not agricultural rates. Most importantly, the <strong>Cultivation/Crop</strong> section should be blank, and the remarks/purpose column must explicitly state "NA" or "Binvheti" (Non-Agricultural).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-[#C5A059]">02</div>
                <div>
                  <h3 className="font-bold text-lg">Check Property Card (Form 8A)</h3>
                  <p className="text-[#FAF8F5]/80 text-sm mt-2 leading-relaxed">
                    Once land is converted to NA within city or municipal limits, the 7/12 extract is often replaced by a Property Card (Akhiv Patrika). This document will clearly mention the area in square meters, the owner's name, and the NA status.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-[#C5A059]">03</div>
                <div>
                  <h3 className="font-bold text-lg">Read the NA Order Document</h3>
                  <p className="text-[#FAF8F5]/80 text-sm mt-2 leading-relaxed">
                    Demand to see the actual NA Order issued by the District Collector. This document will specify the exact area converted, the purpose (must be Residential), and the conditions of conversion. Verify the date and the signature of the issuing authority.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-[#C5A059]">04</div>
                <div>
                  <h3 className="font-bold text-lg">RERA Portal Verification</h3>
                  <p className="text-[#FAF8F5]/80 text-sm mt-2 leading-relaxed">
                    In Maharashtra, any NA plot project exceeding 500 sq meters must be registered with MahaRERA. Go to the official MahaRERA website, enter the project's registration number (e.g., K Raheja Viva's P52100004980), and download the legal title report and encumbrance certificate uploaded by the developer. If it's on RERA, the NA status is guaranteed to be authentic.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-[#C5A059]">05</div>
                <div>
                  <h3 className="font-bold text-lg">Advocate's Title Search Report</h3>
                  <p className="text-[#FAF8F5]/80 text-sm mt-2 leading-relaxed">
                    Never buy a plot without a 30-year Search and Title Report prepared by a competent real estate lawyer. This report traces the ownership history, ensuring there are no family disputes, pending litigations, or undisclosed mortgages on the NA land.
                  </p>
                </div>
              </div>
              
              <div className="bg-red-900/30 p-5 rounded-xl border border-red-500/50 mt-6">
                <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Red Flags to Watch Out For
                </h4>
                <ul className="list-disc list-inside text-sm text-[#FAF8F5]/80 space-y-1">
                  <li>Seller claims "NA is in process" — never pay full price until the final order is issued.</li>
                  <li>Developer selling "Gunthewari" plots — these are often illegal subdivisions.</li>
                  <li>Plot size under 150 sq meters in PMRDA limits without special sanction.</li>
                  <li>Absence of a RERA registration number for gated communities.</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* SECTION 6: Price Guide */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">NA Plot Price Guide by Location in Pune 2025</h2>
          <p className="text-lg text-[#5A6E67]">
            West Pune has emerged as the premier destination for luxury bungalow plots. Areas like Pirangut, Mulshi, and Bhugaon offer the perfect blend of scenic Sahyadri views, clean air, and rapid connectivity to Hinjawadi IT Park and Kothrud. 
            <strong className="block mt-2 text-[#122A23]">Market Insight: Premium NA plots in West Pune are currently experiencing a tremendous 15-22% CAGR capital appreciation, significantly outpacing traditional apartment investments.</strong>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#122A23] text-[#FAF8F5]">
                  <tr>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Location</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-right">Avg. Price (per sq.ft.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {priceData.map((data, index) => (
                    <tr key={data.location} className={index % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-[#122A23]">{data.location}</td>
                      <td className="px-6 py-4 text-[#5A6E67] font-medium text-right">{data.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#C5A059]/20 flex flex-col justify-center">
              <div className="w-16 h-16 bg-[#C5A059]/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#122A23] mb-4">Why Pirangut is Pune's NA Plot Hotspot</h3>
              <p className="text-[#5A6E67] leading-relaxed">
                Pirangut represents the sweet spot of Pune's real estate market in 2025. Priced attractively between ₹3,500 and ₹6,000 per sq.ft., it offers 3x more space for your money compared to saturated markets like Kothrud or Baner, while being just a 15-20 minute drive away. The upcoming Ring Road infrastructure and massive PMRDA town planning initiatives are driving the extraordinary 20%+ annual price appreciation in this micro-market.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7: Stamp Duty */}
        <div className="bg-white rounded-2xl border border-[#C5A059]/30 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#C5A059]/20 pb-6">
            <div>
              <h2 className="font-serif text-3xl text-[#122A23] font-bold">Stamp Duty & Registration Charges on NA Plot Pune 2025</h2>
              <p className="text-[#5A6E67] mt-2">Latest government rates for NA land registration in Pune district.</p>
            </div>
            <Link href="/na-plots-pune/stamp-duty-calculator" className="px-5 py-2.5 rounded-full bg-[#122A23] text-[#C5A059] text-sm font-bold hover:bg-[#1A3D33] transition-colors flex items-center gap-2 whitespace-nowrap">
              <Calculator className="w-4 h-4" /> Open Calculator
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-sm font-bold text-[#5A6E67] uppercase tracking-wider mb-2">Male Buyer</div>
              <div className="text-4xl font-black text-[#122A23]">5%</div>
              <div className="text-sm text-[#5A6E67] mt-1">Stamp Duty</div>
              <div className="mt-3 text-sm font-semibold text-[#122A23]">+ 1% Registration</div>
            </div>
            <div className="border border-[#C5A059] bg-[#C5A059]/5 rounded-xl p-5 text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 bg-[#C5A059] text-white text-[10px] font-bold py-1 uppercase tracking-wider">1% Concession</div>
              <div className="text-sm font-bold text-[#5A6E67] uppercase tracking-wider mb-2 mt-3">Female Buyer</div>
              <div className="text-4xl font-black text-[#C5A059]">4%</div>
              <div className="text-sm text-[#5A6E67] mt-1">Stamp Duty</div>
              <div className="mt-3 text-sm font-semibold text-[#122A23]">+ 1% Registration</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-sm font-bold text-[#5A6E67] uppercase tracking-wider mb-2">Joint (Male + Female)</div>
              <div className="text-4xl font-black text-[#122A23]">4.5%</div>
              <div className="text-sm text-[#5A6E67] mt-1">Stamp Duty</div>
              <div className="mt-3 text-sm font-semibold text-[#122A23]">+ 1% Registration</div>
            </div>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-xl text-sm text-[#3A4E45]">
            <strong className="text-[#122A23]">Example Calculation:</strong> If you purchase an NA plot worth ₹1 Crore as a male buyer, you will pay 5% Stamp Duty (₹5,00,000) + 1% Registration Charge (capped at a maximum of ₹30,000 for properties above ₹30L). Total government fees = ₹5,30,000. For a female buyer, this drops to ₹4,30,000.
          </div>
        </div>

        {/* SECTION 8: NA Conversion Process */}
        <article className="space-y-4">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold">The NA Conversion Process in Maharashtra</h2>
          <p className="text-[#5A6E67] leading-relaxed">
            While purchasing a ready NA plot in a gated community like K Raheja Viva is hassle-free (since the developer has already completed the grueling legal work), understanding the NA conversion process highlights the immense value embedded in an approved plot. The process involves submitting an application to the District Collector along with land records, a proposed layout plan prepared by a certified architect, and obtaining No Objection Certificates (NOCs) from multiple departments including the Town Planning Department, Public Works Department (PWD), Maharashtra Pollution Control Board (MPCB), and the Tehsildar.
          </p>
          <p className="text-[#5A6E67] leading-relaxed">
            The authorities scrutinize the land to ensure it doesn't fall under restricted zones (like forest buffers, tribal lands, or flood lines). Once cleared, the applicant must pay a conversion premium/tax to the government. Finally, the Collector issues the NA Order, after which the 7/12 extract is officially updated. This entire bureaucratic process can take anywhere from 6 months to over 2 years for an individual.
          </p>
          <Link href="/na-plots-pune/na-conversion-guide" className="inline-flex items-center gap-2 text-[#C5A059] font-bold hover:text-[#122A23] transition-colors">
            Read the detailed 10-step NA Conversion Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </article>

        {/* SECTION 9: Buyer Profiles */}
        <div className="space-y-8 bg-[#122A23] rounded-3xl p-8 sm:p-12">
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl text-white font-bold">Who Should Buy NA Plots?</h2>
            <p className="text-white/70">Tailored investment profiles for Pune's dynamic real estate market.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FAF8F5] rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="font-serif text-xl font-bold text-[#122A23] mb-3">The Upgrade Buyer</h3>
              <p className="text-sm text-[#5A6E67] mb-4 h-20">Transitioning from a cramped 3BHK apartment in the city to a spacious, custom-designed independent villa.</p>
              <ul className="text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Need 3,000 - 5,000 sq.ft.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Prioritize premium amenities</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Seek gated security</li>
              </ul>
            </div>
            <div className="bg-[#C5A059] rounded-2xl p-6 shadow-xl text-white relative overflow-hidden group transform md:-translate-y-4 border border-white/20">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="font-serif text-xl font-bold mb-3">NRI / HNI Investor</h3>
              <p className="text-sm text-white/90 mb-4 h-20">Seeking generational wealth creation, capital protection, and high-yield appreciation outside volatile equity markets.</p>
              <ul className="text-sm space-y-2 mb-6 text-white/90">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> FEMA compliant purchase</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> NRE/NRO funding</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Target 18-22% ROI</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FAF8F5] rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="font-serif text-xl font-bold text-[#122A23] mb-3">First-Time Plot Buyer</h3>
              <p className="text-sm text-[#5A6E67] mb-4 h-20">Entering the land market to secure a footprint for future construction or medium-term gains.</p>
              <ul className="text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Ideal size: 2,000 sq.ft.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Budget: ₹80L - ₹1.2Cr</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Heavy reliance on bank loans</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link href="/na-plots-pune/investment-guide" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#C5A059] transition-colors uppercase text-sm tracking-widest">
              Read the full Investment Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* SECTION 10: Location Grid */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl text-[#122A23] font-bold border-b border-[#C5A059]/20 pb-4">Explore NA Plots by Pune Localities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locationHubs.map(loc => (
              <Link key={loc.slug} href={`/plots/${loc.slug}`}
                className="bg-white rounded-xl p-5 border border-[#C5A059]/30 hover:border-[#C5A059] hover:shadow-lg transition-all group flex flex-col justify-between min-h-[120px]">
                <MapPin className="w-5 h-5 text-[#C5A059] mb-3 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold text-[#122A23] group-hover:text-[#C5A059] transition-colors">{loc.name}</div>
                  <div className="text-xs text-[#5A6E67] mt-1 font-medium">{loc.distance}</div>
                  <div className="text-[10px] text-[#5A6E67]/70 mt-2 italic hidden group-hover:block transition-all">View available plots →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SECTION 11: About K Raheja Corp Viva */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FAF8F5] to-transparent pointer-events-none"></div>
          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="px-3 py-1 rounded-full bg-[#122A23] text-white text-[10px] font-bold uppercase tracking-widest">Premium Development</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#122A23] font-bold">Why K Raheja Corp Viva is Pune's #1 NA Plotted Development</h2>
            <p className="text-lg text-[#5A6E67] leading-relaxed">
              Nestled in the pristine landscape of Pirangut, West Pune, <strong>K Raheja Corp Viva</strong> redefines the concept of plotted developments. Spread across an expansive 100+ acre estate adorned with over 6,500 mature trees, this project offers an unparalleled opportunity to build your bespoke villa amidst nature, without compromising on urban luxury.
            </p>
            <p className="text-base text-[#5A6E67] leading-relaxed">
              With a legacy spanning over 60 years, K Raheja Corp brings absolute transparency and trust to land buying. The project is fully MahaRERA registered (<strong>P52100004980</strong>) and boasts a 100% clear NA title. Buyers enjoy the peace of mind that comes with pre-approved loans from major banks including SBI, HDFC, and ICICI.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                '100+ Acre Gated Estate',
                'Clear Residential NA Title',
                '20,000 sq.ft. Signature Clubhouse',
                '40+ World-Class Amenities',
                '12 Mins from Chandani Chowk',
                'Plots starting from 2,000 sq.ft.',
                'Underground Infrastructure (Power, Water)',
                '60+ Year Developer Legacy'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-[#122A23] font-medium">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" /> {item}
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Link href="/masterplan" className="inline-block px-8 py-4 rounded-full bg-[#122A23] text-[#C5A059] font-bold text-sm uppercase tracking-widest hover:bg-[#1A3D33] transition-all shadow-lg hover:shadow-xl">
                Explore the Masterplan
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 12: Detailed FAQ */}
        <div className="space-y-6 bg-[#FAF8F5] p-8 rounded-3xl border border-[#C5A059]/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl text-[#122A23] font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-[#5A6E67]">Expert answers to the most critical questions about buying NA plots in Pune.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map(faq => (
              <details key={faq.q} className="bg-white rounded-xl border border-[#C5A059]/30 p-5 group shadow-sm">
                <summary className="font-bold text-[15px] text-[#122A23] cursor-pointer list-none flex items-start justify-between">
                  <span className="pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-[#C5A059] group-open:rotate-90 transition-transform shrink-0 mt-0.5" />
                </summary>
                <p className="text-sm text-[#5A6E67] mt-4 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* SECTION 14: Related Guides */}
        <div className="space-y-6 pt-8 border-t border-[#C5A059]/30">
          <h3 className="font-serif text-2xl text-[#122A23] font-bold">Related Resources & Guides</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Buy Guide', href: '/na-plots-pune/buy-guide', icon: BookOpenCheck },
              { title: 'Legal Checklist', href: '/na-plots-pune/legal-checklist', icon: ShieldCheck },
              { title: 'Investment Guide', href: '/na-plots-pune/investment-guide', icon: TrendingUp },
              { title: 'Stamp Duty Calc', href: '/na-plots-pune/stamp-duty-calculator', icon: Calculator },
              { title: 'NA Conversion Guide', href: '/na-plots-pune/na-conversion-guide', icon: FileText },
              { title: 'Pirangut Market Report', href: '/na-plots-pune/pirangut-market-report', icon: BarChart2 },
              { title: 'RERA Compliance Guide', href: '/rera-guide', icon: Landmark },
              { title: 'NRI Buyer Guide', href: '/blog/nri-na-plot-guide', icon: Users },
            ].map(guide => {
              const Icon = guide.icon;
              return (
                <Link key={guide.title} href={guide.href} className="bg-white p-4 rounded-xl border border-[#C5A059]/30 hover:bg-[#122A23] hover:text-white transition-all group text-center flex flex-col items-center gap-3">
                  <Icon className="w-6 h-6 text-[#C5A059] group-hover:text-white transition-colors" />
                  <span className="text-sm font-bold text-[#122A23] group-hover:text-white">{guide.title}</span>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
