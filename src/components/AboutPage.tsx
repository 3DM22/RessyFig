import { motion } from "motion/react";
import { Award, GraduationCap, ShieldCheck, Target, Users, History, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { HexagonBadge } from "./ui/HexagonBadge";
import { HexagonFrame, HexagonOutline } from "./ui/HexagonFrame";

export function AboutPage({ onNavigate }: { onNavigate?: (page: "home" | "services" | "industries" | "about" | "insights" | "contact") => void }) {
  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      
      {/* 1. HERO SECTION - Hexagon Backgrounds */}
      <section className="relative pt-24 pb-24 bg-white overflow-hidden">
        {/* Decorative Hexagon */}
        <HexagonOutline variant="blue" className="absolute top-[-10%] left-[-5%] h-[60%] w-[30%] opacity-10 rotate-12 stroke-[1px]" />
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543782465-24d9201afc74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmUlMjB3aGl0ZSUyMGJsdWUlMjBnb2xkfGVufDF8fHx8MTc2NTk5NzI2NXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Office Background" 
            className="w-full h-full object-cover opacity-80 contrast-105 grayscale-[50%]"
          />
          <div className="absolute inset-0 bg-white/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#0a1a3c] mb-6 tracking-tight leading-tight">
              Building Trust in a <br/>
              <span className="text-[#fa6b29]">Complex World</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto mb-6">
              Resiliam brings consistency, clarity, and discipline to information security. We are the partners you trust when the stakes are high.
            </p>

            <div className="flex justify-center">
              <div className="border border-[#0a1a3c]/20 px-4 py-2 bg-white/50 backdrop-blur-sm">
                <span className="flex items-center gap-2 text-[#fa6b29] font-bold uppercase tracking-widest text-sm">
                  <History className="w-4 h-4" /> Since 2006
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION & VALUES STRIP */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-[#0a1a3c]">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Since 2006, Resiliam has been dedicated to helping organizations leverage industry standards to protect their information systems and the sensitive data entrusted to them.
                </p>
                <p>
                  Our proprietary methodology brings consistency, clarity, and discipline to every engagement—from initial planning through successful audit. With more than 100 ISO 27001 implementations completed, we’ve become a trusted partner to organizations across industries that value experience, precision, and peace of mind.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-slate-50 p-6 border-l-4 border-[#fa6b29]">
                  <h3 className="font-bold text-[#0a1a3c] text-3xl mb-1">100+</h3>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Implementations</p>
                </div>
                <div className="bg-slate-50 p-6 border-l-4 border-[#0a1a3c]">
                  <h3 className="font-bold text-[#0a1a3c] text-3xl mb-1">18+</h3>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Image/Visual - Hexagon Framed */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                 <HexagonFrame 
                   src="https://images.unsplash.com/photo-1565598494553-5685d762031c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBleHBsYWluaW5nJTIwc3RyYXRlZ3klMjB0byUyMGNsaWVudCUyMHBvaW50aW5nJTIwYXQlMjBzY3JlZW4lMjBjb2xsYWJvcmF0aXZlJTIwbWVldGluZ3xlbnwxfHx8fDE3Njc5MDI2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                   alt="Team Collaboration" 
                   className="w-full h-full drop-shadow-2xl"
                 />
                 {/* Floating Mission Card */}
                 <div className="absolute -bottom-8 -right-8 w-64 bg-[#0a1a3c] p-6 text-white shadow-xl z-20 border-l-4 border-[#fa6b29]">
                    <h3 className="text-[#fa6b29] font-bold uppercase tracking-widest text-xs mb-2">Our Purpose</h3>
                    <p className="italic font-light text-sm">
                      "To equip clients with the governance and assurance needed to protect information and earn trust."
                    </p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP TEAM - THE MAIN EVENT */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1a3c] mb-6">Leadership Team</h2>
            <p className="text-xl text-slate-600 font-light">
              Guided by decades of experience in security leadership, governance, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* CARD 1: Michael P. Johnson */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white shadow-xl border border-slate-100 group relative overflow-visible mt-12"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 z-10">
                 <HexagonFrame 
                   src="https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBtYW4lMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NzcyOTEzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Michael P. Johnson"
                   className="w-full h-full drop-shadow-lg"
                 />
              </div>

              <div className="pt-24 pb-8 px-8 text-center bg-white h-full flex flex-col">
                <h3 className="text-2xl font-bold text-[#0a1a3c] mb-1">Michael P. Johnson</h3>
                <div className="text-[#fa6b29] font-bold text-sm uppercase tracking-widest mb-4">Managing Member</div>
                
                <div className="flex flex-wrap gap-1.5 mb-6 justify-center">
                  {["MBA", "MSIA", "CISSP", "ISO 27001 LA", "C GDPR P", "CISA", "CISM", "CRISC", "CGEIT"].map((c, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-bold border border-slate-200 uppercase">{c}</span>
                  ))}
                </div>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-left mt-auto">
                  <p>
                    Michael is the founder of Resiliam, bringing more than 40 years of experience in information security leadership. He is responsible for the firm’s strategic direction and financial management.
                  </p>
                  <p>
                    Before founding Resiliam, Michael led a team of more than 20 IT security professionals and spent two decades with the Northeast region’s leading provider of security services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: David White */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white shadow-xl border border-slate-100 group relative overflow-visible mt-12"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 z-10">
                 <HexagonFrame 
                   src="https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzY4OTQ3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="David White"
                   className="w-full h-full drop-shadow-lg"
                 />
              </div>

              <div className="pt-24 pb-8 px-8 text-center bg-white h-full flex flex-col">
                <h3 className="text-2xl font-bold text-[#0a1a3c] mb-1">David White</h3>
                <div className="text-[#fa6b29] font-bold text-sm uppercase tracking-widest mb-4">Partner, COO</div>
                
                <div className="flex flex-wrap gap-1.5 mb-6 justify-center">
                  {["CCSK", "CIS LI", "C-PIMS LA", "CBC LI", "CIPP/E", "ISO 27001 LA"].map((c, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-bold border border-slate-200 uppercase">{c}</span>
                  ))}
                </div>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-left mt-auto">
                  <p>
                    David is a partner and COO, leading the information security and business continuity practices. His expertise spans ISO 27001, ISO 22301, SOC 2, and AI governance.
                  </p>
                  <p>
                    Before joining Resiliam, David spent nearly 20 years in management consulting, advising global investment banks and asset managers on strategy. He graduated Phi Beta Kappa from Princeton University.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: Paul Johnson */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white shadow-xl border border-slate-100 group relative overflow-visible mt-12"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 z-10">
                 <HexagonFrame 
                   src="https://images.unsplash.com/photo-1759756655356-c38229d186a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtYWxlJTIwbGVhZGVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY3NzI5MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Paul Johnson"
                   className="w-full h-full drop-shadow-lg"
                 />
              </div>

              <div className="pt-24 pb-8 px-8 text-center bg-white h-full flex flex-col">
                <h3 className="text-2xl font-bold text-[#0a1a3c] mb-1">Paul Johnson</h3>
                <div className="text-[#fa6b29] font-bold text-sm uppercase tracking-widest mb-4">Partner</div>
                
                <div className="flex flex-wrap gap-1.5 mb-6 justify-center">
                  {["CCSK", "CIPP/US", "CIPP/E", "CIPT", "CIPM", "CISSP", "FIP"].map((c, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-bold border border-slate-200 uppercase">{c}</span>
                  ))}
                </div>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-left mt-auto">
                  <p>
                    Paul leads the Privacy and AI practice groups and serves as the firm’s technology lead. He is deeply involved in client delivery across all service areas.
                  </p>
                  <p>
                    Paul has held senior IT leadership roles in healthcare and analytics firms. He holds a BA from Tufts University and an MBA from Northeastern University.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. MISSION SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
               <div className="flex justify-start mb-6">
                 <div className="bg-[#0a1a3c] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                   <Target className="w-3 h-3 text-[#fa6b29]" /> Our Mission
                 </div>
               </div>
               
               <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1a3c] leading-tight mb-8">
                 Equipping you with <span className="text-[#fa6b29]">governance</span> and <span className="text-[#0a1a3c] underline decoration-[#fa6b29] decoration-4 underline-offset-4">assurance</span>.
               </h2>
               <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-[#fa6b29] pl-6 italic">
                 "To equip clients with the governance and assurance needed to protect information and earn trust."
               </p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { title: "Trust", icon: ShieldCheck, desc: "Building confidence with stakeholders." },
                { title: "Clarity", icon: CheckCircle2, desc: "Demystifying complex regulations." },
                { title: "Integrity", icon: Users, desc: "Unwavering commitment to ethics." },
                { title: "Excellence", icon: Award, desc: "Setting the standard for quality." }
              ].map((val, i) => (
                <div key={i} className="bg-slate-50 p-6 border border-slate-200 hover:border-[#fa6b29] transition-colors group">
                  <val.icon className="w-8 h-8 text-[#0a1a3c] group-hover:text-[#fa6b29] transition-colors mb-4" />
                  <h3 className="font-bold text-[#0a1a3c] mb-2">{val.title}</h3>
                  <p className="text-sm text-slate-500">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
