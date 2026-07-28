import { buildMetadata } from '@/lib/seo';
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'NRI Guide: Buying NA Plots in Pune 2025 — FEMA, Taxes & ROI | K Raheja Viva',
  description: 'Complete NRI guide to buying NA bungalow plots in Pune 2025. FEMA regulations, NRE/NRO payment, repatriation rules, TDS, Power of Attorney, and investment ROI analysis.',
  keywords: ['NRI buy NA plot Pune', 'NRI land investment Pune', 'FEMA NA plot NRI', 'NRI Pune property investment 2025', 'NRE NRO plot purchase India'],
  path: '/blog/nri-na-plot-guide'
});

export default function BlogPost4() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    dateline: 'Pune, Maharashtra',
    printSection: 'Real Estate',
    printColumn: 'Investment Insights',
    headline: 'NRI Guide to Buying NA Plots in Pune 2025 — FEMA, Taxes, ROI & Step-by-Step Process',
    description: metadata.description,
    image: 'https://krahejaviva.com/images/blog/nri-guide.jpg',
    author: {
      '@type': 'Organization',
      name: 'K Raheja Corp Homes Research Team'
    },
    publisher: {
      '@type': 'Organization',
      name: 'K Raheja Corp Homes',
      logo: {
        '@type': 'ImageObject',
        url: 'https://krahejaviva.com/logo.png'
      }
    },
    datePublished: '2025-07-01T08:00:00+05:30',
    dateModified: '2025-07-01T08:00:00+05:30',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://krahejaviva.com/blog/nri-na-plot-guide'
    },
    inLanguage: 'en-IN'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can an NRI buy agricultural land in Pune?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, under FEMA regulations, NRIs are strictly prohibited from buying agricultural land, plantation property, or farmhouses in India. They can only purchase residential or commercial properties, such as residential NA plots.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can an NRI buy an NA plot in Pune?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, NRIs can legally purchase Non-Agricultural (NA) residential plots in India without requiring special permission from the RBI.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can an NRI pay for an NA plot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Payments must be made through banking channels via inward remittance using an NRE, NRO, or FCNR account. Traveler’s cheques or foreign currency notes are not permitted.'
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      <JsonLd schema={faqSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <article className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'NRI NA Plot Guide', href: '/blog/nri-na-plot-guide' }
          ]} 
        />
        
        <header className="mt-8 mb-12 border-b border-neutral-800 pb-8">
          <div className="flex gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">NRI Guides</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 bg-neutral-800 px-3 py-1 rounded-full">10 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            NRI Guide to Buying NA Plots in Pune 2025 — <span className="text-amber-500">FEMA, Taxes, ROI &amp; Step-by-Step Process</span>
          </h1>
          <div className="flex items-center gap-4 text-neutral-400">
            <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-amber-500 font-bold">KR</div>
            <div>
              <p className="font-medium text-white">K Raheja Corp Homes Research Team</p>
              <p className="text-sm">Published: July 1, 2025</p>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-amber max-w-none text-neutral-300 space-y-6 text-lg leading-relaxed">
          <p>For Non-Resident Indians (NRIs), investing in Indian real estate is a powerful wealth-building strategy. However, navigating the legalities can seem daunting. This comprehensive 2025 guide details everything an NRI needs to know about purchasing NA plots in Pune.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What NRIs Can and Cannot Buy</h2>
          <p>According to FEMA Section 6(3), the rules are crystal clear:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Residential NA Plots:</strong> YES. NRIs can freely purchase residential plots.</li>
            <li><strong>Commercial Property:</strong> YES.</li>
            <li><strong>Agricultural Land / Farmhouses:</strong> NO. NRIs are strictly prohibited from buying agricultural land.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">FEMA Regulations &amp; Payment Rules</h2>
          <p>When purchasing an NA plot, the payment must be routed correctly. You must use funds from your NRE, NRO, or FCNR accounts. Direct payment in foreign currency or traveler&apos;s cheques is not allowed. Repatriation of funds upon sale is permissible, subject to certain conditions and limits (typically USD 1 million per financial year from an NRO account).</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Power of Attorney (POA) Guide</h2>
          <p>Since it&apos;s often impractical for NRIs to be present in India for every transaction, executing a valid Power of Attorney is essential. Ensure your POA is registered in India. If executed abroad, it must be attested by the Indian Consulate or Notary Public in your resident country.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Taxes: TDS, Capital Gains &amp; DTAA</h2>
          <p>Taxation is a major consideration for NRI investors:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>TDS on Purchase:</strong> Buyers must deduct 1% TDS when purchasing property over INR 50 lakhs from a resident Indian.</li>
            <li><strong>Capital Gains on Sale:</strong> Selling an NA plot held for over 24 months attracts Long-Term Capital Gains tax. The TDS rate for NRIs on the sale of property is typically higher, emphasizing the need for lower TDS certificates where applicable.</li>
            <li><strong>DTAA Benefits:</strong> India holds Double Taxation Avoidance Agreements with many countries, ensuring you aren&apos;t taxed twice on the same capital gains.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step-by-Step NRI Buying Process</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Identify a clear-title RERA-registered NA plot project (e.g., K Raheja Viva).</li>
            <li>Execute a Power of Attorney if you cannot travel.</li>
            <li>Fund your NRE/NRO account.</li>
            <li>Sign the agreement and process the payment through banking channels.</li>
            <li>Register the property document at the local sub-registrar office.</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">K Raheja Viva: The Ultimate NRI Investment</h2>
          <p>K Raheja Viva in Pirangut offers a dedicated NRI helpdesk to streamline the entire purchasing process. With our clear titles, RERA compliance, and comprehensive legal support, investing in West Pune has never been more secure or hassle-free for global Indians.</p>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Dedicated NRI Support</h3>
          <p className="text-neutral-300 mb-6">Contact our specialized NRI team to guide you through your NA plot investment in Pune.</p>
          <Link href="/masterplan" className="inline-block bg-amber-500 text-neutral-900 font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors">
            Explore Available NA Plots at K Raheja Corp Viva →
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-neutral-800">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/na-plot-vs-apartment-2025" className="block p-4 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-colors group">
              <span className="text-xs text-amber-500 mb-2 block">Investment Guides</span>
              <h4 className="font-bold text-white group-hover:text-amber-400 transition-colors">NA Plot vs Apartment 2025</h4>
            </Link>
            <Link href="/blog/pirangut-price-trends-2025" className="block p-4 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-colors group">
              <span className="text-xs text-amber-500 mb-2 block">Market Trends</span>
              <h4 className="font-bold text-white group-hover:text-amber-400 transition-colors">Pirangut Property Price Trends 2025</h4>
            </Link>
            <Link href="/blog/west-pune-growth-corridor" className="block p-4 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-colors group">
              <span className="text-xs text-amber-500 mb-2 block">Infrastructure</span>
              <h4 className="font-bold text-white group-hover:text-amber-400 transition-colors">West Pune Growth Corridor 2025</h4>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
