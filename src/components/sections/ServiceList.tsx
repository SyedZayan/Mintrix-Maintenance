// src/components/sections/ServiceList.tsx

// Reordered categories: larger lists first, smaller lists at the end
const categories = [
  {
    name: "AC & MEP Services",
    items: ["AC Repair & Service", "Electrical Service", "Plumbing Service", "Civil & Masonry", "Carpentry & Furniture"]
  },
  {
    name: "Home Maintenance",
    items: ["Handyman Services", "Carpentry Works", "Painting Services", "Cleaning Services", "Deep Cleaning"]
  },
  {
    name: "Interior & Fit-Out",
    items: ["Renovation", "False Ceiling", "Tiling Works", "Glass & Aluminum Works", "Masonry & Civil Works"]
  },
  {
    name: "IT & System Maintenance",
    items: ["Software Maintenance", "Data Backup", "Virus Protection", "System Upgradation", "Network Troubleshooting"]
  },
  {
    name: "Specialized Services",
    items: ["Pest Control", "Water Tank Cleaning", "Drain Cleaning", "Waterproofing"]
  },
  {
    name: "Outdoor Services",
    items: ["Landscaping", "Pool Maintenance"]
  },
  {
    name: "Contracts",
    items: ["Annual Maintenance (AMC)"]
  }
];

export default function ServiceList() {
  return (
    <section className="py-32 md:py-48 bg-ecru-white px-8 md:px-12 border-t border-heavy-metal/5">
      
      <div className="max-w-[1440px] mx-auto">
        
        <div className="mb-24 space-y-4">
          <h2 className="text-heavy-metal text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
            Comprehensive Solutions
          </h2>
          <div className="w-24 h-1.5 bg-old-gold"></div>
          <p className="text-dove-gray text-xl max-w-2xl font-medium leading-relaxed">
            Professional services tailored for luxury residential homes and critical business operations across Dubai.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-20 lg:gap-32">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-10 group">
              <div className="space-y-2">
                <h3 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-b border-old-gold/20 pb-4 transition-all group-hover:border-old-gold">
                  {cat.name}
                </h3>
              </div>
              
              <ul className="space-y-6">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-heavy-metal group/item cursor-default">
                    <span className="w-2 h-2 bg-old-gold rounded-full opacity-40 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-300"></span>
                    <span className="text-lg font-semibold tracking-tight group-hover/item:translate-x-2 transition-transform duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}