import { Phone, Mail, MapPin, Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import logoImg from "figma:asset/aedd264ce7bee7b71a4c46b10fa87be27ec7d039.png";
import { cn } from "./ui/utils";

export function Header({ onNavigate }: { onNavigate?: (page: "home" | "services" | "industries" | "about" | "insights" | "contact") => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: "home" | "services" | "industries" | "about" | "insights" | "contact") => {
    e.preventDefault();
    onNavigate?.(page);
    setIsMenuOpen(false);
  };

  return (
    // Changed from 'sticky' to 'fixed' to allow Hero to sit behind it
    // Added 'w-full' and z-index to ensure it stays on top
    <div className="w-full flex flex-col z-50 fixed top-0 transition-all duration-300">
      {/* Top Bar - Collapses on scroll */}
      <div className={cn(
        "bg-[#0a1a3c] text-white text-xs border-b border-[#fa6b29] overflow-hidden transition-all duration-300 ease-in-out px-4 md:px-8",
        isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-10 py-1 opacity-100"
      )}>
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1 hover:text-[#fa6b29] cursor-pointer transition-colors">
              <Phone className="w-3 h-3 text-[#fa6b29]" />
              <span>(800) 555-0123</span>
            </span>
            <span className="hidden md:flex items-center gap-1 hover:text-[#fa6b29] cursor-pointer transition-colors">
              <Mail className="w-3 h-3 text-[#fa6b29]" />
              <span>info@resiliam.com</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={cn(
        "text-[#0a1a3c] px-4 md:px-8 border-b-4 border-[#fa6b29] transition-all duration-300 shadow-md",
        isScrolled ? "bg-white py-1" : "bg-white py-0 border-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleNavClick(e, "home")}>
             <img 
               src={logoImg} 
               alt="Resiliam Logo" 
               className={cn(
                 "transition-all duration-300",
                 // Significantly increased sizes
                 isScrolled ? "h-12 md:h-16" : "h-16 md:h-24"
               )} 
             />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={(e) => handleNavClick(e, "services")} className="text-sm font-semibold uppercase tracking-wide hover:text-[#fa6b29] transition-colors">Services</a>
            <a href="#" onClick={(e) => handleNavClick(e, "industries")} className="text-sm font-semibold uppercase tracking-wide hover:text-[#fa6b29] transition-colors">Industries</a>
            <a href="#" onClick={(e) => handleNavClick(e, "about")} className="text-sm font-semibold uppercase tracking-wide hover:text-[#fa6b29] transition-colors">About Us</a>
            <a href="#" onClick={(e) => handleNavClick(e, "insights")} className="text-sm font-semibold uppercase tracking-wide hover:text-[#fa6b29] transition-colors">Insights</a>
            
            <Button 
              onClick={(e) => handleNavClick(e, "contact")}
              className={cn(
              "bg-[#fa6b29] hover:bg-[#e85a1b] text-white font-bold rounded-none transition-all duration-300",
              isScrolled ? "px-4 py-1 text-sm" : "px-6"
            )}>
              GET IN TOUCH
            </Button>
            
            <Search className="w-5 h-5 cursor-pointer hover:text-[#fa6b29]" />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#0a1a3c] p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="bg-white text-[#0a1a3c] border-t border-slate-200 md:hidden absolute top-full left-0 w-full shadow-xl">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#" onClick={(e) => handleNavClick(e, "services")} className="block py-2 hover:text-[#fa6b29]">Services</a>
            <a href="#" onClick={(e) => handleNavClick(e, "industries")} className="block py-2 hover:text-[#fa6b29]">Industries</a>
            <a href="#" onClick={(e) => handleNavClick(e, "about")} className="block py-2 hover:text-[#fa6b29]">About Us</a>
            <a href="#" onClick={(e) => handleNavClick(e, "insights")} className="block py-2 hover:text-[#fa6b29]">Insights</a>
            <Button 
              onClick={(e) => handleNavClick(e, "contact")}
              className="bg-[#fa6b29] hover:bg-[#e85a1b] text-white font-bold w-full rounded-none"
            >
              GET IN TOUCH
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
