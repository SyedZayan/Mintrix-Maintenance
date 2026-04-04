import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 bg-heavy-metal text-ecru-white relative overflow-hidden flex items-center min-h-[80vh]">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 w-full">
        
        <div className="space-y-5 md:space-y-6 lg:pr-8">
          <h2 className="text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-3">
            About Us – Mintrix Maintenance
          </h2>
          
          {/* Reduced heading sizes across breakpoints */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tighter uppercase italic">
            Your Trusted <br /> 
            <span className="text-old-gold">Maintenance</span> <br />
            Company in Downtown Dubai.
          </h1>
          
          {/* Changed color from dove-gray to ecru-white/90 and bumped text size */}
          <div className="space-y-4 text-ecru-white/90 text-base md:text-lg leading-relaxed font-medium max-w-xl">
            <p>
              Mintrix Maintenance is a professional property maintenance company in Downtown Dubai, dedicated to providing reliable, efficient, and high-quality repair and maintenance solutions for residential and commercial properties.
            </p>
            <p>
              We understand how important it is to keep your home, apartment, villa, or office in perfect condition. That’s why our team focuses on delivering fast, practical, and long-lasting solutions for all types of maintenance needs.
            </p>
            {/* Added a bit more brightness to this final standout line */}
            <p className="text-ecru-white font-bold pt-4 border-t border-old-gold/40 mt-6 inline-block">
              From small repairs to complete maintenance support, we make property care simple, stress-free, and dependable.
            </p>
          </div>
        </div>

        <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden border border-old-gold/20 shadow-2xl">
          <Image 
            src="/images/about_page/working1.jpg" 
            alt="Mintrix Professional Team"
            fill
            className="object-cover"
            priority
          />
        </div>
        
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-old-gold/5 blur-[160px] pointer-events-none" />
    </section>
  );
}