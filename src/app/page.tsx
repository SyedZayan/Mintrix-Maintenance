import type { Metadata } from 'next'; 

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import SpecializedServices from "@/components/sections/SpecializedServices";
import MaintenanceSolutions from "@/components/sections/MaintenanceSolutions"; 
import ServicePackages from "@/components/sections/ServicePackages";
import AboutSection from "@/components/sections/AboutSection"; // <-- NEW: Imported AboutSection
import WhyChooseUs from "@/components/sections/WhyChooseUs"; 
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ"; 
import Experts from "@/components/sections/Experts";
import Footer from "@/components/layout/Footer";
import ProfessionalStandards from "@/components/home/ProfessionalStandards";
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';


export const metadata: Metadata = {
  title: 'Handyman & Property Maintenance Services Dubai | Mintrix Maintenance',
  description: 'Professional handyman services in Dubai for homes, villas, apartments, and buildings. Expert AC, plumbing, electrical, and property maintenance by Mintrix Maintenance.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-heavy-metal">
      <Navbar />
      
      {/* 1. Impact Layer */}
      
      {/* 2. Authority Layer */}
      <Services /> {/* Light */}
      <ServicePackages /> {/* Light */}
      <BeforeAfterSection />
      {/* 3. Expertise Layer */}
      
      <MaintenanceSolutions /> {/* Dark */}
      
      {/* NEW: Breaks up the dark-on-dark clash */}
      
      
      {/* 4. Conversion Layer */}
      <AboutSection /> {/* <-- NEW: Replaced HomeCTA with AboutSection */}
      <FAQ />

    </main>
  );
}