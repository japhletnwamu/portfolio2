import { Card, CardContent } from "@/components/ui/card";

export default function Speaking() {
  const speakingStats = [
    { number: "200+", label: "Presentations" },
    { number: "50+", label: "Conferences" },
    { number: "25", label: "Countries" },
    { number: "100K+", label: "Attendees" }
  ];

  const speakingEvents = [
    {
      conference: "TechConf 2023",
      location: "San Francisco",
      title: "The Future of Developer Experience",
      description: "Keynote presentation exploring emerging trends in developer tooling and community building.",
      attendees: "3,000 attendees",
      link: "Watch Recording",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Main stage presentation at major tech conference"
    },
    {
      conference: "DevSummit 2023",
      location: "Austin",
      title: "Building Inclusive Developer Communities",
      description: "Workshop on creating welcoming environments for developers from diverse backgrounds.",
      attendees: "150 attendees",
      link: "View Slides",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Professional presenting with slides at conference"
    },
    {
      conference: "APIWorld 2022",
      location: "London",
      title: "API-First Developer Relations",
      description: "Deep dive into building developer programs around API products and developer experience.",
      attendees: "2,500 attendees",
      link: "Read Summary",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Tech conference auditorium with large engaged audience"
    },
    {
      conference: "CloudNative 2022",
      location: "Seattle",
      title: "Scaling Developer Advocacy Teams",
      description: "Best practices for building and managing global developer advocacy organizations.",
      attendees: "1,800 attendees",
      link: "Download Resources",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Speaker presenting on stage with large display screen"
    }
  ];

  return (
    <section id="speaking" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Speaking Engagements</h2>
          <p className="text-xl text-gray-600">200+ presentations at conferences, meetups, and industry events worldwide</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {speakingStats.map((stat, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {speakingEvents.map((event, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-48 object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600">{event.conference}</span>
                  <span className="text-sm text-gray-500">{event.location}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{event.attendees}</span>
                  <a href="#" className="text-blue-600 hover:underline text-sm">{event.link}</a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
