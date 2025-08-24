
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 mt-2 md:mt-0 ${
      isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4 relative">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Portfolio", "Services", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(
                  item === "Services" ? "projects" : 
                  item === "Portfolio" ? "gallery" : 
                  item.toLowerCase()
                )}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white absolute right-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            {["Home", "About", "Portfolio", "Services", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(
                  item === "Services" ? "projects" : 
                  item === "Portfolio" ? "gallery" : 
                  item.toLowerCase()
                )}
                className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
