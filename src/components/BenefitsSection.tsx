import { Moon, Zap, Heart, Leaf, Clock, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Burns Fat Day & Night",
      description: "Unique dual-action formula works around the clock to accelerate fat burning, even while you sleep."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Naturally Increases Energy",
      description: "Feel energized throughout the day without crashes or jitters from artificial stimulants."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Reduces Bloating",
      description: "Gentle detox helps reduce bloating and improves digestion for a flatter, more comfortable stomach."
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Supports Better Sleep",
      description: "Evening blend contains calming herbs that promote restful sleep while burning fat overnight."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Natural & Safe",
      description: "Made with premium organic ingredients. No artificial additives, chemicals, or harmful side effects."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Results",
      description: "Many women see noticeable results within the first 2-3 weeks of consistent use."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Women Over 30 Love All Day Slimming Tea
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scientifically formulated with powerful natural ingredients to support healthy weight loss and overall wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;