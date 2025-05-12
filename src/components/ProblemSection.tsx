
import AnimatedCounter from "./ui/AnimatedCounter";
import AnimatedText from "./ui/AnimatedText";

const ProblemSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-swiftsell-violet/5 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-card rounded-xl p-6 h-full bg-black/40">
              <div className="space-y-6">
                <div className="relative p-4 bg-black/50 rounded-md border border-white/10">
                  <div className="absolute top-0 left-4 -translate-y-1/2 px-2 bg-swiftsell-dark text-gray-400 text-xs">
                    Customer
                  </div>
                  <p className="text-gray-300">Hi! Do you ship to Canada and how long does it take?</p>
                </div>
                
                <div className="relative p-4 bg-black/70 rounded-md border border-white/5 text-right">
                  <div className="absolute top-0 right-4 -translate-y-1/2 px-2 bg-swiftsell-dark text-gray-400 text-xs">
                    8 hours later...
                  </div>
                </div>
                
                <div className="relative p-4 bg-black/50 rounded-md border border-white/10">
                  <div className="absolute top-0 left-4 -translate-y-1/2 px-2 bg-swiftsell-dark text-gray-400 text-xs">
                    Customer
                  </div>
                  <p className="text-gray-300">
                    Hello? I guess I'll order from somewhere else...
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
              Stop Losing <span className="text-gradient">Sales</span> While You Sleep
            </h2>
            
            <div className="space-y-8 opacity-0 animate-fade-in animate-delay-300">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  E-commerce businesses lose potential customers every day due to delayed responses and missed chat messages.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6 bg-black/40">
                  <h3 className="font-bold mb-2 text-gradient">
                    <AnimatedCounter end={78} suffix="%" className="text-3xl" /> 
                  </h3>
                  <p className="text-gray-400">of customers prefer to shop through messaging apps</p>
                </div>
                
                <div className="glass-card rounded-xl p-6 bg-black/40">
                  <h3 className="font-bold mb-2 text-gradient">
                    <AnimatedCounter end={43} suffix="%" className="text-3xl" />
                  </h3>
                  <p className="text-gray-400">of sales lost due to slow response times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
