export interface SiloItem {
  title: string;
  url: string;
  description: string;
  keywords: string[];
}

export interface ContentSilo {
  id: string;
  name: string;
  hubUrl: string;
  description: string;
  items: SiloItem[];
}

export const CONTENT_SILOS: ContentSilo[] = [
  {
    id: 'sizes',
    name: 'NA Plot Sizes & Masterplan Silo',
    hubUrl: '/raheja-viva-na-bungalow-plots/sizes-masterplan',
    description: 'Explore PMRDA Collector NA bungalow plot dimensions from 2,000 sq ft to 6,000+ sq ft mansions at K Raheja Corp Viva.',
    items: [
      { title: '2,000 Sq.Ft NA Plot', url: '/plots/2000-sqft', description: 'Compact starter villa plot ideal for 3BHK luxury residence.', keywords: ['2000 sqft plot pirangut', '2000 sqft na plot pune'] },
      { title: '3,000 Sq.Ft NA Plot', url: '/plots/3000-sqft', description: 'Spacious family bungalow plot with private garden.', keywords: ['3000 sqft plot pirangut', '3000 sqft na plot pune'] },
      { title: '4,000 Sq.Ft NA Plot', url: '/plots/4000-sqft', description: 'Large estate plot for double-storey villa with pool.', keywords: ['4000 sqft plot pirangut', '4000 sqft na plot pune'] },
      { title: '5,000 Sq.Ft NA Plot', url: '/plots/5000-sqft', description: 'Grand villa estate plot with landscape garden.', keywords: ['5000 sqft plot pirangut', '5000 sqft na plot pune'] },
      { title: '6,000+ Sq.Ft Mansion Plot', url: '/plots/6000-sqft', description: 'Trophy estate plots for luxury collector mansions.', keywords: ['6000 sqft plot pirangut', 'mansion plot west pune'] },
    ],
  },
  {
    id: 'location',
    name: 'Pirangut & West Pune Location Silo',
    hubUrl: '/raheja-viva-na-bungalow-plots/pirangut-pune',
    description: 'Location intelligence and connectivity matrix connecting Pirangut to Hinjawadi IT Hub, Chandani Chowk, Bavdhan, and Kothrud.',
    items: [
      { title: 'Plots in Pirangut', url: '/plots/pirangut', description: 'Primary project location with 14.2% CAGR growth.', keywords: ['plots in pirangut', 'pirangut land for sale'] },
      { title: 'Plots Near Hinjawadi IT Park', url: '/plots/hinjawadi', description: '20 minutes from Phase 1, 2 & 3 IT megahub.', keywords: ['plots near hinjawadi', 'plots near hinjawadi it park'] },
      { title: 'Plots Near Chandani Chowk', url: '/plots/chandani-chowk', description: '12 minutes via 6-lane Paud Road highway.', keywords: ['plots near chandani chowk', 'chandani chowk plots'] },
      { title: 'Plots Near Bavdhan', url: '/plots/bavdhan', description: 'Adjoining premium residential suburb.', keywords: ['plots near bavdhan', 'bavdhan plot investment'] },
      { title: 'Plots Near Kothrud', url: '/plots/kothrud', description: 'Direct connectivity to Pune central suburbs.', keywords: ['plots near kothrud', 'kothrud villa plots'] },
      { title: 'Paud Road Growth Corridor', url: '/plots/paud-road', description: 'Arterial highway connecting Kothrud to Pirangut.', keywords: ['paud road plots', 'paud road real estate'] },
    ],
  },
  {
    id: 'legal',
    name: 'Legal Title & PMRDA Compliance Silo',
    hubUrl: '/raheja-viva-na-bungalow-plots/legal-rera-sanction',
    description: '100% legal title clearance, Satbara 7/12 extract verification, PMRDA Collector NA sanctions, and MahaRERA compliance.',
    items: [
      { title: 'MahaRERA Registration Details', url: '/rera-guide', description: 'Complete MahaRERA sanction numbers and documents.', keywords: ['raheja viva rera', 'maharera plot registration'] },
      { title: '7/12 Title Legal Checklist', url: '/na-plots-pune/legal-checklist', description: '30-year search report and title verification guide.', keywords: ['7 12 title checklist pune', 'na plot legal verification'] },
      { title: 'PMRDA Collector NA Guide', url: '/na-plots-pune/na-conversion-guide', description: 'Understanding NA order, FSI, and building permissions.', keywords: ['pmrda na conversion', 'collector na plot rules'] },
      { title: 'NA Plot Buying Guide 2025', url: '/na-plots-pune/buy-guide', description: 'Step-by-step buyer handbook for purchasing NA land.', keywords: ['buy na plot pune', 'na plot buying guide'] },
    ],
  },
  {
    id: 'financial',
    name: 'Financial ROI & Calculators Silo',
    hubUrl: '/raheja-viva-na-bungalow-plots/price-investment',
    description: 'Data-backed financial tools, Stamp Duty calculators, land appreciation CAGR projections, and market trend reports.',
    items: [
      { title: 'Stamp Duty & Registration Fee Calculator', url: '/na-plots-pune/stamp-duty-calculator', description: 'Calculate exact government fees for plot registration.', keywords: ['stamp duty calculator pune', 'plot registration charges pune'] },
      { title: 'Plot Appreciation CAGR Calculator', url: '/investment-calculator', description: 'Model 5-year and 10-year land investment ROI.', keywords: ['plot investment calculator', 'land cagr calculator pune'] },
      { title: 'Pirangut Market Trends Report', url: '/na-plots-pune/pirangut-market-report', description: 'Official quarterly real estate price analysis.', keywords: ['pirangut market report', 'pirangut land price per sqft'] },
      { title: 'NRI Land Investment Guide', url: '/investment/nri-plot-guide', description: 'FEMA regulations and NRI plot purchase guidelines.', keywords: ['nri plot investment india', 'nri land buying fema'] },
      { title: 'Plot vs Flat Investment ROI', url: '/compare/plot-vs-flat-pune', description: 'Capital growth comparison between land and apartments.', keywords: ['plot vs flat pune', 'land vs apartment roi'] },
    ],
  },
  {
    id: 'architecture',
    name: 'Villa Architecture & Studio Silo',
    hubUrl: '/villa-studio',
    description: 'Interactive Villa Inspiration Studio, FSI guidelines, architectural styles, and custom bungalow design inspiration.',
    items: [
      { title: 'Villa Inspiration Studio', url: '/villa-studio', description: 'Interactive 3D villa design and floor plan explorer.', keywords: ['villa design studio pune', 'bungalow architecture inspiration'] },
      { title: 'Villa Architectural & FSI Guide', url: '/blog/architectural-design-guide-for-k-raheja-viva-bungalow-plots', description: 'PMRDA building rules, setbacks, and FSI utilization.', keywords: ['villa fsi rules pirangut', 'pmrda building guidelines'] },
      { title: 'Signature 20k Sq.Ft Clubhouse', url: '/club', description: 'Resort-grade lifestyle amenities and sports complex.', keywords: ['raheja viva clubhouse', 'luxury amenities pirangut'] },
    ],
  },
];
