
import { useRef, useEffect, useState } from "react";
import { Zap, ShoppingCart, MessageSquare, TrendingUp } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";

interface FeatureItemProps {
  icon: "zap" | "shopping-cart" | "message-square" | "trending-up";
  title: string;
  description: string;
  delay: string;
}

const FeatureItem = ({ icon, title, description, delay }: FeatureItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getIcon = () => {
    switch (icon) {
      case "zap":
        return <Zap className={`h-7 w-7 transition-all duration-300 ${isHovered ? "animate-pulse" : ""}`} />;
      case "shopping-cart":
        return <ShoppingCart className={`h-7 w-7 transition-all duration-300 ${isHovered ? "animate-pulse" : ""}`} />;
      case "message-square":
        return <MessageSquare className={`h-7 w-7 transition-all duration-300 ${isHovered ? "animate-pulse" : ""}`} />;
      case "trending-up":
        return <TrendingUp className={`h-7 w-7 transition-all duration-300 ${isHovered ? "animate-pulse" : ""}`} />;
      default:
        return <MessageSquare className={`h-7 w-7 transition-all duration-300 ${isHovered ? "animate-pulse" : ""}`} />;
    }
  };
  
  return (
    <div 
      className={`opacity-0 ${delay} glass-card rounded-xl p-7 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-swiftsell-blue/20`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center justify-center w-14 h-14 rounded-full mb-5 transition-all duration-300 ${isHovered ? "bg-swiftsell-blue text-white" : "bg-swiftsell-blue/20 text-swiftsell-blue"}`}>
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const CoreFeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      title: "Instant Auto-Responder",
      description: "Reply to customer messages in under a second, 24/7.",
      icon: "zap",
      delay: "animate-fade-in animate-delay-100"
    },
    {
      title: "Smart Order Creation",
      description: "Convert chats directly into confirmed, trackable orders.",
      icon: "shopping-cart",
      delay: "animate-fade-in animate-delay-200"
    },
    {
      title: "AI-Powered FAQ",
      description: "Answer common customer questions automatically and accurately.",
      icon: "message-square",
      delay: "animate-fade-in animate-delay-300"
    },
    {
      title: "Upsell & Cross-sell",
      description: "Suggest complementary products in real-time to increase cart size.",
      icon: "trending-up",
      delay: "animate-fade-in animate-delay-400"
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
      { threshold: 0.1 }
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
    <section id="core-features" className="py-24 relative" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-swiftsell-violet/5 to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <AnimatedText text="Everything You Need to Close More Sales — Automatically" />
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            <AnimatedText 
              text="Our AI-powered tools help you automate every step of your sales process to maximize conversions." 
              className="animate-delay-300"
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon as "zap" | "shopping-cart" | "message-square" | "trending-up"}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
