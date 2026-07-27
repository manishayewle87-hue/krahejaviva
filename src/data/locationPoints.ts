export interface LocationPoint {
  id: string;
  name: string;
  category: 'Key Hub' | 'Education' | 'Healthcare' | 'Retail & Hospitality' | 'Transit';
  driveTimeMins: number;
  distanceKm: number;
  description: string;
  highlights: string[];
}

export const LOCATION_POINTS: LocationPoint[] = [
  {
    id: "chandani-chowk",
    name: "Chandani Chowk Junction",
    category: "Key Hub",
    driveTimeMins: 12,
    distanceKm: 9.5,
    description: "Major flyover corridor connecting Pirangut directly to Kothrud, Paud Road, and Mumbai-Bangalore Highway.",
    highlights: ["Newly opened multi-tier flyover", "Zero signal traffic flow", "Direct gateway to West Pune"]
  },
  {
    id: "kothrud",
    name: "Kothrud Commercial Hub",
    category: "Key Hub",
    driveTimeMins: 18,
    distanceKm: 14.0,
    description: "Pune's established cultural and commercial district with top restaurants, schools, and boutique shopping.",
    highlights: ["Vanaz Metro Station", "DP Road food corridor", "Cultural centers"]
  },
  {
    id: "hinjawadi",
    name: "Hinjawadi IT Park (Phase 1 & 3)",
    category: "Key Hub",
    driveTimeMins: 25,
    distanceKm: 18.5,
    description: "India's premier IT corridor employing over 400,000 tech professionals. Accessible via scenic Ghot-Hinjawadi route.",
    highlights: ["Infosys, Wipro, TCS campuses", "Upcoming Metro Line 3", "Signal-free IT commute"]
  },
  {
    id: "baner-balewadi",
    name: "Baner & Balewadi High Street",
    category: "Retail & Hospitality",
    driveTimeMins: 22,
    distanceKm: 16.2,
    description: "West Pune's trendiest dining, nightlife, luxury automobile showrooms, and premium office parks.",
    highlights: ["Balewadi High Street", "JW Marriott Marriott Suites", "Fine dining hub"]
  },
  {
    id: "expressway",
    name: "Pune - Mumbai Expressway",
    category: "Transit",
    driveTimeMins: 20,
    distanceKm: 17.0,
    description: "Rapid connection for weekend commuters traveling to and from Mumbai.",
    highlights: ["2.5 hour drive to BKC Mumbai", "Urse Toll Plaza connectivity", "Ring Road interchange"]
  },
  {
    id: "flame-university",
    name: "FLAME & Symbiosis Universities",
    category: "Education",
    driveTimeMins: 8,
    distanceKm: 5.5,
    description: "World-class higher education campuses nestled in the serene hills of Lavale and Pirangut.",
    highlights: ["FLAME University campus", "Symbiosis Lavale campus", "Indus International School"]
  },
  {
    id: "sahydri-hospital",
    name: "Sahyadri & Manipal Hospitals",
    category: "Healthcare",
    driveTimeMins: 15,
    distanceKm: 11.0,
    description: "Advanced super-specialty medical centers and emergency trauma care.",
    highlights: ["24/7 Emergency Care", "Super-specialty departments", "Top medical experts"]
  }
];
