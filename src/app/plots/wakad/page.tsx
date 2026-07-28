import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Wakad Pune | K Raheja Viva — Villa Plots West Pune",
  description: "Buy NA villa plots near Wakad, Pune. K Raheja Viva is 16 km from Wakad — luxury gated plotted development with Sahyadri views. RERA registered NA plots from 2,000 sqft.",
  keywords: ["NA plots near Wakad","villa plots near Wakad Pune","Wakad real estate","plots near Wakad","luxury plots Wakad Hinjawadi","buy plot near Wakad"],
  path: "/plots/wakad",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Wakad?",
    "a": "K Raheja Viva is 16 km from Wakad, approximately a 30-35 minute drive via NH-48 and Paud Road."
  },
  {
    "q": "Are there NA plots near Wakad?",
    "a": "K Raheja Viva in Pirangut is the best RERA-registered NA villa plot community accessible from Wakad within 30-35 minutes."
  },
  {
    "q": "Is Wakad real estate good for investment?",
    "a": "Wakad apartments are expensive at ₹10,000-₹15,000/sqft. Plotted land at K Raheja Viva near Wakad offers better ROI with 15-20% annual appreciation."
  },
  {
    "q": "What is the connectivity between Wakad and K Raheja Viva?",
    "a": "Via NH-48 to Chandani Chowk and then Paud Road. The Western Ring Road will further improve this connectivity."
  },
  {
    "q": "Can I visit K Raheja Viva site from Wakad?",
    "a": "Yes. Site visits can be scheduled any day 10 AM to 7 PM. Our team provides complimentary pickup from Chandani Chowk for site visits."
  }
];

export default function WakadPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('wakad', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Wakad", href: "/plots/wakad" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 WAKAD · WEST PUNE · 16 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Wakad Pune — K Raheja Viva Luxury Estate</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Wakad is a thriving IT workforce residential hub between Hinjawadi and Baner. K Raheja Viva offers NA villa plots 16 km from Wakad — the premier nature retreat for Wakad residents.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "16 km" }, { label: 'Primary Highway', value: "Old Mumbai-Pune Highway" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Wakad — Real Estate & Investment Overview</h2>
          <p>Wakad has evolved from an industrial town into a premier IT workforce residential market over the past decade. Its strategic position between Hinjawadi IT Park and Baner, combined with excellent infrastructure and commercial development, has made it one of Pune\'s most active real estate markets. Apartment prices in Wakad range from ₹10,000 to ₹15,000 per sq ft.</p>
          <p>K Raheja Viva in Pirangut serves as the ideal premium plotted land investment for Wakad\'s growing pool of IT professionals and business owners. The 16 km distance (via NH-48, Chandani Chowk, and Paud Road) translates to a 30-35 minute commute, making Raheja Viva genuinely viable as a weekend retreat or even a primary residence for those who prefer nature over urban density.</p>
          <p>The Wakad-Hinjawadi corridor\'s continued expansion, supported by Phase III IT development and Metro Line 3, will drive sustained demand for quality residential land in adjacent markets. K Raheja Viva\'s master-planned estate with 40+ amenities, Sahyadri views, and clear NA title provides a compelling investment case for Wakad-based buyers.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/hinjawadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Hinjawadi →</Link>
            <Link href={'/plots/baner'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Baner →</Link>
            <Link href={'/plots/balewadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Balewadi →</Link>
            <Link href={'/plots/sus'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Sus →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Wakad</h2>
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
