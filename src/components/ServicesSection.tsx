import { Shield, Lock, Server, Activity, Brain, Globe, ArrowRight } from "lucide-react";
import { cn } from "./ui/utils";
import { motion } from "motion/react";
import { HexagonOutline, HexagonFrame } from "./ui/HexagonFrame";

const services = [
  {
    id: "ai",
    title: "AI Governance",
    description: "Leveraging Artificial Intelligence for predictive security and advanced analytics.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1738347826189-a39ac950bbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYWklMjBicmFpbiUyMGNpcmN1aXQlMjBib2FyZCUyMGdsb3dpbmclMjBvcmFuZ2UlMjBibHVlJTIwZGFya3xlbnwxfHx8fDE3Njc4MTgxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "isms",
    title: "Information Security",
    description: "Comprehensive Information Security Management Systems tailored to your organization.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1724204401208-6349fc373543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwc2hpZWxkJTIwbG9jayUyMGRhcmslMjBibHVlJTIwb3JhbmdlJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2Nzg5MDEzMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "privacy",
    title: "Privacy",
    description: "Ensuring compliance with global data protection regulations and standards.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1682329782401-3fb5f04d65b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHRFBSJTIwdGV4dCUyMGRpZ2l0YWwlMjBjb25jZXB0JTIwYmx1ZSUyMG9yYW5nZXxlbnwxfHx8fDE3Njc4MTg1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

type CardProps = {
  service: any;
  onNavigate?: () => void;
};

// VARIANT 1: The Classic 3D Flip (Default)
const StandardCardFlip = ({ service, onNavigate }: CardProps) => (
  <div onClick={onNavigate} className="group relative w-full h-[280px] shrink-0 snap-center perspective-1000 cursor-pointer">
    <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-xl">
      <div className="absolute inset-0 backface-hidden bg-white overflow-hidden rounded-xl border-t-8 border-[#1c2a57]">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" style={{ backgroundImage: `url(${service.image})` }} />
        {service.id === "isms" && <div className="absolute inset-0 bg-[#0a1a3c]/75 mix-blend-color" />}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
        <div className="relative h-full flex flex-col items-center justify-center p-4 z-10">
          <div className="w-12 h-1 bg-[#fa6b29] mb-4 rounded-full" />
          <h3 className="text-xl md:text-2xl font-bold text-[#1c2a57] text-center leading-tight tracking-tight mb-2">{service.title}</h3>
          <div className="mt-auto text-[#1c2a57]/70 font-semibold text-[10px] md:text-xs uppercase tracking-wider flex items-center gap-2">
            Hover to Flip <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1c2a57] p-4 flex flex-col items-center justify-center rounded-xl text-white shadow-2xl">
        <div className="mb-2 p-1.5 bg-white/10 rounded-full"><service.icon className="w-5 h-5 text-[#fa6b29]" /></div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">{service.title}</h3>
        <p className="text-center text-slate-200 text-sm leading-relaxed mb-4 line-clamp-4">{service.description}</p>
        <button className="bg-[#fa6b29] hover:bg-white hover:text-[#1c2a57] text-[#1c2a57] font-bold py-1.5 px-4 text-xs rounded-full transition-colors duration-300 flex items-center gap-2">Learn More</button>
      </div>
    </div>
  </div>
);

export function ServicesSection({ onNavigate }: { onNavigate?: (page: "home" | "services", section?: string) => void }) {
  const handleCardClick = (id: string) => {
    onNavigate?.("services", id);
  };

  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative Hexagon Outlines (Replaces Gradients) */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none z-0 opacity-10">
        <HexagonOutline variant="orange" className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rotate-12" />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full pointer-events-none z-0 opacity-10">
        <HexagonOutline variant="blue" className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          
          {/* Left Column: Header & Subcopy */}
          <div className="w-full xl:w-1/4 shrink-0 space-y-6">
            <h2 className="text-[#1c2a57] text-4xl md:text-5xl font-extrabold tracking-tight leading-none inline-block relative -mt-3">
              OUR EXPERTISE
              <div className="absolute -bottom-4 left-0 w-24 h-2 bg-[#fa6b29] rounded-full"></div>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed pt-4">
              Delivering top-tier security and management solutions for modern enterprises, bridging the gap between technical controls and business strategy.
            </p>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="w-full xl:w-3/4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {services.map((service, index) => (
                <StandardCardFlip key={index} service={service} onNavigate={() => handleCardClick(service.id)} />
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          /* Fix for Safari flickering/transparency issues */
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
