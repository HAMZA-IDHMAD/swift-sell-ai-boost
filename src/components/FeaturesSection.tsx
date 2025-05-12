
import { useRef, useEffect } from "react";
import FeatureCard from "./ui/FeatureCard";
import AnimatedText from "./ui/AnimatedText";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      title: "For Dropshippers",
      description: "Automate customer support and order processing across multiple platforms, saving 20+ hours weekly.",
      icon: "shopping-bag",
      delay: "animate-fade-in animate-delay-100"
    },
    {
      title: "For IG Boutiques",
      description: "Convert DM inquiries into confirmed sales without constant phone checking.",
      icon: "chatbot",
      delay: "animate-fade-in animate-delay-300"
    },
    {
      title: "For Local Shops",
      description: "Never miss an order or inquiry, even outside business hours.",
      icon: "clock",
      delay: "animate-fade-in animate-delay-500"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const cards = sectionRef.current?.querySelectorAll(".glass-card");
          cards?.forEach((card) => {
            card.classList.add("animate-fade-in");
          });
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="features" className="py-20 relative" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-swiftsell-blue/5 to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <AnimatedText text="AI-Powered Solution For Every Business" />
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            <AnimatedText 
              text="SwiftSell AI handles the entire sales process from customer inquiry to checkout, creating a seamless shopping experience for your customers." 
              className="animate-delay-300"
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon as "clock" | "chatbot" | "shopping-bag"}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
