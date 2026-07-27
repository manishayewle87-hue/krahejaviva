'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronRight, MapPin, Trees, Waves, Dumbbell, Home, Star, Clock, ArrowRight } from 'lucide-react';

/* ─── Zone Definitions (% from top-left of masterplan image) ─────────────── */
const ZONES = [
  {
    id: 'entrance',
    label: 'GATE',
    name: 'Grand Entrance',
    x: 7.5, y: 40,
    color: '#C5A059',
    glowColor: 'rgba(197,160,89,0.5)',
    icon: '🏛️',
    type: 'Entry Gate',
    highlights: ['24/7 Manned Security', 'Grand Arrival Boulevard', 'Golf Cart Pickup', 'CCTV Surveillance'],
    description: 'A dramatic double-height gate flanked by heritage trees opens into the grand tree-lined arrival boulevard.',
    status: 'OPEN',
  },
  {
    id: 'clubhouse',
    label: 'CLUB',
    name: 'Signature Clubhouse',
    x: 29, y: 52,
    color: '#F59E0B',
    glowColor: 'rgba(245,158,11,0.5)',
    icon: '🏊',
    type: 'Amenity Hub',
    area: '25,000 sq ft',
    highlights: ['Infinity Pool', 'Amphitheater', 'Spa & Wellness', 'Fine Dining', 'Fitness Centre', 'Multipurpose Hall'],
    description: '25,000 sq ft world-class clubhouse — the social and recreational heart of Raheja Viva estate.',
    status: 'OPEN',
  },
  {
    id: 'zone1',
    label: 'ZONE 1',
    name: 'Zone-1 Residences',
    x: 12, y: 66,
    color: '#22C55E',
    glowColor: 'rgba(34,197,94,0.5)',
    icon: '🏡',
    type: 'Residential',
    plots: '120+ Plots',
    area: '2,000–4,000 sq ft',
    highlights: ['Forest Facing', 'Sahyadri Hill Views', 'Wide 12m Internal Roads', 'Underground Utilities'],
    description: 'Tranquil residential zone with lush forest-facing premium NA plots, tailored for privacy and serenity.',
    status: 'AVAILABLE',
  },
  {
    id: 'nova',
    label: 'NOVA',
    name: 'Nova Collection',
    x: 73, y: 62,
    color: '#C5A059',
    glowColor: 'rgba(197,160,89,0.6)',
    icon: '👑',
    type: 'Premium Residential',
    plots: '80+ Plots',
    area: '3,000–6,000 sq ft',
    highlights: ['Corner Estates', 'Panoramic Sahyadri Views', 'Exclusive Gated Block', 'Private Garden Zones'],
    description: 'The most prestigious address within the estate — Nova is Raheja Viva\'s crown jewel collection.',
    status: 'LIMITED',
  },
  {
    id: 'openspace2',
    label: 'OS-2',
    name: 'Open Space 2 — Nature Reserve',
    x: 43, y: 22,
    color: '#16A34A',
    glowColor: 'rgba(22,163,74,0.5)',
    icon: '🌿',
    type: 'Nature Reserve',
    highlights: ['Reflection Pond', 'Butterfly Garden', 'Natural Lake', 'Vista Point', 'BBQ Plaza', 'Walking Trail', 'Bonfire Zone'],
    description: 'A 20-acre living nature reserve — lakes, butterfly gardens, and Sahyadri viewing points at every turn.',
    status: 'OPEN',
  },
  {
    id: 'openspace3',
    label: 'OS-3',
    name: 'Open Space 3 — Activity Zone',
    x: 59, y: 57,
    color: '#10B981',
    glowColor: 'rgba(16,185,129,0.5)',
    icon: '🏃',
    type: 'Activity Zone',
    highlights: ['Mini Zip Line', 'Adventure Trail', 'Yoga Deck', 'Outdoor Fitness Area', 'Camping Ground', 'Walkway Bridge', 'Water Retention Basin'],
    description: 'An outdoor adventure & wellness zone with a zip line, adventure trail, and sunrise yoga decks.',
    status: 'OPEN',
  },
  {
    id: 'b39',
    label: 'B-39',
    name: 'B-39 Boulevard Plots',
    x: 38, y: 79,
    color: '#84CC16',
    glowColor: 'rgba(132,204,22,0.5)',
    icon: '🏠',
    type: 'Residential',
    plots: '60+ Plots',
    area: '2,500–3,500 sq ft',
    highlights: ['South Facing', 'Park Adjacent', 'Wide Boulevard Roads'],
    description: 'Spacious boulevard-facing plots with park adjacency and south-facing aspect for maximum sunlight.',
    status: 'AVAILABLE',
  },
  {
    id: 'northplots',
    label: 'NORTH',
    name: 'Northern Premium Plots',
    x: 46, y: 7,
    color: '#06B6D4',
    glowColor: 'rgba(6,182,212,0.5)',
    icon: '⛰️',
    type: 'Premium Residential',
    plots: '40+ Plots',
    area: '3,000–5,000 sq ft',
    highlights: ['Highest Elevation', '360° Hill Views', 'Cool Breezes', 'Sunrise Facing'],
    description: 'The most elevated plots in the estate — catching first light with panoramic Sahyadri hill views.',
    status: 'LIMITED',
  },
] as const;

type ZoneId = typeof ZONES[number]['id'];

const STATUS_STYLE: Record<string, { bg: string; text: string; dot: string }> = {
  OPEN:      { bg: 'bg-emerald-500/20',  text: 'text-emerald-400', dot: 'bg-emerald-400' },
  AVAILABLE: { bg: 'bg-blue-500/20',     text: 'text-blue-400',    dot: 'bg-blue-400' },
  LIMITED:   { bg: 'bg-amber-500/20',    text: 'text-amber-400',   dot: 'bg-amber-400' },
};

/* ─── Component ─────────────────────────────────────────────────────────────── */
export const InteractiveMasterPlan = ({ onBookVisit }: { onBookVisit?: (zone: string) => void }) => {
  const [hoveredZone, setHoveredZone] = useState<ZoneId | null>(null);
  const [activeZone, setActiveZone] = useState<ZoneId | null>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [offsetStart, setOffsetStart] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState<string>('ALL');
  const [showLegend, setShowLegend] = useState(true);
  const [tickPing, setTickPing] = useState(0);
  const mapRef = useRef<HTMLDivElement>(null);

  // Periodic re-ping to restart CSS animations
  useEffect(() => {
    const t = setInterval(() => setTickPing(p => p + 1), 3000);
    return () => clearInterval(t);
  }, []);

  // Mouse-wheel zoom
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScale(s => Math.min(Math.max(s + (e.deltaY < 0 ? 0.15 : -0.15), 1), 3.5));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX, y: e.clientY });
    setOffsetStart(offset);
  }, [scale, offset]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning) return;
    setOffset({
      x: offsetStart.x + (e.clientX - panStart.x),
      y: offsetStart.y + (e.clientY - panStart.y),
    });
  }, [isPanning, panStart, offsetStart]);

  const onMouseUp = useCallback(() => setIsPanning(false), []);

  const resetView = () => { setScale(1); setOffset({ x: 0, y: 0 }); };

  const selectedZone = ZONES.find(z => z.id === activeZone) ?? null;
  const visibleZones = filter === 'ALL'
    ? ZONES
    : ZONES.filter(z => z.type.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="space-y-5">

      {/* ── Filter Row ── */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {['ALL', 'Residential', 'Amenity', 'Nature', 'Activity', 'Premium'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === f
                  ? 'bg-[#C5A059] text-[#0a1a14] shadow-lg shadow-[#C5A059]/30'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:border-[#C5A059]/40 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale(s => Math.min(s + 0.3, 3.5))}
            className="w-8 h-8 rounded-lg bg-white/8 border border-white/15 text-white hover:bg-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all flex items-center justify-center"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setScale(s => Math.max(s - 0.3, 1))}
            className="w-8 h-8 rounded-lg bg-white/8 border border-white/15 text-white hover:bg-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all flex items-center justify-center"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={resetView}
            className="w-8 h-8 rounded-lg bg-white/8 border border-white/15 text-white hover:bg-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all flex items-center justify-center"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <span className="text-[10px] text-white/30 ml-1">{Math.round(scale * 100)}%</span>
        </div>
      </div>

      {/* ── Main Map + Side Panel ── */}
      <div className="flex gap-4 items-start">

        {/* Map */}
        <div className="flex-1 rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#050D09] shadow-2xl relative">

          {/* Scrollable map viewport */}
          <div
            ref={mapRef}
            className={`relative w-full overflow-hidden ${scale > 1 ? (isPanning ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'}`}
            style={{ aspectRatio: '1024/640' }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {/* Transformable inner */}
            <div
              style={{
                transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
                transformOrigin: 'center center',
                transition: isPanning ? 'none' : 'transform 0.25s cubic-bezier(0.4,0,0.2,1)',
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            >
              {/* Masterplan image */}
              <Image
                src="/images/viva/viva-masterplan-official.png"
                alt="K Raheja Viva Official Estate Masterplan"
                fill
                className="object-cover"
                quality={100}
                priority
              />

              {/* Subtle dark vignette */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(5,13,9,0.35) 100%)' }}
              />

              {/* ── Zone Pins ── */}
              {visibleZones.map((zone) => {
                const isHovered = hoveredZone === zone.id;
                const isActive  = activeZone  === zone.id;
                return (
                  <div
                    key={zone.id}
                    className="absolute z-10 group"
                    style={{ left: `${zone.x}%`, top: `${zone.y}%`, transform: 'translate(-50%, -50%)' }}
                    onMouseEnter={() => setHoveredZone(zone.id)}
                    onMouseLeave={() => setHoveredZone(null)}
                    onClick={(e) => { e.stopPropagation(); setActiveZone(isActive ? null : zone.id); }}
                  >
                    {/* Outer glow ring — animated */}
                    <div
                      key={`ping-${zone.id}-${tickPing}`}
                      className="absolute rounded-full animate-ping pointer-events-none"
                      style={{
                        width: '32px', height: '32px',
                        top: '-8px', left: '-8px',
                        background: zone.glowColor,
                        animationDuration: '2s',
                      }}
                    />
                    {/* Second ring (offset timing) */}
                    <div
                      key={`ping2-${zone.id}-${tickPing}`}
                      className="absolute rounded-full animate-ping pointer-events-none"
                      style={{
                        width: '24px', height: '24px',
                        top: '-4px', left: '-4px',
                        background: zone.glowColor,
                        animationDuration: '2s',
                        animationDelay: '0.5s',
                      }}
                    />

                    {/* Core dot */}
                    <div
                      className="relative w-4 h-4 rounded-full border-2 border-white shadow-xl transition-all duration-200 flex items-center justify-center"
                      style={{
                        background: zone.color,
                        transform: (isHovered || isActive) ? 'scale(1.5)' : 'scale(1)',
                        boxShadow: (isHovered || isActive) ? `0 0 20px ${zone.glowColor}` : `0 2px 8px ${zone.glowColor}`,
                      }}
                    />

                    {/* Zone label tag */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap transition-all duration-200"
                      style={{ top: '100%' }}
                    >
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest text-white shadow-lg"
                        style={{
                          background: `${zone.color}cc`,
                          border: `1px solid ${zone.color}88`,
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        {zone.label}
                      </span>
                    </div>

                    {/* Hover tooltip */}
                    {isHovered && !isActive && (
                      <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-30 pointer-events-none"
                        style={{ animation: 'fadeSlideUp 0.18s ease-out forwards' }}
                      >
                        <div className="bg-[#0a1a14]/95 backdrop-blur-xl rounded-xl p-3 border shadow-2xl min-w-[160px]"
                          style={{ borderColor: `${zone.color}55` }}>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-base">{zone.icon}</span>
                            <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: zone.color }}>
                              {zone.label}
                            </span>
                          </div>
                          <p className="text-white font-semibold text-xs leading-tight">{zone.name}</p>
                          <p className="text-white/50 text-[9px] mt-0.5 uppercase tracking-wider">{zone.type}</p>
                          <p className="text-white/40 text-[9px] mt-1.5 italic">Click to explore →</p>
                        </div>
                        {/* Triangle pointer */}
                        <div className="w-0 h-0 mx-auto"
                          style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: `6px solid #0a1a14` }} />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Animated scan line */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent"
                  style={{ animation: 'scanLine 6s linear infinite' }} />
              </div>
            </div>

            {/* Compass overlay */}
            <div className="absolute bottom-3 left-3 z-20 w-10 h-10 rounded-full bg-[#0a1a14]/80 border border-[#C5A059]/40 flex items-center justify-center backdrop-blur-md">
              <span className="text-[8px] font-black text-[#C5A059] leading-none text-center">
                N<br /><span className="text-white/30">↑</span>
              </span>
            </div>

            {/* Scale label */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-[#0a1a14]/80 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
              <div className="w-8 h-px bg-[#C5A059]" />
              <span className="text-[8px] text-white/50 font-medium">100m</span>
            </div>
          </div>

          {/* Zone chips strip */}
          <div className="bg-[#0a1a14] border-t border-[#C5A059]/15 px-4 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[9px] text-white/30 uppercase tracking-wider shrink-0 mr-1">Zones:</span>
            {ZONES.map(zone => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200"
                style={{
                  background: activeZone === zone.id ? zone.color : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${activeZone === zone.id ? zone.color : 'rgba(255,255,255,0.1)'}`,
                  color: activeZone === zone.id ? '#0a1a14' : 'rgba(255,255,255,0.55)',
                }}
              >
                <span>{zone.icon}</span>
                <span>{zone.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Side Detail Panel ── */}
        <div
          className="shrink-0 rounded-2xl border overflow-hidden transition-all duration-300"
          style={{
            width: selectedZone ? '288px' : '0px',
            opacity: selectedZone ? 1 : 0,
            borderColor: selectedZone ? `${selectedZone.color}44` : 'transparent',
            background: '#0a1a14',
          }}
        >
          {selectedZone && (
            <div className="p-5 space-y-4 h-full overflow-y-auto">
              {/* Close */}
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg"
                  style={{ background: `${selectedZone.color}20`, border: `1px solid ${selectedZone.color}44` }}
                >
                  {selectedZone.icon}
                </div>
                <button
                  onClick={() => setActiveZone(null)}
                  className="w-7 h-7 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white transition-colors flex items-center justify-center"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Zone name & type */}
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: selectedZone.color }}>
                  {selectedZone.label} · {selectedZone.type}
                </p>
                <h3 className="font-serif text-lg font-bold text-white mt-0.5 leading-tight">
                  {selectedZone.name}
                </h3>
              </div>

              {/* Status + area/plots */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${STATUS_STYLE[selectedZone.status].bg} ${STATUS_STYLE[selectedZone.status].text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${STATUS_STYLE[selectedZone.status].dot}`} />
                  {selectedZone.status}
                </span>
                {'plots' in selectedZone && (
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/5 text-white/50 border border-white/10">
                    {selectedZone.plots}
                  </span>
                )}
                {'area' in selectedZone && (
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/5 text-white/50 border border-white/10">
                    {selectedZone.area}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-white/60 text-xs leading-relaxed">{selectedZone.description}</p>

              {/* Highlights */}
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold mb-2">Key Features</p>
                <div className="space-y-1.5">
                  {selectedZone.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: selectedZone.color }} />
                      <span className="text-[11px] text-white/75 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => onBookVisit?.(selectedZone.name)}
                className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-[#0a1a14] transition-all duration-200 hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
                style={{ background: selectedZone.color }}
              >
                <span>Book Site Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Legend Row ── */}
      <div className="flex flex-wrap gap-3 justify-center">
        {ZONES.map(zone => (
          <div key={zone.id} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: zone.color }} />
            <span className="text-[10px] text-white/50 font-medium">{zone.name.split('—')[0].trim()}</span>
          </div>
        ))}
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes scanLine {
          0%   { top: -2px; }
          100% { top: 100%; }
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};
