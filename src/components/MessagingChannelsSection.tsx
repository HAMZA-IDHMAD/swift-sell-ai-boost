
import { useState, useRef, useEffect } from "react";
import { MessageSquare, Instagram, Facebook } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ChannelType = "whatsapp" | "instagram" | "facebook";

interface ChatMessageProps {
  isCustomer: boolean;
  message: string;
  channelType: ChannelType;
  delay: string;
}

const ChatMessage = ({ isCustomer, message, channelType, delay }: ChatMessageProps) => {
  let bubbleColorClass = "";
  
  if (isCustomer) {
    switch (channelType) {
      case "whatsapp":
        bubbleColorClass = "bg-swiftsell-cyan/90";
        break;
      case "instagram":
        bubbleColorClass = "bg-swiftsell-violet/90";
        break;
      case "facebook":
        bubbleColorClass = "bg-swiftsell-blue/90";
        break;
    }
  } else {
    bubbleColorClass = "bg-gray-700";
  }
  
  return (
    <div className={`flex ${isCustomer ? "justify-start" : "justify-end"} mb-3`}>
      <div className={`max-w-[80%] rounded-2xl py-3 px-4 ${bubbleColorClass} ${delay}`}>
        <p className="text-white text-sm md:text-base">{message}</p>
      </div>
    </div>
  );
};

const ChannelChat = ({ channelType }: { channelType: ChannelType }) => {
  const [chatStep, setChatStep] = useState(1);
  const chatRef = useRef<HTMLDivElement>(null);
  
  // Different chat flows for each channel
  const chatFlows: Record<ChannelType, { customer: string[], ai: string[] }> = {
    whatsapp: {
      customer: [
        "Hi! Do you have the blue hoodie in size M?",
        "Great! Can I order it now?"
      ],
      ai: [
        "Yes, we do have the Blue Casual Hoodie in Medium! It's $49.99 and we can ship it tomorrow. Would you like to order?",
        "Absolutely! Here's your order: Blue Hoodie (M) - $49.99 + Shipping $5. Total: $54.99. Tap to confirm payment ✅"
      ]
    },
    instagram: {
      customer: [
        "Hey, I saw your summer collection post, is the floral dress still available?",
        "Perfect! How can I buy it?"
      ],
      ai: [
        "Yes! The Floral Summer Dress is available in S, M and L sizes for $65! Which size would you like?",
        "Great choice! I've created your order: Floral Dress (M) - $65 with free shipping. Click here to complete your purchase ✅"
      ]
    },
    facebook: {
      customer: [
        "Hello, are you running any discounts on sneakers right now?",
        "I'll take the white ones in size 9!"
      ],
      ai: [
        "Hi there! Yes, we're running a 20% off promo on all sneakers this week! We have black, white and red models available. Which color interests you?",
        "Excellent! I've added White Urban Sneakers (Size 9) to your cart: $89.99 - 20% = $71.99. Ready to checkout? Click here ✅"
      ]
    }
  };
  
  useEffect(() => {
    setChatStep(1);
    
    const timer = setTimeout(() => {
      setChatStep(2);
      
      setTimeout(() => {
        setChatStep(3);
        
        setTimeout(() => {
          setChatStep(4);
        }, 1500);
      }, 1500);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [channelType]);
  
  return (
    <div className="glass-card p-5 rounded-xl max-w-md mx-auto" ref={chatRef}>
      <div className="py-3">
        {chatStep >= 1 && (
          <ChatMessage 
            isCustomer={true}
            message={chatFlows[channelType].customer[0]}
            channelType={channelType}
            delay="animate-fade-in"
          />
        )}
        
        {chatStep >= 2 && (
          <ChatMessage 
            isCustomer={false}
            message={chatFlows[channelType].ai[0]}
            channelType={channelType}
            delay="animate-fade-in"
          />
        )}
        
        {chatStep >= 3 && (
          <ChatMessage 
            isCustomer={true}
            message={chatFlows[channelType].customer[1]}
            channelType={channelType}
            delay="animate-fade-in"
          />
        )}
        
        {chatStep >= 4 && (
          <ChatMessage 
            isCustomer={false}
            message={chatFlows[channelType].ai[1]}
            channelType={channelType}
            delay="animate-fade-in"
          />
        )}
      </div>
    </div>
  );
};

const MessagingChannelsSection = () => {
  const [activeChannel, setActiveChannel] = useState<ChannelType>("whatsapp");
  
  const getChannelIcon = (channel: ChannelType) => {
    switch (channel) {
      case "whatsapp":
        return <MessageSquare className="mr-2 h-4 w-4" />;
      case "instagram":
        return <Instagram className="mr-2 h-4 w-4" />;
      case "facebook":
        return <Facebook className="mr-2 h-4 w-4" />;
      default:
        return <MessageSquare className="mr-2 h-4 w-4" />;
    }
  };
  
  return (
    <section id="messaging-channels" className="py-24 relative overflow-hidden">
      {/* Background floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 text-swiftsell-blue/5 animate-float">
          <MessageSquare size={120} />
        </div>
        <div className="absolute bottom-1/4 right-1/5 text-swiftsell-violet/5 animate-float animate-delay-700">
          <Instagram size={100} />
        </div>
        <div className="absolute top-2/3 left-1/3 text-swiftsell-blue/5 animate-float animate-delay-500">
          <Facebook size={80} />
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <AnimatedText text="Seamless Integration with WhatsApp, Instagram, and Facebook" />
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            <AnimatedText 
              text="Meet your customers where they already are - no new apps to download or learn." 
              className="animate-delay-300"
            />
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="whatsapp" className="w-full" onValueChange={(value) => setActiveChannel(value as ChannelType)}>
            <TabsList className="grid grid-cols-3 mb-8 w-full md:w-2/3 mx-auto">
              <TabsTrigger value="whatsapp" className="flex items-center">
                {getChannelIcon("whatsapp")} WhatsApp
              </TabsTrigger>
              <TabsTrigger value="instagram" className="flex items-center">
                {getChannelIcon("instagram")} Instagram
              </TabsTrigger>
              <TabsTrigger value="facebook" className="flex items-center">
                {getChannelIcon("facebook")} Facebook
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <TabsContent value="whatsapp" className="mt-0">
                <ChannelChat channelType="whatsapp" />
              </TabsContent>
              <TabsContent value="instagram" className="mt-0">
                <ChannelChat channelType="instagram" />
              </TabsContent>
              <TabsContent value="facebook" className="mt-0">
                <ChannelChat channelType="facebook" />
              </TabsContent>
            </div>
          </Tabs>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-4">
            <AnimatedText text="Trusted by 100+ stores on" className="animate-delay-300" />
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-xl font-bold tracking-tight">Shopify</div>
            <div className="text-xl font-bold tracking-tight">WooCommerce</div>
            <div className="text-xl font-bold tracking-tight">Etsy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagingChannelsSection;
