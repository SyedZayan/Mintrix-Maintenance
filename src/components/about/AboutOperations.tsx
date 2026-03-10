export default function AboutOperations() {
  const operations = [
    "Certified engineering protocols",
    "Structured diagnostic procedures",
    "Preventive maintenance audits",
    "Rapid response dispatch coordination",
    "Post-service verification and reporting"
  ];

  return (
    <section className="bg-heavy-metal text-ecru-white py-24 md:py-32 px-8 md:px-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-old-gold/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left: The Narrative */}
        <div className="lg:col-span-6 space-y-8 lg:pr-12">
          <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4">
            Operational Excellence
          </h2>
          <h3 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-tighter uppercase italic">
            The Standard of <br />
            <span className="text-old-gold">Discipline.</span>
          </h3>
          <div className="space-y-6 text-dove-gray font-medium text-lg leading-relaxed">
            <p>
              The difference between a standard reactive service and a premium technical partner lies in operational discipline.
            </p>
            <p>
              At Mintrix, our operations are governed by rigorous, structured procedures designed to maintain absolute consistency, safety, and quality across every service we deliver.
            </p>
            <p className="text-ecru-white font-bold pt-4 border-t border-old-gold/20">
              These processes allow us to maintain an uncompromising standard of reliability while delivering technical services efficiently and discreetly within premium environments.
            </p>
          </div>
        </div>

        {/* Right: The Process Steps */}
        <div className="lg:col-span-6 relative">
          <div className="bg-white/5 border border-old-gold/20 p-8 md:p-12 shadow-2xl backdrop-blur-sm relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[45px] md:left-[61px] top-[60px] bottom-[60px] w-0.5 bg-old-gold/20 z-0 hidden sm:block"></div>
            
            <ul className="space-y-8 relative z-10">
              {operations.map((op, index) => (
                <li key={index} className="flex items-center gap-6 group">
                  {/* Step Indicator */}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-heavy-metal border-2 border-old-gold flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(209,171,67,0.2)] group-hover:bg-old-gold transition-colors duration-300">
                    <div className="w-2 h-2 bg-old-gold rounded-full group-hover:bg-heavy-metal transition-colors duration-300"></div>
                  </div>
                  {/* Text */}
                  <p className="text-sm md:text-base font-black uppercase tracking-widest text-ecru-white group-hover:text-old-gold transition-colors duration-300">
                    {op}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}