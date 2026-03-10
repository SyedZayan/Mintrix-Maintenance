export interface Service {
  title: string;
  slug: string;
  category: "Facility & MEP" | "IT & Systems" | "Interior & Fit-Out";
  description: string;
  longDescription: string;
  features: string[];
  image: string; // <-- Added this property
}

export const services: Service[] = [
  // --- Facility & MEP ---
  {
    title: "Air Conditioning (AC)",
    slug: "air-conditioning",
    category: "Facility & MEP",
    description: "Expert cooling solutions, troubleshooting, and preventative maintenance for Dubai's climate.",
    longDescription: "Our specialized HVAC team delivers engineering-grade AC maintenance designed for high-pressure environments. We handle everything from routine filter cleaning to complex thermostat calibrations and drainage troubleshooting to ensure peak efficiency.",
    features: ["Breakdown Troubleshooting", "Filter & Coil Servicing", "Thermostat Calibration", "Preventive Maintenance"],
    image: "/ac2.jpg" // Change to your actual AC image
  },
  {
    title: "Plumbing Services",
    slug: "plumbing-services",
    category: "Facility & MEP",
    description: "Precision plumbing solutions, from leak detection to luxury sanitary fixture installations.",
    longDescription: "Comprehensive plumbing services ensuring the flawless operation of water systems in high-value properties. We resolve choked pipes, rectify water pressure issues, and expertly install premium sanitary fittings with absolute minimal disruption.",
    features: ["Leakage Repair", "Drainage Clearing", "Sanitary Installations", "Pressure Optimization"],
    image: "/3.jpg" // Change to your plumbing image
  },
  {
    title: "Electrical Services",
    slug: "electrical-services",
    category: "Facility & MEP",
    description: "Reliable fault finding, DB inspections, and advanced electrical installations.",
    longDescription: "Safeguard your property with our certified electrical maintenance. We specialize in diagnosing power tripping faults, upgrading lighting fixtures, and performing rigorous Distribution Board (DB) inspections to meet the highest safety standards.",
    features: ["Fault Finding & Tripping", "Fixture Installations", "DB Inspections", "Wiring Adjustments"],
    image: "/5.jpg" // Change to your electrical image
  },

  // --- Interior & Fit-Out ---
  {
    title: "Masonry & Civil Works",
    slug: "masonry-civil-works",
    category: "Interior & Fit-Out",
    description: "Detail-oriented surface repairs, tiling, and aesthetic touch-ups.",
    longDescription: "Maintain the pristine aesthetic of your property with our specialized masonry and civil works. From precise tile replacement and silicone sealing to seamless wall repairs and door alignments, our craftsmanship ensures a flawless finish.",
    features: ["Tile Fixing & Replacement", "Silicone Sealing", "Wall & Ceiling Repairs", "Fixture Alignment"],
    image: "/2.jpg" // Change to your masonry image
  },
  {
    title: "Renovation & Modification",
    slug: "renovation-modification",
    category: "Interior & Fit-Out",
    description: "Bespoke interior adjustments and layout modifications for luxury spaces.",
    longDescription: "Transform your living or workspace with our targeted renovation services. We execute gypsum partition installations, flooring upgrades, and non-structural layout modifications with engineering precision to match your evolving functional needs.",
    features: ["Partition Installations", "Flooring Replacement", "Ceiling Modifications", "Layout Adjustments"],
    image: "/our-team.jpg" // Change to your renovation image
  },

  // --- IT & Systems ---
  {
    title: "CCTV & Security",
    slug: "cctv-security",
    category: "IT & Systems",
    description: "Advanced surveillance setups and secure network configurations.",
    longDescription: "Protect your assets with enterprise-grade security infrastructure. We design, wire, and configure high-definition CCTV camera systems, DVR/NVR setups, and secure surveillance networks tailored for luxury villas, apartments, and corporate environments.",
    features: ["CCTV Camera Installation", "DVR / NVR Setup", "System Configuration", "Surveillance Troubleshooting"],
    image: "/cctv3.jpg" // Change to your CCTV image
  }
];