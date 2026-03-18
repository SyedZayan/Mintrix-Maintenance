// src/app/layout.tsx
import './globals.css'; 
import type { Metadata } from 'next';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import SubscribePopup from '@/components/layout/SubscribePopup';
import PromoPopup from '@/components/layout/PromoPopup';

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
    <html lang="en">
      <body className="antialiased">
        {children}
        
        {/* Global Floating Actions & Modals */}
        <SubscribePopup />
        <PromoPopup />
        <WhatsAppButton />
      </body>
    </html>
  );
}