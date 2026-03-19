import { Zap, ShieldCheck, Search, ThumbsUp } from 'lucide-react';

const aims = [
  {
    icon: Zap,
    title: "Quick & Efficient",
    description: "Solve problems quickly and efficiently without compromising quality."
  },
  {
    icon: ShieldCheck,
    title: "Long-Lasting",
    description: "Deliver long-lasting repair solutions you can depend on."
  },
  {
    icon: Search,
    title: "Transparent",
    description: "Maintain absolute transparency in pricing and the work we do."
  },
  {
    icon: ThumbsUp,
    title: "Hassle-Free",
    description: "Provide a smooth, stress-free, and professional experience."
  }
];

export default function AboutMission() {
  return (
    // FIX: Moved flex, items-center, and min-h to 'lg:' so mobile flows naturally
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-12 bg-heavy-metal text-ecru-white relative overflow-hidden lg:flex lg:items-center lg:min-h-[80vh]">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-old-gold/15 via-heavy-metal to-heavy-metal pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-old-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10 w-full">
        
        {/* Left Side: The Core Mission */}
        <div className="space-y-8 lg:pr-8">
          <div className="space-y-4 md:space-y-5">
            <h2 className="flex items-center gap-3 text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">
              <span className="w-8 h-[2px] bg-old-gold inline-block"></span>
              Our Mission
            </h2>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black leading-snug tracking-tighter uppercase italic text-ecru-white">
              To provide fast, reliable, and <span className="text-old-gold">high-quality maintenance</span> in Dubai that customers can trust.
            </h3>
          </div>

          <div className="space-y-6">
            {/* Highlight Callout Box for the closing statement */}
            <div className="bg-white/5 border-l-4 border-old-gold p-6 md:p-8 rounded-r-2xl shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Subtle accent inside the box */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-old-gold/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              
              <p className="text-ecru-white font-black italic text-lg md:text-xl lg:text-2xl uppercase tracking-tight leading-snug relative z-10">
                Maintenance should never be complicated.
              </p>
              <p className="mt-3 text-old-gold uppercase tracking-widest text-xs md:text-sm font-black relative z-10">
                It should be easy, quick, and reliable.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: The Aims Grid (Bento Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative mt-4 lg:mt-0">
          {aims.map((aim, index) => {
            const Icon = aim.icon;
            return (
              <div 
                key={index} 
                // FIX: Reduced mobile min-height and padding so the cards aren't massively tall on phones
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-old-gold/30 p-5 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-300 group flex flex-col justify-center min-h-[140px] md:min-h-[180px]"
              >
                {/* FIX: Tighter margin under the icon on mobile */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-heavy-metal border border-old-gold/30 flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 group-hover:border-old-gold transition-all duration-300 shadow-[0_0_15px_rgba(218,165,32,0.1)] group-hover:shadow-[0_0_20px_rgba(218,165,32,0.3)]">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-old-gold" />
                </div>
                <h4 className="text-ecru-white font-black uppercase tracking-wide text-sm md:text-base mb-1 md:mb-2 group-hover:text-old-gold transition-colors duration-300">
                  {aim.title}
                </h4>
                <p className="text-ecru-white/70 text-xs md:text-sm leading-relaxed font-medium">
                  {aim.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}