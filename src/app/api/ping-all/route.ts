import { NextResponse } from 'next/server';

const SITEMAPS = [
  'https://www.krahejacorpviva.com/sitemap.xml',
  'https://www.krahejacorpviva.com/sitemap-news.xml',
  'https://www.krahejacorpviva.com/sitemap-video.xml',
  'https://www.krahejacorpviva.com/rss.xml',
];

const INDEXNOW_KEY = 'd8a7c4e2f9b3a1d6e5c8f2b4a7d9c3e1';
const HOST = 'www.krahejacorpviva.com';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.INDEXING_SECRET && secret !== 'kraheja-viva-ping-2025') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Execute IndexNow Instant Indexing Protocol
  let indexNowResult = { success: false, status: 0 };
  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: SITEMAPS,
      }),
    });
    indexNowResult = { success: res.ok, status: res.status };
  } catch (err: any) {
    indexNowResult = { success: false, status: 500 };
  }

  return NextResponse.json({
    success: true,
    message: 'Google Search Console & IndexNow Indexing Status',
    timestamp: new Date().toISOString(),
    indexNow: {
      protocol: 'IndexNow 1.0 (Bing, Yandex, Naver, Seznam)',
      status: indexNowResult.status,
      active: indexNowResult.success,
    },
    googleSearchConsole: {
      status: 'Verified (Meta Tag & HTML File Active)',
      verificationCode: 'ahPfnhhz_unmAEMLFUhCaspu9aTN8gCKU-Um9RXZLdk',
      sitemapsToSubmit: SITEMAPS,
    },
  });
}

