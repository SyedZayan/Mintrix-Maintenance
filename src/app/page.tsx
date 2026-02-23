import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import SpecializedServices from "@/components/sections/SpecializedServices";
import Testimonials from "@/components/sections/Testimonials";
import Experts from "@/components/sections/Experts";

import Footer from "@/components/layout/Footer";

import HomeCTA from "@/components/home/HomeCTA";
import ProfessionalStandards from "@/components/home/ProfessionalStandards";

export default function Home() {
  return (
    <main className="min-h-screen bg-heavy-metal">
      <Navbar />
      
      {/* 1. Impact Layer */}
      <Hero />
      
      {/* 2. Authority Layer */}
      <Services />
      <Stats />
      
      {/* 3. Expertise Layer */}
      <SpecializedServices />
      <Testimonials />
      <ProfessionalStandards/>

      <Experts />
      
      {/* 4. Conversion Layer */}
      <HomeCTA />

      {/* 5. Global Navigation */}
      <Footer />
    </main>
  );
}
