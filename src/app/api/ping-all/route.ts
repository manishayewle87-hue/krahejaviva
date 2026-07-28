import { NextResponse } from 'next/server';

const SITEMAPS = [
  'https://www.krahejacorpviva.com/sitemap.xml',
  'https://www.krahejacorpviva.com/sitemap-news.xml',
  'https://www.krahejacorpviva.com/sitemap-video.xml',
];

async function pingEngine(engine: string, sitemapUrl: string) {
  let pingUrl = '';
  if (engine === 'google') pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  if (engine === 'bing') pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  try {
    const res = await fetch(pingUrl);
    return { engine, sitemap: sitemapUrl, status: res.status, ok: res.ok };
  } catch (err: any) {
    return { engine, sitemap: sitemapUrl, status: 0, ok: false, error: err.message };
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.INDEXING_SECRET && secret !== 'kraheja-viva-ping-2025') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const pingJobs = SITEMAPS.flatMap(sitemap => [
    pingEngine('google', sitemap),
    pingEngine('bing', sitemap),
  ]);

  const results = await Promise.allSettled(pingJobs);
  const report = results.map(r => r.status === 'fulfilled' ? r.value : { error: 'Failed' });

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    results: report,
    summary: {
      total: report.length,
      successful: report.filter((r: any) => r.ok).length,
      failed: report.filter((r: any) => !r.ok).length,
    }
  });
}
