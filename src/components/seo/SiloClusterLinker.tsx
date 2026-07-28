'use client';

import React from 'react';
import Link from 'next/link';
import { CONTENT_SILOS, ContentSilo } from '@/lib/silos';
import { ChevronRight, Layers, ArrowRight, BookOpen } from 'lucide-react';

interface SiloClusterLinkerProps {
  currentSiloId: string;
  currentUrl: string;
}

export const SiloClusterLinker: React.FC<SiloClusterLinkerProps> = ({ currentSiloId, currentUrl }) => {
  const currentSilo = CONTENT_SILOS.find((s) => s.id === currentSiloId) || CONTENT_SILOS[0];
  const siblingSilos = CONTENT_SILOS.filter((s) => s.id !== currentSiloId);

  return (
    <section className="bg-[#122A23] border-t border-[#C5A059]/30 py-12 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Active Silo Cluster Container */}
        <div className="bg-[#1A3D33] border border-[#C5A059]/40 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C5A059]/20 pb-4">
            <div>
              <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#C5A059]" /> Topic Silo Cluster
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#FAF8F5] pt-1">
                {currentSilo.name}
              </h3>
            </div>
            <Link
              href={currentSilo.hubUrl}
              className="inline-flex items-center space-x-2 text-xs font-bold text-[#C5A059] hover:underline bg-[#122A23] px-4 py-2 rounded-lg border border-[#C5A059]/30"
            >
              <span>Explore Main Silo Hub</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </Link>
          </div>

          <p className="text-xs md:text-sm text-[#FAF8F5]/80 leading-relaxed max-w-3xl">
            {currentSilo.description}
          </p>

          {/* Sibling Items in current Silo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {currentSilo.items.map((item, idx) => {
              const isActive = item.url === currentUrl;
              return (
                <Link
                  key={idx}
                  href={item.url}
                  className={`p-4 rounded-xl border transition-all flex flex-col justify-between space-y-2 ${
                    isActive
                      ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#FAF8F5]'
                      : 'bg-[#122A23]/60 border-[#C5A059]/20 hover:border-[#C5A059]/60 text-[#FAF8F5]/90'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-xs text-[#FAF8F5] flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      {item.title}
                    </span>
                    {isActive && (
                      <span className="bg-[#C5A059] text-[#122A23] text-[10px] font-bold px-2 py-0.5 rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#FAF8F5]/70 line-clamp-2">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Related Silo Clusters Grid */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm font-bold text-[#C5A059] uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Inter-Connected Authority Silos
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {siblingSilos.map((silo, idx) => (
              <Link
                key={idx}
                href={silo.hubUrl}
                className="bg-[#1A3D33]/60 border border-[#C5A059]/20 hover:border-[#C5A059] p-4 rounded-xl space-y-2 transition-colors group"
              >
                <div className="font-semibold text-[#FAF8F5] group-hover:text-[#C5A059] transition-colors flex items-center justify-between">
                  <span>{silo.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
                <p className="text-[11px] text-[#FAF8F5]/65 line-clamp-2">{silo.description}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
