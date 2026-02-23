"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileCheck, AlertTriangle, Hammer, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundGrid from '@/components/ui/BackgroundGrid';

export default function TermsPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sections = [
    {
      icon: <Hammer size={24} />,
      title: "Service Protocols",
      content: "Mintrix provides specialized MEP, HVAC, and Fit-Out services. Our 90-minute arrival guarantee applies specifically to emergency calls within Downtown Dubai and Business Bay zones. All technical interventions are performed by vetted, licensed specialists."
    },
    {
      icon: <Scale size={24} />,
      title: "Client Obligations",
      content: "Clients must provide safe access to the property and relevant technical documentation (blueprints or past maintenance logs) to ensure precise execution of the Technical Audit or repair."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Liability & Warranty",
      content: "We provide a standard warranty on all specialized fit-out and MEP installations. Mintrix is not liable for pre-existing structural defects or unauthorized third-party interventions performed after our team's departure."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Technical Audits",
      content: "Scheduling a Technical Audit constitutes a formal request for professional engineering assessment. Results and recommendations provided are based on the operational standards of Dubai's elite property landscape."
    }
  ];

  return (
    <main className="bg-heavy-metal text-ecru-white min-h-screen">
      <Navbar />
      
      {/* Background Architecture */}
      <BackgroundGrid />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-8 md:px-12 z-10 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-old-gold" />
            <h2 className="text-old-gold font-black text-[10px] tracking-[0.5em] uppercase">
              Operational Terms // v1.0
            </h2>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-12"
          >
            Service <br /> <span className="text-old-gold">Terms.</span>
          </motion.h1>

          <motion.p 
            {...fadeUp}
            className="text-xl text-dove-gray max-w-2xl leading-relaxed border-l-4 border-old-gold pl-8"
          >
            Defining the engineering precision and professional accountability that governs every Mintrix engagement.
          </motion.p>
        </div>
      </section>

      {/* Terms Content Architecture */}
      <section className="relative py-24 px-8 md:px-12 z-10 bg-ecru-white text-heavy-metal">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-20">
          
          {/* Left: Quick Reference */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="p-10 bg-heavy-metal text-ecru-white border border-old-gold/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 translate-x-1/4 -translate-y-1/4">
                   <Scale size={140} className="text-old-gold" />
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-6 tracking-tight">Key Provisions</h3>
                <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-ecru-white/60">
                  <li className="flex items-center gap-3">
                    <ChevronRight size={14} className="text-old-gold" /> 90-Min Response Terms
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight size={14} className="text-old-gold" /> Technical Dispatch Rules
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight size={14} className="text-old-gold" /> Certified MEP Standards
                  </li>
                </ul>
              </div>
              <div className="pl-2 space-y-1">
                <p className="text-dove-gray text-[10px] font-black uppercase tracking-[0.3em]">
                  Effective Date: Feb 23, 2026
                </p>
                <p className="text-dove-gray text-[10px] font-black uppercase tracking-[0.3em]">
                  Jurisdiction: Dubai, UAE
                </p>
              </div>
            </div>
          </div>

          {/* Right: Detailed Sections */}
          <div className="lg:col-span-8 space-y-20">
            {sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-heavy-metal text-old-gold flex items-center justify-center shrink-0">
                    {section.icon}
                  </div>
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter">
                    {section.title}
                  </h4>
                </div>
                <p className="text-lg text-heavy-metal/70 font-medium leading-relaxed max-w-3xl">
                  {section.content}
                </p>
                <div className="w-full h-[1px] bg-heavy-metal/5" />
              </motion.div>
            ))}

            <motion.div {...fadeUp} className="pt-10 bg-heavy-metal/5 p-10 border-l-8 border-old-gold">
              <h4 className="text-xl font-black uppercase italic mb-6">Governing Law</h4>
              <p className="text-lg font-medium text-heavy-metal/80 leading-relaxed">
                These terms are governed by the laws of the United Arab Emirates as applicable in the Emirate of Dubai. Any disputes shall be settled within the competent courts of Dubai.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}