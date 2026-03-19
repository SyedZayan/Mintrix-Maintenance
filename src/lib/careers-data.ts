export const JOB_LOCATIONS = [
  "Dubai, UAE",
  "Abu Dhabi, UAE",
  "Sharjah, UAE"
];

export const DEPARTMENTS = [
  "Facility & MEP",
  "Interior & Fit-Out",
  "IT & Systems",
  "Management & Operations"
];

export type JobType = 'Full-Time' | 'Contract' | 'Emergency Roster';

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  experience: string;
  description: string;
  requirements: string[];
}

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: 'hvac-senior-01',
    title: 'Senior HVAC Diagnostic Technician',
    department: 'Facility & MEP',
    location: 'Dubai, UAE',
    type: 'Full-Time',
    experience: '5+ Years',
    description: 'Lead rapid-response cooling diagnostics and maintenance for high-end residential and commercial assets within Dubai. You will be responsible for troubleshooting complex VRF and chiller systems.',
    requirements: [
      'Minimum 5 years of proven HVAC experience in the UAE.',
      'Expertise in chilled water systems, split units, and smart thermostats.',
      'Valid UAE manual driving license is mandatory.',
      'Ability to operate under the 90-minute emergency SLA.'
    ]
  },
  {
    id: 'plumbing-spec-02',
    title: 'Master Plumbing Specialist',
    department: 'Facility & MEP',
    location: 'Dubai, UAE',
    type: 'Full-Time',
    experience: '3+ Years',
    description: 'Execute precision plumbing solutions ranging from advanced leak detection to the installation of luxury sanitary fixtures in elite properties.',
    requirements: [
      'Extensive knowledge of UAE plumbing codes and high-rise water pressure systems.',
      'Experience with luxury fixture brands (Grohe, Kohler, etc.).',
      'Strong problem-solving skills for hidden leak detection.'
    ]
  },
  {
    id: 'cctv-tech-03',
    title: 'Security & CCTV Integration Engineer',
    department: 'IT & Systems',
    location: 'Dubai, UAE',
    type: 'Contract',
    experience: '4+ Years',
    description: 'Design, install, and configure advanced surveillance setups and secure IP networks for commercial and residential clients.',
    requirements: [
      'SIRA Certification is highly preferred.',
      'Deep understanding of NVR/DVR setups, IP cameras, and remote monitoring.',
      'Experience in running secure, concealed network cabling.'
    ]
  },
  {
    id: 'masonry-04',
    title: 'Civil Works & Masonry Lead',
    department: 'Interior & Fit-Out',
    location: 'Dubai, UAE',
    type: 'Full-Time',
    experience: '6+ Years',
    description: 'Oversee aesthetic touch-ups, surface repairs, block wall construction, and premium tile fixing for our renovation division.',
    requirements: [
      'Exceptional attention to detail in plastering and tile alignment.',
      'Experience leading a small team of junior masons.',
      'Strong understanding of structural integrity and load-bearing repairs.'
    ]
  },
  {
    id: 'dispatch-05',
    title: 'Emergency Dispatch Coordinator',
    department: 'Management & Operations',
    location: 'Dubai, UAE',
    type: 'Emergency Roster',
    experience: '2+ Years',
    description: 'Act as the nerve center for Mintrix Maintenance. You will coordinate technical teams, manage client emergencies, and ensure our 90-minute SLA is flawlessly executed.',
    requirements: [
      'Flawless English communication skills; Arabic is a plus.',
      'Ability to remain calm and decisive under extreme pressure.',
      'Experience with CRM and dispatch routing software.'
    ]
  }
];