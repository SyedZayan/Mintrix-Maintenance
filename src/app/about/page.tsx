import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutContext from "@/components/about/AboutContext"; 
import AboutStory from "@/components/about/AboutStory"; 
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutTeam from "@/components/about/AboutTeam";
import AboutExpertise from "@/components/about/AboutExpertise"; 
import AboutOperations from "@/components/about/AboutOperations"; // New Import

import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ecru-white">
      <Navbar />

      <AboutHero />
      <AboutContext />
      <AboutStory />
      <AboutPhilosophy /> 
      <AboutTeam />
      <AboutExpertise />
      <AboutOperations />
      
      <AboutValues />
      <AboutCTA />

      <Footer />
    </main>
  );
}