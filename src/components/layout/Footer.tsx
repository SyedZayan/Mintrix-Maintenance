"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Facebook, Instagram, Linkedin } from 'lucide-react';
import { FOOTER_LINKS, BRAND_DATA } from '@/constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-heavy-metal text-ecru-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 border-t border-old-gold/20 relative overflow-hidden">
      
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#D1AB43 1px, transparent 1px), linear-gradient(90deg, #D1AB43 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Large Brand Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none translate-x-1/4">
        <span className="text-[12rem] md:text-[20rem] font-black uppercase italic tracking-tighter leading-none">MTX</span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* Brand Identity: Massive Logo & Refined Spacing */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <FooterBrand />
            <p className="text-dove-gray text-base md:text-lg font-medium leading-relaxed max-w-md border-l-2 border-old-gold pl-6">
              Engineering reliability for Downtown Dubai's most valuable residential and commercial assets. Delivering precision MEP and technical solutions.
            </p>
            <FooterSocials />
          </div>

          {/* Navigation & Expertise Group */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <FooterColumn title="Navigation" links={FOOTER_LINKS.navigation} />
            <FooterColumn title="Expertise" links={FOOTER_LINKS.expertise} showIcon />
          </div>

          {/* Operational Headquarters */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-3">
              <h4 className="text-old-gold text-[12px] font-bold uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={16} /> Operational HQ
              </h4>
              <p className="text-[11px] text-white/40 font-bold uppercase italic tracking-wider">
                Downtown // Dubai, UAE
              </p>
            </div>
            <FooterContactInfo />
          </div>
        </div>

        <FooterBottomBar />
      </div>
    </footer>
  );
}

/* --- REFINED SUB-COMPONENTS --- */

function FooterBrand() {
  return (
    <Link href="/" className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 group inline-flex">
      {/* MASSIVE LOGO (Increased to w-20 h-20 / md:w-28 md:h-28) */}
      <div className="relative w-24 h-24 md:w-28 md:h-28 bg-white/5 border border-old-gold/20 p-1 rounded-sm transition-all group-hover:border-old-gold shadow-[0_0_40px_rgba(209,171,67,0.1)]">
        <Image 
          src={BRAND_DATA.logo} 
          alt="Mintrix Logo" 
          fill 
          className="object-contain p-1" 
        />
      </div>
      
      <div className="flex flex-col leading-none">
        <span className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter drop-shadow-2xl">
          {BRAND_DATA.name}
        </span>
        <span className="text-old-gold text-[10px] md:text-[12px] font-bold uppercase tracking-widest mt-2 md:mt-3 opacity-90">
          {BRAND_DATA.type}
        </span>
      </div>
    </Link>
  );
}

function FooterSocials() {
  const socials = [
    { href: "https://www.facebook.com/mintrixmaintenance/", icon: Facebook },
    { href: "https://www.instagram.com/mintrixmaintenance/", icon: Instagram },
    { href: "https://www.linkedin.com/company/mintrixmaintenance/", icon: Linkedin },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social, i) => (
        <a 
          key={i} 
          href={social.href}
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-old-gold hover:text-heavy-metal transition-all duration-500 shadow-lg group"
        >
          <social.icon size={20} className="group-hover:scale-110 transition-transform" />
        </a>
      ))}
    </div>
  );
}

function FooterColumn({ title, links, showIcon = false }: { title: string, links: any[], showIcon?: boolean }) {
  return (
    <div className="space-y-6">
      <h4 className="text-old-gold text-[12px] font-bold uppercase tracking-widest">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name} className="flex items-center gap-2 group">
            <Link 
              href={link.href} 
              className="text-[14px] md:text-[15px] font-bold uppercase text-ecru-white/50 hover:text-old-gold hover:translate-x-1 transition-all duration-300"
            >
              {link.name}
            </Link>
            {showIcon && <ArrowUpRight size={14} className="text-old-gold opacity-0 group-hover:opacity-100 transition-all hidden md:block" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContactInfo() {
  return (
    <div className="space-y-6 text-ecru-white/50">
      <div className="flex gap-4 group cursor-pointer">
        <MapPin size={20} className="text-old-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
        <p className="text-[14px] font-bold uppercase leading-relaxed group-hover:text-ecru-white transition-colors">
          {BRAND_DATA.address}
        </p>
      </div>
      
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-old-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-old-gold"></span>
        </div>
        <p className="text-ecru-white font-black tracking-tighter text-2xl md:text-3xl group-hover:text-old-gold transition-colors">
          {BRAND_DATA.phone}
        </p>
      </div>

      <div className="flex gap-4 items-center group cursor-pointer">
        <Mail size={18} className="text-old-gold shrink-0 group-hover:scale-110 transition-transform" />
        <p className="text-[14px] md:text-[15px] font-bold group-hover:text-ecru-white transition-colors border-b border-transparent group-hover:border-old-gold truncate">
          {BRAND_DATA.email}
        </p>
      </div>
    </div>
  );
}

function FooterBottomBar() {
  return (
    <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
      <p className="text-[11px] font-bold uppercase tracking-widest text-white/20">
        © {new Date().getFullYear()} {BRAND_DATA.name} // Engineering Elite Performance.
      </p>
      <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/10">
        <Link href="/privacy" className="hover:text-old-gold transition-all">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-old-gold transition-all">Terms of Service</Link>
      </div>
    </div>
  );
}