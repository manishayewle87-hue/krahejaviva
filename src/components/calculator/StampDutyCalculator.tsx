'use client';

import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

// Maharashtra Stamp Duty Rates 2025
const RATES = {
  pune_pmrda: { male: 0.06, female: 0.055, joint: 0.055 },
  pune_municipal: { male: 0.065, female: 0.06, joint: 0.06 },
  outside_pune: { male: 0.05, female: 0.045, joint: 0.045 },
};

const REGISTRATION_FEE_RATE = 0.01;
const MAX_REGISTRATION_FEE = 30000;

type Gender = 'male' | 'female' | 'joint';
type Location = keyof typeof RATES;

export function StampDutyCalculator() {
  const [plotValue, setPlotValue] = useState(15000000);
  const [gender, setGender] = useState<Gender>('male');
  const [location, setLocation] = useState<Location>('pune_pmrda');
  const [showBreakdown, setShowBreakdown] = useState(false);

  const stampDutyRate = RATES[location][gender];
  const stampDuty = plotValue * stampDutyRate;
  const registrationFee = Math.min(plotValue * REGISTRATION_FEE_RATE, MAX_REGISTRATION_FEE);
  const totalCost = plotValue + stampDuty + registrationFee;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const locationLabels: Record<Location, string> = {
    pune_pmrda: 'PMRDA / Pimpri-Chinchwad',
    pune_municipal: 'Pune Municipal Corporation',
    outside_pune: 'Outside Pune / Rural',
  };

  return (
    <div className="bg-white rounded-2xl border border-[#C5A059]/30 shadow-lg overflow-hidden">
      <div className="bg-[#122A23] p-6">
        <div className="flex items-center gap-3 mb-1">
          <Calculator className="w-6 h-6 text-[#C5A059]" />
          <h3 className="text-xl font-bold text-white font-['Cinzel']">Stamp Duty Calculator</h3>
        </div>
        <p className="text-white/60 text-sm">Maharashtra 2025 rates for NA plot registration</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Plot Value Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-[#3A4E45]">Plot Market Value</label>
            <span className="text-[#C5A059] font-bold">{formatCurrency(plotValue)}</span>
          </div>
          <input
            type="range" min="2000000" max="80000000" step="500000"
            value={plotValue} onChange={e => setPlotValue(Number(e.target.value))}
            className="w-full h-2 bg-[#E8E2D2] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
          />
          <div className="flex justify-between text-xs text-[#5A6E67] mt-1">
            <span>₹20 L</span><span>₹8 Cr</span>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="text-sm font-semibold text-[#3A4E45] block mb-2">Property Location</label>
          <div className="grid grid-cols-1 gap-2">
            {(Object.keys(locationLabels) as Location[]).map(loc => (
              <button
                key={loc}
                onClick={() => setLocation(loc)}
                className={`text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                  location === loc
                    ? 'border-[#C5A059] bg-amber-50 text-[#122A23]'
                    : 'border-gray-200 text-[#5A6E67] hover:border-[#C5A059]/50'
                }`}
              >
                {location === loc && <span className="text-[#C5A059] mr-1">✓</span>}
                {locationLabels[loc]}
              </button>
            ))}
          </div>
        </div>

        {/* Gender / Ownership */}
        <div>
          <label className="text-sm font-semibold text-[#3A4E45] block mb-2">Buyer Type</label>
          <div className="grid grid-cols-3 gap-2">
            {(['male', 'female', 'joint'] as Gender[]).map(g => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-3 py-2.5 rounded-xl border text-sm font-semibold capitalize transition-colors ${
                  gender === g
                    ? 'border-[#122A23] bg-[#122A23] text-white'
                    : 'border-gray-200 text-[#5A6E67] hover:border-gray-300'
                }`}
              >
                {g === 'joint' ? 'Joint' : g === 'female' ? '👩 Female' : '👨 Male'}
              </button>
            ))}
          </div>
          {gender === 'female' && (
            <p className="text-xs text-green-600 mt-2 font-medium">✅ 0.5% concession applies for female buyers in Maharashtra</p>
          )}
        </div>

        {/* Results */}
        <div className="bg-[#FAF8F5] rounded-xl p-5 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#5A6E67]">Stamp Duty ({(stampDutyRate * 100).toFixed(1)}%)</span>
            <span className="font-bold text-[#122A23]">{formatCurrency(stampDuty)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#5A6E67]">Registration Fee (1%, max ₹30,000)</span>
            <span className="font-bold text-[#122A23]">{formatCurrency(registrationFee)}</span>
          </div>
          <div className="border-t border-[#C5A059]/20 pt-3 flex justify-between items-center">
            <span className="text-sm font-bold text-[#3A4E45]">Total Cost of Purchase</span>
            <span className="text-lg font-bold text-[#C5A059]">{formatCurrency(totalCost)}</span>
          </div>
        </div>

        <div className="flex items-start gap-2 text-xs text-[#5A6E67] bg-blue-50 p-3 rounded-lg border border-blue-100">
          <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
          <span>Rates based on Maharashtra government circular 2025. Actual charges may vary. Consult a legal advisor before transaction.</span>
        </div>
      </div>
    </div>
  );
}
