"use client";
import React, { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, ArrowRight, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { submitInquiry } from '@/app/actions';

const LOCATIONS = ["Downtown Dubai", "Business Bay", "DIFC / SZ Road", "Palm Jumeirah", "Dubai Marina / JBR"];
const SERVICES_LIST = ["HVAC & Cooling", "Electrical Systems", "Plumbing Solutions", "Interior Fit-Out", "Other"];

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const handleAction = async (formData: FormData) => {
    formData.append("location", location);
    formData.append("service", service);

    startTransition(async () => {
      const result = await submitInquiry(formData);
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert(`Operational Error: ${result.error}`);
      }
    });
  };

  if (isSuccess) return <SuccessBriefing location={location} />;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="lg:col-span-7 bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-16 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <h3 className="text-3xl font-black uppercase italic mb-12 tracking-tighter text-ecru-white relative z-10">
        Inquiry Submission
      </h3>
      
      <form action={handleAction} className="space-y-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-10">
          <FormInput label="Full Name" name="fullName" required placeholder="Full Name" type="text" />
          <FormInput label="Contact Number" name="contactNumber" required placeholder="+971 -- --- ----" type="tel" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <CustomSelect label="Property Location" options={LOCATIONS} value={location} onChange={setLocation} placeholder="Select Area" icon={<MapPin size={18} />} />
          <CustomSelect label="Service Required" options={SERVICES_LIST} value={service} onChange={setService} placeholder="Primary Category" icon={<Zap size={18} />} />
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60">Brief Description</label>
          <textarea 
            name="description"
            rows={3} 
            className="w-full bg-transparent border border-white/20 p-5 mt-2 outline-none focus:border-old-gold transition-all font-medium text-lg resize-none text-ecru-white" 
            placeholder="Provide technical requirements..." 
          />
        </div>

        <button 
          disabled={isPending}
          type="submit" 
          className="w-full bg-old-gold text-heavy-metal py-8 font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 group hover:bg-ecru-white transition-all disabled:opacity-50"
        >
          {isPending ? (
            <>Initializing Dispatch... <Loader2 className="animate-spin" size={18} /></>
          ) : (
            <>Dispatch Team <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></>
          )}
        </button>
      </form>
    </motion.div>
  );
}

function FormInput({ label, name, ...props }: { label: string; name: string; [key: string]: any }) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60 group-focus-within:text-old-gold transition-colors">{label}</label>
      <input 
        name={name}
        {...props} 
        className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-old-gold transition-all font-medium text-lg text-ecru-white" 
      />
    </div>
  );
}

function SuccessBriefing({ location }: { location: string }) {
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
        Briefing <span className="text-old-gold">Authenticated.</span>
      </h3>
      
      <p className="text-xl text-dove-gray font-medium max-w-lg mx-auto leading-relaxed mb-12">
        Our technical team has been mobilized for your asset in <span className="text-ecru-white font-bold">{location || "Dubai"}</span>. We prioritize emergency calls with a 90-minute arrival guarantee.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link href="/services">
          <button className="bg-old-gold text-heavy-metal px-12 py-5 font-black text-[10px] uppercase tracking-[0.3em] hover:bg-ecru-white transition-all">
            Review Expertise
          </button>
        </Link>
        <button 
          onClick={() => window.location.reload()} 
          className="border border-white/10 text-ecru-white px-12 py-5 font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 transition-all"
        >
          New Submission
        </button>
      </div>

      <div className="mt-16 flex items-center gap-3 opacity-30">
        <div className="w-2 h-2 rounded-full bg-old-gold animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-ecru-white">Operational // 24/7 Dispatch</span>
      </div>
    </motion.div>
  );
}