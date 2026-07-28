'use client';

import { useState } from 'react';

export function RoiCalculator() {
  const [budget, setBudget] = useState<number>(15000000); // Default 1.5 Cr
  const [years, setYears] = useState<number>(5); // Default 5 years

  // Real estate appreciation in Pirangut area is estimated around 12% annually
  const realEstateRate = 0.12; 
  // Fixed deposit rate
  const fdRate = 0.07;
  // Gold estimated return
  const goldRate = 0.09;

  const calculateReturn = (principal: number, rate: number, time: number) => {
    return principal * Math.pow((1 + rate), time);
  };

  const reReturn = calculateReturn(budget, realEstateRate, years);
  const fdReturn = calculateReturn(budget, fdRate, years);
  const goldReturn = calculateReturn(budget, goldRate, years);

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(value / 100000).toFixed(2)} L`;
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#C5A059]/30 shadow-lg font-sans">
      <h3 className="text-2xl font-bold text-[#122A23] mb-6 font-['Cinzel']">Plot ROI Calculator</h3>
      
      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-[#3A4E45]">Investment Amount</label>
            <span className="text-[#C5A059] font-bold">{formatCurrency(budget)}</span>
          </div>
          <input
            type="range"
            min="8000000"
            max="50000000"
            step="1000000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-2 bg-[#E8E2D2] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
          />
          <div className="flex justify-between text-xs text-[#5A6E67] mt-1">
            <span>₹80 L</span>
            <span>₹5 Cr+</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-[#3A4E45]">Holding Period (Years)</label>
            <span className="text-[#C5A059] font-bold">{years} Years</span>
          </div>
          <input
            type="range"
            min="3"
            max="15"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-[#E8E2D2] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
          />
          <div className="flex justify-between text-xs text-[#5A6E67] mt-1">
            <span>3 Years</span>
            <span>15 Years</span>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF8F5] p-5 rounded-xl space-y-4">
        <h4 className="text-sm font-semibold text-[#122A23] uppercase tracking-wider mb-2">Projected Value in {years} Years</h4>
        
        <div className="space-y-3">
          <div className="relative">
            <div className="flex justify-between text-sm mb-1 z-10 relative px-2">
              <span className="font-semibold text-white">NA Plot (12% p.a.)</span>
              <span className="font-bold text-white">{formatCurrency(reReturn)}</span>
            </div>
            <div className="absolute top-0 left-0 h-full bg-[#122A23] rounded-md" style={{ width: '100%' }}></div>
          </div>

          <div className="relative">
            <div className="flex justify-between text-sm mb-1 z-10 relative px-2">
              <span className="font-semibold text-[#122A23]">Gold (9% p.a.)</span>
              <span className="font-bold text-[#122A23]">{formatCurrency(goldReturn)}</span>
            </div>
            <div className="absolute top-0 left-0 h-full bg-[#C5A059]/40 rounded-md" style={{ width: `${(goldReturn/reReturn)*100}%` }}></div>
          </div>

          <div className="relative">
            <div className="flex justify-between text-sm mb-1 z-10 relative px-2">
              <span className="font-semibold text-[#122A23]">Fixed Deposit (7% p.a.)</span>
              <span className="font-bold text-[#122A23]">{formatCurrency(fdReturn)}</span>
            </div>
            <div className="absolute top-0 left-0 h-full bg-gray-300 rounded-md" style={{ width: `${(fdReturn/reReturn)*100}%` }}></div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-[#5A6E67] mb-4">*Projections based on historical Pirangut real estate appreciation data. Actual returns may vary.</p>
        <button className="bg-[#C5A059] hover:bg-[#B38D46] text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full md:w-auto">
          Request Detailed Investment Report
        </button>
      </div>
    </div>
  );
}
