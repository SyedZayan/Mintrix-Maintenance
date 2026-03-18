import './globals.css'; 
import type { Metadata } from 'next';

// ✅ Keep both imports
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import SubscribePopup from '@/components/layout/SubscribePopup';
import PromoPopup from '@/components/layout/PromoPopup';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <body className="bg-heavy-metal text-ecru-white font-sans antialiased selection:bg-old-gold selection:text-heavy-metal">
        
        {/* ✅ Navbar from other guy */}
        <Navbar />

        {children}

        {/* ✅ Footer from other guy */}
        <Footer />

        {/* ✅ Your popups & button */}
        <SubscribePopup />
        <PromoPopup />
        <WhatsAppButton />

      </body>
    </html>
  );
}