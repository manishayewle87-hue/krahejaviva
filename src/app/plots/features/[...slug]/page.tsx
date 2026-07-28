import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { buildMetadata, breadcrumbSchema , realEstateListingSchema} from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Common pSEO slugs
const featurePaths = [
  'near-hinjawadi-it-park',
  'with-clubhouse-access',
  'gated-community',
  'with-clear-title',
  'maharera-approved',
  'near-pune-ring-road',
  'for-nri-investment',
];

export function generateStaticParams() {
  return featurePaths.map((slug) => ({
    slug: [slug],
  }));
}

export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata {
  const slugJoined = params.slug.join('/');
  
  if (!featurePaths.includes(slugJoined)) {
    return {};
  }

  const formattedTitle = slugJoined
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return buildMetadata({
    title: `NA Plots ${formattedTitle} | K Raheja Viva Pune`,
    description: `Looking for premium NA villa plots ${formattedTitle.toLowerCase()}? Explore K Raheja Corp Viva's 100+ acre luxury estate in West Pune. MahaRERA approved.`,
    path: `/plots/features/${slugJoined}`,
  });
}

export default function FeaturePlotPage({ params }: { params: { slug: string[] } }) {
  const slugJoined = params.slug.join('/');
  
  if (!featurePaths.includes(slugJoined)) {
    notFound();
  }

  const formattedTitle = slugJoined
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Plots', url: '/plots' },
          { name: `Features: ${formattedTitle}`, url: `/plots/features/${slugJoined}` }
        ])
      ]} />
      
      <main className="min-h-screen bg-[#FAF8F5] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs">Curated Selection</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#122A23] font-['Cinzel'] mt-4 mb-6">
              NA Villa Plots {formattedTitle}
            </h1>
            <p className="text-lg text-[#5A6E67] max-w-2xl mx-auto">
              Discover K Raheja Corp Viva — a meticulously planned 100+ acre luxury plotted development designed for those who demand the finest. Perfectly aligned with your requirement for properties {formattedTitle.toLowerCase()}.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#C5A059]/30 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-[#122A23] mb-6 border-b pb-4">Why K Raheja Viva is the Perfect Match</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#C5A059] shrink-0" />
                <div>
                  <h3 className="font-bold text-[#122A23]">Unmatched Location Advantage</h3>
                  <p className="text-sm text-[#5A6E67]">Located in Pirangut, West Pune, offering rapid connectivity to Hinjawadi IT Park and the upcoming Pune Ring Road.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#C5A059] shrink-0" />
                <div>
                  <h3 className="font-bold text-[#122A23]">World-Class Infrastructure</h3>
                  <p className="text-sm text-[#5A6E67]">Enjoy access to a sprawling 20,000 sq ft Signature Clubhouse, infinity pool, and 40+ lifestyle amenities.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#C5A059] shrink-0" />
                <div>
                  <h3 className="font-bold text-[#122A23]">100% Legal Clarity</h3>
                  <p className="text-sm text-[#5A6E67]">MahaRERA registered project with absolutely clear NA titles, ensuring a risk-free investment for NRIs and local buyers.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/masterplan" className="inline-flex items-center gap-2 bg-[#122A23] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1A3D33] transition-colors">
              Explore Available Plots on GIS Map <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
