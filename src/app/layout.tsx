/**
 * Project: Mintrix Maintenance Dubai
 * Architect: Syed Zayan Ali
 * Tech Stack: Next.js, TypeScript, Tailwind CSS, Resend
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
  // 🚨 Required for relative canonical links and social images
  metadataBase: new URL('https://www.mintrixmaintenance.com'),
  
  title: {
    template: '%s | Mintrix Maintenance Dubai',
    default: 'Mintrix Maintenance | Premium Handyman Services Dubai',
  },
  description:
    'Expert property maintenance, AC, plumbing, and electrical services in Downtown Dubai. 90-minute arrival guarantee.',
  
  // ✅ Canonical Tag: Tells Google the "Master" URL
  alternates: {
    canonical: '/',
  },

  // ✅ Search Console Verification
  verification: {
    google: '9fslA__PJpmV5D-ikGX_OG6RNZmt8NzliLGzQPFQ_7k',
  },

  // ✅ OpenGraph (What people see on WhatsApp/LinkedIn)
  openGraph: {
    title: 'Mintrix Maintenance | Premium Handyman Dubai',
    description: '90-Minute Emergency Maintenance in Downtown Dubai.',
    url: 'https://www.mintrixmaintenance.com',
    siteName: 'Mintrix Maintenance',
    locale: 'en_AE',
    type: 'website',
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

        {/* ✅ GTM (HEAD equivalent) - High Priority */}
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

        {/* ✅ GTM (noscript) - Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJXHSTXC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* UI Elements */}
        <ScrollToTop />
        <Navbar />
        
        <main>{children}</main>
        
        <Footer />

        {/* Popups and Interactions */}
        <SubscribePopup />
        <PromoPopup />
        <WhatsAppButton />
        
        {/* ✅ Tawk.to AI Chat Widget */}
        <TawkToChat /> 

      </body>
    </html>
  );
}