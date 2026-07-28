import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, localBusinessSchema, faqSchema, locationHubs , realEstateListingSchema} from '@/lib/seo';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { MapPin, ArrowRight, TrendingUp, CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'NA Plots in Pirangut | K Raheja Viva — Luxury Plotted Development',
  description: 'Buy premium NA villa plots in Pirangut, West Pune at K Raheja Viva. 100+ acre gated estate, Sahyadri views, 40+ amenities, MahaRERA approved. 12 mins from Chandani Chowk.',
  keywords: ['NA plots Pirangut', 'plots in Pirangut', 'villa plots Pirangut', 'Pirangut real estate', 'luxury plots Pirangut', 'Pirangut property prices', 'buy plot Pirangut Pune', 'Pirangut investment', 'gated community Pirangut', 'K Raheja Viva Pirangut'],
  path: '/plots/pirangut',
});

const faqs = [
  { q: 'What are the best NA plots available in Pirangut?', a: 'K Raheja Viva offers the finest NA plots in Pirangut ranging from 2,000 to 6,000+ sq ft within a 100+ acre master-planned gated estate with Sahyadri views, 40+ amenities and clear NA title.' },
  { q: 'What is the price of plots in Pirangut?', a: 'Plot prices in Pirangut range from ₹80 Lakh to ₹4 Crore+ depending on size, location within the estate, and facing. K Raheja Viva offers flexible payment plans with pre-approved home loans.' },
  { q: 'How far is Pirangut from Chandani Chowk?', a: 'Pirangut is approximately 12 km from Chandani Chowk via Paud Road, taking approximately 20–25 minutes. The upcoming Western Ring Road will further reduce travel time to key Pune hubs.' },
  { q: 'Is Pirangut a good area for real estate investment?', a: 'Yes. Pirangut is one of West Pune\'s fastest-appreciating micro-markets. Located in the Sahyadri foothills with natural beauty, low density, and improving infrastructure, it has shown 15–20% CAGR in land values over the last 5 years.' },
  { q: 'What makes K Raheja Viva different from other Pirangut plots?', a: 'K Raheja Viva is the only fully master-planned, low-density plotted township in Pirangut with a 20,000 sq ft Signature Clubhouse, 40+ amenities, 6,500+ trees, underground utilities and RERA-registered status.' },
];

export default function PirangutPlotsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <JsonLd schema={[localBusinessSchema(), faqSchema(faqs), realEstateListingSchema('pirangut', '8000000', '2000')]} />

        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Plots', href: '/na-plots-pune' }, { label: 'Pirangut', href: '/plots/pirangut' }]} />

        {/* Hero */}
        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-widest">
            📍 PIRANGUT · WEST PUNE · 412115
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold leading-tight">
            NA Plots in Pirangut — K Raheja Viva Luxury Plotted Development
          </h1>
          <p className="text-lg text-[#5A6E67] leading-relaxed max-w-3xl">
            Discover premium NA villa plots in Pirangut, West Pune — nestled in the Sahyadri foothills within a 100+ acre master-planned estate. K Raheja Viva is the most sought-after plotted development in Pirangut with clear NA title, RERA registration and 40+ lifestyle amenities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Total Area', value: '100+ Acres' },
            { label: 'From Chandani Chowk', value: '12 Mins' },
            { label: 'Amenities', value: '40+' },
            { label: 'Trees on Estate', value: '6,500+' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 text-center shadow-sm">
              <div className="font-serif text-2xl font-bold text-[#122A23]">{stat.value}</div>
              <div className="text-[11px] text-[#5A6E67] uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <article className="prose prose-sm max-w-none space-y-6 text-[#3A4E45]">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Why Pirangut is Pune's Most Promising Plot Investment Corridor</h2>
          <p>
            Pirangut sits at a uniquely advantageous confluence — it is close enough to Pune's urban core for daily commuting, yet far enough to enjoy pristine Sahyadri foothills air, dramatic green vistas, and the tranquillity of low-density living. Historically, Pirangut was a quiet agricultural hinterland on the Pune–Paud Road. Over the last decade, it has transformed into one of the most sought-after plotted development micro-markets in Maharashtra.
          </p>
          <p>
            The primary driver of this transformation is its location in the Western Growth Corridor — the stretch connecting Chandani Chowk, Bavdhan, Bhugaon, Pirangut, and ultimately the Mulshi belt. With Hinjawadi IT Park employing over 250,000 professionals just 18 km away, demand for quality residential land in peaceful, low-density locations like Pirangut has consistently outpaced supply.
          </p>

          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Infrastructure & Connectivity: Pirangut in 2025</h2>
          <p>
            Pirangut is directly accessible via the Pune–Paud Road (SH-60), which connects to Chandani Chowk in 12 km and to Kothrud in 14 km. The ongoing Western Ring Road (Outer Ring Road) project will create a high-speed bypass connecting Pirangut to the Mumbai–Bangalore National Highway (NH-48) directly, slashing travel time to Pune's CBD, airport, and the Rajiv Gandhi IT Park in Hinjawadi. MSRDC's ring road alignment runs within 4 km of K Raheja Viva, making this estate one of the most strategically positioned developments in the corridor.
          </p>
          <p>
            Social infrastructure around Pirangut has matured considerably. The area is served by quality schools including D.Y. Patil International School, Indus International School (Bavdhan, 10 km), Symbiosis School (Bavdhan, 9 km), and Orchid School (Bavdhan). For healthcare, Ruby Hall Clinic Hinjawadi and Jehangir Hospital are within 20 km. Daily conveniences, malls, and restaurants are abundantly available in Bavdhan (9 km) and Chandani Chowk (12 km).
          </p>

          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Pirangut Plot Prices 2025 — Market Overview</h2>
          <p>
            Raw agricultural land in Pirangut trades at ₹800–₹1,500 per sq ft, while developed NA plots within master-planned communities command a significant premium. At K Raheja Viva, NA villa plots are priced between ₹80 Lakh and ₹4 Crore+ depending on size (2,000–6,000+ sq ft), facing (forest, hill, or internal road), and position within the 100-acre estate. Over the last five years, plotted land in Pirangut has appreciated at an average of 15–20% per annum — significantly outperforming apartment values in established Pune suburbs.
          </p>

          <h2 className="font-serif text-2xl text-[#122A23] font-bold">K Raheja Viva — The Premier Plotted Development in Pirangut</h2>
          <p>
            K Raheja Viva is not merely a plotted development — it is a complete luxury land ecosystem. Developed by K Raheja Corp Homes, one of India's most trusted real estate brands with 60+ years of track record, Raheja Viva occupies 100+ acres of pristine Sahyadri foothills land in Survey No. 273, Pirangut. Every plot comes with clear Non-Agricultural (NA) title, underground utility connections (water, electricity, sewage, telecom ducts), black-topped internal roads, compound wall, and RERA registration under MahaRERA.
          </p>
          <p>
            The estate features a 20,000 sq ft Signature Clubhouse with a 25-metre infinity pool, indoor gymnasium, multipurpose sports hall, yoga deck, amphitheater, and curated social lounges. 6,500+ native trees have been planted across the estate, creating a microclimate that is 3–5°C cooler than the city, with over 60 species of birds recorded in the estate's forest buffer zone.
          </p>

          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Plots Available in Pirangut at K Raheja Viva</h2>
          <ul className="space-y-2 list-none pl-0">
            {[
              '2,000–3,000 Sq Ft: Compact premium villa plots — perfect for 3–4 BHK villas (₹80 Lakh – ₹1.8 Cr)',
              '3,000–4,000 Sq Ft: Mid-size estate plots with private garden (₹1.8 Cr – ₹2.4 Cr)',
              '4,000–6,000 Sq Ft: Grand estate plots with hill or forest facing (₹2.4 Cr – ₹4 Cr)',
              '6,000+ Sq Ft: Trophy collector-grade estates for luxury mansions',
            ].map(item => (
              <li key={item} className="flex items-start space-x-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Related Location Links */}
        <div className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#122A23]">Explore Nearby Location Hubs</h3>
          <div className="flex flex-wrap gap-2">
            {['Mulshi', 'Bhugaon', 'Bavdhan', 'Paud Road', 'Bhukum', 'Chandani Chowk'].map(loc => (
              <Link key={loc} href={`/plots/${loc.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-xs font-bold text-[#122A23] hover:bg-[#122A23] hover:text-[#FAF8F5] transition-colors">
                Plots near {loc} →
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#122A23] rounded-3xl p-8 text-center space-y-4 border border-[#C5A059]/30">
          <h2 className="font-serif text-2xl text-[#FAF8F5] font-bold">Book Your Pirangut Plot Site Visit</h2>
          <p className="text-sm text-[#FAF8F5]/80">Schedule a complimentary private estate walkthrough with our land investment advisors. Available 7 days a week, 10 AM – 7 PM.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/masterplan" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg">
              View GIS Masterplan & Plots
            </Link>
            <Link href="/na-plots-pune" className="px-8 py-3.5 rounded-full bg-white/10 text-[#FAF8F5] font-bold text-xs uppercase tracking-widest border border-[#FAF8F5]/30 hover:bg-white/20 transition-all">
              NA Plots Complete Guide
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#C5A059] font-bold pt-2">
            <Phone className="w-4 h-4" />
            <span>+91 80 8044 5445</span>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-[#122A23] font-bold">Frequently Asked Questions — Pirangut Plots</h2>
          <div className="space-y-3">
            {faqs.map(faq => (
              <details key={faq.q} className="bg-white rounded-xl border border-[#C5A059]/30 p-5 group">
                <summary className="font-semibold text-sm text-[#122A23] cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-[#C5A059] group-open:rotate-90 transition-transform shrink-0 ml-2" />
                </summary>
                <p className="text-sm text-[#5A6E67] mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
