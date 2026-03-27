"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { services } from '@/lib/services-data';
import { SERVICE_CATEGORIES, BRAND_DATA } from '@/constants/navigation';
import Navbar from '@/components/layout/Navbar';
import BackgroundGrid from '@/components/ui/BackgroundGrid';

export default function ServicesPage() {
  return (
    <main className="bg-heavy-metal text-ecru-white min-h-screen">
      <Navbar />
      <BackgroundGrid />

      {/* --- HERO: SPLIT LAYOUT WITH IMAGE --- */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 border-b border-white/5 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="space-y-6 md:space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-old-gold" />
              <span className="text-old-gold font-bold text-[10px] md:text-xs tracking-wider uppercase">
                Operational Verticals
              </span>
            </motion.div>

            {/* Refined Heading Size */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[32px] md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[1.1] text-ecru-white"
            >
              Expertise <br /> <span className="text-old-gold">Framework.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-ecru-white/70 max-w-xl leading-relaxed border-l-2 border-old-gold pl-6 font-medium"
            >
              Synchronized maintenance strategies designed for the high-density infrastructures of Downtown Dubai and Business Bay.
            </motion.p>
          </div>

          {/* RIGHT: TACTICAL IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full aspect-[4/3] lg:aspect-[5/4] z-10"
          >
            {/* Tactical Floating Frame */}
            <div className="absolute -inset-4 border border-old-gold/20 rounded-[3rem] translate-x-4 translate-y-4 pointer-events-none hidden md:block" />
            
            <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/images/expertise/team.webp" 
                alt="Mintrix Expertise"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              {/* Bottom Dark Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal/80 via-heavy-metal/20 to-transparent" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- DYNAMIC CATEGORY RENDERER --- */}
      {SERVICE_CATEGORIES.map((cat, idx) => {
        const sectionId = cat.title.toLowerCase().replace(/\s+/g, '-');
        const filteredServices = services.filter(s => s.category === cat.title);

        return (
          <section 
            key={sectionId} 
            id={sectionId} 
            className={`relative py-20 md:py-32 px-6 md:px-12 border-b border-white/5 
              ${idx % 2 === 0 ? 'bg-transparent' : 'bg-ecru-white text-heavy-metal'}`}
          >
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              
              {/* Vertical Intel Header - Fixed for Mobile Scrolling */}
              <div className="lg:col-span-5 space-y-8 md:space-y-10 lg:sticky lg:top-32">
                <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border 
                  ${idx % 2 === 0 ? 'border-old-gold/20 bg-white/5 text-old-gold' : 'border-heavy-metal/10 bg-heavy-metal text-old-gold'}`}>
                  {cat.icon === 'logo' ? (
                    <Image src={BRAND_DATA.logo} alt="Mintrix" width={32} height={32} className="grayscale brightness-200 md:w-10 md:h-10" />
                  ) : (
                    <cat.icon className="w-8 h-8 md:w-10 md:h-10" />
                  )}
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  {/* Resized Category Headers to match the new aesthetic */}
                  <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                    {cat.title}
                  </h2>
                  <div className={`w-20 md:w-24 h-1.5 bg-old-gold ${idx % 2 !== 0 && 'opacity-60'}`} />
                  <p className={`text-base md:text-lg font-medium leading-relaxed 
                    ${idx % 2 === 0 ? 'text-dove-gray' : 'text-heavy-metal/70'}`}>
                    Engineering {cat.title} excellence for elite assets in the Burj district.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-2">
                  <Activity size={16} className="text-old-gold" />
                  <span className={`text-[10px] font-bold uppercase tracking-widest 
                    ${idx % 2 === 0 ? 'text-ecru-white/40' : 'text-heavy-metal/40'}`}>
                      Dubai Operations // Business Bay HQ
                  </span>
                </div>
              </div>

              {/* Dynamic Service Grid (UPDATED WITH IMAGES) */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-6">
                {filteredServices.map((service) => (
                  <Link 
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`group border transition-all duration-500 flex flex-col aspect-[1.1/1] md:aspect-video lg:aspect-square relative overflow-hidden bg-heavy-metal
                      ${idx % 2 === 0 
                        ? 'border-white/10 hover:border-old-gold' 
                        : 'border-heavy-metal/10 hover:border-old-gold shadow-sm'}`}
                  >
                    {/* --- IMAGE & GRADIENT BACKGROUND --- */}
                    <div className="absolute inset-0 z-0 bg-heavy-metal">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      />
                      {/* Lighter Gradient Overlay: Dark at the bottom for text, transparent at the top */}
                      <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-heavy-metal/90 via-heavy-metal/30 to-transparent group-hover:via-heavy-metal/10" />
                    </div>

                    {/* --- CARD CONTENT --- */}
                    <div className="p-6 md:p-8 flex flex-col justify-between h-full relative z-10">
                      
                      {/* Top Meta Info */}
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm backdrop-blur-md border border-white/20 text-old-gold bg-black/30 transition-colors">
                          Spec // {service.slug.replace('-', ' ')}
                        </span>
                        <ArrowRight size={20} className="text-old-gold -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 hidden md:block" />
                      </div>
                      
                      {/* Bottom Text Content */}
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight leading-none text-ecru-white group-hover:text-old-gold transition-colors drop-shadow-md">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base font-medium line-clamp-3 text-ecru-white/90 group-hover:text-ecru-white transition-colors duration-500 drop-shadow-sm">
                          {service.description}
                        </p>
                      </div>

                    </div>

                    {/* Bottom Animated Border */}
                    <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-old-gold group-hover:w-full transition-all duration-700 z-20" />
                  </Link>
                ))}
              </div>

            </div>
          </section>
        );
      })}

      {/* --- CTA: FINAL PROTOCOL --- */}
      <section className="py-24 md:py-32 px-6 md:px-8 text-center bg-heavy-metal relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.01] md:opacity-[0.015] pointer-events-none">
           <span className="text-[12rem] md:text-[20rem] font-black uppercase italic tracking-tighter leading-none">MINTRIX</span>
        </div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-8 md:space-y-12">
          {/* Reduced CTA header size */}
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-[1.1] md:leading-tight">
            Schedule a <br /> <span className="text-old-gold">Technical Audit.</span>
          </h2>
          <Link href="/contact" className="inline-block w-full md:w-auto bg-old-gold text-heavy-metal px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-ecru-white transition-all shadow-[0_0_20px_rgba(209,171,67,0.2)] rounded-sm">
            Initialize Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}