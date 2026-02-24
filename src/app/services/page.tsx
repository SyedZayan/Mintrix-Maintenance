"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Globe } from 'lucide-react';
import { services } from '@/lib/services-data';
import { SERVICE_CATEGORIES, BRAND_DATA } from '@/constants/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundGrid from '@/components/ui/BackgroundGrid';

export default function ServicesPage() {
  return (
    <main className="bg-heavy-metal text-ecru-white min-h-screen">
      <Navbar />
      <BackgroundGrid />

      {/* --- HERO: TECHNICAL BRIEFING --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8 md:mb-10"
          >
            <div className="w-12 md:w-16 h-[1px] bg-old-gold" />
            <span className="text-old-gold font-black text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.5em] uppercase">
              Operational Verticals
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
            Expertise <br /> <span className="text-old-gold">Framework.</span>
          </h1>

          <p className="text-lg md:text-2xl text-dove-gray max-w-3xl leading-relaxed border-l-4 border-old-gold pl-6 md:pl-8 font-medium">
            Synchronized maintenance strategies designed for the high-density infrastructures of Downtown Dubai and Business Bay.
          </p>
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
                  <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                    {cat.title}
                  </h2>
                  <div className={`w-20 md:w-24 h-1.5 bg-old-gold ${idx % 2 !== 0 && 'opacity-60'}`} />
                  <p className={`text-lg md:text-xl font-medium leading-relaxed 
                    ${idx % 2 === 0 ? 'text-dove-gray' : 'text-heavy-metal/70'}`}>
                    Engineering {cat.title} excellence for elite assets in the Burj district.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-2">
                  <Activity size={16} className="text-old-gold" />
                  <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] 
                    ${idx % 2 === 0 ? 'text-ecru-white/40' : 'text-heavy-metal/30'}`}>
                     Dubai Operations // Business Bay HQ
                  </span>
                </div>
              </div>

              {/* Dynamic Service Grid */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-6">
                {filteredServices.map((service) => (
                  <Link 
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`group p-6 md:p-8 border transition-all duration-500 flex flex-col justify-between aspect-[1.1/1] md:aspect-video lg:aspect-square relative overflow-hidden
                      ${idx % 2 === 0 
                        ? 'bg-white/5 border-white/10 hover:border-old-gold' 
                        : 'bg-white border-heavy-metal/5 hover:border-old-gold shadow-sm'}`}
                  >
                    <div className="space-y-4 md:space-y-6 relative z-10">
                      <div className="flex justify-between items-start">
                        <span className={`text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase ${idx % 2 === 0 ? 'text-old-gold/40' : 'text-old-gold'}`}>
                          Spec // {service.slug.replace('-', ' ')}
                        </span>
                        <ArrowRight size={18} className="text-old-gold -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 hidden md:block" />
                      </div>
                      
                      <h3 className="text-xl md:text-3xl font-black uppercase italic tracking-tight leading-none group-hover:text-old-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className={`text-sm md:text-base font-medium line-clamp-3 transition-opacity duration-500 
                        ${idx % 2 === 0 ? 'text-dove-gray group-hover:text-ecru-white' : 'text-heavy-metal/60 group-hover:text-heavy-metal'}`}>
                        {service.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-old-gold group-hover:w-full transition-all duration-700" />
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
           <span className="text-[12rem] md:text-[25rem] font-black uppercase italic tracking-tighter leading-none">MINTRIX</span>
        </div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-8 md:space-y-12">
          <h2 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] md:leading-none">
            Schedule a <br /> <span className="text-old-gold">Technical Audit.</span>
          </h2>
          <Link href="/contact" className="inline-block w-full md:w-auto bg-old-gold text-heavy-metal px-10 py-5 md:px-16 md:py-7 font-black text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-ecru-white transition-all shadow-2xl">
            Initialize Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}