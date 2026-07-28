'use client';

import React, { useState } from 'react';
import { LuxuryImage } from '@/components/common/LuxuryImage';
import { Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const SignatureClubMicrosite: React.FC<{ onBookVisit: () => void }> = ({ onBookVisit }) => {
  const [activeAmenity, setActiveAmenity] = useState<number>(0);

  const amenities = [
    {
      title: "Sunset Deck & Terrace Pool Lounge",
      category: "Architectural Marvel",
      description: "High-angle view of the wooden poolside deck, infinity pool waters, and expansive sports lawn against the sunset glow.",
      image: "/images/viva/viva-deck-sunset.jpg"
    },
    {
      title: "25m Infinity Pool & Floodlit Sports Lawn (Dusk View)",
      category: "Aquatics & Sports Precinct",
      description: "Dusk panorama showing the pool deck balcony, lush green sports arena, and misty Sahyadri mountain ridge.",
      image: "/images/viva/viva-pool-dusk.jpg"
    },
    {
      title: "Indoor/Outdoor Hospitality Lounge & Courtyard",
      category: "Private Social Club",
      description: "Warmly illuminated corridor lounge with polished travertine marble, teak wood patio seating, and bamboo garden privacy screen.",
      image: "/images/viva/viva-club-lounge.jpg"
    },
    {
      title: "Twilight Illuminated Signature Clubhouse & Amphitheater",
      category: "Evening Ambiance",
      description: "Breathtaking twilight illumination showcasing the multi-tiered terracotta roofs, underwater LED pool lighting, and grand lawn amphitheater.",
      image: "/images/viva/viva-clubhouse-night.jpg"
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] border border-[#C5A059]/40 inline-block shadow-sm">
          20,000 SQ.FT SIGNATURE CLUBHOUSE
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">
          The Signature Clubhouse
        </h2>
        <p className="text-sm text-[#5A6E67] leading-relaxed font-medium">
          Designed as a modern sanctuary for sports, social entertaining, and holistic wellness, the Signature Club anchors the estate with world-class hospitality managed to five-star standards.
        </p>
      </div>

      {/* Main Interactive Showcase */}
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Aspect-Ratio Preserved Image Viewer */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-xl bg-[#070C0B]">
            <LuxuryImage
              src={amenities[activeAmenity].image}
              alt={amenities[activeAmenity].title}
              fallbackCategory="club"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#122A23]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-[#C5A059]/30">
              <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">
                {amenities[activeAmenity].category}
              </span>
              <h3 className="font-serif text-xl text-[#122A23] font-bold">
                {amenities[activeAmenity].title}
              </h3>
              <p className="text-xs text-[#5A6E67] mt-1">
                {amenities[activeAmenity].description}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Amenity List Selector */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-serif text-2xl text-[#122A23] font-bold">
            Actual Site Photography
          </h3>

          <div className="space-y-3">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveAmenity(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                  activeAmenity === idx
                    ? 'bg-[#122A23] border-[#122A23] text-[#FAF8F5] shadow-md'
                    : 'bg-white border-[#C5A059]/25 text-[#122A23] hover:border-[#C5A059]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>{item.title}</span>
                  <span className="text-[10px] opacity-80">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onBookVisit}
            className="w-full py-3.5 rounded-full bg-[#122A23] text-[#FAF8F5] font-bold text-xs uppercase tracking-widest hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 shadow-lg hover:bg-[#1A3D33] mt-4"
          >
            <span>Book Private Clubhouse Tour</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

      </div>

    </div>
  );
};
