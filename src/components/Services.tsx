
import { Calculator, FileText, TrendingUp, BarChart4, FileSearch, Briefcase } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }: { 
  icon: any;
  title: string; 
  description: string;
}) => {
  return (
    <div className="p-8 rounded-2xl glass-panel group hover:bg-primary/[0.03] transition-all duration-300 reveal">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Preparation",
      description: "Strategic tax planning and meticulous preparation services for individuals and businesses to optimize tax positions."
    },
    {
      icon: FileText,
      title: "Financial Statements",
      description: "Comprehensive preparation and analysis of financial statements to provide clear insights into your financial position."
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic advisory services to help businesses grow, improve operations, and achieve long-term financial goals."
    },
    {
      icon: BarChart4,
      title: "Financial Planning",
      description: "Personalized financial planning services to help individuals and families achieve their financial objectives."
    },
    {
      icon: FileSearch,
      title: "Audit & Assurance",
      description: "Thorough audit and assurance services to enhance credibility and transparency of financial information."
    },
    {
      icon: Briefcase,
      title: "Corporate Services",
      description: "Comprehensive corporate services including incorporation, secretarial services, and regulatory compliance."
    }
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-secondary/50 dark:bg-secondary/20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary mb-6">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
            Comprehensive <span className="heading-gradient">Accounting Solutions</span>
          </h2>
          <p className="text-foreground/80 reveal">
            We offer a wide range of accounting and financial advisory services tailored to meet the unique needs of our clients,
            from individuals to large corporations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
