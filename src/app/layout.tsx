/**
 * Project: Mintrix Maintenance Dubai
 * Architect: Syed Zayan Ali
 * Last Updated: March 2026
 */

import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

import WhatsAppButton from '@/components/layout/WhatsAppButton';
import SubscribePopup from '@/components/layout/SubscribePopup';
import PromoPopup from '@/components/layout/PromoPopup';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import TawkToChat from "@/components/Chat/TawkToChat"; 

export const metadata: Metadata = {
  title: {
    template: '%s | Mintrix Maintenance Dubai',
    default: 'Mintrix Maintenance | Premium Handyman Services Dubai',
  },
  description:
    'Expert property maintenance, AC, plumbing, and electrical services in Dubai.',
    verification: {
    google: '9fslA__PJpmV5D-ikGX_OG6RNZmt8NzliLGzQPFQ_7k',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-heavy-metal text-ecru-white font-sans antialiased selection:bg-old-gold selection:text-heavy-metal">

        {/* ✅ GTM (HEAD equivalent) */}
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PJXHSTXC');
            `,
          }}
        />

        {/* ✅ GTM (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJXHSTXC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* ✅ ADDED THESE THREE BLOCKS FOR TRANSLATION */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,ar',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />

        <SubscribePopup />
        <PromoPopup />
        <WhatsAppButton />
        
        {/* ✅ Tawk.to Widget */}
        <TawkToChat /> 

      </body>
    </html>
  );
}