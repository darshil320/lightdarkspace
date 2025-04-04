import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass =
    scrollPosition > 50
      ? "py-4 backdrop-blur-md bg-background/80 shadow-soft"
      : "py-6 bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold heading-gradient animate-fade-in flex items-center gap-4"
        >
          <img
            src="/Icon-square.png"
            alt="Icon"
            className="w-[60px] h-[50px]"
          />
          <span>Arrow Ledgers</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li
                  key={item.label}
                  className="animate-fade-in-down"
                  style={{ animationDelay: "200ms" }}
                >
                  <Link
                    to={item.href}
                    className={`relative text-foreground/80 hover:text-foreground transition-colors duration-300 py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full ${
                      isActive ? "after:w-full text-foreground" : "after:w-0"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-background z-40 pt-20 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="p-6">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`text-xl font-medium block py-2 hover:text-primary transition-colors ${
                      isActive ? "text-primary" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
