import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const reasons = [
  "Experienced and skilled technicians",
  "Fast response and on-time service",
  "Reliable and long-lasting solutions",
  "Affordable and transparent pricing",
  "Services for homes, villas, apartments, and businesses",
  "Friendly and professional customer support"
];

export default function WhyChooseUs() {
  return (
    // Reduced vertical padding from py-24/32 to py-12/16/20 to fit better on screen
    <section className="py-12 md:py-16 lg:py-20 bg-ecru-white relative flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        
        {/* Reduced gap between left and right sections */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Why Choose Us */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-old-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-3 mb-4">
              The Mintrix Standard
            </h2>
            
            {/* Reduced heading sizes */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tighter uppercase italic text-heavy-metal mb-4">
              Why Choose <br />
              <span className="text-old-gold">Mintrix Maintenance?</span>
            </h3>
            
            {/* Reduced paragraph text sizes */}
            <p className="text-dove-gray font-medium text-sm md:text-base leading-relaxed mb-6 max-w-lg">
              Choosing the right maintenance company can make a big difference in the quality and reliability of service. Here’s why customers trust Mintrix Maintenance:
            </p>
            
            {/* Reduced space between list items */}
            <ul className="space-y-3 mb-6">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-heavy-metal/5 p-1 rounded-full">
                    <CheckCircle2 className="text-old-gold w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-heavy-metal font-bold text-sm md:text-base">{reason}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-heavy-metal pl-4 py-1">
              <p className="text-heavy-metal font-black uppercase tracking-wide text-xs md:text-sm">
                We focus on delivering <span className="text-old-gold">value, quality, and peace of mind</span> to every client.
              </p>
            </div>
          </div>

          {/* Right Side: Booking CTA Card */}
          <div className="w-full lg:w-1/2">
            {/* Reduced padding inside the card */}
            <div className="bg-heavy-metal rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative background element scaled down slightly */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-old-gold/10 rounded-full blur-3xl" />
              
              <h4 className="text-xl md:text-2xl lg:text-3xl font-black uppercase text-ecru-white tracking-tight mb-4 relative z-10">
                Book Professional Maintenance In Dubai
              </h4>
              
              <p className="text-ecru-white/70 font-medium text-sm md:text-base leading-relaxed mb-4 relative z-10">
                If you are looking for dependable handyman services in Dubai, reliable home maintenance, or complete property maintenance solutions, our team is ready to help.
              </p>
              <p className="text-ecru-white/70 font-medium text-sm md:text-base leading-relaxed mb-8 relative z-10">
                Whether you need quick repairs, routine servicing, or minor renovation work, Mintrix Maintenance provides professional solutions tailored to your needs. Contact us today to keep your apartment, villa, or building in perfect working condition.
              </p>
              
              {/* Scaled down button padding and text size */}
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-old-gold text-heavy-metal px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300 relative z-10 w-full md:w-auto"
              >
                Schedule Service <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}