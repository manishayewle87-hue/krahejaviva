'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, Bot, Menu, X, ChevronDown, Sparkles, MapPin, TrendingUp, ShieldCheck, Home } from 'lucide-react';
import { KRahejaLogo } from '@/components/common/KRahejaLogo';

interface HeaderProps {
  onOpenAIConcierge: () => void;
  onOpenSiteVisit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAIConcierge, onOpenSiteVisit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'collections' | 'more' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[#C5A059]/25 py-3 shadow-md' 
          : 'bg-[#FAF8F5]/70 backdrop-blur-md py-4 border-b border-[#C5A059]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <Link href="/">
            <KRahejaLogo variant="dark" />
          </Link>

          {/* Streamlined Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wider text-[#122A23] uppercase">
            
            <Link href="/raheja-viva-na-bungalow-plots" className="flex items-center space-x-1 hover:text-[#C5A059] text-[#C5A059] transition-colors py-1 font-bold">
              <Home className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>VIVA PLOTS</span>
            </Link>

            <Link href="/masterplan" className="flex items-center space-x-1.5 hover:text-[#C5A059] transition-colors py-1">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>MASTERPLAN</span>
            </Link>

            {/* Plot Collections Dropdown */}
            <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
              <button 
                onMouseEnter={() => setActiveMenu('collections')}
                onClick={() => setActiveMenu(activeMenu === 'collections' ? null : 'collections')}
                className="flex items-center space-x-1 hover:text-[#C5A059] transition-colors py-1"
              >
                <span>PLOTS</span>
                <ChevronDown className="w-3 h-3 text-[#C5A059]" />
              </button>

              {activeMenu === 'collections' && (
                <div className="absolute top-full left-0 w-60 bg-white/95 backdrop-blur-xl rounded-xl py-2 border border-[#C5A059]/30 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link href="/raheja-viva-na-bungalow-plots" className="block px-4 py-2.5 text-xs text-[#122A23] hover:bg-[#FAF8F5] hover:text-[#C5A059] font-bold border-b border-[#C5A059]/10">
                    🏛️ Raheja Viva NA Bungalow Plots
                  </Link>
                  <Link href="/masterplan?filter=Forest Facing" className="block px-4 py-2.5 text-xs text-[#122A23] hover:bg-[#FAF8F5] hover:text-[#C5A059] font-semibold border-b border-[#C5A059]/10">
                    🌲 Forest Facing Plots
                  </Link>
                  <Link href="/masterplan?filter=Hill Facing" className="block px-4 py-2.5 text-xs text-[#122A23] hover:bg-[#FAF8F5] hover:text-[#C5A059] font-semibold border-b border-[#C5A059]/10">
                    ⛰️ Sahyadri Crest Plots
                  </Link>
                  <Link href="/masterplan?filter=Corner Plot" className="block px-4 py-2.5 text-xs text-[#122A23] hover:bg-[#FAF8F5] hover:text-[#C5A059] font-semibold border-b border-[#C5A059]/10">
                    🏛️ Corner Estate Plots
                  </Link>
                  <Link href="/masterplan?filter=Large Estate" className="block px-4 py-2.5 text-xs text-[#122A23] hover:bg-[#FAF8F5] hover:text-[#C5A059] font-semibold">
                    👑 Large Estate Collections
                  </Link>
                </div>
              )}
            </div>

            <Link href="/villa-studio" className="hover:text-[#C5A059] transition-colors py-1">
              VILLA STUDIO
            </Link>

            <Link href="/club" className="hover:text-[#C5A059] transition-colors py-1">
              SIGNATURE CLUB
            </Link>

            {/* Explore More Popover */}
            <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
              <button 
                onMouseEnter={() => setActiveMenu('more')}
                onClick={() => setActiveMenu(activeMenu === 'more' ? null : 'more')}
                className="flex items-center space-x-1 hover:text-[#C5A059] transition-colors py-1"
              >
                <span>EXPLORE</span>
                <ChevronDown className="w-3 h-3 text-[#C5A059]" />
              </button>

              {activeMenu === 'more' && (
                <div className="absolute top-full left-0 w-52 bg-white/95 backdrop-blur-xl rounded-xl py-2 border border-[#C5A059]/30 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link href="/raheja-viva-na-bungalow-plots/pirangut-pune" className="flex items-center space-x-2 px-4 py-2 text-xs text-[#122A23] hover:bg-[#FAF8F5] hover:text-[#C5A059] font-semibold border-b border-[#C5A059]/10">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Pirangut Location</span>
                  </Link>
                  <Link href="/raheja-viva-na-bungalow-plots/price-investment" className="flex items-center space-x-2 px-4 py-2 text-xs text-[#122A23] hover:bg-[#FAF8F5] hover:text-[#C5A059] font-semibold border-b border-[#C5A059]/10">
                    <TrendingUp className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Price & Investment ROI</span>
                  </Link>
                  <Link href="/raheja-viva-na-bungalow-plots/legal-rera-sanction" className="flex items-center space-x-2 px-4 py-2 text-xs text-[#122A23] hover:bg-[#FAF8F5] hover:text-[#C5A059] font-semibold border-b border-[#C5A059]/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Legal 7/12 & RERA</span>
                  </Link>
                  <Link href="/blog" className="flex items-center space-x-2 px-4 py-2 text-xs text-[#122A23] hover:bg-[#FAF8F5] hover:text-[#C5A059] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Blogs & Articles</span>
                  </Link>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            
            {/* AI Assistant Button */}
            <button
              onClick={onOpenAIConcierge}
              className="px-3.5 py-1.5 rounded-full bg-[#122A23] text-[#FAF8F5] border border-[#C5A059]/30 flex items-center space-x-1.5 text-xs font-semibold hover:bg-[#1A3D33] transition-all shadow-sm"
            >
              <Bot className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>AI Concierge</span>
            </button>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/917744009295?text=Hello%2C%20I%20am%20interested%20in%20K%20Raheja%20Corp%20Viva%20NA%20Bungalow%20Plots%20in%20Pirangut%2C%20West%20Pune.%20Please%20share%20the%20masterplan%20PDF%2C%20current%20price%20list%2C%20and%20available%20plot%20inventory."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center space-x-1.5 hover:bg-[#20ba5a] transition-all shadow-sm"
            >
              <span>WhatsApp</span>
            </a>

            {/* Book Visit Button */}
            <button
              onClick={onOpenSiteVisit}
              className="px-4 py-1.5 rounded-full bg-[#C5A059] text-white font-bold text-xs tracking-wider uppercase hover:bg-amber-600 transition-all shadow-sm"
            >
              Book Visit
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenAIConcierge}
              className="p-1.5 rounded-full bg-[#122A23] text-[#C5A059]"
            >
              <Bot className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#122A23] hover:text-[#C5A059]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#C5A059]/30 px-6 py-5 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200 text-sm font-bold text-[#122A23] uppercase tracking-wider">
          <Link href="/raheja-viva-na-bungalow-plots" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 py-2 border-b border-[#C5A059]/10 text-[#C5A059]">
            <Home className="w-4 h-4 text-[#C5A059]" />
            <span>RAHEJA VIVA BUNGALOW PLOTS</span>
          </Link>
          <Link href="/masterplan" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 py-2 border-b border-[#C5A059]/10">
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>MASTERPLAN</span>
          </Link>
          <Link href="/raheja-viva-na-bungalow-plots/sizes-masterplan" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-[#C5A059]/10">
            PLOT SIZES
          </Link>
          <Link href="/villa-studio" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-[#C5A059]/10">
            VILLA STUDIO
          </Link>
          <Link href="/club" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-[#C5A059]/10">
            SIGNATURE CLUB
          </Link>
          <Link href="/raheja-viva-na-bungalow-plots/pirangut-pune" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-[#C5A059]/10">
            PIRANGUT LOCATION
          </Link>
          <Link href="/raheja-viva-na-bungalow-plots/price-investment" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-[#C5A059]/10">
            PRICING & ROI
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-[#C5A059]/10">
            BLOGS & ARTICLES
          </Link>

          <button
            onClick={() => { setMobileMenuOpen(false); onOpenSiteVisit(); }}
            className="w-full py-3 rounded-full bg-[#122A23] text-[#FAF8F5] font-bold text-xs uppercase tracking-wider text-center shadow mt-2"
          >
            Book Site Visit
          </button>
        </div>
      )}
    </header>
  );
};
