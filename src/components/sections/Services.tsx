// src/components/sections/Services.tsx
import { services } from '@/lib/services-data';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-ecru-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heavy-metal text-4xl font-bold mb-4">Our Expertise</h2>
          <div className="w-24 h-1 bg-old-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-dove-gray/10 hover:border-old-gold transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <h3 className="text-heavy-metal font-bold text-xl mb-3 group-hover:text-old-gold transition">
                {service.title}
              </h3>
              <p className="text-dove-gray text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="text-xs font-bold tracking-widest text-dove-gray uppercase border-b border-old-gold/50 pb-1">
                {service.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}