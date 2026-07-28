'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Car, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { LOCATION_POINTS, LocationPoint } from '@/data/locationPoints';

export const LocationIntelligenceMap: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPoints = LOCATION_POINTS.filter((pt) => {
    if (activeCategory === 'All') return true;
    return pt.category === activeCategory;
  });

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full bg-viva-gold/15 text-viva-gold text-xs font-semibold uppercase tracking-[0.3em] border border-viva-gold/30 inline-block">
          WEST PUNE LUXURY CORRIDOR
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-viva-sand font-bold">
          Location & Strategic Connectivity
        </h2>
        <p className="text-sm text-viva-muted leading-relaxed">
          Situated in Pirangut along Paud Road, K Raheja Viva offers pure mountain air and Sahyadri serenity while maintaining seamless 12 to 25 minute access to West Pune's business hubs, schools, and healthcare.
        </p>
      </div>

      {/* ── GOOGLE MAPS EMBED ─────────────────────────────────────────── */}
      <div className="rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-2xl relative">
        {/* Map label bar */}
        <div className="bg-[#122A23] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/50 flex items-center justify-center">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            </div>
            <div>
              <p className="text-[10px] text-[#C5A059] uppercase tracking-widest font-bold">K RAHEJA CORP HOMES</p>
              <p className="text-xs text-white font-semibold">Raheja Viva · Pirangut, Paud Road, West Pune – 412115</p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Pirangut+Pune+Maharashtra+India"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-[10px] text-[#C5A059] font-bold uppercase tracking-wider hover:text-amber-400 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open in Maps</span>
          </a>
        </div>

        {/* Google Maps iFrame */}
        <div className="relative w-full h-[480px] bg-[#0a1a14]">
          <iframe
            title="K Raheja Viva — Pirangut, West Pune Location Map"
            src="https://maps.google.com/maps?q=Pirangut,Pune,Maharashtra,India&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'saturate(0.85) brightness(0.97)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
          {/* Project pin overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10">
            <div className="relative flex flex-col items-center">
              <div className="bg-[#122A23] border-2 border-[#C5A059] text-white px-3 py-1.5 rounded-xl text-[11px] font-bold shadow-xl whitespace-nowrap">
                📍 K Raheja Viva
              </div>
              <div className="w-0.5 h-3 bg-[#C5A059]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#C5A059] border-2 border-white shadow-md" />
            </div>
          </div>
        </div>

        {/* Quick stats bar */}
        <div className="bg-[#122A23]/95 px-5 py-3 grid grid-cols-3 gap-4 text-center border-t border-[#C5A059]/20">
          {[
            { label: 'From Chandani Chowk', value: '12 Mins' },
            { label: 'From Hinjawadi IT Park', value: '20 Mins' },
            { label: 'From Pune Railway Station', value: '45 Mins' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[#C5A059] font-serif text-base font-bold">{stat.value}</p>
              <p className="text-[10px] text-white/60 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ──────────────────────────────────────────────────────────────── */}

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['All', 'Key Hub', 'Education', 'Healthcare', 'Retail & Hospitality', 'Transit'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-viva-gold text-viva-dark shadow-md'
                : 'glass-panel text-viva-sand hover:text-viva-gold border-viva-gold/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Connectivity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPoints.map((point) => (
          <div
            key={point.id}
            className="glass-panel rounded-2xl p-6 border-viva-gold/20 space-y-4 hover:border-viva-gold/50 transition-all duration-300 glass-card-hover"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-viva-gold font-bold">
                  {point.category}
                </span>
                <h3 className="font-serif text-xl text-viva-sand font-bold mt-0.5">
                  {point.name}
                </h3>
              </div>

              <div className="p-2.5 rounded-xl bg-viva-gold/15 border border-viva-gold/30 text-viva-gold flex items-center space-x-1 shrink-0">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold">{point.driveTimeMins} Mins</span>
              </div>
            </div>

            <p className="text-xs text-viva-muted leading-relaxed">
              {point.description}
            </p>

            <div className="pt-2 border-t border-viva-gold/10 space-y-1.5">
              {point.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-[11px] text-viva-sand">
                  <CheckCircle2 className="w-3.5 h-3.5 text-viva-gold shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-viva-muted flex items-center justify-between pt-1 font-mono">
              <span>Distance: {point.distanceKm} km</span>
              <span className="text-viva-gold">Paud Road Corridor</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
