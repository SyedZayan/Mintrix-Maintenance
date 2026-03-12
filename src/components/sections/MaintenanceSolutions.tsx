'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'handyman',
    tabLabel: 'Handyman Services',
    title: 'Professional Handyman Services Dubai Residents Trust',
    intro: 'Finding a reliable technician for small repair jobs can sometimes be difficult. That’s why many homeowners and businesses rely on Mintrix Maintenance for handyman services in Dubai.',
    outro: 'Instead of calling multiple contractors, you can simply contact our team and we’ll handle everything in one visit.',
    bullets: [
      'Fixing damaged fixtures',
      'Installing lights and switches',
      'Repairing door alignment issues',
      'Minor plumbing adjustments',
      'Wall patchwork and touch-ups'
    ],
    image: '/3.jpg'
  },
  {
    id: 'home',
    tabLabel: 'Home Maintenance',
    title: 'Keep Your Property in Perfect Condition',
    intro: 'Regular home maintenance in Dubai is essential for keeping your property safe and comfortable, especially in a city where AC systems, plumbing, and electrical systems are heavily used. Our maintenance team provides reliable services.',
    outro: 'By scheduling regular maintenance, you can extend the life of your home’s systems and avoid sudden breakdowns.',
    bullets: [
      'Routine AC servicing and filter cleaning',
      'Bathroom and kitchen plumbing fixes',
      'Electrical repairs and lighting installation',
      'Surface repairs and sealing work',
      'Preventive maintenance checks'
    ],
    image: '/our-team.jpg'
  },
  {
    id: 'apartment',
    tabLabel: 'Apartment Care',
    title: 'Apartment Maintenance Dubai',
    intro: 'Apartment living in Dubai often requires quick repair solutions. From AC problems during hot weather to water leaks and electrical faults, small issues can quickly affect comfort. Our services are designed to provide fast and practical solutions.',
    outro: 'Our technicians arrive prepared to fix most issues on the spot so you can get back to your normal routine without delays.',
    bullets: [
      'AC cooling issues and servicing',
      'Plumbing leaks and blocked drains',
      'Electrical switch and socket repairs',
      'Door and fixture adjustments',
      'Minor repairs and touch-ups'
    ],
    image: '/7.jpg'
  },
  {
    id: 'villa',
    tabLabel: 'Villa Maintenance',
    title: 'Comprehensive Villa Maintenance',
    intro: 'Owning a villa means maintaining a larger property with multiple systems that require regular care. Our villa maintenance services in Dubai help homeowners keep their properties in excellent condition.',
    outro: 'Our team works carefully to ensure every job is completed professionally and efficiently.',
    bullets: [
      'AC servicing and troubleshooting',
      'Plumbing system repairs',
      'Electrical inspections and installations',
      'Minor renovation and upgrades',
      'Surface repair and sealing work'
    ],
    image: '/8.jpg'
  },
  {
    id: 'building',
    tabLabel: 'Building Services',
    title: 'Building Maintenance Services Dubai',
    intro: 'Property managers and building owners often need reliable technicians for ongoing repair and maintenance work. Our building maintenance services in Dubai provide flexible solutions for residential buildings, offices, and commercial spaces.',
    outro: 'With a skilled maintenance team available, building managers can ensure smooth operations and safe environments for residents and tenants.',
    bullets: [
      'Routine AC inspection and servicing',
      'Plumbing system maintenance',
      'Electrical safety checks',
      'Minor civil and repair work',
      'CCTV installation and troubleshooting'
    ],
    image: '/cctv1.jpg'
  },
  {
    id: 'renovation',
    tabLabel: 'Minor Renovations',
    title: 'Minor Renovation & Improvement Works',
    intro: 'Sometimes a space simply needs small improvements to function better. Our technicians also handle minor renovation and modification work for homes, offices, and shops.',
    outro: 'These improvements help enhance functionality and give your property a refreshed look.',
    bullets: [
      'Partition wall installation',
      'Kitchen cabinet adjustments',
      'Countertop replacement',
      'Flooring replacement',
      'Ceiling and lighting modification'
    ],
    image: '/6.jpg'
  }
];

export default function MaintenanceSolutions() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      // Adjusted scroll amount for mobile vs desktop
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.9 : 450;
      const actualScroll = direction === 'left' ? -scrollAmount : scrollAmount;
      sliderRef.current.scrollBy({ left: actualScroll, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-heavy-metal text-ecru-white relative border-t border-white/10 overflow-hidden">
      
      {/* Hide scrollbar with inline styles for guaranteed cross-browser support */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header Section with Top Navigation */}
        <div className="flex flex-row items-end justify-between mb-10 md:mb-16 gap-4">
          
          <div className="flex-1">
            <h2 className="text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3 md:mb-4">
              Comprehensive Care
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none">
              Specialized <br className="md:hidden" />
              <span className="text-old-gold">Solutions.</span>
            </h3>
          </div>
          
          {/* Unified Navigation Arrows (Visible on Mobile & Desktop) */}
          <div className="flex items-center gap-2 md:gap-4 pb-1">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-ecru-white hover:bg-old-gold hover:text-heavy-metal hover:border-old-gold transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-ecru-white hover:bg-old-gold hover:text-heavy-metal hover:border-old-gold transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* The Slider Container */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scroll pl-6 md:pl-12 pr-6 md:pr-12 gap-6 md:gap-8 pb-8"
      >
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="w-[85vw] md:w-[600px] flex-shrink-0 snap-center flex flex-col group"
          >
            {/* Top Half: Image */}
            <div className="relative h-56 md:h-80 w-full rounded-t-3xl overflow-hidden border-t border-x border-white/10">
              <Image 
                src={cat.image} 
                alt={cat.tabLabel}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
                <span className="bg-old-gold text-heavy-metal font-black text-[10px] md:text-xs uppercase tracking-widest py-1.5 px-3 md:py-2 md:px-4 rounded-full shadow-lg">
                  {cat.tabLabel}
                </span>
              </div>
            </div>

            {/* Bottom Half: Content */}
            <div className="bg-white/5 border-b border-x border-white/10 rounded-b-3xl p-5 md:p-8 flex-grow flex flex-col justify-between transition-colors duration-300 group-hover:bg-white/10">
              <div>
                <h4 className="text-lg md:text-2xl font-black uppercase tracking-tight text-ecru-white mb-3 md:mb-4">
                  {cat.title}
                </h4>
                <p className="text-ecru-white/70 text-xs md:text-base leading-relaxed mb-5 md:mb-6">
                  {cat.intro}
                </p>
                
                <div className="mb-6 md:mb-8">
                  <h5 className="text-old-gold font-bold text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4">
                    Includes:
                  </h5>
                  <ul className="grid grid-cols-1 gap-y-2 md:gap-y-3">
                    {cat.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle2 size={16} className="text-old-gold flex-shrink-0 mt-0.5 md:mt-1 w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span className="text-ecru-white/90 text-[11px] md:text-sm font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-ecru-white/80 text-[11px] md:text-sm font-medium border-l-2 border-old-gold pl-3 md:pl-4 italic">
                "{cat.outro}"
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}