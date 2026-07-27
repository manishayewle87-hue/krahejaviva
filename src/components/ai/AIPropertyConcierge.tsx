'use client';

import React, { useState } from 'react';
import { X, Bot, Sparkles, Send, Compass, Home, TrendingUp, ShieldCheck, User, CheckCircle2 } from 'lucide-react';
import { MASTERPLAN_PLOTS } from '@/data/masterplanPlots';
import { VIVA_RERA_INFO } from '@/data/reraData';

interface AIConciergeProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlot: (plotId: string) => void;
}

type Mode = 'recommender' | 'architect' | 'investment' | 'legal';

export const AIPropertyConcierge: React.FC<AIConciergeProps> = ({ isOpen, onClose, onSelectPlot }) => {
  const [activeMode, setActiveMode] = useState<Mode>('recommender');
  const [userQuery, setUserQuery] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'ai'; text: string; actionPlotId?: string }>>([
    {
      sender: 'ai',
      text: "Welcome to K Raheja Viva AI Concierge. I am your specialized digital advisor for luxury plotted investments in Pirangut, West Pune. How may I assist your estate selection today?"
    }
  ]);

  if (!isOpen) return null;

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || userQuery;
    if (!textToSend.trim()) return;

    const newHistory = [...chatHistory, { sender: 'user' as const, text: textToSend }];
    setChatHistory(newHistory);
    setUserQuery('');

    // Generate intelligent AI response based on active mode
    setTimeout(() => {
      let aiReply = "";
      let plotToRecommend: string | undefined = undefined;

      const lower = textToSend.toLowerCase();

      if (activeMode === 'recommender') {
        if (lower.includes('forest') || lower.includes('green') || lower.includes('trees')) {
          aiReply = "Based on your preference for natural greenery, I highly recommend **Plot 101** (Phase 1, Block A). It spans 450 sq.yds directly touching the reserved Sahyadri forest belt with unobstructed sunrise views. Listed at ₹2.45 Cr.";
          plotToRecommend = "plot-101";
        } else if (lower.includes('large') || lower.includes('estate') || lower.includes('big')) {
          aiReply = "For grand multi-generational living, **Plot 206** in Phase 2 Enclave is our flagship trophy estate plot measuring 1,200 sq.yds (10,800 sq.ft) with 60ft road frontage. Listed at ₹6.90 Cr.";
          plotToRecommend = "plot-206";
        } else if (lower.includes('corner') || lower.includes('dual')) {
          aiReply = "**Plot 102** is an exceptional East-facing corner plot measuring 520 sq.yds with dual 50ft road access and elevated contour levels. Listed at ₹2.95 Cr.";
          plotToRecommend = "plot-102";
        } else {
          aiReply = "I have analyzed your search intent across Raheja Viva's 100+ acre inventory. For prime balance of clubhouse proximity and privacy, **Plot 201** (750 sq.yds, East facing corner) at ₹4.35 Cr is our top recommendation.";
          plotToRecommend = "plot-201";
        }
      } else if (activeMode === 'architect') {
        if (lower.includes('cost') || lower.includes('sq ft') || lower.includes('price')) {
          aiReply = "Luxury villa construction at Raheja Viva ranges between **₹4,200 to ₹5,500 per sq.ft** depending on facade finishes (Burma Teak, Basalt stone, triple-glazed glass) and inclusion of heated plunge pools or automated roof pergolas.";
        } else {
          aiReply = "For a 500 sq.yd plot at Raheja Viva, PMRDA norms permit up to 1.1 FSI, allowing you to construct a magnificent 5,500+ sq.ft G+1 luxury villa with a central courtyard and 4-car garage.";
        }
      } else if (activeMode === 'investment') {
        aiReply = "Pirangut has witnessed **14.2% annual land appreciation** over the past 3 years, accelerated by the completion of Chandani Chowk flyover. Plotted developments by tier-1 developers like K Raheja Corp historically outperform apartment yields by 2.4x over a 7-year holding period.";
      } else {
        aiReply = `K Raheja Viva is 100% Non-Agricultural (NA) clear title land. Registered under MahaRERA No. **${VIVA_RERA_INFO.reraRegNumbers[0].number}**. All major financial institutions (HDFC Bank, SBI, ICICI) offer 75-80% plot loans + villa construction top-up financing.`;
      }

      setChatHistory(prev => [...prev, { sender: 'ai', text: aiReply, actionPlotId: plotToRecommend }]);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl h-[650px] glass-panel-gold rounded-3xl border border-viva-gold/40 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 bg-viva-dark/95 border-b border-viva-gold/20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-2xl bg-gradient-to-tr from-viva-gold to-amber-400 text-viva-dark">
              <Bot className="w-6 h-6 font-bold" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-serif text-lg text-viva-sand font-bold">Viva AI Property Concierge</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  Live Neural Agent
                </span>
              </div>
              <p className="text-[11px] text-viva-muted">Powered by Raheja Corp Real Estate Intelligence Matrix</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-viva-sand hover:text-viva-gold hover:bg-viva-forest/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-Agent Persona Tabs */}
        <div className="bg-viva-forest/40 border-b border-viva-gold/10 p-2 flex items-center justify-around text-xs font-semibold">
          <button
            onClick={() => setActiveMode('recommender')}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all ${
              activeMode === 'recommender' ? 'bg-viva-gold text-viva-dark shadow-md' : 'text-viva-sand hover:text-viva-gold'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Plot Matcher</span>
          </button>

          <button
            onClick={() => setActiveMode('architect')}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all ${
              activeMode === 'architect' ? 'bg-viva-gold text-viva-dark shadow-md' : 'text-viva-sand hover:text-viva-gold'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Villa Architect</span>
          </button>

          <button
            onClick={() => setActiveMode('investment')}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all ${
              activeMode === 'investment' ? 'bg-viva-gold text-viva-dark shadow-md' : 'text-viva-sand hover:text-viva-gold'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>ROI Advisor</span>
          </button>

          <button
            onClick={() => setActiveMode('legal')}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all ${
              activeMode === 'legal' ? 'bg-viva-gold text-viva-dark shadow-md' : 'text-viva-sand hover:text-viva-gold'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>RERA & Legal</span>
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-viva-dark/60 border-b border-viva-gold/10 flex items-center space-x-2 overflow-x-auto text-[11px]">
          <span className="text-viva-gold font-semibold shrink-0">Try Asking:</span>
          {activeMode === 'recommender' && (
            <>
              <button onClick={() => handleSend("Show me forest facing plots under 3 Cr")} className="chip-btn">🌲 Forest plots under 3 Cr</button>
              <button onClick={() => handleSend("Show me large estate corner plots")} className="chip-btn">👑 Large corner plots</button>
              <button onClick={() => handleSend("Plots closest to Signature Club")} className="chip-btn">🏛️ Club facing plots</button>
            </>
          )}
          {activeMode === 'architect' && (
            <>
              <button onClick={() => handleSend("What is the cost per sq ft to build a villa?")} className="chip-btn">💰 Villa construction cost per sqft</button>
              <button onClick={() => handleSend("What FSI is allowed in Pirangut?")} className="chip-btn">📏 Permissible FSI & setbacks</button>
            </>
          )}
          {activeMode === 'investment' && (
            <>
              <button onClick={() => handleSend("What is 5 year appreciation forecast for Pirangut?")} className="chip-btn">📈 5-year Pirangut CAGR forecast</button>
              <button onClick={() => handleSend("Compare plot appreciation vs apartment ROI")} className="chip-btn">⚖️ Plot vs Apartment yields</button>
            </>
          )}
          {activeMode === 'legal' && (
            <>
              <button onClick={() => handleSend("What is the MahaRERA registration number?")} className="chip-btn">📜 MahaRERA registration</button>
              <button onClick={() => handleSend("Are home loans available for plot purchase?")} className="chip-btn">🏦 Bank home loan eligibility</button>
            </>
          )}
        </div>

        {/* Chat History Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-viva-gold/20 border border-viva-gold text-viva-gold flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-md p-4 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-viva-gold text-viva-dark font-medium rounded-tr-none'
                    : 'glass-panel text-viva-sand border-viva-gold/20 rounded-tl-none space-y-2'
                }`}
              >
                <p>{msg.text}</p>
                {msg.actionPlotId && (
                  <button
                    onClick={() => {
                      onClose();
                      onSelectPlot(msg.actionPlotId!);
                    }}
                    className="mt-2 px-3 py-1.5 rounded-lg bg-viva-gold text-viva-dark font-bold text-[11px] flex items-center space-x-1 hover:scale-105 transition-transform"
                  >
                    <span>Inspect Recommended Plot on GIS Map</span>
                  </button>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-viva-forest border border-viva-gold/40 text-viva-sand flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-viva-dark/95 border-t border-viva-gold/20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder={`Ask AI ${activeMode === 'recommender' ? 'Plot Matcher' : activeMode === 'architect' ? 'Villa Architect' : activeMode === 'investment' ? 'Investment Advisor' : 'RERA Legal Guide'}...`}
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="flex-1 bg-viva-forest/60 border border-viva-gold/30 rounded-xl px-4 py-3 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
            />
            <button
              type="submit"
              className="p-3 rounded-xl bg-viva-gold text-viva-dark hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
