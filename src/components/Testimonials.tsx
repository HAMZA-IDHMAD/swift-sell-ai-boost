
import { useState, useEffect, useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
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
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    intervalRef.current = window.setInterval(nextTestimonial, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  const startAutoPlay = () => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(nextTestimonial, 5000);
    }
  };
  
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background parallax effect */}
      <div className="absolute inset-0 bg-gradient-radial from-swiftsell-violet/5 to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Join hundreds of e-commerce businesses already boosting sales with SwiftSell AI
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative glass-card rounded-xl p-8 min-h-[260px]"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-swiftsell-blue/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="testimonial-content">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className={`testimonial-item transition-all duration-500 absolute inset-0 flex flex-col justify-center ${index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                  >
                    <p className="text-lg text-gray-300 mb-6">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-swiftsell-blue w-6" : "bg-gray-600"}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-swiftsell-blue/20 flex items-center justify-center text-white transition-all"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-swiftsell-blue/20 flex items-center justify-center text-white transition-all"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
