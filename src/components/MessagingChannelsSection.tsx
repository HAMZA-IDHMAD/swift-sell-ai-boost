
import { useState, useRef, useEffect } from "react";
import { MessageSquare, Instagram, Facebook, Play, Image } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ChannelType = "whatsapp" | "instagram" | "facebook";

interface Message {
  sender: "customer" | "ai";
  text: string;
  includeButton?: boolean;
  audioMessage?: boolean;
  productImage?: {
    src: string;
    productName: string;
    price: string;
  };
}

interface MockChatProps {
  channel: ChannelType;
  messages: Message[];
}

const MockChat = ({ channel, messages }: MockChatProps) => {
  const chatRef = useRef<HTMLDivElement>(null);
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  
  // Colors based on channel
  const getBubbleColor = (sender: "customer" | "ai") => {
    if (sender === "ai") return "bg-swiftsell-blue/80 text-white";
    
    switch (channel) {
      case "whatsapp":
        return "bg-[#E5FFC7] text-black/80";
      case "instagram":
        return "bg-gradient-to-br from-[#8A3AB9] to-[#BC2A8D] text-white";
      case "facebook":
        return "bg-[#0084FF] text-white";
      default:
        return "bg-gray-200 text-black";
    }
  };
  
  // Audio playback simulation
  const handlePlayAudio = (index: number) => {
    if (playingAudio === index) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(index);
      // Simulate end of audio after 3 seconds
      setTimeout(() => {
        setPlayingAudio(null);
      }, 3000);
    }
  };
  
  // Animation to show messages one by one
  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => prev + 1);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [visibleMessages, messages.length]);
  
  // Auto-scroll to bottom as messages appear
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages]);
  
  return (
    <div className="glass-card rounded-xl overflow-hidden h-[400px] md:h-[450px] flex flex-col">
      {/* Chat header */}
      <div className={`p-4 flex items-center ${
        channel === "whatsapp" ? "bg-[#075E54]" : 
        channel === "instagram" ? "bg-gradient-to-r from-[#8A3AB9] to-[#BC2A8D]" : 
        "bg-[#0084FF]"
      }`}>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
          {channel === "whatsapp" ? <MessageSquare size={16} /> : 
           channel === "instagram" ? <Instagram size={16} /> : 
           <Facebook size={16} />}
        </div>
        <div>
          <p className="font-medium text-white">
            {channel === "whatsapp" ? "WhatsApp Business" : 
             channel === "instagram" ? "Instagram Direct" : 
             "Facebook Messenger"}
          </p>
          <p className="text-xs text-white/70">SwiftSell AI Assistant</p>
        </div>
      </div>
      
      {/* Chat messages */}
      <div 
        ref={chatRef}
        className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/20 backdrop-blur-sm"
      >
        {messages.slice(0, visibleMessages).map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.sender === "customer" ? "justify-start" : "justify-end"} animate-fade-in`}
          >
            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${getBubbleColor(message.sender)}`}>
              {message.audioMessage && message.sender === "ai" ? (
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handlePlayAudio(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${playingAudio === index ? 'bg-white/20 animate-pulse' : 'bg-white/10'}`}
                  >
                    <Play size={16} className={playingAudio === index ? "animate-pulse" : ""} />
                  </button>
                  <span>{message.text}</span>
                </div>
              ) : message.productImage ? (
                <div className="space-y-2">
                  <div className="relative">
                    <div className="w-full h-24 bg-gray-800 rounded-lg overflow-hidden">
                      <div className="absolute top-2 left-2 bg-black/60 rounded-full p-1">
                        <Image size={14} />
                      </div>
                      <img 
                        src={message.productImage.src} 
                        alt="Product" 
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{message.productImage.productName}</p>
                    <p className="text-sm opacity-80">{message.productImage.price}</p>
                  </div>
                </div>
              ) : (
                <p>{message.text}</p>
              )}
              
              {message.includeButton && (
                <button className="mt-2 bg-white/90 text-black rounded-full px-3 py-1 text-xs font-medium">
                  Order Now →
                </button>
              )}
            </div>
          </div>
        ))}
        
        {/* Typing indicator when next message is coming */}
        {visibleMessages < messages.length && (
          <div className={`flex ${messages[visibleMessages].sender === "customer" ? "justify-start" : "justify-end"}`}>
            <div className={`rounded-2xl px-4 py-2 ${getBubbleColor(messages[visibleMessages].sender)}`}>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-white/70 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-white/70 animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 rounded-full bg-white/70 animate-pulse animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MessagingChannelsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeChannel, setActiveChannel] = useState<ChannelType>("whatsapp");
  
  const whatsappMessages: Message[] = [
    { sender: "customer", text: "Hi! Do you have the blue dress in medium size?" },
    { sender: "ai", text: "Hello! Yes, the Azure Summer Dress is available in medium size for $49.99." },
    { sender: "ai", text: "Would you like to place an order? I can help you check out right now.", includeButton: true },
    { sender: "customer", text: "Great! Does it come with free shipping?" },
    { sender: "ai", audioMessage: true, text: "Yes! All orders over $35 qualify for free shipping. Your order would arrive in 2-3 business days." }
  ];
  
  const instagramMessages: Message[] = [
    { sender: "customer", text: "Hey, I saw your post about the new sneakers. Are those still available?" },
    { sender: "ai", text: "Hi there! Yes, the Urban Max Sneakers are available in sizes 7-12. Which size were you interested in?" },
    { sender: "customer", text: "I need a size 9. How much are they?" },
    { sender: "customer", text: "", productImage: {
      src: "/placeholder.svg",
      productName: "Urban Max Sneakers",
      price: "$79.99"
    }},
    { sender: "ai", text: "Thanks for sharing the image! These are our Urban Max Sneakers in Black. Size 9 is in stock! They're $79.99 and currently part of our buy-one-get-one 50% off promotion.", includeButton: true }
  ];
  
  const facebookMessages: Message[] = [
    { sender: "customer", text: "Do you ship internationally?" },
    { sender: "ai", text: "Yes! We ship to over 30 countries. Where are you located?" },
    { sender: "customer", text: "I'm in Canada" },
    { sender: "ai", audioMessage: true, text: "Perfect! We offer shipping to Canada for a flat rate of $9.99, or free on orders over $75." },
    { sender: "customer", text: "", productImage: {
      src: "/placeholder.svg",
      productName: "Comfort+ Pillow Set",
      price: "$49.99"
    }},
    { sender: "ai", text: "I see you're interested in our Comfort+ Pillow Set! It's our most popular item in Canada!", includeButton: true }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const section = sectionRef.current;
          if (section) {
            section.classList.add('animate-fade-in');
            section.classList.remove('opacity-0');
          }
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
  
  const getChannelIcon = (channel: ChannelType) => {
    switch (channel) {
      case "whatsapp":
        return <MessageSquare className="mr-2 h-4 w-4" />;
      case "instagram":
        return <Instagram className="mr-2 h-4 w-4" />;
      case "facebook":
        return <Facebook className="mr-2 h-4 w-4" />;
    }
  };
  
  return (
    <section ref={sectionRef} className="py-20 relative opacity-0 transition-opacity duration-500">
      {/* Background floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 text-swiftsell-blue/5 animate-float">
          <MessageSquare size={120} />
        </div>
        <div className="absolute bottom-1/4 right-1/5 text-swiftsell-violet/5 animate-float animate-delay-700">
          <Instagram size={100} />
        </div>
        <div className="absolute top-2/4 right-1/3 text-swiftsell-blue/5 animate-float animate-delay-300">
          <Facebook size={80} />
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText text="Seamless Integration with WhatsApp, Instagram, and Facebook" className="text-3xl md:text-4xl font-bold mb-6" />
          <p className="max-w-2xl mx-auto text-gray-300">
            <AnimatedText text="SwiftSell AI works where your customers already are, providing instant responses and turning conversations into sales across all major messaging platforms." className="animate-delay-300" />
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="whatsapp" className="w-full" onValueChange={(v) => setActiveChannel(v as ChannelType)}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-black/20 backdrop-blur-sm border border-white/10 p-1">
                <TabsTrigger 
                  value="whatsapp" 
                  className="flex items-center data-[state=active]:bg-swiftsell-blue/80 data-[state=active]:text-white"
                >
                  {getChannelIcon("whatsapp")} WhatsApp
                </TabsTrigger>
                <TabsTrigger 
                  value="instagram" 
                  className="flex items-center data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8A3AB9] data-[state=active]:to-[#BC2A8D] data-[state=active]:text-white"
                >
                  {getChannelIcon("instagram")} Instagram
                </TabsTrigger>
                <TabsTrigger 
                  value="facebook" 
                  className="flex items-center data-[state=active]:bg-[#0084FF] data-[state=active]:text-white"
                >
                  {getChannelIcon("facebook")} Facebook
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="relative">
              <TabsContent value="whatsapp" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <MockChat channel="whatsapp" messages={whatsappMessages} />
              </TabsContent>
              
              <TabsContent value="instagram" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <MockChat channel="instagram" messages={instagramMessages} />
              </TabsContent>
              
              <TabsContent value="facebook" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <MockChat channel="facebook" messages={facebookMessages} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MessagingChannelsSection;
