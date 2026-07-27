export interface VillaConcept {
  id: string;
  name: string;
  architecturalStyle: string;
  tagline: string;
  description: string;
  imageUrl: string;
  builtUpAreaSqFt: number;
  bedrooms: string;
  plotSizeRecommendationSqYd: string;
  roofStyleOptions: string[];
  landscapeConcepts: string[];
  keyFeatures: string[];
  estimatedCostPerSqFt: number;
}

export const VILLA_CONCEPTS: VillaConcept[] = [
  {
    id: "concept-1",
    name: "The Crest Modern Mansion",
    architecturalStyle: "Ultra-Luxury Modernism",
    tagline: "Modern multi-level glass & timber mansions with subterranean luxury and hill vistas.",
    description: "Features multi-level floating glass pavilions, private infinity lap pool, subterranean 4-car garage, and terraced gardens directly overlooking the Sahyadri valley.",
    imageUrl: "/images/viva/viva-villas-aerial.jpg",
    builtUpAreaSqFt: 7500,
    bedrooms: "5 BHK + 2 Staff Suites",
    plotSizeRecommendationSqYd: "700 - 1000 Sq. Yds",
    roofStyleOptions: [
      "Floating Minimalist Monolith",
      "Solar Glass Sky Pavilion",
      "Teak Timber Slats Shade Roof"
    ],
    landscapeConcepts: [
      "Perimeter Infinity Pool Lawn",
      "Subterranean Sunken Firepit",
      "Private Orchard & Organic Patch"
    ],
    keyFeatures: [
      "Subterranean 4-car basement garage",
      "Private heated hydrotherapy spa",
      "Floor-to-ceiling Schuco glass sliders",
      "Smart home automated climate control"
    ],
    estimatedCostPerSqFt: 7800
  },
  {
    id: "concept-2",
    name: "The Sahyadri Bioclimatic Villa",
    architecturalStyle: "Contemporary Tropical Estate",
    tagline: "Designed for seamless natural cross-ventilation and 360° hill canopy vistas.",
    description: "Features balcony overhangs looking down onto blooming Tabebuia flower gardens, local basalt stone cladding, deep cantilever overhangs, and open sundecks.",
    imageUrl: "/images/viva/viva-balcony-view.jpg",
    builtUpAreaSqFt: 4800,
    bedrooms: "4 BHK + Maid Quarter",
    plotSizeRecommendationSqYd: "450 - 650 Sq. Yds",
    roofStyleOptions: [
      "Slanted Terracotta Cantilever Canopy",
      "Flat Green Roof with Solar Pergola",
      "Double Cantilever Timber Deck"
    ],
    landscapeConcepts: [
      "Monsoon Water Cascade Lawn",
      "Native Sahyadri Flora Courtyard",
      "Zen Bamboo Wind Buffer"
    ],
    keyFeatures: [
      "Double-height 22ft ceiling living lounge",
      "Basalt stone thermal mass walls",
      "Rainwater harvesting & greywater recycle",
      "Private elevator provision"
    ],
    estimatedCostPerSqFt: 6200
  },
  {
    id: "concept-3",
    name: "The Heritage Pavilion Villa",
    architecturalStyle: "Neo-Classical Vernacular",
    tagline: "Combining timeless Maharashtrian estate courtyard architecture with luxury modern interiors.",
    description: "Designed around a central open-sky quadrangle (Wada-style courtyard), bringing natural sunlight, fresh breezes, and internal courtyard gardens inside.",
    imageUrl: "/images/viva/viva-masterplan-aerial.jpg",
    builtUpAreaSqFt: 3900,
    bedrooms: "3 BHK + Family Den",
    plotSizeRecommendationSqYd: "350 - 500 Sq. Yds",
    roofStyleOptions: [
      "Traditional Terracotta Pitched Roof",
      "Exposed Wooden Beam Gable",
      "Shaded Glass Skylight Ridge"
    ],
    landscapeConcepts: [
      "Central Sacred Courtyard Water Feature",
      "Fragrant Jasmine & Champa Walkway",
      "Stone Paved Tea Deck"
    ],
    keyFeatures: [
      "Internal open-to-sky central courtyard",
      "Handcrafted teak wood pillars",
      "Italian Travertine stone flooring",
      "Low maintenance bioclimatic cooling"
    ],
    estimatedCostPerSqFt: 5500
  }
];
