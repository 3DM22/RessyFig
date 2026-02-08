import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "./ui/utils";
import bgImage from "figma:asset/318d8a34a79e6f67665833d35c8bab0283e37d1d.png";
import { HexagonOutline } from "./ui/HexagonFrame";

export function Hero({ onNavigate }: { onNavigate?: (page: "home" | "services" | "industries" | "about" | "insights" | "contact") => void }) {
  // Scroll parallax effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="relative w-full min-h-[35vh] bg-[#0a1a3c] overflow-hidden flex items-center pt-28 md:pt-36 pb-10">
      
      {/* 1. BACKGROUND ASSET (Full Width) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 overflow-hidden w-screen left-1/2 -translate-x-1/2"
      >
        <img 
            src={bgImage} 
            alt="Digital abstract background" 
            className="w-full h-full object-cover object-center scale-[1.2]"
        />
        
        {/* Hexagon Overlays for Tech Feel */}
        <HexagonOutline variant="orange" className="absolute top-[-10%] right-[-5%] h-[80%] w-[40%] opacity-20 rotate-12 stroke-[2px]" />
        <HexagonOutline variant="blue" className="absolute bottom-[-20%] left-[-10%] h-[100%] w-[50%] opacity-10 -rotate-12 stroke-[1px]" />

        {/* Full-width gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3c] via-[#0a1a3c]/90 to-[#0a1a3c]/40" />
      </motion.div>

      {/* 2. Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
            
            <div className="relative group cursor-default inline-block">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl relative z-10">
                SIMPLE, TRUSTED, <br />
                <span className="text-[#fa6b29]">
                    CERTIFIED
                </span>
                </h1>
            </div>

            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
              className="h-1 w-24 bg-[#fa6b29] origin-left" 
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-3xl text-balance"
            >
                Comprehensive solutions connecting <span className="text-white font-medium">security</span>, <span className="text-white font-medium">privacy</span>, <span className="text-white font-medium">continuity</span>, and&nbsp;<span className="text-white font-medium">AI</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
                <Button 
                onClick={() => onNavigate?.("services")}
                className="bg-[#1f4fcb] hover:bg-[#3267e3] text-white font-semibold text-base px-6 py-4 rounded-sm transition-all shadow-lg hover:shadow-blue-500/20 border border-white/10"
                >
                LEARN MORE
                </Button>
                <Button 
                onClick={() => onNavigate?.("contact")}
                variant="outline"
                className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-[#0a1a3c] font-semibold text-base px-6 py-4 rounded-sm transition-all"
                >
                CONTACT US
                </Button>
            </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
