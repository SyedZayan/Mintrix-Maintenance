// src/app/services/[slug]/page.tsx
import { services } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceClient from '@/components/sections/ServiceClient'; 

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-ecru-white text-heavy-metal">
      <Navbar />
      
      {/* Pass the service data to the Client Component for animations */}
      <ServiceClient service={service} />

    </main>
  );
}