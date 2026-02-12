// src/app/test/page.tsx
import React from 'react';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-ecru-white p-10 space-y-12">
      <h1 className="text-heavy-metal text-4xl font-black border-b-4 border-old-gold pb-2 inline-block">
        MINTRIX DESIGN SYSTEM TEST
      </h1>

      {/* Color Palette Check */}
      <section className="space-y-4">
        <h2 className="text-dove-gray font-bold uppercase tracking-widest text-sm">Brand Colors</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-32 h-20 bg-heavy-metal rounded shadow-lg flex items-end p-2 text-[10px] text-ecru-white">#1D241D (Heavy Metal)</div>
          <div className="w-32 h-20 bg-old-gold rounded shadow-lg flex items-end p-2 text-[10px] text-heavy-metal font-bold">#D1AB43 (Old Gold)</div>
          <div className="w-32 h-20 bg-ecru-white border border-dove-gray/20 rounded shadow-lg flex items-end p-2 text-[10px] text-heavy-metal">#F9F8EE (Ecru White)</div>
          <div className="w-32 h-20 bg-dove-gray rounded shadow-lg flex items-end p-2 text-[10px] text-white">#6C6C6C (Dove Gray)</div>
        </div>
      </section>

      {/* Button State Test */}
      <section className="space-y-4">
        <h2 className="text-dove-gray font-bold uppercase tracking-widest text-sm">Button States</h2>
        <div className="flex gap-4">
          <button className="bg-old-gold text-heavy-metal px-6 py-3 font-bold hover:brightness-110 active:scale-95 transition-all shadow-md">
            PRIMARY ACTION (HOVER ME)
          </button>
          <button className="bg-heavy-metal text-ecru-white px-6 py-3 font-bold hover:bg-dove-gray transition-colors">
            SECONDARY ACTION
          </button>
          <button className="border-2 border-old-gold text-old-gold px-6 py-3 font-bold hover:bg-old-gold hover:text-heavy-metal transition-all">
            OUTLINE ACTION
          </button>
        </div>
      </section>

      {/* Typography & Contrast Test */}
      <section className="max-w-2xl bg-white p-8 border-l-8 border-old-gold shadow-sm">
        <h3 className="text-heavy-metal text-2xl font-bold mb-4 italic">Maintenance at Scale</h3>
        <p className="text-dove-gray leading-relaxed">
          Testing body text readability. Our target arrival is <strong className="text-heavy-metal underline decoration-old-gold">90 Minutes</strong>. 
          If we are late, we waive 50% of the cost. This text uses Dove Gray on White for a soft professional look.
        </p>
      </section>

      {/* Component Logic Test: Grid Responsiveness */}
      <section className="space-y-4">
        <h2 className="text-dove-gray font-bold uppercase tracking-widest text-sm">Responsive Grid Test (Mobile to Desktop)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-heavy-metal p-6 text-old-gold font-bold text-center border border-old-gold/20">
              Col {i}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}