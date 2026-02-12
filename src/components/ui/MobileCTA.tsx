// src/components/ui/MobileCTA.tsx
export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full grid grid-cols-2 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <a href="tel:+971..." className="bg-heavy-metal text-ecru-white py-4 text-center font-bold text-sm">
        CALL NOW
      </a>
      <a href="https://wa.me/971..." className="bg-old-gold text-heavy-metal py-4 text-center font-bold text-sm">
        WHATSAPP
      </a>
    </div>
  );
}