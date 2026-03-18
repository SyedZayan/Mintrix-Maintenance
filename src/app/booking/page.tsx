"use client";
import React, { useState, Suspense, useTransition, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldCheck, CheckCircle2, ArrowRight, Loader2, Layers, Wrench, Zap, Clock, Plus, X, CreditCard, User, Mail, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { PACKAGES, PackageData } from '@/lib/packages-data';
import { services } from '@/lib/services-data';
import { submitBooking } from '@/app/actions';

type BookingType = 'package' | 'service';
type UrgencyType = '90-min' | '24-hours' | 'custom';

interface ServiceEntry {
  id: number;
  slug: string;
  subServices: string[];
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-heavy-metal pt-24 md:pt-32 pb-24 px-4 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <Suspense fallback={<div className="text-old-gold animate-pulse text-center font-black tracking-widest text-[14px] uppercase">Initializing Secure Booking...</div>}>
          <BookingContent />
        </Suspense>
      </div>
    </div>
  );
}

function BookingContent() {
  const searchParams = useSearchParams();
  const initialPkgId = searchParams.get('pkg');
  
  const [bookingType, setBookingType] = useState<BookingType>('package');
  
  const [currentPkgId, setCurrentPkgId] = useState(initialPkgId || PACKAGES[0].id);
  const selectedPackage = PACKAGES.find(p => p.id === currentPkgId) || PACKAGES[0];

  const [selectedServiceSlug, setSelectedServiceSlug] = useState(services[0].slug);
  const selectedService = services.find(s => s.slug === selectedServiceSlug) || services[0];

  useEffect(() => {
    if (initialPkgId) {
      setBookingType('package');
      setCurrentPkgId(initialPkgId);
    }
  }, [initialPkgId]);

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-start">
      {/* LEFT: Dynamic Briefing Panel */}
      {/* FIX APPLIED HERE: Changed "sticky top-24 md:top-40" to "relative lg:sticky lg:top-40" */}
      <div className="lg:col-span-5 space-y-6 md:space-y-10 relative lg:sticky lg:top-40">
        <div className="space-y-2 md:space-y-4">
          <span className="text-old-gold font-black text-[10px] md:text-[12px] tracking-[0.4em] uppercase">
            Service Authorization
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-ecru-white leading-none">
            Secure <br className="hidden md:block" /> <span className="text-old-gold">Booking.</span>
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {bookingType === 'package' ? (
            <motion.div 
              key={`pkg-${selectedPackage.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white/5 border border-old-gold/20 p-5 md:p-8 shadow-2xl space-y-6 md:space-y-8 backdrop-blur-md rounded-sm"
            >
              <div className="border-b border-white/10 pb-6 md:pb-8">
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-old-gold mb-2 md:mb-3 block">Package Protocol</span>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic text-ecru-white mb-2 md:mb-3 break-words">{selectedPackage.title}</h3>
                <p className="text-dove-gray font-medium text-[13px] md:text-[14px] leading-relaxed">{selectedPackage.description}</p>
              </div>
              <div className="space-y-4 md:space-y-5">
                <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-old-gold/80">Included Features:</p>
                <ul className="space-y-3 md:space-y-4">
                  {selectedPackage.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-ecru-white/90 font-bold text-[13px] md:text-[14px]">
                      <CheckCircle2 size={18} className="text-old-gold shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/40 p-5 md:p-6 flex flex-col items-center justify-center border border-white/5 text-center rounded-sm">
                <CreditCard size={24} className="text-old-gold mb-2 md:mb-3" />
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-ecru-white">No Online Payment</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-dove-gray mt-2 px-2 leading-relaxed">Settle invoice only after completion</span>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="srv-multi"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white/5 border border-white/10 p-5 md:p-8 shadow-2xl space-y-6 md:space-y-8 backdrop-blur-md rounded-sm"
            >
              <div className="border-b border-white/10 pb-6 md:pb-8">
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-old-gold mb-2 md:mb-3 block">Service Protocol</span>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic text-ecru-white mb-2 md:mb-3">Custom Dispatch</h3>
                <p className="text-dove-gray font-medium text-[13px] md:text-[14px] leading-relaxed">
                  Our technical teams will mobilize based on your specific requirements. Select one or multiple services.
                </p>
              </div>
              <div className="bg-black/40 p-5 md:p-6 flex flex-col items-center justify-center border border-white/5 text-center rounded-sm">
                <CreditCard size={24} className="text-old-gold mb-2 md:mb-3" />
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-ecru-white">No Online Payment</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-dove-gray mt-2 px-2 leading-relaxed">Post-Diagnostic Quote Provided On-Site</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* RIGHT: Master Form */}
      <div className="lg:col-span-7">
        <MasterBookingForm 
          bookingType={bookingType}
          setBookingType={setBookingType}
          currentPkgId={currentPkgId}
          setCurrentPkgId={setCurrentPkgId}
          packageData={selectedPackage}
        />
      </div>
    </div>
  );
}

function MasterBookingForm({ 
  bookingType, setBookingType, 
  currentPkgId, setCurrentPkgId, 
  packageData 
}: any) {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [serviceEntries, setServiceEntries] = useState<ServiceEntry[]>([
    { id: Date.now(), slug: services[0].slug, subServices: [] }
  ]);
  const [urgency, setUrgency] = useState<UrgencyType>('90-min');

  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  };

  const handleAction = async (formData: FormData) => {
    formData.append("bookingType", bookingType);
    
    if (bookingType === 'package') {
      formData.append("packageId", currentPkgId);
      formData.append("packageName", packageData.title);
      formData.append("urgency", packageData.schedulingType === 'same-day' ? '90-min' : 'custom');
    } else {
      formData.append("servicesPayload", JSON.stringify(serviceEntries));
      formData.append("urgency", urgency);
    }

    startTransition(async () => {
      const result = await submitBooking(formData);
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert(`Operational Error: ${result.error}`);
      }
    });
  };

  const addServiceEntry = () => {
    setServiceEntries([...serviceEntries, { id: Date.now(), slug: services[0].slug, subServices: [] }]);
  };

  const removeServiceEntry = (id: number) => {
    if (serviceEntries.length > 1) {
      setServiceEntries(serviceEntries.filter(entry => entry.id !== id));
    }
  };

  const updateServiceSlug = (id: number, newSlug: string) => {
    setServiceEntries(serviceEntries.map(entry => 
      entry.id === id ? { ...entry, slug: newSlug, subServices: [] } : entry
    ));
  };

  const toggleSubService = (id: number, subService: string) => {
    setServiceEntries(serviceEntries.map(entry => {
      if (entry.id === id) {
        const isSelected = entry.subServices.includes(subService);
        const newSubServices = isSelected 
          ? entry.subServices.filter(s => s !== subService) 
          : [...entry.subServices, subService];
        return { ...entry, subServices: newSubServices };
      }
      return entry;
    }));
  };

  if (isSuccess) return <BookingSuccess />;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="bg-white/5 backdrop-blur-3xl border border-white/10 p-5 md:p-10 shadow-2xl rounded-sm mt-8 lg:mt-0"
    >
      <form action={handleAction} className="space-y-6 md:space-y-8">
        
        {/* --- 1. CLIENT CREDENTIALS --- */}
        <div className="border border-white/10 bg-black/20 p-5 md:p-8 rounded-sm space-y-5 md:space-y-6 shadow-inner">
          <h4 className="text-old-gold text-[11px] md:text-[12px] font-black tracking-[0.3em] uppercase flex items-center gap-2 md:gap-3">
            <User size={16} className="md:w-[18px] md:h-[18px]" /> Client Credentials
          </h4>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="md:col-span-2">
              <FormInput label="Full Name" name="name" type="text" placeholder="e.g. John Doe" icon={User} required />
            </div>
            <FormInput label="Email Address" name="email" type="email" placeholder="john@example.com" icon={Mail} required />
            <FormInput label="Contact Number" name="phone" type="tel" placeholder="+971 50 000 0000" icon={Phone} required />
          </div>
        </div>

        {/* --- 2. TOGGLE: PACKAGE VS SERVICE --- */}
        <div className="flex flex-col sm:flex-row bg-black/40 p-1.5 md:p-2 rounded-sm border border-white/5 gap-1 sm:gap-0">
          <button
            type="button"
            onClick={() => setBookingType('package')}
            className={`flex-1 py-3 md:py-4 text-[12px] md:text-[14px] font-black uppercase tracking-widest transition-all rounded-sm ${bookingType === 'package' ? 'bg-old-gold text-heavy-metal shadow-lg' : 'text-ecru-white/60 hover:text-ecru-white bg-white/5 sm:bg-transparent'}`}
          >
            Full Package
          </button>
          <button
            type="button"
            onClick={() => setBookingType('service')}
            className={`flex-1 py-3 md:py-4 text-[12px] md:text-[14px] font-black uppercase tracking-widest transition-all rounded-sm ${bookingType === 'service' ? 'bg-old-gold text-heavy-metal shadow-lg' : 'text-ecru-white/60 hover:text-ecru-white bg-white/5 sm:bg-transparent'}`}
          >
            Services
          </button>
        </div>

        {/* --- 3. CONDITIONAL PATHS --- */}
        <div className="border border-white/10 bg-black/20 p-5 md:p-8 rounded-sm space-y-5 md:space-y-6 shadow-inner">
          <h4 className="text-old-gold text-[11px] md:text-[12px] font-black tracking-[0.3em] uppercase flex items-center gap-2 md:gap-3">
            <Layers size={16} className="md:w-[18px] md:h-[18px]" /> Operational Directive
          </h4>

          {bookingType === 'package' ? (
            /* --- PACKAGE PATH --- */
            <div className="space-y-5 md:space-y-6 animate-in fade-in duration-500">
              <div className="space-y-2 md:space-y-3 group">
                <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-old-gold/80 flex items-center">
                  Selected Protocol <span className="text-red-500 ml-1 text-sm md:text-lg leading-none">*</span>
                </label>
                <div className="flex items-center gap-2 md:gap-3 w-full bg-black/40 border border-white/20 p-3 md:p-4 rounded-sm focus-within:border-old-gold transition-all relative">
                  <ShieldCheck size={18} className="text-white/40 shrink-0 md:w-[20px] md:h-[20px]" />
                  <select 
                    value={currentPkgId}
                    onChange={(e) => setCurrentPkgId(e.target.value)}
                    className="w-full bg-transparent outline-none font-bold text-[13px] md:text-[15px] uppercase tracking-tight text-ecru-white appearance-none cursor-pointer pr-6 md:pr-8 truncate"
                  >
                    {PACKAGES.map(pkg => (
                      <option key={pkg.id} value={pkg.id} className="bg-heavy-metal text-ecru-white">
                        {pkg.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="text-white/40 absolute right-3 md:right-4 pointer-events-none md:w-[18px] md:h-[18px]" />
                </div>
              </div>

              <div className="p-4 md:p-5 border border-old-gold/20 bg-old-gold/5 flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 rounded-sm mt-2 md:mt-4">
                <Clock className="text-old-gold shrink-0 hidden sm:block" size={28} />
                <div>
                  <p className="text-[13px] md:text-[15px] font-bold text-ecru-white mb-1 flex items-center gap-2">
                    <Clock className="text-old-gold shrink-0 sm:hidden" size={16} />
                    Logistics Coordination
                  </p>
                  <p className="text-[12px] md:text-[14px] text-dove-gray leading-relaxed">
                    Once authorized, our dispatch team will contact you immediately to align on the perfect date and time for your schedule.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* --- SERVICE PATH --- */
            <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
              
              {/* Dynamic Multiple Services List */}
              <div className="space-y-4 md:space-y-6">
                {serviceEntries.map((entry, index) => {
                  const serviceDef = services.find(s => s.slug === entry.slug) || services[0];
                  
                  return (
                    <div key={entry.id} className="p-4 md:p-6 border border-white/10 bg-heavy-metal/50 rounded-sm space-y-4 md:space-y-6 relative mt-2 md:mt-0">
                      {serviceEntries.length > 1 && (
                        <button type="button" onClick={() => removeServiceEntry(entry.id)} className="absolute top-3 right-3 md:top-5 md:right-5 bg-black/50 md:bg-transparent p-1 md:p-0 rounded-sm text-white/40 hover:text-red-400 transition-colors z-10">
                          <X size={16} className="md:w-[20px] md:h-[20px]" />
                        </button>
                      )}

                      <div className="space-y-2 md:space-y-3">
                        <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-old-gold/80 flex items-center pr-6">
                          Primary Service {index + 1} <span className="text-red-500 ml-1 text-sm md:text-lg leading-none">*</span>
                        </label>
                        <div className="flex items-center gap-2 md:gap-3 w-full bg-black/40 border border-white/20 p-3 md:p-4 rounded-sm focus-within:border-old-gold transition-all relative">
                          <Wrench size={18} className="text-white/40 shrink-0 md:w-[20px] md:h-[20px]" />
                          <select 
                            value={entry.slug}
                            onChange={(e) => updateServiceSlug(entry.id, e.target.value)}
                            className="w-full bg-transparent outline-none font-bold text-[13px] md:text-[15px] text-ecru-white appearance-none cursor-pointer pr-6 md:pr-8 truncate"
                          >
                            {services.map(s => <option key={s.slug} value={s.slug} className="bg-heavy-metal text-[13px] md:text-[15px] font-medium">{s.title}</option>)}
                          </select>
                          <ChevronDown size={16} className="text-white/40 absolute right-3 md:right-4 pointer-events-none md:w-[18px] md:h-[18px]" />
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-3 pt-1 md:pt-2">
                        <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-old-gold/80">Specific Requirements</label>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {serviceDef.features.map((feature, idx) => {
                            const isSelected = entry.subServices.includes(feature);
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => toggleSubService(entry.id, feature)}
                                className={`text-[10px] md:text-[12px] uppercase tracking-widest font-bold px-3 py-2 md:px-4 md:py-3 border rounded-sm transition-all text-left md:text-center ${
                                  isSelected 
                                    ? 'bg-old-gold text-heavy-metal border-old-gold shadow-md' 
                                    : 'border-white/20 text-ecru-white/70 hover:border-old-gold/50 hover:text-old-gold bg-black/40'
                                }`}
                              >
                                {feature}
                              </button>
                            );
                          })}
                          <button
                            type="button"
                            onClick={() => toggleSubService(entry.id, "Other / Needs Diagnosis")}
                            className={`text-[10px] md:text-[12px] uppercase tracking-widest font-bold px-3 py-2 md:px-4 md:py-3 border rounded-sm transition-all text-left md:text-center ${
                              entry.subServices.includes("Other / Needs Diagnosis") 
                                ? 'bg-old-gold text-heavy-metal border-old-gold shadow-md' 
                                : 'border-white/20 text-ecru-white/70 hover:border-old-gold/50 hover:text-old-gold bg-black/40'
                            }`}
                          >
                            Other / Diagnosis
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <button 
                  type="button" 
                  onClick={addServiceEntry}
                  className="flex items-center gap-2 text-[11px] md:text-[13px] font-black uppercase tracking-widest text-old-gold hover:text-ecru-white transition-colors py-1 md:py-2"
                >
                  <Plus size={16} className="md:w-[18px] md:h-[18px]" /> Add Another Service
                </button>
              </div>

              {/* Service Urgency Selector */}
              <div className="space-y-4 md:space-y-6 pt-4 md:pt-6 border-t border-white/10">
                <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-old-gold/80 flex items-center">
                  Arrival Urgency <span className="text-red-500 ml-1 text-sm md:text-lg leading-none">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
                  <UrgencyCard type="90-min" current={urgency} set={setUrgency} icon={Zap} title="Emergency" desc="Within 90 Mins" />
                  <UrgencyCard type="24-hours" current={urgency} set={setUrgency} icon={Clock} title="Priority" desc="Within 24 Hours" />
                  <UrgencyCard type="custom" current={urgency} set={setUrgency} icon={Calendar} title="Scheduled" desc="Pick Date & Time" />
                </div>
              </div>

              {/* Conditional Service Scheduling */}
              <AnimatePresence mode="popLayout">
                {urgency === 'custom' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-hidden pt-1 md:pt-2">
                    <FormInput label="Select Date" name="date" type="date" placeholder="DD/MM/YYYY" icon={Calendar} required min={getMinDate()} style={{ colorScheme: 'dark' }} />
                    <FormInput label="Select Time" name="time" type="time" placeholder="HH:MM" icon={Clock} required style={{ colorScheme: 'dark' }} />
                  </motion.div>
                )}
                {urgency === '24-hours' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pt-1 md:pt-2">
                    <div className="p-4 border border-old-gold/20 bg-old-gold/5 flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 rounded-sm">
                      <Clock className="text-old-gold shrink-0 hidden sm:block" size={24} />
                      <p className="text-[13px] md:text-[14px] font-medium text-ecru-white leading-relaxed flex items-start gap-2">
                        <Clock className="text-old-gold shrink-0 sm:hidden mt-0.5" size={16} />
                        Our technical team will reach out to you shortly to confirm the exact time for dispatch within the next 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          )}
        </div>

        <button 
          disabled={isPending}
          type="submit" 
          className="w-full bg-old-gold text-heavy-metal py-4 md:py-5 font-black text-[14px] md:text-[16px] uppercase flex items-center justify-center gap-2 md:gap-3 group hover:bg-ecru-white transition-all disabled:opacity-50 mt-8 md:mt-10 shadow-xl rounded-sm"
        >
          {isPending ? (
            <>Processing Authorization... <Loader2 className="animate-spin" size={18} className="md:w-[20px] md:h-[20px]" /></>
          ) : (
            <>Authorize Dispatch <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform md:w-[20px] md:h-[20px]" /></>
          )}
        </button>
        <p className="text-center text-[9px] md:text-[12px] uppercase tracking-widest font-bold text-white/40 mt-3 px-2">
          No credit card required. Payment collected post-service.
        </p>
      </form>
    </motion.div>
  );
}

function UrgencyCard({ type, current, set, icon: Icon, title, desc }: any) {
  const active = current === type;
  return (
    <div 
      onClick={() => set(type)}
      className={`cursor-pointer border p-4 md:p-5 rounded-sm transition-all flex flex-row sm:flex-col items-center sm:justify-center text-left sm:text-center gap-4 sm:gap-2 shadow-md ${active ? 'border-old-gold bg-old-gold/10 scale-[1.01] sm:scale-[1.02]' : 'border-white/10 hover:border-white/30 bg-black/40 hover:bg-black/60'}`}
    >
      <Icon size={20} className={`shrink-0 md:w-[24px] md:h-[24px] ${active ? 'text-old-gold' : 'text-dove-gray'}`} />
      <div>
        <div className={`text-[12px] md:text-[13px] font-black uppercase tracking-widest mb-0.5 md:mb-1 ${active ? 'text-ecru-white' : 'text-dove-gray'}`}>{title}</div>
        <div className={`text-[10px] md:text-[12px] font-bold ${active ? 'text-old-gold' : 'text-white/40'}`}>{desc}</div>
      </div>
    </div>
  );
}

function FormInput({ label, name, required, icon: Icon, placeholder, ...props }: any) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-old-gold/80 flex items-center group-focus-within:text-old-gold transition-colors">
        {label} {required && <span className="text-red-500 ml-1 text-sm md:text-lg leading-none">*</span>}
      </label>
      <div className="flex items-center gap-2 md:gap-3 w-full bg-black/40 border border-white/20 p-3 md:p-4 rounded-sm group-focus-within:border-old-gold transition-all relative">
        {Icon && <Icon size={16} className="text-white/40 group-focus-within:text-old-gold transition-colors shrink-0 md:w-[20px] md:h-[20px]" />}
        <input 
          name={name} 
          required={required} 
          placeholder={placeholder}
          {...props} 
          className="w-full bg-transparent outline-none font-bold text-[13px] md:text-[15px] text-ecru-white placeholder:text-white/20 truncate" 
        />
      </div>
    </div>
  );
}

function BookingSuccess() {
  return (
    <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-8 md:p-20 text-center bg-white/5 backdrop-blur-3xl border border-old-gold/30 flex flex-col items-center justify-center relative overflow-hidden h-full rounded-sm mt-8 md:mt-0">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-old-gold/10 rounded-full flex items-center justify-center mb-6 md:mb-8 border border-old-gold/20 shadow-[0_0_30px_rgba(209,171,67,0.2)]">
        <ShieldCheck className="text-old-gold w-[32px] h-[32px] md:w-[48px] md:h-[48px]" />
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic mb-4 md:mb-6 tracking-tighter text-ecru-white">
        Briefing <br className="sm:hidden" /><span className="text-old-gold">Authenticated.</span>
      </h3>
      <p className="text-[13px] md:text-[15px] text-dove-gray font-medium max-w-md mx-auto leading-relaxed mb-8 md:mb-12">
        Your dispatch authorization has been successfully received. Our technical team is reviewing the protocol and will initiate contact shortly.
      </p>
      <Link href="/services">
        <button className="border border-white/20 text-ecru-white px-8 md:px-12 py-4 md:py-5 font-black text-[10px] md:text-[13px] uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all rounded-sm w-full sm:w-auto">
          Return to Hub
        </button>
      </Link>
    </motion.div>
  );
}