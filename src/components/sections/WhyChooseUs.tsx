import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const reasons = [
  "Skilled and experienced technicians",
  "Quick response and reliable service",
  "Affordable maintenance solutions",
  "Residential and commercial services",
  "Professional and friendly team"
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-ecru-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Why Choose Us */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4 mb-6">
              The Mintrix Standard
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter uppercase italic text-heavy-metal mb-6">
              Why Choose <br />
              <span className="text-old-gold">Mintrix?</span>
            </h3>
            <p className="text-dove-gray font-medium text-lg leading-relaxed mb-8 max-w-lg">
              At Mintrix Maintenance, we understand that property owners need reliable service providers they can trust. Here’s why many clients choose our maintenance services in Dubai:
            </p>
            
            <ul className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="bg-heavy-metal/5 p-1 rounded-full">
                    <CheckCircle2 className="text-old-gold w-6 h-6" />
                  </div>
                  <span className="text-heavy-metal font-bold text-base md:text-lg">{reason}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-heavy-metal pl-6 py-2">
              <p className="text-heavy-metal font-black uppercase tracking-wide text-sm md:text-base">
                We believe maintenance should be <span className="text-old-gold">simple, transparent, and stress-free</span> for every customer.
              </p>
            </div>
          </div>

          {/* Right Side: Booking CTA Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-heavy-metal rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-old-gold/10 rounded-full blur-3xl" />
              
              <h4 className="text-2xl md:text-4xl font-black uppercase text-ecru-white tracking-tight mb-6 relative z-10">
                Book Professional Maintenance In Dubai
              </h4>
              
              <p className="text-ecru-white/70 font-medium text-base md:text-lg leading-relaxed mb-6 relative z-10">
                If you are looking for dependable handyman services in Dubai, reliable home maintenance, or complete property maintenance solutions, our team is ready to help.
              </p>
              <p className="text-ecru-white/70 font-medium text-base md:text-lg leading-relaxed mb-10 relative z-10">
                Whether you need quick repairs, routine servicing, or minor renovation work, Mintrix Maintenance provides professional solutions tailored to your needs. Contact us today to keep your apartment, villa, or building in perfect working condition.
              </p>
              
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-3 bg-old-gold text-heavy-metal px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 relative z-10 w-full md:w-auto"
              >
                Schedule Service <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}