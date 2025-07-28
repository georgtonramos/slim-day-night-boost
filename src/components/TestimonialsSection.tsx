import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const handleCTAClick = () => {
    window.open("https://hop.clickbank.net/?affiliate=anakin80&vendor=allslimtea&op=new&tid=tracking", "_blank");
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 42,
      city: "Denver, CO",
      rating: 5,
      text: "I've tried everything to lose weight after having kids. This tea is the ONLY thing that finally worked! I lost 28 pounds in 8 weeks and feel amazing. The best part? No side effects at all!",
      beforeWeight: "185 lbs",
      afterWeight: "157 lbs",
      timeframe: "8 weeks"
    },
    {
      name: "Maria Rodriguez",
      age: 35,
      city: "Phoenix, AZ",
      rating: 5,
      text: "As a busy mom of three, I needed something that fit into my routine. This tea is so easy - just drink it morning and night. I've lost 19 pounds and my energy is through the roof!",
      beforeWeight: "168 lbs",
      afterWeight: "149 lbs",
      timeframe: "6 weeks"
    },
    {
      name: "Jennifer Chen",
      age: 38,
      city: "Seattle, WA",
      rating: 5,
      text: "My metabolism slowed down so much after 35. This tea brought it back to life! I'm sleeping better, have more energy, and I've dropped 2 dress sizes. My husband can't believe the transformation!",
      beforeWeight: "172 lbs",
      afterWeight: "148 lbs",
      timeframe: "10 weeks"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Women, Real Results
          </h2>
          <p className="text-xl text-muted-foreground">
            See how All Day Slimming Tea transformed these women's lives
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border border-border"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Results */}
              <div className="bg-primary/5 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Before</p>
                    <p className="font-semibold text-primary">{testimonial.beforeWeight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">After</p>
                    <p className="font-semibold text-primary">{testimonial.afterWeight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold text-primary">{testimonial.timeframe}</p>
                  </div>
                </div>
              </div>

              {/* User Info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{testimonial.name}, {testimonial.age}</p>
                <p className="text-sm text-muted-foreground">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of women who've already discovered the power of All Day Slimming Tea
          </p>
          <Button 
            variant="cta" 
            size="xl" 
            onClick={handleCTAClick}
            className="mb-4"
          >
            🎁 Order Your Slimming Tea Today!
          </Button>
          <p className="text-sm text-muted-foreground">
            ⚡ <strong>Hurry!</strong> This special offer expires soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;