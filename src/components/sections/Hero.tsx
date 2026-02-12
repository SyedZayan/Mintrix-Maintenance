// src/components/sections/Hero.tsx
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-heavy-metal text-ecru-white pt-16 pb-24 px-6 overflow-hidden">
      {/* Background Accent - subtle gold glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-old-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-old-gold font-bold tracking-[0.3em] text-sm mb-4">
            MAINTENANCE MADE FAST
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
            Premium Maintenance. <br />
            <span className="text-old-gold">Zero Hassle.</span>
          </h1>
          <p className="text-lg text-dove-gray mb-10 max-w-md leading-relaxed">
            Expert maintenance for luxury homes, offices, and buildings across Dubai. 
            Target arrival within <span className="text-ecru-white font-bold">90 minutes</span> or we waive 50% of the service charge.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-old-gold text-heavy-metal px-10 py-4 font-bold rounded-sm hover:brightness-110 transition-all shadow-lg shadow-old-gold/10">
              Book a Service
            </button>
            <button className="border border-dove-gray/30 text-ecru-white px-10 py-4 font-bold rounded-sm hover:bg-ecru-white hover:text-heavy-metal transition-all">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Side: Professional Image with Badge */}
        <div className="relative group">
          <div className="relative z-10 rounded-xl overflow-hidden border border-old-gold/20 shadow-2xl">
            {/* Replace /technicians.jpg with your actual file path in the public folder */}
            <Image 
              src="/hero-image.png" 
              alt="Mintrix Maintenance Technicians" 
              width={800} 
              height={600}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          {/* Floating 90 Min Badge */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-heavy-metal border-2 border-old-gold p-6 shadow-2xl">
            <div className="text-center">
              <span className="block text-5xl font-black text-old-gold leading-none">90</span>
              <span className="block text-xs font-bold tracking-widest text-ecru-white mt-1 uppercase">
                Minutes
              </span>
              <div className="h-[2px] w-full bg-old-gold/30 my-2"></div>
              <p className="text-[10px] font-bold text-dove-gray leading-tight uppercase">
                Target Arrival
              </p>
            </div>
          </div>
          
          {/* Decorative Gold Frame element */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-old-gold/40 z-0" />
        </div>
      </div>
    </section>
  );
}