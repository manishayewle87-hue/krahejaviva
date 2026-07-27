export interface PlotData {
  id: string;
  plotNumber: string;
  phase: string;
  block: string;
  areaSqYds: number;
  areaSqFt: number;
  facing: 'East' | 'North' | 'North-East' | 'West' | 'South';
  category: 'Forest Facing' | 'Hill Facing' | 'Club Facing' | 'Corner Plot' | 'Large Estate';
  status: 'Available' | 'Reserved' | 'Sold';
  priceLakhs: number;
  priceFormatted: string;
  dimensions: string; // e.g. "50 x 80 ft"
  roadWidthFt: number;
  distanceToClubMeters: number;
  sunlightHours: number;
  features: string[];
  coordinates: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  surroundings360Description: string;
}

export const MASTERPLAN_PLOTS: PlotData[] = [
  {
    id: "plot-101",
    plotNumber: "Plot 101",
    phase: "Phase 1 - Sahyadri Heights",
    block: "Block A",
    areaSqYds: 450,
    areaSqFt: 4050,
    facing: "East",
    category: "Forest Facing",
    status: "Available",
    priceLakhs: 245,
    priceFormatted: "₹2.45 Cr",
    dimensions: "45 ft × 90 ft",
    roadWidthFt: 40,
    distanceToClubMeters: 180,
    sunlightHours: 8.5,
    features: ["Direct Private Trail Access", "Unobstructed Sunrise View", "Vaastu Compliant Entrance", "100% NA Sanctioned"],
    coordinates: { x: 80, y: 120, width: 85, height: 60 },
    surroundings360Description: "Overlooks the evergreen reserved forest canopy of Pirangut with natural acoustic shielding from urban noise."
  },
  {
    id: "plot-102",
    plotNumber: "Plot 102",
    phase: "Phase 1 - Sahyadri Heights",
    block: "Block A",
    areaSqYds: 520,
    areaSqFt: 4680,
    facing: "North-East",
    category: "Corner Plot",
    status: "Available",
    priceLakhs: 295,
    priceFormatted: "₹2.95 Cr",
    dimensions: "52 ft × 90 ft",
    roadWidthFt: 50,
    distanceToClubMeters: 140,
    sunlightHours: 9.0,
    features: ["Dual Road Access", "Corner Grandeur Entry", "Elevated Contour Level", "High Sunlight Exposure"],
    coordinates: { x: 180, y: 120, width: 95, height: 60 },
    surroundings360Description: "Commanding corner location facing the North-East breeze corridor and central avenue boulevard."
  },
  {
    id: "plot-103",
    plotNumber: "Plot 103",
    phase: "Phase 1 - Sahyadri Heights",
    block: "Block A",
    areaSqYds: 680,
    areaSqFt: 6120,
    facing: "North",
    category: "Hill Facing",
    status: "Reserved",
    priceLakhs: 380,
    priceFormatted: "₹3.80 Cr",
    dimensions: "60 ft × 102 ft",
    roadWidthFt: 40,
    distanceToClubMeters: 220,
    sunlightHours: 7.8,
    features: ["Panoramic Sahyadri Crest View", "Ideal for Multi-tier Villa", "Deep Garden Space", "Quiet Cul-de-sac"],
    coordinates: { x: 290, y: 120, width: 110, height: 60 },
    surroundings360Description: "Spectacular backdrop of the Sahyadri mountain ridge, illuminated by soft afternoon mountain glow."
  },
  {
    id: "plot-104",
    plotNumber: "Plot 104",
    phase: "Phase 1 - Sahyadri Heights",
    block: "Block B",
    areaSqYds: 850,
    areaSqFt: 7650,
    facing: "East",
    category: "Large Estate",
    status: "Available",
    priceLakhs: 490,
    priceFormatted: "₹4.90 Cr",
    dimensions: "75 ft × 102 ft",
    roadWidthFt: 50,
    distanceToClubMeters: 280,
    sunlightHours: 8.8,
    features: ["Private infinity pool scope", "4-car subterranean garage potential", "Exclusive boundary wall clearance", "Ultra low density zone"],
    coordinates: { x: 415, y: 120, width: 125, height: 60 },
    surroundings360Description: "Spacious estate plot allowing for sprawling single-level or multi-courtyard luxury villa designs."
  },
  {
    id: "plot-105",
    plotNumber: "Plot 105",
    phase: "Phase 1 - Sahyadri Heights",
    block: "Block B",
    areaSqYds: 400,
    areaSqFt: 3600,
    facing: "West",
    category: "Club Facing",
    status: "Sold",
    priceLakhs: 215,
    priceFormatted: "₹2.15 Cr",
    dimensions: "40 ft × 90 ft",
    roadWidthFt: 40,
    distanceToClubMeters: 60,
    sunlightHours: 7.5,
    features: ["Steps away from Signature Clubhouse", "East facing lawn layout", "High rental potential"],
    coordinates: { x: 555, y: 120, width: 80, height: 60 },
    surroundings360Description: "Unmatched convenience with 60-second walking proximity to the Signature Club pool, spa, and café."
  },
  {
    id: "plot-106",
    plotNumber: "Plot 106",
    phase: "Phase 1 - Sahyadri Heights",
    block: "Block B",
    areaSqYds: 600,
    areaSqFt: 5400,
    facing: "North",
    category: "Forest Facing",
    status: "Available",
    priceLakhs: 340,
    priceFormatted: "₹3.40 Cr",
    dimensions: "55 ft × 98 ft",
    roadWidthFt: 40,
    distanceToClubMeters: 190,
    sunlightHours: 8.2,
    features: ["Dense green belt edge", "Zero future construction in front", "Natural bird watcher paradise"],
    coordinates: { x: 650, y: 120, width: 100, height: 60 },
    surroundings360Description: "Directly touches the ecological green zone ensuring permanent unhindered forest vistas."
  },
  {
    id: "plot-201",
    plotNumber: "Plot 201",
    phase: "Phase 2 - The Enclave",
    block: "Block C",
    areaSqYds: 750,
    areaSqFt: 6750,
    facing: "East",
    category: "Corner Plot",
    status: "Available",
    priceLakhs: 435,
    priceFormatted: "₹4.35 Cr",
    dimensions: "68 ft × 99 ft",
    roadWidthFt: 50,
    distanceToClubMeters: 150,
    sunlightHours: 9.2,
    features: ["Dual elevation architectural options", "Flanked by landscaped bio-swales", "Morning east light exposure"],
    coordinates: { x: 80, y: 210, width: 115, height: 65 },
    surroundings360Description: "Enclave corner with organic tree canopy shading and wide 50-foot internal estate avenues."
  },
  {
    id: "plot-202",
    plotNumber: "Plot 202",
    phase: "Phase 2 - The Enclave",
    block: "Block C",
    areaSqYds: 500,
    areaSqFt: 4500,
    facing: "North-East",
    category: "Club Facing",
    status: "Available",
    priceLakhs: 285,
    priceFormatted: "₹2.85 Cr",
    dimensions: "50 ft × 90 ft",
    roadWidthFt: 40,
    distanceToClubMeters: 90,
    sunlightHours: 8.6,
    features: ["Direct line of sight to Club Lake", "High Vaastu compliance score", "Underground utility line drop"],
    coordinates: { x: 210, y: 210, width: 90, height: 65 },
    surroundings360Description: "Gentle breeze from the club water body with pleasant morning light."
  },
  {
    id: "plot-203",
    plotNumber: "Plot 203",
    phase: "Phase 2 - The Enclave",
    block: "Block C",
    areaSqYds: 950,
    areaSqFt: 8550,
    facing: "East",
    category: "Large Estate",
    status: "Available",
    priceLakhs: 560,
    priceFormatted: "₹5.60 Cr",
    dimensions: "85 ft × 100 ft",
    roadWidthFt: 50,
    distanceToClubMeters: 310,
    sunlightHours: 9.5,
    features: ["Flagship Plot Collection", "Private gate entrance allowance", "360-degree hilltop views"],
    coordinates: { x: 315, y: 210, width: 135, height: 65 },
    surroundings360Description: "Highest elevation point in Phase 2 offering 360-degree panoramic views of Pune's western hills."
  },
  {
    id: "plot-204",
    plotNumber: "Plot 204",
    phase: "Phase 2 - The Enclave",
    block: "Block D",
    areaSqYds: 480,
    areaSqFt: 4320,
    facing: "North",
    category: "Hill Facing",
    status: "Reserved",
    priceLakhs: 270,
    priceFormatted: "₹2.70 Cr",
    dimensions: "48 ft × 90 ft",
    roadWidthFt: 40,
    distanceToClubMeters: 170,
    sunlightHours: 8.0,
    features: ["Cool northern exposure", "Natural stone slope contouring", "Fiber-to-home gigabit connection"],
    coordinates: { x: 465, y: 210, width: 85, height: 65 },
    surroundings360Description: "Nestled into gentle rock formations, offering cool ambient temperatures during summer months."
  },
  {
    id: "plot-205",
    plotNumber: "Plot 205",
    phase: "Phase 2 - The Enclave",
    block: "Block D",
    areaSqYds: 620,
    areaSqFt: 5580,
    facing: "West",
    category: "Forest Facing",
    status: "Available",
    priceLakhs: 355,
    priceFormatted: "₹3.55 Cr",
    dimensions: "58 ft × 96 ft",
    roadWidthFt: 40,
    distanceToClubMeters: 230,
    sunlightHours: 7.9,
    features: ["Sunset forest terrace design potential", "Mature teak trees on perimeter", "High privacy rating"],
    coordinates: { x: 565, y: 210, width: 100, height: 65 },
    surroundings360Description: "Golden hour sunset views over the West Pune forest ridge line."
  },
  {
    id: "plot-206",
    plotNumber: "Plot 206",
    phase: "Phase 2 - The Enclave",
    block: "Block D",
    areaSqYds: 1200,
    areaSqFt: 10800,
    facing: "North-East",
    category: "Large Estate",
    status: "Available",
    priceLakhs: 690,
    priceFormatted: "₹6.90 Cr",
    dimensions: "100 ft × 108 ft",
    roadWidthFt: 60,
    distanceToClubMeters: 350,
    sunlightHours: 9.4,
    features: ["Trophy Estate Plot", "Ability to construct 10,000+ sq ft Manor", "Private security post space"],
    coordinates: { x: 680, y: 210, width: 140, height: 65 },
    surroundings360Description: "The crown jewel plot of Raheja Viva, ideal for a bespoke multi-generational family estate mansion."
  }
];
