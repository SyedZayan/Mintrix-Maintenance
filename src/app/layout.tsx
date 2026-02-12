// src/app/layout.tsx
import './globals.css'; // <--- MUST BE HERE
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mintrix Maintenance Dubai',
  description: 'Premium Maintenance Services',
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