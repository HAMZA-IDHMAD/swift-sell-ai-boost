
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-swiftsell-blue/10 via-swiftsell-violet/5 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-swiftsell-blue/5 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-swiftsell-violet/5 animate-float animate-delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Boost Sales by
            <span className="text-gradient"> 35%</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses already using SwiftSell AI to automate their sales process and increase revenue.
          </p>
          
          <div className="glass-card rounded-xl p-8 md:p-10 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gradient-green mb-2">24/7</h3>
                <p className="text-gray-400">Customer Support</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gradient-green mb-2">10x</h3>
                <p className="text-gray-400">Faster Response</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gradient-green mb-2">35%</h3>
                <p className="text-gray-400">More Conversions</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-swiftsell-blue to-swiftsell-violet hover:opacity-90 button-glow animate-glow w-full md:w-auto px-8 py-6 text-lg"
            >
              Boost My Sales Now
            </Button>
          </div>
          
          <p className="text-sm text-gray-400">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
