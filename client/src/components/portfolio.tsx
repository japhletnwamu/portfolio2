import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Globe, Mic, TrendingUp, Book, BarChart3 } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Developer Portal 2.0",
      description: "Redesigned and rebuilt the main developer portal, increasing engagement by 300% and reducing time-to-first-success by 60%.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Modern developer workspace with code on multiple screens",
      tags: ["UX Design", "React", "API Design"],
      icon: <ExternalLink className="h-5 w-5" />
    },
    {
      title: "Global Developer Program",
      description: "Launched a comprehensive developer program spanning 15 countries, supporting 10,000+ developers with resources and mentorship.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Developers networking at community event",
      tags: ["Program Design", "Mentorship", "Global Scale"],
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "DevCon Series",
      description: "Created and hosted a technical conference series attracting 5,000+ developers annually, featuring 100+ speakers and industry leaders.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Conference speaker presenting to large audience",
      tags: ["Event Planning", "Speaking", "Networking"],
      icon: <Mic className="h-5 w-5" />
    },
    {
      title: "API Adoption Framework",
      description: "Developed a systematic approach to API adoption that increased developer onboarding success rate from 23% to 78%.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Modern office with team working together",
      tags: ["Strategy", "APIs", "Growth"],
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Technical Content Hub",
      description: "Built a comprehensive content platform with 500+ tutorials, guides, and resources, achieving 2M+ monthly page views.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Developer working on code with documentation open",
      tags: ["Content", "Education", "Scale"],
      icon: <Book className="h-5 w-5" />
    },
    {
      title: "DevEx Measurement Suite",
      description: "Created a comprehensive developer experience measurement framework adopted by 20+ organizations to track and improve developer satisfaction.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Team collaborating around a conference table",
      tags: ["Analytics", "DevEx", "Framework"],
      icon: <BarChart3 className="h-5 w-5" />
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Portfolio Highlights</h2>
          <p className="text-xl text-gray-600">Key projects and contributions that have made a lasting impact</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-48 object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-blue-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
