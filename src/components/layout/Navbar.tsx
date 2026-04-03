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
  { name: 'Blogs', href: '/blogs' },
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

      {/* Tightly controlled padding to maximize screen real estate on laptops */}
      <nav className="fixed top-9 left-0 w-full z-[80] px-4 lg:px-4 xl:px-12 py-3 bg-heavy-metal/95 backdrop-blur-2xl border-b border-old-gold/10">
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
    <Link href="/" className="flex items-center gap-2 lg:gap-3 xl:gap-4 group relative z-[100] shrink-0">
      <div className="relative w-10 h-10 md:w-14 md:h-14 lg:w-11 lg:h-11 xl:w-16 xl:h-16 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
        <div className="relative w-full h-full p-1 lg:p-1.5">
           <Image 
            src={BRAND_DATA.logo} 
            alt="Mintrix Maintenance" 
            fill 
            className="object-contain" 
            priority 
          />
        </div>
        <div className="absolute top-0 left-0 w-2 h-2 xl:w-3 xl:h-3 border-t-2 border-l-2 border-old-gold" />
        <div className="absolute top-0 right-0 w-2 h-2 xl:w-3 xl:h-3 border-t-2 border-r-2 border-old-gold" />
        <div className="absolute bottom-0 left-0 w-2 h-2 xl:w-3 xl:h-3 border-b-2 border-l-2 border-old-gold" />
        <div className="absolute bottom-0 right-0 w-2 h-2 xl:w-3 xl:h-3 border-b-2 border-r-2 border-old-gold" />
      </div>
      
      <div className="flex flex-col leading-none">
        <span className="text-ecru-white font-black text-lg lg:text-[16px] xl:text-2xl 2xl:text-3xl uppercase italic tracking-tighter">
          {BRAND_DATA.name}
        </span>
        <span className="text-old-gold text-[8px] lg:text-[7px] xl:text-[11px] font-bold uppercase tracking-[0.2em] mt-1">
          {BRAND_DATA.type}
        </span>
      </div>
    </Link>
  );
}

function DesktopNav({ isDropdownOpen, setIsDropdownOpen }: any) {
  return (
    // Highly compressed gaps for 'lg' to fit the extra 'Blog' link, expands naturally on 'xl'
    <div className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-6 2xl:gap-8 shrink-0">
      
      <div className="flex items-center gap-2 lg:gap-3 xl:gap-6 2xl:gap-8 text-ecru-white font-bold text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] uppercase tracking-widest">
        <div 
          className="relative cursor-pointer group py-2"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link 
            href="/services"
            className={`flex items-center gap-1 transition-colors duration-300 ${isDropdownOpen ? 'text-old-gold' : 'hover:text-old-gold'}`}
          >
            Expertise <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </Link>
          <AnimatePresence>
            {isDropdownOpen && <ServiceMegaMenu setIsDropdownOpen={setIsDropdownOpen} />}
          </AnimatePresence>
        </div>

        {SITE_LINKS.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={`hover:text-old-gold transition-all duration-300 relative group block ${link.name === 'Booking' ? 'text-old-gold' : ''}`}
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-old-gold transition-all duration-500 group-hover:w-full" />
          </Link>
        ))}
      </div>

      <div className="h-4 lg:h-5 xl:h-6 w-[1px] bg-white/10 mx-1 lg:mx-2" />
      <Hotline link={BRAND_DATA.phone} />
      <VipCTA />
    </div>
  );
}

function Hotline({ link }: { link: string }) {
  return (
    <a href={`tel:${link.replace(/\s/g, '')}`} className="flex items-center gap-1.5 lg:gap-2 xl:gap-4 text-ecru-white hover:text-old-gold transition-all shrink-0">
      <div className="flex flex-col items-end">
        <span className="text-[7px] lg:text-[8px] xl:text-[10px] font-bold text-old-gold uppercase mb-0.5">Emergency Dispatch</span>
        <div className="flex items-center gap-1 lg:gap-1.5 xl:gap-2">
          <Activity size={10} className="text-old-gold animate-pulse lg:w-[12px] lg:h-[12px] xl:w-[14px] xl:h-[14px]" />
          <span className="text-[11px] lg:text-[12px] xl:text-[15px] 2xl:text-[16px] font-bold tracking-tight">{link}</span>
        </div>
      </div>
    </a>
  );
}

function VipCTA() {
  return (
    <Link href="/contact" className="ml-1 shrink-0">
      <button className="relative group overflow-hidden bg-old-gold text-heavy-metal px-3 py-2 lg:px-3 lg:py-2 xl:px-6 xl:py-3 text-[8px] lg:text-[9px] xl:text-[12px] font-bold rounded-sm uppercase shadow-xl whitespace-nowrap">
        <span className="relative z-10 flex items-center gap-1 lg:gap-1.5 xl:gap-2">
          Technical Audit <ShieldCheck size={12} className="lg:w-[14px] lg:h-[14px] xl:w-[16px] xl:h-[16px]" />
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
        <span className="text-red-500 font-bold text-[12px] flex items-center gap-2 uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-old-gold animate-pulse" />
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
            <span className="ml-10 text-red-500/10 font-thin">|</span>
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
      className="absolute top-full -left-48 xl:-left-64 w-[850px] xl:w-[1000px] bg-heavy-metal/98 backdrop-blur-3xl border border-white/10 p-12 xl:p-16 grid grid-cols-3 gap-12 xl:gap-16 shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
    >
      {SERVICE_CATEGORIES.map((cat, idx) => {
        const sectionId = cat.title.toLowerCase().replace(/\s+/g, '-');
        return (
          <div key={idx} className="space-y-6 xl:space-y-8">
            <Link 
              href={`/services#${sectionId}`}
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center gap-4 border-b border-old-gold/20 pb-4 group/cat"
            >
              <span className="text-old-gold group-hover/cat:scale-110 transition-transform">
                {cat.icon === 'logo' ? (
                  <Image src={BRAND_DATA.logo} alt="Mintrix" width={24} height={24} className="grayscale brightness-200" />
                ) : (
                  <cat.icon size={20} className="xl:w-[24px] xl:h-[24px]" />
                )}
              </span>
              <h4 className="text-old-gold text-[12px] xl:text-[13px] font-bold uppercase group-hover:text-ecru-white transition-colors">
                {cat.title}
              </h4>
            </Link>
            <ul className="space-y-4">
              {services.filter(s => s.category === cat.title).map(service => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-ecru-white/60 hover:text-old-gold hover:translate-x-2 transition-all block font-bold text-[13px] xl:text-[15px] uppercase"
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
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[95] bg-heavy-metal px-8 pb-8 overflow-y-auto flex flex-col"
    >
      
      {/* MOBILE LOGO HEADER WITH CLOSE BUTTON */}
      <div className="pt-14 pb-12 flex justify-between items-center">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 flex items-center justify-center bg-white/5 border border-old-gold/20 rounded-sm">
             <div className="relative w-full h-full p-1.5">
               <Image src={BRAND_DATA.logo} alt="Mintrix Maintenance" fill className="object-contain" priority />
             </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-ecru-white font-black text-xl uppercase italic tracking-tighter">{BRAND_DATA.name}</span>
            <span className="text-old-gold text-[9px] font-bold uppercase tracking-[0.2em] mt-1">{BRAND_DATA.type}</span>
          </div>
        </Link>

        {/* Close Button added here */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-2 text-old-gold hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
      </div>

      {/* NAVIGATION LINKS */}
      <div className="flex-grow space-y-6 mb-12">
        {/* Expertise Dropdown Toggle */}
        <div className="border-b border-white/5 pb-6">
          <button 
            onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
            className="w-full flex items-center justify-between text-2xl font-bold uppercase text-old-gold focus:outline-none"
          >
            Expertise
            <ChevronDown size={24} className={`transition-transform duration-300 ${isExpertiseOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isExpertiseOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 pb-2 space-y-8 border-l-2 border-old-gold/20 pl-5 ml-2 mt-2">
                  {SERVICE_CATEGORIES.map((cat, idx) => (
                    <div key={idx} className="space-y-4">
                      <p className="text-[11px] font-bold text-old-gold/50 uppercase tracking-widest">{cat.title}</p>
                      <div className="flex flex-col gap-4">
                        {services.filter(s => s.category === cat.title).map(service => (
                          <Link 
                            key={service.slug} 
                            href={`/services/${service.slug}`} 
                            onClick={() => setIsMobileMenuOpen(false)} 
                            className="text-base font-bold text-ecru-white uppercase hover:text-old-gold transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Standard Links */}
        {SITE_LINKS.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`block text-2xl font-bold uppercase border-b border-white/5 pb-6 ${link.name === 'Booking' ? 'text-old-gold' : 'text-ecru-white'}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* MOBILE MENU FOOTER (Privacy / Terms) */}
      <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40">
        <Link href="/privacy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-old-gold transition-colors">Privacy</Link>
        <Link href="/terms" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-old-gold transition-colors">Terms</Link>
      </div>

    </motion.div>
  );
}