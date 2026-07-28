import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | K Raheja Corp Viva',
  description: 'Comprehensive FAQs covering plots, pricing, legal, investment, NRI, and construction at K Raheja Corp Viva.',
};

type FAQ = {
  question: string;
  answer: React.ReactNode;
  answerText: string;
  category: string;
};

const faqs: FAQ[] = [
  // Category: Plots
  {
    category: 'Plots',
    question: 'What sizes of plots are available at K Raheja Corp Viva?',
    answer: <>We offer a variety of plot sizes ranging from 1200 sq.ft. to 4000 sq.ft. to suit different needs.</>,
    answerText: 'We offer a variety of plot sizes ranging from 1200 sq.ft. to 4000 sq.ft. to suit different needs.'
  },
  {
    category: 'Plots',
    question: 'Can I choose a specific facing for my plot?',
    answer: <>Yes, subject to availability, you can choose East, West, North, or South facing plots. Please consult our sales team for current availability.</>,
    answerText: 'Yes, subject to availability, you can choose East, West, North, or South facing plots. Please consult our sales team for current availability.'
  },
  {
    category: 'Plots',
    question: 'Are corner plots available?',
    answer: <>Yes, corner plots are available at a premium. They offer better ventilation and access.</>,
    answerText: 'Yes, corner plots are available at a premium. They offer better ventilation and access.'
  },
  {
    category: 'Plots',
    question: 'Is the plotted development gated?',
    answer: <>Yes, K Raheja Corp Viva is a fully secured, gated community with 24/7 security and surveillance.</>,
    answerText: 'Yes, K Raheja Corp Viva is a fully secured, gated community with 24/7 security and surveillance.'
  },
  {
    category: 'Plots',
    question: 'Are all basic amenities like water and electricity already connected to the plots?',
    answer: <>Yes, underground cabling for electricity, water supply lines, and sewage connections are provided up to the plot boundary.</>,
    answerText: 'Yes, underground cabling for electricity, water supply lines, and sewage connections are provided up to the plot boundary.'
  },
  {
    category: 'Plots',
    question: 'Is there a timeline within which I must start construction on my plot?',
    answer: <>There is typically no strict timeline to start construction, but we recommend checking the detailed terms in the agreement.</>,
    answerText: 'There is typically no strict timeline to start construction, but we recommend checking the detailed terms in the agreement.'
  },
  {
    category: 'Plots',
    question: 'Are the plots demarcated clearly?',
    answer: <>Absolutely, all plots are clearly demarcated with boundary stones and exact dimensions as per the layout plan.</>,
    answerText: 'Absolutely, all plots are clearly demarcated with boundary stones and exact dimensions as per the layout plan.'
  },

  // Category: Pricing
  {
    category: 'Pricing',
    question: 'What is the starting price of a plot?',
    answer: <>The starting price depends on the size and location of the plot. Please check our latest pricing brochure or contact sales.</>,
    answerText: 'The starting price depends on the size and location of the plot. Please check our latest pricing brochure or contact sales.'
  },
  {
    category: 'Pricing',
    question: 'Are there any hidden charges?',
    answer: <>No, our pricing is transparent. Additional charges include stamp duty, registration, and maintenance, which are communicated upfront. You can use our <Link href="/stamp-duty-calculator" className="text-blue-600 hover:underline">Stamp Duty Calculator</Link> to estimate costs.</>,
    answerText: 'No, our pricing is transparent. Additional charges include stamp duty, registration, and maintenance, which are communicated upfront. You can use our Stamp Duty Calculator to estimate costs.'
  },
  {
    category: 'Pricing',
    question: 'Is Preferential Location Charge (PLC) applicable?',
    answer: <>Yes, PLC is applicable for corner plots, park-facing plots, and main road-facing plots.</>,
    answerText: 'Yes, PLC is applicable for corner plots, park-facing plots, and main road-facing plots.'
  },
  {
    category: 'Pricing',
    question: 'Do you offer payment plans?',
    answer: <>Yes, we offer flexible payment plans, including construction-linked and time-linked plans.</>,
    answerText: 'Yes, we offer flexible payment plans, including construction-linked and time-linked plans.'
  },
  {
    category: 'Pricing',
    question: 'What is the booking amount?',
    answer: <>The booking amount varies by plot size. Typically, it is 10% of the total agreement value.</>,
    answerText: 'The booking amount varies by plot size. Typically, it is 10% of the total agreement value.'
  },
  {
    category: 'Pricing',
    question: 'Are the prices negotiable?',
    answer: <>Prices are standardized to ensure transparency and fairness for all our customers.</>,
    answerText: 'Prices are standardized to ensure transparency and fairness for all our customers.'
  },
  {
    category: 'Pricing',
    question: 'Does the price include club membership?',
    answer: <>Club membership is usually charged separately. Please refer to the cost sheet for a detailed breakdown.</>,
    answerText: 'Club membership is usually charged separately. Please refer to the cost sheet for a detailed breakdown.'
  },

  // Category: Legal
  {
    category: 'Legal',
    question: 'Is the project RERA registered?',
    answer: <>Yes, K Raheja Corp Viva is fully RERA registered. You can verify the details on the MahaRERA website.</>,
    answerText: 'Yes, K Raheja Corp Viva is fully RERA registered. You can verify the details on the MahaRERA website.'
  },
  {
    category: 'Legal',
    question: 'Are the land titles clear?',
    answer: <>Yes, the land has clear and marketable titles, free from all encumbrances. All necessary legal due diligence has been conducted.</>,
    answerText: 'Yes, the land has clear and marketable titles, free from all encumbrances. All necessary legal due diligence has been conducted.'
  },
  {
    category: 'Legal',
    question: 'Can I get a home loan for purchasing the plot?',
    answer: <>Yes, the project is approved by major banks and financial institutions for plot loans and home construction loans.</>,
    answerText: 'Yes, the project is approved by major banks and financial institutions for plot loans and home construction loans.'
  },
  {
    category: 'Legal',
    question: 'What documents are required for booking?',
    answer: <>You need PAN Card, Aadhar Card, address proof, and passport-size photographs. Check our <Link href="/buy-guide" className="text-blue-600 hover:underline">Buying Guide</Link> for details.</>,
    answerText: 'You need PAN Card, Aadhar Card, address proof, and passport-size photographs. Check our Buying Guide for details.'
  },
  {
    category: 'Legal',
    question: 'When will the sale deed be registered?',
    answer: <>The sale deed is registered upon completion of full payment and hand over of possession.</>,
    answerText: 'The sale deed is registered upon completion of full payment and hand over of possession.'
  },
  {
    category: 'Legal',
    question: 'Who will draft the agreement for sale?',
    answer: <>Our legal team will provide the standard format for the agreement for sale as per RERA guidelines.</>,
    answerText: 'Our legal team will provide the standard format for the agreement for sale as per RERA guidelines.'
  },
  {
    category: 'Legal',
    question: 'Can I transfer the plot before registration?',
    answer: <>Transfer of plot before registration is subject to developer approval and transfer charges as per the company policy.</>,
    answerText: 'Transfer of plot before registration is subject to developer approval and transfer charges as per the company policy.'
  },

  // Category: Investment
  {
    category: 'Investment',
    question: 'Is buying a plot here a good investment?',
    answer: <>Yes, the strategic location and infrastructure development make it a prime investment choice with high appreciation potential.</>,
    answerText: 'Yes, the strategic location and infrastructure development make it a prime investment choice with high appreciation potential.'
  },
  {
    category: 'Investment',
    question: 'What is the expected ROI?',
    answer: <>While historical trends suggest excellent appreciation, real estate returns depend on market dynamics.</>,
    answerText: 'While historical trends suggest excellent appreciation, real estate returns depend on market dynamics.'
  },
  {
    category: 'Investment',
    question: 'Will there be infrastructure developments around the project?',
    answer: <>Yes, the area is slated for major infrastructural upgrades including new highways and commercial zones.</>,
    answerText: 'Yes, the area is slated for major infrastructural upgrades including new highways and commercial zones.'
  },
  {
    category: 'Investment',
    question: 'Can I buy multiple plots?',
    answer: <>Yes, individuals or entities can purchase multiple plots subject to compliance with local laws.</>,
    answerText: 'Yes, individuals or entities can purchase multiple plots subject to compliance with local laws.'
  },
  {
    category: 'Investment',
    question: 'Is it better to invest in a plot or an apartment?',
    answer: <>Plots offer flexibility to build at your own pace and typically appreciate faster in land value. Refer to our <Link href="/buy-guide" className="text-blue-600 hover:underline">Buy Guide</Link> for more insights.</>,
    answerText: 'Plots offer flexibility to build at your own pace and typically appreciate faster in land value. Refer to our Buy Guide for more insights.'
  },
  {
    category: 'Investment',
    question: 'Are commercial plots available?',
    answer: <>Currently, this development focuses on residential plots, though there are dedicated commercial zones in the master plan.</>,
    answerText: 'Currently, this development focuses on residential plots, though there are dedicated commercial zones in the master plan.'
  },
  {
    category: 'Investment',
    question: 'Does the developer offer resale assistance?',
    answer: <>While we do not officially broker resales, our channel partners can assist you in finding buyers in the future.</>,
    answerText: 'While we do not officially broker resales, our channel partners can assist you in finding buyers in the future.'
  },

  // Category: NRI
  {
    category: 'NRI',
    question: 'Can NRIs purchase plots here?',
    answer: <>Yes, NRIs and PIOs can freely purchase residential plots in India under general permission from the RBI.</>,
    answerText: 'Yes, NRIs and PIOs can freely purchase residential plots in India under general permission from the RBI.'
  },
  {
    category: 'NRI',
    question: 'Do NRIs need RBI permission?',
    answer: <>No specific permission is required for purchasing residential property, provided the funds are remitted through proper banking channels.</>,
    answerText: 'No specific permission is required for purchasing residential property, provided the funds are remitted through proper banking channels.'
  },
  {
    category: 'NRI',
    question: 'How can NRIs make payments?',
    answer: <>Payments can be made via NRE/NRO accounts or direct inward remittance from abroad.</>,
    answerText: 'Payments can be made via NRE/NRO accounts or direct inward remittance from abroad.'
  },
  {
    category: 'NRI',
    question: 'Can an NRI give a Power of Attorney (POA)?',
    answer: <>Yes, an NRI can execute a POA in favor of a resident Indian to handle registration and other legal formalities.</>,
    answerText: 'Yes, an NRI can execute a POA in favor of a resident Indian to handle registration and other legal formalities.'
  },
  {
    category: 'NRI',
    question: 'Are home loans available for NRIs?',
    answer: <>Yes, most major banks offer NRI home loans for purchasing plots and constructing houses.</>,
    answerText: 'Yes, most major banks offer NRI home loans for purchasing plots and constructing houses.'
  },
  {
    category: 'NRI',
    question: 'What are the tax implications for NRIs?',
    answer: <>NRIs are subject to TDS on the sale of property, but purchasing property does not have major upfront tax implications apart from stamp duty.</>,
    answerText: 'NRIs are subject to TDS on the sale of property, but purchasing property does not have major upfront tax implications apart from stamp duty.'
  },

  // Category: Construction
  {
    category: 'Construction',
    question: 'Are there any building guidelines?',
    answer: <>Yes, to maintain aesthetic uniformity, there are specific architectural guidelines regarding elevation, setbacks, and height limits.</>,
    answerText: 'Yes, to maintain aesthetic uniformity, there are specific architectural guidelines regarding elevation, setbacks, and height limits.'
  },
  {
    category: 'Construction',
    question: 'Who will approve my building plan?',
    answer: <>Building plans must be approved by the local municipal authority as well as the estate management team of the project.</>,
    answerText: 'Building plans must be approved by the local municipal authority as well as the estate management team of the project.'
  },
  {
    category: 'Construction',
    question: 'Can I hire my own architect and contractor?',
    answer: <>Yes, you are free to hire your own architect and contractor as long as the design complies with the project guidelines.</>,
    answerText: 'Yes, you are free to hire your own architect and contractor as long as the design complies with the project guidelines.'
  },
  {
    category: 'Construction',
    question: 'What is the maximum permissible FSI (Floor Space Index)?',
    answer: <>The permissible FSI is determined by local municipal laws and will be clearly communicated during the handover of the plot.</>,
    answerText: 'The permissible FSI is determined by local municipal laws and will be clearly communicated during the handover of the plot.'
  },
  {
    category: 'Construction',
    question: 'Can I build a basement?',
    answer: <>Basement construction is subject to local bylaws and technical feasibility based on soil conditions and plotting guidelines.</>,
    answerText: 'Basement construction is subject to local bylaws and technical feasibility based on soil conditions and plotting guidelines.'
  },
  {
    category: 'Construction',
    question: 'Are there maintenance charges for common areas?',
    answer: <>Yes, a monthly or annual maintenance charge will be levied for the upkeep of roads, parks, security, and common amenities.</>,
    answerText: 'Yes, a monthly or annual maintenance charge will be levied for the upkeep of roads, parks, security, and common amenities.'
  }
];

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map(f => f.category)));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answerText
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Find answers to common questions about K Raheja Corp Viva. Need more help? Contact our support.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">{category}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {faqs.filter(f => f.category === category).map((faq, idx) => (
                  <div key={idx} className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <div className="text-gray-600 prose prose-sm max-w-none">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
