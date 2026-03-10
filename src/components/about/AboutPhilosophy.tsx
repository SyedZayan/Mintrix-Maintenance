export default function AboutPhilosophy() {
  const principles = [
    {
      num: "01",
      title: "Preventive Engineering",
      desc: "Rather than waiting for systems to fail, we monitor infrastructure continuously and identify vulnerabilities before they become problems."
    },
    {
      num: "02",
      title: "Precision Execution",
      desc: "Every repair, installation, and maintenance task is performed using structured procedures and certified protocols to ensure consistent quality."
    },
    {
      num: "03",
      title: "Rapid Response",
      desc: "When issues arise, response speed becomes critical. Our operational model is designed for rapid dispatch and immediate intervention."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-8 md:px-12 bg-ecru-white text-heavy-metal">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Section: The Narrative */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
          
          {/* Left Column: The Problem */}
          <div className="space-y-8">
            <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4">
              Our Philosophy
            </h2>
            <h3 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tighter uppercase italic">
              The Philosophy <br /> Behind Mintrix
            </h3>
            
            <div className="space-y-6 text-dove-gray font-medium text-lg leading-relaxed">
              <p>Maintenance is often treated as a reactive industry.</p>
              
              {/* CLEANED UP: Visual representation of the "Old Way" */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 py-5 px-6 bg-heavy-metal/5 border-l-2 border-heavy-metal/20 w-fit">
                <span className="uppercase tracking-widest text-xs font-black text-heavy-metal">
                  Something Breaks
                </span>
                <span className="text-old-gold font-black hidden sm:block">→</span>
                <span className="uppercase tracking-widest text-xs font-black text-heavy-metal">
                  Technician Arrives
                </span>
                <span className="text-old-gold font-black hidden sm:block">→</span>
                <span className="uppercase tracking-widest text-xs font-black text-heavy-metal">
                  Repair Is Made
                </span>
              </div>

              <p>
                But this approach does not work in high-value environments. Luxury residences, penthouses, and modern corporate buildings rely on complex networks of HVAC systems, electrical distribution, automation infrastructure, and mechanical components. 
              </p>
              <p>
                When one part fails, it can affect comfort, productivity, and sometimes even property value.
              </p>
            </div>
          </div>

          {/* Right Column: The Mintrix Solution */}
          <div className="relative">
            {/* Decorative background accent */}
            <div className="absolute -inset-4 bg-old-gold/5 transform rotate-2 z-0 hidden lg:block"></div>
            
            <div className="bg-heavy-metal text-ecru-white p-10 md:p-14 shadow-2xl relative z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-old-gold/10 blur-[40px] pointer-events-none" />
              
              <h4 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight mb-6">
                At Mintrix, we approach maintenance differently.
              </h4>
              <p className="text-old-gold text-xl md:text-2xl font-black uppercase tracking-widest leading-snug mb-6 border-l-4 border-old-gold pl-6">
                We treat buildings as living technical ecosystems.
              </p>
              <p className="text-dove-gray font-medium text-lg">
                Each component — mechanical, electrical, digital, and structural — must operate in harmony with the others.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: The 3 Principles Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="bg-heavy-metal group relative p-10 overflow-hidden hover:-translate-y-2 transition-transform duration-500 ease-out"
            >
              {/* Giant background number */}
              <span className="absolute -bottom-6 -right-4 text-9xl font-black text-white/[0.03] group-hover:text-old-gold/[0.05] transition-colors duration-500 pointer-events-none">
                {principle.num}
              </span>
              
              {/* Card Content */}
              <div className="relative z-10">
                <span className="text-old-gold font-black tracking-widest mb-6 block border-b border-old-gold/20 pb-4 inline-block">
                  {principle.num} //
                </span>
                <h5 className="text-ecru-white text-2xl font-black uppercase italic mb-4">
                  {principle.title}
                </h5>
                <p className="text-dove-gray font-medium leading-relaxed">
                  {principle.desc}
                </p>
              </div>
              
              {/* Bottom accent border that grows on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-old-gold group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}