// src/components/sections/SpecializedServices.tsx
import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function SpecializedServices() {
  const details = [
    { title: "Interior Fit-Out", desc: "Tailored carpentry, furniture supply, and space enhancement for luxury assets." },
    { title: "MEP Solutions", desc: "Mechanical, Electrical, and Plumbing services for complex vertical infrastructures." },
    { title: "Automation", desc: "Smart system integration for high-end residential and corporate environments." }
  ];

  return (
    <section className="relative bg-ecru-white py-32 md:py-56 px-8 md:px-12 overflow-hidden border-y border-heavy-metal/5">
      
      {/* --- LOCALIZED BLUEPRINT BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#D1AB43 1px, transparent 1px), linear-gradient(90deg, #D1AB43 1px, transparent 1px)', backgroundSize: '120px 120px' }} />

      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-24 lg:gap-40 items-center relative z-10">
        
        {/* Visual Side: The Asset */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border-l-[12px] border-old-gold shadow-3xl">
            <Image 
              src="/interior.jpg" 
              alt="Premium Interior Maintenance & Fit-Out"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
            />
            {/* Context Badge */}
            <div className="absolute bottom-10 left-10 bg-heavy-metal/90 backdrop-blur-md p-8 border border-white/10 shadow-2xl">
              <span className="block text-4xl font-black text-old-gold italic leading-none tracking-tighter">001</span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-ecru-white mt-2 block">Project Spec // 2026</span>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-heavy-metal -z-10 hidden xl:block transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
        </div>

        {/* Content Side: The Technical Advantage */}
        <div className="w-full lg:w-1/2 space-y-16">
          <div className="space-y-6">
            <h2 className="text-old-gold font-black tracking-[0.5em] text-[10px] uppercase flex items-center gap-4">
              <div className="w-8 h-[1px] bg-old-gold" /> Specialized Projects
            </h2>
            <h3 className="text-heavy-metal text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase italic">
              Expert Fit-Out & <br />
              <span className="text-old-gold">MEP Systems.</span>
            </h3>
            <p className="text-dove-gray text-xl leading-relaxed max-w-xl font-medium border-l-4 border-old-gold/20 pl-8">
              Mintrix provides end-to-end technical interventions tailored to the specific mechanical demands of Downtown Dubai's high-rise architecture.
            </p>
          </div>

          <div className="grid gap-6">
            {details.map((item, i) => (
              <div key={i} className="group flex gap-8 p-8 border border-transparent hover:border-old-gold/20 hover:bg-white transition-all duration-500 relative overflow-hidden">
                <span className="text-old-gold/20 font-black text-3xl italic group-hover:text-old-gold transition-colors select-none">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="text-heavy-metal font-black text-xl group-hover:text-old-gold transition-colors mb-2 uppercase tracking-tight italic leading-none">
                    {item.title}
                  </h4>
                  <p className="text-dove-gray text-base leading-relaxed font-medium group-hover:text-heavy-metal/80">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-old-gold group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>

          <button className="relative group bg-heavy-metal text-ecru-white px-16 py-7 font-black text-xs uppercase tracking-[0.4em] transition-all overflow-hidden shadow-2xl">
            <span className="relative z-10 flex items-center gap-4">
              View Portfolio <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-old-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
}