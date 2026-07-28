import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.krahejacorpviva.com';

export async function GET() {
  const newsPosts = [
    {
      url: `${BASE_URL}/blog/na-plot-vs-apartment-2025`,
      title: 'NA Plot vs Apartment in Pune 2025 — Which is the Better Investment?',
      date: '2025-05-15T00:00:00+05:30',
      description: 'An in-depth analysis of investment returns, tax benefits, and lifestyle differences between NA plots and high-rise apartments in Pune.',
    },
    {
      url: `${BASE_URL}/blog/pirangut-price-trends-2025`,
      title: 'Pirangut Property Price Trends 2025 | NA Plot Appreciation Data',
      date: '2025-06-10T00:00:00+05:30',
      description: 'Historical data and future projections for land appreciation in Pirangut, West Pune.',
    },
    {
      url: `${BASE_URL}/blog/west-pune-growth-corridor`,
      title: 'West Pune Growth Corridor 2025 — Infrastructure Boom',
      date: '2025-04-20T00:00:00+05:30',
      description: 'How the upcoming Pune Ring Road and Hinjawadi Metro are transforming West Pune real estate.',
    },
    {
      url: `${BASE_URL}/blog/nri-na-plot-guide`,
      title: 'NRI Guide: Buying NA Plots in Pune 2025 — FEMA, Taxes & ROI',
      date: '2025-07-01T00:00:00+05:30',
      description: 'A complete legal and financial guide for NRIs looking to invest in NA villa plots in India.',
    },
    {
      url: `${BASE_URL}/na-plots-pune/pirangut-market-report`,
      title: 'Pirangut Real Estate Market Report 2025 — NA Plot Prices, Trends & Investment Outlook',
      date: '2025-06-01T00:00:00+05:30',
      description: 'The ultimate market report on Pirangut real estate, detailing price trends, infrastructure, and investment outlook for 2025.',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>K Raheja Corp Viva Insights</title>
    <link>${BASE_URL}</link>
    <description>Latest market reports, investment guides, and real estate insights for West Pune.</description>
    <language>en-in</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${newsPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.url}</link>
      <guid isPermaLink="true">${post.url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
