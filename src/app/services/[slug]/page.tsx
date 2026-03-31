import { services } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import ServiceClient from '@/components/sections/ServiceClient'; 

// ✅ SEO: Generate dynamic titles and canonical tags for each service
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.description,
    alternates: {
      canonical: `https://www.mintrixmaintenance.com/services/${slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-ecru-white text-heavy-metal">
      <Navbar />
      {/* ServiceClient handles the specific layout/animations for the service details */}
      <ServiceClient service={service} />
    </main>
  );
}