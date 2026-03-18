// src/app/testimonials/page.tsx

import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/sections/Testimonials";

// SEO Metadata for the Testimonials page
export const metadata: Metadata = {
  title: 'Client Testimonials | Mintrix Maintenance',
  description: 'Read reviews and testimonials from our satisfied clients across Dubai. See why Mintrix is the trusted choice for property maintenance.',
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Page Header Section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-heavy-metal text-center px-6 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4">
            Client Feedback
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter text-ecru-white leading-none">
            Trusted By <br className="md:hidden" />
            <span className="text-old-gold">Dubai.</span>
          </h2>
          <p className="text-ecru-white/70 text-sm md:text-base max-w-2xl mx-auto mt-6">
            We let our work speak for itself. Read what homeowners, property managers, and businesses have to say about our engineering-grade maintenance services.
          </p>
        </div>
      </div>

      {/* Your Imported Testimonials Module */}
      <div className="py-12 md:py-20">
        <Testimonials />
      </div>

    </main>
  );
}