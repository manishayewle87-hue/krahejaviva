import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "East Facing Plots in Pune | K Raheja Viva — NA Villa Plots",
  description: "Buy east facing NA villa plots at K Raheja Viva Pirangut, Pune. East facing plots offer morning sunlight, Vastu compliance, energy efficiency and premium villa construction. RERA approved.",
  keywords: ["east facing plot Pune","east facing NA plot Pune","east facing villa plot","Vastu compliant plot Pune","east facing plot Pirangut"],
  path: "/plots/east-facing",
});

const faqs = [
  {
    "q": "Why are east facing plots considered good?",
    "a": "East facing plots allow the main entrance to face the rising sun, considered auspicious in Vastu Shastra. They also provide morning natural light and efficient passive cooling."
  },
  {
    "q": "Are east facing plots more expensive?",
    "a": "East facing plots typically command a 5-15% premium in the Indian market due to Vastu demand. At K Raheja Viva, pricing reflects both facing and position within the estate."
  },
  {
    "q": "Is east facing plot good for Vastu?",
    "a": "Yes. East facing is the most preferred direction in Vastu Shastra for residential plots, believed to bring prosperity, health, and positive energy to the household."
  },
  {
    "q": "Are there east facing plots available at K Raheja Viva?",
    "a": "Yes. K Raheja Viva has a curated selection of east-facing NA villa plots. Contact our team for current availability."
  },
  {
    "q": "What is the advantage of morning sun on an east facing plot?",
    "a": "Morning sun on the east face provides natural light to living spaces, warmth during winter months, and reduces afternoon heat gain — lowering air-conditioning costs."
  }
];

export default function eastfacingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs)]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "East Facing Plot", href: "/plots/east-facing" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📐 EAST FACING PLOT · K RAHEJA VIVA · PIRANGUT, WEST PUNE</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">East Facing Villa Plots in Pune — Vastu-Compliant NA Plots at K Raheja Viva</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">East facing plots are the most Vastu-auspicious orientation in Indian residential architecture. K Raheja Viva offers east-facing NA villa plots in Pirangut with morning Sahyadri sunrise views.</p>
        </div>

        <article className="space-y-5 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">East Facing Plot — Why They Are the Most Sought-After Plots</h2>
          <p>East facing plots hold a revered position in Indian residential architecture, deeply rooted in Vastu Shastra principles. An east-facing plot allows the main entrance of the villa to open towards the rising sun — considered the most auspicious direction in Vastu as it symbolises prosperity, health, and positive energy. The morning sun provides natural warmth and light to living areas, reducing energy costs and improving the psychological wellbeing of residents.</p>
          <p>From a practical standpoint, east-facing plots offer superior morning sun exposure to the living and dining areas, cooling western walls in the afternoon (reducing air-conditioning load), and a golden-hour sunrise view from the main façade. For families who value Vastu principles, an east-facing plot at K Raheja Viva combines religious and philosophical tradition with scientifically sound passive energy design.</p>
          <p>K Raheja Viva\'s master-planned estate includes a dedicated selection of east-facing villa plots along the primary internal roads, with the morning sun view opening across the estate\'s green parkways and, in the distance, the Sahyadri foothills. These plots are particularly sought after by traditional Indian families and Vastu-conscious buyers.</p>
        </article>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Enquire About East Facing Plot Availability</h2>
          <p className="text-sm text-[#FAF8F5]/80">East Facing Plot are limited inventory at K Raheja Viva. Contact us now to check current availability.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View All Available Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Buyer Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — East Facing Plot</h2>
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
