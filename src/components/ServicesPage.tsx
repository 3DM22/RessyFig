import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Shield, Lock, Eye, Brain, Activity, Server, Check, Zap, ChevronRight } from "lucide-react";
import { cn } from "./ui/utils";
import { Button } from "./ui/button";
import { HexagonFrame, HexagonOutline, HexagonClusterOutline } from "./ui/HexagonFrame";

// Data Structure mirroring the Homepage Services
const services = [
  {
    id: "ai",
    title: "AI Governance",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1738347826189-a39ac950bbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYWklMjBicmFpbiUyMGNpcmN1aXQlMjBib2FyZCUyMGdsb3dpbmclMjBvcmFuZ2UlMjBibHVlJTIwZGFya3xlbnwxfHx8fDE3Njc4MTgxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: (
      <>
        <p className="mb-4">
          Artificial Intelligence (AI) Governance is redefining how organizations create value—and how they manage risk. The rapid adoption of AI has introduced new dimensions of complexity to information and data security, as vast volumes of sensitive and proprietary data flow through learning models that now shape core business decisions.
        </p>
        <p className="mb-4">
          Regulatory frameworks such as the EU AI Act and NIST AI Risk Management Framework are beginning to define expectations for transparency, explainability, and oversight. At the same time, ISO 42001, the world’s first AI management system standard, provides a global foundation for building structure.
        </p>
        <p>
          Resiliam helps leaders close that gap. We bring the discipline of ISO frameworks and the foresight of AI governance together—helping organizations design systems that are secure, ethical, and defensible.
        </p>
      </>
    ),
    capabilities: [
      { title: "ISO/IEC 42001", description: "Prepare for the AI Management System Standard." },
      { title: "Risk Assessments", description: "Analyze model bias, data misuse, and security risks." },
      { title: "Governance Frameworks", description: "Design policies for ethical and secure AI use." },
      { title: "System Impact", description: "Evaluate the downstream effects of AI deployment." }
    ]
  },
  {
    id: "isms",
    title: "Information Security",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1724204401208-6349fc373543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwc2hpZWxkJTIwbG9jayUyMGRhcmslMjBibHVlJTIwb3JhbmdlJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2Nzg5MDEzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    overview: (
      <>
        <p className="mb-4">
          Information security sits at the core of organizational resilience. As digital ecosystems expand, the challenge has shifted from simply defending networks to demonstrating measurable, certifiable control over how information is managed, shared, and protected. Resiliam helps organizations design, implement, and sustain comprehensive Information Security Management Systems (ISMS) that align with leading standards such as ISO 27001, SOC 2, and the NIST Cybersecurity Framework.
        </p>
        <p className="mb-4">
          Across industries, clients, regulators, and business partners now expect verifiable proof of security maturity. While sectors such as law have long adopted formal certification programs to protect sensitive client data, similar expectations are rapidly emerging in advertising, wealth management, and other data-driven environments.
        </p>
        <p>
          Resiliam bridges that gap. We integrate governance, technology, and human behavior into a unified information security program that scales to your risk profile and operational realities.
        </p>
      </>
    ),
    capabilities: [
      { title: "SOC 2 Readiness", description: "Hands-on guidance for Trust Services Criteria alignment." },
      { title: "NIST Compliance", description: "Implement NIST SP 800-53/171 frameworks." },
      { title: "Business Continuity", description: "ISO 22301 implementation and disaster recovery planning." },
      { title: "CMMC Preparation", description: "Support across all CMMC maturity levels." },
      { title: "ISO 27001", description: "Full lifecycle implementation and audit support." },
      { title: "Incident Response", description: "Planning and tabletop exercises for breach scenarios." },
      { title: "Cloud Security", description: "Secure configuration for AWS, Azure, and Google Cloud." }
    ]
  },
  {
    id: "privacy",
    title: "Privacy",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1682329782401-3fb5f04d65b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHRFBSJTIwdGV4dCUyMGRpZ2l0YWwlMjBjb25jZXB0JTIwYmx1ZSUyMG9yYW5nZXxlbnwxfHx8fDE3Njc4MTg1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: (
      <>
        <p className="mb-4">
          Data privacy has evolved from a legal obligation to a core element of organizational governance and trust. As global data flows accelerate and personal information becomes embedded in every aspect of business, leaders face rising expectations for demonstrable privacy maturity—not just policy statements. Resiliam helps organizations design and operationalize Privacy Information Management Systems (PIMS) aligned with ISO/IEC 27701.
        </p>
        <p className="mb-4">
          While regulations such as GDPR, CCPA/CPRA, and emerging global frameworks continue to expand, most organizations still struggle to connect these evolving requirements with their existing security, compliance, and data management programs.
        </p>
        <p>
          Resiliam bridges these gaps by integrating privacy into the broader fabric of information security and governance. We help organizations map and manage data flows, establish clear accountability, and embed privacy-by-design into everyday operations.
        </p>
      </>
    ),
    capabilities: [
      { title: "ISO/IEC 27701", description: "PIMS implementation for global privacy standards." },
      { title: "GDPR/CCPA Advisory", description: "Navigate complex international privacy laws." },
      { title: "Data Mapping", description: "Identify data flows and accountability structures." },
      { title: "Impact Assessments", description: "Evaluate privacy risks in new products and systems." }
    ]
  }
];

export function ServicesPage({ onNavigate, initialSection }: { onNavigate?: (page: "home" | "services" | "industries" | "about" | "insights" | "contact") => void, initialSection?: string | null }) {
  const [activeTab, setActiveTab] = useState(services[0].id);

  // Handle initial section navigation
  useEffect(() => {
    if (initialSection) {
      setTimeout(() => {
        scrollToSection(initialSection);
      }, 100);
    }
  }, [initialSection]);

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // Offset for header + tabs

      // Iterate through sections to find the current one
      for (const service of services) {
        const element = document.getElementById(service.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(service.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset calculation for sticky header (80px) + sticky tabs (80px) = ~160px
      const offset = 160; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveTab(id);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-[#dce3ea]">
      
      {/* 1. HERO SECTION - Updated Colors and Hexagon Accent */}
      <section className="relative pt-24 pb-24 bg-[#0a1a3c] overflow-hidden">
        {/* Background Hexagon Decoration */}
        <HexagonOutline variant="orange" className="absolute top-0 right-[-10%] h-[120%] w-[50%] opacity-10 rotate-12 stroke-[1px]" />
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1654150501793-b5c7c6ef1b84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJ1c2luZXNzJTIwdGVjaG5vbG9neSUyMHdhdmVzJTIwYmx1ZSUyMGdvbGQlMjBkYXJrfGVufDF8fHx8MTc2NTMxMTM4Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a3c] via-transparent to-[#0a1a3c]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Bring Clarity to <span className="text-[#fa6b29]">Complexity</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Resiliam provides end-to-end security, privacy, and governance services that turn complex requirements into clear, manageable programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STICKY TABS - Cleaner Look */}
      <div className="sticky top-[52px] md:top-[60px] z-40 bg-white border-b border-slate-200 shadow-sm transition-[top] duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto hide-scrollbar -mb-px justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-5 border-b-4 transition-all duration-300 whitespace-nowrap min-w-max outline-none focus:outline-none",
                  activeTab === service.id 
                    ? "border-[#fa6b29] text-[#0a1a3c] bg-[#dce3ea]" 
                    : "border-transparent text-slate-500 hover:text-[#0a1a3c] hover:border-slate-300"
                )}
              >
                <service.icon className={cn(
                  "w-5 h-5 transition-colors duration-300",
                  activeTab === service.id ? "text-[#fa6b29]" : "text-slate-400"
                )} />
                <span className={cn(
                  "font-bold text-sm uppercase tracking-wide transition-colors duration-300",
                  activeTab === service.id ? "text-[#0a1a3c]" : "text-slate-500"
                )}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SCROLLING CONTENT AREA */}
      <div className="bg-[#dce3ea]">
        {services.map((service, index) => (
           <section 
             key={service.id} 
             id={service.id}
             className={cn(
               "py-24 border-b border-slate-200 scroll-mt-40 relative overflow-hidden",
               index % 2 === 0 ? "bg-white" : "bg-[#dce3ea]"
             )}
           >
            {/* Background Texture Hexagons */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
               <HexagonOutline variant={index % 2 === 0 ? "blue" : "orange"} className="absolute -top-24 -right-24 w-[600px] h-[600px] rotate-12" />
               <HexagonOutline variant="blue" className="absolute top-1/2 -left-32 w-[300px] h-[300px] -rotate-12" />
            </div>

            <div className="max-w-7xl mx-auto md:px-8 relative z-10 p-[0px]">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.5 }}
                 className="grid lg:grid-cols-12 gap-12 items-start"
               >
                 {/* Left Column: Image & Highlights */}
                 <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-0">
                   
                   {/* IMAGE & TEXT BLURB */}
                    {/* IMAGE & TEXT BLURB */}
                    <div className="relative w-full aspect-[4/3] max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl group">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3c]/90 via-[#0a1a3c]/20 to-transparent opacity-90" />
                      
                      {/* Tone down green for ISMS image */}
                      {service.id === "isms" && (
                        <div className="absolute inset-0 bg-[#0a1a3c]/75 mix-blend-color" />
                      )}
                      
                      <div className="absolute bottom-0 left-0 w-full p-8 flex items-end">
                        <div className="flex items-center gap-4">
                           <div className="bg-[#fa6b29] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                             <service.icon className="w-8 h-8 text-[#0a1a3c]" />
                           </div>
                           <div>
                             <h3 className="text-white font-bold text-2xl leading-tight">{service.title}</h3>
                           </div>
                        </div>
                      </div>
                    </div>

                   {/* Why it matters Box - Updated to Card Shape */}
                   <div className="bg-[#0a1a3c] p-8 rounded-3xl shadow-xl border border-slate-700/50 relative overflow-hidden w-full max-w-sm mx-auto lg:mx-0">
                     {/* Background Effects */}
                     <div className="absolute top-0 right-0 w-40 h-40 bg-[#fa6b29]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                     <HexagonClusterOutline variant="orange" className="absolute -bottom-16 -right-16 w-80 h-80 opacity-20 -rotate-12" strokeWidth={3} />
                     
                     <h3 className="text-[#fa6b29] font-bold uppercase tracking-widest text-xs mb-4 relative z-10">Why it matters</h3>
                     <p className="text-white text-lg leading-relaxed font-light italic opacity-90 relative z-10">
                       "Effective {service.title.toLowerCase()} is not just about compliance—it's about building the resilience required to thrive in a volatile world."
                     </p>
                     <div 
                       onClick={() => onNavigate?.("contact")}
                       className="mt-6 flex items-center gap-2 text-sm font-bold text-[#fa6b29] cursor-pointer hover:text-white transition-colors relative z-10"
                     >
                       Speak to an expert <ChevronRight className="w-4 h-4" />
                     </div>
                   </div>
                 </div>

                 {/* Right Column: Detailed Content */}
                 <div className="lg:col-span-7 space-y-10 lg:pt-8">
                   <div>
                     <div className="text-[#fa6b29] font-bold uppercase tracking-widest text-sm mb-2">Overview</div>
                     <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a3c] mb-6">
                       {service.title}
                     </h2>
                     <div className="text-slate-600 text-lg leading-relaxed font-light space-y-4">
                       {service.overview}
                     </div>
                   </div>

                   <div className="border-t border-slate-200 pt-10">
                     <h3 className="text-xl font-bold text-[#0a1a3c] mb-6 flex items-center gap-2">
                       <Zap className="w-5 h-5 text-[#fa6b29]" /> Key Capabilities
                     </h3>
                     <div className="grid sm:grid-cols-2 gap-4">
                       {service.capabilities.map((cap, i) => (
                         <div 
                           key={i} 
                           className="p-5 bg-white border border-slate-200 shadow-sm hover:border-[#fa6b29]/50 hover:shadow-md transition-all duration-200 group relative overflow-hidden"
                         >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-[#fa6b29] group-hover:h-full transition-all duration-300"></div>
                           <div className="flex gap-3 items-start">
                             <Check className="w-5 h-5 text-[#fa6b29] shrink-0 mt-0.5" />
                             <div>
                               <h4 className="font-bold text-[#0a1a3c] text-sm mb-1">{cap.title}</h4>
                               <p className="text-xs text-slate-500 leading-snug">{cap.description}</p>
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                   
                   <div className="pt-4">
                      <Button 
                        onClick={() => onNavigate?.("contact")}
                        className="bg-[#fa6b29] hover:bg-[#e55a1b] text-white font-bold px-8 py-6 rounded-none shadow-lg text-lg w-full sm:w-auto hover:translate-x-1 transition-transform"
                      >
                         Get Started with {service.title}
                      </Button>
                   </div>
                 </div>
               </motion.div>
            </div>
           </section>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
