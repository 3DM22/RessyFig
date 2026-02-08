import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { HexagonOutline } from "./ui/HexagonFrame";

export function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-24 bg-[#0a1a3c] overflow-hidden">
        {/* Hexagon Decoration */}
        <HexagonOutline variant="orange" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] opacity-5 rotate-90 stroke-[1px]" />

        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwYnVzaW5lc3MlMjB0ZWNobm9sb2d5JTIwZGFya3xlbnwxfHx8fDE3NjU5OTg2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
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
              Get in <span className="text-[#fa6b29]">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Ready to strengthen your resilience? Our experts are here to help you navigate the complexities of security, privacy, and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 -mt-12 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white shadow-xl p-8 md:p-12 border border-slate-100 relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a1a3c] to-[#fa6b29]"></div>
              
              <h2 className="text-2xl font-bold text-[#0a1a3c] mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                    <Input id="firstName" placeholder="John" className="rounded-none border-slate-300 focus:border-[#fa6b29]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                    <Input id="lastName" placeholder="Doe" className="rounded-none border-slate-300 focus:border-[#fa6b29]" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Work Email</label>
                  <Input id="email" type="email" placeholder="john@company.com" className="rounded-none border-slate-300 focus:border-[#fa6b29]" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                  <select id="subject" className="w-full flex h-10 w-full rounded-none border border-slate-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa6b29] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>General Inquiry</option>
                    <option>Request a Quote</option>
                    <option>Services Information</option>
                    <option>Partnership Opportunities</option>
                    <option>Careers</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] rounded-none border-slate-300 focus:border-[#fa6b29]" />
                </div>
                
                <Button className="w-full bg-[#fa6b29] hover:bg-[#e55a1b] text-white font-bold py-6 text-lg rounded-none shadow-lg">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info & Info Box */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a1a3c] text-white p-8 shadow-xl relative overflow-hidden border-l-4 border-[#fa6b29]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#fa6b29]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <h3 className="text-xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 text-[#fa6b29]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Call Us</p>
                    <p className="font-semibold text-lg">(800) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 text-[#fa6b29]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Email Us</p>
                    <p className="font-semibold text-lg">info@resiliam.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 text-[#fa6b29]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Visit Us</p>
                    <p className="font-semibold text-lg">
                      123 Innovation Drive<br/>
                      Suite 400<br/>
                      Tech City, TC 90210
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 shadow-md border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-4">
                 <MessageSquare className="w-6 h-6 text-[#0a1a3c]" />
                 <h3 className="font-bold text-[#0a1a3c]">FAQ</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Looking for quick answers? Check out our frequently asked questions regarding our services and engagement models.
              </p>
              <a href="#" className="text-[#0a1a3c] font-bold text-sm hover:text-[#fa6b29] flex items-center gap-2 transition-colors">
                Visit Knowledge Base <Send className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
