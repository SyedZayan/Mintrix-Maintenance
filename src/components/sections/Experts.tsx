"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Award, ShieldCheck } from 'lucide-react';
import { TEAM_MEMBERS } from '@/constants/navigation';
import BackgroundGrid from '@/components/ui/BackgroundGrid';

export default function Experts() {
  return (
    <section className="py-24 md:py-48 bg-heavy-metal overflow-hidden relative border-y border-white/5">
      <BackgroundGrid />
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-old-gold/[0.03] blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="space-y-8 max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-old-gold font-black text-[10px] tracking-[0.5em] uppercase border-l-2 border-old-gold pl-6"
            >
              The Precision Team
            </motion.h2>
            <h3 className="text-ecru-white text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase italic">
              Safety & <br /> <span className="text-old-gold">Reliability.</span>
            </h3>
            <p className="text-dove-gray text-xl font-medium leading-relaxed max-w-xl">
              Our specialists are fully vetted industry veterans, engineered to deliver prompt and authenticated care for Dubai's elite property landscape.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden lg:block pb-4"
          >
             <Award className="w-32 h-32 text-old-gold opacity-10" />
          </motion.div>
        </div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: any; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] mb-10 overflow-hidden shadow-2xl bg-heavy-metal">
        <div className="absolute inset-0 border-[1px] border-white/10 z-20 pointer-events-none group-hover:border-old-gold/40 transition-all duration-500" />
        
        <Image 
          src={member.image} 
          alt={`${member.name} - ${member.role}`}
          fill
          className="object-cover transition-all duration-1000 group-hover:scale-110" 
          // Removed grayscale-0 md:grayscale group-hover:md:grayscale-0
        />

        {/* Social Overlay */}
        <div className="absolute bottom-0 right-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 z-30">
          <a 
            href={member.linkedin || "#"} 
            className="bg-old-gold p-5 block text-heavy-metal hover:bg-ecru-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Content Block */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-ecru-white font-black text-3xl tracking-tighter uppercase italic group-hover:text-old-gold transition-colors leading-none">
            {member.name}
          </h4>
          <p className="text-old-gold font-black text-[11px] tracking-[0.4em] uppercase opacity-80">
            {member.role}
          </p>
        </div>
        
        <p className="text-dove-gray text-lg font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity line-clamp-3">
          {member.bio}
        </p>
        
        <div className="pt-6 flex items-center gap-3 border-t border-white/5 group-hover:border-old-gold/20 transition-colors">
          <ShieldCheck className="w-5 h-5 text-old-gold" />
          <span className="text-[10px] text-ecru-white/40 font-black uppercase tracking-[0.2em]">
            Expertise: {member.specialization}
          </span>
        </div>
      </div>
    </motion.div>
  );
}