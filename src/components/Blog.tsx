
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = ({ 
  title, 
  excerpt, 
  date, 
  category 
}: { 
  title: string; 
  excerpt: string; 
  date: string; 
  category: string;
}) => {
  return (
    <div className="rounded-2xl glass-panel overflow-hidden group hover:shadow-lg transition-all duration-300 reveal">
      <div className="aspect-video w-full bg-muted"></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-foreground/60 text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-foreground/70 mb-4">{excerpt}</p>
        <Link
          to="/blog" 
          className="inline-flex items-center text-primary font-medium group-hover:underline"
        >
          Read more
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  const posts = [
    {
      title: "Tax Planning Strategies for Small Businesses",
      excerpt: "Effective tax planning strategies that can help small businesses optimize their tax positions and improve cash flow.",
      date: "April 15, 2023",
      category: "Tax Planning"
    },
    {
      title: "Understanding Financial Statements: A Guide for Business Owners",
      excerpt: "A comprehensive guide to help business owners understand and interpret their financial statements for better decision-making.",
      date: "March 22, 2023",
      category: "Financial Literacy"
    },
    {
      title: "The Impact of Recent Regulatory Changes on Corporate Reporting",
      excerpt: "An analysis of recent regulatory changes and their implications for corporate financial reporting requirements.",
      date: "February 10, 2023",
      category: "Regulatory Updates"
    }
  ];

  return (
    <section id="blog" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary mb-6">
              Our Insights
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
            Latest <span className="heading-gradient">Financial Insights</span> & Updates
          </h2>
          <p className="text-foreground/80 reveal">
            Stay informed with our latest articles on tax planning, financial management, and regulatory updates
            to help you make better financial decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link
            to="/blog" 
            className="px-8 py-3 font-medium rounded-lg border border-border glass-panel inline-flex items-center button-hover"
          >
            View All Articles
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
