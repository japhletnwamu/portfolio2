import { Card, CardContent } from "@/components/ui/card";
import { Users, Mic, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over the past decade, I've dedicated my career to bridging the gap between technology and community, 
            helping developers succeed and companies build meaningful relationships with their developer ecosystems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="card-hover border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Building</h3>
              <p className="text-gray-600">
                Built and managed developer communities from 100 to 50,000+ members, 
                creating environments where innovation thrives and developers connect.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Mic className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Technical Advocacy</h3>
              <p className="text-gray-600">
                Delivered 200+ technical presentations at conferences worldwide, 
                translating complex technologies into accessible, actionable insights.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Developer Experience</h3>
              <p className="text-gray-600">
                Improved developer experience for multiple Fortune 500 companies, 
                resulting in increased adoption and developer satisfaction scores.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
