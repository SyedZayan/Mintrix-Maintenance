// src/components/layout/ServiceDirectory.tsx
export default function ServiceDirectory() {
  const allServices = [
    "AC Service", "MEP Service", "DEWA Projects", "Appliance Repair", 
    "Hardware Maintenance", "Software Maintenance", "Data Backup", 
    "System Cleaning", "Virus Protection", "Printer Maintenance", 
    "Email Maintenance", "Performance Monitoring", "Disk Maintenance"
  ];

  return (
    <div className="bg-heavy-metal py-10 border-t border-old-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-old-gold font-bold text-xs tracking-widest mb-6 uppercase">Quick Service Directory</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {allServices.map((s, i) => (
            <span key={i} className="text-dove-gray text-[11px] font-medium hover:text-ecru-white cursor-default transition-colors">
              {s} {i !== allServices.length - 1 && "•"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}