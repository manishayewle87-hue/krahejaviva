import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Balewadi Pune | K Raheja Viva — Premium Villa Plots",
  description: "Buy premium NA villa plots near Balewadi, Pune. K Raheja Viva is 15 km from Balewadi — luxury gated plotted development with 40+ amenities and Sahyadri views.",
  keywords: ["NA plots near Balewadi","villa plots near Balewadi Pune","Balewadi real estate","plots near Balewadi","luxury plots Balewadi Pune"],
  path: "/plots/balewadi",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Balewadi?",
    "a": "K Raheja Viva is 15 km from Balewadi, approximately a 30-35 minute drive via NH-48 and Paud Road."
  },
  {
    "q": "What sports facilities are available at K Raheja Viva?",
    "a": "K Raheja Viva has floodlit cricket lawns, basketball courts, a 25-metre infinity pool, yoga decks, and a comprehensive fitness centre in the 20,000 sq ft Signature Clubhouse."
  },
  {
    "q": "Is Balewadi real estate overpriced?",
    "a": "Balewadi apartments at ₹11,000-₹16,000/sq ft are expensive. Plotted land near Balewadi in Pirangut offers better appreciation potential at lower entry price."
  },
  {
    "q": "Are there any upcoming infrastructure projects near Balewadi?",
    "a": "The Pune Metro Hinjawadi-Baner extension and the Western Ring Road will improve Balewadi's connectivity, positively impacting land values in adjacent Pirangut."
  },
  {
    "q": "Can I get a home loan to buy a plot near Balewadi?",
    "a": "Yes. K Raheja Viva plots are pre-approved for plot loans from leading banks including SBI, HDFC, ICICI, and Axis Bank."
  }
];

export default function BalewadiPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('balewadi', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Balewadi", href: "/plots/balewadi" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 BALEWADI · WEST PUNE · 15 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Balewadi Pune — K Raheja Viva Estate</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Balewadi is home to Pune's iconic Sports Complex and a rapidly growing residential market. K Raheja Viva offers NA villa plots just 15 km from Balewadi on Paud Road.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "15 km" }, { label: 'Primary Highway', value: "Balewadi Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Balewadi — Real Estate & Investment Overview</h2>
          <p>Balewadi has risen to prominence as Pune\'s sports and leisure residential hub. The Balewadi Sports Complex — which hosted the National Games — anchors a micro-market that combines premium residential infrastructure with vibrant social amenities. The Balewadi High Street is one of Pune\'s most popular food and entertainment zones. Residential projects in Balewadi are priced at ₹11,000–₹16,000 per sq ft, reflecting the location\'s premium status.</p>
          <p>K Raheja Viva, located 15 km from Balewadi via NH-48 and Paud Road, offers Balewadi residents and investors access to premium NA villa plots in a nature estate. The estate provides sports and recreational facilities that complement Balewadi\'s sporting culture — including floodlit cricket lawns, basketball courts, a 25-metre pool, and a dedicated fitness zone within the 20,000 sq ft Signature Clubhouse.</p>
          <p>Investment in plotted land at K Raheja Viva offers Balewadi buyers diversification into an appreciating land asset class at significantly lower per-sq-ft pricing, with superior lifestyle quality and the unique advantage of owning land in a low-density forested estate versus a dense urban apartment.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/baner'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Baner →</Link>
            <Link href={'/plots/hinjawadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Hinjawadi →</Link>
            <Link href={'/plots/wakad'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Wakad →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Balewadi</h2>
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
