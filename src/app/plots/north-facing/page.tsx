import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "North Facing Plots in Pune | K Raheja Viva — Vastu-Compliant NA Plots",
  description: "Buy north facing NA villa plots at K Raheja Viva Pirangut, Pune. North facing plots offer the second most Vastu-auspicious orientation, consistent day-long light, and premium villa design.",
  keywords: ["north facing plot Pune","north facing NA plot","north facing villa plot Pune","Vastu north facing plot","north facing plot Pirangut"],
  path: "/plots/north-facing",
});

const faqs = [
  {
    "q": "Is north facing plot good as per Vastu?",
    "a": "Yes. North facing is the second most auspicious direction in Vastu Shastra, associated with wealth and prosperity. It is highly recommended for residential plots."
  },
  {
    "q": "What are the advantages of north facing plots?",
    "a": "North facing plots receive consistent, diffused natural light without harsh direct sunlight, making interiors bright and comfortable. They also receive cool breezes and are energy-efficient."
  },
  {
    "q": "Are north facing plots more expensive?",
    "a": "North facing plots command a similar premium to east facing plots (5-15%) due to Vastu demand. K Raheja Viva prices vary based on specific position and view."
  },
  {
    "q": "What is the best facing for a villa plot in Pune?",
    "a": "East and north facing are the most preferred in the Indian market for Vastu and practical reasons. Both orientations are available at K Raheja Viva."
  },
  {
    "q": "Are there north facing plots at K Raheja Viva?",
    "a": "Yes. K Raheja Viva has north-facing NA villa plots available in multiple size ranges. Contact our team for current availability and pricing."
  }
];

export default function northfacingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "North Facing Plot", href: "/plots/north-facing" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📐 NORTH FACING PLOT · K RAHEJA VIVA · PIRANGUT, WEST PUNE</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">North Facing Villa Plots in Pune — Vastu-Compliant NA Plots at K Raheja Viva</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">North facing plots are the second most preferred orientation in Vastu Shastra and offer consistent indirect daylight throughout the day. K Raheja Viva offers premium north-facing NA villa plots.</p>
        </div>

        <article className="space-y-5 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">North Facing Plot — Why They Are the Most Sought-After Plots</h2>
          <p>North-facing plots rank second only to east-facing in the Vastu preference hierarchy for residential plots. The north direction is associated with Kubera, the lord of wealth in Hindu mythology, making north-facing plots highly sought after by buyers seeking both Vastu compliance and practical advantages. From a design perspective, north-facing plots receive consistent, diffused daylight throughout the day without harsh direct sunlight, creating bright, comfortable interiors without excessive heat gain.</p>
          <p>In climatic terms, north-facing villas in Pune\'s latitude benefit from the best of both worlds — cool morning shade from the south, diffused natural light from the north, and pleasant cross-ventilation. Architects particularly favour north-facing plots for luxury villa design as the soft, consistent north light is ideal for home offices, artist studios, and living spaces.</p>
          <p>At K Raheja Viva, north-facing plots offer views across the estate\'s curated green parkways and, in select positions, towards the Sahyadri hills in the northern horizon. The estate\'s master-planned road network ensures multiple north-facing plot options across different size ranges.</p>
        </article>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Enquire About North Facing Plot Availability</h2>
          <p className="text-sm text-[#FAF8F5]/80">North Facing Plot are limited inventory at K Raheja Viva. Contact us now to check current availability.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View All Available Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Buyer Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — North Facing Plot</h2>
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
