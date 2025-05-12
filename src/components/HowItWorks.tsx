
import { useRef, useEffect } from "react";

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Connect Your Shop",
      description: "Integrate with your existing e-commerce platforms in minutes.",
      delay: "animate-delay-100"
    },
    {
      number: "02",
      title: "Train Your AI Assistant",
      description: "Customize responses based on your brand voice and product catalog.",
      delay: "animate-delay-300"
    },
    {
      number: "03",
      title: "Watch Sales Grow",
      description: "Your AI handles inquiries 24/7, turning conversations into orders.",
      delay: "animate-delay-500"
    },
    {
      number: "04",
      title: "Analyze & Optimize",
      description: "Get insights on customer behavior and optimize your sales funnel.",
      delay: "animate-delay-700"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const stepsElements = stepsRef.current?.querySelectorAll(".step-item");
          stepsElements?.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add("active");
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );
    
    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }
    
    return () => {
      if (stepsRef.current) {
        observer.unobserve(stepsRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20 relative bg-gradient-to-b from-swiftsell-dark to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Get set up in minutes and start boosting your sales immediately
          </p>
        </div>
        
        <div ref={stepsRef} className="max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-800"></div>
          <div className="hidden md:block absolute top-24 left-0 right-0 progress-line transform scale-x-0 origin-left transition-transform duration-1000 ease-in-out"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className={`step-item opacity-0 animate-fade-in ${step.delay}`}>
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-swiftsell-blue font-bold text-xl z-10 relative mx-auto md:mx-0">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center md:text-left">{step.title}</h3>
                <p className="text-gray-400 text-center md:text-left">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
