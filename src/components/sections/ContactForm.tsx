"use client";
import React, { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { submitInquiry } from '@/app/actions';

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // Added to show user-friendly errors

  const handleAction = async (formData: FormData) => {
    // 1. Basic Validation Check
    const name = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("contactNumber");
    const desc = formData.get("description");

    if (!name || !email || !phone || !desc) {
      setErrorMsg("Please complete all required fields.");
      return;
    }

    setErrorMsg(""); // Clear previous errors

    startTransition(async () => {
      const result = await submitInquiry(formData);
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert(`Operational Error: ${result.error}`);
      }
    });
  };

  if (isSuccess) return <SuccessBriefing />;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="lg:col-span-7 bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-16 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <h3 className="text-3xl font-black uppercase italic mb-12 tracking-tighter text-ecru-white relative z-10">
        General <span className="text-old-gold">Inquiry</span>
      </h3>
      
      <form action={handleAction} className="relative z-10 flex flex-col gap-10">
        
        <div className="grid md:grid-cols-2 gap-10">
          <FormInput label="Full Name" name="fullName" required placeholder="Your Name" type="text" />
          <FormInput label="Email Address" name="email" required placeholder="email@example.com" type="email" />
        </div>

        <div className="grid md:grid-cols-1 gap-10">
          <FormInput 
            label="Contact Number" 
            name="contactNumber" 
            required 
            placeholder="+971 -- --- ----" 
            type="tel"
            pattern="[\+0-9\s\-]*" // HTML validation fallback
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
              // Only allow numbers, +, spaces, and dashes
              if (!/[\d\+\s\-]/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60">
            Message / Query <span className="text-red-500 text-xs ml-1">*</span>
          </label>
          <textarea 
            name="description"
            required
            rows={4} 
            className="w-full bg-transparent border border-white/20 p-5 mt-2 outline-none focus:border-old-gold transition-all font-medium text-lg resize-none text-ecru-white" 
            placeholder="How can our technical team assist you?" 
          />
        </div>

        {/* Display Validation Error if any */}
        {errorMsg && (
          <p className="text-red-500 text-sm font-bold tracking-wide animate-pulse">
            {errorMsg}
          </p>
        )}

        <button 
          disabled={isPending}
          type="submit" 
          className="w-full bg-old-gold text-heavy-metal py-8 font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 group hover:bg-ecru-white transition-all disabled:opacity-50 mt-2"
        >
          {isPending ? (
            <>Processing Inquiry... <Loader2 className="animate-spin" size={18} /></>
          ) : (
            <>Send Message <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></>
          )}
        </button>
      </form>
    </motion.div>
  );
}

function FormInput({ label, name, required, ...props }: { label: string; name: string; required?: boolean; [key: string]: any }) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60 group-focus-within:text-old-gold transition-colors">
        {label} {required && <span className="text-red-500 text-xs ml-1">*</span>}
      </label>
      <input 
        name={name}
        required={required}
        {...props} 
        className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-old-gold transition-all font-medium text-lg text-ecru-white" 
      />
    </div>
  );
}

function SuccessBriefing() {
  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      className="lg:col-span-7 p-16 md:p-24 text-center bg-heavy-metal/50 backdrop-blur-3xl border border-old-gold/30 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-old-gold to-transparent opacity-50" />
      
      <div className="w-24 h-24 bg-old-gold/10 rounded-full flex items-center justify-center mb-10 border border-old-gold/20">
        <ShieldCheck className="text-old-gold" size={48} />
      </div>

      <h3 className="text-4xl md:text-5xl font-black uppercase italic mb-6 tracking-tighter text-ecru-white">
        Message <span className="text-old-gold">Received.</span>
      </h3>
      
      <p className="text-xl text-dove-gray font-medium max-w-lg mx-auto leading-relaxed mb-12">
        Your inquiry has been logged in our system. A technical coordinator will review your request and get back to you via email or phone shortly.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link href="/">
          <button className="bg-old-gold text-heavy-metal px-12 py-5 font-black text-[10px] uppercase tracking-[0.3em] hover:bg-ecru-white transition-all">
            Return Home
          </button>
        </Link>
        <button 
          onClick={() => window.location.reload()} 
          className="border border-white/10 text-ecru-white px-12 py-5 font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 transition-all"
        >
          New Inquiry
        </button>
      </div>
    </motion.div>
  );
}