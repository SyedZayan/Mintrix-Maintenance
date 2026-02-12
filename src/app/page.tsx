import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import SpecializedServices from '@/components/sections/SpecializedServices';
import ServiceDirectory from '@/components/layout/ServiceDirectory';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <SpecializedServices />
      <ServiceDirectory />
      
      {/* Professional Footer would go here */}
      <footer className="bg-heavy-metal py-12 text-center text-ecru-white/50 text-sm">
        <p>© 2026 Mintrix Maintenance Dubai. All rights reserved.</p>
      </footer>
    </main>
  );
}