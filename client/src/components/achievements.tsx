import { Badge } from "@/components/ui/badge";

export default function Achievements() {
  const timelineItems = [
    {
      year: "2023 - Present",
      title: "Senior Developer Advocate",
      description: "Leading global developer relations strategy, managing a team of 8 advocates across 4 continents.",
      tags: ["Strategy", "Leadership"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Team collaboration in modern office",
      color: "bg-blue-600"
    },
    {
      year: "2020 - 2023",
      title: "Developer Relations Manager",
      description: "Grew developer community from 5K to 50K members, launched 3 major developer programs.",
      tags: ["Growth", "Programs"],
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Speaker presenting at tech conference",
      color: "bg-cyan-500"
    },
    {
      year: "2017 - 2020",
      title: "Community Manager",
      description: "Built developer advocacy framework, established partnerships with 50+ developer communities.",
      tags: ["Framework", "Partnerships"],
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Large tech conference presentation hall",
      color: "bg-slate-700"
    },
    {
      year: "2014 - 2017",
      title: "Developer Advocate",
      description: "Started developer advocacy career, delivered 100+ technical talks, authored 50+ technical articles.",
      tags: ["Speaking", "Writing"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Developer workspace with multiple monitors and code",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Career Achievements</h2>
          <p className="text-xl text-gray-600">A decade of impact in developer advocacy and community management</p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line rounded-full"></div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex items-center justify-center mb-12">
              <div className={`flex flex-col lg:flex-row${index % 2 === 1 ? '-reverse' : ''} items-center w-full`}>
                <div className={`w-full lg:w-5/12 mb-4 lg:mb-0 ${index % 2 === 0 ? 'lg:pr-8 text-center lg:text-right' : 'lg:pl-8 text-center lg:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
                    <div className="text-sm font-medium text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-blue-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`w-8 h-8 ${item.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                <div className={`w-full lg:w-5/12 mt-4 lg:mt-0 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <img 
                    src={item.image}
                    alt={item.alt}
                    className="rounded-xl shadow-lg w-full h-48 object-cover" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
