// src/app/layout.tsx
import './globals.css'; 
import type { Metadata } from 'next';

// This acts as the global fallback for pages without specific metadata
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
      <body>{children}</body>
    </html>
  );
}