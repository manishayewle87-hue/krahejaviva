'use client';

import React from 'react';
import Link from 'next/link';
import { STRATEGIC_SEO_CLUSTERS, HELPFUL_COMPLIANT_FAQS } from '@/lib/strategicSeoClusters';
import { Compass, ShieldCheck, MapPin, Award, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export const StrategicClusterHub: React.FC = () => {
  return (
    <section className="bg-[#070C0B] border-t border-[#C5A059]/25 py-16 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-[#C5A059]/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] font-bold">
              <Award className="w-4 h-4 text-[#C5A059]" /> E-E-A-T Verified Property Knowledge Hub
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#FAF8F5]">
              K Raheja Corp Viva — Programmatic Buyer Directory
            </h2>
            <p className="text-xs text-[#FAF8F5]/70 max-w-2xl leading-relaxed">
              Explore strategic buyer resources for K Raheja Viva NA Bungalow Plots in Pirangut, West Pune. Complete access to PMRDA NA sanction guidelines, location connectivity, price trends, and land investment ROI.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-[#C5A059] shrink-0">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> MahaRERA P52100004980</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Pirangut, West Pune</span>
          </div>
        </div>

        {/* 12-Cluster Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRATEGIC_SEO_CLUSTERS.map((cluster) => (
            <div 
              key={cluster.id} 
              className="bg-[#122A23]/70 border border-[#C5A059]/30 rounded-2xl p-5 hover:border-[#C5A059] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-3">
                  <h3 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    {cluster.clusterName.split(':')[1] || cluster.clusterName}
                  </h3>
                  <Compass className="w-3.5 h-3.5 text-[#C5A059]/60" />
                </div>
                <p className="text-[11px] text-[#FAF8F5]/60 leading-snug">
                  {cluster.description}
                </p>
                <ul className="space-y-2 pt-1 text-xs">
                  {cluster.keywords.map((kw, i) => (
                    <li key={i}>
                      <Link 
                        href={kw.targetUrl}
                        className="group flex items-center justify-between text-[#FAF8F5]/85 hover:text-[#C5A059] transition-colors py-0.5"
                      >
                        <span className="text-[11px] group-hover:translate-x-0.5 transition-transform">{kw.term}</span>
                        <ChevronRight className="w-3 h-3 text-[#C5A059]/50 group-hover:text-[#C5A059] shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#C5A059]/15 mt-4">
                <Link 
                  href={cluster.canonicalHub}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#C5A059] hover:underline"
                >
                  <span>Explore Canonical Hub</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* E-E-A-T Helpful Content FAQ Section */}
        <div className="bg-[#122A23] border border-[#C5A059]/30 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 border-b border-[#C5A059]/20 pb-4">
            <HelpCircle className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">
              K Raheja Viva NA Plots — Frequently Asked Buyer Questions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HELPFUL_COMPLIANT_FAQS.map((faq, i) => (
              <div key={i} className="space-y-2 bg-[#070C0B]/60 p-4 rounded-xl border border-[#C5A059]/20">
                <h4 className="text-xs font-bold text-[#C5A059] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-[#FAF8F5]/75 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
