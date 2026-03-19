export default function OurApproach() {
  // Updated to an array of objects to include both title and description
  const operations = [
    {
      title: "Understand the Problem",
      description: "We carefully assess the issue to identify the root cause."
    },
    {
      title: "Provide the Right Solution",
      description: "Our technicians recommend practical and cost-effective solutions."
    },
    {
      title: "Fix It Professionally",
      description: "We complete the job using the right tools and techniques."
    },
    {
      title: "Ensure Customer Satisfaction",
      description: "We make sure everything is working perfectly before we leave."
    }
  ];

  return (
    <section className="bg-heavy-metal text-ecru-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-old-gold/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left: The Narrative */}
        <div className="lg:col-span-5 space-y-6 lg:pr-8">
          <h2 className="text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-3">
            Proven Process
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tighter uppercase italic">
            Our Approach To <br />
            <span className="text-old-gold">Maintenance.</span>
          </h3>
          <div className="space-y-6 text-dove-gray font-medium text-sm md:text-base leading-relaxed">
            <p>
              At Mintrix Maintenance, we follow a simple and effective approach:
            </p>
            <p className="text-ecru-white font-bold pt-4 border-t border-old-gold/20">
              This approach helps us maintain high standards and build trust with our customers.
            </p>
          </div>
        </div>

        {/* Right: The Process Steps */}
        <div className="lg:col-span-7 relative">
          <div className="bg-white/5 border border-old-gold/20 p-6 md:p-10 shadow-2xl backdrop-blur-sm relative rounded-xl md:rounded-3xl">
            {/* Vertical connecting line */}
            <div className="absolute left-[39px] md:left-[59px] top-[50px] bottom-[50px] w-0.5 bg-old-gold/20 z-0 hidden sm:block"></div>
            
            <ul className="space-y-8 relative z-10">
              {operations.map((op, index) => (
                <li key={index} className="flex items-start gap-5 group">
                  {/* Step Indicator (Updated to show numbers) */}
                  <div className="mt-1 w-8 h-8 md:w-10 md:h-10 rounded-full bg-heavy-metal border-2 border-old-gold flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(209,171,67,0.2)] group-hover:bg-old-gold transition-colors duration-300">
                    <span className="text-old-gold group-hover:text-heavy-metal font-bold text-xs md:text-sm transition-colors duration-300">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Text Container */}
                  <div>
                    <p className="text-sm md:text-base font-black uppercase tracking-widest text-ecru-white group-hover:text-old-gold transition-colors duration-300 mb-2">
                      {op.title}
                    </p>
                    <p className="text-dove-gray text-xs md:text-sm leading-relaxed max-w-lg">
                      {op.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}