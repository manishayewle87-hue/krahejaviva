/**
 * Strategic Google-Compliant Keyword Architecture & Knowledge Graph Matrix
 * Follows Google Helpful Content Guidelines & E-E-A-T Standards (Zero Keyword Stuffing).
 */

export interface KeywordCluster {
  id: string;
  clusterName: string;
  description: string;
  canonicalHub: string;
  keywords: Array<{
    term: string;
    targetUrl: string;
    intent: 'BOFU' | 'TRANSACTIONAL' | 'LOCATION' | 'INVESTMENT' | 'INFORMATIONAL';
  }>;
}

export const STRATEGIC_SEO_CLUSTERS: KeywordCluster[] = [
  {
    id: 'bofu-brand',
    clusterName: 'Cluster 1: Ultra High Intent Brand (BOFU)',
    description: 'Direct brand navigation and bottom-of-funnel decision keywords for K Raheja Corp Viva.',
    canonicalHub: '/raheja-viva-na-bungalow-plots',
    keywords: [
      { term: 'K Raheja Viva', targetUrl: '/raheja-viva-na-bungalow-plots', intent: 'BOFU' },
      { term: 'K Raheja Viva Pune', targetUrl: '/', intent: 'BOFU' },
      { term: 'K Raheja Viva Pirangut', targetUrl: '/raheja-viva-na-bungalow-plots/pirangut-pune', intent: 'BOFU' },
      { term: 'K Raheja Viva Plots', targetUrl: '/plots/2000-sqft', intent: 'BOFU' },
      { term: 'K Raheja Viva NA Plots', targetUrl: '/na-plots-pune', intent: 'BOFU' },
      { term: 'K Raheja Viva Bungalow Plots', targetUrl: '/raheja-viva-na-bungalow-plots/sizes-masterplan', intent: 'BOFU' },
      { term: 'K Raheja Viva Villa Plots', targetUrl: '/villa-studio', intent: 'BOFU' },
      { term: 'K Raheja Viva West Pune', targetUrl: '/plots/pirangut', intent: 'BOFU' },
      { term: 'Raheja Viva Gated Community', targetUrl: '/plots/features/gated-community', intent: 'BOFU' },
    ],
  },
  {
    id: 'transactional-cpc',
    clusterName: 'Cluster 2: Transactional & High CPC',
    description: 'High commercial intent search queries focused on buying, pricing, masterplan, and booking.',
    canonicalHub: '/raheja-viva-na-bungalow-plots/price-investment',
    keywords: [
      { term: 'Buy K Raheja Viva Plot', targetUrl: '/na-plots-pune/buy-guide', intent: 'TRANSACTIONAL' },
      { term: 'K Raheja Viva Price List', targetUrl: '/raheja-viva-na-bungalow-plots/price-investment', intent: 'TRANSACTIONAL' },
      { term: 'K Raheja Viva Master Plan', targetUrl: '/masterplan', intent: 'TRANSACTIONAL' },
      { term: 'K Raheja Viva Brochure PDF', targetUrl: '/na-plots-pune/buy-guide', intent: 'TRANSACTIONAL' },
      { term: 'Book K Raheja Viva Site Visit', targetUrl: '/raheja-viva-na-bungalow-plots', intent: 'TRANSACTIONAL' },
      { term: 'K Raheja Viva Contact Number', targetUrl: '/faq', intent: 'TRANSACTIONAL' },
    ],
  },
  {
    id: 'na-plots-governance',
    clusterName: 'Cluster 3: PMRDA Approved NA Plots',
    description: 'Search intent around clear title 7/12 Satbara, PMRDA collector sanction, and legal approvals.',
    canonicalHub: '/na-plots-pune/legal-checklist',
    keywords: [
      { term: 'NA Plots Pune', targetUrl: '/na-plots-pune', intent: 'INFORMATIONAL' },
      { term: 'PMRDA Approved NA Plots Pune', targetUrl: '/na-plots-pune/na-conversion-guide', intent: 'INFORMATIONAL' },
      { term: 'RERA Approved NA Plots Pune', targetUrl: '/raheja-viva-na-bungalow-plots/legal-rera-sanction', intent: 'INFORMATIONAL' },
      { term: 'Clear Title 7/12 NA Plots Pirangut', targetUrl: '/na-plots-pune/legal-checklist', intent: 'INFORMATIONAL' },
      { term: 'Branded NA Plots West Pune', targetUrl: '/na-plots-pune/investment-guide', intent: 'INFORMATIONAL' },
    ],
  },
  {
    id: 'bungalow-villa-plots',
    clusterName: 'Cluster 4: Luxury Villa & Bungalow Plots',
    description: 'Queries targeting luxury home builders, custom villa plots, and gated plot communities.',
    canonicalHub: '/villa-studio',
    keywords: [
      { term: 'Bungalow Plots Pune', targetUrl: '/plots/3000-sqft', intent: 'TRANSACTIONAL' },
      { term: 'Luxury Villa Plots Pune', targetUrl: '/villa-studio', intent: 'TRANSACTIONAL' },
      { term: 'Custom Villa Plots Pune', targetUrl: '/plots/5000-sqft', intent: 'TRANSACTIONAL' },
      { term: 'Gated Villa Plot Community Pune', targetUrl: '/plots/features/gated-community', intent: 'TRANSACTIONAL' },
    ],
  },
  {
    id: 'location-micromarkets',
    clusterName: 'Cluster 5 & 6: West Pune Micro-Markets',
    description: 'Proximity mapping for buyers in Baner, Bavdhan, Kothrud, Chandani Chowk, Wakad, Hinjawadi, and Paud Road.',
    canonicalHub: '/location',
    keywords: [
      { term: 'NA Plots Near Baner', targetUrl: '/plots/baner', intent: 'LOCATION' },
      { term: 'Villa Plots Near Bavdhan', targetUrl: '/plots/bavdhan', intent: 'LOCATION' },
      { term: 'Luxury Plots Near Kothrud', targetUrl: '/plots/kothrud', intent: 'LOCATION' },
      { term: 'Plots Near Chandani Chowk', targetUrl: '/plots/chandani-chowk', intent: 'LOCATION' },
      { term: 'NA Plots Near Hinjawadi IT Park', targetUrl: '/plots/hinjawadi', intent: 'LOCATION' },
      { term: 'Villa Plots Paud Road Pirangut', targetUrl: '/plots/paud-road', intent: 'LOCATION' },
      { term: 'Plots Near Sus and Mahalunge', targetUrl: '/plots/sus', intent: 'LOCATION' },
      { term: 'Plots Near Bhugaon and Bhukum', targetUrl: '/plots/bhugaon', intent: 'LOCATION' },
    ],
  },
  {
    id: 'lifestyle-wellness',
    clusterName: 'Cluster 7 & 8: Nature Living & Resort Amenities',
    description: 'Lifestyle queries covering Sahyadri views, 20,000 sq ft clubhouse, 25m pool, and low-density living.',
    canonicalHub: '/club',
    keywords: [
      { term: 'Nature Living Plots Pune', targetUrl: '/plots/forest-facing', intent: 'INFORMATIONAL' },
      { term: 'Hill View Villa Plots Pune', targetUrl: '/plots/hill-facing', intent: 'INFORMATIONAL' },
      { term: 'Plots with 20000 sqft Clubhouse Pune', targetUrl: '/club', intent: 'INFORMATIONAL' },
      { term: 'Low Density Community Pune', targetUrl: '/plots/features/gated-community', intent: 'INFORMATIONAL' },
    ],
  },
  {
    id: 'investment-nri',
    clusterName: 'Cluster 9, 10 & 11: ROI, Competitor & NRI Persona',
    description: 'Investment returns, capital appreciation analysis, competitor comparisons, and NRI buying guides.',
    canonicalHub: '/investment',
    keywords: [
      { term: '14.2% CAGR Plot Investment Pune', targetUrl: '/investment/pune-real-estate-2025', intent: 'INVESTMENT' },
      { term: 'NRI NA Plot Investment Pune', targetUrl: '/investment/nri-plot-guide', intent: 'INVESTMENT' },
      { term: 'Plot vs Flat Comparison Pune', targetUrl: '/compare/plot-vs-flat-pune', intent: 'INVESTMENT' },
      { term: 'K Raheja Viva vs Paranjape Forest Trails', targetUrl: '/compare/pirangut-vs-bhugaon', intent: 'INVESTMENT' },
    ],
  },
  {
    id: 'question-faq',
    clusterName: 'Cluster 12: Question-Based Search Queries',
    description: 'Search queries structured as questions for Google Featured Snippets & AI Overviews.',
    canonicalHub: '/faq',
    keywords: [
      { term: 'Is K Raheja Viva worth buying?', targetUrl: '/faq', intent: 'INFORMATIONAL' },
      { term: 'What is K Raheja Viva RERA Number?', targetUrl: '/raheja-viva-na-bungalow-plots/legal-rera-sanction', intent: 'INFORMATIONAL' },
      { term: 'What are the plot sizes at K Raheja Viva?', targetUrl: '/raheja-viva-na-bungalow-plots/sizes-masterplan', intent: 'INFORMATIONAL' },
      { term: 'Where to buy NA plots in West Pune?', targetUrl: '/na-plots-pune/buy-guide', intent: 'INFORMATIONAL' },
    ],
  },
];

/** Google Helpful Content Compliant FAQs */
export const HELPFUL_COMPLIANT_FAQS = [
  {
    question: 'Is K Raheja Corp Viva a PMRDA Collector Approved NA Plotting Project?',
    answer: 'Yes. K Raheja Corp Viva is a 100% Collector Approved Non-Agricultural (NA) residential plotted development in Pirangut, West Pune under MahaRERA registration number P52100004980. Every plot features an individual 7/12 Satbara extract, sanctioned FSI, and clear legal title.'
  },
  {
    question: 'What are the plot sizes available at K Raheja Viva Pirangut?',
    answer: 'K Raheja Viva offers premium villa plots ranging from 2,000 sq. ft. to 6,000+ sq. ft. (222 sq. yds. to 666+ sq. yds.), designed for custom luxury bungalow construction with hilltop and forest views.'
  },
  {
    question: 'How far is K Raheja Viva from Chandani Chowk and Kothrud?',
    answer: 'K Raheja Viva is conveniently located on Paud Road, Pirangut — approximately 12 minutes drive (9.5 km) from Chandani Chowk flyover, 15 minutes from Kothrud & Bavdhan, and 20 minutes from Hinjawadi IT Park Phase 1.'
  },
  {
    question: 'What amenities are included in the K Raheja Viva township?',
    answer: 'The township features a 20,000 sq. ft. Signature Clubhouse, 25-meter infinity pool, tennis & basketball courts, 6,500+ native trees, underground utilities (electricity, water supply, fiber internet), 24/7 3-tier security, and wide paved roads.'
  },
  {
    question: 'Why is buying an NA plot at K Raheja Viva better than buying an apartment in West Pune?',
    answer: 'Plotted developments in West Pune have historically demonstrated 12% to 15.4% annual capital appreciation compared to 4-6% for apartments. Buying an NA plot gives you 100% land ownership, complete architectural freedom, zero shared walls, and superior long-term wealth growth.'
  }
];
