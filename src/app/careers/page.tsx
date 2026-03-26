"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Briefcase, ChevronDown, ArrowRight, Clock, Filter, Users, Target, Shield, Zap } from 'lucide-react';
import { CAREER_OPENINGS, JOB_LOCATIONS, DEPARTMENTS, JobOpening } from '@/lib/careers-data';

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function CareersPage() {
  return (
    <div className="min-h-screen bg-heavy-metal pt-48 pb-24 relative overflow-hidden">
      {/* Premium Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 space-y-24 md:space-y-32">
        
        <CareersHero />
        <CultureSection />
        <BenefitsSection />
        <OpenRolesBoard />

      </div>
    </div>
  );
}

// ==========================================
// MODULAR PAGE SECTIONS
// ==========================================

function CareersHero() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center border-b border-white/10 pb-16">
      <div className="space-y-6">
        <span className="text-old-gold font-black text-[12px] uppercase tracking-[0.2em] block">
          Join The Vanguard
        </span>
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-ecru-white leading-none">
          Operational <br className="hidden md:block" /> <span className="text-old-gold">Careers.</span>
        </h1>
        <p className="text-dove-gray font-medium text-[15px] md:text-[16px] max-w-xl leading-relaxed">
          Building network infrastructure, delivering superior maintenance, and ensuring peak performance across Dubai's most elite properties. Apply to start working with the industry's best.
        </p>
        <div className="pt-4">
          <button 
            onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 px-8 py-4 bg-old-gold text-heavy-metal font-black text-[12px] uppercase tracking-widest rounded-sm hover:bg-ecru-white transition-all shadow-[0_0_20px_rgba(209,171,67,0.3)]"
          >
            View Open Roles <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      
      {/* Hero Image Banner */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-video rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
        <img 
          src="/images/career/career-hero.png" 
          alt="Mintrix Team" 
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
        />
        {/* 👇 REMOVE OR COMMENT OUT THIS LINE 👇 */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-heavy-metal/20 to-transparent" /> */}
        
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-ecru-white drop-shadow-md">
              Build The <span className="text-old-gold">Future.</span>
            </span>
        </div>
      </div>
    </section>
  );
}

function CultureSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] order-2 lg:order-1 group">
        {/* Updated Culture Image */}
        <img 
          src="/images/career/career-culture.png" 
          alt="Mintrix Maintenance Team" 
          
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
        />
        
        <div className="absolute inset-0 bg-old-gold/5 mix-blend-overlay pointer-events-none" />
      </div>
      
      

      <div className="space-y-6 order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-white/60 mb-2">
          <Users size={14} className="text-old-gold" />
          <span className="text-[10px] font-black uppercase tracking-widest">Our Culture</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-ecru-white leading-tight">
          The Elite Force of <br/><span className="text-old-gold">Property Care.</span>
        </h2>
        <div className="space-y-4 text-dove-gray font-medium text-[14px] md:text-[15px] leading-relaxed">
          <p>
            Mintrix Maintenance isn't just a service company; we are a precision-engineered deployment force. With a rapidly growing team of over 50+ specialized technicians, engineers, and dispatch coordinators, we operate at the highest tier of the industry.
          </p>
          <p>
            We manage the structural integrity and MEP functionality of Dubai's most prestigious assets—from high-rise luxury apartments in the Burj District to sprawling commercial complexes. Our people are our strongest asset, trained to execute under a strict 90-minute SLA where failure is not an option.
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { icon: Shield, title: "Elite Clientele", desc: "Work inside Dubai's most exclusive properties, gaining experience with premium infrastructure and luxury systems." },
    { icon: Zap, title: "Rapid Advancement", desc: "We promote strictly on merit and performance. Master your trade and rise through our technical ranks quickly." },
    { icon: Target, title: "Precision Training", desc: "Receive continuous upskilling in advanced diagnostics, safety protocols, and modern smart-home integrations." },
    { icon: Briefcase, title: "Top-Tier Equipment", desc: "Operate with the best. We equip our teams with state-of-the-art diagnostic tools, premium vehicles, and safety gear." },
  ];

  return (
    <section className="bg-black/30 border border-white/5 rounded-sm p-8 md:p-16">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-ecru-white">
          Why Join <span className="text-old-gold">Mintrix?</span>
        </h2>
        <p className="text-dove-gray text-[14px] font-medium">
          We demand the best from our teams, and in return, we provide an environment built for professional growth, safety, and financial reward.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-old-gold/30 hover:bg-white/10 transition-all group">
            <benefit.icon size={32} className="text-old-gold mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-[14px] font-black uppercase tracking-widest text-ecru-white mb-3">
              {benefit.title}
            </h4>
            <p className="text-[13px] text-dove-gray leading-relaxed font-medium">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OpenRolesBoard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepts, setSelectedDepts] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredJobs = useMemo(() => {
    return CAREER_OPENINGS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDepts.length === 0 || selectedDepts.includes(job.department);
      const matchesLoc = selectedLocations.length === 0 || selectedLocations.includes(job.location);
      
      return matchesSearch && matchesDept && matchesLoc;
    });
  }, [searchQuery, selectedDepts, selectedLocations]);

  return (
    <section id="open-roles" className="pt-8 scroll-mt-32">
      <div className="mb-8 md:mb-10 border-b border-white/10 pb-6">
        <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-ecru-white">
          Current <span className="text-old-gold">Deployments.</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* MOBILE FILTER TOGGLE (Fixed margin and spacing) */}
        <div className="lg:hidden col-span-12 mb-2">
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-sm text-ecru-white font-bold text-[12px] uppercase tracking-widest hover:bg-white/10 transition-colors shadow-lg"
          >
            <span className="flex items-center gap-2">
              <Filter size={16} className="text-old-gold" /> 
              Filter Roles
            </span>
            <ChevronDown size={16} className={`transition-transform duration-300 ${showMobileFilters ? 'rotate-180 text-old-gold' : 'text-white/40'}`} />
          </button>
          
          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-2">
                  <JobFilters 
                    searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                    selectedDepts={selectedDepts} setSelectedDepts={setSelectedDepts}
                    selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP FILTER SIDEBAR */}
        <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-40">
          <JobFilters 
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            selectedDepts={selectedDepts} setSelectedDepts={setSelectedDepts}
            selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations}
          />
        </div>

        {/* JOB LISTINGS */}
        <div className="col-span-12 lg:col-span-9">
          <JobListings 
            jobs={filteredJobs} 
            clearFilters={() => {
              setSearchQuery(''); setSelectedDepts([]); setSelectedLocations([]);
            }} 
          />
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SUB-COMPONENTS FOR JOB BOARD
// ==========================================

function JobFilters({ searchQuery, setSearchQuery, selectedDepts, setSelectedDepts, selectedLocations, setSelectedLocations }: any) {
  const toggleArrayItem = (arr: string[], setArr: any, item: string) => {
    setArr(arr.includes(item) ? arr.filter((i: string) => i !== item) : [...arr, item]);
  };

  return (
    <div className="space-y-8 bg-black/20 p-5 md:p-6 rounded-sm border border-white/5">
      <div className="space-y-3">
        <label className="text-[11px] font-black uppercase tracking-widest text-old-gold/80">Search Roles</label>
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input 
            type="text" placeholder="Job title or keyword..." value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-heavy-metal border border-white/10 rounded-sm py-3 pl-10 pr-4 text-[13px] font-medium text-ecru-white placeholder:text-white/20 focus:border-old-gold outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[11px] font-black uppercase tracking-widest text-old-gold/80 border-b border-white/10 pb-2 flex w-full">Division</label>
        <div className="space-y-3">
          {DEPARTMENTS.map((dept: string) => (
            <div key={dept} onClick={() => toggleArrayItem(selectedDepts, setSelectedDepts, dept)} className="flex items-center gap-3 cursor-pointer group select-none">
              <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${selectedDepts.includes(dept) ? 'bg-old-gold border-old-gold' : 'border-white/20 bg-heavy-metal group-hover:border-old-gold/50'}`}>
                {selectedDepts.includes(dept) && <div className="w-2 h-2 bg-heavy-metal rounded-sm" />}
              </div>
              <span className={`text-[13px] font-medium transition-colors ${selectedDepts.includes(dept) ? 'text-ecru-white' : 'text-dove-gray group-hover:text-ecru-white'}`}>{dept}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[11px] font-black uppercase tracking-widest text-old-gold/80 border-b border-white/10 pb-2 flex w-full">Deployment Hub</label>
        <div className="space-y-3">
          {JOB_LOCATIONS.map((loc: string) => (
            <div key={loc} onClick={() => toggleArrayItem(selectedLocations, setSelectedLocations, loc)} className="flex items-center gap-3 cursor-pointer group select-none">
              <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${selectedLocations.includes(loc) ? 'bg-old-gold border-old-gold' : 'border-white/20 bg-heavy-metal group-hover:border-old-gold/50'}`}>
                {selectedLocations.includes(loc) && <div className="w-2 h-2 bg-heavy-metal rounded-sm" />}
              </div>
              <span className={`text-[13px] font-medium transition-colors ${selectedLocations.includes(loc) ? 'text-ecru-white' : 'text-dove-gray group-hover:text-ecru-white'}`}>{loc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JobListings({ jobs, clearFilters }: { jobs: JobOpening[], clearFilters: () => void }) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end mb-4 md:mb-6">
        <span className="text-[12px] md:text-[13px] font-black uppercase tracking-widest text-ecru-white">
          {jobs.length} {jobs.length === 1 ? 'Open Role' : 'Open Roles'}
        </span>
      </div>

      {jobs.length === 0 ? (
        <div className="py-16 md:py-20 text-center border border-white/5 bg-black/20 rounded-sm px-4">
          <Briefcase size={32} className="mx-auto text-white/20 mb-4" />
          <p className="text-[14px] md:text-[15px] font-medium text-dove-gray">No operational roles found matching your criteria.</p>
          <button onClick={clearFilters} className="mt-4 text-old-gold text-[12px] font-black uppercase tracking-widest hover:text-ecru-white transition-colors">Clear Filters</button>
        </div>
      ) : (
        <div className="space-y-3 md:space-y-4">
          <AnimatePresence>
            {jobs.map(job => (
              <JobCard 
                key={job.id} job={job} isExpanded={expandedJobId === job.id} 
                onToggle={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)} 
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

function JobCard({ job, isExpanded, onToggle }: { job: JobOpening, isExpanded: boolean, onToggle: () => void }) {
  return (
    <motion.div 
      layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
      className={`border rounded-sm transition-all duration-300 overflow-hidden ${isExpanded ? 'border-old-gold/50 bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'}`}
    >
      <div onClick={onToggle} className="p-5 md:p-8 cursor-pointer flex flex-col group">
        
        {/* Fixed Mobile Top Row: Text on Left, Chevron on Right */}
        <div className="flex items-start justify-between gap-4 w-full">
          <div className="space-y-2 md:space-y-3 flex-1">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-old-gold block">{job.department}</span>
            <h3 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-ecru-white group-hover:text-old-gold transition-colors leading-tight">
              {job.title}
            </h3>
            
            <div className="flex flex-wrap gap-y-2 gap-x-4 pt-1 md:pt-0 text-[11px] md:text-[12px] font-medium text-dove-gray uppercase tracking-widest">
              <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock size={13} className="text-white/40" /> {job.type}</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap"><MapPin size={13} className="text-white/40" /> {job.location}</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap"><Briefcase size={13} className="text-white/40" /> Exp: {job.experience}</span>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-6 mt-1 md:mt-0">
            {/* Apply button hidden on mobile, visible on desktop */}
            <a 
              href={`mailto:careers@mintrixmaintenance.com?subject=Application:%20${job.title}`} onClick={(e) => e.stopPropagation()} 
              className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-sm font-black text-[12px] uppercase tracking-widest transition-all ${isExpanded ? 'bg-old-gold text-heavy-metal hover:bg-ecru-white' : 'border border-old-gold/50 text-old-gold hover:bg-old-gold hover:text-heavy-metal'}`}
            >
              Apply Now <ArrowRight size={14} />
            </a>
            <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full border flex items-center justify-center transition-colors ${isExpanded ? 'border-old-gold text-old-gold bg-old-gold/10' : 'border-white/10 text-white/40 group-hover:border-old-gold group-hover:text-old-gold'}`}>
              <ChevronDown size={16} className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="p-5 md:p-8 pt-0 border-t border-white/5 mt-2 bg-black/20 space-y-6 md:space-y-8">
              <div className="space-y-3 pt-6">
                <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-ecru-white">Role Directive</h4>
                <p className="text-[13px] md:text-[14px] text-dove-gray leading-relaxed font-medium">{job.description}</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-ecru-white">Technical Requirements</h4>
                <ul className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13px] md:text-[14px] text-dove-gray font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-old-gold shrink-0 mt-1.5" />{req}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile Only Apply Button */}
              <div className="pt-2 md:hidden">
                <a 
                  href={`mailto:careers@mintrixmaintenance.com?subject=Application:%20${job.title}`}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-old-gold text-heavy-metal font-black text-[12px] uppercase tracking-widest shadow-xl"
                >
                  Apply Now <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}