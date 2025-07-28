import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tea-woman.jpg";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://hop.clickbank.net/?affiliate=anakin80&vendor=allslimtea&op=new&tid=tracking", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-secondary flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                What Are Women Over 30 Drinking to{" "}
                <span className="text-primary">Slim Down Fast?</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Discover the 100% natural tea that helps boost metabolism, suppress appetite, and burns fat day and night - without any side effects!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-lg">Burns fat 24/7 - even while you sleep</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-lg">Naturally increases energy without jitters</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-lg">Made with 100% safe, natural ingredients</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={handleCTAClick}
                className="w-full md:w-auto"
              >
                🎁 Buy Your Package Now!
              </Button>
              <p className="text-sm text-muted-foreground">
                ⏰ <strong>Limited Time:</strong> Only a few packages left!
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Happy woman drinking slimming tea"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-soft border border-border max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">JM</span>
                </div>
                <div>
                  <p className="text-sm font-medium">"Lost 23 lbs in 6 weeks!"</p>
                  <p className="text-xs text-muted-foreground">Jessica M., Age 34</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;