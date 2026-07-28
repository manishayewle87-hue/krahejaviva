import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "Hill Facing Plots Pune | K Raheja Viva — Sahyadri Mountain View Plots",
  description: "Buy hill facing NA villa plots at K Raheja Viva Pirangut, Pune. Panoramic Sahyadri mountain views, cool mountain breeze, and sunrise from the Deccan ranges. RERA approved.",
  keywords: ["hill facing plot Pune","hill view villa plot","mountain view plot Pune","Sahyadri view plots","hill facing NA plot Pirangut","valley view plots Pune"],
  path: "/plots/hill-facing",
});

const faqs = [
  {
    "q": "What do hill facing plots at K Raheja Viva overlook?",
    "a": "Hill facing plots at K Raheja Viva overlook the Sahyadri mountain range — the Western Ghats UNESCO biodiversity hotspot — providing permanent panoramic mountain views."
  },
  {
    "q": "How much premium do hill facing plots carry?",
    "a": "Hill facing plots carry a 20-35% premium over interior plots depending on elevation and the quality of the view angle."
  },
  {
    "q": "Do hill facing plots get a mountain breeze?",
    "a": "Yes. The natural mountain breeze from the Sahyadri descends across hill-facing plots, keeping them significantly cooler and reducing air-conditioning dependency."
  },
  {
    "q": "Are Sahyadri mountain views permanent from K Raheja Viva?",
    "a": "Yes. The low-density master plan and estate boundaries ensure that Sahyadri mountain views from hill-facing plots will remain unobstructed permanently."
  },
  {
    "q": "Are hill facing plots the best investment at K Raheja Viva?",
    "a": "Hill and forest facing plots are both in the highest demand category and have shown superior appreciation. They represent the premium tier of K Raheja Viva's plot inventory."
  }
];

export default function hillfacingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('hill-facing', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Hill Facing Plot", href: "/plots/hill-facing" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📐 HILL FACING PLOT · K RAHEJA VIVA · PIRANGUT, WEST PUNE</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">Hill Facing Villa Plots in Pune — Sahyadri Mountain View Plots at K Raheja Viva</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">K Raheja Viva is set in the Sahyadri foothills with dramatic hill-facing plots offering panoramic mountain views, cool mountain breezes, and breathtaking monsoon vistas.</p>
        </div>

        <article className="space-y-5 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Hill Facing Plot — Why They Are the Most Sought-After Plots</h2>
          <p>Hill-facing plots at K Raheja Viva offer what no apartment building can ever replicate — an uninterrupted, panoramic view of the Western Ghats, one of India\'s two UNESCO biodiversity hotspots. The Sahyadri mountain range rises dramatically to the west and southwest of the estate, creating a permanent, ever-changing vista that transforms across seasons: lush emerald green in the monsoon, golden brown in winter, and misty purple at dusk.</p>
          <p>Hill-facing plots at K Raheja Viva are positioned along the estate\'s western boundary, where the Sahyadri range is most prominently visible. At higher elevations within the 100-acre estate, these plots offer 180° panoramic mountain panoramas — a view-profile that commands significant premium in both purchase value and rental yield for completed villas.</p>
          <p>The cool mountain breeze that descends from the Sahyadri ranges across K Raheja Viva\'s hill-facing plots is one of the most distinctive lifestyle benefits of the estate. During summer months, the natural breeze from the mountains can reduce indoor temperatures significantly, providing a natural air-conditioning effect that is both energy-efficient and deeply refreshing.</p>
        </article>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Enquire About Hill Facing Plot Availability</h2>
          <p className="text-sm text-[#FAF8F5]/80">Hill Facing Plot are limited inventory at K Raheja Viva. Contact us now to check current availability.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View All Available Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Buyer Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Hill Facing Plot</h2>
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
