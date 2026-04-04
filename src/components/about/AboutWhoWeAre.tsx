import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const expertiseList = [
  "Air conditioning services and repair",
  "Plumbing maintenance and leak fixing",
  "Electrical troubleshooting and installations",
  "Masonry and minor civil work",
  "CCTV installation and security solutions",
  "General handyman services"
];

export default function AboutWhoWeAre() {
  return (
    // Removed the forced min-h-[80vh] so the mobile layout flows naturally
    <section className="py-16 md:py-24 px-6 md:px-12 bg-ecru-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: The Content */}
          <div className="space-y-8 lg:pr-6">
            
            {/* Header Area */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">
                <span className="w-8 h-[2px] bg-old-gold inline-block"></span>
                Who We Are
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tighter uppercase italic text-heavy-metal">
                Built on <br />
                <span className="text-old-gold">Trust.</span>
              </h3>
            </div>
            
            <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed">
              Mintrix Maintenance was built with a clear goal — to provide honest, reliable, and professional maintenance services in Downtown Dubai. Our team consists of skilled technicians with hands-on experience in:
            </p>

            {/* Checklist Grid - Adjusts cleanly on mobile */}
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
              {expertiseList.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-0.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-old-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-heavy-metal font-bold text-sm leading-snug group-hover:text-old-gold transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Redesigned Callout Box: Clean, Light, and Editorial */}
            <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
              {/* Gold Accent Line */}
              <div className="absolute left-0 top-0 w-1.5 h-full bg-old-gold" />
              
              <p className="text-heavy-metal font-bold text-sm md:text-base leading-relaxed">
                We work with homeowners, tenants, landlords, and businesses, offering solutions that are both <span className="text-old-gold uppercase tracking-widest font-black text-xs md:text-sm block mt-2 sm:mt-0 sm:inline sm:ml-1">Effective and Affordable.</span>
              </p>
            </div>

          </div>

          {/* Right Side: The Image Frame */}
          <div className="relative mt-4 lg:mt-0 w-full">
            {/* Subtle background accent block */}
            <div className="absolute -inset-3 md:-inset-4 bg-old-gold/10 rounded-2xl md:rounded-3xl transform rotate-2 z-0" />
            
            {/* Image Container */}
            <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white z-10 group bg-heavy-metal">
              <Image 
                src="/images/about_page/who-we-are1.webp" // Replace with your actual image path
                alt="Mintrix Maintenance Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Clean Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal/90 via-heavy-metal/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <p className="text-old-gold font-black text-[10px] tracking-[0.3em] uppercase mb-1.5">
                  Mintrix Standard //
                </p>
                <p className="text-ecru-white font-medium text-sm md:text-base">
                  Professional standards. Every time.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}