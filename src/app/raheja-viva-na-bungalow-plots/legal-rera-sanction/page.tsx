import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileCheck, Award, ChevronRight, Download, CheckCircle2 } from 'lucide-react';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { VIVA_RERA_INFO } from '@/data/reraData';

export const metadata = buildMetadata({
  title: 'Legal 7/12 & MahaRERA Sanction | K Raheja Viva NA Bungalow Plots',
  description: 'Complete legal checklist, 7/12 title report, and MahaRERA P52100004980 verification for K Raheja Viva NA Bungalow Plots in Pirangut Pune.',
  keywords: [
    'k raheja viva rera number',
    'raheja viva legal checklist',
    '7 12 extract pirangut plots',
    'pmrda na order raheja viva',
    'collector sanction plot pirangut'
  ],
  path: '/raheja-viva-na-bungalow-plots/legal-rera-sanction',
});

const legalChecklist = [
  { title: 'Collector Non-Agricultural (NA) Order', desc: '100% NA order issued by District Collector & PMRDA for residential land use.', icon: FileCheck },
  { title: 'Individual 7/12 Extract Sub-Division', desc: 'Each bungalow plot possesses clear, separate sub-divided Satbara Utara title entry.', icon: ShieldCheck },
  { title: 'MahaRERA Registration (P52100004980)', desc: 'Fully compliant with Maharashtra Real Estate Regulatory Authority statutory mandates.', icon: Award },
  { title: '30-Year Search & Title Clearance Report', desc: 'Certified clear, marketable & unencumbered title report prepared by senior advocate.', icon: CheckCircle2 },
  { title: 'Pre-Approved Bank Loan Ties', desc: 'Pre-sanctioned plot & home loans from SBI, HDFC, ICICI, Axis, and Kotak Bank.', icon: FileCheck },
];

export default function LegalReraSanctionPage() {
  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'K Raheja Viva NA Bungalow Plots', url: '/raheja-viva-na-bungalow-plots' },
    { name: 'Legal 7/12 & RERA Sanction', url: '/raheja-viva-na-bungalow-plots/legal-rera-sanction' }
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950 pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>100% Clear Title & RERA Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 mb-4">
            Legal Title & <span className="text-amber-400">MahaRERA Approval</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            K Raheja Viva NA Bungalow Plots offer ironclad legal security with PMRDA Collector NA Sanction and MahaRERA Registration No. <span className="text-amber-400 font-semibold">{VIVA_RERA_INFO.reraRegNumbers[0].number}</span>.
          </p>
        </div>

        {/* Legal Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {legalChecklist.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/raheja-viva-na-bungalow-plots"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 font-semibold hover:bg-slate-800"
          >
            <span>Back to Raheja Viva Bungalow Plots Overview</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
