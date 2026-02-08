import { useState } from "react";
import { Facebook, Linkedin, Twitter, Instagram, ArrowRight, Mail, MessageSquare, ChevronRight, CheckCircle2, ArrowLeft, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "figma:asset/0e736802659261be230b8318af5ec1f6722fa3c0.png";
import { cn } from "./ui/utils";

export function Footer({ onNavigate }: { onNavigate?: (page: "home" | "services" | "industries" | "about" | "insights" | "contact") => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-[#0a1a3c] text-white pt-16 pb-6 border-t-4 border-[#fa6b29] relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* UPPER SECTION: Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* COL 1: MASSIVE LOGO (Spans 4) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
             <div className="flex flex-col gap-6 w-max max-w-full">
               <img 
                 src={logoImg} 
                 alt="Resiliam Logo" 
                 className="h-20 md:h-24 lg:h-28 w-auto object-contain object-left" 
               />
               <div>
                 <Button 
                   onClick={() => setIsModalOpen(true)}
                   className="w-full bg-[#1f4fcb] hover:bg-[#163ba0] text-white font-bold py-6 rounded-none text-lg flex items-center justify-center gap-3 group transition-all"
                 >
                   <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   Have a question?
                 </Button>
                 <p className="text-slate-400 text-xs mt-3 pl-1">
                   Our team is ready to help.
                 </p>
               </div>
             </div>
          </div>

          {/* COL 2: LINKS (Spans 2) */}
          <div className="lg:col-span-2 pt-2">
            <h4 className="font-bold text-[#fa6b29] mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li><FooterLink onClick={() => onNavigate?.("home")}>Home</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate?.("about")}>About Us</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate?.("services")}>Services</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate?.("industries")}>Industries</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate?.("contact")}>Contact</FooterLink></li>
            </ul>
          </div>

          {/* COL 3: EXPERTISE (Spans 3) */}
          <div className="lg:col-span-3 pt-2">
            <h4 className="font-bold text-[#fa6b29] mb-6 text-sm uppercase tracking-widest">Expertise</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li><FooterLink onClick={() => onNavigate?.("services")}>Information Security</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate?.("services")}>Data Privacy & GDPR</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate?.("services")}>Business Continuity</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate?.("services")}>AI Governance</FooterLink></li>
            </ul>
          </div>

          {/* COL 4: NEWSLETTER (Spans 3) */}
          <div className="lg:col-span-3 pt-2">
             <h4 className="font-bold text-[#fa6b29] mb-6 text-sm uppercase tracking-widest">Stay Updated</h4>
             <div className="space-y-4">
               <p className="text-sm text-slate-400 leading-relaxed">
                 Join 5,000+ professionals receiving actionable security insights.
               </p>
               <div className="space-y-2">
                 <Input 
                   placeholder="Enter your email" 
                   className="bg-slate-800 border-slate-700 h-10 text-sm focus-visible:ring-[#fa6b29] focus-visible:border-[#fa6b29] rounded-none" 
                 />
                 <Button className="w-full bg-[#fa6b29] hover:bg-[#e85a1b] text-white font-bold h-10 rounded-none">
                   Subscribe
                 </Button>
               </div>
             </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Socials */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-end">
          
          {/* Copyright (Left) */}
          <div className="space-y-2 mb-4 md:mb-0">
             <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
               &copy; {new Date().getFullYear()} Resiliam Inc.
             </div>
             <div className="flex gap-4 text-[10px] text-slate-600">
               <a href="#" className="hover:text-slate-400">Privacy Policy</a>
               <a href="#" className="hover:text-slate-400">Terms of Service</a>
               <a href="#" className="hover:text-slate-400">Cookie Settings</a>
             </div>
          </div>

          {/* Social Icons (Bottom Right Corner) */}
          <div className="flex space-x-2">
             <SocialBtn Icon={Facebook} />
             <SocialBtn Icon={Twitter} />
             <SocialBtn Icon={Linkedin} />
             <SocialBtn Icon={Instagram} />
          </div>
        </div>
      </div>

      {/* CONTACT MODAL */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-[#0a1a3c] text-white border-slate-700 sm:max-w-lg p-0 overflow-hidden rounded-none">
          <ContactModalContent onClose={() => setIsModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </footer>
  );
}

function SocialBtn({ Icon }: { Icon: any }) {
  return (
    <a href="#" className="bg-slate-800 hover:bg-[#fa6b29] text-slate-400 hover:text-white p-3 rounded-none transition-all duration-300 group">
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>
  );
}

function FooterLink({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick?.(); }} className="hover:text-[#fa6b29] hover:translate-x-1 inline-block transition-all duration-300">
      {children}
    </a>
  );
}

// Reuse the logic from the previous widget, adapted for Modal
function ContactModalContent({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"topic" | "form" | "success">("topic");
  const [topic, setTopic] = useState("");

  const topics = [
    { id: "demo", label: "Request a Demo", icon: "🚀" },
    { id: "audit", label: "Security Audit", icon: "shield" },
    { id: "partner", label: "Partnership", icon: "handshake" },
    { id: "general", label: "General Inquiry", icon: "chat" },
  ];

  const handleTopicSelect = (id: string) => {
    setTopic(id);
    setStep("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setStep("success"), 500);
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="bg-[#1f4fcb] p-6 flex justify-between items-center">
        <DialogTitle className="text-white font-bold text-xl flex items-center gap-2">
           <MessageSquare className="w-6 h-6 text-[#fa6b29]" />
           {step === "topic" && "How can we help?"}
           {step === "form" && "Tell us about it"}
           {step === "success" && "Message Sent!"}
        </DialogTitle>
      </div>
      
      <div className="p-8 flex-grow relative bg-[#0a1a3c]">
         <AnimatePresence mode="wait">
            {step === "topic" && (
              <motion.div
                key="topic"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <p className="text-slate-300 mb-4">Select a topic to start:</p>
                <div className="grid grid-cols-1 gap-3">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleTopicSelect(t.id)}
                      className="flex items-center justify-between p-4 rounded-none bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-[#fa6b29] group transition-all text-left"
                    >
                      <span className="text-white font-medium text-lg">{t.label}</span>
                      <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-[#fa6b29]" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-4 h-full flex flex-col"
              >
                <button onClick={() => setStep("topic")} className="text-sm text-slate-400 hover:text-[#fa6b29] flex items-center gap-1 mb-2">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
                   <Input placeholder="Your Name" className="bg-slate-800 border-slate-600 text-white h-12 rounded-none" />
                   <Input placeholder="Email Address" className="bg-slate-800 border-slate-600 text-white h-12 rounded-none" />
                   <Textarea placeholder="Message..." className="bg-slate-800 border-slate-600 text-white resize-none h-24 rounded-none" />
                   <Button className="w-full bg-[#fa6b29] hover:bg-[#d65015] text-white font-bold h-12 text-lg mt-auto rounded-none">
                     Send Message
                   </Button>
                </form>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-6"
              >
                <CheckCircle2 className="w-20 h-20 text-[#fa6b29]" />
                <div>
                   <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                   <p className="text-slate-400">We'll get back to you shortly.</p>
                </div>
                <Button onClick={onClose} variant="outline" className="border-slate-600 text-white hover:bg-slate-800 rounded-none">
                  Close Window
                </Button>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
