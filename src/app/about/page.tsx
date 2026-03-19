import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// About components
import AboutHero from "@/components/about/AboutHero";
import AboutContext from "@/components/about/AboutWhoWeAre"; 
 
import WhatWeDo from "@/components/about/WhatWeDo"; 


import AboutValues from "@/components/about/AboutValues";
import AboutMission from "@/components/about/AboutMission";

import OurApproach from "@/components/about/OurApproach";

// Section components
import WhyChooseUs from "@/components/sections/WhyChooseUs"; 

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ecru-white">
      <Navbar />

      <AboutHero />
      <AboutContext />
      <OurApproach />
      
      
      
      <WhatWeDo />
      <AboutMission />
      
      
      
      
      <WhyChooseUs /> 
      
     
    </main>
  );
}