
import { CircleCheck, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="reveal">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary mb-6">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
              A <span className="heading-gradient">Modern Approach</span> to Accounting & Advisory
            </h2>
            <p className="text-foreground/80 mb-6 reveal">
              Founded on the principles of precision, integrity, and client-focused service, our firm has been 
              providing exceptional accounting services for over 15 years. Our team of experienced chartered 
              accountants combines deep expertise with the latest technology to deliver unparalleled financial guidance.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: CircleCheck, text: "Expert team of certified professionals" },
                { icon: Award, text: "Award-winning service excellence" },
                { icon: Users, text: "Client-centered approach to every engagement" }
              ].map((item, index) => (
                <div key={index} className="flex items-start reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="mt-1 mr-4 p-1 rounded-full bg-primary/10 text-primary">
                    <item.icon size={16} />
                  </div>
                  <span className="text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="reveal">
              <a 
                href="#services" 
                className="px-8 py-3 font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 inline-block button-hover"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal">
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden glass-panel p-1">
                <div className="w-full h-full bg-muted rounded-xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "15+", label: "Years of experience" },
            { number: "500+", label: "Satisfied clients" },
            { number: "98%", label: "Client retention rate" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-xl glass-panel reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
