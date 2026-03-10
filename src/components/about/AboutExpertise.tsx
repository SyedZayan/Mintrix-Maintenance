"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function AboutExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);

  const expertiseAreas = [
    {
      num: "01",
      title: "Air Conditioning & Climate Control",
      desc: "Cooling infrastructure is the lifeblood of any property in Dubai. Whether operating in a luxury villa or a high-demand commercial space, maintaining optimal airflow, thermal balance, and energy efficiency is critical. Our HVAC specialists deliver engineering-grade maintenance and rapid troubleshooting.",
      image: "/ac1.jpg" 
    },
    {
      num: "02",
      title: "Comprehensive MEP (Electrical & Plumbing)",
      desc: "Electrical and Plumbing networks form the vital core of your property. From complex power distribution and load balancing to advanced sanitary installations and water pressure optimization, these components must operate with zero margin for error.",
      image: "/1.jpg" 
    },
    {
      num: "03",
      title: "Masonry, Civil Works & Bespoke Renovations",
      desc: "High-value environments demand meticulous care. We provide architectural-grade masonry, seamless civil repairs, and targeted interior layout modifications. Our specialists preserve and enhance your property’s aesthetic standards without disruption.",
      image: "/2.jpg" 
    },
    {
      num: "04",
      title: "CCTV, Security & IT Infrastructure",
      desc: "In modern properties, digital security infrastructure is just as vital as mechanical systems. Mintrix designs, installs, and maintains enterprise-grade CCTV networks and surveillance systems. We ensure uninterrupted, reliable protection for your peace of mind.",
      image: "/cctv2.jpg" 
    }
  ];

  return (
    <section className="bg-ecru-white py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4 mb-6">
            Specialized Expertise
          </h2>
          <h3 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter uppercase italic text-heavy-metal">
            Engineered to <br className="hidden md:block"/>
            <span className="text-old-gold">Protect</span> & <span className="text-old-gold">Optimize.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Sticky Interactive Image Reveal (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative aspect-[4/5] w-full bg-heavy-metal shadow-2xl overflow-hidden border border-heavy-metal/10">
              {expertiseAreas.map((item, index) => (
                <Image
                  key={index}
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-all duration-700 ease-in-out ${
                    activeIndex === index 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-105 z-0'
                  }`}
                />
              ))}
              {/* Glassmorphic overlay for branding */}
              <div className="absolute bottom-6 left-6 right-6 bg-heavy-metal/60 backdrop-blur-md border border-white/10 p-6 z-20">
                <p className="text-old-gold font-black text-sm uppercase tracking-widest mb-1">
                  Mintrix Standard //
                </p>
                <p className="text-ecru-white font-medium">
                  {expertiseAreas[activeIndex].title}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Menu List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="border-t border-heavy-metal/20">
              {expertiseAreas.map((item, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <div 
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)} // Added for tablet touch compatibility
                    className="group relative border-b border-heavy-metal/20 py-10 md:py-14 cursor-pointer transition-colors duration-500 hover:bg-heavy-metal/5 px-0 lg:px-8 -mx-0 lg:-mx-8"
                  >
                    {/* Active Indicator Line (Hidden on Mobile) */}
                    <div className={`hidden lg:block absolute left-0 top-0 w-1 h-full bg-old-gold transition-transform duration-500 origin-top ${
                      isActive ? 'scale-y-100' : 'scale-y-0'
                    }`} />

                    <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-8 mb-6">
                      <span className={`font-black text-2xl transition-colors duration-500 text-old-gold lg:${
                        isActive ? 'text-old-gold' : 'text-heavy-metal/20'
                      }`}>
                        {item.num}
                      </span>
                      <h4 className={`text-2xl md:text-3xl lg:text-4xl font-black uppercase italic tracking-tight transition-colors duration-500 text-heavy-metal lg:${
                        isActive ? 'text-heavy-metal' : 'text-heavy-metal/40'
                      }`}>
                        {item.title}
                      </h4>
                    </div>
                    
                    {/* Mobile Image (Shows only on mobile/tablet) */}
                    <div className="lg:hidden relative aspect-[4/3] sm:aspect-video w-full mb-6 rounded-sm overflow-hidden border border-heavy-metal/10 shadow-lg">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>

                    <p className={`font-medium leading-relaxed max-w-2xl transition-all duration-500 text-dove-gray lg:${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}