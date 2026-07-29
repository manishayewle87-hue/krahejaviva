'use client';

import React from 'react';
import Link from 'next/link';
import { THEMED_HIGH_INTENT_CLUSTERS } from '@/lib/seo';
import { Search, Tag, Sparkles, ChevronRight } from 'lucide-react';

export const ThemedKeywordDirectory: React.FC = () => {
  return (
    <section className="bg-[#0D1E19] border-t border-[#C5A059]/20 py-12 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C5A059]/20 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold mb-1">
              <Search className="w-3.5 h-3.5" /> High-Intent Search Keyword Directory
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-[#FAF8F5]">
              K Raheja Viva NA Bungalow Plots Search Directory
            </h3>
          </div>
          <p className="text-xs text-[#FAF8F5]/70 max-w-md">
            Direct access to high-intent buyer guides, PMRDA NA legal checklists, price sheets, and location intelligence for West Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {THEMED_HIGH_INTENT_CLUSTERS.map((cluster, idx) => (
            <div key={idx} className="bg-[#122A23]/80 border border-[#C5A059]/25 rounded-xl p-5 space-y-3">
              <div className="text-xs font-bold text-[#C5A059] uppercase tracking-wider flex items-center gap-1.5 border-b border-[#C5A059]/15 pb-2">
                <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{cluster.category}</span>
              </div>
              <ul className="space-y-2 text-xs">
                {cluster.keywords.map((kw, kIdx) => (
                  <li key={kIdx}>
                    <Link
                      href={kw.url}
                      className="text-[#FAF8F5]/85 hover:text-[#C5A059] transition-colors flex items-center justify-between group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{kw.term}</span>
                      <ChevronRight className="w-3 h-3 text-[#C5A059]/60 group-hover:text-[#C5A059] shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
