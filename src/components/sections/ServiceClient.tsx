// src/components/sections/ServiceClient.tsx
"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Clock, ShieldCheck, Zap, CheckCircle2, ArrowRight, Plus, Minus, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundGrid from '@/components/ui/BackgroundGrid';

export default function ServiceClient({ service }: { service: any }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFocus, setActiveFocus] = useState(0);
  // NEW: State to track if the user is hovering over the section (to pause the autoplay)
  const [isPaused, setIsPaused] = useState(false);

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  // NEW: Auto-play effect
  useEffect(() => {
    // If there are no sections or the user is hovering, do nothing
    if (!service.contentSections || service.contentSections.length === 0 || isPaused) return;

    // Set interval to change slide every 3000ms (3 seconds)
    const timer = setInterval(() => {
      setActiveFocus((prev) => (prev + 1) % service.contentSections.length);
    }, 3000);

    // Clear the interval when unmounting, hovering, or manually clicking a tab
    return () => clearInterval(timer);
  }, [service.contentSections, activeFocus, isPaused]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- ELITE HERO (COMPACTED) --- */}
      <section className="relative bg-heavy-metal py-16 md:py-24 px-6 md:px-12 text-ecru-white overflow-hidden">
        <BackgroundGrid />
        
        <div className="max-w-[1440px] mx-auto relative z-10 mt-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-old-gold" />
            <h2 className="text-old-gold font-black text-[10px] tracking-[0.5em] uppercase">
              Operational Specialist // {service.category || "General Maintenance"}
            </h2>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-8xl font-black uppercase italic text-ecru-white mb-8 tracking-tighter leading-[0.85]">
            {service.title}<span className="text-old-gold">.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-dove-gray max-w-3xl font-medium leading-relaxed border-l-4 border-old-gold pl-6">
            {service.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="mt-10 inline-flex items-center gap-6 bg-white/5 border border-white/10 p-4 md:p-6 backdrop-blur-xl">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-old-gold flex items-center justify-center text-heavy-metal">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-old-gold">Downtown Guarantee</p>
              <p className="text-base md:text-lg font-black uppercase tracking-tight">90-Minute Response Arrival</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECHNICAL BRIEFING (COMPACTED) --- */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-ecru-white">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
          <div className="lg:col-span-7 space-y-10">
            <h3 className="text-heavy-metal text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
              Engineering <br /> <span className="text-old-gold">Excellence.</span>
            </h3>
            <div className="text-heavy-metal/80 font-medium text-lg md:text-xl leading-relaxed space-y-6">
              <p>{service.longDescription}</p>
              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-3">
                  <ShieldCheck className="text-old-gold" size={28} />
                  <h4 className="font-black uppercase text-sm tracking-widest text-heavy-metal">Certified Protocols</h4>
                  <p className="text-sm leading-relaxed text-heavy-metal/70">Full compliance with UAE high-rise building regulations.</p>
                </div>
                <div className="space-y-3">
                  <Zap className="text-old-gold" size={28} />
                  <h4 className="font-black uppercase text-sm tracking-widest text-heavy-metal">Rapid Mobilization</h4>
                  <p className="text-sm leading-relaxed text-heavy-metal/70">Local dispatch centers ensure zero-latency service.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div variants={itemVars} initial="initial" whileInView="animate" viewport={{ once: true }} className="lg:col-span-5 bg-white p-8 md:p-12 border border-heavy-metal/5 shadow-xl relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-old-gold" />
            <h3 className="text-heavy-metal font-black uppercase tracking-[0.4em] text-[10px] mb-8 opacity-40">// Technical Specs</h3>
            <ul className="space-y-6">
              {service.features?.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-1.5 w-2 h-2 bg-old-gold rounded-full group-hover:scale-150 transition-transform" />
                  <p className="text-heavy-metal font-black text-lg md:text-xl uppercase tracking-tighter italic">{f}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- IN-DEPTH EXPERTISE (NEW INTERACTIVE SHOWCASE) --- */}
      {service.contentSections && service.contentSections.length > 0 && (
        <section 
          className="py-16 md:py-24 bg-heavy-metal text-ecru-white relative border-t border-white/10 overflow-hidden"
          // NEW: Pauses the auto-play when hovering over this section
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          // Also pause when touching/scrolling on mobile
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            // Slight delay before resuming after touch to prevent instant jumps
            setTimeout(() => setIsPaused(false), 2000); 
          }}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <BackgroundGrid />
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full">
            <div className="mb-12 md:mb-16">
              <h2 className="text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2 md:mb-3">
                In-Depth Analysis
              </h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                Technical <br className="md:hidden" />
                <span className="text-old-gold">Operations.</span>
              </h3>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start w-full min-w-0">
              
              {/* LEFT SIDE: Navigation Menu */}
              <div className="lg:col-span-4 flex flex-col w-full min-w-0">
                {/* Mobile Horizontal Scroll Menu */}
                <div className="flex lg:hidden overflow-x-auto gap-3 pb-6 hide-scroll snap-x -mx-6 px-6">
                  {service.contentSections.map((section: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveFocus(index)}
                      className={`flex items-center flex-shrink-0 snap-center px-5 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 border ${
                        activeFocus === index 
                          ? 'bg-old-gold text-heavy-metal border-old-gold' 
                          : 'bg-white/5 text-ecru-white/50 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className="whitespace-nowrap">0{index + 1}.</span>
                      <span className="ml-1.5 max-w-[140px] truncate block text-left">
                        {section.heading}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Desktop Vertical Menu */}
                <div className="hidden lg:flex flex-col gap-3 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-white/10">
                  {service.contentSections.map((section: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveFocus(index)}
                      className={`relative text-left pl-8 py-4 transition-all duration-300 group overflow-hidden ${
                        activeFocus === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                      }`}
                    >
                      <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-old-gold transition-transform duration-500 origin-top ${
                        activeFocus === index ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'
                      }`} />
                      
                      <div className="flex items-center gap-4">
                        <span className={`font-black text-[10px] tracking-[0.3em] uppercase ${activeFocus === index ? 'text-old-gold' : 'text-ecru-white'}`}>
                          0{index + 1}
                        </span>
                        <h4 className="text-lg font-black uppercase tracking-tight text-ecru-white">
                          {section.heading}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE: Dynamic Content Panel */}
              <div className="lg:col-span-8 relative min-h-[500px] w-full min-w-0 max-w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFocus}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#181818] border border-white/10 rounded-3xl overflow-hidden flex flex-col w-full min-w-0 max-w-full"
                  >
                    {/* Featured Image Header */}
                    <div className="relative h-64 md:h-80 w-full bg-black/50 overflow-hidden flex-shrink-0">
                      {service.contentSections[activeFocus].image ? (
                        <Image 
                          src={service.contentSections[activeFocus].image} 
                          alt={service.contentSections[activeFocus].heading} 
                          fill 
                          className="object-cover opacity-60"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white/10">
                          <Zap size={64} />
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent pointer-events-none" />
                      
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col items-start w-full">
                        <span className="inline-block bg-old-gold text-heavy-metal font-black text-[9px] uppercase tracking-[0.3em] py-1.5 px-3 rounded-full mb-3 shadow-lg flex-shrink-0">
                          Focus 0{activeFocus + 1}
                        </span>
                        <h4 className="text-[20px] md:text-3xl font-black uppercase tracking-tight text-ecru-white leading-[1.25] w-full break-words whitespace-normal">
                          {service.contentSections[activeFocus].heading}
                        </h4>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 md:p-8 flex flex-col gap-6 w-full min-w-0">
                      <p className="text-ecru-white/70 text-sm md:text-base leading-relaxed break-words whitespace-normal w-full">
                        {service.contentSections[activeFocus].text}
                      </p>

                      {service.contentSections[activeFocus].list && service.contentSections[activeFocus].list.length > 0 && (
                        <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5 w-full min-w-0">
                          <h5 className="text-old-gold font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                            <ShieldCheck size={14} /> Service Inclusions
                          </h5>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 w-full min-w-0">
                            {service.contentSections[activeFocus].list.map((bullet: string, i: number) => (
                              <li key={i} className="flex items-start gap-3 w-full min-w-0">
                                <CheckCircle2 size={16} className="text-old-gold flex-shrink-0 mt-0.5" />
                                <span className="text-ecru-white/90 text-[13px] md:text-sm font-medium break-words whitespace-normal">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.contentSections[activeFocus].footerText && (
                        <div className="border-l-2 border-old-gold pl-4 py-1 mt-2 w-full min-w-0">
                          <p className="text-ecru-white/80 text-sm md:text-base font-medium italic break-words whitespace-normal">
                            "{service.contentSections[activeFocus].footerText}"
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* --- WHY CHOOSE US (COMPACTED) --- */}
      {service.whyChooseUs && (
        <section className="py-16 md:py-24 bg-ecru-white relative">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-old-gold font-black text-[10px] tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4 mb-4 md:mb-6">
                  The Mintrix Standard
                </h2>
                <h3 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-tighter uppercase italic text-heavy-metal mb-4 md:mb-6">
                  {service.whyChooseUs.title.split(' ').map((word: string, i: number, arr: any[]) => (
                    <React.Fragment key={i}>
                      {i === arr.length - 1 ? <span className="text-old-gold">{word}</span> : word + " "}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="text-dove-gray font-medium text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
                  {service.whyChooseUs.description}
                </p>
                
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {service.whyChooseUs.reasons.map((reason: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 md:gap-4">
                      <div className="bg-heavy-metal/5 p-1 rounded-full">
                        <CheckCircle2 className="text-old-gold w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <span className="text-heavy-metal font-bold text-sm md:text-base">{reason}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-l-4 border-heavy-metal pl-4 md:pl-6 py-2">
                  <p className="text-heavy-metal font-black uppercase tracking-wide text-xs md:text-sm">
                    {service.whyChooseUs.bottomText}
                  </p>
                </div>
              </div>

              {service.bookingContact && (
                <div className="w-full lg:w-1/2">
                  <div className="bg-heavy-metal rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-old-gold/10 rounded-full blur-3xl" />
                    
                    <h4 className="text-xl md:text-3xl font-black uppercase text-ecru-white tracking-tight mb-4 md:mb-6 relative z-10">
                      {service.bookingContact.title}
                    </h4>
                    
                    {service.bookingContact.paragraphs.map((p: string, i: number) => (
                      <p key={i} className={`text-ecru-white/70 font-medium text-sm md:text-base leading-relaxed relative z-10 ${i === service.bookingContact.paragraphs.length - 1 ? 'mb-8 md:mb-10' : 'mb-4 md:mb-6'}`}>
                        {p}
                      </p>
                    ))}
                    
                    <Link href="#contact" className="inline-flex items-center justify-center gap-3 bg-old-gold text-heavy-metal px-6 py-3 md:px-8 md:py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-colors duration-300 relative z-10 w-full md:w-auto">
                      Schedule Service <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* --- FAQ SECTION (COMPACTED) --- */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="relative py-16 md:py-24 bg-heavy-metal overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          </div>
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-old-gold/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-old-gold/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
            <div className="mb-12 md:mb-16 space-y-4">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-old-gold" />
                <h2 className="text-old-gold font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">
                  Knowledge Base
                </h2>
              </motion.div>
              
              <h3 className="text-ecru-white text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase italic">
                Common <br /> <span className="text-old-gold">Inquiries.</span>
              </h3>
            </div>

            <div className="grid gap-3 md:gap-4">
              {service.faqs.map((faq: any, index: number) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`group border border-white/5 transition-all duration-500 overflow-hidden ${isOpen ? 'bg-white/[0.04] border-old-gold/30' : 'bg-white/[0.02] hover:bg-white/[0.03]'}`}>
                    <button onClick={() => setOpenFaqIndex(isOpen ? null : index)} className="w-full flex items-center justify-between text-left p-5 md:p-6 focus:outline-none">
                      <div className="flex items-center gap-4 md:gap-6 pr-4">
                        <span className={`text-xs md:text-sm font-black transition-colors duration-500 ${isOpen ? 'text-old-gold' : 'text-white/20'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h4 className={`text-base md:text-lg font-bold uppercase tracking-tight transition-colors duration-500 ${isOpen ? 'text-ecru-white' : 'text-ecru-white/70 group-hover:text-ecru-white'}`}>
                          {faq.question}
                        </h4>
                      </div>
                      
                      <div className={`relative flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border transition-all duration-500 flex-shrink-0 ${isOpen ? 'border-old-gold bg-old-gold rotate-180' : 'border-white/10 rotate-0'}`}>
                        {isOpen ? (
                          <Minus className="text-heavy-metal" size={14} strokeWidth={3} />
                        ) : (
                          <Plus className="text-ecru-white" size={14} strokeWidth={3} />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}>
                          <div className="px-5 md:px-6 pb-6 ml-0 md:ml-10">
                            <div className="pl-4 md:pl-6 border-l-2 border-old-gold/30">
                              <p className="text-dove-gray text-sm md:text-base leading-relaxed font-medium">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* --- BOTTOM CTA --- */}
      <section className="py-16 md:py-20 px-6 text-center bg-heavy-metal text-ecru-white border-t border-white/5 relative z-10">
        <motion.div variants={itemVars} initial="initial" whileInView="animate" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
            Require Immediate <br /> <span className="text-old-gold">Intervention?</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-old-gold text-heavy-metal px-10 py-5 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-ecru-white transition-all shadow-xl">
            Dispatch Technician <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}