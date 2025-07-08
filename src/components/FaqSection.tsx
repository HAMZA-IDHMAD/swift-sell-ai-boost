import { useState } from "react";
import { ChevronDown, MessageSquare, Clock, TrendingUp, Shield } from "lucide-react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does SwiftSell AI work?",
      answer: "SwiftSell AI integrates with your messaging platforms (WhatsApp, Instagram, Facebook) and uses advanced AI to understand customer inquiries, provide instant responses, and guide them through the sales process 24/7.",
      icon: MessageSquare,
    },
    {
      question: "Can it really boost conversions by 35%?",
      answer: "Yes! Our AI analyzes customer behavior, provides personalized product recommendations, handles objections, and creates urgency to convert browsers into buyers. Many clients see 30-50% conversion increases.",
      icon: TrendingUp,
    },
    {
      question: "How quickly can I set it up?",
      answer: "Setup takes just 5 minutes. Connect your messaging accounts, upload your product catalog, and our AI starts working immediately. No technical skills required.",
      icon: Clock,
    },
    {
      question: "Is my customer data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, comply with GDPR, and never store sensitive customer information. Your data stays private and secure.",
      icon: Shield,
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-swiftsell-blue/5 blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-swiftsell-violet/5 blur-3xl animate-float animate-delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Everything you need to know about SwiftSell AI
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`glass-card rounded-xl overflow-hidden transition-all duration-500 opacity-0 animate-fade-in hover:border-primary/30 ${
                  isOpen ? 'border-primary/20' : 'border-white/10'
                }`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isOpen ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/60'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  </div>
                  
                  <ChevronDown 
                    className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action at bottom */}
        <div className="text-center mt-12 opacity-0 animate-fade-in animate-delay-700">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="text-primary hover:text-primary/80 transition-colors font-medium">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;