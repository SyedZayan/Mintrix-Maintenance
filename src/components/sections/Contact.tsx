// src/components/sections/Contact.tsx
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-heavy-metal text-ecru-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-old-gold font-bold tracking-widest text-sm mb-4">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Ready to Secure <br />
              <span className="italic">Your Property?</span>
            </h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-old-gold/10 border border-old-gold/20 rounded-sm">
                <MapPin className="text-old-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Dubai Headquarters</h4>
                <p className="text-dove-gray text-sm">Business Bay / Al Quoz Area, Dubai, UAE</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-old-gold/10 border border-old-gold/20 rounded-sm">
                <Clock className="text-old-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Response Hours</h4>
                <p className="text-dove-gray text-sm">24/7 Emergency Support | 90-Min Target Arrival</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl relative">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal transition-all" />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal transition-all" />
            </div>
            <select className="w-full p-4 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal transition-all">
              <option>Select Service</option>
              <option>AC & HVAC Maintenance</option>
              <option>IT & Software Support</option>
              <option>Interior Fit-Out</option>
              <option>Emergency MEP Repair</option>
            </select>
            <textarea placeholder="Message / Property Details" rows={4} className="w-full p-4 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal transition-all resize-none"></textarea>
            <button className="w-full bg-old-gold text-heavy-metal py-4 font-bold text-lg hover:brightness-110 transition-all">
              REQUEST PRIORITY BOOKING
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}