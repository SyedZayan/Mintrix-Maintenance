export interface Service {
  title: string;
  slug: string;
  category: "Facility & MEP" | "IT & Systems" | "Interior & Fit-Out";
  description: string;
  longDescription: string;
  features: string[];
}

export const services: Service[] = [
  // --- Facility & MEP ---
  {
    title: "High-Rise HVAC",
    slug: "high-rise-hvac",
    category: "Facility & MEP",
    description: "Specialized cooling solutions for vertical residential and commercial infrastructures.",
    longDescription: "Engineering-grade HVAC maintenance designed specifically for the high-pressure demands of Dubai's skyscrapers. We focus on central chiller optimization and high-velocity duct performance.",
    features: ["Chiller Plant Optimization", "Vertical Duct Sanitization", "VAV Box Calibration", "Air Quality Audits"]
  },
  {
    title: "Smart Home MEP",
    slug: "smart-home-mep",
    category: "Facility & MEP",
    description: "Integrated mechanical and electrical systems for intelligent environments.",
    longDescription: "Seamless integration of traditional MEP services with modern automation. We ensure your home's electrical and plumbing systems are fully optimized for smart-grid compatibility.",
    features: ["Automation Integration", "Load Balancing", "Sensor Array Maintenance", "Energy Flow Monitoring"]
  },
  {
    title: "AC Service",
    slug: "ac-service",
    category: "Facility & MEP",
    description: "Expert cooling solutions and preventative maintenance for Dubai's climate.",
    longDescription: "Our specialized HVAC team provides deep cleaning, gas refilling, and component testing to ensure your cooling systems operate at peak efficiency during the extreme UAE summer.",
    features: ["Coil Sanitization", "Gas Pressure Check", "Thermostat Calibration", "Drainage Clearing"]
  },
  {
    title: "MEP Service",
    slug: "mep-service",
    category: "Facility & MEP",
    description: "Integrated Mechanical, Electrical, and Plumbing solutions.",
    longDescription: "Comprehensive MEP maintenance for residential and commercial complexes. We handle everything from pump station repairs to electrical panel load balancing.",
    features: ["Electrical Audits", "Pipe Pressure Testing", "Pump Maintenance", "Panel Upgrades"]
  },
  {
    title: "DEWA Projects",
    slug: "dewa-projects",
    category: "Facility & MEP",
    description: "Certified utility management and infrastructure approvals.",
    longDescription: "Managing the complexities of DEWA approvals and infrastructure. We ensure all electrical and water connections meet the latest Dubai Municipality regulations.",
    features: ["Load Schedule Design", "Utility Approvals", "Emergency Connection Fixes", "Cable Management"]
  },
  {
    title: "Appliance Repair",
    slug: "appliance-repair",
    category: "Facility & MEP",
    description: "Fast restoration of critical household and industrial appliances.",
    longDescription: "Reliable repair services for refrigerators, washing machines, and industrial kitchen equipment, utilizing genuine spare parts and certified technicians.",
    features: ["Motor Repair", "Circuit Diagnosis", "Component Replacement", "Performance Testing"]
  },

  // --- Interior & Fit-Out ---
  {
    title: "Luxury Fit-Outs",
    slug: "luxury-fit-outs",
    category: "Interior & Fit-Out",
    description: "Boutique interior enhancements and high-end structural refinements.",
    longDescription: "End-to-end interior interventions for elite properties. From bespoke carpentry to marble restoration, we deliver architectural-grade finishes with absolute precision.",
    features: ["Bespoke Joinery", "Surface Restoration", "Lighting Design", "Structural Refinements"]
  },

  // --- IT & Systems ---
  {
    title: "Hardware Maintenance",
    slug: "hardware-maintenance",
    category: "IT & Systems",
    description: "Physical upkeep and optimization of server and workstation assets.",
    longDescription: "Preventative hardware care to extend the life of your IT assets. We specialize in server rack maintenance, thermal management, and physical component upgrades.",
    features: ["Internal Dust Removal", "Thermal Paste Refresh", "Component Upgrades", "Voltage Testing"]
  },
  {
    title: "Software Maintenance",
    slug: "software-maintenance",
    category: "IT & Systems",
    description: "Seamless application management and lifecycle support.",
    longDescription: "Maintaining your business applications for maximum uptime. We handle patching, optimization, and scaling to ensure your software stays reliable and secure.",
    features: ["Security Patching", "Cloud Optimization", "Database Tuning", "License Management"]
  },
  {
    title: "Data Backup",
    slug: "data-backup",
    category: "IT & Systems",
    description: "Robust data redundancy and disaster recovery solutions.",
    longDescription: "Protecting your most valuable asset: information. We implement automated local and cloud backup systems with 99.9% recovery reliability.",
    features: ["Cloud Synchronization", "Off-site Redundancy", "Automated Encryption", "Disaster Recovery Drill"]
  },
  {
    title: "System Cleaning",
    slug: "system-cleaning",
    category: "IT & Systems",
    description: "Digital decluttering and operating system optimization.",
    longDescription: "Removing bloatware, temporary files, and registry errors to restore the 'like-new' speed of your operating systems and local applications.",
    features: ["Registry Cleanup", "Cache Management", "Startup Optimization", "Disk Defragmentation"]
  },
  {
    title: "Virus Protection",
    slug: "virus-protection",
    category: "IT & Systems",
    description: "Advanced cybersecurity and real-time threat elimination.",
    longDescription: "Implementing enterprise-grade endpoint security. We protect your network from ransomware, phishing, and zero-day vulnerabilities with real-time monitoring.",
    features: ["Malware Scanning", "Firewall Configuration", "Ransomware Shield", "Threat Assessment"]
  },
  {
    title: "Printer Maintenance",
    slug: "printer-maintenance",
    category: "IT & Systems",
    description: "Reliable support for enterprise-scale printing infrastructure.",
    longDescription: "End-to-end support for office printing fleets. We manage firmware updates, roller replacements, and network printing configurations for zero downtime.",
    features: ["Roller Cleaning", "Firmware Updates", "Network Mapping", "Toner Logistics"]
  },
  {
    title: "Email Maintenance",
    slug: "email-maintenance",
    category: "IT & Systems",
    description: "Server management and spam filtering for corporate communications.",
    longDescription: "Optimizing your communication channels. We manage Microsoft 365, Google Workspace, and private SMTP servers to ensure deliverability and security.",
    features: ["Spam Filter Tuning", "Storage Management", "Protocol Encryption", "Archive Setup"]
  },
  {
    title: "Performance Monitoring",
    slug: "performance-monitoring",
    category: "IT & Systems",
    description: "Real-time analytics for infrastructure and system health.",
    longDescription: "Constant vigilance over your technical assets. We use advanced telemetry to predict failures before they happen, allowing for proactive maintenance.",
    features: ["Uptime Tracking", "Resource Usage Logs", "Predictive Analytics", "Alert Configuration"]
  },
];