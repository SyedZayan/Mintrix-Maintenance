import { 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Zap, 
  ShieldCheck,
  Award,
  ArrowUpRight 
} from 'lucide-react';

export const BRAND_DATA = {
  name: "Mintrix",
  type: "Maintenance",
  phone: "+971 50 000 0000",
  email: "support@mintrix.ae",
  address: "Business Bay, Dubai, UAE",
  logo: "/mintrix-maintain-logo.png"
};

export const NAV_LINKS = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'About Us', href: '/about' },
];

export const FOOTER_LINKS = {
  navigation: [
    { name: 'Our Story', href: '/about' },
    { name: 'Case Studies', href: '/solutions' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ],
  expertise: [
    { name: 'High-Rise HVAC', href: '/services/high-rise-hvac' },
    { name: 'Smart Home MEP', href: '/services/smart-home-mep' },
    { name: 'Luxury Fit-Outs', href: '/services/luxury-fit-outs' },
  ],
};

export const SERVICE_CATEGORIES = [
  { title: "Facility & MEP", icon: Zap },
  { title: "IT & Systems", icon: ShieldCheck },
  { title: "Interior & Fit-Out", icon: 'logo' } 
];

export const TEAM_MEMBERS = [
  {
    name: "Alwyn Stephen Serrao",
    role: "Managing Director",
    image: "/team_1.jpg",
    bio: "Driving the vision of maintenance excellence across the UAE's most iconic infrastructures.",
    specialization: "Strategic Operations"
  },
  {
    name: "Mace Scott",
    role: "Chief Technical Officer",
    image: "/team_2.jpg",
    bio: "15+ years overseeing complex MEP and IT system integrations for elite commercial assets.",
    specialization: "Technical Engineering"
  },
  {
    name: "Jennifer Walt",
    role: "Operations Manager",
    image: "/team_3.jpg",
    bio: "Ensuring our 90-minute arrival promise is met through rigorous logistics management.",
    specialization: "Logistics & Quality"
  }
];

export const SOCIAL_LINKS = [
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

export const SOLUTIONS_DATA = [
  {
    id: "burj-residence",
    title: "Downtown High-Rise HVAC Overhaul",
    client: "Burj Khalifa Residences",
    category: "HVAC & MEP",
    image: "/project-1.jpg",
    description: "Full restoration of centralized cooling systems across 12 luxury units with 0% downtime.",
    tags: ["Energy Efficiency", "Emergency Repair", "Precision Engineering"]
  },
  {
    id: "marina-yacht",
    title: "Smart System Integration",
    client: "Marina Yacht Club",
    category: "IT & Systems",
    image: "/project-2.jpg",
    description: "Implementation of custom server infrastructure and real-time monitoring for club operations.",
    tags: ["Networking", "Cybersecurity", "Automation"]
  },
  {
    id: "palm-villa",
    title: "Bespoke Interior Fit-Out",
    client: "Palm Jumeirah Private Estate",
    category: "Interior & Fit-Out",
    image: "/project-3.jpg",
    description: "Custom woodwork and electrical lighting design for a 15,000 sq. ft. contemporary villa.",
    tags: ["Luxury Design", "Electrical", "Joinery"]
  }
];