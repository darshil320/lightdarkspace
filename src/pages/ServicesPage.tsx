
import Services from "../components/Services";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    // Ensure all reveal elements are visible on page load
    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('active');
    });
  }, []);
  
  return (
    <main>
      <div className="pt-28 pb-16 bg-background">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our <span className="heading-gradient">Services</span>
          </h1>
        </div>
      </div>
      <Services />
    </main>
  );
};

export default ServicesPage;
