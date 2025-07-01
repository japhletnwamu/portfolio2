import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rss } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      category: "Developer Relations",
      date: "Dec 15, 2023",
      title: "Building Developer Communities That Scale",
      description: "Exploring proven strategies for growing developer communities from hundreds to thousands of engaged members while maintaining quality and culture.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Developer working on code with documentation and notes"
    },
    {
      category: "Leadership",
      date: "Nov 28, 2023",
      title: "The Future of Developer Advocacy",
      description: "How the role of developer advocates is evolving with new technologies, changing developer expectations, and emerging community platforms.",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Modern collaborative office space with team working together"
    },
    {
      category: "Best Practices",
      date: "Nov 12, 2023",
      title: "Measuring Developer Experience Success",
      description: "A comprehensive guide to metrics and KPIs that actually matter when evaluating the success of your developer experience initiatives.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Interactive tech conference presentation with engaged audience"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600">Insights on developer advocacy, community building, and tech leadership</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden bg-white">
              <div className="relative">
                <img 
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-48 object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            <Rss className="mr-2 h-4 w-4" />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
