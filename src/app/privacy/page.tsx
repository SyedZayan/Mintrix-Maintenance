"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundGrid from '@/components/ui/BackgroundGrid';

export default function PrivacyPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sections = [
    {
      icon: <Eye size={24} />,
      title: "Information Collection",
      content: "We collect technical property data and contact information only to facilitate elite maintenance services in Business Bay and Downtown Dubai. This includes HVAC specifications and structural MEP layouts required for authenticated care."
    },
    {
      icon: <Shield size={24} />,
      title: "Data Protection",
      content: "All client data is encrypted and stored on secure enterprise-grade servers. We implement strict safety protocols to ensure your property details are accessible only to vetted Mintrix specialists."
    },
    {
      icon: <Lock size={24} />,
      title: "Confidentiality",
      content: "Mintrix maintains absolute confidentiality for our elite residential and commercial clients. We do not share, sell, or distribute your information to third-party marketing entities."
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
              Legal Standard // v1.0
            </h2>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-12"
          >
            Privacy <br /> <span className="text-old-gold">Protocols.</span>
          </motion.h1>

          <motion.p 
            {...fadeUp}
            className="text-xl text-dove-gray max-w-2xl leading-relaxed border-l-4 border-old-gold pl-8"
          >
            Maintaining the integrity of your personal and property data is central to the Mintrix engineering standard.
          </motion.p>
        </div>
      </section>

      {/* Privacy Content Architecture */}
      <section className="relative py-24 px-8 md:px-12 z-10 bg-ecru-white text-heavy-metal">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-20">
          
          {/* Left: Summary Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="p-10 bg-heavy-metal text-ecru-white border border-old-gold/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                   <Shield size={120} className="text-old-gold" />
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-6 tracking-tight">Security Summary</h3>
                <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-ecru-white/60">
                  <li className="flex items-center gap-3">
                    <ChevronRight size={14} className="text-old-gold" /> 256-Bit Encryption
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight size={14} className="text-old-gold" /> Vetted Personnel Only
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight size={14} className="text-old-gold" /> Zero Third-Party Sharing
                  </li>
                </ul>
              </div>
              <p className="text-dove-gray text-xs font-black uppercase tracking-[0.3em] pl-2">
                Last Updated: Feb 2026
              </p>
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

            <motion.div {...fadeUp} className="pt-10">
              <h4 className="text-xl font-black uppercase italic mb-6">Contact Privacy Officer</h4>
              <p className="text-lg font-medium text-heavy-metal/80 mb-8">
                For inquiries regarding data rectification or deletion, please contact our Business Bay operations center.
              </p>
              <a href="mailto:support@mintrix.ae" className="text-old-gold font-black text-xl tracking-tight border-b-2 border-old-gold hover:text-heavy-metal transition-all">
                support@mintrix.ae
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}