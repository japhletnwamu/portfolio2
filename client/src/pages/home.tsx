import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Achievements from "@/components/achievements";
import Portfolio from "@/components/portfolio";
import Speaking from "@/components/speaking";
import Testimonials from "@/components/testimonials";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import ChatWidget from "@/components/chat-widget";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Portfolio />
      <Speaking />
      <Testimonials />
      <Blog />
      <Contact />
      <ChatWidget />
      <Footer />
    </div>
  );
}
