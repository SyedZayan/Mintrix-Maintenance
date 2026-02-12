// src/components/sections/Guarantee.tsx
import { Timer, Zap, ShieldCheck } from 'lucide-react'; // Install lucide-react or use SVGs

export default function Guarantee() {
  const features = [
    {
      icon: <Timer className="w-8 h-8 text-old-gold" />,
      title: "90-Min Target Arrival",
      desc: "Our rapid response team is strategically located across Dubai to reach you fast."
    },
    {
      icon: <Zap className="w-8 h-8 text-old-gold" />,
      title: "50% Waiver Policy",
      desc: "If we arrive after 100 minutes, 50% of your service charge is automatically waived."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-old-gold" />,
      title: "Certified Experts",
      desc: "Every technician is SOP-trained for minimal disruption to your operations."
    }
  ];

  return (
    <section className="bg-heavy-metal py-16 px-6">
      <div className="max-w-7xl mx-auto border border-old-gold/20 bg-heavy-metal/50 p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              {f.icon}
              <h3 className="text-ecru-white font-bold text-lg">{f.title}</h3>
              <p className="text-dove-gray text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}