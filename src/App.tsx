import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { GlobalBackground } from "./components/GlobalBackground";
import { ServicesPage } from "./components/ServicesPage";
import { IndustriesPage } from "./components/IndustriesPage";
import { AboutPage } from "./components/AboutPage";
import { InsightsPage } from "./components/InsightsPage";
import { ContactPage } from "./components/ContactPage";
import { useState, useEffect } from "react";

type Page = "home" | "services" | "industries" | "about" | "insights" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [targetSection, setTargetSection] = useState<string | null>(null);

  // Scroll to top when page changes, unless targeting a section
  useEffect(() => {
    if (!targetSection) {
      window.scrollTo(0, 0);
    }
  }, [currentPage, targetSection]);

  const navigateTo = (page: Page, section?: string) => {
    setCurrentPage(page);
    setTargetSection(section || null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 relative">
      <GlobalBackground />
      <Header onNavigate={(page) => navigateTo(page)} />
      <main className="flex-grow relative z-10">
        {currentPage === "home" ? (
          <>
            <Hero onNavigate={(page) => navigateTo(page)} />
            <AboutSection onNavigate={(page) => navigateTo(page)} />
            <ServicesSection onNavigate={navigateTo} />
          </>
        ) : currentPage === "services" ? (
          <ServicesPage onNavigate={(page) => navigateTo(page)} initialSection={targetSection} />
        ) : currentPage === "industries" ? (
          <IndustriesPage onNavigate={navigateTo} />
        ) : currentPage === "about" ? (
          <AboutPage onNavigate={navigateTo} />
        ) : currentPage === "insights" ? (
          <InsightsPage onNavigate={navigateTo} />
        ) : (
          <ContactPage />
        )}
      </main>
      <div className="relative z-10">
        <Footer onNavigate={navigateTo} />
      </div>
    </div>
  );
}
