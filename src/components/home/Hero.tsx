"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; 
import { Star, Zap, ArrowRight } from "lucide-react";

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
      
      {/* Gold ambient glow */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-b lg:bg-gradient-to-l from-old-gold/10 to-transparent blur-[120px] lg:blur-[180px] pointer-events-none z-0" />

      {/* Branding watermark - Pushed further left */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.01] hidden xl:block">
        <span className="text-[40rem] font-black uppercase italic tracking-tighter">
          MINTRIX
        </span>
      </div>

      <div className="max-w-[1536px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 items-center gap-x-6 xl:gap-x-12">
          
          {/* --- CONTENT BLOCK (Left Side) --- */}
          <motion.div 
            initial="initial" 
            animate="animate" 
            className="relative z-20 lg:col-span-6 xl:col-span-6 max-w-[700px] xl:max-w-[820px]"
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

            <h1 className="text-5xl md:text-7xl lg:text-[5rem] xl:text-[6.5rem] font-black leading-[0.95] xl:leading-[0.9] tracking-tight uppercase italic flex flex-col">
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

            {/* --- WHATSAPP CTA BLOCK --- */}
            <motion.div 
              variants={itemVars}
              className="mt-10 md:mt-12 inline-block"
            >
              <a 
                href="https://wa.me/971542576756" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-5 p-2 pr-8 rounded-full bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-lg"
              >
                {/* Subtle WhatsApp Green Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                
                {/* WhatsApp Icon Container */}
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,211,102,0.2)] group-hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] group-hover:scale-105 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-white">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.203.048-.383-.024-.533-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"></path>
                    <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zM12.046 21.84c-1.73 0-3.43-.465-4.904-1.345l-.35-.21-3.65.945.965-3.56-.23-.365c-.96-1.5-1.465-3.24-1.465-5.06 0-5.505 4.495-10 10.02-10 2.67 0 5.18 1.035 7.07 2.925 1.88 1.89 2.92 4.395 2.92 7.065 0 5.505-4.49 10-10.01 10z"></path>
                  </svg>
                </div>
                
                {/* Text Context */}
                <div className="relative z-10 flex flex-col pt-0.5">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-old-gold mb-0.5">
                    Need Help?
                  </span>
                  <span className="text-sm md:text-base font-bold text-ecru-white tracking-wide">
                    Ask Anything..
                  </span>
                </div>
              </a>
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