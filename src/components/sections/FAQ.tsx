'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What handyman services do you offer in Dubai?",
    answer: "We provide a wide range of handyman services in Dubai including minor electrical repairs, plumbing fixes, AC servicing, fixture installation, wall repairs, and general home maintenance. Our technicians can handle multiple repair tasks in a single visit to make maintenance easier for homeowners and businesses."
  },
  {
    question: "Do you provide home maintenance services in Dubai?",
    answer: "Yes, we offer complete home maintenance in Dubai for apartments, villas, and houses. Our services include AC servicing, plumbing repairs, electrical troubleshooting, wall patchwork, silicone sealing, and routine maintenance checks to keep your home in excellent condition."
  },
  {
    question: "Do you offer apartment maintenance services in Dubai?",
    answer: "Absolutely. Our apartment maintenance in Dubai services are designed for tenants, landlords, and property managers who need quick repair solutions. We fix AC issues, water leaks, electrical faults, door alignment problems, and other minor maintenance tasks commonly found in apartments."
  },
  {
    question: "Can you handle villa maintenance in Dubai?",
    answer: "Yes, we provide professional villa maintenance in Dubai for homeowners who want to keep their property in top condition. Our team can assist with AC maintenance, plumbing repairs, electrical work, minor renovations, and general property upkeep."
  },
  {
    question: "What property maintenance services do you provide?",
    answer: "Our property maintenance services in Dubai cover both residential and commercial properties. We handle AC servicing, plumbing repairs, electrical maintenance, tile fixing, silicone sealing, CCTV installation, and other minor civil works required to maintain a safe and functional property."
  },
  {
    question: "Do you provide building maintenance services in Dubai?",
    answer: "Yes, we offer reliable building maintenance services in Dubai for property owners and building managers. Our technicians can support routine inspections, electrical repairs, plumbing maintenance, AC servicing, and general repair work for residential or commercial buildings."
  },
  {
    question: "Do you offer emergency repair services?",
    answer: "Yes, many maintenance issues require quick attention. Our team responds promptly to urgent problems such as AC breakdowns, water leaks, electrical faults, and plumbing issues to restore comfort and safety in your property."
  },
  {
    question: "Can you install CCTV cameras for homes and offices?",
    answer: "Yes, we provide CCTV installation services in Dubai for apartments, villas, offices, and commercial spaces. Our team can install cameras, configure DVR/NVR systems, and ensure your surveillance system is working properly."
  },
  {
    question: "How often should I schedule home maintenance?",
    answer: "It is recommended to schedule routine home maintenance every 3–6 months. Regular inspections and servicing help prevent costly repairs and ensure systems like AC, plumbing, and electrical components continue working efficiently."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 md:py-48 bg-heavy-metal overflow-hidden">
      {/* --- Background Architecture (Matching Testimonials) --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-old-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-old-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 space-y-6">
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
            Common <br /> <span className="text-old-gold">Inquiries.</span>
          </h3>
        </div>

        {/* FAQ List */}
        <div className="grid gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group border border-white/5 transition-all duration-500 overflow-hidden
                  ${isOpen ? 'bg-white/[0.04] border-old-gold/30' : 'bg-white/[0.02] hover:bg-white/[0.03]'}
                `}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left p-6 md:p-8 focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-black transition-colors duration-500 
                      ${isOpen ? 'text-old-gold' : 'text-white/20'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className={`text-lg md:text-xl font-bold uppercase tracking-tight transition-colors duration-500 
                      ${isOpen ? 'text-ecru-white' : 'text-ecru-white/70 group-hover:text-ecru-white'}`}>
                      {faq.question}
                    </h4>
                  </div>
                  
                  <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-500
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
                      <div className="px-6 md:px-8 pb-8 ml-0 md:ml-12">
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

        {/* Bottom CTA for FAQ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-ecru-white/40 text-sm font-bold uppercase tracking-widest">
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