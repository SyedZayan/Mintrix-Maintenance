import Image from 'next/image';

export default function AboutTeam() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 bg-heavy-metal text-ecru-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-old-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Visual Anchor (Flipped layout from Our Story) */}
        <div className="order-2 lg:order-1 relative">
          <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-old-gold/20 shadow-2xl group">
            <div className="absolute inset-0 bg-heavy-metal/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image 
              src="/our-team.jpg" /* Replace with your actual image path */
              alt="Mintrix Professional Technician"
              fill
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-in-out"
            />
          </div>
          {/* Decorative architectural grid element */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-old-gold/40 z-0 hidden md:block" />
        </div>

        {/* Right Side: The Narrative */}
        <div className="order-1 lg:order-2 space-y-10">
          <div className="space-y-6">
            <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4">
              Our Professionals
            </h2>
            <h3 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tighter uppercase italic">
              A Team Built For <br />
              <span className="text-old-gold">Precision.</span>
            </h3>
          </div>

          <div className="space-y-8 text-dove-gray font-medium text-lg leading-relaxed">
            
            {/* Tighter spacing wrapper for the paragraphs */}
            <div className="space-y-3">
              <p>
                Behind every successful operation is a team of professionals who understand the importance of discipline, expertise, and accountability.
              </p>
              <p>
                The Mintrix team consists of experienced specialists across multiple technical disciplines, including HVAC engineering, electrical systems, mechanical maintenance, IT infrastructure, and luxury fit-out services.
              </p>
              <p>
                Every technician undergoes rigorous vetting and training to ensure they can operate within the demanding environments of premium residential and commercial properties.
              </p>
            </div>

            {/* High-Impact Callout Box */}
            <div className="bg-heavy-metal/50 border border-old-gold/30 p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-old-gold" />
              <p className="text-old-gold font-black uppercase tracking-widest text-sm mb-3">
                But technical skills alone are not enough.
              </p>
              <p className="text-ecru-white text-xl md:text-2xl font-black italic uppercase tracking-tight leading-snug">
                Our teams are also trained to operate with professionalism, discretion, and respect for the environments in which they work.
              </p>
            </div>

            <p className="text-ecru-white font-bold pt-4 border-t border-old-gold/20">
              When operating inside private residences or corporate offices, maintaining a clean, organized, and respectful work environment is just as important as completing the technical task.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}