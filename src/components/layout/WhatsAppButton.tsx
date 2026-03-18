// src/components/layout/WhatsAppButton.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <-- Import to track page changes
import { X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); // Tracks the current page URL

  const phoneNumber = "971542576756";
  const message = "Hello Mintrix Maintenance, I would like to inquire about your services.";

  // Hydration check to prevent server/client mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // MAGIC HAPPENS HERE: Every time the 'pathname' (URL) changes, reset visibility to true
  useEffect(() => {
    setIsVisible(true);
  }, [pathname]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent triggering the Link wrapper
    setIsVisible(false); // Hides the button immediately
  };

  // Don't render anything if hidden or during server-side render
  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-end">
      
      {/* Wrapper for the whole widget */}
      <div className="relative group flex items-center">
        
        {/* Sleek Hover Tooltip */}
        <span className="absolute right-full mr-4 bg-heavy-metal text-old-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] py-2.5 px-4 rounded-xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-white/10 hidden sm:block">
          Chat With An Expert
        </span>

        {/* Main WhatsApp Link */}
        <Link
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:scale-105 hover:shadow-[0_15px_40px_-5px_rgba(37,211,102,0.6)] transition-all duration-300"
          aria-label="Contact us on WhatsApp"
        >
          {/* Subtle Ping Animation Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20" />

          {/* Official WhatsApp SVG Icon */}
          <svg 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor" 
            className="relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.883-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.422-.272.347-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </Link>

        {/* Small Dismiss (X) Button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-1 -right-1 z-20 flex items-center justify-center w-5 h-5 bg-heavy-metal text-white rounded-full border border-white/20 shadow-md hover:bg-red-500 hover:scale-110 transition-all duration-200"
          aria-label="Close WhatsApp button"
        >
          <X size={12} strokeWidth={3} />
        </button>

      </div>
    </div>
  );
}