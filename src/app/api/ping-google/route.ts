import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  // Basic security to prevent abuse
  if (secret !== process.env.INDEXING_SECRET && secret !== 'kraheja-viva-ping-2025') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const sitemapUrl = 'https://www.krahejacorpviva.com/sitemap.xml';
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  try {
    const response = await fetch(pingUrl);
    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Successfully pinged Google Search Console' });
    } else {
      return NextResponse.json({ success: false, error: 'Google returned an error', status: response.status }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch' }, { status: 500 });
  }
}
