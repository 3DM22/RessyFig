import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Scale, Megaphone, Landmark, ChevronRight, ShieldCheck, TrendingUp, Zap, Check } from "lucide-react";
import { cn } from "./ui/utils";
import { Button } from "./ui/button";
import { HexagonFrame, HexagonOutline, HexagonClusterOutline } from "./ui/HexagonFrame";

const industries = [
  {
    id: "legal",
    title: "Legal & Law Firms",
    subtitle: "Protecting Privilege & Integrity",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1596574027151-2ce81d85af3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBjb25zdWx0aW5nJTIwcHJvZmVzc2lvbmFsJTIwbGVnYWwlMjBtZWV0aW5nfGVufDF8fHx8MTc2ODY3MTgwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: (
      <>
        <p className="mb-4">
          Law firms occupy one of the most data-sensitive positions in the professional services landscape. They manage a breadth of confidential material that spans corporate transactions, litigation strategies, intellectual property, personal financial data, and privileged communications. This information is not only mission-critical but often irreplaceable, and its loss or exposure can have legal, financial, and reputational consequences that extend far beyond the firm itself.
        </p>
        <p className="mb-4">
          The sector has become an increasingly attractive target for cybercriminals. Attackers recognize that firms frequently possess valuable non-public information about mergers and acquisitions, pending litigation, or high-net-worth individuals—all of which can be monetized or weaponized.
        </p>
        <p>
          Unlike financial institutions or technology companies, law firms have traditionally lagged in cybersecurity maturity. Many operate on legacy systems, rely heavily on email for sensitive exchanges, and depend on a complex network of vendors for document management, eDiscovery, and cloud storage.
        </p>
      </>
    ),
    keyComponents: (
      <>
        <p className="mb-4">
          Building a resilient information security posture in the legal environment requires a framework that integrates governance, technology, and culture. At its core, every firm should establish a defined Information Security Management System (ISMS) aligned with widely accepted standards such as ISO 27001.
        </p>
        <p className="mb-4">
          Technical safeguards are essential. Encryption should protect all client data—whether in transit through email and file transfers or at rest on servers, devices, and backup systems. Multi-factor authentication and strict role-based access controls prevent unauthorized entry.
        </p>
        <p>
          People remain both the strongest defense and the most persistent risk. Firms should implement continuous training that moves beyond annual check-the-box exercises to immersive awareness programs, including simulated phishing campaigns.
        </p>
      </>
    ),
    emergingTrends: (
      <>
        <p className="mb-4">
          The cybersecurity landscape for law firms is evolving alongside broader regulatory, technological, and ethical developments. Increasingly, firms are expected not only to protect data but to demonstrate active compliance with defined standards.
        </p>
        <p className="mb-4">
          ISO 27001 certification has emerged as a benchmark for larger or global firms, formalizing the processes of risk assessment, control selection, and continual improvement. Achieving certification signals a commitment to internationally recognized standards.
        </p>
        <p>
          Ransomware remains one of the most significant threats, with attacks now involving “double” and “triple” extortion—encrypting data, exfiltrating copies, and threatening public exposure unless payment is made.
        </p>
      </>
    )
  },
  {
    id: "advertising",
    title: "Advertising",
    subtitle: "Balancing Creativity & Compliance",
    icon: Megaphone,
    image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg",
    overview: (
      <>
        <p className="mb-4">
          In the modern digital economy, advertising and marketing agencies sit at the center of an immense data ecosystem. They collect, analyze, and activate enormous volumes of consumer information—everything from browsing behavior and purchase history to location data and psychographic profiles.
        </p>
        <p className="mb-4">
          Agencies operate in an environment where trust is both fragile and essential. They are stewards not only of their own intellectual property and creative assets but also of their clients’ confidential strategies and customer data. A single breach can jeopardize multiple brands simultaneously.
        </p>
        <p>
          The cultural challenge is equally significant. In creative environments where speed, collaboration, and experimentation drive value, security can feel restrictive. Many agencies lack formalized security governance or dedicated compliance functions, relying instead on vendor assurances.
        </p>
      </>
    ),
    keyComponents: (
      <>
        <p className="mb-4">
          Effective information security for advertising and marketing agencies depends on aligning privacy, data protection, and operational discipline without constraining creativity. At the technical level, agencies must deploy strong access controls, encrypt sensitive data in transit and at rest, and maintain hardened, up-to-date systems.
        </p>
        <p className="mb-4">
          Vendor and platform oversight represent another critical layer. Agencies frequently rely on third-party software for analytics, automation, and programmatic advertising—each a potential entry point for attackers. Vetting the security posture of these partners is now fundamental.
        </p>
        <p>
          Finally, agencies must treat privacy as both a compliance requirement and a brand value. Implementing transparent consent mechanisms, clear data-handling disclosures, and consumer opt-out processes demonstrates respect for audience rights.
        </p>
      </>
    ),
    emergingTrends: (
      <>
        <p className="mb-4">
          The intersection of privacy regulation and advertising innovation is reshaping the industry. With the decline of third-party cookies, agencies are pivoting toward first-party and zero-party data strategies that rely on direct, consent-based relationships with consumers.
        </p>
        <p className="mb-4">
          Regulatory environments are expanding in scope and enforcement. The European Union’s GDPR remains the global benchmark, influencing similar laws such as the CCPA/CPRA. New frameworks like the Digital Markets Act (DMA) target large digital platforms.
        </p>
        <p>
          Beyond privacy, emerging technologies are introducing new dimensions of risk. Artificial intelligence now powers audience segmentation, sentiment analysis, and creative generation—yet the same technology can be weaponized.
        </p>
      </>
    )
  },
  {
    id: "wealth",
    title: "Wealth Management",
    subtitle: "Securing Assets & Trust",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1620808335012-0db31a306eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXNpcyUyMHRlYW0lMjBkaWdpdGFsJTIwc2NyZWVuJTIwZGF0YSUyMGZ1dHVyaXN0aWMlMjB3ZWFsdGglMjBtYW5hZ2VtZW50JTIwZW5lcmdldGljfGVufDF8fHx8MTc2NzkwMDA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    overview: (
      <>
        <p className="mb-4">
          The wealth management industry occupies a unique intersection of financial sophistication and personalized client service—an environment where trust is currency and information is among the most valuable assets. As digital transformation accelerates, the way firms store, process, and share data has shifted dramatically.
        </p>
        <p className="mb-4">
          Wealth managers face one of the most complex cybersecurity risk profiles in the financial sector. They manage significant assets and confidential information but often lack the infrastructure and security maturity of larger banking institutions.
        </p>
        <p>
          Cybersecurity incidents in this sector rarely stay contained. Beyond immediate operational disruption and financial loss, a single data breach can erode client confidence and damage a firm’s long-term credibility. In an industry defined by trust, recovery from such an event can take years.
        </p>
      </>
    ),
    keyComponents: (
      <>
        <p className="mb-4">
          Building a strong information security program in wealth management requires an integrated approach that balances technology, governance, and human behavior. Foundational controls—such as encryption of data at rest and in transit—form the technical baseline.
        </p>
        <p className="mb-4">
          Robust access management ensures that only authorized individuals handle sensitive data. Regular vulnerability assessments and penetration tests help identify and close weaknesses before they can be exploited.
        </p>
        <p>
          Equally critical are vendor oversight and human factors. Third-party risk management—through due diligence, contractual controls, and continuous monitoring—has become essential as wealth managers increasingly depend on outside technology providers.
        </p>
      </>
    ),
    emergingTrends: (
      <>
        <p className="mb-4">
          The regulatory and threat landscape for wealth management continues to evolve rapidly. The SEC and FINRA have introduced increasingly prescriptive cybersecurity expectations, culminating in new rules around incident disclosure and governance accountability.
        </p>
        <p className="mb-4">
          Globally, frameworks such as GDPR and GLBA have set high standards for protecting personal information. Firms that operate internationally or serve global investors must harmonize compliance across multiple regimes.
        </p>
        <p>
          Meanwhile, the threat environment itself is being reshaped by artificial intelligence and automation. Cybercriminals are leveraging AI to craft convincing phishing messages, while firms are deploying AI defensively for threat detection.
        </p>
      </>
    )
  }
];

export function IndustriesPage({ onNavigate }: { onNavigate?: (page: "home" | "services" | "industries" | "about" | "insights" | "contact") => void }) {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // Offset for header + tabs

      // Iterate through sections to find the current one
      for (const industry of industries) {
        const element = document.getElementById(industry.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(industry.id);
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
      // Offset calculation for sticky header (60px) + sticky tabs (80px) = ~140px
      const offset = 140; 
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
      
      {/* 1. HERO SECTION - Updated Palette */}
      <section className="relative pt-24 pb-24 bg-[#0a1a3c] overflow-hidden">
        {/* Hexagon Accent */}
        <HexagonOutline variant="orange" className="absolute bottom-[-10%] left-[-5%] h-[80%] w-[40%] opacity-10 -rotate-12 stroke-[1px]" />
        
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
              Rising Expectations <span className="text-[#fa6b29]">Across Industries</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Supporting organizations across regulated and unregulated industries that are feeling the same pressure: Protect Data, Prove Trust, and Operate with Discipline
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STICKY TABS */}
      <div className="sticky top-[52px] md:top-[60px] z-40 bg-white border-b border-slate-200 shadow-sm transition-[top] duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto hide-scrollbar -mb-px md:justify-center">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => scrollToSection(industry.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-5 border-b-4 transition-all duration-300 whitespace-nowrap min-w-max outline-none focus:outline-none",
                  activeTab === industry.id 
                    ? "border-[#fa6b29] text-[#0a1a3c] bg-[#dce3ea]" 
                    : "border-transparent text-slate-500 hover:text-[#0a1a3c] hover:border-slate-300"
                )}
              >
                <industry.icon className={cn(
                  "w-5 h-5 transition-colors duration-300",
                  activeTab === industry.id ? "text-[#fa6b29]" : "text-slate-400"
                )} />
                <span className={cn(
                  "font-bold text-sm uppercase tracking-wide transition-colors duration-300",
                  activeTab === industry.id ? "text-[#0a1a3c]" : "text-slate-500"
                )}>
                  {industry.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SCROLLING CONTENT AREA */}
      <div className="bg-[#dce3ea]">
        {industries.map((industry, index) => (
           <section 
             key={industry.id} 
             id={industry.id}
             className={cn(
               "py-24 border-b border-slate-200 scroll-mt-40",
               index % 2 === 0 ? "bg-white" : "bg-[#dce3ea]"
             )}
           >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.5 }}
                 className="grid lg:grid-cols-12 gap-12 items-start"
               >
                 {/* Left Column: Image & Highlights - Sticky */}
                 <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-0">
                   {/* HEXAGON FRAME FOR IMAGE */}
                   {/* IMAGE & TEXT BLURB */}
                   <div className="relative w-full aspect-[4/3] max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl group">
                      <img 
                        src={industry.image} 
                        alt={industry.title} 
                        className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3c]/90 via-[#0a1a3c]/20 to-transparent opacity-90" />
                      
                      {/* Special tint for images to match color scheme better */}
                      {(industry.id === "legal" || industry.id === "advertising" || industry.id === "wealth") && (
                        <div className="absolute inset-0 bg-[#0a1a3c]/40 mix-blend-color" />
                      )}
                      
                      <div className="absolute bottom-0 left-0 w-full p-8 flex items-end">
                        <div className="flex items-center gap-4">
                           <div className="bg-[#fa6b29] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                             <industry.icon className="w-8 h-8 text-[#0a1a3c]" />
                           </div>
                           <div>
                             <h3 className="text-white font-bold text-2xl leading-tight">{industry.title}</h3>
                             <p className="text-slate-300 text-sm font-medium">{industry.subtitle}</p>
                           </div>
                        </div>
                      </div>
                   </div>

                   {/* Industry Focus Box - Updated to Card Shape */}
                   <div className="bg-[#0a1a3c] p-8 rounded-3xl shadow-xl border border-slate-700/50 relative overflow-hidden mt-6 w-full max-w-sm mx-auto lg:mx-0">
                     {/* Background Effects */}
                     <div className="absolute top-0 right-0 w-40 h-40 bg-[#fa6b29]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                     <HexagonClusterOutline variant="orange" className="absolute -bottom-16 -right-16 w-80 h-80 opacity-20 -rotate-12" strokeWidth={3} />

                     <h3 className="text-[#fa6b29] font-bold uppercase tracking-widest text-xs mb-4 relative z-10">Industry Focus</h3>
                     <p className="text-white text-lg leading-relaxed font-light italic opacity-90 relative z-10">
                       "Resiliam helps {industry.title.toLowerCase()} navigate the complex intersection of regulatory pressure, client expectations, and evolving cyber threats."
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
                       {industry.title}
                     </h2>
                     <div className="text-slate-600 text-lg leading-relaxed font-light space-y-4">
                       {industry.overview}
                     </div>
                   </div>

                   {/* Key Components - Sharp Box */}
                   <div className="border-t border-slate-200 pt-10">
                     <h3 className="text-xl font-bold text-[#0a1a3c] mb-6 flex items-center gap-2">
                       <ShieldCheck className="w-6 h-6 text-[#fa6b29]" /> Key Components
                     </h3>
                     <div className="bg-[#f1f5f9] border-l-4 border-[#0a1a3c] p-6 text-slate-700 leading-relaxed space-y-4">
                       {industry.keyComponents}
                     </div>
                   </div>

                   {/* Emerging Trends - Sharp Box */}
                   <div className="border-t border-slate-200 pt-10">
                     <h3 className="text-xl font-bold text-[#0a1a3c] mb-6 flex items-center gap-2">
                       <TrendingUp className="w-6 h-6 text-[#fa6b29]" /> Emerging Trends
                     </h3>
                     <div className="bg-[#f1f5f9] border-l-4 border-[#fa6b29] p-6 text-slate-700 leading-relaxed space-y-4">
                        {industry.emergingTrends}
                     </div>
                   </div>
                   
                   <div className="pt-4">
                      <Button 
                        onClick={() => onNavigate?.("contact")}
                        className="bg-[#fa6b29] hover:bg-[#e55a1b] text-white font-bold px-8 py-6 rounded-none shadow-lg text-lg w-full sm:w-auto hover:translate-x-1 transition-transform"
                      >
                         Work with Us
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
