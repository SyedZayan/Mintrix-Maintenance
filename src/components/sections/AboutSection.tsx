"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Building2, FileText } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-[#FDFBF7] py-12 md:py-20 lg:py-24 px-6 md:px-12 overflow-hidden border-t border-heavy-metal/10">
      
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-old-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT: PREMIUM IMAGE SHOWCASE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0"
          >
            {/* Decorative background border/frame */}
            <div className="absolute -inset-4 md:-inset-5 border-2 border-old-gold/20 rounded-3xl translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5" />
            
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden h-[350px] md:h-[450px] lg:h-[550px] w-full shadow-2xl shadow-heavy-metal/20 bg-heavy-metal/5">
              <Image 
                src="/aboutus.png" 
                alt="Mintrix Maintenance Team" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal/60 via-transparent to-transparent" />
            </div>
          </motion.div>


          {/* --- RIGHT: COMPANY NARRATIVE --- */}
          <div className="space-y-6 md:space-y-8 mt-10 lg:mt-0">
            
            {/* Eyebrow Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 md:gap-3 bg-old-gold/10 text-old-gold px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-full border border-old-gold/20"
            >
              <Building2 size={14} /> About Mintrix
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase italic tracking-tighter leading-[0.95] text-heavy-metal"
            >
              Precision Care For <br />
              <span className="text-old-gold">Elite Properties.</span>
            </motion.h2>

            {/* Body Text */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 md:space-y-5 text-heavy-metal/70 text-sm md:text-base leading-relaxed"
            >
              <p>
                Mintrix Maintenance was established with a singular vision: to elevate the standard of property care across Dubai. We understand that your home, villa, or commercial building is a significant investment that requires proactive, expert attention.
              </p>
              <p>
                From critical emergency repairs to ongoing preventive maintenance, our certified technicians bring engineering-grade precision to every task. We don't just fix problems; we optimize your property's performance, ensuring safety, comfort, and longevity.
              </p>
            </motion.div>

            {/* Trust Checklist */}
            <motion.ul 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-1 md:pt-2"
            >
              {[
                'Certified & Vetted Technicians',
                'Transparent, Upfront Pricing',
                '24/7 Emergency Dispatch',
                'Guaranteed Workmanship'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 md:gap-3">
                  <CheckCircle2 size={16} className="text-old-gold flex-shrink-0" />
                  <span className="text-xs md:text-sm font-bold text-heavy-metal">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* --- ACTION BUTTONS --- */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-3 md:pt-4 flex flex-col sm:flex-row gap-4"
            >
              {/* Primary Button */}
              <Link
                href="/about"
                className="relative inline-flex justify-center sm:justify-start group overflow-hidden bg-heavy-metal text-ecru-white py-4 px-6 md:py-5 md:px-8 font-bold text-[12px] md:text-[13px] uppercase tracking-wider transition-all shadow-xl shadow-heavy-metal/20 rounded-xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Discover Our Journey <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500 shrink-0 text-old-gold group-hover:text-heavy-metal" />
                </span>
                {/* Premium Fill Animation */}
                <div className="absolute inset-0 bg-old-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Link>

              {/* Secondary Button: Company Profile Download */}
              <Link
                href="#" /* Replace with actual PDF link later */
                className="relative inline-flex justify-center sm:justify-start group bg-transparent border-2 border-old-gold/50 text-heavy-metal py-4 px-6 md:py-5 md:px-8 font-bold text-[12px] md:text-[13px] uppercase tracking-wider transition-all hover:bg-old-gold hover:border-old-gold hover:shadow-xl hover:shadow-old-gold/20 rounded-xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FileText size={16} className="shrink-0 text-old-gold group-hover:text-heavy-metal transition-colors" />
                  <span>Company Profile</span>
                </span>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}