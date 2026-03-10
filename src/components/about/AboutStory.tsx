import Image from 'next/image';

export default function AboutStory() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 bg-heavy-metal text-ecru-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-old-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Side: The Narrative */}
        <div className="lg:col-span-7 space-y-10 lg:pr-8">
          <div className="space-y-6">
            <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4">
              Our Story
            </h2>
            <p className="text-2xl md:text-3xl font-black uppercase italic tracking-tight leading-snug">
              Mintrix was founded with a clear understanding of a <span className="text-old-gold">growing gap</span> in the property services industry.
            </p>
          </div>

          <div className="space-y-6 text-dove-gray font-medium text-lg leading-relaxed">
            <p>
              As Dubai’s architecture continues to evolve into highly sophisticated environments integrating smart systems, advanced climate control, automation, and complex infrastructure traditional maintenance services often struggle to keep up with these technological demands.
            </p>

            {/* Highlight Callout Box */}
            <div className="bg-white/5 border-l-4 border-old-gold p-6 md:p-8 my-8 shadow-2xl backdrop-blur-sm">
              <p className="text-ecru-white font-black italic text-xl md:text-2xl uppercase tracking-tight leading-snug">
                Luxury properties require more than reactive repairs.
              </p>
              <p className="mt-4 text-old-gold uppercase tracking-widest text-sm font-black">
                They require engineering-level maintenance, predictive monitoring, and a disciplined operational approach.
              </p>
              <p className="mt-4 text-ecru-white font-medium">
                Mintrix was built to deliver exactly that.
              </p>
            </div>

            <p>
              Our foundation lies in combining engineering expertise, operational precision, and rapid-response service to create a maintenance company capable of supporting the modern infrastructure of Dubai’s most advanced buildings.
            </p>
            <p className="text-ecru-white font-bold pt-4 border-t border-old-gold/20">
              Today, Mintrix supports residential, commercial, and high-rise environments where system reliability is not optional  it is essential.
            </p>
          </div>
        </div>

        {/* Right Side: Visual Anchor */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-old-gold/20 shadow-2xl group">
            <div className="absolute inset-0 bg-heavy-metal/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image 
              src="/service-maintenance-worker-repairing (1).jpg" /* Replace with your actual image path */
              alt="Dubai Advanced Architecture"
              fill
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-in-out"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-old-gold/40 z-0 hidden md:block" />
        </div>

      </div>
    </section>
  );
}