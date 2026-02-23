// src/app/not-found.tsx
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ecru-white flex flex-col">
      <Navbar />

      <section className="flex-grow flex items-center justify-center py-24 px-8 md:px-12 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-black text-heavy-metal/[0.03] select-none z-0">
          404
        </div>

        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="text-old-gold font-black text-xs tracking-[0.5em] mb-6 uppercase border-b-2 border-old-gold/20 inline-block pb-2">
            System Error
          </h2>
          
          <h1 className="text-6xl md:text-9xl font-black text-heavy-metal leading-none tracking-tighter uppercase italic mb-8">
            Page <span className="text-old-gold">Not Found.</span>
          </h1>
          
          <p className="text-dove-gray text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            The technical resource you are looking for has been moved or no longer exists. Let's get your property maintenance back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/" 
              className="bg-heavy-metal text-ecru-white px-10 py-5 font-black text-sm uppercase tracking-widest hover:bg-old-gold hover:text-heavy-metal transition-all shadow-xl"
            >
              Return to Dashboard
            </Link>
            <Link 
              href="/#contact" 
              className="bg-transparent border-2 border-heavy-metal text-heavy-metal px-10 py-5 font-black text-sm uppercase tracking-widest hover:bg-heavy-metal hover:text-ecru-white transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

  <Footer/>
    </main>
  );
}