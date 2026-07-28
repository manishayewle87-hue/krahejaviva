import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Hinjawadi IT Park | K Raheja Viva — Villa Plots Pune",
  description: "Buy premium NA villa plots near Hinjawadi IT Park, Pune. K Raheja Viva is 18 km from Hinjawadi — luxury plotted development with 40+ amenities and Sahyadri views.",
  keywords: ["NA plots near Hinjawadi","villa plots near Hinjawadi Pune","Hinjawadi real estate","plots near Hinjawadi IT Park","best plots near Hinjawadi","luxury plots Hinjawadi"],
  path: "/plots/hinjawadi",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Hinjawadi IT Park?",
    "a": "K Raheja Viva is 18 km from Hinjawadi via Chandani Chowk and NH-48, approximately a 30-40 minute drive."
  },
  {
    "q": "Is K Raheja Viva suitable for IT professionals working in Hinjawadi?",
    "a": "Yes. Many K Raheja Viva plot owners work in Hinjawadi. The estate is ideal for senior IT executives and team leads seeking a premium nature living address within a reasonable commute."
  },
  {
    "q": "How will the Hinjawadi Metro impact K Raheja Viva plot values?",
    "a": "The Hinjawadi-Shivajinagar Metro will significantly improve West Pune connectivity and is expected to drive 20-30% additional appreciation in adjacent areas including Pirangut."
  },
  {
    "q": "What is the return on investment for plots near Hinjawadi?",
    "a": "Plots in the Pirangut-Hinjawadi corridor have appreciated 18-22% per annum over the last 5 years, driven by IT sector demand."
  },
  {
    "q": "Can I build a permanent residence near Hinjawadi at K Raheja Viva?",
    "a": "Yes. K Raheja Viva plots are fully residential NA plots with all utilities, suitable for constructing a permanent luxury villa with pool, garden, and parking."
  }
];

export default function HinjawadiPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('hinjawadi', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Hinjawadi", href: "/plots/hinjawadi" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 HINJAWADI · WEST PUNE · 18 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Hinjawadi IT Park — K Raheja Viva Pirangut</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Hinjawadi IT Park employs 250,000+ IT professionals. K Raheja Viva offers premium NA villa plots 18 km from Hinjawadi — the ideal luxury land investment for Pune's IT elite.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "18 km" }, { label: 'Primary Highway', value: "Hinjawadi Road / NH-48" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Hinjawadi — Real Estate & Investment Overview</h2>
          <p>Hinjawadi IT Park is Pune\'s largest technology employment zone, housing 400+ multinational companies including Infosys, Wipro, Cognizant, TCS, and Syntel across three phases spanning over 2,800 acres. The IT park directly employs over 250,000 professionals, generating massive demand for quality residential options in a 20-km radius.</p>
          <p>K Raheja Viva in Pirangut (18 km from Hinjawadi via Chandani Chowk and NH-48) serves as the premium villa plot destination for Hinjawadi\'s technology workforce. The estate offers NA villa plots in a master-planned 100+ acre nature retreat — a compelling alternative to the dense apartment complexes of Wakad, Hinjawadi, and Mahalunge. Senior IT professionals and corporate executives particularly value K Raheja Viva for its privacy, natural setting, and the ability to design and build their own custom villa.</p>
          <p>The Hinjawadi Metro (Phase 3, Hinjawadi–Shivajinagar) is under construction and will dramatically improve connectivity, further fuelling land value appreciation in adjacent areas including Pirangut. Hinjawadi\'s Phase III expansion will add 100,000+ IT jobs over the next 5 years, sustaining the demand trajectory for quality plotted investments in West Pune.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/wakad'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Wakad →</Link>
            <Link href={'/plots/baner'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Baner →</Link>
            <Link href={'/plots/mahalunge'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Mahalunge →</Link>
            <Link href={'/plots/chandani-chowk'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Chandani Chowk →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Hinjawadi</h2>
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
