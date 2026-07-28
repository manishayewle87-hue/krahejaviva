import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { RoiCalculator } from '@/components/calculator/RoiCalculator';

export const metadata = buildMetadata({
  title: 'Plot ROI & Appreciation Calculator Pune 2025',
  description: 'Calculate your projected returns on NA villa plots in Pune. Compare real estate appreciation against Fixed Deposits and Gold. Free interactive investment tool.',
  keywords: ['plot roi calculator', 'real estate appreciation calculator pune', 'na plot investment returns', 'k raheja viva investment'],
  path: '/investment-calculator',
});

export default function InvestmentCalculatorPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Investment Calculator', url: '/investment-calculator' }
        ])
      ]} />
      
      <main className="min-h-screen bg-[#FAF8F5] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#122A23] font-['Cinzel'] mb-6">
              Plot Investment ROI Calculator
            </h1>
            <p className="text-lg text-[#3A4E45] max-w-2xl mx-auto">
              Visualise your wealth creation. Compare historical NA plot appreciation rates in West Pune against traditional asset classes like Gold and Fixed Deposits.
            </p>
          </div>

          <RoiCalculator />

          <div className="mt-16 bg-white p-8 rounded-2xl border border-[#E8E2D2]">
            <h2 className="text-2xl font-bold text-[#122A23] mb-4">Why Invest in West Pune NA Plots?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="font-bold text-[#C5A059] text-xl mb-2">12-15%</h3>
                <p className="text-[#5A6E67]">Average annual appreciation in Pirangut & West Pune corridors.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#C5A059] text-xl mb-2">Zero</h3>
                <p className="text-[#5A6E67]">Depreciation compared to constructed apartments.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#C5A059] text-xl mb-2">100%</h3>
                <p className="text-[#5A6E67]">Land ownership with generational wealth transfer benefits.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
