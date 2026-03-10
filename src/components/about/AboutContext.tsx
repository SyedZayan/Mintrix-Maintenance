export default function AboutContext() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 bg-ecru-white">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
        
        {/* Left Side: The Intro */}
        <div className="space-y-8 lg:pr-16">
          <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4">
            About Mintrix Maintenance
          </h2>
          <h3 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tighter uppercase italic text-heavy-metal">
            Engineering <br />
            <span className="text-old-gold">Reliability.</span>
          </h3>
          
          {/* Paragraph Wrapper for Tighter Spacing */}
          <div className="space-y-4">
            <p className="text-lg text-dove-gray font-medium leading-relaxed">
              Dubai is a city defined by precision, ambition, and world-class infrastructure. Its skyline represents some of the most advanced residential and commercial architecture on the planet — from luxury penthouses overlooking Downtown to high-performance corporate towers operating around the clock. This is where Mintrix Maintenance was created to operate.
            </p>
            <p className="text-lg text-dove-gray font-medium leading-relaxed">
              Mintrix is not simply a maintenance company.
            We are a technical reliability partner, dedicated to protecting and maintaining the systems that keep Dubai’s most valuable assets functioning at their highest standard.
            From high-rise HVAC systems to smart-home infrastructure, advanced MEP networks, and luxury interior environments, Mintrix provides the precision, response speed, and technical expertise required to maintain modern properties in one of the world’s most demanding climates.
            </p>
          </div>
        </div>

        {/* Right Side: High-Contrast Impact Box Overlapping */}
        <div className="bg-heavy-metal p-10 md:p-14 shadow-2xl space-y-8 relative overflow-hidden lg:-ml-12 z-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-old-gold/10 blur-[50px] pointer-events-none" />
          
          <p className="text-xl md:text-2xl font-black italic text-ecru-white uppercase tracking-tight">
            But behind every iconic property lies a reality few people consider:
          </p>
          
          <ul className="space-y-6 font-black text-old-gold uppercase tracking-widest text-sm md:text-base">
            <li className="flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-old-gold"></span> Complex systems.
            </li>
            <li className="flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-old-gold"></span> Constant mechanical pressure.
            </li>
            <li className="flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-old-gold"></span> High-performance infrastructure.
            </li>
          </ul>
          
          <p className="text-sm text-dove-gray uppercase tracking-widest pt-6 border-t border-old-gold/20">
            That must operate flawlessly every second.
          </p>
        </div>

      </div>
    </section>
  );
}