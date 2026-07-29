'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Award, FileText, ChevronRight, Calculator, Compass, BookOpen, HelpCircle, Rss, Layers, CheckCircle2, ChevronDown } from 'lucide-react';
import { KRahejaLogo } from '@/components/common/KRahejaLogo';
import { VIVA_RERA_INFO } from '@/data/reraData';

export const Footer: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const footerFaqs = [
    {
      q: 'What makes K Raheja Viva Pirangut an exceptional NA plot investment in Pune?',
      a: 'K Raheja Viva spans 100+ acres of natural hill slopes in Pirangut, West Pune, offering PMRDA-sanctioned Collector NA bungalow plots with 100% legal title, a 20,000 sq.ft Signature Clubhouse, 40+ luxury amenities, and proximity to Hinjawadi IT Park (20 mins) and Chandani Chowk (15 mins).'
    },
    {
      q: 'What plot sizes are available at K Raheja Viva?',
      a: 'Plot sizes range from 2,000 sq.ft. to over 6,000 sq.ft., catering to custom luxury villas, multi-generational estates, and high-appreciation land investments.'
    },
    {
      q: 'Is bank loan facility available for purchasing plots at Raheja Viva?',
      a: 'Yes, K Raheja Viva is approved by top financial institutions including HDFC, ICICI Bank, State Bank of India (SBI), and Axis Bank for plot loans with pre-sanctioned title clearance.'
    },
    {
      q: 'What is the projected price appreciation (CAGR) for NA plots in Pirangut?',
      a: 'Driven by the Metro Line extension, Pune Ring Road expansion, and Hinjawadi IT corridor growth, land values in Pirangut have registered a steady 12% to 14.2% annual CAGR growth over recent years.'
    }
  ];

  return (
    <footer className="bg-[#122A23] border-t border-[#C5A059]/30 pt-16 pb-12 text-[#FAF8F5]/80 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Brand & Authority Banner ─── */}
        <div className="pb-12 border-b border-[#C5A059]/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/">
              <KRahejaLogo variant="light" />
            </Link>
            <p className="text-xs leading-relaxed text-[#FAF8F5]/75 pt-2">
              India&apos;s premier luxury plotted development & hill-view villa community in Pirangut, West Pune. Spanning 100+ acres of pristine Sahyadri landscape with low-density PMRDA Collector NA bungalow plots, a 20,000 sq.ft Signature Clubhouse, 6,500+ native trees, and 40+ resort-grade amenities.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-[#C5A059] font-bold">
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> K Raheja Corp Homes Trust</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> 100% Clear Title PMRDA NA</span>
            </div>
          </div>

          {/* Experience Center Contact Box */}
          <div className="lg:col-span-7 bg-[#1A3D33]/80 p-6 rounded-2xl border border-[#C5A059]/30 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-[#C5A059] font-bold uppercase text-[11px] tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Experience Center</span>
              </div>
              <p className="text-[#FAF8F5]/80 text-[11px]">Paud Road, Pirangut, West Pune 412115</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-[#C5A059] font-bold uppercase text-[11px] tracking-wider">
                <Phone className="w-3.5 h-3.5" />
                <span>Sales Hotline</span>
              </div>
              <p className="text-[#FAF8F5]/80 font-mono text-[11px]">+91 77440 09295</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-[#C5A059] font-bold uppercase text-[11px] tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Official Inquiries</span>
              </div>
              <p className="text-[#FAF8F5]/80 text-[11px]">propsmartrealty@gmail.com</p>
            </div>
          </div>
        </div>

        {/* ─── Mega Multi-Column Links Grid ─── */}
        <div className="py-12 border-b border-[#C5A059]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Raheja Viva Primary Hub */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#C5A059] text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#C5A059]" /> Raheja Viva Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/raheja-viva-na-bungalow-plots" className="hover:text-[#C5A059] font-semibold transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#C5A059]" /> Primary Micro-Site Hub</Link></li>
              <li><Link href="/raheja-viva-na-bungalow-plots/pirangut-pune" className="hover:text-[#C5A059] transition-colors">Pirangut Location Intelligence</Link></li>
              <li><Link href="/raheja-viva-na-bungalow-plots/sizes-masterplan" className="hover:text-[#C5A059] transition-colors">2,000 – 6,000+ Sq Ft Masterplan</Link></li>
              <li><Link href="/raheja-viva-na-bungalow-plots/price-investment" className="hover:text-[#C5A059] transition-colors">Price List & 14.2% CAGR ROI</Link></li>
              <li><Link href="/raheja-viva-na-bungalow-plots/legal-rera-sanction" className="hover:text-[#C5A059] transition-colors">Legal 7/12 Title & PMRDA NA</Link></li>
              <li><Link href="/masterplan" className="hover:text-[#C5A059] transition-colors font-medium">360° Interactive Masterplan</Link></li>
              <li><Link href="/club" className="hover:text-[#C5A059] transition-colors font-medium">Signature 20k Sq.Ft Clubhouse</Link></li>
              <li><Link href="/location" className="hover:text-[#C5A059] transition-colors font-medium">West Pune Infrastructure Map</Link></li>
            </ul>
          </div>

          {/* Col 2: Articles & Buying Guides */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#C5A059] text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#C5A059]" /> Articles & Guides
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/blog/k-raheja-viva-bungalow-plots-buying-guide-2025" className="hover:text-[#C5A059] transition-colors">Viva Plots Buying Guide 2025</Link></li>
              <li><Link href="/blog/why-invest-in-k-raheja-viva-na-bungalow-plots-pirangut" className="hover:text-[#C5A059] transition-colors">Why Invest in Raheja Viva Plots</Link></li>
              <li><Link href="/blog/k-raheja-viva-bungalow-plots-vs-flat-in-pune" className="hover:text-[#C5A059] transition-colors">Bungalow Plots vs Flat Guide</Link></li>
              <li><Link href="/blog/architectural-design-guide-for-k-raheja-viva-bungalow-plots" className="hover:text-[#C5A059] transition-colors">Villa FSI & Architecture Rules</Link></li>
              <li><Link href="/na-plots-pune/buy-guide" className="hover:text-[#C5A059] transition-colors">Complete NA Land Buy Guide</Link></li>
              <li><Link href="/na-plots-pune/investment-guide" className="hover:text-[#C5A059] transition-colors">West Pune Land Investment Guide</Link></li>
              <li><Link href="/na-plots-pune/legal-checklist" className="hover:text-[#C5A059] transition-colors">7/12 Title Legal Checklist</Link></li>
              <li><Link href="/blog" className="hover:text-[#C5A059] font-semibold transition-colors">All Real Estate Articles →</Link></li>
            </ul>
          </div>

          {/* Col 3: Research & Reports */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#C5A059] text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#C5A059]" /> Reports & Comparison
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/na-plots-pune/pirangut-market-report" className="hover:text-[#C5A059] transition-colors font-medium">Pirangut Market Trends Report</Link></li>
              <li><Link href="/na-plots-pune/na-conversion-guide" className="hover:text-[#C5A059] transition-colors">PMRDA Collector NA Guide</Link></li>
              <li><Link href="/investment/nri-plot-guide" className="hover:text-[#C5A059] transition-colors">NRI Land Buying & FEMA Guide</Link></li>
              <li><Link href="/investment/pune-real-estate-2025" className="hover:text-[#C5A059] transition-colors">Pune Real Estate Outlook 2025</Link></li>
              <li><Link href="/investment/west-pune-growth-corridor" className="hover:text-[#C5A059] transition-colors">West Pune Growth Corridor Analysis</Link></li>
              <li><Link href="/compare/pirangut-vs-bhugaon" className="hover:text-[#C5A059] transition-colors">Pirangut vs Bhugaon Comparison</Link></li>
              <li><Link href="/compare/pirangut-vs-mulshi" className="hover:text-[#C5A059] transition-colors">Pirangut vs Mulshi Comparison</Link></li>
              <li><Link href="/compare/plot-vs-flat-pune" className="hover:text-[#C5A059] transition-colors">Plot vs Flat Investment ROI</Link></li>
            </ul>
          </div>

          {/* Col 4: Artifacts & Calculators */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#C5A059] text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-[#C5A059]" /> Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/na-plots-pune/stamp-duty-calculator" className="hover:text-[#C5A059] font-medium transition-colors">Stamp Duty & Registration Calculator</Link></li>
              <li><Link href="/investment-calculator" className="hover:text-[#C5A059] font-medium transition-colors">Plot Appreciation & CAGR Calculator</Link></li>
              <li><Link href="/villa-studio" className="hover:text-[#C5A059] font-medium transition-colors">Villa Inspiration & Architectural Studio</Link></li>
              <li><Link href="/rera-guide" className="hover:text-[#C5A059] transition-colors">MahaRERA Compliance Portal</Link></li>
              <li><Link href="/faq" className="hover:text-[#C5A059] transition-colors">Comprehensive FAQ Knowledge Base</Link></li>
              <li><Link href="/hi" className="hover:text-[#C5A059] font-medium transition-colors">हिंदी (Hindi) Informational Portal</Link></li>
              <li><Link href="/rss.xml" target="_blank" className="hover:text-[#C5A059] transition-colors flex items-center gap-1"><Rss className="w-3 h-3 text-[#C5A059]" /> RSS 2.0 Feed</Link></li>
              <li><Link href="/sitemap-news.xml" target="_blank" className="hover:text-[#C5A059] transition-colors">Google News XML Sitemap</Link></li>
            </ul>
          </div>

          {/* Col 5: Micro-Location Clusters */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#C5A059] text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#C5A059]" /> Location Clusters
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/plots/pirangut" className="hover:text-[#C5A059] transition-colors">Plots in Pirangut</Link></li>
              <li><Link href="/plots/hinjawadi" className="hover:text-[#C5A059] transition-colors">Plots Near Hinjawadi IT Park</Link></li>
              <li><Link href="/plots/chandani-chowk" className="hover:text-[#C5A059] transition-colors">Plots Near Chandani Chowk</Link></li>
              <li><Link href="/plots/bavdhan" className="hover:text-[#C5A059] transition-colors">Plots Near Bavdhan</Link></li>
              <li><Link href="/plots/kothrud" className="hover:text-[#C5A059] transition-colors">Plots Near Kothrud</Link></li>
              <li><Link href="/plots/paud-road" className="hover:text-[#C5A059] transition-colors">Plots on Paud Road</Link></li>
              <li><Link href="/plots/bhugaon" className="hover:text-[#C5A059] transition-colors">Plots in Bhugaon</Link></li>
              <li><Link href="/plots/sus" className="hover:text-[#C5A059] transition-colors">Plots in Sus & Wakad Corridor</Link></li>
            </ul>
          </div>

        </div>

        {/* ─── Embedded Footer FAQ Accordion for Instant SEO Authority ─── */}
        <div className="py-10 border-b border-[#C5A059]/20">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-serif text-[#C5A059] text-base font-bold flex items-center gap-2">
              <HelpCircle className="w-5 h-5" /> Frequently Asked Questions (K Raheja Viva Knowledge Base)
            </h4>
            <Link href="/faq" className="text-xs text-[#C5A059] hover:underline font-semibold">View All FAQs →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {footerFaqs.map((faq, idx) => (
              <div key={idx} className="bg-[#1A3D33]/60 border border-[#C5A059]/20 rounded-xl p-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left font-semibold text-xs text-[#FAF8F5] flex items-center justify-between gap-2"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#C5A059] shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <p className="mt-2.5 text-xs text-[#FAF8F5]/75 leading-relaxed border-t border-[#C5A059]/10 pt-2.5">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ─── Plot Sizes & Feature Cloud Bar ─── */}
        <div className="py-6 border-b border-[#C5A059]/20 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-[#C5A059] font-semibold uppercase tracking-wider text-[11px]">Bungalow Plot Sizes:</span>
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/plots/2000-sqft" className="px-3 py-1 bg-[#1A3D33] border border-[#C5A059]/30 rounded-md text-[#FAF8F5] hover:text-[#C5A059] transition-colors text-xs">2,000 Sq.Ft. NA Plot</Link>
              <Link href="/plots/3000-sqft" className="px-3 py-1 bg-[#1A3D33] border border-[#C5A059]/30 rounded-md text-[#FAF8F5] hover:text-[#C5A059] transition-colors text-xs">3,000 Sq.Ft. NA Plot</Link>
              <Link href="/plots/4000-sqft" className="px-3 py-1 bg-[#1A3D33] border border-[#C5A059]/30 rounded-md text-[#FAF8F5] hover:text-[#C5A059] transition-colors text-xs">4,000 Sq.Ft. NA Plot</Link>
              <Link href="/plots/5000-sqft" className="px-3 py-1 bg-[#1A3D33] border border-[#C5A059]/30 rounded-md text-[#FAF8F5] hover:text-[#C5A059] transition-colors text-xs">5,000 Sq.Ft. NA Plot</Link>
              <Link href="/plots/6000-sqft" className="px-3 py-1 bg-[#1A3D33] border border-[#C5A059]/30 rounded-md text-[#FAF8F5] hover:text-[#C5A059] transition-colors text-xs">6,000+ Sq.Ft. Estate Plot</Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-[#C5A059] font-semibold uppercase tracking-wider text-[11px]">Special Plot Orientation & Features:</span>
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/plots/east-facing" className="px-2.5 py-0.5 bg-[#122A23] border border-[#C5A059]/20 rounded text-[#FAF8F5]/80 hover:text-[#C5A059] text-[11px]">Vastu East Facing Plots</Link>
              <Link href="/plots/north-facing" className="px-2.5 py-0.5 bg-[#122A23] border border-[#C5A059]/20 rounded text-[#FAF8F5]/80 hover:text-[#C5A059] text-[11px]">North Facing Plots</Link>
              <Link href="/plots/corner-plot" className="px-2.5 py-0.5 bg-[#122A23] border border-[#C5A059]/20 rounded text-[#FAF8F5]/80 hover:text-[#C5A059] text-[11px]">Corner Villa Plots</Link>
              <Link href="/plots/hill-facing" className="px-2.5 py-0.5 bg-[#122A23] border border-[#C5A059]/20 rounded text-[#FAF8F5]/80 hover:text-[#C5A059] text-[11px]">Sahyadri Hill View Plots</Link>
              <Link href="/plots/forest-facing" className="px-2.5 py-0.5 bg-[#122A23] border border-[#C5A059]/20 rounded text-[#FAF8F5]/80 hover:text-[#C5A059] text-[11px]">Forest Facing Plots</Link>
              <Link href="/plots/features/gated-community" className="px-2.5 py-0.5 bg-[#122A23] border border-[#C5A059]/20 rounded text-[#FAF8F5]/80 hover:text-[#C5A059] text-[11px]">Gated Community Plots</Link>
              <Link href="/plots/features/with-clubhouse-access" className="px-2.5 py-0.5 bg-[#122A23] border border-[#C5A059]/20 rounded text-[#FAF8F5]/80 hover:text-[#C5A059] text-[11px]">Clubhouse Access Plots</Link>
            </div>
          </div>
        </div>

        {/* ─── MahaRERA Compliance & Approval Badges Bar ─── */}
        <div className="py-6 border-b border-[#C5A059]/20 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {VIVA_RERA_INFO.reraRegNumbers.map((rera, idx) => (
            <div key={idx} className="bg-[#1A3D33] p-3.5 rounded-xl flex items-center space-x-3 border border-[#C5A059]/30">
              <ShieldCheck className="w-6 h-6 text-[#C5A059] shrink-0" />
              <div>
                <div className="text-[#FAF8F5] font-semibold text-xs">{rera.phase}</div>
                <div className="text-[#C5A059] font-mono text-[11px]">MahaRERA: {rera.number}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Legal Disclaimer & Search Engine Sitemaps ─── */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#FAF8F5]/60 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} K Raheja Corp Homes. All rights reserved. Official Domain: <a href="https://www.krahejacorpviva.com" className="text-[#C5A059] hover:underline">www.krahejacorpviva.com</a></p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/rera-guide" className="hover:text-[#C5A059]">Privacy Policy</Link>
            <span>•</span>
            <Link href="/rera-guide" className="hover:text-[#C5A059]">Terms of Service</Link>
            <span>•</span>
            <Link href="/sitemap.xml" target="_blank" className="hover:text-[#C5A059]">XML Sitemap</Link>
            <span>•</span>
            <Link href="/sitemap-video.xml" target="_blank" className="hover:text-[#C5A059]">Video Sitemap</Link>
            <span>•</span>
            <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noreferrer" className="hover:text-[#C5A059] inline-flex items-center space-x-1">
              <span>MahaRERA Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

