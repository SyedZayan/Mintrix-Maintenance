"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 bg-heavy-metal overflow-hidden border-b border-white/5">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* --- LEFT: CONTENT AREA --- */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-old-gold" />
              <h2 className="text-old-gold font-bold text-[10px] md:text-xs tracking-wider uppercase">
                Elite Solutions for Downtown Dubai
              </h2>
            </div>

            {/* Heading resized to be cleaner and more aligned with other headers */}
            <h1 className="text-[32px] md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[1.1] text-ecru-white">
              Protecting <br className="hidden md:block" /> Dubai&apos;s Most <br />
              <span className="text-old-gold">Valuable Assets.</span>
            </h1>

            <p className="text-ecru-white/70 text-base md:text-lg max-w-xl leading-relaxed font-medium border-l-2 border-old-gold pl-6">
              Downtown living demands perfection. We analyze the unique technical
              challenges of high-rise luxury and engineer proactive solutions before
              they impact your lifestyle.
            </p>

            <div className="pt-4">
              <button className="group flex items-center gap-3 px-8 py-4 bg-old-gold text-heavy-metal font-bold text-[12px] uppercase rounded-sm hover:bg-ecru-white transition-all shadow-[0_0_20px_rgba(209,171,67,0.2)]">
                Explore Our Protocols <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* --- RIGHT: TACTICAL IMAGE SHOWCASE --- */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square">
            {/* Tactical Floating Frame */}
            <div className="absolute -inset-4 border border-old-gold/20 rounded-[3rem] translate-x-4 translate-y-4 pointer-events-none" />
            
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/aboutus.png"
                alt="Downtown Dubai Luxury Properties"
                fill
                className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                priority
              />
              {/* Bottom Dark Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal/60 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}