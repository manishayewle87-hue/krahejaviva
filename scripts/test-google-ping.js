const https = require('https');

const SITEMAPS = [
  'https://www.krahejacorpviva.com/sitemap.xml',
  'https://www.krahejacorpviva.com/sitemap-news.xml',
  'https://www.krahejacorpviva.com/sitemap-video.xml',
];

async function pingEngine(engine, pingUrl) {
  return new Promise((resolve) => {
    https.get(pingUrl, (res) => {
      resolve({ engine, url: pingUrl, status: res.statusCode, ok: res.statusCode === 200 });
    }).on('error', (err) => {
      resolve({ engine, url: pingUrl, status: 0, ok: false, error: err.message });
    });
  });
}

async function testPings() {
  console.log('🚀 Starting Sitemap Indexing Ping Test...');
  const pingJobs = [];

  for (const sitemapUrl of SITEMAPS) {
    const encodedUrl = encodeURIComponent(sitemapUrl);
    pingJobs.push(pingEngine('google', `https://www.google.com/ping?sitemap=${encodedUrl}`));
    pingJobs.push(pingEngine('bing', `https://www.bing.com/ping?sitemap=${encodedUrl}`));
  }

  const results = await Promise.all(pingJobs);
  
  console.log('\n📊 Ping Results:');
  let successCount = 0;
  
  results.forEach(res => {
    const icon = res.ok ? '✅' : '❌';
    console.log(`${icon} [${res.engine.toUpperCase()}] Status: ${res.status} | URL: ${res.url}`);
    if (res.ok) successCount++;
    if (res.error) console.log(`   Error: ${res.error}`);
  });

  console.log(`\n✅ Summary: ${successCount}/${results.length} pings successful.`);
}

testPings();
