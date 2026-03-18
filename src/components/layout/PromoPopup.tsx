// src/components/layout/PromoPopup.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleTriggerPromo = () => {
      setTimeout(() => {
        setIsOpen(true);
      }, 3000); 
    };

    window.addEventListener('mintrix_show_promo', handleTriggerPromo);
    return () => window.removeEventListener('mintrix_show_promo', handleTriggerPromo);
  }, []);

  const handleClose = () => setIsOpen(false);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-heavy-metal/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-[1000px] aspect-[16/10] md:aspect-[16/9] bg-heavy-metal rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(218,165,32,0.5)] border-4 border-old-gold/30 group"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 bg-heavy-metal/40 hover:bg-red-500 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/10 shadow-xl"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            <div className="relative w-full h-full">
              <Image 
                src="/working1.jpg" 
                alt="Mintrix Excellence"
                fill
                priority
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal/60 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-4 border border-old-gold/20 rounded-[1.8rem] pointer-events-none" />
              
              <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-old-gold/40 rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-old-gold/40 rounded-br-lg pointer-events-none" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}