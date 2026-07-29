'use client';

import { useState, useEffect } from 'react';
import { Phone, Calendar, Download } from 'lucide-react';
import { BookSiteVisitModal } from './BookSiteVisitModal';
import { DownloadBrochureModal } from './DownloadBrochureModal';

export function StickyCtaBar() {
  const [show, setShow] = useState(false);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      
      if (scrolled > scrollHeight * 0.4) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[997] hidden md:flex items-center justify-center bg-[#070C0B]/95 backdrop-blur-md border-t border-[#C5A059]/30 py-3 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ${show ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex items-center gap-8 max-w-5xl mx-auto w-full justify-center">
          <a href="tel:+917744009295" className="flex items-center gap-2 text-white font-bold hover:text-[#C5A059] transition-colors">
            <Phone className="w-5 h-5 text-[#C5A059]" />
            <span>+91 77440 09295</span>
          </a>
          <div className="h-6 w-px bg-white/20" />
          <button onClick={() => setIsSiteVisitOpen(true)} className="flex items-center gap-2 text-white font-bold hover:text-[#C5A059] transition-colors">
            <Calendar className="w-5 h-5 text-[#C5A059]" />
            <span>Schedule a Site Visit</span>
          </button>
          <div className="h-6 w-px bg-white/20" />
          <button onClick={() => setIsBrochureOpen(true)} className="flex items-center gap-2 text-[#122A23] bg-[#C5A059] px-7 py-2.5 rounded-full font-bold hover:bg-amber-400 transition-colors shadow-lg">
            <Download className="w-5 h-5" />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>
      
      <BookSiteVisitModal isOpen={isSiteVisitOpen} onClose={() => setIsSiteVisitOpen(false)} />
      <DownloadBrochureModal isOpen={isBrochureOpen} onClose={() => setIsBrochureOpen(false)} />
    </>
  );
}
