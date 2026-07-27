import { Metadata } from 'next';

// ─── Core Constants ─────────────────────────────────────────────────────────────
const SITE_URL = 'https://www.krahejacorpviva.com';
const BRAND = 'K Raheja Corp Viva';
const BRAND_ALT = 'K Raheja Viva';
const PROJECT = 'K Raheja Corp Homes';
const PHONE = '+918080445445';
const RERA_NUMBER = 'P52100004980';
const OG_IMAGE = `${SITE_URL}/images/viva/viva-panoramic-aerial.jpg`;
const LOGO = `${SITE_URL}/images/viva/kraheja-official-logo-cropped.png`;

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
  ogImage = OG_IMAGE,
}: SEOConfig): Metadata {
  const url = `${SITE_URL}${path}`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
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
        'en-US': url,
        'x-default': url,
      },
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: `${BRAND} — ${PROJECT}`,
      images: [{ url: absoluteOgImage, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteOgImage],
      site: '@KRahejaCorpViva',
      creator: '@KRahejaCorpViva',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
        noimageindex: false,
      },
    },
  };
}

// ─── JSON-LD Schema Builders ────────────────────────────────────────────────────

/** Google Sitelinks SearchBox eligibility */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BRAND,
    alternateName: [BRAND_ALT, 'K Raheja Viva Pirangut', 'K Raheja Corp Homes Viva', 'Raheja Viva Pune'],
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

/** Google Knowledge Graph Organization Schema */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: PROJECT,
    alternateName: 'K Raheja Corp Homes',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO,
      width: 512,
      height: 512,
    },
    image: OG_IMAGE,
    description: 'K Raheja Corp Homes is a leading real estate developer in India with 5+ decades of legacy, delivering premium residential, commercial, and plotted developments.',
    telephone: PHONE,
    email: 'info@krahejacorp.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Survey No 273, Next to Aditya Nisarg, Pune-Paud Road, Pirangut',
      addressLocality: 'Pirangut',
      addressRegion: 'Maharashtra',
      postalCode: '412115',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.krahejacorphomes.com',
      'https://www.facebook.com/KRahejaCorpHomes',
      'https://www.instagram.com/krahejaviva/',
      'https://www.linkedin.com/company/k-raheja-corp/',
      'https://twitter.com/KRahejaCorpViva',
      'https://www.youtube.com/@KRahejaCorpHomes',
    ],
    foundingDate: '1956',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 500 },
  };
}

/** Google Local Pack + Maps Knowledge Panel */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: `${BRAND} — ${PROJECT}`,
    alternateName: [BRAND_ALT, 'Raheja Viva Pirangut Plots'],
    url: SITE_URL,
    logo: LOGO,
    image: [
      OG_IMAGE,
      `${SITE_URL}/images/viva/hero-estate-aerial.jpg`,
      `${SITE_URL}/images/viva/viva-clubhouse-night.jpg`,
    ],
    description: 'K Raheja Corp Viva is a 100+ acre premium NA plotted development in Pirangut, West Pune offering NA villa plots, twin villas, and townhouses with 40+ lifestyle amenities.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Survey No 273, Next to Aditya Nisarg, Pune-Paud Road, Pirangut',
      addressLocality: 'Pirangut',
      addressRegion: 'Maharashtra',
      postalCode: '412115',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5053,
      longitude: 73.6856,
    },
    hasMap: 'https://maps.google.com/?q=18.5053,73.6856',
    telephone: PHONE,
    email: 'vivapune@krahejacorp.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    priceRange: '₹₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, Cheque, Home Loan',
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'State', name: 'Maharashtra' },
    ],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '20,000 Sq Ft Signature Clubhouse', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Infinity Pool', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Tennis Courts', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Gymnasium & Spa', value: true },
      { '@type': 'LocationFeatureSpecification', name: '6,500+ Trees & Landscaping', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'MahaRERA Approved', value: true },
    ],
    identifier: [
      { '@type': 'PropertyValue', name: 'MahaRERA Registration', value: RERA_NUMBER },
    ],
    sameAs: [
      'https://www.krahejacorphomes.com',
      'https://www.facebook.com/KRahejaCorpHomes',
      'https://www.instagram.com/krahejaviva/',
    ],
  };
}

/** Google Rich Card - Real Estate Project */
export function realEstateProjectSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    '@id': `${SITE_URL}/#project`,
    name: 'K Raheja Corp Viva — NA Villa Plots & Twin Villas, Pirangut',
    description: 'Premium NA villa plots, twin villas and townhouses in a 100+ acre low-density gated estate in Pirangut, West Pune with Sahyadri mountain views, 20,000 sqft Signature Clubhouse and 40+ amenities.',
    url: SITE_URL,
    image: OG_IMAGE,
    floorSize: {
      '@type': 'QuantitativeValue',
      unitCode: 'FTK',
      minValue: 2000,
      maxValue: 6000,
    },
    geo: { '@type': 'GeoCoordinates', latitude: 18.5053, longitude: 73.6856 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Survey No 273, Pune-Paud Road, Pirangut',
      addressLocality: 'Pirangut',
      addressRegion: 'Maharashtra',
      postalCode: '412115',
      addressCountry: 'IN',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '8000000',
      highPrice: '50000000',
      offerCount: '120+',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
    },
    numberOfRooms: {
      '@type': 'QuantitativeValue',
      minValue: 3,
      maxValue: 6,
    },
    brand: {
      '@type': 'Brand',
      name: PROJECT,
      logo: LOGO,
    },
    identifier: [
      { '@type': 'PropertyValue', name: 'MahaRERA', value: RERA_NUMBER },
    ],
  };
}

/** Google SERP Breadcrumb Trails */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/** Google SERP FAQPage Collapsible Rich Results */
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

/** Google News / Article Schema for guide pages */
export function articleSchema({
  title, description, path, datePublished,
}: { title: string; description: string; path: string; datePublished: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [OG_IMAGE],
    author: { '@type': 'Organization', name: PROJECT, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: PROJECT,
      logo: { '@type': 'ImageObject', url: LOGO },
    },
    datePublished,
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
    inLanguage: 'en-IN',
    isAccessibleForFree: true,
  };
}

/** Google Assistant Speakable Schema — Voice Search Optimization */
export function speakableSchema(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}`,
    url: `${SITE_URL}${path}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.speakable-title', '.speakable-summary'],
    },
  };
}

/** Google Place Schema for estate location */
export function placeSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${SITE_URL}/#place`,
    name: 'K Raheja Corp Viva Estate, Pirangut',
    description: '100+ acre luxury plotted estate in the Sahyadri foothills, Pirangut, West Pune.',
    geo: { '@type': 'GeoCoordinates', latitude: 18.5053, longitude: 73.6856 },
    hasMap: 'https://maps.google.com/?q=K+Raheja+Corp+Viva+Pirangut',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Survey No 273, Pune-Paud Road, Pirangut',
      addressLocality: 'Pirangut',
      addressRegion: 'Maharashtra',
      postalCode: '412115',
      addressCountry: 'IN',
    },
    telephone: PHONE,
    publicAccess: true,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Signature Clubhouse 20,000 sq ft', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Sahyadri Mountain Views', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'MahaRERA Approved', value: true },
    ],
  };
}

// ─── Location Hub Data ──────────────────────────────────────────────────────────

export const locationHubs = [
  { slug: 'pirangut',      name: 'Pirangut',       distance: '0 km (Project Location)', population: 'Emerging', highway: 'Pune–Paud Road', note: 'The home of K Raheja Corp Viva itself. Pirangut is the fastest-appreciating micro-market in West Pune.' },
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
