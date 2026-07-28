import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { VIVA_RERA_INFO } from '@/data/reraData';
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/seo/Breadcrumb';

export const metadata: Metadata = buildMetadata({
  title: 'MahaRERA Registration & Legal Due Diligence Guide | K Raheja Viva',
  description: 'Verify MahaRERA registration details, land title clearance, PMRDA masterplan approvals, and bank empanelments for K Raheja Viva NA plots in Pirangut.',
  keywords: ['MahaRERA K Raheja Viva', 'RERA approved plots Pirangut', 'K Raheja Viva registration number', 'PMRDA approved plots Pune', 'legal title NA plot Pune'],
  path: '/rera-guide',
});

export default function RERAGuidePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'MahaRERA & Legal Guide', url: '/rera-guide' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 bg-[#FAF8F5]">
      <JsonLd schema={[localBusinessSchema(), breadcrumbSchema(breadcrumbItems)]} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'MahaRERA & Legal Guide', href: '/rera-guide' }]} />
      
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="px-4 py-1.5 rounded-full bg-[#122A23] text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em] border border-[#C5A059]/30 inline-block">
          MAHARERA COMPLIANCE & LEGAL CLEARANCE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#122A23] font-bold">
          Legal Due Diligence & RERA Guide
        </h1>
        <p className="text-sm text-[#5A6E67] max-w-2xl mx-auto">
          Complete transparent disclosure of K Raheja Viva's land title clearance, PMRDA masterplan approvals, and MahaRERA registration certificates.
        </p>
      </div>

      {/* Registration Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VIVA_RERA_INFO.reraRegNumbers.map((rera, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-[#C5A059]/30 space-y-3 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-lg text-[#122A23] font-bold">{rera.phase}</h3>
            <div className="text-xs text-[#C5A059] font-mono font-bold bg-[#122A23] p-2.5 rounded-lg border border-[#C5A059]/20">
              MahaRERA: {rera.number}
            </div>
            <p className="text-[11px] text-[#5A6E67]">
              Verify registration details on the official MahaRERA website at maharera.maharashtra.gov.in.
            </p>
          </div>
        ))}
      </div>

      {/* Approved Sanctions List */}
      <div className="bg-white rounded-3xl p-8 border border-[#C5A059]/30 space-y-6 shadow-sm">
        <h2 className="font-serif text-2xl text-[#122A23] font-bold flex items-center space-x-2">
          <FileCheck className="w-6 h-6 text-[#C5A059]" />
          <span>Sanctioned Approvals & Bank Empanelments</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VIVA_RERA_INFO.approvedSanctions.map((sanc, idx) => (
            <div key={idx} className="bg-[#FAF8F5] p-4 rounded-xl flex items-start space-x-3 border border-[#C5A059]/20">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <span className="text-xs text-[#122A23] font-medium">{sanc}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
