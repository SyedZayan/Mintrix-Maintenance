'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/lib/faq-data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 3, faqs.length));
  };

  return (
    <section className="relative pt-8 md:pt-12 pb-20 md:pb-32 bg-heavy-metal overflow-hidden">
      {/* --- Background Architecture --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-old-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-old-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[2px] bg-old-gold" />
            <h2 className="text-old-gold font-black text-xs uppercase tracking-[0.5em]">
              Knowledge Base
            </h2>
          </motion.div>
          
          <h3 className="text-ecru-white text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
            Maintenance <br /> <span className="text-old-gold">FAQ.</span>
          </h3>
        </div>

        {/* FAQ List (SEO Optimized for Load More) */}
        <div className="grid gap-4">
          {/* We map the entire array so it stays in the HTML DOM for Googlebot */}
          {faqs.map((faq, index) => {
            const isVisible = index < visibleCount;
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.05 }} // Modulo ensures newly revealed items animate quickly
                // The 'hidden' class visually conceals the item, but keeps it in the source code
                className={`group border border-white/5 transition-all duration-500 overflow-hidden
                  ${isOpen ? 'bg-white/[0.04] border-old-gold/30' : 'bg-white/[0.02] hover:bg-white/[0.03]'}
                  ${isVisible ? 'block' : 'hidden'}
                `}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left p-6 md:p-8 focus:outline-none"
                >
                  <div className="flex items-center gap-4 md:gap-6 pr-4">
                    <span className={`text-sm font-black transition-colors duration-500 hidden sm:block
                      ${isOpen ? 'text-old-gold' : 'text-white/20'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className={`text-lg md:text-xl font-bold uppercase tracking-tight transition-colors duration-500 
                      ${isOpen ? 'text-ecru-white' : 'text-ecru-white/70 group-hover:text-ecru-white'}`}>
                      {faq.question}
                    </h4>
                  </div>
                  
                  <div className={`relative flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-500
                    ${isOpen ? 'border-old-gold bg-old-gold rotate-180' : 'border-white/10 rotate-0'}`}>
                    {isOpen ? (
                      <Minus className="text-heavy-metal" size={16} strokeWidth={3} />
                    ) : (
                      <Plus className="text-ecru-white" size={16} strokeWidth={3} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-8 ml-0 sm:ml-12">
                        <div className="pl-6 border-l-2 border-old-gold/30">
                          <p className="text-dove-gray text-base md:text-lg leading-relaxed font-medium">
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

        {/* Load More Button */}
        {visibleCount < faqs.length && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex justify-center"
          >
            <button 
              onClick={handleLoadMore}
              className="group flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-old-gold/50 bg-white/[0.02] hover:bg-old-gold/5 rounded-full transition-all duration-300 focus:outline-none"
            >
              <span className="text-ecru-white group-hover:text-old-gold font-black text-xs uppercase tracking-widest transition-colors duration-300">
                Load More Inquiries
              </span>
              <Plus size={16} className="text-old-gold group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </motion.div>
        )}

        {/* Bottom CTA for FAQ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-ecru-white/40 text-sm font-bold uppercase tracking-widest text-center md:text-left">
            Still have questions? Reach out to our support team.
          </p>
          <button className="px-8 py-4 bg-old-gold text-heavy-metal font-black uppercase text-xs tracking-widest hover:bg-ecru-white transition-colors duration-300">
            Contact Support
          </button>
        </motion.div>

      </div>
    </section>
  );
}