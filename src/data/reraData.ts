export interface RERAInfo {
  projectName: string;
  developer: string;
  location: string;
  reraRegNumbers: {
    phase: string;
    number: string;
    qrCodePlaceholder: string;
  }[];
  totalLandAreaAcres: number;
  openGreenSpacePercent: number;
  totalTreesCount: number;
  birdSpeciesCount: number;
  totalAmenitiesCount: number;
  approvedSanctions: string[];
  keyHighlights: string[];
}

export const VIVA_RERA_INFO: RERAInfo = {
  projectName: "K Raheja Viva",
  developer: "K Raheja Corp Homes",
  location: "Paud Road, Pirangut, West Pune, Maharashtra 412115",
  reraRegNumbers: [
    {
      phase: "Raheja Viva Phase 1 (Plots & Infrastructure)",
      number: "P52100000342",
      qrCodePlaceholder: "MahaRERA Phase 1 Registered"
    },
    {
      phase: "Raheja Viva Phase 2 (Villa & Estate Enclave)",
      number: "P52100021894",
      qrCodePlaceholder: "MahaRERA Phase 2 Registered"
    },
    {
      phase: "Raheja Viva Signature Clubhouse & Amenities",
      number: "P52100030512",
      qrCodePlaceholder: "MahaRERA Amenity Registered"
    }
  ],
  totalLandAreaAcres: 100,
  openGreenSpacePercent: 65,
  totalTreesCount: 6500,
  birdSpeciesCount: 60,
  totalAmenitiesCount: 40,
  approvedSanctions: [
    "100% Non-Agricultural (NA) Clear Land Title",
    "PMRDA (Pune Metropolitan Region Development Authority) Master Plan Approved",
    "Environment Clearance (EC) Granted by State Level Environment Impact Assessment Authority",
    "MSEDCL Underground Power Grid & Dual Water Pipeline Network Sanctioned",
    "Approved for Home Loans by HDFC Bank, ICICI Bank, SBI, Axis Bank, and Kotak Mahindra"
  ],
  keyHighlights: [
    "Set amidst 6,500+ trees and 60+ native bird species in the Sahyadri foothills",
    "Low-density living with Townhouses, Twin Villas, and Independent Villa Plots",
    "40+ lifestyle amenities including Infinity Pool, Squash, Jacuzzi & Sports Ground",
    "Located on Paud Road with direct signal-free access to Chandani Chowk & Hinjewadi IT Park"
  ]
};
