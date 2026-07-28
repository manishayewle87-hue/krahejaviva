import { buildMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import Link from "next/link";
import {
  Calculator,
  FileText,
  Landmark,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { StampDutyCalculator } from "@/components/calculator/StampDutyCalculator";

export const metadata = buildMetadata({
  title: "Stamp Duty on NA Plot Pune 2025 | Calculator & Rates | K Raheja Viva",
  description:
    "Calculate stamp duty and registration charges on NA plot purchase in Pune 2025. Male/female/joint buyer rates, PMRDA zone rates, exemptions, payment process. Free online calculator.",
  keywords: [
    "stamp duty NA plot Pune",
    "NA plot registration charges Pune",
    "stamp duty calculator Pune 2025",
    "stamp duty on land Pune",
    "registration charges plot Pune",
  ],
  path: "/na-plots-pune/stamp-duty-calculator",
});

const faqs = [
  {
    q: "How is stamp duty calculated on NA plots in Pune?",
    a:
      "Stamp duty on NA plots in Pune is calculated as a percentage of the agreement value or the ready reckoner rate, whichever is higher. In 2025, the base rate is 5% for men and 4% for women, plus a 1% Metro Cess for areas under PMC/PCMC, bringing the total to 6% and 5% respectively.",
  },
  {
    q: "What is the registration fee for NA plots in Maharashtra?",
    a:
      "The registration fee for NA plots in Maharashtra is 1% of the property value, capped at a maximum of ₹30,000 for properties valued over ₹30 Lakhs.",
  },
  {
    q: "Is there any stamp duty concession for female buyers?",
    a:
      "Yes, the Maharashtra government offers a 1% concession on stamp duty for female buyers to encourage women's property ownership. This brings the effective rate down by 1% compared to male buyers.",
  },
  {
    q: "Do I have to pay GST on NA plots?",
    a:
      "No, the sale of land, including NA plots, does not attract GST as it is not considered a supply of goods or services under the GST Act. However, any development charges or club memberships may attract GST.",
  },
  {
    q: "What is the Metro Cess and who has to pay it?",
    a:
      "Metro Cess is an additional 1% surcharge levied on property transactions in areas where metro infrastructure is being developed, such as Pune Municipal Corporation (PMC) and Pimpri-Chinchwad Municipal Corporation (PCMC) limits.",
  },
  {
    q: "Can I pay stamp duty online in Pune?",
    a:
      "Yes, stamp duty can be paid online through the Government Receipt Accounting System (GRAS) portal (gras.mahakosh.gov.in) using net banking or debit/credit cards.",
  },
  {
    q: "What are PMRDA development charges?",
    a:
      "PMRDA levies development charges for the provision of infrastructure and civic amenities in the Pune Metropolitan Region. These charges vary based on the zone and size of the plot.",
  },
  {
    q: "Does joint ownership reduce stamp duty?",
    a:
      "If a property is jointly owned by a male and a female, the stamp duty rate is typically calculated on a pro-rata basis, or a flat concession may apply depending on the specific government resolution in effect. Currently, it often averages out or follows the primary applicant's rate if specific conditions aren't met, but a joint M+F structure can often benefit from a 0.5% or 1% blended concession.",
  },
];

export default function StampDutyCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#122A23]">
      <JsonLd
        schema={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "NA Plots Pune", url: "/na-plots-pune" },
            {
              name: "Stamp Duty Calculator 2025",
              url: "/na-plots-pune/stamp-duty-calculator",
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
              label: "Stamp Duty Calculator",
              href: "/na-plots-pune/stamp-duty-calculator",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#122A23] mt-8 mb-6 leading-tight">
          Stamp Duty on NA Plot in Pune 2025 <br />
          <span className="text-[#C5A059]">
            Complete Calculator & Rates Guide
          </span>
        </h1>

        <div className="prose prose-lg text-[#122A23]/80 max-w-4xl">
          <p>
            When purchasing a Non-Agricultural (NA) plot in Pune, one of the
            most critical financial components to consider is the stamp duty and
            registration charges. These state levies are mandatory under the{" "}
            <strong>Maharashtra Stamp Act, 1958</strong>.
          </p>
          <p>
            Paying stamp duty ensures that your property transaction is legally
            recognized and recorded in the government's registry. Without this
            payment, the sale deed cannot be registered, and the buyer does not
            gain legal ownership of the plot. In this comprehensive guide, we
            will break down the latest 2025 stamp duty rates for NA plots in
            Pune, explain how to calculate your total acquisition cost, and
            explore the various exemptions and concessions available,
            particularly for female property buyers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-8 pb-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-10">
          {/* Rates Table */}
          <div id="rates">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="w-8 h-8 text-[#C5A059]" />
              <h2 className="text-3xl font-serif text-[#122A23]">
                Stamp Duty Rates 2025
              </h2>
            </div>
            <p className="mb-6 text-[#122A23]/80">
              The stamp duty rate depends on the gender of the buyer and the
              exact location of the plot. Note that properties falling under the
              Pune Municipal Corporation (PMC) or PMRDA limits might attract an
              additional 1% Metro Cess/Transport Surcharge. Below are the
              standard rates for NA plots in Pune for 2025.
            </p>
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-[#122A23]/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#122A23] text-white">
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Buyer Type
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Stamp Duty
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Registration
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Surcharge
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Total Effective Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#122A23]">
                  <tr className="border-b border-[#122A23]/10 hover:bg-[#FAF8F5] transition-colors">
                    <td className="p-4 font-medium">Male</td>
                    <td className="p-4">5%</td>
                    <td className="p-4">1% (max ₹30,000)</td>
                    <td className="p-4">0%*</td>
                    <td className="p-4 font-bold">6%</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10 hover:bg-[#FAF8F5] transition-colors">
                    <td className="p-4 font-medium">Female</td>
                    <td className="p-4">4%</td>
                    <td className="p-4">1% (max ₹30,000)</td>
                    <td className="p-4">0%*</td>
                    <td className="p-4 font-bold">5%</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10 hover:bg-[#FAF8F5] transition-colors">
                    <td className="p-4 font-medium">Joint (M+F)</td>
                    <td className="p-4">4.5%</td>
                    <td className="p-4">1% (max ₹30,000)</td>
                    <td className="p-4">0%*</td>
                    <td className="p-4 font-bold">5.5%</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="p-4 font-medium">Senior Citizen</td>
                    <td className="p-4">5%</td>
                    <td className="p-4">1% (max ₹30,000)</td>
                    <td className="p-4">0%*</td>
                    <td className="p-4 font-bold">6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-4 text-[#122A23]/60 italic">
              *Note: Properties within Pune Municipal Corp (PMC) area may incur
              an additional 1% Metro Cess. The Registration fee is 1% of the
              property value, strictly capped at ₹30,000 for properties above
              ₹30 Lakhs.
            </p>
          </div>

          {/* Calculator Table */}
          <div id="calculator">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-[#C5A059]" />
              <h2 className="text-3xl font-serif text-[#122A23]">
                Worked Example Calculator
              </h2>
            </div>
            <p className="mb-6 text-[#122A23]/80">
              To simplify your financial planning, here is a pre-calculated
              table showing the total outflow (Stamp Duty + Registration) based
              on varying plot values.
              <br />
              <br />
              <em>
                Formula used: (Stamp Duty % × Plot Value) + min(Registration % ×
                Plot Value, ₹30,000)
              </em>
            </p>
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-[#122A23]/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF8F5] text-[#122A23]">
                    <th className="p-4 border-b border-[#122A23]/20 font-serif text-lg">
                      Plot Value
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Male Total (6%)
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Female Total (5%)
                    </th>
                    <th className="p-4 border-b border-[#122A23]/20 font-medium">
                      Joint Total (5.5%)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#122A23]">
                  {[
                    {
                      val: "₹50 Lakhs",
                      m: "₹2,80,000",
                      f: "₹2,30,000",
                      j: "₹2,55,000",
                    },
                    {
                      val: "₹75 Lakhs",
                      m: "₹4,05,000",
                      f: "₹3,30,000",
                      j: "₹3,67,500",
                    },
                    {
                      val: "₹1 Crore",
                      m: "₹5,30,000",
                      f: "₹4,30,000",
                      j: "₹4,80,000",
                    },
                    {
                      val: "₹1.5 Crore",
                      m: "₹7,80,000",
                      f: "₹6,30,000",
                      j: "₹7,05,000",
                    },
                    {
                      val: "₹2 Crore",
                      m: "₹10,30,000",
                      f: "₹8,30,000",
                      j: "₹9,30,000",
                    },
                    {
                      val: "₹3 Crore",
                      m: "₹15,30,000",
                      f: "₹12,30,000",
                      j: "₹13,80,000",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#122A23]/10 hover:bg-[#FAF8F5] transition-colors"
                    >
                      <td className="p-4 font-bold">{row.val}</td>
                      <td className="p-4">{row.m}</td>
                      <td className="p-4">{row.f}</td>
                      <td className="p-4">{row.j}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Process */}
          <div id="process">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-[#C5A059]" />
              <h2 className="text-3xl font-serif text-[#122A23]">
                When & How to Pay Stamp Duty
              </h2>
            </div>

            <h3 className="text-xl font-bold mb-4">When is stamp duty paid?</h3>
            <p className="mb-6 text-[#122A23]/80 leading-relaxed">
              Stamp duty must be paid{" "}
              <strong>before or at the time of executing the sale deed</strong>.
              In Maharashtra, it is standard practice to pay the stamp duty
              right before you head to the Sub-Registrar's office for the final
              property registration. Once paid, the e-stamp certificate is
              attached to your sale agreement.
            </p>

            <h3 className="text-xl font-bold mb-4">
              How to Pay Stamp Duty in Pune (Step-by-Step)
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Visit GRAS Portal",
                  desc: "Navigate to the Government Receipt Accounting System (GRAS) portal of Maharashtra (https://gras.mahakosh.gov.in).",
                },
                {
                  title: "Generate Challan",
                  desc: "Select the option to Pay Without Registration, choose the relevant Inspector General of Registration (IGR) department, and fill out property details.",
                },
                {
                  title: "Make Payment",
                  desc: "Pay the calculated amount via Net Banking, Debit/Credit Card, or generate a challan for RTGS/NEFT through your bank.",
                },
                {
                  title: "E-Stamp Certificate",
                  desc: "Upon successful payment, download the e-Challan (e-SBTR or simple e-Challan) which serves as your electronic stamp paper.",
                },
                {
                  title: "Adjudication (if required)",
                  desc: "If there is ambiguity regarding the ready reckoner rate, you can apply for adjudication where the collector determines the exact duty payable.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-[#122A23]/10"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#C5A059] text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{step.title}</h4>
                    <p className="text-[#122A23]/70 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparisons and Exemptions */}
          <div id="exemptions">
            <h2 className="text-3xl font-serif text-[#122A23] mb-6">
              Stamp Duty: Plot vs Flat
            </h2>
            <p className="mb-8 text-[#122A23]/80 leading-relaxed">
              The fundamental stamp duty percentage in Maharashtra applies
              identically to both plots and flats. However, when purchasing a
              flat, the duty is calculated on the combined value of the land
              share and the constructed area. For NA plots, the duty is
              calculated solely on the land value (Ready Reckoner or Agreement
              Value, whichever is higher). Additionally, flats in
              under-construction projects attract GST (usually 5%), whereas{" "}
              <strong>
                the sale of land (NA plots) is completely GST-exempt
              </strong>
              .
            </p>

            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
              <h2 className="text-3xl font-serif text-[#122A23]">
                Exemptions & Concessions
              </h2>
            </div>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 bg-[#C5A059] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#122A23]/80">
                  <strong>Women Buyers:</strong> A 1% concession on stamp duty
                  is provided if the property is registered solely in the name
                  of a female buyer (or multiple female joint buyers).
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 bg-[#C5A059] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#122A23]/80">
                  <strong>Tribal Land & Slum Rehab:</strong> Special stamp duty
                  rates apply for properties in notified slum rehabilitation
                  zones or specific tribal areas, though these rarely apply to
                  premium NA plots.
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 bg-[#C5A059] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#122A23]/80">
                  <strong>Blood Relatives:</strong> Transferring property to
                  blood relatives (gift deed) attracts a nominal stamp duty
                  (e.g., ₹200) plus 1% Metro Cess if applicable.
                </p>
              </li>
            </ul>
          </div>

          {/* Acquisition Cost Breakdown */}
          <div id="breakdown">
            <h2 className="text-3xl font-serif text-[#122A23] mb-6">
              Total Acquisition Cost Breakdown (Example: ₹1 Crore Plot)
            </h2>
            <p className="mb-6 text-[#122A23]/80">
              Beyond the plot price and stamp duty, buyers should account for
              legal fees and PMRDA development charges. Here is an estimated
              breakdown for a ₹1 Crore NA plot in West Pune (Assuming a male
              buyer).
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-[#122A23]/10 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody className="text-[#122A23]">
                  <tr className="border-b border-[#122A23]/10">
                    <td className="p-4 font-medium">Plot Agreement Value</td>
                    <td className="p-4 font-bold text-right">₹1,00,00,000</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10">
                    <td className="p-4">Stamp Duty (Male - 5%)</td>
                    <td className="p-4 text-right">₹5,00,000</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10">
                    <td className="p-4">Registration Charges</td>
                    <td className="p-4 text-right">₹30,000</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10">
                    <td className="p-4">Legal/Advocate Fees</td>
                    <td className="p-4 text-right">₹50,000 – ₹1,00,000</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10">
                    <td className="p-4">PMRDA Development Charges</td>
                    <td className="p-4 text-right">₹1,00,000 – ₹2,00,000</td>
                  </tr>
                  <tr className="border-b border-[#122A23]/10">
                    <td className="p-4">GST</td>
                    <td className="p-4 text-right text-green-600 font-medium">
                      Nil (Exempt)
                    </td>
                  </tr>
                  <tr className="bg-[#122A23] text-white">
                    <td className="p-4 font-bold text-lg">
                      Total Acquisition Cost
                    </td>
                    <td className="p-4 font-bold text-lg text-right">
                      ~₹1,07,00,000 – ₹1,09,00,000
                    </td>
                  </tr>
                </tbody>
              </table>
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
            {/* Interactive Calculator Widget */}
            <StampDutyCalculator />

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#C5A059]/20">
              <h3 className="text-2xl font-serif mb-4">
                Invest in Premium NA Plots
              </h3>
              <p className="text-[#122A23]/80 mb-6">
                Discover K Raheja Corp Viva in West Pune. fully sanctioned NA
                plots with transparent pricing and zero hidden legal hurdles.
              </p>
              <Link
                href="/na-plots-pune"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#122A23] text-white rounded-full font-medium hover:bg-[#1a3d33] transition-colors"
              >
                Explore Plots <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-[#122A23] text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-serif mb-4">Helpful Links</h3>
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
                    href="/na-plots-pune/na-conversion-guide"
                    className="text-white/80 hover:text-[#C5A059] transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" /> NA Conversion Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/na-plots-pune/pirangut-market-report"
                    className="text-white/80 hover:text-[#C5A059] transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" /> Pirangut Market Report
                    2025
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
