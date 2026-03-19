import { PaintBucket, Wrench, Zap, Droplets, LucideIcon } from 'lucide-react';

export interface BeforeAfterProject {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
  beforeImg: string;
  afterImg: string; // Now required for separate images
  description: string;
}

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'renovation',
    title: 'Corridor Modernization',
    category: 'Renovation & Modification',
    icon: PaintBucket,
    beforeImg: '/images/before_after/lobby-before.png', 
    afterImg: '/images/before_after/lobby-after.png', 
    description: 'Complete interior modernization including linear LED integration, modern carpet tiling, and premium wall finishes.'
  },
  {
    id: 'ac',
    title: 'HVAC Condenser Restoration',
    category: 'Air Conditioning (AC)',
    icon: Wrench,
    beforeImg: '/images/before_after/cooler-before.png',
    afterImg: '/images/before_after/cooler-after.png',
    description: 'Deep chemical coil cleaning and performance tuning of outdoor compressor units to restore optimal cooling efficiency.'
  },
  {
    id: 'electrical',
    title: 'Living Room Lighting Overhaul',
    category: 'Electrical & Lighting',
    icon: Zap,
    beforeImg: '/images/before_after/living-before.png',
    afterImg: '/images/before_after/living-after.png',
    description: 'Replaced outdated ambient fixtures with energy-efficient recessed LEDs, significantly brightening the living space alongside custom cabinetry.'
  },
  {
    id: 'plumbing',
    title: 'Luxury Bathroom Upgrade',
    category: 'Plumbing Services',
    icon: Droplets,
    beforeImg: '/images/before_after/ac-before.png', 
    afterImg: '/images/before_after/ac-after.png', 
    description: 'Complete repiping, waterproofing, and installation of luxury sanitary fixtures within a strict timeline.'
  }
];