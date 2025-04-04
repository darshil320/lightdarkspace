
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/50 dark:bg-secondary/20">
      <div className="text-center p-10 rounded-xl glass-panel">
        <h1 className="text-7xl font-bold mb-4 heading-gradient">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-foreground/70 mb-8 max-w-md">
          We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <Link to="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium button-hover">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
