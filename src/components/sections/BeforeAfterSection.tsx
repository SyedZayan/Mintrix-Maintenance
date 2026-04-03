"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsLeftRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { BEFORE_AFTER_PROJECTS } from '@/lib/before-after-data';

// ==========================================
// OPTIMIZED 3D COVERFLOW SECTION
// ==========================================
export default function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = BEFORE_AFTER_PROJECTS.length;

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  const getCardState = (index: number) => {
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      return { x: '0%', scale: 1, zIndex: 30, opacity: 1, blur: 'blur(0px)' };
    } else if (diff === 1) {
      return { x: '50%', scale: 0.8, zIndex: 20, opacity: 0.8, blur: 'blur(3px)' };
    } else if (diff === total - 1) {
      return { x: '-50%', scale: 0.8, zIndex: 20, opacity: 0.8, blur: 'blur(3px)' };
    } else {
      return { x: '0%', scale: 0.6, zIndex: 10, opacity: 0, blur: 'blur(8px)' };
    }
  };

  return (
    // Updated section background to #f9f8ee
    <section className="py-12 md:py-16 bg-[#f9f8ee] relative overflow-hidden border-y border-heavy-metal/10">
      
      <div className="max-w-[1536px] mx-auto relative z-10 px-6 flex flex-col justify-center min-h-[calc(100vh-8rem)] max-h-[850px]">
        
        {/* Header Area */}
        <div className="text-center space-y-3 mb-6">
          <span className="text-old-gold font-bold text-[11px] uppercase tracking-[0.2em]">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-heavy-metal">
            Visual <span className="text-old-gold">Transformations.</span>
          </h2>
          <p className="text-heavy-metal/70 font-medium text-[13px] md:text-[14px] max-w-2xl mx-auto">
            Witness the precision and quality of our engineering teams. Drag the sliders below to compare the initial state with our finalized execution.
          </p>
        </div>

        {/* 3D CAROUSEL CONTAINER */}
        <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center">
          
          {BEFORE_AFTER_PROJECTS.map((project, index) => {
            const state = getCardState(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={project.id}
                animate={{
                  x: state.x,
                  scale: state.scale,
                  zIndex: state.zIndex,
                  opacity: state.opacity,
                  filter: state.blur,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                // Updated card background to #f9f8ee
                className={`absolute w-full max-w-3xl h-full rounded-[3rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-heavy-metal/5 bg-[#f9f8ee] transform-gpu ${isActive ? 'cursor-default ring-2 ring-old-gold/50' : 'cursor-pointer'}`}
                onClick={() => !isActive && setActiveIndex(index)}
              >
                {/* Updated inactive overlay to #f9f8ee/60 */}
                {!isActive && <div className="absolute inset-0 z-50 bg-[#f9f8ee]/60 backdrop-blur-[1px] hover:bg-transparent transition-colors duration-500" />}
                
                <ComparisonSlider 
                  before={project.beforeImg} 
                  after={project.afterImg} 
                  isActive={isActive} 
                  isPriority={index === 0} 
                />
              </motion.div>
            );
          })}

          {/* Arrows - Updated background to #f9f8ee/80 */}
          <button onClick={prevSlide} aria-label="Previous" className="absolute left-0 md:left-12 z-40 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-heavy-metal/10 bg-[#f9f8ee]/80 backdrop-blur-md text-heavy-metal/60 hover:text-old-gold hover:border-old-gold/50 transition-all shadow-lg hover:shadow-old-gold/20">
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          
          <button onClick={nextSlide} aria-label="Next" className="absolute right-0 md:right-12 z-40 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-heavy-metal/10 bg-[#f9f8ee]/80 backdrop-blur-md text-heavy-metal/60 hover:text-old-gold hover:border-old-gold/50 transition-all shadow-lg hover:shadow-old-gold/20">
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* ACTIVE PROJECT INFO */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 text-center max-w-2xl mx-auto min-h-[90px]"
          >
            <div className="inline-flex items-center justify-center gap-2 text-old-gold mb-2 w-full">
              {React.createElement(BEFORE_AFTER_PROJECTS[activeIndex].icon, { size: 14 })}
              <span className="text-[10px] font-bold uppercase tracking-widest text-heavy-metal/60">
                {BEFORE_AFTER_PROJECTS[activeIndex].category}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-heavy-metal leading-tight mb-2">
              {BEFORE_AFTER_PROJECTS[activeIndex].title}
            </h3>
            <p className="text-[13px] text-heavy-metal/70 font-medium leading-relaxed line-clamp-2">
              {BEFORE_AFTER_PROJECTS[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* DRAGGABLE ARC NAVIGATION */}
        <div className="mt-2 relative w-full max-w-md mx-auto h-16 flex items-center group">
           <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible text-heavy-metal/20 stroke-current">
              <path d="M 0 20 Q 50 -5 100 20" fill="none" strokeWidth="1" />
           </svg>

           <motion.div 
             animate={{
               left: `${(activeIndex / (total - 1)) * 100}%`,
               y: `${Math.sin((activeIndex / (total - 1)) * Math.PI) * -12}px` 
             }}
             transition={{ type: "spring", stiffness: 300, damping: 30 }}
             className="absolute top-[16px] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
           >
             {/* Updated badge background to #f9f8ee */}
             <div className="px-4 py-1.5 rounded-full border border-heavy-metal/10 bg-[#f9f8ee] shadow-md">
               <span className="text-[11px] font-bold text-heavy-metal">
                 0{activeIndex + 1} <span className="text-heavy-metal/40 mx-1">/</span> 0{total}
               </span>
             </div>
           </motion.div>

           <input 
             type="range" 
             min="0" 
             max={total - 1} 
             step="1"
             value={activeIndex} 
             onChange={(e) => setActiveIndex(Number(e.target.value))}
             aria-label="Navigate through projects"
             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 m-0 p-0"
           />
        </div>

      </div>
    </section>
  );
}

// --- OPTIMIZED TWO IMAGE SLIDER LOGIC ---
function ComparisonSlider({ before, after, isActive, isPriority }: { before: string, after: string, isActive: boolean, isPriority: boolean }) {
  const [sliderVal, setSliderVal] = useState(50);

  return (
    // Updated container background to #f9f8ee
    <div className="absolute inset-0 w-full h-full select-none overflow-hidden bg-[#f9f8ee]">
      
      {/* AFTER Image (Base Layer) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image 
          src={after} 
          alt="After Transformation" 
          fill
          priority={isPriority}
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 800px"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* BEFORE Image (Top Layer - Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `polygon(0 0, ${sliderVal}% 0, ${sliderVal}% 100%, 0 100%)` }}
      >
        <Image 
          src={before} 
          alt="Before Transformation" 
          fill
          priority={isPriority}
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 800px"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* Visual Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-old-gold shadow-[0_0_15px_rgba(209,171,67,0.5)] pointer-events-none z-10 transform-gpu"
        style={{ left: `${sliderVal}%`, transform: `translateX(-50%)` }}
      >
        {isActive && (
          // Updated knob background to #f9f8ee
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#f9f8ee] border-2 border-old-gold rounded-full flex items-center justify-center shadow-lg transition-transform">
            <ChevronsLeftRight className="text-old-gold w-4 h-4" />
          </div>
        )}
      </div>

      {/* INVISIBLE DRAG CONTROL */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderVal} 
        onChange={(e) => setSliderVal(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className={`absolute inset-0 w-full h-full opacity-0 z-20 m-0 p-0 ${isActive ? 'cursor-ew-resize pointer-events-auto' : 'pointer-events-none'}`}
      />
    </div>
  );
}