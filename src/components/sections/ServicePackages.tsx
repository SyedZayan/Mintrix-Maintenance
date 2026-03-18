'use client';

import { Zap, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// IDs updated to perfectly match src/lib/packages-data.ts for dynamic routing
const packages = [
  {
    id: 'express-dispatch', 
    name: 'Rapid Response',
    timeframe: 'Within 90 Mins',
    description: 'Immediate, priority assistance for urgent maintenance issues when you simply cannot afford to wait.',
    icon: Zap,
    highlight: true,
    features: [
      'Priority technician dispatch',
      'Ideal for critical leaks & AC failures',
      'Immediate on-site diagnostics',
      'Fully equipped response vehicles'
    ],
  },
  {
    id: 'priority-next-day',
    name: 'Next-Day Resolution',
    timeframe: 'Within 24 Hours',
    description: 'Fast and reliable service for standard maintenance issues, guaranteed by the very next day.',
    icon: Clock,
    highlight: false,
    features: [
      'Service within 24 hours',
      'Dedicated booking slot',
      'Standard repair & maintenance',
      'Comprehensive system check'
    ],
  },
  {
    id: 'preventive-maintenance',
    name: 'Flexible Scheduling',
    timeframe: 'At Your Convenience',
    description: 'Plan ahead. Choose a specific date and time that perfectly aligns with your busy schedule.',
    icon: Calendar,
    highlight: false,
    features: [
      'Choose your exact date & time',
      'Easy rescheduling options',
      'Perfect for routine maintenance',
      'Pre-arrival notifications'
    ],
  }
];

export default function ServicePackages() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#f9f8ee] text-gray-900 relative border-t border-gray-200 overflow-hidden">
      
      {/* Custom CSS for Animations and Hidden Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes subtle-zoom {
          0%, 100% { 
            transform: scale(1) translateY(0); 
            box-shadow: 0 0 25px -5px rgba(218,165,32,0.3); 
          }
          50% { 
            transform: scale(1.03) translateY(-6px); 
            box-shadow: 0 0 45px 5px rgba(218,165,32,0.45); 
          }
        }
        .highlight-card-anim {
          animation: subtle-zoom 4s ease-in-out infinite;
        }

        @keyframes seal-pulse {
          0% { box-shadow: 0 0 0 0 rgba(209, 171, 67, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(209, 171, 67, 0); }
          100% { box-shadow: 0 0 0 0 rgba(209, 171, 67, 0); }
        }
        .guarantee-seal {
          animation: seal-pulse 3s infinite;
        }
      `}} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
          <h2 className="text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
            Service Timelines
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none mb-4 md:mb-5">
            Paced to <span className="text-old-gold">Your Needs.</span>
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Whether it is an absolute emergency or a planned home improvement, we offer tailored response times to ensure your property is cared for exactly when you need it.
          </p>
        </div>

        {/* Packages Grid / Mobile Slider */}
        <div className="flex md:grid md:grid-cols-3 gap-5 lg:gap-8 pt-8 pb-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scroll -mx-6 px-6 md:mx-0 md:px-0">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={pkg.id}
                className={`w-[85vw] sm:w-[380px] md:w-auto flex-shrink-0 snap-center group relative rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-500 bg-heavy-metal text-ecru-white
                  ${pkg.highlight 
                    ? 'border-2 border-old-gold z-10 highlight-card-anim origin-center bg-gradient-to-br from-heavy-metal to-[#2a2a2a]' 
                    : 'border border-white/10 shadow-xl shadow-heavy-metal/20 hover:-translate-y-2' 
                  }`}
              >
                {/* Prominent Top Badge */}
                {pkg.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-old-gold text-heavy-metal font-black text-xs uppercase tracking-widest py-2 px-6 rounded-full shadow-[0_8px_16px_-6px_rgba(218,165,32,0.5)] border-4 border-[#f9f8ee] whitespace-nowrap z-20">
                    Highest Priority
                  </div>
                )}

                {/* Guarantee Plate */}
                {pkg.highlight && (
                  <div className="absolute top-5 right-5 md:top-6 md:right-6 z-20 flex flex-col items-center justify-center w-[68px] h-[68px] md:w-[78px] md:h-[78px] bg-[#d1ab43] rounded-xl shadow-[0_10px_25px_-5px_rgba(209,171,67,0.6)] guarantee-seal p-1">
                    <div className="w-full h-full border border-heavy-metal/30 rounded-lg flex flex-col items-center justify-center bg-[#d1ab43]">
                      <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-heavy-metal/80 mb-[-2px]">Within</span>
                      <span className="text-2xl md:text-3xl font-black leading-none tracking-tighter text-heavy-metal drop-shadow-sm">90</span>
                      <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest mt-0.5 text-heavy-metal/90">Mins</span>
                    </div>
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-6 relative z-10 mt-2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 bg-old-gold/10 text-old-gold">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 pr-[80px] md:pr-[90px]">
                    {pkg.name}
                  </h4>
                  <div className={`font-medium tracking-wide mb-3 
                    ${pkg.highlight ? 'text-old-gold' : 'text-gray-400'}`}>
                    {pkg.timeframe}
                  </div>
                  <p className="text-sm leading-relaxed text-ecru-white/70">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="flex-grow relative z-10">
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-old-gold" />
                        <span className={`text-sm font-medium ${pkg.highlight ? 'text-ecru-white/90' : 'text-ecru-white/70'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DYNAMIC ROUTING TO BOOKING PAGE */}
                <Link href={`/booking?pkg=${pkg.id}`} className="mt-auto relative z-10">
                  <button className={`w-full group/btn py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wider transition-all duration-300
                    ${pkg.highlight 
                      ? 'bg-old-gold text-heavy-metal shadow-lg shadow-old-gold/20' 
                      : 'bg-white/5 text-ecru-white border border-white/10 hover:bg-old-gold hover:text-heavy-metal hover:border-old-gold hover:shadow-lg hover:shadow-old-gold/20'
                    }`}>
                    Book Now
                    <ArrowRight size={16} className={`transition-transform duration-300 ${pkg.highlight ? '' : 'group-hover/btn:translate-x-1'}`} />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}