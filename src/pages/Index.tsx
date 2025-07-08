
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoreFeaturesSection from "@/components/CoreFeaturesSection";
import MessagingChannelsSection from "@/components/MessagingChannelsSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import MembershipsSection from "@/components/MembershipsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Google Fonts for Inter
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
    
    // Back to top button visibility
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    // Initialize scroll animations
    const initScrollAnimations = () => {
      const sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      }, { threshold: 0.15 });
      
      sections.forEach(section => {
        if (!section.classList.contains('animate-fade-in')) {
          observer.observe(section);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initialize animations after a short delay to ensure DOM is ready
    setTimeout(initScrollAnimations, 100);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <div ref={sectionsRef} className="min-h-screen bg-swiftsell-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <CoreFeaturesSection />
      <MessagingChannelsSection />
      <HowItWorks />
      <Testimonials />
      <FaqSection />
      <div id="memberships">
        <MembershipsSection />
      </div>
      <CtaSection />
      <Footer />
      
      {/* Back to top button */}
      <button 
        className={`fixed bottom-6 right-6 bg-swiftsell-blue/80 hover:bg-swiftsell-blue text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
