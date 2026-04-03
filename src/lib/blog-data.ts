export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Can contain HTML strings or paragraphs
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "hvac-optimization-summer",
    title: "Maximizing HVAC Efficiency During the Dubai Summer",
    excerpt: "Discover the critical maintenance steps required to keep your elite property's cooling systems running at peak performance during extreme temperatures.",
    content: `
      <p>The sweltering heat of the Dubai summer puts immense strain on even the most robust HVAC systems. For elite property owners, a sudden failure is not just an inconvenience; it's a disruption to their lifestyle and a potential risk to the property's interior finishes.</p>
      
      <h3>The Importance of Proactive Coil Cleaning</h3>
      <p>Dust and sand are the enemies of cooling efficiency. When condenser coils are coated in debris, the system must work twice as hard to expel heat. This not only spikes energy consumption but drastically reduces the lifespan of the compressor.</p>
      
      <p>At Mintrix, our engineering-grade approach involves specialized, non-corrosive chemical washes that strip away micro-particulates without damaging the delicate aluminum fins. Regular filter replacement is only the beginning; true efficiency requires a deep dive into the mechanical heart of your system.</p>
      
      <blockquote>"Preventative maintenance isn't a cost; it's an investment in the longevity of your property's core infrastructure."</blockquote>
      
      <h3>Smart Climate Control</h3>
      <p>Ensure your smart thermostats are calibrated correctly. Consider upgrading to AI-driven climate control systems that adjust based on occupancy and ambient humidity. These modern integrations can save up to 30% on annual cooling costs while maintaining an uncompromised level of comfort.</p>
    `,
    category: "Technical Guide",
    date: "Aug 15, 2024",
    readTime: "5 min read",
    image: "/images/Blogs/plumbering.webp",
    author: {
      name: "Tariq Mansour",
      role: "Lead MEP Engineer",
      avatar: "/images/Blogs/avatar.jpg" 
    }
  },
  {
    id: "2",
    slug: "smart-home-integration-maintenance",
    title: "The Silent Failure: Why Smart Homes Need Analog Maintenance",
    excerpt: "Smart home automation is only as reliable as the physical infrastructure it controls. Learn why automated systems require specialized mechanical oversight.",
    content: `
      <p>We are increasingly relying on automation to manage our living spaces. From automated blinds to smart irrigation and climate control, the digital convenience is undeniable. However, a smart actuator controlling a stuck valve will eventually burn out. The digital intelligence of your home must be supported by flawless mechanical execution.</p>
      
      <h3>Bridging the Gap Between Code and Hardware</h3>
      <p>Our recent data shows that 40% of "smart home failures" are actually underlying mechanical issues that the software couldn't bypass. When an automated gate fails to open, the issue is rarely the Wi-Fi connection; it's often a lack of lubrication on the physical tracks or a failing motor relay.</p>
      
      <ul>
        <li><strong>Motorized Blinds:</strong> Require track alignment and tension checks.</li>
        <li><strong>Smart Valves:</strong> Need periodic manual flushing to prevent mineral buildup.</li>
        <li><strong>Automated Lighting:</strong> Physical switch relays degrade over time and require continuity testing.</li>
      </ul>

      <p>True luxury living requires a holistic maintenance approach. At Mintrix, our technicians are trained not just in traditional mechanics, but in how these physical systems interface with modern home networks.</p>
    `,
    category: "Industry Insights",
    date: "Sep 02, 2024",
    readTime: "4 min read",
    image: "/images/Blogs/electrical.webp",
    author: {
      name: "Sarah Jenkins",
      role: "Director of Operations",
      avatar: "/images/Blogs/avatar.jpg"
    }
  },
  {
    id: "3",
    slug: "preventing-water-damage-luxury-homes",
    title: "Protecting High-Value Finishes: Advanced Plumbing Maintenance",
    excerpt: "A minor leak can cause catastrophic damage to imported marble and bespoke cabinetry. Explore our advanced leak detection and prevention strategies.",
    content: `
      <p>In high-end real estate, plumbing is not just about water flow; it's about protecting the incredibly valuable assets surrounding the pipes. A slow, undetected leak behind a wall can destroy custom hardwood flooring, warp bespoke cabinetry, and stain imported marble finishes.</p>
      
      <h3>The Danger of Micro-Leaks</h3>
      <p>Micro-leaks often go unnoticed for months. The water pressure in premium properties is typically higher to accommodate luxury rainfall showers and deep soaking tubs, which naturally puts more stress on joints and valves.</p>
      
      <h3>Modern Detection Technology</h3>
      <p>Our maintenance teams employ non-invasive technologies to map moisture levels without damaging your walls:</p>
      <ul>
        <li><strong>Thermal Imaging:</strong> Detects temperature anomalies behind walls that indicate moisture accumulation.</li>
        <li><strong>Acoustic Sensors:</strong> Listens for the high-frequency hiss of water escaping from pressurized lines.</li>
        <li><strong>Smart Shut-off Valves:</strong> Installing IoT-enabled valves that automatically shut down the main water supply if an abnormal flow rate is detected.</li>
      </ul>

      <blockquote>"The best plumbing repair is the one that prevents the leak from ever happening."</blockquote>
      
      <p>Don't wait for a visible water stain on your ceiling. Routine acoustic and thermal inspections are the only way to guarantee the safety of your property's interior design investments.</p>
    `,
    category: "Preventative Care",
    date: "Oct 12, 2024",
    readTime: "6 min read",
    image: "/images/Blogs/renovation.webp", 
    author: {
      name: "Omar Al-Fayed",
      role: "Senior Plumbing Specialist",
      avatar: "/images/Blogs/avatar.jpg" // Reusing author avatar for testing
    }
  }
];