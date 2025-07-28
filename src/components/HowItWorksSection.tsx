import { Button } from "@/components/ui/button";
import { Sunrise, Moon, Coffee, Clock } from "lucide-react";
import teaProduct from "@/assets/tea-product.webp";

const HowItWorksSection = () => {
  const handleCTAClick = () => {
    window.open("https://hop.clickbank.net/?affiliate=anakin80&vendor=allslimtea&op=new&tid=tracking", "_blank");
  };

  const steps = [
    {
      icon: <Sunrise className="w-8 h-8" />,
      time: "Morning",
      title: "Start Your Day Right",
      description: "Drink your morning blend 30 minutes before breakfast. This energizing formula kickstarts your metabolism and provides sustained energy throughout the day.",
      benefits: ["Boosts metabolism", "Increases energy", "Suppresses appetite"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      time: "Throughout Day",
      title: "Feel the Difference",
      description: "Experience increased energy, reduced cravings, and improved focus. The natural ingredients work synergistically to support your weight loss goals.",
      benefits: ["Sustained energy", "Reduced cravings", "Better mood"]
    },
    {
      icon: <Moon className="w-8 h-8" />,
      time: "Evening",
      title: "Nighttime Fat Burning",
      description: "Enjoy your calming evening blend 1 hour before bed. While you sleep, your body continues burning fat and detoxifying naturally.",
      benefits: ["Burns fat overnight", "Improves sleep", "Detoxifies body"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How All Day Slimming Tea Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple 3-step daily routine that fits seamlessly into your lifestyle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <div className="relative">
            <img
              src={teaProduct}
              alt="All Day Slimming Tea Products"
              className="w-full max-w-md mx-auto rounded-2xl shadow-glow"
            />
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-soft">
              🔥 Best Seller!
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {step.time}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-1">
                    {step.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Science Behind It */}
        <div className="bg-gradient-secondary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            The Science Behind the Results
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            All Day Slimming Tea combines ancient wisdom with modern science. Our proprietary blend includes green tea extract, garcinia cambogia, ginger root, and other clinically studied ingredients that work together to boost metabolism, support fat oxidation, and promote healthy weight management.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg p-4">
              <h4 className="font-semibold text-card-foreground mb-2">Clinical Studies</h4>
              <p className="text-sm text-muted-foreground">Ingredients backed by scientific research</p>
            </div>
            <div className="bg-card rounded-lg p-4">
              <h4 className="font-semibold text-card-foreground mb-2">Third-Party Tested</h4>
              <p className="text-sm text-muted-foreground">Purity and potency guaranteed</p>
            </div>
            <div className="bg-card rounded-lg p-4">
              <h4 className="font-semibold text-card-foreground mb-2">FDA Approved Facility</h4>
              <p className="text-sm text-muted-foreground">Manufactured to highest standards</p>
            </div>
          </div>
          <Button 
            variant="hero" 
            size="xl" 
            onClick={handleCTAClick}
          >
            Buy Your Package Now!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;