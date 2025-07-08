import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MembershipsSection = () => {
  const { toast } = useToast();

  const handleSubscribe = (plan: string) => {
    toast({
      title: "Subscription Selected",
      description: `You selected the ${plan} plan. This is a demo - no payment processing connected.`,
    });
  };

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started with AI sales automation",
      icon: Zap,
      popular: false,
      features: [
        "Up to 1,000 AI conversations/month",
        "WhatsApp integration",
        "Basic analytics dashboard",
        "Email support",
        "Product catalog (up to 100 items)",
        "Standard response templates",
      ]
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses that need advanced features and integrations",
      icon: Star,
      popular: true,
      features: [
        "Up to 5,000 AI conversations/month",
        "WhatsApp + Instagram + Facebook",
        "Advanced analytics & insights",
        "Priority email & chat support",
        "Unlimited product catalog",
        "Custom response templates",
        "A/B testing capabilities",
        "CRM integrations",
      ]
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large businesses requiring maximum scale and premium support",
      icon: Crown,
      popular: false,
      features: [
        "Unlimited AI conversations",
        "All messaging platforms",
        "Real-time analytics & reporting",
        "24/7 phone & priority support",
        "White-label solution",
        "Advanced AI customization",
        "Dedicated account manager",
        "Custom integrations",
        "Multi-team collaboration",
        "Advanced security features",
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full bg-accent/5 blur-2xl animate-float animate-delay-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Choose Your <span className="text-gradient">Membership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Scale your business with AI-powered sales automation. Choose the plan that fits your needs.
          </p>
          <div className="mt-6 opacity-0 animate-fade-in animate-delay-300">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              14-day free trial • No credit card required • Cancel anytime
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            
            return (
              <Card
                key={plan.name}
                className={`relative glass-card transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in ${
                  plan.popular 
                    ? 'border-primary/30 ring-2 ring-primary/20' 
                    : 'border-white/10 hover:border-primary/20'
                }`}
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className={`inline-flex p-3 rounded-full mb-4 mx-auto ${
                    plan.popular ? 'bg-primary/20' : 'bg-white/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-white/80'}`} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="flex items-baseline justify-center mt-6">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleSubscribe(plan.name)}
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90'
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    {plan.popular ? 'Upgrade or downgrade at any time' : 'No setup fees'}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16 opacity-0 animate-fade-in animate-delay-700">
          <p className="text-muted-foreground mb-4">Trusted by 10,000+ businesses worldwide</p>
          <div className="flex justify-center space-x-8 opacity-60">
            <div className="text-xs font-semibold">30-DAY GUARANTEE</div>
            <div className="text-xs font-semibold">SSL SECURED</div>
            <div className="text-xs font-semibold">24/7 SUPPORT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipsSection;