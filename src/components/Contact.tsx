import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add form submission logic

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Show success message
    alert("Thank you for your message. We will get back to you soon!");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: [
        "215/C, Green Palladia,",
        "Opp. Raj World Shopping Center,",
        "Palanpur, Surat - 395009",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-9512366633"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["arrowledgersindia@gmail.com"],
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-secondary/50 dark:bg-secondary/20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary mb-6">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
            Let's Discuss Your{" "}
            <span className="heading-gradient">Financial Needs</span>
          </h2>
          <p className="text-foreground/80 reveal">
            Contact us today to schedule a consultation with one of our
            financial experts. We're here to help you achieve your financial
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex glass-panel p-6 rounded-xl reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-foreground/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 reveal">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="darshil@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center button-hover"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
