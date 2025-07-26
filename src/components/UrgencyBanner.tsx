import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    window.open("https://hop.clickbank.net/?affiliate=anakin80&vendor=allslimtea&op=new&tid=tracking", "_blank");
  };

  return (
    <div className="bg-gradient-accent text-accent-foreground py-4 sticky top-0 z-40 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6" />
            <div>
              <p className="font-bold text-lg">🔥 LIMITED TIME OFFER!</p>
              <p className="text-sm opacity-90">Only a few free packages remaining</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-center">
              <div className="bg-accent-foreground/20 rounded-lg px-3 py-2">
                <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs">HOURS</div>
              </div>
              <span className="text-xl font-bold">:</span>
              <div className="bg-accent-foreground/20 rounded-lg px-3 py-2">
                <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs">MINS</div>
              </div>
              <span className="text-xl font-bold">:</span>
              <div className="bg-accent-foreground/20 rounded-lg px-3 py-2">
                <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs">SECS</div>
              </div>
            </div>
            
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleCTAClick}
              className="animate-pulse hover:animate-none"
            >
              Claim Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;