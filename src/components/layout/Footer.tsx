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
        <span className="text-[12rem] md:text-[18rem] font-black uppercase italic tracking-tighter leading-none">MTX</span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* --- MAIN CONTENT GRID --- */}
        {/* Changed from pure grid to flex-col on mobile, grid on desktop for better spacing control */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
          
          {/* Brand Identity: 4 Columns */}
          <div className="lg:col-span-4 space-y-8 md:space-y-10">
            <FooterBrand />
            <p className="text-dove-gray text-base md:text-lg font-medium leading-relaxed max-w-sm border-l-2 border-old-gold pl-5 md:pl-6">
              Engineering reliability for Downtown Dubai's most valuable residential and commercial assets.
            </p>
            <FooterSocials />
          </div>

          {/* --- MOBILE OPTIMIZATION: Grouped Links --- */}
          {/* On mobile, these sit side-by-side (grid-cols-2) to cut scroll height in half */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 md:gap-8 border-y border-white/5 py-8 my-4 lg:border-none lg:py-0 lg:my-0">
            <FooterColumn title="Navigation" links={FOOTER_LINKS.navigation} />
            <FooterColumn title="Expertise" links={FOOTER_LINKS.expertise} showIcon />
          </div>

          {/* Operational Headquarters: 3 Columns */}
          <div className="lg:col-span-3 space-y-8 md:space-y-10">
            <div className="space-y-2 md:space-y-3">
              <h4 className="text-old-gold text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-2">
                <ShieldCheck size={14} /> Operational HQ
              </h4>
              <p className="text-[10px] text-white/40 font-black uppercase tracking-widest italic">
                Business Bay // Dubai, UAE
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
    <Link href="/" className="flex items-center gap-4 md:gap-6 group inline-flex">
      <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-old-gold/20 p-2 rounded-sm transition-all group-hover:border-old-gold shadow-xl">
        <Image src={BRAND_DATA.logo} alt="Mintrix Logo" fill className="object-contain p-1" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter drop-shadow-2xl">
          {BRAND_DATA.name}
        </span>
        <span className="text-old-gold text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase opacity-80 mt-1 md:mt-2">
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
    <div className="flex gap-3 md:gap-4">
      {socials.map((social, i) => (
        <a 
          key={i} 
          href={social.href}
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Social Link"
          className="w-10 h-10 md:w-11 md:h-11 border border-white/10 flex items-center justify-center hover:bg-old-gold hover:text-heavy-metal transition-all duration-500 shadow-lg"
        >
          <social.icon size={18} />
        </a>
      ))}
    </div>
  );
}

// Consistent heading styling maintained per your design rules
function FooterColumn({ title, links, showIcon = false }: { title: string, links: any[], showIcon?: boolean }) {
  return (
    <div className="space-y-6 md:space-y-8">
      <h4 className="text-old-gold text-[10px] font-black uppercase tracking-[0.5em] opacity-60">
        {title}
      </h4>
      <ul className="space-y-4 md:space-y-5">
        {links.map((link) => (
          <li key={link.name} className="flex items-center gap-2 md:gap-3 group">
            <Link 
              href={link.href} 
              className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] text-ecru-white/50 hover:text-old-gold hover:translate-x-2 transition-all duration-300"
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
    <div className="space-y-6 md:space-y-8 text-ecru-white/50">
      <div className="flex gap-4 md:gap-5 group cursor-pointer">
        <MapPin size={20} className="text-old-gold shrink-0 mt-0.5 md:mt-1 group-hover:scale-110 transition-transform" />
        <p className="text-[11px] md:text-[13px] font-bold uppercase tracking-widest leading-relaxed group-hover:text-ecru-white transition-colors">
          {BRAND_DATA.address}
        </p>
      </div>
      
      <div className="flex items-center gap-4 md:gap-5 group cursor-pointer">
        <div className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-old-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-old-gold"></span>
        </div>
        <p className="text-ecru-white font-black tracking-tighter text-xl md:text-2xl group-hover:text-old-gold transition-colors">
          {BRAND_DATA.phone}
        </p>
      </div>

      <div className="flex gap-4 md:gap-5 items-center group cursor-pointer">
        <Mail size={18} className="text-old-gold shrink-0 group-hover:scale-110 transition-transform" />
        <p className="lowercase text-[12px] md:text-[14px] font-black tracking-widest group-hover:text-ecru-white transition-colors border-b border-transparent group-hover:border-old-gold truncate">
          {BRAND_DATA.email}
        </p>
      </div>
    </div>
  );
}

function FooterBottomBar() {
  return (
    <div className="pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/20">
        © {new Date().getFullYear()} {BRAND_DATA.name} // Operational Excellence.
      </p>
      <div className="flex gap-8 md:gap-12 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/10">
        <Link href="/privacy" className="hover:text-old-gold transition-all">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-old-gold transition-all">Terms of Service</Link>
      </div>
    </div>
  );
}