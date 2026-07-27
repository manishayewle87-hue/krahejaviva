'use client';

import React, { useState } from 'react';
import { VILLA_CONCEPTS, VillaConcept } from '@/data/villaConcepts';
import { LuxuryImage } from '@/components/common/LuxuryImage';
import { Sparkles, Layers, CheckCircle2, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface StudioProps {
  onBookConsultation: () => void;
}

export const VillaInspirationStudio: React.FC<StudioProps> = ({ onBookConsultation }) => {
  const [selectedConcept, setSelectedConcept] = useState<VillaConcept>(VILLA_CONCEPTS[0]);
  const [selectedRoof, setSelectedRoof] = useState<string>(VILLA_CONCEPTS[0].roofStyleOptions[0]);
  const [selectedLandscape, setSelectedLandscape] = useState<string>(VILLA_CONCEPTS[0].landscapeConcepts[0]);
  const [customBuiltUpSqFt, setCustomBuiltUpSqFt] = useState<number>(selectedConcept.builtUpAreaSqFt);

  const estimatedConstructionCostCr = ((customBuiltUpSqFt * selectedConcept.estimatedCostPerSqFt) / 10000000).toFixed(2);

  return (
    <div className="space-y-12">
      
      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] border border-[#C5A059]/40 inline-block shadow-sm">
          ARCHITECTURAL DESIGN INSPIRATION
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">
          Villa Inspiration Studio
        </h2>
        <p className="text-sm text-[#5A6E67] leading-relaxed font-medium">
          While you purchase your estate plot at K Raheja Viva, our architecture studio provides bespoke design templates, bioclimatic orientation guides, and exterior material palettes tailored to Pirangut's micro-climate.
        </p>
      </div>

      {/* Concept Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VILLA_CONCEPTS.map((concept) => {
          const isSelected = selectedConcept.id === concept.id;
          return (
            <div
              key={concept.id}
              onClick={() => {
                setSelectedConcept(concept);
                setSelectedRoof(concept.roofStyleOptions[0]);
                setSelectedLandscape(concept.landscapeConcepts[0]);
                setCustomBuiltUpSqFt(concept.builtUpAreaSqFt);
              }}
              className={`glass-panel rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-white ${
                isSelected 
                  ? 'border-2 border-[#C5A059] shadow-xl scale-[1.02]' 
                  : 'hover:border-[#C5A059]/40'
              }`}
            >
              <div className="relative h-56 w-full">
                <LuxuryImage
                  src={concept.imageUrl}
                  alt={concept.name}
                  fallbackCategory="villa"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122A23]/90 via-[#122A23]/20 to-transparent" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-[10px] font-bold border border-[#C5A059]/30">
                  {concept.architecturalStyle}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="font-serif text-xl text-[#122A23] font-bold">{concept.name}</h3>
                <p className="text-xs text-[#5A6E67] line-clamp-2">{concept.tagline}</p>
                <div className="pt-2 flex items-center justify-between text-xs border-t border-[#C5A059]/20 text-[#122A23]">
                  <span>{concept.bedrooms}</span>
                  <span className="text-[#C5A059] font-bold">{concept.builtUpAreaSqFt} sq.ft</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Customizer Panel */}
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 border border-[#C5A059]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Render Image & Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-xl">
            <LuxuryImage
              src={selectedConcept.imageUrl}
              alt={selectedConcept.name}
              fallbackCategory="villa"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#122A23]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-[#C5A059]/30 shadow-lg">
              <div className="text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-1">
                Active Selection
              </div>
              <h4 className="font-serif text-xl text-[#122A23] font-bold">{selectedConcept.name}</h4>
              <p className="text-xs text-[#5A6E67] mt-1">{selectedConcept.description}</p>
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedConcept.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-[#122A23] font-semibold bg-white p-3 rounded-lg border border-[#C5A059]/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Customization Controls & Budget Estimator */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block">
              BESPOKE CONFIGURATOR
            </span>
            <h3 className="font-serif text-2xl text-[#122A23] font-bold">
              Customize Villa Specifications
            </h3>
          </div>

          {/* Built-up Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#122A23] font-semibold">Built-Up Area (Sq.Ft)</span>
              <span className="text-[#C5A059] font-bold text-sm">{customBuiltUpSqFt} Sq.Ft</span>
            </div>
            <input
              type="range"
              min="3000"
              max="12000"
              step="200"
              value={customBuiltUpSqFt}
              onChange={(e) => setCustomBuiltUpSqFt(Number(e.target.value))}
              className="w-full accent-[#C5A059] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#5A6E67]">
              <span>3,000 sq ft</span>
              <span>7,500 sq ft</span>
              <span>12,000 sq ft</span>
            </div>
          </div>

          {/* Roof Style Picker */}
          <div className="space-y-2">
            <label className="block text-xs text-[#122A23] font-semibold">Roof & Canopy Option</label>
            <div className="space-y-2">
              {selectedConcept.roofStyleOptions.map((roofOption, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRoof(roofOption)}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs text-left transition-all border ${
                    selectedRoof === roofOption 
                      ? 'bg-[#122A23] text-[#FAF8F5] border-[#122A23] font-bold shadow'
                      : 'bg-white text-[#122A23] border-[#C5A059]/25 hover:border-[#C5A059]'
                  }`}
                >
                  {roofOption}
                </button>
              ))}
            </div>
          </div>

          {/* Landscape Theme Picker */}
          <div className="space-y-2">
            <label className="block text-xs text-[#122A23] font-semibold">Landscape Concept</label>
            <div className="space-y-2">
              {selectedConcept.landscapeConcepts.map((landOption, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedLandscape(landOption)}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs text-left transition-all border ${
                    selectedLandscape === landOption 
                      ? 'bg-[#122A23] text-[#FAF8F5] border-[#122A23] font-bold shadow'
                      : 'bg-white text-[#122A23] border-[#C5A059]/25 hover:border-[#C5A059]'
                  }`}
                >
                  {landOption}
                </button>
              ))}
            </div>
          </div>

          {/* Estimated Cost Summary Card */}
          <div className="p-4 rounded-xl space-y-2 border border-[#C5A059]/40 bg-white shadow-md">
            <div className="flex items-center justify-between text-xs text-[#5A6E67]">
              <span className="flex items-center space-x-1 text-[#C5A059] font-bold">
                <Calculator className="w-4 h-4" />
                <span>Estimated Villa Construction Budget</span>
              </span>
              <span>₹{selectedConcept.estimatedCostPerSqFt} / sq ft</span>
            </div>
            <div className="text-3xl font-serif font-bold text-[#122A23]">
              ₹{estimatedConstructionCostCr} Cr <span className="text-xs text-[#5A6E67] font-normal">(approx)</span>
            </div>
            <p className="text-[10px] text-[#5A6E67]">
              Excludes plot acquisition cost. Includes structural execution, luxury Italian marble, and landscaping.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={onBookConsultation}
            className="w-full py-3.5 rounded-full bg-[#122A23] text-[#FAF8F5] font-bold text-xs uppercase tracking-widest hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 shadow-lg hover:bg-[#1A3D33]"
          >
            <span>Book Architect Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>

        </div>

      </div>

    </div>
  );
};
