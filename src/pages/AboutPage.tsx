
import About from "../components/About";
import { useEffect } from "react";

const AboutPage = () => {
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
            About <span className="heading-gradient">Arrow Ledgers</span>
          </h1>
        </div>
      </div>
      <About />
    </main>
  );
};

export default AboutPage;
