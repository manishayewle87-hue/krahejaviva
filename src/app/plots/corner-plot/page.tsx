import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "Corner Plots in Pune | K Raheja Viva — Premium Corner NA Plot",
  description: "Buy premium corner plots at K Raheja Viva Pirangut, Pune. Corner plots offer 3-side openness, maximum ventilation, dual road access, and 20% premium appreciation. RERA approved.",
  keywords: ["corner plot Pune","corner NA plot Pune","buy corner plot Pune","corner plot Pirangut","corner villa plot Pune","best corner plot gated community"],
  path: "/plots/corner-plot",
});

const faqs = [
  {
    "q": "What are the advantages of a corner plot?",
    "a": "Corner plots offer 3-side openness, dual road frontage, better natural light and ventilation, design flexibility, and typically 15-25% higher appreciation than interior plots."
  },
  {
    "q": "Are corner plots available at K Raheja Viva?",
    "a": "Yes. A limited number of corner plots are available at K Raheja Viva. Contact our sales team for current inventory and pricing."
  },
  {
    "q": "How much more does a corner plot cost?",
    "a": "Corner plots at K Raheja Viva typically carry a 15-25% premium over equivalent interior plots due to their superior characteristics."
  },
  {
    "q": "Can I have two entry gates on a corner plot?",
    "a": "Yes. Corner plots can be designed with two separate vehicle entry/exit points on the two road-facing sides, providing maximum convenience."
  },
  {
    "q": "Do corner plots appreciate faster?",
    "a": "Yes. Due to limited supply and superior characteristics, corner plots consistently appreciate 15-20% faster than interior plots in premium gated communities."
  }
];

export default function cornerplotPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('corner-plot', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Corner Plot", href: "/plots/corner-plot" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📐 CORNER PLOT · K RAHEJA VIVA · PIRANGUT, WEST PUNE</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">Corner Villa Plots in Pune — Premium Corner NA Plots at K Raheja Viva</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">Corner plots at K Raheja Viva Pirangut offer the finest villa construction canvas — three open sides, dual road frontage, maximum natural light, and superior cross-ventilation.</p>
        </div>

        <article className="space-y-5 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Corner Plot — Why They Are the Most Sought-After Plots</h2>
          <p>Corner plots are universally regarded as the most desirable parcel type within any residential plotted development. The three-sided openness of a corner plot provides unparalleled design freedom — dual road frontage allows independent vehicular entry and exit, the absence of adjacent buildings on two sides allows maximum natural light and ventilation on all living floors, and the visibility of a corner location creates an impressive architectural presence for the completed villa.</p>
          <p>At K Raheja Viva, corner plots are the most sought-after inventory. The estate\'s master-planned internal road network creates multiple corner junctions, each offering unique orientation advantages. Corner plots on the Sahyadri-facing edge of the estate additionally offer hill views on two sides, making them the ultimate trophy parcels within the community.</p>
          <p>Corner plots at K Raheja Viva have historically commanded a 15–25% premium over equivalent interior plots, and have appreciated at the fastest rate within the estate. Their limited availability makes them ideal for investors who expect continued outperformance as the community matures.</p>
        </article>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Enquire About Corner Plot Availability</h2>
          <p className="text-sm text-[#FAF8F5]/80">Corner Plot are limited inventory at K Raheja Viva. Contact us now to check current availability.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View All Available Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Buyer Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Corner Plot</h2>
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
