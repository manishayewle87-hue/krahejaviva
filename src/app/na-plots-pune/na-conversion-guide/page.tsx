import { buildMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import Link from "next/link";
import {
  FileCheck,
  ShieldAlert,
  Landmark,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = buildMetadata({
  title:
    "NA Conversion in Maharashtra 2025 | Process, Documents & Fees | K Raheja Corp Viva",
  description:
    "Complete guide to Non-Agricultural (NA) conversion in Maharashtra 2025. Step-by-step NA conversion process, required documents, fees, timeline, and authority contacts for Pune district.",
  keywords: [
    "NA conversion Maharashtra",
    "NA conversion Pune",
    "agricultural land NA conversion process",
    "NA parvana Maharashtra",
    "how to convert agricultural land to NA",
    "non agricultural conversion Maharashtra",
  ],
  path: "/na-plots-pune/na-conversion-guide",
});

const faqs = [
  {
    q: "What is NA Parvana?",
    a:
      "NA Parvana is the official Non-Agricultural Order issued by the District Collector under Section 44 of the Maharashtra Land Revenue Code, certifying that a piece of agricultural land can be legally used for residential, commercial, or industrial purposes.",
  },
  {
    q: "How long does NA conversion take in Pune?",
    a:
      "The typical timeline for complete NA conversion in Pune is between 3 to 6 months, assuming all documents are in order and there are no legal disputes or objections during the mandatory 30-day hearing period.",
  },
  {
    q: "Can anyone buy agricultural land in Maharashtra?",
    a:
      "No, in Maharashtra, only a registered farmer (agriculturist) can legally purchase agricultural land. Non-farmers must either buy pre-converted NA land (like K Raheja Viva plots) or obtain special permissions.",
  },
  {
    q: "Is NA conversion permanent?",
    a:
      "Yes, once land is converted to a specific Non-Agricultural use (e.g., NA Residential), the status is permanent, provided the land is utilized for that purpose within the stipulated time frame mentioned in the NA order.",
  },
  {
    q:
      "What happens if I build a house on agricultural land without NA conversion?",
    a:
      "Constructing a residential structure on agricultural land without an NA order is illegal. The structure is considered unauthorized and is subject to demolition by local authorities (PMRDA/Collector), and heavy penalties will be levied.",
  },
  {
    q: "Who issues the NA order in Pune?",
    a:
      "For areas outside municipal corporation limits in Pune, the District Collector (Zilla Adhikari) or the Sub-Divisional Officer (SDO) is the competent authority. PMRDA also plays a role in granting development permissions.",
  },
  {
    q: "Do K Raheja Viva plots require NA conversion?",
    a:
      "No. All plots at K Raheja Corp Viva are 100% pre-sanctioned and NA converted by the developer. Buyers face zero compliance hassle and can immediately register the plot and begin construction.",
  },
  {
    q: "What is PMRDA's role in NA conversion?",
    a:
      "PMRDA (Pune Metropolitan Region Development Authority) outlines the zoning of the land. The revenue department issues the actual NA conversion based on PMRDA's approved zoning and development plan.",
  },
];

export default function NAConversionGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#122A23]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to convert agricultural land to NA in Maharashtra",
            description:
              "Step-by-step process for Non-Agricultural (NA) land conversion in Pune, Maharashtra.",
            step: [
              {
                "@type": "HowToStep",
                name: "Prepare Application",
                text: "Prepare application in the prescribed format addressed to the District Collector (Zilla Adhikari).",
              },
              {
                "@type": "HowToStep",
                name: "Attach Documents",
                text: "Attach 7/12 extract, 8A form, Index II, and village map.",
              },
              {
                "@type": "HowToStep",
                name: "Pay Application Fee",
                text: "Pay the initial processing fee via government treasury challan.",
              },
              {
                "@type": "HowToStep",
                name: "Site Inspection",
                text: "Revenue officer conducts a physical site inspection.",
              },
              {
                "@type": "HowToStep",
                name: "Hearing Period",
                text: "Mandatory 30-day period for public objections.",
              },
              {
                "@type": "HowToStep",
                name: "NA Order Issuance",
                text: "District Collector issues the NA Order (NA Parvana).",
              },
              {
                "@type": "HowToStep",
                name: "Pay Premium",
                text: "Pay the NA conversion premium.",
              },
              {
                "@type": "HowToStep",
                name: "Update Records",
                text: "Update 7/12 extract with NA status.",
              },
            ],
          }),
        }}
      />
      <JsonLd
        schema={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "NA Plots Pune", url: "/na-plots-pune" },
            {
              name: "NA Conversion Guide",
              url: "/na-plots-pune/na-conversion-guide",
            },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "NA Plots Pune", href: "/na-plots-pune" },
            {
              label: "NA Conversion Guide",
              href: "/na-plots-pune/na-conversion-guide",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#122A23] mt-8 mb-6 leading-tight">
          NA Conversion in Maharashtra 2025 <br />
          <span className="text-[#C5A059]">
            Complete Process, Documents & Fee Guide
          </span>
        </h1>

        <div className="prose prose-lg text-[#122A23]/80 max-w-4xl">
          <p>
            Under{" "}
            <strong>
              Section 44 of the Maharashtra Land Revenue Code, 1966
            </strong>
            , all land in the state is deemed agricultural unless specifically
            permitted otherwise. If you wish to construct a house, villa, or
            commercial building on agricultural land, you must obtain a legal
            Non-Agricultural (NA) conversion order, locally known as{" "}
            <em>NA Parvana</em>.
          </p>
          <p>
            Navigating the revenue departments in Pune for NA conversion can be
            a daunting, multi-month process involving stringent paperwork and
            legal checks. This comprehensive guide details the 2025 process,
            required documents, fee structures, and the immense risks of buying
            un-converted land.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-8 pb-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-10">
          {/* Who Needs It */}
          <div id="who-needs-it">
            <h2 className="text-3xl font-serif text-[#122A23] mb-4">
              Who Needs NA Conversion?
            </h2>
            <p className="text-[#122A23]/80 mb-4">
              <strong>Sellers/Developers:</strong> Must convert large parcels of
              land before legally subdividing them into residential plots for
              sale to the general public.
            </p>
            <p className="text-[#122A23]/80">
              <strong>Buyers (Non-Farmers):</strong> In Maharashtra, only an
              agriculturist can buy agricultural land. If you are a non-farmer
              looking to build a home, you absolutely must purchase a plot that
              has <em>already</em> been converted to NA Residential status.
            </p>
          </div>

          {/* 8-Step Process */}
          <div id="process">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-8 h-8 text-[#C5A059]" />
              <h2 className="text-3xl font-serif text-[#122A23]">
                NA Conversion Process — 8 Steps
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title:
                    "Step 1: Prepare application to District Collector (Zilla Adhikari)",
                  desc: "Draft an application to the District Collector detailing the intent for conversion.",
                },
                {
                  title: "Step 2: Attach required documents",
                  desc: "Compile the complex legal dossier including 7/12 extract, 8A form, and mutation entries.",
                },
                {
                  title: "Step 3: Pay application fee",
                  desc: "Pay the non-refundable processing fee via a treasury challan.",
                },
                {
                  title: "Step 4: Site inspection by revenue officer",
                  desc: "The Talathi and Circle Officer conduct a physical survey to verify plot boundaries.",
                },
                {
                  title: "Step 5: Hearing and objection period (30 days)",
                  desc: "A mandatory 30-day period is observed to allow any third parties to raise legal objections.",
                },
                {
                  title:
                    "Step 6: District Collector issues NA Order (NA Parvana)",
                  desc: "If cleared, the Collector issues the NA Parvana, granting conditional approval.",
                },
                {
                  title: "Step 7: Pay NA conversion premium",
                  desc: "The applicant pays the final conversion premium based on the plot area and government zone rates.",
                },
                {
                  title: "Step 8: Update 7/12 extract with NA status",
                  desc: "The 7/12 extract is permanently updated to reflect the land's new NA status.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-[#122A23]/10"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#122A23] text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{step.title}</h4>
                    <p className="text-[#122A23]/70 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#122A23]/60 italic">
              NA Conversion Timeline — typical 3-6 months in Pune.
            </p>
          </div>

          {/* Documents Table */}
          <div id="documents">
            <h2 className="text-3xl font-serif text-[#122A23] mb-6">
              Required Documents
            </h2>
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-[#122A23]/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#122A23] text-white">
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Document
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Source
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#122A23]">
                  <tr className="border-b border-[#122A23]/10 hover:bg-[#FAF8F5]">
                    <td className="p-4 font-bold">7/12 Extract</td>
                    <td className="p-4">District Revenue Office</td>
                    <td className="p-4 text-sm">Latest (within 3 months)</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10 hover:bg-[#FAF8F5]">
                    <td className="p-4 font-bold">8A Form (Property Card)</td>
                    <td className="p-4">District Revenue Office</td>
                    <td className="p-4 text-sm"></td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10 hover:bg-[#FAF8F5]">
                    <td className="p-4 font-bold">Index II</td>
                    <td className="p-4">Sub-Registrar Office</td>
                    <td className="p-4 text-sm">Last sale deed</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10 hover:bg-[#FAF8F5]">
                    <td className="p-4 font-bold">Village Map / Naksha</td>
                    <td className="p-4">District Survey Office</td>
                    <td className="p-4 text-sm">Show plot boundaries</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10 hover:bg-[#FAF8F5]">
                    <td className="p-4 font-bold">ID Proof</td>
                    <td className="p-4">Applicant</td>
                    <td className="p-4 text-sm">Aadhar + PAN</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F5]">
                    <td className="p-4 font-bold">
                      Challan for application fee
                    </td>
                    <td className="p-4">Treasury</td>
                    <td className="p-4 text-sm"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fees */}
          <div id="fees">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="w-8 h-8 text-[#C5A059]" />
              <h2 className="text-3xl font-serif text-[#122A23]">
                NA Conversion Fees in Pune 2025
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-[#122A23]/10 mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF8F5] text-[#122A23]">
                    <th className="p-4 border-b border-[#122A23]/20 font-serif text-lg">
                      Zone
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Premium per sqmt
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#122A23]">
                  <tr className="border-b border-[#122A23]/10">
                    <td className="p-4 font-bold">Residential (PMRDA)</td>
                    <td className="p-4 text-[#C5A059] font-bold">
                      ₹50-200/sqmt
                    </td>
                    <td className="p-4">Depends on NA zone classification</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Commercial</td>
                    <td className="p-4 text-[#C5A059] font-bold">
                      ₹100-400/sqmt
                    </td>
                    <td className="p-4">Higher rate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#122A23]/10">
              <p className="text-sm">
                Application fee: ₹5,000-15,000
                <br />
                Stamp duty on NA Order: ₹100-500
              </p>
            </div>
          </div>

          {/* Jurisdiction */}
          <div id="jurisdiction">
            <h2 className="text-3xl font-serif text-[#122A23] mb-4">
              PMRDA vs Revenue Department
            </h2>
            <p className="text-[#122A23]/80 mb-8">
              PMRDA (Pune Metropolitan Region Development Authority) dictates
              the zoning rules for fringe areas around Pune, including Pirangut.
              While PMRDA sanctions the development layout, the actual NA
              Parvana is granted by the District Collector (Revenue Department).
              Both processes must be complete before land is clear for
              residential construction.
            </p>
          </div>

          {/* Risks */}
          <div id="risks" className="bg-[#122A23] text-white p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="w-8 h-8 text-[#C5A059]" />
              <h2 className="text-3xl font-serif">
                Important: Risks of Buying Without NA Conversion
              </h2>
            </div>
            <p className="mb-4 text-white/80">
              Buying un-converted land (often sold in Gunthas) carries extreme
              risk:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span>
                  <strong>Legal Penalties & Demolition:</strong> Building
                  without NA conversion invites heavy fines and demolition risk
                  from the Collector/PMRDA.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span>
                  <strong>No Home Loans:</strong> Banks will not fund
                  construction on agricultural land.
                </span>
              </li>
            </ul>

            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold">
                  When NA conversion is NOT required
                </h3>
              </div>
              <p className="text-white/80">
                You do not need to do this yourself if you buy from a reputed
                developer.{" "}
                <strong>K Raheja Viva plots are already NA converted</strong>,
                meaning absolutely no buyer hassle or legal risk.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div id="faq" className="pt-8">
            <h2 className="text-3xl font-serif text-[#122A23] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-[#122A23]/10"
                >
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-[#122A23]/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#C5A059]/20">
              <h3 className="text-2xl font-serif mb-4">Skip the Hassle</h3>
              <p className="text-[#122A23]/80 mb-6">
                Don't risk your capital on unapproved land. Choose 100%
                NA-Sanctioned plots at K Raheja Corp Viva—all plots already NA
                converted, zero risk.
              </p>
              <Link
                href="/na-plots-pune"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#C5A059] text-white rounded-full font-medium hover:bg-[#b08d4a] transition-colors"
              >
                Explore Sanctioned Plots <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-[#122A23] text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-serif mb-4">Related Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/na-plots-pune/buy-guide"
                    className="text-white/80 hover:text-[#C5A059] transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" /> NA Plot Buying Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/na-plots-pune/stamp-duty-calculator"
                    className="text-white/80 hover:text-[#C5A059] transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" /> Calculate Stamp Duty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/na-plots-pune/pirangut-market-report"
                    className="text-white/80 hover:text-[#C5A059] transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" /> Pirangut Market Analysis
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
