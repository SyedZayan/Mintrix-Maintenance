import type { Metadata } from 'next'; // <-- 1. Add this import at the top

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import SpecializedServices from "@/components/sections/SpecializedServices";
import MaintenanceSolutions from "@/components/sections/MaintenanceSolutions"; 
import WhyChooseUs from "@/components/sections/WhyChooseUs"; 
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ"; 
import Experts from "@/components/sections/Experts";
import Footer from "@/components/layout/Footer";
import HomeCTA from "@/components/home/HomeCTA";
import ProfessionalStandards from "@/components/home/ProfessionalStandards";


export const metadata: Metadata = {
  title: 'Handyman & Property Maintenance Services Dubai | Mintrix Maintenance',
  description: 'Professional handyman services in Dubai for homes, villas, apartments, and buildings. Expert AC, plumbing, electrical, and property maintenance by Mintrix Maintenance.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-heavy-metal">
      <Navbar />
      
      {/* 1. Impact Layer */}
      <Hero />
      
      {/* 2. Authority Layer */}
      <Services /> {/* Light */}
      <Stats /> {/* Dark */}
      
      {/* 3. Expertise Layer */}
      <SpecializedServices /> {/* Light */}
      
      <MaintenanceSolutions /> {/* Dark */}
      
      {/* NEW: Breaks up the dark-on-dark clash */}
      <WhyChooseUs /> {/* Light */}

      <Testimonials /> {/* Dark */}

      <ProfessionalStandards/> {/* Dark */}

      <Experts /> {/* Light */}
      
      {/* 4. Conversion Layer */}
      <HomeCTA /> {/* Dark */}
      <FAQ />

      {/* 5. Global Navigation */}
      <Footer /> {/* Dark */}
    </main>
  );
}