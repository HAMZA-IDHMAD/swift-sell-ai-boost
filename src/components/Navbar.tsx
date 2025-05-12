
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gradient">SwiftSell AI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How it Works</a>
          <a href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">Testimonials</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex border-swiftsell-blue text-swiftsell-blue hover:bg-swiftsell-blue/10">
            Log in
          </Button>
          <Button className="bg-gradient-to-r from-swiftsell-blue to-swiftsell-violet hover:opacity-90">
            Get Started Free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
