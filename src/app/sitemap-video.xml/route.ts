import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.krahejacorpviva.com';

export async function GET() {
  const videoPosts = [
    {
      url: `${BASE_URL}/`,
      title: 'K Raheja Corp Viva Pirangut — Project & Site Walkthrough',
      description: 'Official site walkthrough of K Raheja Corp Viva — a 100+ acre luxury NA plotted estate in Pirangut, West Pune. Explore the Signature Clubhouse, villa enclaves, Sahyadri views and 40+ amenities.',
      thumbnail: `${BASE_URL}/images/viva/viva-panoramic-aerial.jpg`,
      contentUrl: 'https://www.youtube.com/watch?v=tMMs4PBNG-4',
      playerUrl: 'https://www.youtube.com/embed/tMMs4PBNG-4',
      duration: '225', // in seconds (3m45s)
      uploadDate: '2024-12-01T00:00:00+05:30',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videoPosts
  .map(
    (video) => `  <url>
    <loc>${video.url}</loc>
    <video:video>
      <video:thumbnail_loc>${video.thumbnail}</video:thumbnail_loc>
      <video:title>${video.title}</video:title>
      <video:description>${video.description}</video:description>
      <video:player_loc>${video.playerUrl}</video:player_loc>
      <video:duration>${video.duration}</video:duration>
      <video:publication_date>${video.uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
    </video:video>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
