import { services } from '@/lib/services-data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-ecru-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4 mb-6">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter uppercase italic text-heavy-metal max-w-3xl">
            Contracting Services <br />
            Built For <span className="text-old-gold">Quality Execution.</span>
          </h3>
          <p className="text-dove-gray font-medium text-lg leading-relaxed max-w-2xl mt-8">
            We cover the complete contracting scope across the UAE — delivered with meticulous planning, strict safety compliance, and timely handover.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            // This logic creates the dynamic Zig-Zag layout:
            // Row 1: Span 2 | Span 1
            // Row 2: Span 1 | Span 2
            // Row 3: Span 2 | Span 1
            let spanClass = "md:col-span-1";
            if (index === 0 || index === 3 || index === 4) {
              spanClass = "md:col-span-2";
            }

            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                className={`group relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden block ${spanClass}`}
              >
                {/* Background Image */}
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-heavy-metal/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Number Pill (Top Right) */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center z-10">
                  <span className="text-ecru-white font-black text-xs">{formattedIndex}</span>
                </div>

                {/* Content (Bottom Aligned) */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end z-10">
                  <h4 className="text-2xl md:text-3xl font-black text-ecru-white uppercase tracking-tight mb-3">
                    {service.title}
                  </h4>
                  
                  <p className="text-ecru-white/70 font-medium text-sm md:text-base line-clamp-2 max-w-xl mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-old-gold font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                    Explore Service <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}