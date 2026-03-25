import './globals.css'; 
import type { Metadata } from 'next';
import Script from 'next/script'; // <-- Imported next/script for optimal loading

import WhatsAppButton from '@/components/layout/WhatsAppButton';
import SubscribePopup from '@/components/layout/SubscribePopup';
import PromoPopup from '@/components/layout/PromoPopup';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: {
    template: '%s | Mintrix Maintenance Dubai',
    default: 'Mintrix Maintenance | Premium Handyman Services Dubai', 
  },
  description: 'Expert property maintenance, AC, plumbing, and electrical services in Dubai.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PJXHSTXC');
            `,
          }}
        />
      </head>

      <body className="bg-heavy-metal text-ecru-white font-sans antialiased selection:bg-old-gold selection:text-heavy-metal">
        
        {/* Google Tag Manager (noscript) - Right after the opening body tag */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJXHSTXC"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Scroll Restorer */}
        <ScrollToTop />
        
        <Navbar />

        {children}

        <Footer />

        <SubscribePopup />
        <PromoPopup />
        <WhatsAppButton />

      </body>
    </html>
  );
}