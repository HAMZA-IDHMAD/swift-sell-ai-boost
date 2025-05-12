
import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Owner",
      company: "Urban Threads Boutique",
      text: "SwiftSell AI increased our sales by 42% in just two months. It's like having a 24/7 sales team that never sleeps!",
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "TechGear Dropshipping",
      text: "This is a game-changer for my business. I no longer lose international customers due to timezone differences.",
    },
    {
      name: "Priya Patel",
      role: "Director",
      company: "Glow Beauty Co.",
      text: "Our Instagram DM conversions have tripled since implementing SwiftSell AI. The personalization is impressive.",
    },
    {
      name: "David Rodriguez",
      role: "CEO",
      company: "FitStyle Apparel",
      text: "The ROI has been incredible. For every $1 I spend on SwiftSell AI, I'm getting $7 back in new sales.",
    },
    {
      name: "Aisha Thomas",
      role: "Marketing Manager", 
      company: "Luxe Home Decor",
      text: "Our customer satisfaction scores actually improved after implementing the AI assistant - that was unexpected!",
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll('.testimonial-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.remove('opacity-0');
              }, index * 150);
            });
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
  
  return (
    <section id="testimonials" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-swiftsell-violet/5 to-transparent opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-swiftsell-blue/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-swiftsell-violet/5 blur-3xl animate-float animate-delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Join hundreds of e-commerce businesses already boosting sales with SwiftSell AI
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto" ref={cardsRef}>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="testimonial-card opacity-0 glass-card border-white/5 bg-black/20 backdrop-blur-md hover:border-swiftsell-blue/20 transition-all duration-300 min-h-[260px]">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-swiftsell-blue/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-300">{testimonial.text}</p>
                      </div>
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static transform-none mx-2 bg-black/30 hover:bg-swiftsell-blue/20" />
              <CarouselNext className="relative static transform-none mx-2 bg-black/30 hover:bg-swiftsell-blue/20" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
