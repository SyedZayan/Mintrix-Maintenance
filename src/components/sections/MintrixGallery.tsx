'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
// Removed Maximize2 from the import here
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    src: '/gallery/7.jpeg', 
    title: 'HVAC Overhaul',
    category: 'AC Maintenance',
  },
  {
    id: 2,
    src: '/gallery/3.jpeg',
    title: 'Emergency Pipe Repair',
    category: 'Plumbing',
  },
  {
    id: 3,
    src: '/gallery/8.jpeg',
    title: 'Luxury Villa Upgrade',
    category: 'Renovation',
  },
  {
    id: 4,
    src: '/gallery/10.jpeg',
    title: 'Concrete & Masonry Works', 
    category: 'Civil Works',           
  },
  {
    id: 5,
    src: '/gallery/5.jpeg',
    title: 'Custom A/C Installation',
    category: 'Handyman',
  },
  {
    id: 6,
    src: '/gallery/4.jpeg',
    title: 'Complete Pipe Fitting',
    category: 'Plumbing',
  },
];

export default function MintrixGallery() {
  const [activeIndex, setActiveIndex] = useState(2); 
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <section className="py-8 lg:py-10 bg-[#f9f8ee] text-heavy-metal relative overflow-hidden border-t border-gray-200 flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <h2 className="text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2">
            Mintrix Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-none mb-2 md:mb-3">
            Excellence In <span className="text-old-gold">Action.</span>
          </h3>
          <p className="text-gray-600 text-xs md:text-sm leading-snug max-w-2xl mx-auto">
            Take a look at our recent projects. From complex commercial AC overhauls to detailed residential renovations, see how Mintrix Maintenance transforms spaces across Dubai.
          </p>
        </div>

        {/* Gallery Interactive Area (Carousel + Floating Buttons) */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* FLOATING LEFT BUTTON */}
          <button 
            onClick={prevSlide}
            className="absolute z-50 left-0 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-heavy-metal/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-ecru-white hover:bg-old-gold hover:text-heavy-metal hover:border-old-gold transition-all duration-300 shadow-2xl hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 pr-0.5" />
          </button>

          {/* 3D Carousel Container */}
          <div className="relative h-[320px] md:h-[380px] lg:h-[420px] max-h-[50vh] w-full flex items-center justify-center perspective-[1000px]">
            {galleryItems.map((item, index) => {
              let offset = index - activeIndex;
              
              if (offset < -2) offset += galleryItems.length;
              if (offset > 2) offset -= galleryItems.length;

              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);
              const isVisible = absOffset <= 2;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute top-0 w-[70vw] sm:w-[320px] md:w-[380px] lg:w-[450px] h-full rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                    ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                    ${!isCenter && 'cursor-pointer hover:brightness-110'}
                  `}
                  style={{
                    transform: `
                      translateX(${offset * 65}%) 
                      scale(${1 - absOffset * 0.15}) 
                      translateZ(${-absOffset * 100}px)
                    `,
                    zIndex: 20 - absOffset,
                    boxShadow: isCenter 
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' 
                      : '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
                    filter: isCenter ? 'brightness(1)' : 'brightness(0.6)'
                  }}
                >
                  <div className="absolute inset-0 bg-heavy-metal/10" />
                  
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={isCenter}
                  />

                  <div className={`absolute inset-0 bg-gradient-to-t from-heavy-metal via-heavy-metal/40 to-transparent transition-opacity duration-500 ${isCenter ? 'opacity-90' : 'opacity-0'}`} />

                  <div className={`absolute bottom-0 left-0 right-0 p-5 md:p-6 transition-all duration-500 delay-100 transform ${isCenter ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <span className="bg-old-gold text-heavy-metal font-black text-[9px] md:text-[10px] uppercase tracking-widest py-1 px-3 rounded-full inline-block mb-2 shadow-lg">
                      {item.category}
                    </span>
                    <h4 className="text-ecru-white text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tight mb-1">
                      {item.title}
                    </h4>
                    {/* The Maximize2 button div was completely removed from right here */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FLOATING RIGHT BUTTON */}
          <button 
            onClick={nextSlide}
            className="absolute z-50 right-0 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-heavy-metal/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-ecru-white hover:bg-old-gold hover:text-heavy-metal hover:border-old-gold transition-all duration-300 shadow-2xl hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 pl-0.5" />
          </button>
        </div>

        {/* Pagination Dots (Kept clean at the bottom) */}
        <div className="flex items-center justify-center gap-2 mt-6 lg:mt-8">
          {galleryItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                activeIndex === idx 
                  ? 'w-6 h-1.5 md:w-8 md:h-2 bg-old-gold shadow-[0_0_10px_rgba(218,165,32,0.5)]' 
                  : 'w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}