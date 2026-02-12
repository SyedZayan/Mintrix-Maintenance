// src/components/sections/ServiceList.tsx
const categories = [
  {
    name: "Facility & MEP",
    items: ["AC Repair & Service", "Electrical Service", "Plumbing Service", "Civil & Masonry", "Carpentry & Furniture"]
  },
  {
    name: "IT & System Maintenance",
    items: ["Software Maintenance", "Data Backup", "Virus Protection", "System Upgradation", "Network Troubleshooting"]
  },
  {
    name: "Fit-Out & Specialized",
    items: ["Interior Fit-Out", "Automation", "Appliance Repair", "System Cleaning", "Performance Monitoring"]
  }
];

export default function ServiceList() {
  return (
    <section className="py-24 bg-ecru-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-heavy-metal text-3xl font-bold italic tracking-tight">Comprehensive Solutions</h2>
          <p className="text-dove-gray mt-2 font-medium">Professional services tailored for homes and business operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-old-gold font-bold text-sm tracking-[0.2em] uppercase border-b border-old-gold/30 pb-2">
                {cat.name}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-heavy-metal group cursor-default">
                    <span className="w-1.5 h-1.5 bg-old-gold rounded-full transition-all group-hover:scale-150"></span>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">{item}</span>
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