import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Alex transformed our developer community from a scattered group into a thriving ecosystem. Their strategic approach and genuine care for developers is unmatched.",
      author: "Sarah Johnson",
      title: "VP Engineering, TechCorp",
      initials: "SJ",
      color: "bg-blue-600"
    },
    {
      quote: "The developer program Alex built increased our API adoption by 400%. Their understanding of developer needs is remarkable.",
      author: "Michael Rodriguez",
      title: "CTO, StartupXYZ",
      initials: "MR",
      color: "bg-cyan-500"
    },
    {
      quote: "Alex's workshops and mentorship helped me transition from backend to full-stack development. Their support has been invaluable to my career growth.",
      author: "Emily Park",
      title: "Senior Developer, DevStudio",
      initials: "EP",
      color: "bg-slate-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Community Impact</h2>
          <p className="text-xl text-gray-600">What the community says about working together</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-semibold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
