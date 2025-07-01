import { Button } from "@/components/ui/button";
import { Rocket, Calendar } from "lucide-react";
import { SiLinkedin, SiTwitter, SiGithub } from "react-icons/si";
import { Globe } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Building Developer
              <span className="text-blue-600"> Communities</span>
              <br />for a Decade
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Developer Advocate & Community Manager passionate about empowering developers, 
              fostering innovation, and creating meaningful connections in the tech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')} 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                <Rocket className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                size="lg"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <SiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <SiGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Professional headshot" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
