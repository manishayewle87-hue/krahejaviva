import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Pune Real Estate Blog 2025 | NA Plots, Market Trends & Investment Guides | K Raheja Viva',
  description: 'Expert Pune real estate insights. NA plot guides, market reports, investment analysis, NRI guides and West Pune property trends from K Raheja Corp Homes.',
  keywords: ['Pune real estate blog', 'NA plots Pune guide', 'West Pune property investment', 'Pune property market 2025']
});

export default function BlogIndex() {
  const posts = [
    {
      title: 'NA Plot vs Apartment in Pune 2025 — A Complete Investment Comparison',
      excerpt: 'Data-backed comparison of NA plot vs apartment investment in Pune 2025. ROI analysis, capital appreciation, lifestyle benefits, and expert verdict for West Pune buyers.',
      date: 'May 15, 2025',
      category: 'Investment Guides',
      link: '/blog/na-plot-vs-apartment-2025'
    },
    {
      title: 'Pirangut Property Prices 2025 — Year-by-Year Trend Analysis & Future Outlook',
      excerpt: 'Detailed Pirangut property price trend analysis for 2025. Year-by-year price data, growth drivers, future outlook, and investment thesis for West Pune NA plots.',
      date: 'June 10, 2025',
      category: 'Market Trends',
      link: '/blog/pirangut-price-trends-2025'
    },
    {
      title: 'West Pune Growth Corridor 2025 — The Infrastructure Boom Transforming Pirangut, Mulshi & Bhugaon',
      excerpt: 'Analysis of the West Pune growth corridor: Pirangut, Mulshi, Bhugaon and Paud Road. Infrastructure projects, IT sector demand, price appreciation and investment outlook.',
      date: 'April 20, 2025',
      category: 'Infrastructure',
      link: '/blog/west-pune-growth-corridor'
    },
    {
      title: 'NRI Guide to Buying NA Plots in Pune 2025 — FEMA, Taxes, ROI & Step-by-Step Process',
      excerpt: 'Complete NRI guide to buying NA bungalow plots in Pune 2025. FEMA regulations, NRE/NRO payment, repatriation rules, TDS, Power of Attorney, and investment ROI analysis.',
      date: 'July 1, 2025',
      category: 'NRI Guides',
      link: '/blog/nri-na-plot-guide'
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 pb-20">
      <div className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            Pune Real Estate Insights — <span className="text-amber-500">Expert Guides & Market Reports</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Discover the latest trends, investment guides, and expert analysis on NA plots and real estate in West Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-amber-500 transition-colors group flex flex-col h-full">
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-neutral-400">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-neutral-400 mb-8 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={post.link} className="inline-flex items-center text-amber-500 font-semibold hover:text-amber-400 transition-colors mt-auto">
                  Read More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
