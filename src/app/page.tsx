import type { Metadata } from 'next'; 

import Navbar from "@/components/layout/Navbar";
import Services from "@/components/sections/Services";
import MaintenanceSolutions from "@/components/sections/MaintenanceSolutions"; 
import ServicePackages from "@/components/sections/ServicePackages";
import AboutSection from "@/components/sections/AboutSection"; // <-- NEW: Imported AboutSection
import FAQ from "@/components/sections/FAQ"; 
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import BlogSection from '@/components/sections/BlogSection';


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
      
      
      
      {/* 4. Conversion Layer */}
      <BlogSection/>
      <AboutSection /> {/* <-- NEW: Replaced HomeCTA with AboutSection */}
      <FAQ />

    </main>
  );
}