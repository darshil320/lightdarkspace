import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="max-w-2xl mx-auto relative"></div>
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
              A <span className="heading-gradient">Modern Approach to</span>{" "}
              Accounting & Advisory
            </h2>
            <p className="text-foreground/80 mb-6 reveal">
              At Arrow Ledgers, we go beyond bookkeeping—we turn numbers into
              strategic financial insights that drive growth and profitability.
              Our mission is to empower businesses with accurate, data-driven
              solutions, ensuring smarter decisions and long-term success. With
              a vision to revolutionize offshore accounting, we bring
              efficiency, automation, and proactive financial strategies to
              every business we serve.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold reveal">Why Choose Us?</h3>
              {[
                {
                  icon: CircleCheck,
                  text: "Strategic Accounting – More than reports, we provide insights that fuel business growth.",
                },
                {
                  icon: CircleCheck,
                  text: "Automation & Efficiency – Leveraging technology to streamline financial workflows.",
                },
                {
                  icon: CircleCheck,
                  text: "Proactive Decision Support – Identifying risks and opportunities before they impact your business.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mt-1 mr-4 p-1 rounded-full bg-primary/10 text-primary">
                    <item.icon size={16} />
                  </div>
                  <span className="text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="reveal">
              <Link
                to="/services"
                className="px-8 py-3 font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 inline-block button-hover"
              >
                Let's give your books the right direction!
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal">
            <div className="relative">
              <div className="aspect-square w-full max-w-2xl mx-auto rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-transparent">
                  <a
                    href="www.linkedin.com/in/caketkibookkeeping7749"
                    className=" flex items-center justify-center text-foreground/80"
                  >
                    <img
                      src="/Website-Photo-final.png"
                      alt="Icon"
                      className="w-full h-auto"
                    />
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "Unlimited",
              label:
                "Scalable financial solutions tailored to your business needs",
            },
            {
              number: "100%",
              label: "Commitment to data security and client satisfaction",
            },
            {
              number: "Zero Hassle",
              label:
                "No communication gaps, just seamless financial management",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl glass-panel reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold mb-2">
                ✅ {stat.number}
              </div>
              <div className="text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
