const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">All Day Slimming Tea</h3>
            <p className="text-background/80 leading-relaxed">
              Helping women over 30 achieve their weight loss goals naturally and safely.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              {/*<li><a href="#" className="hover:text-background transition-colors">Refund Policy</a></li>*/}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>📧 contact@naturaleatinghub.online</li>
              {/*<li>📞 1-800</li>*/}
              <li>🕒 24h/7d</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="text-center space-y-4">
            <p className="text-sm text-background/60">
              <strong>Affiliate Disclosure:</strong> This is an affiliate website. As an affiliate, I may receive compensation from purchases made through the links on this page. This helps support our ability to provide you with valuable content at no cost to you.
            </p>
            <p className="text-sm text-background/60">
              <strong>Disclaimer:</strong> Individual results may vary. This product has not been evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before use.
            </p>
            <p className="text-xs text-background/40">
              © 2025 All Day Slimming Tea Affiliate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;