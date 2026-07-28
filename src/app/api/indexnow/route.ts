import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'd8a7c4e2f9b3a1d6e5c8f2b4a7d9c3e1';
const HOST = 'www.krahejacorpviva.com';

const URL_LIST = [
  'https://www.krahejacorpviva.com/',
  'https://www.krahejacorpviva.com/raheja-viva-na-bungalow-plots',
  'https://www.krahejacorpviva.com/raheja-viva-na-bungalow-plots/pirangut-pune',
  'https://www.krahejacorpviva.com/raheja-viva-na-bungalow-plots/sizes-masterplan',
  'https://www.krahejacorpviva.com/raheja-viva-na-bungalow-plots/price-investment',
  'https://www.krahejacorpviva.com/raheja-viva-na-bungalow-plots/legal-rera-sanction',
  'https://www.krahejacorpviva.com/masterplan',
  'https://www.krahejacorpviva.com/na-plots-pune',
  'https://www.krahejacorpviva.com/na-plots-pune/buy-guide',
  'https://www.krahejacorpviva.com/na-plots-pune/legal-checklist',
  'https://www.krahejacorpviva.com/na-plots-pune/investment-guide',
  'https://www.krahejacorpviva.com/na-plots-pune/stamp-duty-calculator',
  'https://www.krahejacorpviva.com/na-plots-pune/pirangut-market-report',
  'https://www.krahejacorpviva.com/na-plots-pune/na-conversion-guide',
  'https://www.krahejacorpviva.com/villa-studio',
  'https://www.krahejacorpviva.com/club',
  'https://www.krahejacorpviva.com/investment',
  'https://www.krahejacorpviva.com/investment-calculator',
  'https://www.krahejacorpviva.com/faq',
  'https://www.krahejacorpviva.com/hi',
  'https://www.krahejacorpviva.com/location',
  'https://www.krahejacorpviva.com/rera-guide',
  'https://www.krahejacorpviva.com/blog',
  'https://www.krahejacorpviva.com/blog/k-raheja-viva-bungalow-plots-buying-guide-2025',
  'https://www.krahejacorpviva.com/blog/why-invest-in-k-raheja-viva-na-bungalow-plots-pirangut',
  'https://www.krahejacorpviva.com/blog/k-raheja-viva-bungalow-plots-vs-flat-in-pune',
  'https://www.krahejacorpviva.com/blog/architectural-design-guide-for-k-raheja-viva-bungalow-plots',
];

export async function GET() {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: URL_LIST,
  };

  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: true,
      protocol: 'IndexNow 1.0',
      status: res.status,
      message: 'Programmatic IndexNow submission dispatched to search engines (Bing, Yandex, Naver, Seznam)',
      urlCount: URL_LIST.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}
