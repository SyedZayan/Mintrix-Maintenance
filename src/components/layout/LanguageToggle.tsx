"use client";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    // Check if the Google Translate cookie is set to Arabic
    const hasArabicCookie = document.cookie.includes('googtrans=/en/ar');
    setIsArabic(hasArabicCookie);
    
    // Switch document direction for proper Arabic reading layout (RTL)
    document.documentElement.dir = hasArabicCookie ? 'rtl' : 'ltr';
    document.documentElement.lang = hasArabicCookie ? 'ar' : 'en';
  }, []);

  const toggleLanguage = () => {
    // Set the cookie for Google Translate
    const newValue = isArabic ? '/en/en' : '/en/ar';
    const domain = window.location.hostname;
    
    // Set cookie for both root domain and localhost testing
    document.cookie = `googtrans=${newValue}; path=/; domain=${domain}`;
    document.cookie = `googtrans=${newValue}; path=/;`;
    
    // Reload to apply translation and RTL layout cleanly without React hydration errors
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 lg:gap-2 px-2 py-1 rounded hover:bg-white/5 transition-colors duration-300 group"
    >
      <Globe size={16} className="text-ecru-white group-hover:text-old-gold transition-colors lg:w-[18px] lg:h-[18px]" />
      <span className="text-ecru-white group-hover:text-old-gold text-[10px] lg:text-[12px] font-bold uppercase tracking-widest transition-colors">
        {isArabic ? 'ENG' : 'عربي'}
      </span>
    </button>
  );
}