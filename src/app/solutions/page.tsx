"use client";

import Navbar from "@/components/layout/Navbar";

import HeroSection from "@/components/solutions/HeroSection";
import ChallengesSection from "@/components/solutions/ChallengesSection";
import CaseStudiesSection from "@/components/solutions/CaseStudiesSection";
import ClosingCTA from "@/components/solutions/ClosingCTA";

export default function SolutionsPage() {
  return (
    <main className="bg-heavy-metal text-ecru-white min-h-screen">
      <Navbar />

      <HeroSection />
      <ChallengesSection />
      <CaseStudiesSection />
      <ClosingCTA />

    </main>
  );
}
