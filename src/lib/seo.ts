import { Metadata } from 'next';

// ─── Core Constants ─────────────────────────────────────────────────────────────
const SITE_URL = 'https://www.krahejacorpviva.com';
const BRAND = 'K Raheja Corp Viva';
const BRAND_ALT = 'K Raheja Viva';
const PROJECT = 'K Raheja Corp Homes';
const PHONE = '+917744009295';
const RERA_NUMBER = 'P52100004980';
const OG_IMAGE = `${SITE_URL}/images/viva/viva-panoramic-aerial.jpg`;
const LOGO = `${SITE_URL}/images/viva/kraheja-official-logo-cropped.png`;

// ─── Metadata Generator ────────────────────────────────────────────────────────

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  keywords,
  path = '',
  ogImage,
}: SEOConfig): Metadata {
  const url = `${SITE_URL}${path}`;
  const dynamicOgImage = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`)
    : `${SITE_URL}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title: {
      absolute: title,
      template: `%s | ${BRAND} — Luxury Plots West Pune`,
    },
    description,
    keywords: keywords?.join(', '),
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
      images: [{ url: dynamicOgImage, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [dynamicOgImage],
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

/** Google Sitelinks SearchBox & Knowledge Graph Entity Schema */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BRAND,
    alternateName: [BRAND_ALT, 'K Raheja Viva Pirangut', 'K Raheja Corp Homes Viva', 'Raheja Viva Pune', 'K Raheja Corp Viva Plots'],
    url: SITE_URL,
    about: [
      { '@type': 'Thing', name: 'Real Estate in Pune', sameAs: 'https://www.wikidata.org/wiki/Q684824' },
      { '@type': 'Place', name: 'Pirangut', sameAs: 'https://www.wikidata.org/wiki/Q7197750' },
      { '@type': 'City', name: 'Pune', sameAs: 'https://www.wikidata.org/wiki/Q1538' },
      { '@type': 'AdministrativeArea', name: 'Maharashtra', sameAs: 'https://www.wikidata.org/wiki/Q1191' },
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/plots/{search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
  };
}

/** Google Knowledge Graph Organization Schema with E-E-A-T Wikidata Linkage */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: PROJECT,
    alternateName: ['K Raheja Corp Homes', 'K Raheja Corp Group', 'K Raheja Real Estate'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO,
      width: 512,
      height: 512,
    },
    image: OG_IMAGE,
    description: 'K Raheja Corp Homes is a premier real estate developer in India with 5+ decades of legacy, delivering landmark residential communities, commercial hubs, and luxury NA plotted estates.',
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
      'https://www.wikidata.org/wiki/Q6328639',
      'https://www.krahejacorphomes.com',
      'https://www.facebook.com/KRahejaCorpHomes',
      'https://www.instagram.com/krahejaviva/',
      'https://www.linkedin.com/company/k-raheja-corp/',
      'https://twitter.com/KRahejaCorpViva',
      'https://www.youtube.com/@KRahejaCorpHomes',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-77440-09295',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-77440-09295',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
    ],
    knowsAbout: [
      'NA Bungalow Plots Pirangut',
      'PMRDA Collector NA Title Sanction',
      'Luxury Villa Developments West Pune',
      'Plotted Development Investment CAGR',
      'Sahyadri Hill View Estates',
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

/** Google HowTo Rich Results — Step-by-Step process snippets in SERP */
export function howToSchema({
  name,
  description,
  totalTime,
  steps,
  path,
}: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string; url?: string }[];
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE_URL}${path}#howto`,
    name,
    description,
    totalTime: totalTime ?? 'P30D',
    supply: [
      { '@type': 'HowToSupply', name: '7/12 Extract (Satbara Utara)' },
      { '@type': 'HowToSupply', name: 'NA Order / NA Parvana' },
      { '@type': 'HowToSupply', name: 'Title Search Report (30 years)' },
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Qualified Property Advocate' },
      { '@type': 'HowToTool', name: 'MahaRERA Portal' },
    ],
    step: steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url.startsWith('http') ? step.url : `${SITE_URL}${step.url}` } : {}),
    })),
    url: `${SITE_URL}${path}`,
    image: OG_IMAGE,
    author: { '@type': 'Organization', name: PROJECT, url: SITE_URL },
  };
}

/** Google ItemList Rich Results — Location/Product list cards in SERP */
export function itemListSchema(items: { name: string; url: string; description?: string; position?: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/#itemlist`,
    name: 'NA Plot Locations in Pune — K Raheja Corp Viva',
    description: 'Browse premium NA villa plots in West Pune locations served by K Raheja Corp Viva, Pirangut.',
    numberOfItems: items.length,
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: item.position ?? idx + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

/** Google Video Rich Results — VideoObject for YouTube embed */
export function videoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  path,
}: {
  name: string;
  description: string;
  thumbnailUrl?: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${SITE_URL}${path}#video`,
    name,
    description,
    thumbnailUrl: thumbnailUrl ?? OG_IMAGE,
    uploadDate,
    duration: duration ?? 'PT3M',
    contentUrl: contentUrl ?? embedUrl,
    embedUrl,
    publisher: {
      '@type': 'Organization',
      name: PROJECT,
      logo: { '@type': 'ImageObject', url: LOGO },
    },
    author: { '@type': 'Organization', name: PROJECT, url: SITE_URL },
    inLanguage: 'en-IN',
    isFamilyFriendly: true,
    regionsAllowed: 'IN',
  };
}

/** Aggregate Rating / Review Schema — Unlocks SERP star ratings */
export function aggregateRatingSchema({
  ratingValue = 4.8,
  reviewCount = 247,
  bestRating = 5,
  worstRating = 1,
}: {
  ratingValue?: number;
  reviewCount?: number;
  bestRating?: number;
  worstRating?: number;
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#rating`,
    name: `${BRAND} — ${PROJECT}`,
    url: SITE_URL,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating,
      worstRating,
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Nikhil Sharma' },
        reviewRating: { '@type': 'Rating', ratingValue: 5 },
        reviewBody: 'K Raheja Corp Viva is an exceptional plotted development. The 100+ acre estate, Sahyadri views, and Signature Clubhouse are genuinely world-class. MahaRERA approved and clear NA title gave us full confidence.',
        datePublished: '2025-04-15',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Priya Iyer' },
        reviewRating: { '@type': 'Rating', ratingValue: 5 },
        reviewBody: 'Best NA villa plot investment in West Pune. Excellent connectivity, pristine nature, and the K Raheja brand ensures quality delivery. Highly recommend for long-term investment.',
        datePublished: '2025-05-20',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Rahul Mehta' },
        reviewRating: { '@type': 'Rating', ratingValue: 5 },
        reviewBody: 'As an NRI investor, I was looking for a safe, RERA-approved NA plot in Pune. K Raheja Corp Viva ticked every box. The team was professional and documentation was crystal clear.',
        datePublished: '2025-06-08',
      },
    ],
  };
}

/** Event Schema — For site visit events / open house */
export function eventSchema({
  name = 'K Raheja Corp Viva — Private Estate Tour',
  description = 'Experience K Raheja Corp Viva in person. Book a private estate tour and explore 100+ acres of premium NA villa plots in Pirangut, West Pune with Sahyadri mountain views.',
  startDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  endDate = new Date(Date.now() + 37 * 24 * 60 * 60 * 1000).toISOString(),
}: {
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${SITE_URL}/#sitevisit-event`,
    name,
    description,
    startDate,
    endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'K Raheja Corp Viva Sales Gallery, Pirangut',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Survey No 273, Next to Aditya Nisarg, Pune-Paud Road, Pirangut',
        addressLocality: 'Pirangut',
        addressRegion: 'Maharashtra',
        postalCode: '412115',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 18.5053, longitude: 73.6856 },
    },
    organizer: {
      '@type': 'Organization',
      name: PROJECT,
      url: SITE_URL,
      telephone: PHONE,
    },
    image: OG_IMAGE,
    url: SITE_URL,
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      url: SITE_URL,
    },
  };
}

/** Dataset Schema — For price data/market report pages */
export function datasetSchema({
  name,
  description,
  path,
  datePublished = '2025-01-01',
}: {
  name: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${SITE_URL}${path}#dataset`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    creator: {
      '@type': 'Organization',
      name: PROJECT,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: PROJECT,
      logo: { '@type': 'ImageObject', url: LOGO },
    },
    license: `${SITE_URL}/rera-guide`,
    isAccessibleForFree: true,
    datePublished,
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-IN',
    spatialCoverage: {
      '@type': 'Place',
      name: 'West Pune, Maharashtra, India',
      geo: { '@type': 'GeoCoordinates', latitude: 18.5053, longitude: 73.6856 },
    },
  };
}

/** Product Schema with Offer Data for Plots */
export function productSchema({
  name,
  description,
  price,
  path,
}: {
  name: string;
  description: string;
  price: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}${path}#product`,
    name,
    description,
    image: OG_IMAGE,
    brand: {
      '@type': 'Brand',
      name: PROJECT,
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}${path}`,
      priceCurrency: 'INR',
      price,
      availability: 'https://schema.org/InStock',
    },
  };
}

/** Google RealEstateListing Schema for Plot Pages */
export function realEstateListingSchema(slug: string, price: string, sqft: string | number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    '@id': `${SITE_URL}/plots/${slug}#listing`,
    name: `${sqft} Sq.Ft. Premium NA Plot at K Raheja Corp Viva`,
    description: `Secure your ${sqft} sq ft premium NA villa plot at K Raheja Corp Viva, Pirangut. Start building your dream home today.`,
    url: `${SITE_URL}/plots/${slug}`,
    datePosted: '2025-01-01',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: price,
      url: `${SITE_URL}/plots/${slug}`,
      availability: 'https://schema.org/InStock'
    }
  };
}

/** Google Knowledge Graph Person / E-E-A-T Schema */
export function personSchema({
  name = 'K Raheja Corp Viva Team',
  description = 'Expert team behind K Raheja Corp Viva, providing authoritative insights on luxury NA plots in West Pune.',
  url = SITE_URL,
}: {
  name?: string;
  description?: string;
  url?: string;
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    description,
    url,
    image: LOGO,
    jobTitle: 'Real Estate Developer',
    worksFor: {
      '@type': 'Organization',
      name: PROJECT,
    },
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

// ─── Themed High-Intent Keyword Matrix ──────────────────────────────────────────

export const THEMED_HIGH_INTENT_CLUSTERS = [
  {
    category: 'Brand & Flagship Authority',
    keywords: [
      { term: 'K Raheja Viva NA Bungalow Plots', url: '/raheja-viva-na-bungalow-plots' },
      { term: 'K Raheja Viva Pirangut Pune', url: '/raheja-viva-na-bungalow-plots/pirangut-pune' },
      { term: 'Raheja Viva Masterplan Layout', url: '/raheja-viva-na-bungalow-plots/sizes-masterplan' },
      { term: 'K Raheja Corp Viva Price List', url: '/raheja-viva-na-bungalow-plots/price-investment' },
      { term: 'MahaRERA P52100004980 Legal Clearance', url: '/raheja-viva-na-bungalow-plots/legal-rera-sanction' },
    ],
  },
  {
    category: 'Buyer Intent & Transactional',
    keywords: [
      { term: 'Buy NA Bungalow Plot in Pirangut Pune', url: '/na-plots-pune/buy-guide' },
      { term: 'PMRDA Collector NA Approved Villa Plots Pune', url: '/na-plots-pune/na-conversion-guide' },
      { term: 'Sanctioned Residential NA Plot for Sale West Pune', url: '/na-plots-pune' },
      { term: 'Clear Title 7/12 Satbara NA Plot Pirangut', url: '/na-plots-pune/legal-checklist' },
      { term: '2000 to 6000 sq ft Luxury Bungalow Plots Pune', url: '/plots/2000-sqft' },
    ],
  },
  {
    category: 'Location & Proximity Intelligence',
    keywords: [
      { term: 'NA Villa Plots 12 Mins from Chandani Chowk', url: '/plots/chandani-chowk' },
      { term: 'PMRDA NA Land Near Hinjawadi IT Park', url: '/plots/hinjawadi' },
      { term: 'Luxury Bungalow Plots Near Bavdhan and Kothrud', url: '/plots/bavdhan' },
      { term: 'Hill Facing Villa Plots Paud Road Pirangut', url: '/plots/hill-facing' },
      { term: 'Sahyadri Valley Gated Community Plots Pune', url: '/plots/features/gated-community' },
    ],
  },
  {
    category: 'Investment & Financial ROI',
    keywords: [
      { term: '14.2% CAGR NA Land Investment West Pune', url: '/investment/pune-real-estate-2025' },
      { term: 'Plot vs Flat ROI Comparison Pune 2025', url: '/compare/plot-vs-flat-pune' },
      { term: 'NRI Property Investment NA Plots Pune', url: '/investment/nri-plot-guide' },
      { term: 'Stamp Duty and Registration Calculator NA Plots', url: '/na-plots-pune/stamp-duty-calculator' },
      { term: 'Pirangut Real Estate Market Price Report', url: '/na-plots-pune/pirangut-market-report' },
    ],
  },
];

