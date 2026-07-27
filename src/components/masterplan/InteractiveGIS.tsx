'use client';

import React, { useState } from 'react';
import { Sun, Moon, Sunrise, Sunset, Compass, Layers, ZoomIn, ZoomOut, RefreshCw, Filter, Check, Info, Search, Scale, X, ArrowRight } from 'lucide-react';
import { MASTERPLAN_PLOTS, PlotData } from '@/data/masterplanPlots';
import { PlotCardModal } from './PlotCardModal';

interface GISProps {
  onBookVisit: (plotNumber: string) => void;
  initialFilter?: string;
}

export const InteractiveGIS: React.FC<GISProps> = ({ onBookVisit, initialFilter }) => {
  const [selectedPlot, setSelectedPlot] = useState<PlotData | null>(null);
  const [hoveredPlot, setHoveredPlot] = useState<PlotData | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Plot Comparison State
  const [comparePlots, setComparePlots] = useState<PlotData[]>([]);
  const [showCompareDrawer, setShowCompareDrawer] = useState<boolean>(false);

  // Environment Mode
  const [envMode, setEnvMode] = useState<'dawn' | 'noon' | 'sunset' | 'night'>('noon');
  const [facingFilter, setFacingFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>(initialFilter || 'All');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('All');
  
  // Layer Toggles
  const [showRoads, setShowRoads] = useState<boolean>(true);
  const [showClub, setShowClub] = useState<boolean>(true);
  const [showForest, setShowForest] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Filter Logic
  const filteredPlots = MASTERPLAN_PLOTS.filter((plot) => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchNo = plot.plotNumber.toLowerCase().includes(q);
      const matchCat = plot.category.toLowerCase().includes(q);
      const matchFacing = plot.facing.toLowerCase().includes(q);
      const matchArea = plot.areaSqYds.toString().includes(q);
      if (!matchNo && !matchCat && !matchFacing && !matchArea) return false;
    }
    if (facingFilter !== 'All' && plot.facing !== facingFilter) return false;
    if (categoryFilter !== 'All' && plot.category !== categoryFilter) return false;
    if (availabilityFilter !== 'All' && plot.status !== availabilityFilter) return false;
    return true;
  });

  const togglePlotComparison = (plot: PlotData, e: React.MouseEvent) => {
    e.stopPropagation();
    if (comparePlots.some(p => p.id === plot.id)) {
      setComparePlots(comparePlots.filter(p => p.id !== plot.id));
    } else {
      if (comparePlots.length >= 3) {
        alert("You can compare up to 3 plots simultaneously.");
        return;
      }
      setComparePlots([...comparePlots, plot]);
    }
  };

  const envStyles = {
    dawn: {
      bg: 'from-[#1A2622] via-[#2D2A1F] to-[#121A18]',
      sunPosition: { cx: 100, cy: 80, r: 40, fill: '#FFAE63' },
      shadowDx: -6,
      shadowDy: 8
    },
    noon: {
      bg: 'from-[#0E1A17] via-[#122A23] to-[#070C0B]',
      sunPosition: { cx: 450, cy: 40, r: 50, fill: '#FFD700' },
      shadowDx: 1,
      shadowDy: 2
    },
    sunset: {
      bg: 'from-[#2A1D1A] via-[#1F1820] to-[#0A0D0C]',
      sunPosition: { cx: 800, cy: 100, r: 45, fill: '#FF5733' },
      shadowDx: 10,
      shadowDy: 6
    },
    night: {
      bg: 'from-[#040807] via-[#070D0C] to-[#020404]',
      sunPosition: { cx: 750, cy: 60, r: 25, fill: '#E6F0FA' },
      shadowDx: 0,
      shadowDy: 0
    }
  };

  return (
    <div className="relative w-full min-h-[750px] rounded-3xl overflow-hidden glass-panel border border-viva-gold/30 shadow-2xl flex flex-col">
      
      {/* Top Toolbar */}
      <div className="p-4 bg-viva-dark/90 border-b border-viva-gold/20 flex flex-wrap items-center justify-between gap-4 z-10">
        
        {/* Title */}
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-viva-forest border border-viva-gold/40 text-viva-gold">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h3 className="font-serif text-lg text-viva-sand font-bold">
              GIS Interactive Masterplan
            </h3>
            <p className="text-[11px] text-viva-muted">
              Live availability • Sunlight Simulation • 100+ Acre Estate
            </p>
          </div>
        </div>

        {/* Environment Toggles */}
        <div className="flex items-center bg-viva-forest/60 p-1 rounded-full border border-viva-gold/25">
          <button
            onClick={() => setEnvMode('dawn')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1.5 transition-all ${
              envMode === 'dawn' ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' : 'text-viva-muted hover:text-viva-sand'
            }`}
          >
            <Sunrise className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dawn (6 AM)</span>
          </button>
          
          <button
            onClick={() => setEnvMode('noon')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1.5 transition-all ${
              envMode === 'noon' ? 'bg-viva-gold/30 text-viva-gold border border-viva-gold/50' : 'text-viva-muted hover:text-viva-sand'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Noon (12 PM)</span>
          </button>

          <button
            onClick={() => setEnvMode('sunset')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1.5 transition-all ${
              envMode === 'sunset' ? 'bg-rose-500/30 text-rose-300 border border-rose-500/50' : 'text-viva-muted hover:text-viva-sand'
            }`}
          >
            <Sunset className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sunset (6 PM)</span>
          </button>

          <button
            onClick={() => setEnvMode('night')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1.5 transition-all ${
              envMode === 'night' ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50' : 'text-viva-muted hover:text-viva-sand'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Night</span>
          </button>
        </div>

        {/* Comparison Trigger & Zoom Controls */}
        <div className="flex items-center space-x-2">
          {comparePlots.length > 0 && (
            <button
              onClick={() => setShowCompareDrawer(true)}
              className="px-3 py-1.5 rounded-full bg-viva-gold text-viva-dark text-xs font-bold flex items-center space-x-1 shadow"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare ({comparePlots.length})</span>
            </button>
          )}

          <div className="flex items-center space-x-1">
            <button
              onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 1.8))}
              className="p-2 rounded-lg bg-viva-forest/60 hover:bg-viva-emerald text-viva-sand border border-viva-gold/20"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.8))}
              className="p-2 rounded-lg bg-viva-forest/60 hover:bg-viva-emerald text-viva-sand border border-viva-gold/20"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-2 rounded-lg bg-viva-forest/60 hover:bg-viva-emerald text-viva-sand border border-viva-gold/20"
              title="Reset Zoom"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Secondary Search & Filter Bar */}
      <div className="px-4 py-2.5 bg-viva-dark/70 border-b border-viva-gold/10 flex flex-wrap items-center gap-3 text-xs z-10">
        
        {/* Instant Search Bar */}
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <Search className="w-3.5 h-3.5 text-viva-gold/70 absolute left-2.5 top-2.5" />
          <input
            type="text"
            placeholder="Search Plot #, Facing, sq yds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-viva-forest/80 border border-viva-gold/20 rounded-lg py-1.5 pl-8 pr-3 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
          />
        </div>

        {/* Facing Filter */}
        <select
          value={facingFilter}
          onChange={(e) => setFacingFilter(e.target.value)}
          className="bg-viva-forest/80 text-viva-sand border border-viva-gold/20 rounded-lg py-1.5 px-2 focus:outline-none"
        >
          <option value="All">All Orientations</option>
          <option value="East">East Facing</option>
          <option value="North">North Facing</option>
          <option value="North-East">North-East Facing</option>
          <option value="West">West Facing</option>
        </select>

        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-viva-forest/80 text-viva-sand border border-viva-gold/20 rounded-lg py-1.5 px-2 focus:outline-none"
        >
          <option value="All">All Collections</option>
          <option value="Forest Facing">🌲 Forest Facing</option>
          <option value="Hill Facing">⛰️ Hill Crest Facing</option>
          <option value="Club Facing">🏛️ Signature Club Facing</option>
          <option value="Corner Plot">📐 Grand Corner Estate</option>
          <option value="Large Estate">👑 Large Estate (800+ sq yds)</option>
        </select>

        {/* Availability Filter */}
        <select
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className="bg-viva-forest/80 text-viva-sand border border-viva-gold/20 rounded-lg py-1.5 px-2 focus:outline-none"
        >
          <option value="All">All Statuses</option>
          <option value="Available">🟢 Available Only</option>
          <option value="Reserved">🟡 Reserved</option>
          <option value="Sold">🔴 Sold</option>
        </select>

        {/* Layer Toggles */}
        <div className="ml-auto flex items-center space-x-3">
          <label className="flex items-center space-x-1 text-viva-sand cursor-pointer">
            <input
              type="checkbox"
              checked={showForest}
              onChange={(e) => setShowForest(e.target.checked)}
              className="accent-viva-gold"
            />
            <span>Forest Belt</span>
          </label>
          <label className="flex items-center space-x-1 text-viva-sand cursor-pointer">
            <input
              type="checkbox"
              checked={showClub}
              onChange={(e) => setShowClub(e.target.checked)}
              className="accent-viva-gold"
            />
            <span>Clubhouse</span>
          </label>
        </div>

      </div>

      {/* Interactive GIS SVG Canvas Area */}
      <div 
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        className={`relative flex-1 overflow-auto bg-gradient-to-br ${envStyles[envMode].bg} transition-colors duration-700 p-4 flex items-center justify-center`}
      >
        
        <div 
          className="transition-transform duration-300 ease-out origin-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            viewBox="0 0 900 350"
            className="w-full max-w-[900px] h-auto rounded-2xl shadow-2xl overflow-visible"
          >
            <defs>
              <filter id="plotShadow" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow 
                  dx={envStyles[envMode].shadowDx} 
                  dy={envStyles[envMode].shadowDy} 
                  stdDeviation="3" 
                  floodColor="#000" 
                  floodOpacity={envMode === 'night' ? '0.2' : '0.6'} 
                />
              </filter>

              <linearGradient id="lakeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.9" />
              </linearGradient>

              <pattern id="forestPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="6" fill="#14362B" opacity="0.6" />
                <circle cx="5" cy="5" r="3" fill="#1D4A3B" opacity="0.8" />
              </pattern>
            </defs>

            {/* Hill Contour Layer */}
            <path
              d="M0,0 Q250,50 500,20 T900,0 L900,350 L0,350 Z"
              fill="#0A1814"
              opacity="0.5"
            />

            {/* Reserved Forest Zone */}
            {showForest && (
              <g className="transition-opacity duration-300">
                <rect x="0" y="0" width="900" height="90" fill="url(#forestPattern)" />
                <path d="M0,85 Q450,110 900,85 L900,0 L0,0 Z" fill="#16382C" opacity="0.4" />
                <text x="380" y="45" fill="#4ADE80" fontSize="14" fontWeight="600" opacity="0.8" letterSpacing="3">
                  🌲 RESERVED SAHYADRI FOREST BELT
                </text>
              </g>
            )}

            {/* Road Network */}
            {showRoads && (
              <g className="transition-opacity duration-300">
                <path
                  d="M40,185 C250,185 650,185 860,185"
                  stroke="#3A4D45"
                  strokeWidth="24"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M40,185 C250,185 650,185 860,185"
                  stroke="#C5A059"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  fill="none"
                  opacity="0.7"
                />
                <text x="360" y="189" fill="#FAF8F5" fontSize="10" fontWeight="600" letterSpacing="2">
                  60 FT GRAND PALM AVENUE
                </text>

                <line x1="270" y1="90" x2="270" y2="280" stroke="#2B3A34" strokeWidth="12" />
                <line x1="540" y1="90" x2="540" y2="280" stroke="#2B3A34" strokeWidth="12" />
              </g>
            )}

            {/* Signature Clubhouse */}
            {showClub && (
              <g transform="translate(680, 20)" className="transition-opacity duration-300 cursor-pointer">
                <ellipse cx="110" cy="50" rx="65" ry="35" fill="url(#lakeGrad)" stroke="#38BDF8" strokeWidth="1" />
                <text x="75" y="55" fill="#E0F2FE" fontSize="10" fontStyle="italic">Club Lotus Lake</text>

                <rect x="10" y="15" width="80" height="50" rx="8" fill="#122A23" stroke="#C5A059" strokeWidth="2" filter="url(#plotShadow)" />
                <text x="20" y="38" fill="#C5A059" fontSize="9" fontWeight="bold">SIGNATURE</text>
                <text x="22" y="50" fill="#FAF8F5" fontSize="8" fontWeight="500">CLUBHOUSE</text>
              </g>
            )}

            {/* Interactive Plots Rendering */}
            {filteredPlots.map((plot) => {
              const isSelected = selectedPlot?.id === plot.id;
              const isCompared = comparePlots.some(p => p.id === plot.id);
              
              const strokeColor = isSelected 
                ? '#FFD700' 
                : isCompared
                ? '#38BDF8'
                : plot.status === 'Available'
                ? '#10B981'
                : plot.status === 'Reserved'
                ? '#F59E0B'
                : '#EF4444';

              const fillColor = plot.status === 'Available'
                ? '#122A23'
                : plot.status === 'Reserved'
                ? '#241E15'
                : '#231617';

              return (
                <g 
                  key={plot.id}
                  onClick={() => setSelectedPlot(plot)}
                  onMouseEnter={() => setHoveredPlot(plot)}
                  onMouseLeave={() => setHoveredPlot(null)}
                  className="gis-plot"
                  filter="url(#plotShadow)"
                >
                  <rect
                    x={plot.coordinates.x}
                    y={plot.coordinates.y}
                    width={plot.coordinates.width}
                    height={plot.coordinates.height}
                    rx="6"
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={isSelected || isCompared ? 3 : 1.5}
                    className="transition-all duration-300 hover:fill-viva-emerald"
                  />

                  <text
                    x={plot.coordinates.x + plot.coordinates.width / 2}
                    y={plot.coordinates.y + plot.coordinates.height / 2 - 4}
                    textAnchor="middle"
                    fill="#FAF8F5"
                    fontSize="11"
                    fontWeight="bold"
                    pointerEvents="none"
                  >
                    {plot.plotNumber}
                  </text>

                  <text
                    x={plot.coordinates.x + plot.coordinates.width / 2}
                    y={plot.coordinates.y + plot.coordinates.height / 2 + 10}
                    textAnchor="middle"
                    fill="#C5A059"
                    fontSize="9"
                    fontWeight="500"
                    pointerEvents="none"
                  >
                    {plot.areaSqYds} sq yds
                  </text>

                  {/* Compare Toggle Button inside plot SVG */}
                  <circle
                    cx={plot.coordinates.x + 10}
                    cy={plot.coordinates.y + 10}
                    r="6"
                    fill={isCompared ? "#38BDF8" : "rgba(0,0,0,0.5)"}
                    stroke="#FFF"
                    strokeWidth="0.8"
                    onClick={(e) => togglePlotComparison(plot, e)}
                    className="cursor-pointer hover:scale-125 transition-transform"
                  />
                  <text
                    x={plot.coordinates.x + 10}
                    y={plot.coordinates.y + 13}
                    textAnchor="middle"
                    fill="#FFF"
                    fontSize="7"
                    fontWeight="bold"
                    pointerEvents="none"
                  >
                    {isCompared ? "✓" : "+"}
                  </text>
                </g>
              );
            })}

            {/* Sun / Environment Overlay */}
            <circle
              cx={envStyles[envMode].sunPosition.cx}
              cy={envStyles[envMode].sunPosition.cy}
              r={envStyles[envMode].sunPosition.r}
              fill={envStyles[envMode].sunPosition.fill}
              opacity="0.4"
              className="transition-all duration-700"
            />
          </svg>
        </div>

        {/* Live Hover Tooltip Card following cursor */}
        {hoveredPlot && (
          <div 
            className="absolute z-30 glass-panel p-3 rounded-xl border-viva-gold/40 shadow-2xl pointer-events-none animate-in fade-in duration-150"
            style={{ 
              left: `${hoverPos.x + 15}px`, 
              top: `${hoverPos.y - 45}px` 
            }}
          >
            <div className="flex items-center justify-between space-x-3 text-xs">
              <span className="font-serif font-bold text-viva-sand">{hoveredPlot.plotNumber}</span>
              <span className="text-viva-gold font-mono font-bold">{hoveredPlot.priceFormatted}</span>
            </div>
            <div className="text-[10px] text-viva-muted mt-0.5">
              {hoveredPlot.areaSqYds} sq yds • {hoveredPlot.facing} • {hoveredPlot.category}
            </div>
          </div>
        )}

      </div>

      {/* Plot Comparison Drawer Modal */}
      {showCompareDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl glass-panel-gold rounded-3xl p-6 sm:p-8 border border-viva-gold/40 shadow-2xl">
            <div className="flex items-center justify-between border-b border-viva-gold/20 pb-4 mb-6">
              <h3 className="font-serif text-2xl text-viva-sand font-bold flex items-center space-x-2">
                <Scale className="w-6 h-6 text-viva-gold" />
                <span>Side-by-Side Plot Comparison</span>
              </h3>
              <button 
                onClick={() => setShowCompareDrawer(false)}
                className="p-2 rounded-full text-viva-sand hover:text-viva-gold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {comparePlots.map((plot) => (
                <div key={plot.id} className="glass-panel p-4 rounded-xl space-y-3 border-viva-gold/20 relative">
                  <button
                    onClick={() => setComparePlots(comparePlots.filter(p => p.id !== plot.id))}
                    className="absolute top-2 right-2 text-viva-muted hover:text-rose-400"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="font-serif text-xl text-viva-sand font-bold">{plot.plotNumber}</div>
                  <div className="text-lg font-serif text-viva-gold font-bold">{plot.priceFormatted}</div>
                  
                  <div className="space-y-1.5 text-xs text-viva-sand pt-2 border-t border-viva-gold/10">
                    <div>Area: <strong>{plot.areaSqYds} sq yds</strong></div>
                    <div>Facing: <strong>{plot.facing}</strong></div>
                    <div>Category: <strong>{plot.category}</strong></div>
                    <div>Club Dist: <strong>{plot.distanceToClubMeters}m</strong></div>
                    <div>Sunlight: <strong>{plot.sunlightHours} hrs</strong></div>
                  </div>

                  <button
                    onClick={() => {
                      setShowCompareDrawer(false);
                      onBookVisit(plot.plotNumber);
                    }}
                    className="w-full py-2 rounded-full bg-viva-gold text-viva-dark font-bold text-xs uppercase tracking-wider mt-2"
                  >
                    Inspect {plot.plotNumber}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Plot Inspection Modal */}
      <PlotCardModal
        plot={selectedPlot}
        onClose={() => setSelectedPlot(null)}
        onBookVisit={(num) => {
          setSelectedPlot(null);
          onBookVisit(num);
        }}
      />

    </div>
  );
};
