
import Blog from "../components/Blog";
import { useEffect } from "react";

const BlogPage = () => {
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
            Latest <span className="heading-gradient">Financial Insights</span>
          </h1>
        </div>
      </div>
      <Blog />
    </main>
  );
};

export default BlogPage;
