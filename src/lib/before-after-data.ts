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
    id: 'lobby-renovation',
    title: 'Hotel Lobby Transformation',
    category: 'Renovation & Modification',
    icon: PaintBucket,
    beforeImg: '/images/before_after/lobby-before.png', 
    afterImg: '/images/before_after/lobby-after.png', 
    description: 'From worn-out and messy to spotless and welcoming - we make every corner shine!'
  },
  {
    id: 'hvac-maintenance',
    title: 'HVAC Condenser Maintenance',
    category: 'Air Conditioning (AC)',
    icon: Wrench,
    beforeImg: '/images/before_after/cooler-before.png',
    afterImg: '/images/before_after/cooler-after.png',
    description: 'From old and worn-out to clean and efficient - Mintrix Maintenance brings your HVAC back to life!'
  },
  {
    id: 'ac-service',
    title: 'AC Service & Restoration',
    category: 'Air Conditioning (AC)',
    icon: Droplets, // Using droplets to signify chemical washing/cleaning
    beforeImg: '/images/before_after/ac-before.png',
    afterImg: '/images/before_after/ac-after.png',
    description: 'From dusty and inefficient to clean and fully functional - we keep your AC running at its best!'
  },
  {
    id: 'living-room',
    title: 'Living Room Makeover',
    category: 'Interior & Fit-Out',
    icon: Zap,
    beforeImg: '/images/before_after/living-before.png',
    afterImg: '/images/before_after/living-after.png',
    description: 'From cluttered and worn to spotless and inviting - we transform your living spaces to perfection!'
  }
];