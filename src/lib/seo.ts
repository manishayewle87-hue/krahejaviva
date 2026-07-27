import { Metadata } from 'next';

const SITE_URL = 'https://www.raheja-viva.com';
const BRAND = 'K Raheja Viva';
const PROJECT = 'K Raheja Corp Homes';

// ─── Metadata Generator ────────────────────────────────────────────────────────

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  path?: string;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  keywords,
  path = '',
  ogImage = '/images/viva/viva-panoramic-aerial.jpg',
}: SEOConfig): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: {
      absolute: title,
      template: `%s | ${BRAND} — Luxury Plots West Pune`,
    },
    description,
    keywords: keywords.join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        'en-IN': url,
        'x-default': url,
      },
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: `${BRAND} — ${PROJECT}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
  };
}

// ─── JSON-LD Schema Builders ────────────────────────────────────────────────────

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'K Raheja Viva',
    alternateName: ['Raheja Viva Pirangut', 'K Raheja Corp Homes Viva'],
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/plots/{search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    name: 'K Raheja Corp Homes — Raheja Viva',
    url: SITE_URL,
    logo: `${SITE_URL}/images/viva/kraheja-official-logo-cropped.png`,
    image: `${SITE_URL}/images/viva/viva-panoramic-aerial.jpg`,
    description: 'K Raheja Viva is a 100+ acre premium plotted development in Pirangut, West Pune offering NA villa plots, twin villas, and townhouses with 40+ lifestyle amenities.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Survey No 273, Next to Aditya Nisarg, Pune-Paud Road, Pirangut',
      addressLocality: 'Pirangut',
      addressRegion: 'Maharashtra',
      postalCode: '412115',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 18.5053, longitude: 73.6856 },
    telephone: '+918080445445',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '19:00',
    },
    priceRange: '₹₹₹₹',
    sameAs: ['https://www.krahejacorphomes.com'],
  };
}

export function realEstateProjectSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'K Raheja Viva — NA Villa Plots Pirangut',
    description: 'Premium NA villa plots, twin villas and townhouses in a 100+ acre low-density gated estate in Pirangut, West Pune with Sahyadri mountain views, 20,000 sqft Signature Clubhouse and 40+ amenities.',
    brand: { '@type': 'Brand', name: 'K Raheja Corp Homes' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '8000000',
      highPrice: '50000000',
      offerCount: '120+',
      availability: 'https://schema.org/InStock',
    },
    image: `${SITE_URL}/images/viva/viva-panoramic-aerial.jpg`,
    url: SITE_URL,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function articleSchema({ title, description, path, datePublished }: { title: string; description: string; path: string; datePublished: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${SITE_URL}/images/viva/viva-panoramic-aerial.jpg`,
    author: { '@type': 'Organization', name: PROJECT },
    publisher: {
      '@type': 'Organization',
      name: PROJECT,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/viva/kraheja-official-logo-cropped.png` },
    },
    datePublished,
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
  };
}

// ─── Location Hub Data ──────────────────────────────────────────────────────────

export const locationHubs = [
  { slug: 'pirangut',      name: 'Pirangut',       distance: '0 km (Project Location)', population: 'Emerging', highway: 'Pune–Paud Road', note: 'The home of K Raheja Viva itself. Pirangut is the fastest-appreciating micro-market in West Pune.' },
  { slug: 'mulshi',        name: 'Mulshi',         distance: '8 km',  population: 'Low-density', highway: 'Mulshi Road', note: 'Adjoining nature reserve and dam reservoir; premium weekend home micro-market.' },
  { slug: 'bhugaon',       name: 'Bhugaon',        distance: '4 km',  population: 'Emerging', highway: 'Paud Road', note: 'Growing residential corridor between Kothrud and Mulshi with strong appreciation trajectory.' },
  { slug: 'bavdhan',       name: 'Bavdhan',        distance: '9 km',  population: 'Established', highway: 'Mumbai–Bangalore Highway NH-48', note: 'Established luxury residential suburb with premium malls, schools, and hospitals.' },
  { slug: 'chandani-chowk',name: 'Chandani Chowk', distance: '12 km', population: 'High Growth', highway: 'NH-48 Mumbai–Bangalore Highway', note: 'Pune\'s largest infrastructure node connecting Hinjawadi IT hub, Mumbai Highway, and Ring Road.' },
  { slug: 'kothrud',       name: 'Kothrud',        distance: '11 km', population: 'Dense Urban', highway: 'Paud Road / Karve Road', note: 'Pune\'s most sought-after residential area with premium schools, hospitals and connectivity.' },
  { slug: 'baner',         name: 'Baner',          distance: '14 km', population: 'IT Hub Adjacent', highway: 'Baner Road', note: 'Premium IT workforce residential corridor with strong rental demand and capital appreciation.' },
  { slug: 'balewadi',      name: 'Balewadi',       distance: '15 km', population: 'Growing', highway: 'Balewadi Road', note: 'Home to Balewadi Sports Complex and emerging luxury residential market.' },
  { slug: 'mahalunge',     name: 'Mahalunge',      distance: '16 km', population: 'Emerging', highway: 'Baner–Mahalunge Road', note: 'Rapidly developing corridor between Baner and Hinjawadi with premium plotted development demand.' },
  { slug: 'hinjawadi',     name: 'Hinjawadi',      distance: '18 km', population: 'IT Megahub', highway: 'Hinjawadi Road / NH-48', note: 'Pune\'s largest IT park hosting 400+ MNCs with 250,000+ IT professionals driving residential demand.' },
  { slug: 'wakad',         name: 'Wakad',          distance: '16 km', population: 'Urban', highway: 'Old Mumbai–Pune Highway', note: 'Strategically located between Hinjawadi and Baner with excellent connectivity and social infrastructure.' },
  { slug: 'sus',           name: 'Sus',            distance: '13 km', population: 'Low-density Emerging', highway: 'Sus Road', note: 'Boutique low-density luxury residential micro-market adjacent to Pashan and Sus forests.' },
  { slug: 'lavale',        name: 'Lavale',         distance: '15 km', population: 'Emerging', highway: 'Lavale Road', note: 'MIT–WPU campus town developing into an education and residential hub.' },
  { slug: 'paud-road',     name: 'Paud Road',      distance: '6 km',  population: 'Growing', highway: 'Paud Road', note: 'The arterial road connecting Kothrud to Pirangut — the primary growth corridor for West Pune plots.' },
  { slug: 'bhukum',        name: 'Bhukum',         distance: '7 km',  population: 'Emerging', highway: 'NH-48 Bypass', note: 'Gateway micro-market between Bavdhan and Pirangut with excellent Ring Road access.' },
  { slug: 'maan',          name: 'Maan',           distance: '20 km', population: 'Emerging', highway: 'Hinjawadi–Maan Road', note: 'Rapidly developing corridor adjacent to Hinjawadi Phase III IT expansion zone.' },
  { slug: 'nande',         name: 'Nande',          distance: '19 km', population: 'Emerging', highway: 'Nande Road', note: 'Peaceful low-density suburb popular for weekend homes and luxury bungalow plots.' },
  { slug: 'urawade',       name: 'Urawade',        distance: '5 km',  population: 'Rural Emerging', highway: 'Pirangut–Urawade Road', note: 'Adjacent to Pirangut with similar Sahyadri foothills landscape and investment potential.' },
];

// ─── Plot Size Data ─────────────────────────────────────────────────────────────

export const plotSizes = [
  { slug: '2000-sqft', sqft: 2000, sqyd: 222, label: '2,000 Sq Ft', tagline: 'Ideal Starter Villa Plot', desc: 'Perfect for building a compact 3BHK luxury villa with private garden.', price: '₹80L – ₹1.2 Cr' },
  { slug: '3000-sqft', sqft: 3000, sqyd: 333, label: '3,000 Sq Ft', tagline: 'Premium Family Villa Site', desc: 'Ideal for a sprawling 4BHK luxury bungalow with open sit-out and car park.', price: '₹1.2 Cr – ₹1.8 Cr' },
  { slug: '4000-sqft', sqft: 4000, sqyd: 444, label: '4,000 Sq Ft', tagline: 'Large Bungalow Estate', desc: 'Design a double-storey villa with rooftop deck, private pool and garden.', price: '₹1.6 Cr – ₹2.4 Cr' },
  { slug: '5000-sqft', sqft: 5000, sqyd: 555, label: '5,000 Sq Ft', tagline: 'Grand Villa Estate', desc: 'Generous estate plot allowing full-featured villa with landscape garden.', price: '₹2 Cr – ₹3 Cr' },
  { slug: '6000-sqft', sqft: 6000, sqyd: 666, label: '6,000+ Sq Ft', tagline: 'Ultra-Premium Trophy Estate', desc: 'Flagship estate plots ideal for collector-grade luxury mansions with full amenities.', price: '₹2.4 Cr – ₹4 Cr+' },
];

// ─── Comparison Page Data ────────────────────────────────────────────────────────

export const comparisonPages = [
  {
    slug: 'villa-plot-vs-apartment',
    title: 'Villa Plot vs Apartment — Which is the Better Investment in Pune?',
    h1: 'Villa Plot vs Apartment in Pune: Complete Comparison 2025',
    description: 'Compare villa plots vs apartments in Pune for investment, lifestyle and capital appreciation. Data-backed analysis for West Pune buyers. Updated 2025.',
    keywords: ['villa plot vs apartment pune', 'plot vs flat pune', 'should I buy plot or apartment pune', 'plot investment vs apartment investment'],
  },
  {
    slug: 'pirangut-vs-bhugaon',
    title: 'Pirangut vs Bhugaon: Best Location for Villa Plots in West Pune 2025',
    h1: 'Pirangut vs Bhugaon — Which Micro-Market to Invest in 2025?',
    description: 'Detailed comparison of Pirangut and Bhugaon for plotted development investment. Infrastructure, price trends, connectivity and appreciation compared.',
    keywords: ['pirangut vs bhugaon', 'plots in pirangut or bhugaon', 'best location west pune plots'],
  },
  {
    slug: 'pirangut-vs-mulshi',
    title: 'Pirangut vs Mulshi: Premium Villa Plots Location Comparison 2025',
    h1: 'Pirangut vs Mulshi — Best Luxury Plot Investment Location',
    description: 'Compare Pirangut and Mulshi for luxury villa plot investment in West Pune. Connectivity, price trends and lifestyle factors analysed for 2025 buyers.',
    keywords: ['pirangut vs mulshi', 'mulshi vs pirangut plots', 'best plots west pune location'],
  },
  {
    slug: 'plot-vs-flat-pune',
    title: 'Plot vs Flat in Pune — Complete Investment Comparison 2025',
    h1: 'Plot vs Flat in Pune: Which Gives Better ROI in 2025?',
    description: 'Unbiased data-backed comparison of plot vs flat investment returns in Pune. Capital appreciation, rental yield, and long-term wealth creation analysis.',
    keywords: ['plot vs flat pune', 'plot or apartment investment pune', 'land vs flat returns pune'],
  },
];
