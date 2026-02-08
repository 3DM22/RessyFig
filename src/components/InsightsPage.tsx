import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Brain, Check, Zap, ChevronRight, Menu, Shield, Lock } from "lucide-react";
import { cn } from "./ui/utils";
import { Button } from "./ui/button";
import { HexagonFrame, HexagonOutline } from "./ui/HexagonFrame";

// Data Structure for Insights
const insights = [
  {
    id: "iso-42001",
    title: "ISO 42001",
    subtitle: "Responsible AI Standard",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677078610172-7ff3e0772ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMGRpc2N1c3NpbmclMjBBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBzdHJhdGVneSUyMG1vZGVybiUyMG9mZmljZSUyMGJsdWUlMjBvcmFuZ2UlMjBsaWdodGluZ3xlbnwxfHx8fDE3Njc5MTMxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: (
      <>
        <h3 className="text-xl font-bold text-[#0a1a3c] mb-4">The First Global Standard for Responsible AI</h3>
        <p className="mb-4">
          In late 2023, ISO released ISO/IEC 42001, the world’s first international standard for governing artificial intelligence. Much like ISO 27001 for information security, this new standard creates a structured, certifiable way for organizations to manage AI responsibly—covering transparency, data quality, accountability, human oversight, and ethical use.
        </p>
        <p className="mb-4">
          ISO 42001 uses the same structure as other ISO management systems, making it easier to integrate with existing programs such as ISO 27001 and ISO 27701. It also introduces 38 AI-specific controls, along with new expectations around AI risk assessments, impact assessments, lifecycle management, and vendor accountability.
        </p>
        <p className="mb-6">
          For CEOs, the message is clear: AI governance is becoming a mainstream expectation. Organizations that adopt ISO 42001 early will be better positioned to demonstrate trust, reduce risk, and meet the rising demands of customers, partners, and regulators.
        </p>

        <h3 className="text-xl font-bold text-[#0a1a3c] mb-4">Why the Standard Matters</h3>
        <p className="mb-4">
          AI is moving fast, and organizations are under pressure to show they are using it safely, ethically, and transparently. ISO 42001 gives companies a clear way to:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
          <li>Demonstrate responsible AI practices</li>
          <li>Address rising expectations from customers, partners, and regulators</li>
          <li>Reduce risks tied to biased models, misuse of data, or supplier vulnerabilities</li>
          <li>Integrate AI governance into their existing management systems</li>
        </ul>

        <h3 className="text-xl font-bold text-[#0a1a3c] mb-4">What This Means for Your Business</h3>
        <p className="mb-4">
          ISO 42001 is quickly becoming the reference point for responsible AI. Early adopters will be better positioned to build trust with clients and partners, reduce operational and reputational risk, and demonstrate leadership in responsible AI.
        </p>

        <h3 className="text-xl font-bold text-[#0a1a3c] mb-4">How Resiliam Helps</h3>
        <p>
          Resiliam has followed ISO 42001 from its earliest drafts and built practical tools—including risk, impact, and control-mapping frameworks—to help organizations assess readiness, integrate AI governance with existing security and privacy programs, and implement the standard efficiently.
        </p>
      </>
    ),
    capabilities: [
      { title: "Clear AI Governance Objectives", description: "Define reliability, privacy, robustness, security, and maintainability goals." },
      { title: "AI-Specific Risk Assessments", description: "Assess transparency, automation levels, data quality, and vendor trustworthiness." },
      { title: "AI System Impact Assessments", description: "Evaluate how AI systems may affect individuals, groups, customers, and society." },
      { title: "Updated Controls", description: "Implement 38 AI-specific controls covering policies, data quality, and lifecycle." }
    ]
  },
  {
    id: "cyber-resilience",
    title: "Cyber Resilience 2025",
    subtitle: "Beyond Traditional Defense",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1662638600476-d563fffbb072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwb3BlcmF0aW9ucyUyMGNlbnRlciUyMGFuYWx5c3RzJTIwbW9uaXRvcmluZyUyMGRhdGElMjBzY3JlZW5zJTIwYmx1ZSUyMG9yYW5nZSUyMHBhbGV0dGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3OTEzMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: (
      <>
        <h3 className="text-xl font-bold text-[#0a1a3c] mb-4">The Shift from Prevention to Resilience</h3>
        <p className="mb-4">
          As cyber threats become more sophisticated and persistent, the traditional "prevention-first" mindset is no longer sufficient. Organizations must shift towards "resilience"—the ability to anticipate, withstand, recover from, and adapt to adverse conditions, stresses, attacks, or compromises on systems that use or are enabled by cyber resources.
        </p>
        <p className="mb-4">
          Cyber resilience integrates information security, business continuity, and organizational resilience. It acknowledges that breaches may occur and focuses on minimizing impact and ensuring service delivery continues despite disruptions.
        </p>
        <p className="mb-6">
          This paradigm shift requires a holistic approach that moves beyond technical controls to include culture, governance, and supply chain risk management.
        </p>

        <h3 className="text-xl font-bold text-[#0a1a3c] mb-4">Key Strategic Imperatives</h3>
        <p className="mb-4">
          To build true cyber resilience, leaders must focus on:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
          <li>Assuming breach: Design systems that remain functional even when compromised.</li>
          <li>Unified governance: Breaking down silos between security, privacy, and continuity teams.</li>
          <li>Supply chain visibility: Understanding and managing the risks posed by third-party vendors.</li>
          <li>Continuous testing: Regularly validating response plans through realistic simulations.</li>
        </ul>
      </>
    ),
    capabilities: [
      { title: "Adaptive Defense", description: "Dynamic security postures that evolve with the threat landscape." },
      { title: "Zero Trust Architecture", description: "Eliminate implicit trust; verify every access request continuously." },
      { title: "Incident Response", description: "Rapid detection, containment, and recovery workflows." },
      { title: "Business Continuity", description: "Ensuring critical operations survive disruptive events." }
    ]
  },
  {
    id: "privacy-evolution",
    title: "Privacy Evolution",
    subtitle: "Global Compliance Trends",
    icon: Lock,
    image: "https://images.unsplash.com/photo-1584757283806-b5c0b3dd3734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwcHJpdmFjeSUyMGV4cGVydCUyMGFuYWx5c2luZyUyMGRhdGElMjBvbiUyMHNjcmVlbiUyMGJsdWUlMjBvcmFuZ2UlMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzY3OTE1Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: (
      <>
        <h3 className="text-xl font-bold text-[#0a1a3c] mb-4">Navigating the Fragmented Landscape</h3>
        <p className="mb-4">
          The global privacy landscape is becoming increasingly fragmented. With the proliferation of comprehensive data privacy laws like GDPR, CCPA/CPRA, and new regulations in emerging markets, multi-national organizations face a complex compliance challenge.
        </p>
        <p className="mb-4">
          Compliance is no longer just a legal checkbox; it is a critical component of brand trust. Consumers are more aware of their rights and more willing to walk away from companies that fail to protect their data.
        </p>
        <p className="mb-6">
          Forward-thinking organizations are adopting a global privacy baseline—often built on ISO 27701 or the NIST Privacy Framework—to streamline compliance and ensure a consistent standard of care across all jurisdictions.
        </p>

        <h3 className="text-xl font-bold text-[#0a1a3c] mb-4">What Leaders Need to Know</h3>
        <p className="mb-4">
          Privacy leaders must move beyond reactive compliance to proactive privacy engineering. This involves:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
          <li>Embedding privacy by design into the product development lifecycle.</li>
          <li>Automating data subject access requests (DSARs) to handle volume and complexity.</li>
          <li> establishing clear data governance and accountability structures.</li>
          <li>Monitoring regulatory changes to anticipate future requirements.</li>
        </ul>
      </>
    ),
    capabilities: [
      { title: "Global Frameworks", description: "Harmonizing compliance across GDPR, CCPA, and other regimes." },
      { title: "Data Sovereignty", description: "Managing cross-border data transfer restrictions." },
      { title: "Consumer Rights", description: "Efficient mechanisms for handling data subject requests." },
      { title: "Privacy by Design", description: "Integrating privacy controls early in the development process." }
    ]
  }
];

export function InsightsPage({ onNavigate }: { onNavigate?: (page: "home" | "services" | "industries" | "about" | "insights" | "contact") => void }) {
  const [activeTab, setActiveTab] = useState(insights[0].id);

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      // Adjusted offset for the side nav layout
      const scrollPosition = window.scrollY + 300; 

      for (const insight of insights) {
        const element = document.getElementById(insight.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(insight.id);
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
      const offset = 120; // Header height + padding
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
    <div className="min-h-screen pt-20 bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-24 bg-[#0a1a3c] overflow-hidden">
        {/* Hexagon Outline */}
        <HexagonOutline variant="orange" className="absolute -right-[10%] top-[10%] h-[80%] w-[40%] opacity-10 rotate-12 stroke-[1px]" />
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMGdsb2JhbCUyMGJsdWUlMjBnb2xkfGVufDF8fHx8MTc2NTMwOTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
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
              Resiliam <span className="text-[#fa6b29]">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              In a fast-moving security landscape, leaders need clarity—not complexity. Resiliam’s Insights distill important developments in information security, privacy, and emerging standards into practical takeaways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN LAYOUT WITH SIDE NAV */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SIDEBAR NAVIGATION (Desktop) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-32">
            <div className="bg-white rounded-none shadow-lg border border-slate-100 p-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                Latest Insights
              </h3>
              <div className="space-y-2">
                {insights.map((insight) => (
                  <button
                    key={insight.id}
                    onClick={() => scrollToSection(insight.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 text-sm font-bold transition-all duration-200 border-l-4",
                      activeTab === insight.id 
                        ? "bg-slate-50 text-[#0a1a3c] border-[#fa6b29]" 
                        : "bg-transparent text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-800"
                    )}
                  >
                    {insight.title}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Need personalized guidance on these topics?
                </p>
                <Button 
                  onClick={() => onNavigate?.("contact")}
                  className="w-full bg-[#0a1a3c] hover:bg-[#162d5e] text-white text-xs font-bold py-2 rounded-none"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-24">
            {insights.map((insight, index) => (
              <section 
                key={insight.id} 
                id={insight.id}
                className="scroll-mt-32"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Insight Header Image & Intro */}
                  <div className="grid md:grid-cols-12 gap-8 mb-12">
                     <div className="md:col-span-5 relative">
                        {/* HEXAGON IMAGE FRAME */}
                        <div className="relative w-full aspect-square">
                           <HexagonFrame 
                             src={insight.image} 
                             alt={insight.title} 
                             className="w-full h-full drop-shadow-xl"
                           />
                           {/* Badge Overlay */}
                           <div className="absolute bottom-4 left-4 z-20 bg-[#fa6b29] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-none">
                              {insight.subtitle}
                           </div>
                        </div>
                     </div>
                     <div className="md:col-span-7">
                        <div className="bg-[#0a1a3c] p-8 text-white h-full relative overflow-hidden shadow-xl flex flex-col justify-center border-l-4 border-[#fa6b29]">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#fa6b29]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                          <h3 className="text-[#fa6b29] font-bold uppercase tracking-widest text-xs mb-4">Executive Summary</h3>
                          <p className="text-slate-300 leading-relaxed font-light italic text-lg">
                            "Organizations that adopt {insight.title} early will be better positioned to demonstrate trust, reduce risk, and meet the rising demands of customers."
                          </p>
                        </div>
                     </div>
                  </div>

                  {/* Detailed Content */}
                  <div className="bg-white shadow-sm border border-slate-200 p-8 md:p-12">
                    <div className="text-slate-600 leading-relaxed space-y-4">
                      {insight.overview}
                    </div>

                    <div className="border-t border-slate-100 mt-10 pt-10">
                      <h3 className="text-lg font-bold text-[#0a1a3c] mb-6 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#fa6b29]" /> Key Requirements
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {insight.capabilities.map((cap, i) => (
                          <div 
                            key={i} 
                            className="p-4 bg-slate-50 border border-slate-200 hover:border-[#fa6b29]/50 transition-colors duration-200"
                          >
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

                    <div className="mt-10 pt-10 border-t border-slate-100 flex justify-center">
                       <Button 
                          onClick={() => onNavigate?.("contact")}
                          className="bg-[#fa6b29] hover:bg-[#e55a1b] text-white font-bold px-8 py-4 shadow-lg text-base rounded-none"
                       >
                          Assess Your Readiness
                       </Button>
                    </div>
                  </div>

                </motion.div>
              </section>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
