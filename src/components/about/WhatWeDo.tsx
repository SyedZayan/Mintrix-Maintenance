import Image from 'next/image';
import { Wind, Droplets, Zap, Hammer, Cctv, Wrench } from 'lucide-react';

const services = [
  {
    icon: Wind,
    title: "AC & Climate",
    desc: "AC servicing, repair, and troubleshooting."
  },
  {
    icon: Droplets,
    title: "Plumbing",
    desc: "Plumbing repairs and water leak fixing."
  },
  {
    icon: Zap,
    title: "Electrical",
    desc: "Electrical repairs, installations, and inspections."
  },
  {
    icon: Hammer,
    title: "Civil Repairs",
    desc: "Tile fixing and minor civil repairs."
  },
  {
    icon: Cctv,
    title: "Security",
    desc: "CCTV installation and maintenance."
  },
  {
    icon: Wrench,
    title: "Handyman",
    desc: "General handyman and home repair."
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 bg-ecru-white text-heavy-metal relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-old-gold/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-20 relative z-10">
        
        {/* Header Section */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-10 lg:pr-8 order-1">
          <div className="space-y-4 md:space-y-5">
            <h2 className="flex items-center gap-3 text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">
              <span className="w-8 h-[2px] bg-old-gold inline-block"></span>
              Our Services
            </h2>
            
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight lg:leading-[1.05] tracking-tighter uppercase italic text-heavy-metal">
              What We <span className="text-old-gold">Do.</span>
            </h3>
            
            <p className="text-gray-600 font-medium text-sm md:text-lg leading-relaxed max-w-xl">
              We offer a complete range of property maintenance services in Dubai, designed to handle everyday repair needs.
            </p>
          </div>

          {/* Desktop/Tablet Grid - Hidden on mobile */}
          <div className="hidden sm:grid grid-cols-2 gap-x-8 gap-y-8 pt-6 border-t border-old-gold/20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex gap-4 group cursor-default">
                  <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-old-gold/20 flex items-center justify-center shrink-0 group-hover:bg-old-gold group-hover:border-old-gold group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_20px_rgba(218,165,32,0.2)]">
                    <Icon className="w-5 h-5 text-old-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-heavy-metal font-black uppercase tracking-wide text-sm md:text-base mb-1 group-hover:text-old-gold transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fixed Image Section - Removed fixed min-h on mobile to prevent overflow */}
        <div className="lg:col-span-5 relative order-2 w-full aspect-video lg:aspect-auto lg:h-full lg:min-h-[500px] rounded-xl md:rounded-3xl overflow-hidden shadow-2xl border border-old-gold/20 group">
          <Image 
            src="/images/about_page/what-we-do.png" 
            alt="Mintrix Maintenance Services"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-heavy-metal/40 to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 w-full p-5 md:p-10">
            <div className="border-l-4 border-old-gold pl-4 md:pl-5">
              <p className="text-ecru-white font-black italic text-base md:text-2xl uppercase tracking-tight leading-tight">
                Whether it’s a quick fix or ongoing maintenance...
              </p>
              <p className="mt-2 md:mt-4 text-old-gold uppercase tracking-widest text-[9px] md:text-xs font-black">
                Our team ensures every job is completed professionally.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Mobile Service Grid */}
        <div className="sm:hidden grid grid-cols-2 gap-3 order-3 pt-4 border-t border-old-gold/10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-4 rounded-xl border border-old-gold/10 flex flex-col items-center text-center shadow-sm">
                <div className="w-10 h-10 bg-ecru-white rounded-full flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-old-gold" />
                </div>
                <h4 className="text-[10px] font-black uppercase leading-tight text-heavy-metal">
                  {service.title}
                </h4>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}