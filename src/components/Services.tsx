
import { BookOpen, BarChart4, LineChart, Lightbulb, Settings, ClipboardCheck } from "lucide-react";

const ServiceCategory = ({ title, description, items }: { 
  title: string;
  description: string;
  items: string[];
}) => {
  return (
    <div className="p-8 rounded-2xl glass-panel group hover:bg-primary/[0.03] transition-all duration-300 reveal">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-5">{description}</p>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2 text-primary">-</span>
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
  const serviceCategories = [
    {
      title: "Managing Comprehensive Financials",
      description: "Seamless bookkeeping, AR/AP management, payroll processing, and multi-currency accounting to ensure financial clarity.",
      items: [
        "Bookkeeping & financial reporting",
        "Clean up and organize messy books",
        "Payroll processing",
        "Multi-currency accounting",
        "Consolidation of FS & cleanup service"
      ]
    },
    {
      title: "Ongoing Financial Analysis & Insights",
      description: "In-depth analysis, profitability evaluation, and break-even calculations to drive data-backed decisions.",
      items: [
        "Ratio analysis",
        "Custom KPI tracking systems",
        "AR/AP management",
        "In-depth financial performance analysis",
        "Break-even calculations & pricing strategy support"
      ]
    },
    {
      title: "Decision-Making Enhancement",
      description: "Custom KPI tracking, financial dashboards, and actionable management reports for optimized performance.",
      items: [
        "Profitability analysis",
        "Interactive financial dashboards",
        "Creation & integration of SOPs",
        "Actionable management reports"
      ]
    },
    {
      title: "Expert Management Advisory",
      description: "Cost-saving strategies, capital restructuring, budgeting, and cash flow management for financial stability.",
      items: [
        "Practical cost-saving recommendations",
        "Capital restructuring",
        "Budgets & forecasting",
        "Projection & monitoring",
        "Cash flow management",
        "Working capital"
      ]
    },
    {
      title: "New-Age Operation Optimization",
      description: "Leverage advanced accounting software, workflow automation, and data-driven insights for streamlined operations.",
      items: [
        "Leveraging advanced features of accounting software",
        "Financial workflow assessment",
        "Trend analysis & data detection",
        "Workflow automation"
      ]
    },
    {
      title: "Regulatory Compliance",
      description: "Tax planning, sales tax registration, audit support, and regulatory updates to meet compliance standards.",
      items: [
        "Tax planning & advisory",
        "Sales tax registration & filing",
        "Audit support",
        "Recent updates & guidance"
      ]
    }
  ];

  const servicesHighlights = [
    {
      icon: BookOpen,
      title: "Managing Comprehensive Financials",
      description: "📊 Accurate bookkeeping & financial reporting to ensure financial clarity and organization."
    },
    {
      icon: BarChart4,
      title: "Ongoing Financial Analysis & Insights",
      description: "📈 Strategic financial insights to drive informed business decisions."
    },
    {
      icon: LineChart,
      title: "Decision-Making Enhancement",
      description: "📌 Custom KPI tracking and actionable reports for optimized performance."
    },
    {
      icon: Lightbulb,
      title: "Expert Management Advisory",
      description: "💡 Proactive financial planning for long-term business stability and growth."
    },
    {
      icon: Settings,
      title: "New-Age Operation Optimization",
      description: "⚙️ Advanced workflow automation and process efficiency for modern businesses."
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory Compliance",
      description: "✅ Comprehensive tax planning and regulatory compliance services."
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
            Comprehensive <span className="heading-gradient">Solutions</span>
          </h2>
          <p className="text-foreground/80 reveal">
            We offer a wide range of accounting and financial advisory services tailored to meet the unique needs of our clients,
            from individuals to large corporations.
          </p>
        </div>
        
        {/* Services Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesHighlights.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>

        {/* Detailed Services */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center reveal">Detailed Services Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCategory 
              key={index} 
              title={category.title} 
              description={category.description} 
              items={category.items} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
