"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, ShieldCheck, Zap, X, Menu } from 'lucide-react';
import { services } from '@/lib/services-data';
import { NAV_LINKS, SERVICE_CATEGORIES, BRAND_DATA } from '@/constants/navigation';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed top-0 z-[80] w-full h-[3px] bg-gradient-to-r from-old-gold via-old-gold/20 to-old-gold" />

      <nav className={`fixed top-0 left-0 w-full z-[70] transition-all duration-500 px-6 md:px-12 
        ${scrolled || isMobileMenuOpen ? 'py-4 bg-heavy-metal/95 backdrop-blur-2xl border-b border-old-gold/10' : 'py-8 bg-transparent'}`}>
        
        <div className="max-w-[1536px] mx-auto flex justify-between items-center">
          <LogoSection />

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-10 text-ecru-white font-black text-[13px] tracking-[0.2em] uppercase">
              
              {/* FIXED: Services Hub Link */}
              <div 
                className="relative cursor-pointer group py-2"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link 
                  href="/services"
                  className={`flex items-center gap-2 transition-colors duration-300 ${isDropdownOpen ? 'text-old-gold' : 'hover:text-old-gold'}`}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
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
            className="lg:hidden p-2 text-old-gold relative z-[90]"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileSidebar 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* --- REFINED DYNAMIC MEGA MENU --- */

function ServiceMegaMenu({ setIsDropdownOpen }: { setIsDropdownOpen: (val: boolean) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      className="absolute top-full -left-64 w-[1000px] bg-heavy-metal/98 backdrop-blur-3xl border border-white/10 p-16 grid grid-cols-3 gap-16 shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
    >
      {SERVICE_CATEGORIES.map((cat, idx) => {
        // Generate section ID to match the Hub page sections
        const sectionId = cat.title.toLowerCase().replace(/\s+/g, '-');

        return (
          <div key={idx} className="space-y-10">
            {/* FIXED: Anchor link to Services Hub Section */}
            <Link 
              href={`/services#${sectionId}`}
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center gap-5 border-b border-old-gold/20 pb-6 group/cat cursor-pointer"
            >
              <span className="text-old-gold group-hover/cat:scale-110 transition-transform">
                {cat.icon === 'logo' ? (
                  <Image src={BRAND_DATA.logo} alt="Mintrix Logo" width={20} height={20} className="grayscale brightness-200" />
                ) : (
                  <cat.icon size={20} />
                )}
              </span>
              <h4 className="text-old-gold text-[11px] font-black tracking-[0.4em] uppercase leading-none group-hover/cat:text-ecru-white transition-colors">
                {cat.title}
              </h4>
            </Link>

            <ul className="space-y-5">
              {services
                .filter((s) => s.category === cat.title)
                .map((service) => (
                  <li key={service.slug}>
                    <Link 
                      href={`/services/${service.slug}`} 
                      onClick={() => setIsDropdownOpen(false)}
                      className="text-ecru-white/50 hover:text-old-gold hover:translate-x-3 transition-all block font-black text-[18px] italic uppercase tracking-tighter leading-none"
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

/* --- MOBILE SIDEBAR --- */

function MobileSidebar({ setIsMobileMenuOpen }: { setIsMobileMenuOpen: (val: boolean) => void }) {
  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[65] bg-heavy-metal pt-32 px-8 pb-12 overflow-y-auto"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="space-y-8 mb-12 border-b border-white/5 pb-12">
          {/* Mobile Link to main Services Hub */}
          <Link 
            href="/services" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-4xl font-black uppercase italic tracking-tighter text-old-gold"
          >
            Services Hub
          </Link>
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-4xl font-black uppercase italic tracking-tighter text-ecru-white hover:text-old-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="space-y-10 mb-12">
          <h4 className="text-old-gold text-[10px] font-black tracking-[0.4em] uppercase opacity-40">Specialized Expertise</h4>
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <Link 
                href={`/services#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[11px] font-black text-ecru-white/30 uppercase tracking-[0.2em] block"
              >
                {cat.title}
              </Link>
              <div className="flex flex-col gap-4 pl-4 border-l border-old-gold/20">
                {services.filter(s => s.category === cat.title).map(service => (
                  <Link 
                    key={service.slug} 
                    href={`/services/${service.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-black text-ecru-white hover:text-old-gold transition-colors tracking-tight uppercase italic"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-8">
           <a href={`tel:${BRAND_DATA.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-old-gold">
              <div className="w-12 h-12 bg-old-gold/10 border border-old-gold/20 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Emergency Dispatch</p>
                <p className="text-2xl font-black tracking-tighter text-ecru-white">{BRAND_DATA.phone}</p>
              </div>
           </a>
           <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <button className="w-full bg-old-gold text-heavy-metal py-6 font-black text-xs uppercase tracking-[0.4em] shadow-2xl">
                 Schedule Technical Audit
              </button>
           </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* --- LOGO, HOTLINE, VIPCTA REMAIN UNCHANGED --- */

function LogoSection() {
  return (
    <Link href="/" className="flex items-center gap-5 group relative z-[90]">
      <div className="relative w-12 h-12 overflow-hidden rounded-sm border border-old-gold/20 bg-white/5 p-1.5 group-hover:border-old-gold transition-all">
        <Image src={BRAND_DATA.logo} alt="Mintrix Logo" fill className="object-contain p-1" priority />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-ecru-white font-black text-2xl tracking-tighter uppercase italic">{BRAND_DATA.name}</span>
        <span className="text-old-gold text-[9px] font-black tracking-[0.4em] uppercase mt-1">{BRAND_DATA.type}</span>
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
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-old-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-old-gold"></span>
          </div>
          <span className="text-[16px] font-black tracking-tight">{link}</span>
        </div>
      </div>
    </a>
  );
}

function VipCTA() {
  return (
    <Link href="/contact" className="ml-6">
      <button className="relative group overflow-hidden bg-old-gold text-heavy-metal px-10 py-5 text-[12px] font-black rounded-sm uppercase tracking-[0.2em] shadow-xl shadow-old-gold/20">
        <span className="relative z-10 flex items-center gap-3">
          Schedule Technical Audit <ShieldCheck size={18} className="group-hover:rotate-12 transition-transform duration-300" />
        </span>
        <div className="absolute inset-0 bg-ecru-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </button>
    </Link>
  );
}