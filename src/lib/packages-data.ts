export type SchedulingType = "same-day" | "next-day" | "scheduled";

export interface PackageData {
  id: string;
  title: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  schedulingType: SchedulingType;
}

export const PACKAGES: PackageData[] = [
  {
    id: "express-dispatch",
    title: "Express Dispatch",
    price: 499,
    currency: "AED",
    description: "Immediate emergency response. We mobilize our technical team immediately.",
    features: ["90-Minute Arrival Guarantee", "Priority Assessment", "Minor Repairs Included"],
    schedulingType: "same-day" // Only time selection
  },
  {
    id: "priority-next-day",
    title: "Priority Next-Day",
    price: 299,
    currency: "AED",
    description: "Scheduled intervention for the next business day.",
    features: ["24-Hour Resolution", "Comprehensive System Check", "Standard Fixes Included"],
    schedulingType: "next-day" // Date & Time selection
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance",
    price: 899,
    currency: "AED",
    description: "Full system audit and preventive care scheduled at your convenience.",
    features: ["Full Property Audit", "AC & MEP Checking", "Detailed Technical Reporting"],
    schedulingType: "scheduled" // Date & Time selection
  }
];