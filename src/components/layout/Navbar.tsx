"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, X, Menu, Activity, AlertTriangle } from 'lucide-react';
import { services } from '@/lib/services-data';
import { TICKER_NEWS } from '@/lib/ticker-data';
import { SERVICE_CATEGORIES, BRAND_DATA } from '@/constants/navigation';

const SITE_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Careers', href: '/careers' },
  { name: 'Booking', href: '/booking' }, 
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      <NewsTicker />
      <div className="fixed top-9 z-[85] w-full h-[2px] bg-gradient-to-r from-old-gold via-old-gold/20 to-old-gold" />

      <nav className="fixed top-9 left-0 w-full z-[80] px-6 md:px-12 py-3 bg-heavy-metal/95 backdrop-blur-2xl border-b border-old-gold/10">
        <div className="max-w-[1536px] mx-auto flex justify-between items-center">
          
          <LogoSection />

          <DesktopNav 
            isDropdownOpen={isDropdownOpen} 
            setIsDropdownOpen={setIsDropdownOpen} 
          />

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-old-gold relative z-[100]"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && <MobileSidebar setIsMobileMenuOpen={setIsMobileMenuOpen} />}
      </AnimatePresence>
    </>
  );
}

function LogoSection() {
  return (
    <Link href="/" className="flex items-center gap-4 group relative z-[100]">
      {/* TACTICAL LOGO FRAME (No internal spacing) */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
        
        {/* Logo Image - No padding to avoid extra spacing */}
        <div className="relative w-full h-full p-1.5">
           <Image 
            src={BRAND_DATA.logo} 
            alt="Mintrix Maintenance" 
            fill 
            className="object-contain" 
            priority 
          />
        </div>

        {/* Tactical Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-old-gold" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-old-gold" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-old-gold" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-old-gold" />
      </div>
      
      <div className="flex flex-col leading-none">
        <span className="text-ecru-white font-black text-xl md:text-2xl uppercase italic tracking-tighter">
          {BRAND_DATA.name}
        </span>
        <span className="text-old-gold text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] mt-1">
          {BRAND_DATA.type}
        </span>
      </div>
    </Link>
  );
}

function DesktopNav({ isDropdownOpen, setIsDropdownOpen }: any) {
  return (
    <div className="hidden lg:flex items-center gap-10">
      <div className="flex items-center gap-8 text-ecru-white font-bold text-[14px] uppercase">
        <div 
          className="relative cursor-pointer group py-2"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link 
            href="/services"
            className={`flex items-center gap-2 transition-colors duration-300 ${isDropdownOpen ? 'text-old-gold' : 'hover:text-old-gold'}`}
          >
            Expertise <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </Link>
          <AnimatePresence>
            {isDropdownOpen && <ServiceMegaMenu setIsDropdownOpen={setIsDropdownOpen} />}
          </AnimatePresence>
        </div>

        {SITE_LINKS.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={`hover:text-old-gold transition-all duration-300 relative group ${link.name === 'Booking' ? 'text-old-gold' : ''}`}
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-old-gold transition-all duration-500 group-hover:w-full" />
          </Link>
        ))}
      </div>

      <div className="h-6 w-[1px] bg-white/10 mx-2" />
      <Hotline link={BRAND_DATA.phone} />
      <VipCTA />
    </div>
  );
}

function Hotline({ link }: { link: string }) {
  return (
    <a href={`tel:${link.replace(/\s/g, '')}`} className="flex items-center gap-4 text-ecru-white hover:text-old-gold transition-all">
      <div className="flex flex-col items-end">
        <span className="text-[10px] font-bold text-old-gold uppercase mb-1">Emergency Dispatch</span>
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-old-gold animate-pulse" />
          <span className="text-[15px] font-bold">{link}</span>
        </div>
      </div>
    </a>
  );
}

function VipCTA() {
  return (
    <Link href="/contact" className="ml-2">
      <button className="relative group overflow-hidden bg-old-gold text-heavy-metal px-6 py-3 text-[13px] font-bold rounded-sm uppercase shadow-xl">
        <span className="relative z-10 flex items-center gap-2">
          Technical Audit <ShieldCheck size={16} />
        </span>
        <div className="absolute inset-0 bg-ecru-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </button>
    </Link>
  );
}

function NewsTicker() {
  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-xl border-b border-white/5 h-10 flex items-center overflow-hidden">
      <div className="relative z-10 bg-black h-full flex items-center px-6 border-r border-white/10 shadow-[5px_0_15px_rgba(0,0,0,0.5)]">
<span className="text-red-500 font-bold text-[12px] flex items-center gap-2 uppercase">          <div className="w-1.5 h-1.5 rounded-full bg-old-gold animate-pulse" />
          News:
        </span>
      </div>

      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap items-center"
      >
        {[...TICKER_NEWS, ...TICKER_NEWS].map((news, idx) => (
          <div key={idx} className="flex items-center gap-4 px-10">
            <AlertTriangle size={16} className="text-yellow-500 fill-yellow-500/20 shrink-0" />
            <span className="text-[14px] font-bold uppercase italic text-ecru-white/80 hover:text-old-gold transition-colors cursor-default">
              {news}
            </span>
            <span className="ml-10 text-red/10 font-thin">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function ServiceMegaMenu({ setIsDropdownOpen }: { setIsDropdownOpen: (val: boolean) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      className="absolute top-full -left-64 w-[1000px] bg-heavy-metal/98 backdrop-blur-3xl border border-white/10 p-16 grid grid-cols-3 gap-16 shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
    >
      {SERVICE_CATEGORIES.map((cat, idx) => {
        const sectionId = cat.title.toLowerCase().replace(/\s+/g, '-');
        return (
          <div key={idx} className="space-y-8">
            <Link 
              href={`/services#${sectionId}`}
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center gap-4 border-b border-old-gold/20 pb-4 group/cat"
            >
              <span className="text-old-gold group-hover/cat:scale-110 transition-transform">
                {cat.icon === 'logo' ? (
                  <Image src={BRAND_DATA.logo} alt="Mintrix" width={24} height={24} className="grayscale brightness-200" />
                ) : (
                  <cat.icon size={24} />
                )}
              </span>
              <h4 className="text-old-gold text-[13px] font-bold uppercase group-hover:text-ecru-white transition-colors">
                {cat.title}
              </h4>
            </Link>
            <ul className="space-y-4">
              {services.filter(s => s.category === cat.title).map(service => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-ecru-white/60 hover:text-old-gold hover:translate-x-2 transition-all block font-bold text-[15px] uppercase"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </motion.div>
  );
}

function MobileSidebar({ setIsMobileMenuOpen }: { setIsMobileMenuOpen: (val: boolean) => void }) {
  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[95] bg-heavy-metal pt-40 px-8 pb-12 overflow-y-auto"
    >
      <div className="space-y-6 mb-12 border-b border-white/5 pb-12">
        <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-3xl font-bold uppercase text-old-gold">
          Expertise
        </Link>
        {SITE_LINKS.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`block text-3xl font-bold uppercase ${link.name === 'Booking' ? 'text-old-gold' : 'text-ecru-white'}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="space-y-10">
        {SERVICE_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <p className="text-[12px] font-bold text-old-gold/50 uppercase">{cat.title}</p>
            <div className="flex flex-col gap-4 pl-4 border-l border-old-gold/20">
              {services.filter(s => s.category === cat.title).map(service => (
                <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-ecru-white uppercase">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}