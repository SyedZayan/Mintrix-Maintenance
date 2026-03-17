"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, ShieldCheck, Zap, X, Menu, Activity } from 'lucide-react';
import { services } from '@/lib/services-data';
import { TICKER_NEWS } from '@/lib/ticker-data';
import { NAV_LINKS, SERVICE_CATEGORIES, BRAND_DATA } from '@/constants/navigation';

// --- NEWS TICKER: REFINED STANDARD CASING ---
function NewsTicker() {
  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5 h-9 flex items-center overflow-hidden">
      {/* FIXED LABEL: Removed uppercase, tightened tracking */}
      <div className="relative z-10 bg-black h-full flex items-center px-6 border-r border-white/10">
        <span className="text-old-gold font-bold text-[11px] tracking-tight flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-old-gold animate-pulse" />
          News:
        </span>
      </div>

      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap items-center"
      >
        {[...TICKER_NEWS, ...TICKER_NEWS].map((news, idx) => (
          <div 
            key={idx} 
            className="flex items-center text-[12px] font-medium tracking-tight text-ecru-white/70 px-8"
          >
            <span className="hover:text-old-gold transition-colors cursor-default">
              "{news}"
            </span>
            {/* The Separator Pipe */}
            <span className="ml-12 text-old-gold/20 font-light">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

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

      <nav className="fixed top-9 left-0 w-full z-[80] px-6 md:px-12 py-4 bg-heavy-metal/95 backdrop-blur-2xl border-b border-old-gold/10">
        <div className="max-w-[1536px] mx-auto flex justify-between items-center">
          <LogoSection />

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-10 text-ecru-white font-black text-[12px] tracking-[0.25em] uppercase">
              
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

              {NAV_LINKS.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-old-gold transition-all duration-300 relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-old-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-white/10 mx-4" />
            <Hotline link={BRAND_DATA.phone} />
            <VipCTA />
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-old-gold relative z-[100]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && <MobileSidebar setIsMobileMenuOpen={setIsMobileMenuOpen} />}
      </AnimatePresence>
    </>
  );
}

/* --- HELPER COMPONENTS REMAIN SAME --- */

function LogoSection() {
  return (
    <Link href="/" className="flex items-center gap-4 group relative z-[100]">
      <div className="relative w-10 h-10 overflow-hidden rounded-sm border border-old-gold/20 bg-white/5 p-1 group-hover:border-old-gold transition-all">
        <Image src={BRAND_DATA.logo} alt="Mintrix" fill className="object-contain p-1" priority />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-ecru-white font-black text-xl tracking-tighter uppercase italic">{BRAND_DATA.name}</span>
        <span className="text-old-gold text-[8px] font-black tracking-[0.4em] uppercase mt-1">{BRAND_DATA.type}</span>
      </div>
    </Link>
  );
}

function Hotline({ link }: { link: string }) {
  return (
    <a href={`tel:${link.replace(/\s/g, '')}`} className="flex items-center gap-4 text-ecru-white hover:text-old-gold transition-all">
      <div className="flex flex-col items-end">
        <span className="text-[9px] font-black text-old-gold uppercase tracking-[0.2em] mb-1">Emergency Dispatch</span>
        <div className="flex items-center gap-3">
          <Activity size={14} className="text-old-gold animate-pulse" />
          <span className="text-[15px] font-black tracking-tight">{link}</span>
        </div>
      </div>
    </a>
  );
}

function VipCTA() {
  return (
    <Link href="/contact" className="ml-4">
      <button className="relative group overflow-hidden bg-old-gold text-heavy-metal px-8 py-4 text-[11px] font-black rounded-sm uppercase tracking-[0.2em] shadow-xl">
        <span className="relative z-10 flex items-center gap-2">
          Technical Audit <ShieldCheck size={16} />
        </span>
        <div className="absolute inset-0 bg-ecru-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </button>
    </Link>
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
          <div key={idx} className="space-y-10">
            <Link 
              href={`/services#${sectionId}`}
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center gap-5 border-b border-old-gold/20 pb-6 group/cat"
            >
              <span className="text-old-gold group-hover/cat:scale-110 transition-transform">
                {cat.icon === 'logo' ? (
                  <Image src={BRAND_DATA.logo} alt="Mintrix" width={20} height={20} className="grayscale brightness-200" />
                ) : (
                  <cat.icon size={20} />
                )}
              </span>
              <h4 className="text-old-gold text-[11px] font-black tracking-[0.4em] uppercase group-hover:text-ecru-white transition-colors">
                {cat.title}
              </h4>
            </Link>
            <ul className="space-y-4">
              {services.filter(s => s.category === cat.title).map(service => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-ecru-white/50 hover:text-old-gold hover:translate-x-3 transition-all block font-black text-[16px] italic uppercase tracking-tighter"
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
      <div className="space-y-8 mb-12 border-b border-white/5 pb-12">
        <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-4xl font-black uppercase italic tracking-tighter text-old-gold">
          Services Hub
        </Link>
        {NAV_LINKS.map((link) => (
          <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-4xl font-black uppercase italic tracking-tighter text-ecru-white">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="space-y-10">
        {SERVICE_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <p className="text-[10px] font-black text-old-gold/40 uppercase tracking-[0.3em]">{cat.title}</p>
            <div className="flex flex-col gap-4 pl-4 border-l border-old-gold/20">
              {services.filter(s => s.category === cat.title).map(service => (
                <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-black text-ecru-white italic uppercase tracking-tighter">
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