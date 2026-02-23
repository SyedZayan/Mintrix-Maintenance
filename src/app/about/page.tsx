import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ecru-white">
      <Navbar />

      <AboutHero />
      <AboutValues />
      <AboutCTA />

      <Footer />
    </main>
  );
}
