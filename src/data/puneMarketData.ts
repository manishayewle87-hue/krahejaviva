/**
 * Pune NA Bungalow Plots Market Intelligence & Historical Data Model
 * Real Estate Analytics for West Pune (2018 – 2025)
 */

export interface MarketTrendRecord {
  year: number;
  avgPricePerSqFt: number;
  pirangutAvgSqFt: number;
  cagrGrowthRate: string;
  keyInfrastructureMilestone: string;
}

export const PUNE_MARKET_TRENDS_DATA: MarketTrendRecord[] = [
  { year: 2018, avgPricePerSqFt: 2200, pirangutAvgSqFt: 1850, cagrGrowthRate: '8.5%', keyInfrastructureMilestone: 'Initial PMRDA Development Plan Notification' },
  { year: 2019, avgPricePerSqFt: 2450, pirangutAvgSqFt: 2100, cagrGrowthRate: '10.2%', keyInfrastructureMilestone: 'Paud Road 4-Lane Expansion Commenced' },
  { year: 2020, avgPricePerSqFt: 2700, pirangutAvgSqFt: 2350, cagrGrowthRate: '9.8%', keyInfrastructureMilestone: 'Post-Pandemic Low-Density Plot Demand Surge' },
  { year: 2021, avgPricePerSqFt: 3100, pirangutAvgSqFt: 2750, cagrGrowthRate: '12.4%', keyInfrastructureMilestone: 'Chandani Chowk Flyover Redesign Sanctioned' },
  { year: 2022, avgPricePerSqFt: 3650, pirangutAvgSqFt: 3200, cagrGrowthRate: '13.8%', keyInfrastructureMilestone: 'Metro Line 3 (Hinjawadi-Shivajinagar) Work Acceleration' },
  { year: 2023, avgPricePerSqFt: 4200, pirangutAvgSqFt: 3800, cagrGrowthRate: '14.5%', keyInfrastructureMilestone: 'Inauguration of Multi-Level Chandani Chowk Flyover' },
  { year: 2024, avgPricePerSqFt: 4850, pirangutAvgSqFt: 4400, cagrGrowthRate: '15.1%', keyInfrastructureMilestone: 'Pune Ring Road West Alignment Land Acquisition' },
  { year: 2025, avgPricePerSqFt: 5500, pirangutAvgSqFt: 5100, cagrGrowthRate: '15.4%', keyInfrastructureMilestone: 'K Raheja Viva Phase 1 Infrastructure Completion' },
];

export const WEST_PUNE_MICROMARKET_COMPARISON = [
  { location: 'Pirangut (Paud Road)', priceRange: '₹4,500 – ₹6,500 / sq ft', plotAvailability: 'High (Branded PMRDA NA)', cagr5Yr: '14.8%', highlight: '100+ Acre Gated Hillside Township' },
  { location: 'Bhugaon', priceRange: '₹5,500 – ₹7,500 / sq ft', plotAvailability: 'Medium (Individual Plots)', cagr5Yr: '12.5%', highlight: 'Proximity to Manas Lake' },
  { location: 'Bavdhan', priceRange: '₹8,500 – ₹12,000 / sq ft', plotAvailability: 'Very Low (Resale Land)', cagr5Yr: '9.2%', highlight: 'Urban Suburb Core' },
  { location: 'Kothrud', priceRange: '₹14,000 – ₹20,000 / sq ft', plotAvailability: 'Negligible (Redevelopment)', cagr5Yr: '7.5%', highlight: 'Established Premium Residential' },
  { location: 'Hinjawadi Phase 1', priceRange: '₹6,000 – ₹8,500 / sq ft', plotAvailability: 'Low (Commercial/IT focus)', cagr5Yr: '11.0%', highlight: 'IT Park Workforce Hub' },
];

export const PMRDA_NA_LEGAL_CHECKLIST = [
  'Collector Non-Agricultural (NA) Order Copy under Section 44 of Maharashtra Land Revenue Code 1966',
  'Individual 7/12 (Satbara Extract) with 100% Clear Title and Single Ownership Name Mutation',
  'PMRDA Sanctioned Layout Plan with Minimum 9-Meter Internal Tar/Concrete Access Roads',
  'MahaRERA Registration Certificate (P52100004980) and Certified Architect/Engineer Completion Reports',
  'NOC from Ground Water Authority, Pollution Control Board, and Electricity Distribution Company (MSEDCL)',
  'Demarcated Plot Boundaries with Fixed GPS Geolocation Co-ordinates and Pillar Markers',
];
