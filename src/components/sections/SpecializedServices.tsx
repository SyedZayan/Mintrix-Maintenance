// src/components/sections/SpecializedServices.tsx
import React from 'react';
import Image from 'next/image';

export default function SpecializedServices() {
  const details = [
    { title: "Interior Fit-Out", desc: "Tailored carpentry, furniture supply, and space enhancement." },
    { title: "MEP Solutions", desc: "Mechanical, Electrical, and Plumbing services for complex infrastructures." },
    { title: "Automation", desc: "Smart system integration for modern homes and offices." }
  ];

  return (
    <section className="bg-ecru-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Visual Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border-l-8 border-old-gold shadow-2xl">
            <Image 
              src="/hero-image.png" // Using the technician with pliers image
              alt="Premium Interior Maintenance"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative Heavy Metal block */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-heavy-metal -z-10 hidden md:block"></div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-old-gold font-bold tracking-[0.2em] text-sm uppercase">Specialized Projects</h2>
            <h3 className="text-heavy-metal text-4xl md:text-5xl font-extrabold leading-tight">
              Expert Fit-Out & <br />
              <span className="italic">MEP Services.</span>
            </h3>
            <p className="text-dove-gray text-lg">
              Beyond basic repairs, Mintrix provides end-to-end interior fit-out services tailored to enhance every space. From furniture supply to performance monitoring, we handle the details.
            </p>
          </div>

          <div className="grid gap-6">
            {details.map((item, i) => (
              <div key={i} className="group flex gap-6 p-4 border-b border-dove-gray/10 hover:border-old-gold transition-colors">
                <span className="text-old-gold font-bold text-xl">0{i + 1}</span>
                <div>
                  <h4 className="text-heavy-metal font-bold text-lg group-hover:text-old-gold transition-colors">{item.title}</h4>
                  <p className="text-dove-gray text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-heavy-metal text-ecru-white px-8 py-4 font-bold rounded-sm hover:bg-old-gold hover:text-heavy-metal transition-all mt-6">
            VIEW PROJECT PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
}