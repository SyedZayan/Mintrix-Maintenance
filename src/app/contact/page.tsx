"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

import BackgroundGrid from "@/components/ui/BackgroundGrid";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfoSidebar from "@/components/contact/ContactInfoSidebar";

export default function ContactPage() {
  return (
    <main className="bg-heavy-metal text-ecru-white min-h-screen">
      <Navbar />

      <BackgroundGrid />

      <section className="relative pt-32 pb-24 px-8 md:px-12 z-10">
        <div className="max-w-[1440px] mx-auto">
          <ContactHeader />

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <ContactInfoSidebar />
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  );
}
