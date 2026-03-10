"use client";
import Link from 'next/link';
import Image from 'next/image';
// Added Facebook, Instagram, and Linkedin to the lucide-react imports
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Facebook, Instagram, Linkedin } from 'lucide-react';
// Removed SOCIAL_LINKS from this import since we are handling it locally now
import { FOOTER_LINKS, BRAND_DATA } from '@/constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-heavy-metal text-ecru-white pt-24 pb-12 px-8 md:px-12 border-t border-old-gold/20 relative overflow-hidden">
      
      {/* Architectural Background Grid - Localized to Footer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#D1AB43 1px, transparent 1px), linear-gradient(90deg, #D1AB43 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Large Brand Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none translate-x-1/4">
        <span className="text-[18rem] font-black uppercase italic tracking-tighter leading-none">MTX</span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Identity: 4 Columns */}
          <div className="lg:col-span-4 space-y-10">
            <FooterBrand />
            <p className="text-dove-gray text-lg font-medium leading-relaxed max-w-sm border-l-2 border-old-gold pl-6">
              Engineering reliability for Downtown Dubai's most valuable residential and commercial assets.
            </p>
            <FooterSocials />
          </div>

          {/* Quick Links: 2 Columns */}
          <div className="lg:col-span-2">
            <FooterColumn title="Navigation" links={FOOTER_LINKS.navigation} />
          </div>

          {/* Expertise: 3 Columns */}
          <div className="lg:col-span-3">
            <FooterColumn title="Expertise" links={FOOTER_LINKS.expertise} showIcon />
          </div>

          {/* Operational Headquarters: 3 Columns */}
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-3">
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
    <Link href="/" className="flex items-center gap-6 group">
      <div className="relative w-14 h-14 bg-white/5 border border-old-gold/20 p-2 rounded-sm transition-all group-hover:border-old-gold shadow-xl">
        <Image src={BRAND_DATA.logo} alt="Mintrix Logo" fill className="object-contain p-1" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-3xl font-black uppercase italic tracking-tighter drop-shadow-2xl">
          {BRAND_DATA.name}
        </span>
        <span className="text-old-gold text-[10px] font-black tracking-[0.5em] uppercase opacity-80 mt-2">
          {BRAND_DATA.type}
        </span>
      </div>
    </Link>
  );
}

function FooterSocials() {
  // Hardcoded your specific links and assigned the correct icons
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
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Security best practice for opening new tabs
          aria-label="Social Link"
          className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-old-gold hover:text-heavy-metal transition-all duration-500 shadow-lg"
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
}

function FooterColumn({ title, links, showIcon = false }: { title: string, links: any[], showIcon?: boolean }) {
  return (
    <div className="space-y-8">
      <h4 className="text-old-gold text-[10px] font-black uppercase tracking-[0.5em] opacity-60">
        {title}
      </h4>
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.name} className="flex items-center gap-3 group">
            <Link 
              href={link.href} 
              className="text-[13px] font-black uppercase tracking-[0.2em] text-ecru-white/50 hover:text-old-gold hover:translate-x-2 transition-all duration-300"
            >
              {link.name}
            </Link>
            {showIcon && <ArrowUpRight size={14} className="text-old-gold opacity-0 group-hover:opacity-100 transition-all" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContactInfo() {
  return (
    <div className="space-y-8 text-ecru-white/50">
      <div className="flex gap-5 group cursor-pointer">
        <MapPin size={24} className="text-old-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
        <p className="text-[13px] font-bold uppercase tracking-widest leading-relaxed group-hover:text-ecru-white transition-colors">
          {BRAND_DATA.address}
        </p>
      </div>
      
      <div className="flex items-center gap-5 group cursor-pointer">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-old-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-old-gold"></span>
        </div>
        <p className="text-ecru-white font-black tracking-tighter text-2xl group-hover:text-old-gold transition-colors">
          {BRAND_DATA.phone}
        </p>
      </div>

      <div className="flex gap-5 items-center group cursor-pointer">
        <Mail size={20} className="text-old-gold shrink-0 group-hover:scale-110 transition-transform" />
        <p className="lowercase text-[14px] font-black tracking-widest group-hover:text-ecru-white transition-colors border-b border-white/5 group-hover:border-old-gold">
          {BRAND_DATA.email}
        </p>
      </div>
    </div>
  );
}

function FooterBottomBar() {
  return (
    <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">
        © {new Date().getFullYear()} {BRAND_DATA.name} // Operational Excellence.
      </p>
      <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white/10">
        <Link href="/privacy" className="hover:text-old-gold transition-all">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-old-gold transition-all">Terms of Service</Link>
      </div>
    </div>
  );
}