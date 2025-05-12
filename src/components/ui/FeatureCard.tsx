
import { Clock, MessageSquare, ShoppingBag } from "lucide-react";
import { useState } from "react";

type IconType = "clock" | "chatbot" | "shopping-bag";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay: string;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getIcon = () => {
    switch (icon) {
      case "clock":
        return <Clock className="h-6 w-6" />;
      case "chatbot":
        return <MessageSquare className="h-6 w-6" />;
      case "shopping-bag":
        return <ShoppingBag className="h-6 w-6" />;
      default:
        return <MessageSquare className="h-6 w-6" />;
    }
  };
  
  return (
    <div
      className={`opacity-0 ${delay} glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-swiftsell-blue/20`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 transition-all duration-300 ${isHovered ? "bg-swiftsell-blue text-white" : "bg-swiftsell-blue/20 text-swiftsell-blue"}`}>
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
