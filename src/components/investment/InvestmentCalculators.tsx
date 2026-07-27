'use client';

import React, { useState } from 'react';
import { TrendingUp, Calculator, ShieldCheck, DollarSign, Award, ArrowUpRight } from 'lucide-react';

export const InvestmentCalculators: React.FC = () => {
  const [plotPriceCr, setPlotPriceCr] = useState<number>(3.0); // 3 Cr plot
  const [holdingYears, setHoldingYears] = useState<number>(5);
  const [expectedCagr, setExpectedCagr] = useState<number>(14.5); // 14.5% annual appreciation

  // Calculations
  const projectedFuturePlotValueCr = (plotPriceCr * Math.pow(1 + expectedCagr / 100, holdingYears)).toFixed(2);
  const totalNetGainCr = (parseFloat(projectedFuturePlotValueCr) - plotPriceCr).toFixed(2);

  // Asset returns comparison for holding years
  const mutualFundReturnCr = (plotPriceCr * Math.pow(1 + 0.12, holdingYears)).toFixed(2);
  const fixedDepositReturnCr = (plotPriceCr * Math.pow(1 + 0.07, holdingYears)).toFixed(2);

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full bg-viva-gold/15 text-viva-gold text-xs font-semibold uppercase tracking-[0.3em] border border-viva-gold/30 inline-block">
          FINANCIAL INTELLIGENCE
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-viva-sand font-bold">
          Plot Investment & Appreciation Center
        </h2>
        <p className="text-sm text-viva-muted leading-relaxed">
          Plotted land in West Pune's prime Pirangut corridor offers superior capital preservation, zero building depreciation, and direct leverage from Pune Ring Road & Chandani Chowk flyover infrastructure.
        </p>
      </div>

      {/* Calculator Grid */}
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 border border-viva-gold/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Sliders Input Column */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-serif text-2xl text-viva-sand font-bold flex items-center space-x-2">
            <Calculator className="w-6 h-6 text-viva-gold" />
            <span>ROI Calculator Parameters</span>
          </h3>

          {/* Initial Plot Investment */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-viva-sand font-medium">Initial Plot Value</span>
              <span className="text-viva-gold font-bold text-sm">₹{plotPriceCr.toFixed(2)} Cr</span>
            </div>
            <input
              type="range"
              min="2.0"
              max="10.0"
              step="0.25"
              value={plotPriceCr}
              onChange={(e) => setPlotPriceCr(Number(e.target.value))}
              className="w-full accent-viva-gold cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-viva-muted">
              <span>₹2.0 Cr</span>
              <span>₹5.0 Cr</span>
              <span>₹10.0 Cr</span>
            </div>
          </div>

          {/* Investment Hold Period */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-viva-sand font-medium">Holding Period</span>
              <span className="text-viva-gold font-bold text-sm">{holdingYears} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={holdingYears}
              onChange={(e) => setHoldingYears(Number(e.target.value))}
              className="w-full accent-viva-gold cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-viva-muted">
              <span>1 Year</span>
              <span>5 Years</span>
              <span>10 Years</span>
            </div>
          </div>

          {/* Expected CAGR */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-viva-sand font-medium">Annual Land Appreciation Rate (CAGR)</span>
              <span className="text-viva-gold font-bold text-sm">{expectedCagr}% / yr</span>
            </div>
            <input
              type="range"
              min="8.0"
              max="20.0"
              step="0.5"
              value={expectedCagr}
              onChange={(e) => setExpectedCagr(Number(e.target.value))}
              className="w-full accent-viva-gold cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-viva-muted">
              <span>8% (Conservative)</span>
              <span>14.5% (Historical Pirangut Avg)</span>
              <span>20% (Aggressive)</span>
            </div>
          </div>

          {/* Key Drivers Info */}
          <div className="glass-panel p-4 rounded-xl space-y-2 border-viva-gold/15 text-xs text-viva-muted">
            <div className="text-viva-gold font-semibold flex items-center space-x-1">
              <TrendingUp className="w-4 h-4" />
              <span>Key Growth Accelerators for Raheja Viva:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[11px] text-viva-sand">
              <li>Chandani Chowk 3-Tier Flyover reduces Kothrud commute to 12 minutes</li>
              <li>Upcoming Pune Ring Road Interchange within 4 km of Raheja Viva gate</li>
              <li>PMRDA strict green-belt zoning capping future plot supply</li>
            </ul>
          </div>
        </div>

        {/* Output & Comparison Column */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Main Return Result Card */}
          <div className="glass-panel p-6 rounded-2xl border-viva-gold/40 bg-gradient-to-br from-viva-forest/80 to-viva-dark space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-viva-gold font-bold block">
              PROJECTED ASSET VALUE IN {holdingYears} YEARS
            </span>
            
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-viva-sand">
                ₹{projectedFuturePlotValueCr} Cr
              </span>
              <span className="text-xs text-emerald-400 font-bold flex items-center">
                <ArrowUpRight className="w-4 h-4" />
                <span>+₹{totalNetGainCr} Cr Gain</span>
              </span>
            </div>

            <p className="text-xs text-viva-muted">
              Estimated asset valuation based on compounding annual appreciation of {expectedCagr}% over {holdingYears} years at K Raheja Viva.
            </p>
          </div>

          {/* Asset Class Comparison Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-viva-sand uppercase tracking-wider">
              Asset Class Return Comparison ({holdingYears} Years)
            </h4>

            <div className="space-y-2">
              {/* Raheja Viva Plot */}
              <div className="glass-panel p-3 rounded-xl border-viva-gold/40 flex items-center justify-between">
                <div>
                  <div className="text-xs text-viva-gold font-bold">👑 K Raheja Viva Plot</div>
                  <div className="text-[10px] text-viva-muted">{expectedCagr}% CAGR</div>
                </div>
                <div className="text-base text-viva-sand font-serif font-bold">
                  ₹{projectedFuturePlotValueCr} Cr
                </div>
              </div>

              {/* Equity Mutual Funds */}
              <div className="glass-panel p-3 rounded-xl border-viva-gold/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-viva-sand font-semibold">📈 Equity Mutual Funds</div>
                  <div className="text-[10px] text-viva-muted">12% CAGR</div>
                </div>
                <div className="text-sm text-viva-muted font-serif">
                  ₹{mutualFundReturnCr} Cr
                </div>
              </div>

              {/* Fixed Deposits */}
              <div className="glass-panel p-3 rounded-xl border-viva-gold/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-viva-sand font-semibold">🏦 Bank Fixed Deposits</div>
                  <div className="text-[10px] text-viva-muted">7% Interest</div>
                </div>
                <div className="text-sm text-viva-muted font-serif">
                  ₹{fixedDepositReturnCr} Cr
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
