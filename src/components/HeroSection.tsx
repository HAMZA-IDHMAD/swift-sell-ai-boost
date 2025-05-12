
import { Button } from "@/components/ui/button";
import AnimatedText from "./ui/AnimatedText";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.scrollY;
      const parallaxElements = sectionRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.2 + (index * 0.1);
        const yPos = scrollPosition * speed;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Full width background with animated gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-swiftsell-blue/20 via-swiftsell-violet/10 to-transparent opacity-30"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-swiftsell-blue/10 to-swiftsell-violet/5 blur-3xl animate-float parallax"></div>
        <div className="absolute top-2/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-swiftsell-violet/10 to-swiftsell-blue/5 blur-2xl animate-float animate-delay-500 parallax"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-swiftsell-cyan/10 blur-xl animate-float animate-delay-1000 parallax"></div>
        
        {/* Chat bubble decorations */}
        <div className="absolute top-1/3 right-[15%] w-16 h-16 rounded-tr-xl rounded-bl-xl rounded-br-xl bg-swiftsell-blue/10 transform rotate-12 animate-float"></div>
        <div className="absolute bottom-1/3 left-[20%] w-12 h-12 rounded-tl-xl rounded-tr-xl rounded-br-xl bg-swiftsell-violet/10 transform -rotate-12 animate-float animate-delay-700"></div>
        
        {/* Wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
          <div className="absolute bottom-[-10%] left-0 w-[200%] h-40 bg-gradient-to-r from-swiftsell-blue/5 via-swiftsell-violet/5 to-swiftsell-blue/5 animate-wave"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedText 
            text="AI that Turns Chats into Orders. Instantly."
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          />
          
          <AnimatedText 
            text="24/7 sales automation to boost conversions by 35% — even while you sleep."
            className="text-xl md:text-2xl text-gray-300 mb-8 animate-delay-300"
          />
          
          <div className="opacity-0 animate-fade-in animate-delay-500">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-swiftsell-blue to-swiftsell-violet hover:opacity-90 animate-glow button-glow"
            >
              Get Started Free
            </Button>
          </div>
          
          <p className="mt-4 text-sm text-gray-400 opacity-0 animate-fade-in animate-delay-700">
            No credit card required • Free 14-day trial
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
