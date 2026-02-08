import { Button } from "./ui/button";
import { HexagonFrame, HexagonOutline } from "./ui/HexagonFrame";

export function AboutSection({ onNavigate }: { onNavigate?: (page: "home" | "services" | "industries" | "about" | "insights" | "contact") => void }) {
  return (
    <section className="py-24 bg-white/60 backdrop-blur-sm overflow-hidden relative">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#0a1a3c 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* TOP: Header (Centered) */}
        <div className="w-full text-center mb-16 space-y-4">
          <h4 className="text-[#fa6b29] font-bold uppercase tracking-widest text-sm flex items-center gap-2 justify-center">
            <span className="w-8 h-[2px] bg-[#fa6b29]"></span>
            Our Story
            <span className="w-8 h-[2px] bg-[#fa6b29]"></span>
          </h4>
          <h2 className="text-[#0a1a3c] text-4xl md:text-6xl font-extrabold leading-none tracking-tight">
            A Trusted <span className="text-[#fa6b29]">Business Partner</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT: Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="text-slate-600 text-lg leading-relaxed space-y-6 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-slate-200/50"></div>
              <div className="pl-6 space-y-6">
                <p>
                  <strong className="text-[#0a1a3c]">Resiliam sees the bigger picture</strong> in building comprehensive and connected systems of governance—where information security, data privacy, and now artificial intelligence come together. Unlike transactional providers that focus on audits, we take an integrated approach that links standards and controls to real business outcomes.
                </p>
                <p>
                  In today’s environment—where certification demands are accelerating and frameworks are rapidly converging—clarity means a partner fluent in both compliance and commerce.
                </p>
                <p>
                   As security and privacy expectations extend into other environments, organizations are being challenged to meet new standards. <span className="text-[#fa6b29] font-medium">Resiliam is helping them get there</span>—bringing the same discipline and insight that have guided regulated sectors for years.
                </p>
                <p>
                  For us, certifications and audits are not the finish line; they’re milestones on a broader journey to build the culture, systems, and reputation that set your organization apart.
                </p>
              </div>
            </div>
            
            <div className="pt-2">
              <Button 
                onClick={() => onNavigate?.("about")}
                className="bg-[#0a1a3c] hover:bg-[#fa6b29] hover:text-white text-white font-bold px-10 py-6 rounded-none shadow-lg transition-all duration-300 text-lg border-2 border-[#0a1a3c]"
              >
                MEET OUR TEAM
              </Button>
            </div>
          </div>

          {/* RIGHT: Image Composition */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
             {/* Decorative Background Hexagon Frame (Wireframe) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
               <HexagonOutline variant="blue" className="w-full h-full rotate-90 scale-110" strokeWidth={1} />
             </div>

             {/* Main Image - The "Bigger Picture" */}
             <div className="relative z-10 w-full max-w-md aspect-square">
                <HexagonFrame 
                  src="https://images.unsplash.com/photo-1657727534676-cac1bb160d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMGhvbGRpbmclMjBsYXB0b3AlMjBleHBsYWluaW5nJTIwdG8lMjBjb2xsZWFndWVzJTIwY2FuZGlkJTIwb2ZmaWNlfGVufDF8fHx8MTc2NzgxODk4M3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Resiliam Team Collaborating with Clients" 
                  className="w-full h-full drop-shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
             </div>

             {/* Accent Stat Hexagon - Overlapping */}
             <div className="absolute -bottom-8 -right-4 md:-right-8 z-20 w-40 h-40 md:w-48 md:h-48 drop-shadow-2xl animate-in slide-in-from-bottom-4 duration-1000 delay-300">
               <HexagonFrame className="w-full h-full bg-[#fa6b29]">
                 <div className="w-full h-full flex flex-col justify-center items-center text-center p-4 text-white">
                    <span className="text-4xl md:text-5xl font-extrabold tracking-tighter">20+</span>
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest mt-1">Years<br/>Experience</span>
                 </div>
               </HexagonFrame>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
