import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "Forest Facing Plots Pune | K Raheja Viva — Sahyadri Forest View Plots",
  description: "Buy forest facing NA villa plots at K Raheja Viva Pirangut, Pune. Estate borders Sahyadri reserve forest with 6500+ trees. Permanent forest views, clean air, and 20% premium appreciation.",
  keywords: ["forest facing plot Pune","forest view villa plot","plots near forest Pune","Sahyadri forest plots","forest facing NA plot Pirangut","green view plots Pune"],
  path: "/plots/forest-facing",
});

const faqs = [
  {
    "q": "What does forest facing mean in a plot?",
    "a": "A forest-facing plot directly overlooks a protected forest or green belt, ensuring permanent unobstructed natural views and a nature-immersive living experience."
  },
  {
    "q": "Are forest facing plots at K Raheja Viva permanently protected?",
    "a": "Yes. The Sahyadri reserve forest adjoining K Raheja Viva is a protected green belt that cannot be commercially developed, ensuring permanent forest views for these plots."
  },
  {
    "q": "How much premium do forest facing plots carry?",
    "a": "Forest facing plots at K Raheja Viva carry a 20-30% premium over interior plots and have historically appreciated the fastest due to their permanent nature view advantage."
  },
  {
    "q": "What wildlife can be seen from forest facing plots?",
    "a": "Over 60 bird species including Purple Sunbirds, Indian Paradise Flycatchers, kingfishers, and raptors have been recorded at K Raheja Viva. Deer, mongooses, and other small mammals are also visible from forest-facing plots."
  },
  {
    "q": "Is the air quality better near forest facing plots?",
    "a": "Yes significantly. The forest microclimate provides measurably better air quality, lower temperatures (3-5°C cooler), higher humidity, and lower noise levels than interior plots."
  }
];

export default function forestfacingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('forest-facing', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Forest Facing Plot", href: "/plots/forest-facing" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📐 FOREST FACING PLOT · K RAHEJA VIVA · PIRANGUT, WEST PUNE</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">Forest Facing Villa Plots in Pune — Sahyadri Forest View Plots at K Raheja Viva</h1>
          <p className="text-lg text-[#5A6E67] max-w-3xl leading-relaxed">K Raheja Viva borders the Sahyadri reserve forest. Forest-facing plots directly overlook 6,500+ native trees with permanent unobstructed views and a natural microclimate 3–5°C cooler.</p>
        </div>

        <article className="space-y-5 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Forest Facing Plot — Why They Are the Most Sought-After Plots</h2>
          <p>Forest-facing plots represent the pinnacle of the K Raheja Viva plot portfolio. The estate\'s eastern and northern boundaries directly adjoin the Sahyadri reserve forest buffer — a permanently protected green belt that will never be commercially developed. This ensures that forest-facing plots on these boundaries will retain their pristine natural views in perpetuity, making them among the most secure and appreciating land investments in West Pune.</p>
          <p>The Sahyadri forest buffer at K Raheja Viva is home to over 6,500 native trees — including Teak, Bamboo, Banyan, and seasonal flowering species like Yellow Tabebuia — along with a recorded 60+ species of birds including Purple Sunbirds, Indian Paradise Flycatchers, and multiple raptor species. Waking up to bird calls, forest sounds, and green valley views creates an immersive nature experience that is impossible to replicate in any urban apartment.</p>
          <p>Forest-facing plots at K Raheja Viva also benefit from a natural microclimate advantage: the dense tree canopy creates shade and moisture that keeps the estate 3–5°C cooler than the city, reduces ambient noise, and improves air quality. These environmental benefits directly translate into health improvements and reduced air-conditioning costs for residents.</p>
        </article>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Enquire About Forest Facing Plot Availability</h2>
          <p className="text-sm text-[#FAF8F5]/80">Forest Facing Plot are limited inventory at K Raheja Viva. Contact us now to check current availability.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View All Available Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Buyer Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Forest Facing Plot</h2>
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
