import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Download, FileText, Image } from "lucide-react";
import { SiLinkedin, SiTwitter } from "react-icons/si";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      trackEvent("contact_form_submit", "engagement", "contact_page");
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const handleDownload = (type: string) => {
    trackEvent("download", "resource", type);
    // In a real implementation, these would be actual file downloads
    toast({
      title: "Download started",
      description: `${type} download will begin shortly.`,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600">Ready to collaborate on building amazing developer experiences?</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="consultation">Developer Relations Consultation</SelectItem>
                          <SelectItem value="speaking">Speaking Opportunity</SelectItem>
                          <SelectItem value="collaboration">Partnership/Collaboration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6}
                          placeholder="Tell me about your project or opportunity..." 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={contactMutation.isPending}
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="animate-slide-in-right">
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Other Ways to Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">alex@alexchen.dev</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <SiLinkedin className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-gray-600">@alexchendev</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                      <SiTwitter className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Twitter</div>
                      <div className="text-gray-600">@alexchendev</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4">Download Resources</h4>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleDownload("Resume/CV")}
                      className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 w-full text-left"
                    >
                      <div className="flex items-center">
                        <FileText className="text-red-500 mr-3 h-5 w-5" />
                        <span className="font-medium">Resume/CV</span>
                      </div>
                      <Download className="text-gray-400 h-4 w-4" />
                    </button>
                    
                    <button 
                      onClick={() => handleDownload("Speaker Kit")}
                      className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 w-full text-left"
                    >
                      <div className="flex items-center">
                        <FileText className="text-blue-500 mr-3 h-5 w-5" />
                        <span className="font-medium">Speaker Kit</span>
                      </div>
                      <Download className="text-gray-400 h-4 w-4" />
                    </button>
                    
                    <button 
                      onClick={() => handleDownload("Media Kit")}
                      className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 w-full text-left"
                    >
                      <div className="flex items-center">
                        <Image className="text-green-500 mr-3 h-5 w-5" />
                        <span className="font-medium">Media Kit</span>
                      </div>
                      <Download className="text-gray-400 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
