// src/components/layout/Navbar.tsx
"use client"; // Required for state management in the dropdown
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceCategories = [
    {
      title: "Facility & MEP",
      links: ["AC Service", "Electrical", "Plumbing", "Carpentry"]
    },
    {
      title: "IT & Systems",
      links: ["Software Maintenance", "Data Backup", "Virus Protection", "Networking"]
    },
    {
      title: "Interior & Fit-Out",
      links: ["Furniture Supply", "Interior Fit-Out", "Automation", "MEP Design"]
    }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-heavy-metal/95 backdrop-blur-md border-b border-old-gold/20 px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-sm border border-old-gold/10">
            <Image 
              src="/mintrix-maintain-logo.jpg" 
              alt="Mintrix Maintenance Logo" 
              fill
              className="object-contain p-1 group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-ecru-white font-black text-xl tracking-tighter">MINTRIX</span>
            <span className="text-old-gold text-[10px] font-bold tracking-[0.2em] uppercase">Maintenance</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-ecru-white/70 font-semibold text-xs tracking-widest uppercase">
          
          {/* Services Dropdown */}
          <div 
            className="relative cursor-pointer group py-4"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 group-hover:text-old-gold transition-colors">
              Services <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu Overlay */}
            {isDropdownOpen && (
              <div className="absolute top-full -left-20 w-[600px] bg-heavy-metal border border-old-gold/20 shadow-2xl p-8 grid grid-cols-3 gap-8 animate-fade-in">
                {serviceCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-old-gold text-[10px] font-black border-b border-old-gold/20 pb-2">{cat.title}</h4>
                    <ul className="space-y-2">
                      {cat.links.map((link, i) => (
                        <li key={i}>
                          <Link href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-ecru-white/60 hover:text-ecru-white hover:translate-x-1 transition-all block normal-case font-medium text-sm">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="#about" className="hover:text-old-gold transition-colors">About Us</Link>
          <Link href="#it-support" className="hover:text-old-gold transition-colors">IT Support</Link>
        </div>

        {/* Contact CTA */}
        <div className="flex items-center gap-6">
          <a href="tel:+971500000000" className="hidden lg:flex items-center gap-2 text-old-gold font-bold text-sm">
            <span className="w-2 h-2 bg-old-gold rounded-full animate-pulse"></span>
            +971 50 000 0000
          </a>
          <button className="bg-old-gold text-heavy-metal px-6 py-2.5 text-xs font-black rounded-sm hover:bg-ecru-white transition-all">
            GET A QUOTE
          </button>
        </div>
      </div>
    </nav>
  );
}