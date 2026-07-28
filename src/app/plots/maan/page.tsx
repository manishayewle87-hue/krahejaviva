import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "NA Plots near Maan Pune | K Raheja Viva — Villa Plots West Pune",
  description: "Buy NA villa plots near Maan, Pune. K Raheja Viva is 20 km from Maan — premium luxury plotted development in Pirangut with Sahyadri views. RERA approved NA plots.",
  keywords: ["NA plots near Maan Pune","villa plots Maan","Maan real estate Pune","plots near Maan Hinjawadi","Maan property investment Pune"],
  path: "/plots/maan",
});

const faqs = [
  {
    "q": "How far is K Raheja Viva from Maan?",
    "a": "K Raheja Viva is approximately 20 km from Maan, a 35-45 minute drive via Hinjawadi Road and Chandani Chowk."
  },
  {
    "q": "Is Maan a good area for real estate investment?",
    "a": "Maan is at an early stage of development adjacent to Hinjawadi Phase III. K Raheja Viva in Pirangut offers a more established and RERA-certified alternative."
  },
  {
    "q": "What IT companies are near Maan?",
    "a": "Maan is adjacent to Hinjawadi Phase III, which hosts Infosys, Wipro, TCS, Cognizant, and 400+ MNCs within 3-5 km."
  },
  {
    "q": "Will the Metro benefit Maan real estate?",
    "a": "The Hinjawadi-Shivajinagar Metro Line 3 will pass near Maan, significantly improving connectivity and land values."
  },
  {
    "q": "What are the best NA plot options for Maan-area buyers?",
    "a": "K Raheja Viva in Pirangut is the best RERA-registered master-planned NA villa plot community within 20-25 km of Maan."
  }
];

export default function MaanPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('maan', '8000000', '2000')]} />
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: "Maan", href: "/plots/maan" }]} />

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">📍 MAAN · WEST PUNE · 20 km FROM K RAHEJA VIVA</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">NA Villa Plots near Maan Pune — K Raheja Viva Pirangut</h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">Maan is a rapidly developing corridor adjacent to Hinjawadi Phase III. K Raheja Viva offers premium NA villa plots 20 km from Maan — ideal for Hinjawadi IT professionals seeking nature living.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ label: 'Distance to K Raheja Viva', value: "20 km" }, { label: 'Primary Highway', value: "Hinjawadi-Maan Road" }, { label: 'Estate Area', value: '100+ Acres' }, { label: 'Amenities', value: '40+' }].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-xl font-bold text-[#122A23]">{s.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <article className="space-y-6 text-[#3A4E45] text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">About Maan — Real Estate & Investment Overview</h2>
          <p>Maan village is being rapidly absorbed into Pune\'s urban fabric as Hinjawadi Phase III expands westward. The area benefits from proximity to the massive IT employment zone of Hinjawadi while still maintaining a semi-rural character. As Phase III development progresses, Maan is expected to transform into a significant residential corridor attracting both IT workforce housing and plotted development demand.</p>
          <p>K Raheja Viva in Pirangut (20 km from Maan via Hinjawadi Road and Chandani Chowk) serves as an established, RERA-certified alternative for buyers exploring Maan-area investments. The estate\'s master-planned 100+ acre community, 40+ amenities, and Sahyadri mountain backdrop offer a superior lifestyle proposition compared to early-stage raw development in Maan.</p>
          <p>The Hinjawadi Phase III IT corridor\'s continued development will catalyse demand for quality residential land throughout West Pune, benefiting established communities like K Raheja Viva that offer immediate livability with strong appreciation credentials.</p>
        </article>

        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Locations</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={'/plots/hinjawadi'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Hinjawadi →</Link>
            <Link href={'/plots/wakad'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Wakad →</Link>
            <Link href={'/plots/mahalunge'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Mahalunge →</Link>
            <Link href={'/plots/baner'} className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">Plots near Baner →</Link>
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
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">FAQ — Plots near Maan</h2>
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
