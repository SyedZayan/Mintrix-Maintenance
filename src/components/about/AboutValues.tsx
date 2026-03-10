const values = [
  {
    title: "Our Mission",
    desc: "To ensure that the most valuable properties in Dubai operate with absolute reliability, comfort, and efficiency, providing engineering-level care that preserves both function and asset value."
  },
  {
    title: "Our Commitment",
    desc: "We believe that maintenance should never be an afterthought. It should be a structured system designed to protect and optimize the assets people depend on every day."
  },
  {
    title: "Our Vision",
    desc: "Our vision is to become one of the most trusted maintenance and technical service providers supporting high-value properties across Dubai and the wider UAE."
  }
];

export default function AboutValues() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 bg-ecru-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((v, i) => (
            <div key={i} className="space-y-6 flex flex-col">
              <div className="w-12 h-1 bg-old-gold"></div>
              <h3 className="text-heavy-metal text-2xl font-black uppercase italic">{v.title}</h3>
              {/* Added flex-grow to ensure paragraphs fill the space nicely if there are still minor differences */}
              <p className="text-dove-gray leading-relaxed font-medium flex-grow">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}