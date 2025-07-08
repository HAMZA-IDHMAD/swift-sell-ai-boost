
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
            SwiftSell AI
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How it Works</a>
          <a href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">Testimonials</a>
          <a href="#memberships" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
          <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary/10">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
