'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Award } from 'lucide-react';
import { KRahejaLogo } from '@/components/common/KRahejaLogo';
import { VIVA_RERA_INFO } from '@/data/reraData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#122A23] border-t border-[#C5A059]/30 pt-16 pb-12 text-[#FAF8F5]/80 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#C5A059]/20">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/">
              <KRahejaLogo variant="light" />
            </Link>
            
            <p className="text-xs leading-relaxed max-w-md text-[#FAF8F5]/70 pt-2">
              India's premier luxury plotted development & villa community in Pirangut, West Pune. Spanning 100+ acres of pristine Sahyadri hill slopes with low-density estate plots, a 20,000 sq.ft Signature Clubhouse, and 6,500+ native trees.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-[#C5A059] font-bold">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span>A K Raheja Corp Homes Development</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#FAF8F5] text-base font-bold">Explore Viva</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/masterplan" className="hover:text-[#C5A059] transition-colors">GIS Interactive Masterplan</Link></li>
              <li><Link href="/masterplan?filter=Forest Facing" className="hover:text-[#C5A059] transition-colors">Forest Facing Plot Collection</Link></li>
              <li><Link href="/masterplan?filter=Hill Facing" className="hover:text-[#C5A059] transition-colors">Sahyadri Crest Plots</Link></li>
              <li><Link href="/villa-studio" className="hover:text-[#C5A059] transition-colors">Villa Inspiration Studio</Link></li>
              <li><Link href="/club" className="hover:text-[#C5A059] transition-colors">Signature Clubhouse & Amenities</Link></li>
              <li><Link href="/investment" className="hover:text-[#C5A059] transition-colors">Investment ROI Calculator</Link></li>
            </ul>
          </div>

          {/* Location & Guide */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#FAF8F5] text-base font-bold">Location & Guides</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/location" className="hover:text-[#C5A059] transition-colors">Pirangut & West Pune Corridor</Link></li>
              <li><Link href="/location#travel-times" className="hover:text-[#C5A059] transition-colors">Chandani Chowk & Hinjewadi Commute</Link></li>
              <li><Link href="/rera-guide" className="hover:text-[#C5A059] transition-colors">MahaRERA & Legal Due Diligence</Link></li>
              <li><Link href="/rera-guide#plot-buying-guide" className="hover:text-[#C5A059] transition-colors">NA Plot Buying Guide Maharashtra</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#FAF8F5] text-base font-bold">Sales Experience Center</h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>K Raheja Viva Experience Center, Paud Road, Pirangut, West Pune 412115</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>+91 8080 445 445 / +91 20 6700 0000</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>viva.sales@kraheja.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* MahaRERA Compliance Bar */}
        <div className="py-8 border-b border-[#C5A059]/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {VIVA_RERA_INFO.reraRegNumbers.map((rera, idx) => (
            <div key={idx} className="bg-[#1A3D33] p-3.5 rounded-lg flex items-center space-x-3 border border-[#C5A059]/30">
              <ShieldCheck className="w-6 h-6 text-[#C5A059] shrink-0" />
              <div>
                <div className="text-[#FAF8F5] font-semibold">{rera.phase}</div>
                <div className="text-[#C5A059] font-mono text-[11px]">MahaRERA: {rera.number}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF8F5]/60 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} K Raheja Corp Homes. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/rera-guide" className="hover:text-[#C5A059]">Privacy Policy</Link>
            <span>•</span>
            <Link href="/rera-guide" className="hover:text-[#C5A059]">Terms of Service</Link>
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
