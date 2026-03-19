const values = [
  {
    title: "Our Commitment",
    desc: "We believe that maintenance should never be an afterthought. It should be a structured system designed to protect and optimize the assets people depend on every day. We don't just fix what is broken; we preserve what matters for the future"
  },
  {
    title: "Our Vision",
    desc: "Our vision is to become one of the most trusted names for home and property maintenance in Dubai. We strive to build long-term relationships with our clients by consistently delivering quality service, professional and  workmanship."
  }
];

export default function AboutValues() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-ecru-white">
      <div className="max-w-[1000px] mx-auto">
        
        {/* FIXED GRID */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          
          {values.map((v, i) => (
            <div key={i} className="space-y-5">
              
              <div className="w-10 h-[2px] bg-old-gold"></div>

              <h3 className="text-heavy-metal text-xl md:text-2xl font-black uppercase italic">
                {v.title}
              </h3>

              <p className="text-dove-gray leading-relaxed font-medium text-sm md:text-base">
                {v.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}