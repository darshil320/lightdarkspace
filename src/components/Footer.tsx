
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative pt-16 pb-12 bg-muted/30 dark:bg-muted/20">
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center -translate-y-1/2 button-hover"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold heading-gradient inline-block mb-4">
              CA Firm
            </a>
            <p className="text-foreground/70 max-w-md mb-6">
              Providing exceptional accounting and financial advisory services with precision,
              integrity, and a commitment to excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center glass-panel text-foreground/80 hover:text-primary transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {[
            {
              title: "Services",
              links: ["Tax Planning", "Financial Statements", "Business Advisory", "Audit & Assurance", "Corporate Services"]
            },
            {
              title: "Company",
              links: ["About Us", "Team", "Careers", "Testimonials", "FAQ"]
            }
          ].map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CA Firm. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
