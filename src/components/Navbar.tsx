
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 backdrop-blur-lg bg-white/80 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/a6c1484f-27a3-47f8-8ced-a6b2ece9e6ce.png" 
              alt="Bluestock Logo" 
              className="h-8 w-auto" 
            />
            <span className="font-display font-bold text-xl">Bluestock</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#upcoming"
              className="text-sm font-medium hover:text-ipo-blue transition-colors"
            >
              Opportunities
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-ipo-blue transition-colors"
            >
              How It Works
            </a>
            <a
              href="#prediction"
              className="text-sm font-medium hover:text-ipo-blue transition-colors"
            >
              Analytics
            </a>
            <a
              href="#subscribe"
              className="text-sm font-medium hover:text-ipo-blue transition-colors"
            >
              Subscribe
            </a>
          </nav>

          <button
            className="inline-flex md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#upcoming"
                className="text-sm font-medium hover:text-ipo-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Opportunities
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium hover:text-ipo-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#prediction"
                className="text-sm font-medium hover:text-ipo-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Analytics
              </a>
              <a
                href="#subscribe"
                className="text-sm font-medium hover:text-ipo-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Subscribe
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
