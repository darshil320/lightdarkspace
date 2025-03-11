
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 -z-10"></div>
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container flex flex-col items-center text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary mb-6">
            Chartered Accountants
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          Excellence in 
          <span className="heading-gradient"> Financial Advisory </span>
          and Accounting
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          We deliver exceptional accounting services with precision and integrity,
          helping businesses and individuals achieve their financial goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <a 
            href="#contact" 
            className="px-8 py-3 font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 button-hover"
          >
            Contact Us
          </a>
          <a 
            href="#services" 
            className="px-8 py-3 font-medium rounded-lg border border-border glass-panel button-hover"
          >
            Our Services
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1200ms" }}>
        <a 
          href="#about" 
          className="flex flex-col items-center text-sm text-foreground/70 hover:text-foreground transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
