import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.krahejacorpviva.com';

export async function GET() {
  const blogDir = path.join(process.cwd(), 'src/app/blog');
  
  let newsPosts: { url: string; title: string; date: string }[] = [];
  
  try {
    const folders = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('['));
      
    // Dynamically map blog folders to sitemap entries
    newsPosts = folders.map(folder => {
      // Create a readable title from slug
      const title = folder.name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        
      return {
        url: `${BASE_URL}/blog/${folder.name}`,
        title: `${title} | K Raheja Corp Viva Insights`,
        date: new Date().toISOString(), // In a real DB, fetch the actual publish date
      };
    });
    
    // Always include market report
    newsPosts.push({
      url: `${BASE_URL}/na-plots-pune/pirangut-market-report`,
      title: 'Pirangut Real Estate Market Report 2025 — NA Plot Prices, Trends & Investment Outlook',
      date: '2025-06-01T00:00:00+05:30',
    });
  } catch (e) {
    console.error("Error reading blog directory for sitemap", e);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsPosts
  .map(
    (post) => `  <url>
    <loc>${post.url}</loc>
    <news:news>
      <news:publication>
        <news:name>K Raheja Corp Viva Insights</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.date}</news:publication_date>
      <news:title>${post.title}</news:title>
    </news:news>
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
