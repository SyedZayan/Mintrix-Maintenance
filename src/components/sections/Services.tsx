import { services } from '@/lib/services-data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import BackgroundGrid from '@/components/ui/BackgroundGrid';

export default function ServicesHero() {
  return (
    <section 
      id="services" 
      className="relative min-h-screen w-full bg-heavy-metal overflow-hidden flex flex-col items-center justify-center"
    >
      <BackgroundGrid />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-old-gold/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-old-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full pt-[140px] md:pt-[120px] pb-8 flex flex-col h-full max-w-[1920px]">
        
        <div className="mb-8 md:mb-12 px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-tighter uppercase italic text-ecru-white drop-shadow-2xl">
            We Fix It in <span className="text-old-gold transition-all duration-500 hover:brightness-125">90 Minutes!</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl opacity-90">Maintenance at Your Doorstep</span>
          </h1>
        </div>

        {/* --- MOBILE HORIZONTAL SCROLL / DESKTOP GRID --- */}
        {/* Added 'flex overflow-x-auto' for mobile and 'md:grid' for desktop */}
        <div className="flex overflow-x-auto overflow-y-hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full flex-grow px-6 md:px-12 lg:px-16 scrollbar-hide snap-x snap-mandatory">
          {services.slice(0, 6).map((service, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                // Added min-width and snap-align for the horizontal mobile effect
                className="group relative flex-shrink-0 w-[85vw] md:w-auto h-[50vh] md:h-[28vh] lg:h-[30vh] rounded-[24px] overflow-hidden block 
                           border border-white/10 hover:border-old-gold/50 
                           transition-all duration-700 ease-in-out bg-heavy-metal/50 shadow-2xl snap-center"
              >
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  priority={index < 3} 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                
                <div className="absolute inset-3 rounded-[18px] border border-white/5 pointer-events-none z-20 group-hover:border-white/20 transition-all duration-500" />
                
                <div className="absolute top-5 left-5 w-4 h-4 border-t border-l border-old-gold/0 group-hover:border-old-gold transition-all duration-500 z-30" />
                <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-old-gold/0 group-hover:border-old-gold transition-all duration-500 z-30" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-10" />
                
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center z-30 transition-all duration-500 group-hover:bg-old-gold group-hover:border-old-gold">
                  <span className="text-ecru-white group-hover:text-black font-black text-xs transition-colors">{formattedIndex}</span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col justify-end z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-xl md:text-2xl font-black text-ecru-white uppercase tracking-tighter mb-1 leading-none group-hover:text-old-gold transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-ecru-white/60 font-medium text-xs md:text-sm line-clamp-1 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-old-gold font-bold text-[10px] uppercase tracking-[0.2em]">
                    <span className="overflow-hidden whitespace-nowrap">Explore Service</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1000ms] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}