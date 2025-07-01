import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-600">Alex Chen</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</button>
              <button onClick={() => scrollToSection('achievements')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Achievements</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Portfolio</button>
              <button onClick={() => scrollToSection('speaking')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Speaking</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left">About</button>
            <button onClick={() => scrollToSection('achievements')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left">Achievements</button>
            <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left">Portfolio</button>
            <button onClick={() => scrollToSection('speaking')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left">Speaking</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
