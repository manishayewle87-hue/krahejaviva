'use client';

import React from 'react';
import { LuxuryImage } from '@/components/common/LuxuryImage';
import { Trees, Bird, Sun, Wind, ShieldCheck, Heart } from 'lucide-react';

export const NatureExperience: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] border border-[#C5A059]/40 inline-block shadow-sm">
          6,500+ TREES • 60+ BIRD SPECIES
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">
          Micro-Climate & Nature Sanctuary
        </h2>
        <p className="text-sm text-[#5A6E67] leading-relaxed font-medium">
          K Raheja Viva is engineered around the natural topography of the Sahyadri foothills, preserving native tree species, natural rainwater streams, and pristine air quality 3°C cooler than Central Pune.
        </p>
      </div>

      {/* Feature Split Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#C5A059]/30 bg-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Real Balcony View Photograph */}
        <div className="lg:col-span-6 relative h-96 w-full rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-lg">
          <LuxuryImage
            src="/images/viva/viva-balcony-view.jpg"
            alt="Real Balcony View of Blooming Yellow Tabebuia Trees & Townhouses"
            fallbackCategory="nature"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122A23]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-[#C5A059]/30 shadow-md">
            <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider block">
              ACTUAL SITE VIEW
            </span>
            <div className="font-serif text-lg text-[#122A23] font-bold">
              Balcony View of Blooming Tabebuia Canopy
            </div>
            <p className="text-xs text-[#5A6E67] mt-1">
              Look out onto lush green lawns, children's park, and Sahyadri hill slopes.
            </p>
          </div>
        </div>

        {/* Right: Key Eco Features */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-full bg-[#122A23] text-[#C5A059] flex items-center justify-center shrink-0">
                <Trees className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base text-[#122A23] font-bold">6,500+ Native Trees & Flora</h4>
                <p className="text-xs text-[#5A6E67] mt-1">
                  Includes Gulmohar, Tabebuia Rosea, Banyan, Neem, and Champa trees providing year-round shade and natural fragrance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-full bg-[#122A23] text-[#C5A059] flex items-center justify-center shrink-0">
                <Bird className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base text-[#122A23] font-bold">Avian Avary & 60+ Bird Species</h4>
                <p className="text-xs text-[#5A6E67] mt-1">
                  Home to Kingfishers, Sunbirds, Indian Robins, and Parakeets thriving in the undisturbed forest belt.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-full bg-[#122A23] text-[#C5A059] flex items-center justify-center shrink-0">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base text-[#122A23] font-bold">3°C Cooler Micro-Climate</h4>
                <p className="text-xs text-[#5A6E67] mt-1">
                  Fresh valley breezes and high altitude elevation ensure pure AQI levels below 45 year-round.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
