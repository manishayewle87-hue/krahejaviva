'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { faqSchema } from '@/lib/seo';

export const RAHEJA_VIVA_FAQS = [
  {
    q: "What makes K Raheja Viva NA Bungalow Plots in Pirangut, Pune unique?",
    a: "K Raheja Viva is a gated 100+ acre low-density luxury estate located in the Sahyadri foothills of Pirangut, West Pune. It features 100% PMRDA Collector NA Sanctioned bungalow plots (2,000 to 6,000+ sq ft), 20,000 sq ft Signature Clubhouse, 40+ world-class lifestyle amenities, 6,500+ trees, and complete 7/12 title clearance with individual sub-division."
  },
  {
    q: "What is the MahaRERA registration number for K Raheja Viva Bungalow Plots?",
    a: "K Raheja Viva is fully registered under MahaRERA with official Registration Number P52100004980. All plot dimensions, infrastructure delivery timelines, and legal title documents are completely RERA-compliant."
  },
  {
    q: "What plot sizes are available at K Raheja Viva Pune?",
    a: "K Raheja Viva offers custom NA bungalow plot sizes catering to various architectural visions: 2,000 sq.ft. (starter villa site), 3,000 sq.ft. (family villa plot), 4,000 sq.ft. (large estate plot), 5,000 sq.ft. (grand villa estate), and 6,000+ sq.ft. (trophy mansion site)."
  },
  {
    q: "Can I build a custom villa on K Raheja Viva NA Bungalow Plots?",
    a: "Yes! Buyers have complete architectural freedom to design and construct their dream custom villa according to PMRDA FSI (Floor Space Index) norms and building bylaws. K Raheja Corp Homes also offers villa design inspiration and architectural guidelines."
  },
  {
    q: "Is there clear 7/12 title and non-agricultural (NA) conversion?",
    a: "Yes, 100% of the land is non-agricultural (NA) converted with PMRDA Collector Sanction, clear legal title search report for 30+ years, and individual 7/12 extract sub-division for seamless bank loan approval and immediate registration."
  },
  {
    q: "How far is K Raheja Viva Pirangut from Kothrud and Hinjawadi IT Park?",
    a: "K Raheja Viva is located on Paud Road, Pirangut. It is just 11 km (~15 mins) from Kothrud, 12 km from Chandani Chowk flyover, 9 km from Bavdhan, and approximately 18 km from Hinjawadi IT Hub via the upcoming Pune Ring Road."
  },
  {
    q: "What amenities are available inside the K Raheja Viva estate?",
    a: "The estate features a 20,000 sq ft Signature Clubhouse, 25m infinity pool, tennis courts, basketball court, squash court, state-of-the-art gym, luxury spa, 6,500+ planted trees, jogging tracks, multi-tier 24/7 security, and underground utility ducting (water, power, fibre optics)."
  },
  {
    q: "What is the expected capital appreciation for NA plots in Pirangut West Pune?",
    a: "Pirangut is part of the West Pune High-Growth Corridor. Plotted developments in Pirangut have recorded a 14.2% CAGR capital appreciation over the last 5 years, boosted by the Pune Ring Road development, Chandani Chowk flyover completion, and metro expansion."
  },
  {
    q: "Are home loans available from major nationalized and private banks for K Raheja Viva plots?",
    a: "Yes. Due to 100% clear NA title and MahaRERA approval (P52100004980), plot buyer loans and composite plot+construction loans are pre-approved by leading financial institutions including HDFC Bank, ICICI Bank, SBI, Axis Bank, and Kotak Mahindra Bank."
  },
  {
    q: "What are the maintenance fees and estate governance standards at K Raheja Viva?",
    a: "The estate is professionally managed by K Raheja Corp Homes' dedicated estate governance division, ensuring immaculate maintenance of manicured gardens, clubhouse facilities, 24/7 gated security, street lighting, and underground utility networks."
  }
];

export function RahejaVivaFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqSchemaData = faqSchema(RAHEJA_VIVA_FAQS);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden id-faq-section" id="faqs">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>K Raheja Viva Knowledge Base</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100 mb-6">
            Frequently Asked Questions on <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">K Raheja Viva Bungalow Plots</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Everything you need to know about PMRDA NA sanction, MahaRERA (P52100004980), plot sizes, pricing, and infrastructure at K Raheja Viva, Pirangut Pune.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {RAHEJA_VIVA_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-amber-500/40 shadow-xl shadow-amber-500/5'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-100 text-base md:text-lg flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs font-bold flex items-center justify-center border border-amber-500/20">
                      Q{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/80 mt-1">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{faq.a}</span>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legal Trust Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-amber-950/30 border border-amber-500/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-slate-100 font-semibold text-base">Have More Legal or Architectural Questions?</h4>
              <p className="text-slate-400 text-xs md:text-sm">Speak directly with our K Raheja Corp Homes estate experts & legal team.</p>
            </div>
          </div>
          <a
            href="tel:+918080445445"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 flex-shrink-0"
          >
            Call Legal Desk: +91 8080 445 445
          </a>
        </div>
      </div>
    </section>
  );
}
