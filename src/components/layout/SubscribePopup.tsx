'use client';

import React, { useState, useEffect } from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SubscribePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAutoOpened, setIsAutoOpened] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const hasDismissed = sessionStorage.getItem('mintrix_subscribe_dismissed');
    
    if (hasDismissed !== 'true') {
      // OPTIMIZATION: Increased to 5000ms. 
      // 2 seconds interrupts the browser's initial rendering cycle, hurting Core Web Vitals.
      // 5 seconds ensures the page is fully loaded and interactive before executing the popup logic.
      const timer = setTimeout(() => {
        setIsAutoOpened(true); 
        setIsOpen(true);
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('mintrix_subscribe_dismissed', 'true');
    
    if (isAutoOpened) {
      window.dispatchEvent(new Event('mintrix_show_promo'));
    }
    
    setIsAutoOpened(false);
  };

  const handleOpen = () => {
    setIsAutoOpened(false); 
    setIsOpen(true);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* OPTIMIZATION: Added transform-gpu and will-change-transform for buttery smooth CSS transitions */}
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-[90] transform-gpu will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          !isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={handleOpen}
          className="group flex flex-col items-center justify-center bg-heavy-metal text-old-gold py-5 px-2.5 rounded-r-xl border border-l-0 border-old-gold/30 shadow-[5px_0_20px_-5px_rgba(218,165,32,0.3)] hover:bg-old-gold hover:text-heavy-metal transition-colors duration-300 focus:outline-none"
          aria-label="Open Subscribe Form"
        >
          <Mail size={18} className="mb-3 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
            Subscribe
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          // Added role="dialog" and aria-modal for screen reader accessibility
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              // transform-gpu ensures the backdrop blur doesn't drag down mobile performance
              className="absolute inset-0 bg-heavy-metal/80 backdrop-blur-sm transform-gpu"
              onClick={handleClose}
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              // OPTIMIZATION: Reduced the blur intensity and added transform-gpu to the main card
              className="relative w-full max-w-[440px] bg-heavy-metal text-ecru-white rounded-3xl overflow-hidden shadow-[0_0_50px_-10px_rgba(218,165,32,0.25)] border border-white/10 transform-gpu"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FCECA6] via-old-gold to-[#B3851E]" />
              
              {/* Reduced blur radius slightly to save GPU cycles on mobile */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-old-gold/20 rounded-full blur-[40px] pointer-events-none" />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 focus:outline-none"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-10 relative z-10">
                <div className="w-12 h-12 bg-old-gold/10 rounded-xl flex items-center justify-center mb-6 border border-old-gold/20">
                  <Mail className="text-old-gold" size={24} strokeWidth={2} />
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-3">
                  Join The <br/> <span className="text-old-gold">Inner Circle.</span>
                </h3>

                <p className="text-ecru-white/70 text-sm leading-relaxed mb-8">
                  Get exclusive maintenance tips, priority service updates, and special seasonal offers delivered directly to your inbox.
                </p>

                <form 
                  className="space-y-4" 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    handleClose(); 
                  }}
                >
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-old-gold focus:ring-1 focus:ring-old-gold transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 bg-old-gold text-heavy-metal font-black text-[11px] uppercase tracking-widest py-4 rounded-xl hover:bg-ecru-white transition-colors duration-300 shadow-lg shadow-old-gold/20"
                  >
                    Subscribe Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                
                <p className="text-center text-[9px] text-gray-500 mt-5 font-bold tracking-widest uppercase">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}