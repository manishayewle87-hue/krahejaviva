'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Sun, Compass, ShieldCheck, MapPin, Calculator, Phone, CheckCircle2, ArrowRight, Share2, Eye, RefreshCw } from 'lucide-react';
import { PlotData } from '@/data/masterplanPlots';

interface PlotCardModalProps {
  plot: PlotData | null;
  onClose: () => void;
  onBookVisit: (plotNumber: string) => void;
}

export const PlotCardModal: React.FC<PlotCardModalProps> = ({ plot, onClose, onBookVisit }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sunlight' | 'panorama' | 'emi'>('overview');
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);

  if (!plot) return null;

  const isAvailable = plot.status === 'Available';

  // EMI Calculation Logic
  const plotTotalCost = plot.priceLakhs * 100000;
  const loanPrincipal = plotTotalCost * (1 - downPaymentPercent / 100);
  const monthlyInterestRate = 0.085 / 12; // 8.5% annual rate
  const totalMonths = loanTenureYears * 12;
  const monthlyEmi = Math.round(
    (loanPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
  );

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-viva-dark/95 backdrop-blur-2xl border-l border-viva-gold/30 p-6 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300 flex flex-col justify-between">
      
      <div>
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-viva-gold/20 pb-4 mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-viva-gold font-semibold block">
              {plot.phase} • {plot.block}
            </span>
            <h2 className="font-serif text-3xl text-viva-sand font-bold">
              {plot.plotNumber}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-viva-sand hover:text-viva-gold hover:bg-viva-emerald/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-1 bg-viva-forest/50 p-1 rounded-xl mb-6 border border-viva-gold/15 text-[11px] font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'overview' ? 'bg-viva-gold text-viva-dark font-bold shadow' : 'text-viva-sand hover:text-viva-gold'
            }`}
          >
            Specs
          </button>

          <button
            onClick={() => setActiveTab('sunlight')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'sunlight' ? 'bg-viva-gold text-viva-dark font-bold shadow' : 'text-viva-sand hover:text-viva-gold'
            }`}
          >
            Sunlight
          </button>

          <button
            onClick={() => setActiveTab('panorama')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'panorama' ? 'bg-viva-gold text-viva-dark font-bold shadow' : 'text-viva-sand hover:text-viva-gold'
            }`}
          >
            360° View
          </button>

          <button
            onClick={() => setActiveTab('emi')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              activeTab === 'emi' ? 'bg-viva-gold text-viva-dark font-bold shadow' : 'text-viva-sand hover:text-viva-gold'
            }`}
          >
            EMI Calculator
          </button>
        </div>

        {/* Status Badge & Price Box */}
        <div className="glass-panel p-4 rounded-xl mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
              plot.status === 'Available' 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : plot.status === 'Reserved'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
            }`}>
              {plot.status}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-viva-gold/15 text-viva-gold text-xs font-medium border border-viva-gold/30">
              {plot.category}
            </span>
          </div>

          <div className="pt-1">
            <div className="text-[11px] text-viva-muted uppercase tracking-wider">All-Inclusive Indicative Price</div>
            <div className="text-3xl font-serif text-viva-gold font-bold">{plot.priceFormatted}</div>
            <div className="text-[11px] text-viva-sand/70">Approx. ₹{(plotTotalCost / plot.areaSqYds).toFixed(0)} / sq yard</div>
          </div>
        </div>

        {/* TAB 1: OVERVIEW SPECS */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-panel p-3 rounded-lg">
                <div className="text-[10px] text-viva-muted uppercase">Plot Area</div>
                <div className="text-base text-viva-sand font-semibold">{plot.areaSqYds} sq yds</div>
                <div className="text-[10px] text-viva-gold">({plot.areaSqFt} sq.ft)</div>
              </div>

              <div className="glass-panel p-3 rounded-lg">
                <div className="text-[10px] text-viva-muted uppercase">Orientation</div>
                <div className="text-base text-viva-sand font-semibold flex items-center space-x-1">
                  <Compass className="w-4 h-4 text-viva-gold" />
                  <span>{plot.facing}</span>
                </div>
              </div>

              <div className="glass-panel p-3 rounded-lg">
                <div className="text-[10px] text-viva-muted uppercase">Plot Dimensions</div>
                <div className="text-sm text-viva-sand font-semibold">{plot.dimensions}</div>
                <div className="text-[10px] text-viva-muted">Rectangular contour</div>
              </div>

              <div className="glass-panel p-3 rounded-lg">
                <div className="text-[10px] text-viva-muted uppercase">Distance to Club</div>
                <div className="text-sm text-viva-sand font-semibold">{plot.distanceToClubMeters} Meters</div>
                <div className="text-[10px] text-viva-gold">~{Math.round(plot.distanceToClubMeters / 80)} min stroll</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-viva-sand uppercase tracking-wider">Site Context & Surroundings</h4>
              <p className="text-xs text-viva-muted leading-relaxed glass-panel p-3 rounded-lg border-viva-gold/10">
                {plot.surroundings360Description}
              </p>

              <div className="space-y-2">
                {plot.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-viva-sand">
                    <CheckCircle2 className="w-3.5 h-3.5 text-viva-gold shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SUNLIGHT SIMULATION */}
        {activeTab === 'sunlight' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="glass-panel p-4 rounded-xl space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-viva-gold font-semibold">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Sunlight Coverage Score</span>
                </span>
                <span className="text-viva-sand font-bold">{plot.sunlightHours} hrs / day</span>
              </div>
              <div className="w-full bg-viva-dark rounded-full h-3 overflow-hidden border border-viva-gold/20">
                <div 
                  className="bg-gradient-to-r from-amber-500 via-viva-gold to-yellow-300 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${(plot.sunlightHours / 12) * 100}%` }}
                />
              </div>

              <div className="space-y-3 text-xs pt-2">
                <div className="flex justify-between border-b border-viva-gold/10 pb-2">
                  <span className="text-viva-muted">Morning East Sun (6 AM - 11 AM)</span>
                  <span className="text-emerald-400 font-bold">100% Direct Light</span>
                </div>
                <div className="flex justify-between border-b border-viva-gold/10 pb-2">
                  <span className="text-viva-muted">Afternoon Sun (12 PM - 4 PM)</span>
                  <span className="text-amber-400 font-bold">Soft Filtered Light</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-viva-muted">Sahyadri Ridge Shading</span>
                  <span className="text-viva-gold font-bold">Natural Cooling</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-viva-muted leading-relaxed">
              Bioclimatic modeling confirms that {plot.plotNumber} enjoys ideal cross-ventilation breezes from the North-East corridor, keeping indoor temperatures 2-3°C cooler than central Pune flats.
            </p>
          </div>
        )}

        {/* TAB 3: 360 PANORAMA VIEW */}
        {activeTab === 'panorama' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-viva-gold/30 shadow-xl group">
              <Image
                src={
                  plot.category === 'Forest Facing'
                    ? 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop'
                    : plot.category === 'Hill Facing'
                    ? 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
                    : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
                }
                alt={plot.plotNumber}
                fill
                className="object-cover transition-transform duration-10000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-viva-dark via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-viva-dark/80 text-viva-gold text-[10px] font-bold flex items-center space-x-1">
                <Eye className="w-3.5 h-3.5" />
                <span>360° Simulated Drone View</span>
              </div>
            </div>

            <p className="text-xs text-viva-muted">
              {plot.surroundings360Description}
            </p>
          </div>
        )}

        {/* TAB 4: EMI CALCULATOR */}
        {activeTab === 'emi' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="glass-panel p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-viva-sand font-medium">Down Payment ({downPaymentPercent}%)</span>
                <span className="text-viva-gold font-bold">₹{((plotTotalCost * downPaymentPercent) / 10000000).toFixed(2)} Cr</span>
              </div>
              <input
                type="range"
                min="20"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-viva-gold cursor-pointer"
              />

              <div className="flex justify-between items-center text-xs pt-2">
                <span className="text-viva-sand font-medium">Loan Tenure ({loanTenureYears} Years)</span>
                <span className="text-viva-gold font-bold">{loanTenureYears} Yrs</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="5"
                value={loanTenureYears}
                onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                className="w-full accent-viva-gold cursor-pointer"
              />

              <div className="pt-3 border-t border-viva-gold/15 flex items-center justify-between">
                <div className="text-xs text-viva-muted">Estimated Monthly EMI (8.5% p.a.)</div>
                <div className="text-xl font-serif text-viva-gold font-bold">₹{monthlyEmi.toLocaleString('en-IN')}/mo</div>
              </div>
            </div>

            <p className="text-[10px] text-viva-muted text-center">
              Pre-approved for plot loans up to 80% by HDFC Bank, ICICI Bank, and SBI.
            </p>
          </div>
        )}
      </div>

      {/* Action CTAs */}
      <div className="space-y-3 pt-4 border-t border-viva-gold/15 mt-6">
        {isAvailable ? (
          <button
            onClick={() => onBookVisit(plot.plotNumber)}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-viva-gold via-amber-500 to-viva-gold text-viva-dark font-bold text-xs uppercase tracking-widest hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>Book Exclusive Inspection for {plot.plotNumber}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            disabled
            className="w-full py-3.5 rounded-full bg-viva-dark border border-viva-gold/20 text-viva-muted font-bold text-xs uppercase tracking-widest cursor-not-allowed text-center"
          >
            Plot Currently {plot.status}
          </button>
        )}

        <button
          onClick={() => {
            navigator.clipboard?.writeText(window.location.href);
            alert(`Plot details for ${plot.plotNumber} copied!`);
          }}
          className="w-full py-2.5 rounded-full glass-panel text-viva-gold text-xs font-semibold flex items-center justify-center space-x-2 hover:border-viva-gold transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Plot Details</span>
        </button>
      </div>

    </div>
  );
};
