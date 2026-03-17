import { services } from '@/lib/services-data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import BackgroundGrid from '@/components/ui/BackgroundGrid';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-heavy-metal relative overflow-hidden border-y border-white/5">
      
      {/* Background Grid Elements */}
      <BackgroundGrid />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-old-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-4 md:mb-6 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tighter uppercase italic text-ecru-white">
            We Fix It in <span className="text-old-gold">90 Minutes!</span> Maintenance at Your Doorstep
          </h3>
        </div>

        {/* --- SERVICES CAROUSEL/GRID --- */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 
                        overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none 
                        pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0
                        [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {services.map((service, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                className="group relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden block 
                           flex-none w-[85%] sm:w-[60%] md:w-auto snap-center md:snap-align-none"
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
                  
                  <p className="text-ecru-white/70 font-medium text-sm md:text-base line-clamp-2 max-w-xl mb-6 transition-colors duration-300 group-hover:text-ecru-white/90">
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