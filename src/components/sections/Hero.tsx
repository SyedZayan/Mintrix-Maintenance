"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; 
import { Star, Phone, MapPin, Zap, ArrowRight } from "lucide-react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

export default function Hero() {
  const itemVars: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative bg-heavy-metal text-ecru-white min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-20 px-6 md:px-12 overflow-hidden">
      
      <BackgroundGrid />

      {/* Gold ambient glow */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-b lg:bg-gradient-to-l from-old-gold/10 to-transparent blur-[120px] lg:blur-[180px] pointer-events-none z-0" />

      {/* Branding watermark - Pushed further left */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.01] hidden xl:block">
        <span className="text-[40rem] font-black uppercase italic tracking-tighter">
          MINTRIX
        </span>
      </div>

      <div className="max-w-[1536px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 items-center">
          
          {/* --- CONTENT BLOCK (Left Side) --- */}
          <motion.div 
            initial="initial" 
            animate="animate" 
            className="relative z-20 lg:col-span-6 xl:col-span-6"
          >
            <motion.div
              variants={itemVars}
              className="inline-flex items-center gap-3 bg-old-gold/10 border border-old-gold/20 px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8"
            >
              <Zap size={12} className="text-old-gold animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-old-gold">
                Priority Dispatch: Downtown Dubai
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7.5rem] font-black leading-[0.9] tracking-tighter uppercase italic flex flex-col">
              <motion.span variants={itemVars}>Premium</motion.span>
              <motion.span variants={itemVars} className="text-old-gold">
                Maintenance.
              </motion.span>
              <motion.span variants={itemVars}>Zero Hassle.</motion.span>
            </h1>

            <motion.div
              variants={itemVars}
              className="mt-8 md:mt-10 max-w-xl border-l-4 border-old-gold pl-6 md:pl-8"
            >
              <p className="text-base md:text-xl text-dove-gray font-medium leading-relaxed">
                Elite property care for Dubai's most valuable assets. Arrival within{" "}
                <span className="text-ecru-white font-bold underline decoration-old-gold decoration-4 underline-offset-4">
                  90 minutes
                </span>{" "}
                guaranteed for Downtown residents.
              </p>
            </motion.div>

            {/* --- CONTACT INTEL --- */}
            <motion.div 
              variants={itemVars}
              className="mt-10 md:mt-12 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-6 md:gap-8 text-[11px] font-black uppercase tracking-widest text-ecru-white/60"
            >
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-old-gold" />
                </div>
                <div>
                  <p className="text-old-gold/40 text-[9px] mb-1">Emergency 24/7</p>
                  <p className="text-ecru-white tracking-tighter text-sm md:text-base">+971 50 000 0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-old-gold" />
                </div>
                <div>
                  <p className="text-old-gold/40 text-[9px] mb-1">Ops Center</p>
                  <p className="text-ecru-white tracking-tighter text-sm md:text-base">Business Bay, Dubai</p>
                </div>
              </div>
            </motion.div>

            {/* --- CTA & TRUST --- */}
            <motion.div
              variants={itemVars}
              className="mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-8 items-start sm:items-center"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto relative group overflow-hidden bg-old-gold text-heavy-metal px-10 py-5 md:px-14 md:py-6 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] transition-all shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Request Maintenance Audit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
              </Link>

              <div className="flex items-center gap-5 sm:border-l border-white/10 sm:pl-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-heavy-metal bg-dove-gray shadow-xl relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-tr from-old-gold/20 to-transparent" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-tighter">
                  <p className="text-ecru-white opacity-40">Trusted by 12k+</p>
                  <p className="text-old-gold flex items-center gap-1">
                    Elite Dubai <Star size={8} className="fill-old-gold" />
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- BUFFER SPACE (Column 7) --- */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* --- IMAGE BLOCK (Right Side - Columns 8-12) --- */}
          <div className="relative lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="relative z-10 w-full max-w-[420px] lg:max-w-full aspect-[4/5] xl:aspect-[3/4] rounded-sm overflow-hidden border border-white/10 shadow-3xl"
            >
              <Image
                src="/hero-image.jpg"
                alt="Mintrix Professional Maintenance Team"
                fill
                className="object-cover grayscale-[20%] transition-all"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* 90-Min Badge - Anchored to the right edge of the image */}
            <div className="absolute -bottom-6 left-2 sm:-bottom-8 lg:left-auto lg:-right-10 z-30 bg-heavy-metal border-t-4 border-old-gold p-6 md:p-8 shadow-3xl min-w-[150px] md:min-w-[180px] backdrop-blur-md">
              <div className="text-center">
                <span className="block text-5xl md:text-7xl font-black text-old-gold leading-none tracking-tighter italic">
                  90
                </span>
                <span className="block text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-ecru-white mt-2 md:mt-3 uppercase">
                  Minutes
                </span>
                <p className="text-[7px] md:text-[8px] font-bold text-dove-gray mt-1.5 uppercase tracking-widest opacity-40">
                  Target Mobilization
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}