import ChallengeCard from "./ChallengeCard";

export default function ChallengesSection() {
  return (
    <section className="relative py-32 px-8 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D1AB43 1px, transparent 1px), linear-gradient(90deg, #D1AB43 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-black uppercase italic mb-4">
            The Downtown Challenge
          </h3>
          <p className="text-dove-gray max-w-2xl mx-auto">
            We specialize in the specific technical demands of luxury high-rise
            infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <ChallengeCard
            title="High-Rise HVAC Precision"
            description="Combating pressure imbalances and rapid cooling loss typical in glass-facade towers."
            image="/solutions/burj_ac.png"
            fix="Laser Calibration"
          />

          <ChallengeCard
            title="Smart Load Management"
            description="Supporting high-consumption automation and server stacks without circuit trips."
            image="/who-we-are.png"
            fix="Phase Balancing"
          />

          <ChallengeCard
            title="Artisan Repair Protocols"
            description="Executing complex repairs without compromising delicate wallpapers or bespoke joinery."
            image="/what-we-do.png"
            fix="Clean-Room Prep"
          />
        </div>
      </div>
    </section>
  );
}
