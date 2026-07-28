import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Urawade Pune | K Raheja Viva — Villa Plots Pirangut",
  description: "Buy NA villa plots near Urawade, West Pune. K Raheja Viva is 5 km from Urawade — the closest master-planned luxury plotted development with Sahyadri views.",
  keywords: ["NA plots near Urawade","villa plots Urawade Pune","Urawade real estate","plots near Urawade Pirangut","Urawade property investment"],
  path: "/plots/urawade",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Urawade?",
    "a": "K Raheja Viva is 5 km from Urawade, approximately a 10-12 minute drive via the Pirangut-Urawade Road."
  },
  {
    "q": "Is Urawade good for real estate investment?",
    "a": "Urawade has natural appeal but lacks regulated development. K Raheja Viva in Pirangut offers a RERA-certified master-planned alternative just 5 km away."
  },
  {
    "q": "What is unique about the Urawade-Pirangut micro-corridor?",
    "a": "This corridor offers Sahyadri forest views, Mula river frontage, clean air, and proximity to the upcoming Western Ring Road — a powerful combination for land appreciation."
  },
  {
    "q": "Are there adventure activities near Urawade?",
    "a": "Yes. Urawade and the adjacent Mulshi belt offer trekking to Bhatghar Fort, nature camps, bird watching, and monsoon waterfall tourism."
  },
  {
    "q": "Can I buy raw land in Urawade?",
    "a": "While agricultural land is available in Urawade, we recommend K Raheja Viva's RERA-registered NA plots for a legally secure and amenity-rich investment just 5 km away."
  }
];

export default function UrawadePlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('urawade', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Urawade", href: "/plots/urawade" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 URAWADE · WEST PUNE · 5 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Urawade — K Raheja Viva Pirangut Luxury Estate</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Urawade is an emerging rural micro-market adjacent to Pirangut. K Raheja Viva offers premium NA villa plots just 5 km from Urawade — the nearest master-planned luxury estate.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "5 km" }, { label: 'Primary Highway', value: "Pirangut-Urawade Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Urawade — Real Estate & Investment Overview</h2>
          <p>Urawade is a small village in the Pirangut-Mulshi micro-corridor, located on the banks of the Mula river amidst dense Sahyadri forest land. The village has recently attracted attention from nature enthusiasts, trekkers, and adventure tourism operators, and is increasingly being explored by real estate investors seeking early-stage land near the Pirangut growth corridor.</p>
          <p>For buyers considering Urawade-area investments, K Raheja Viva in Pirangut (5 km away) offers a far superior alternative to raw agricultural or semi-NA land in Urawade. The estate provides RERA-registered NA title, full underground utility infrastructure, 24x7 managed security, a master-planned community of 100+ acres, and a world-class Signature Clubhouse — all within a 5-km radius of the natural surroundings that make Urawade attractive.</p>
          <p>Urawade\'s proximity to the Pirangut growth corridor means that investments here benefit from the same macro drivers as Pirangut: Western Ring Road alignment, Hinjawadi IT expansion, improving Paud Road infrastructure, and growing demand from Pune\'s premium residential market for low-density nature estates.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/pirangut'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Pirangut →</Link>
            <Link href={'/plots/mulshi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Mulshi →</Link>
            <Link href={'/plots/paud-road'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Paud Road →</Link>
            <Link href={'/plots/bhugaon'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Bhugaon →</Link>
          </div>
        </div>

        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4 border border-[#C5A059]/30">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Book Your Private Site Visit</h2>
          <p className="text-sm text-[#FAF8F5]/80">Complimentary estate walkthroughs 7 days a week, 10 AM – 7 PM.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">View GIS Masterplan & Plots</Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">NA Plots Complete Guide</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold"><Phone className="w-4 h-4" /><span>+91 80 8044 5445</span></div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Urawade</h2>
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
