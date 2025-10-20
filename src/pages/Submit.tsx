import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Submit = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Submission received!",
      description: "We'll review your website and get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-24">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Submit Your Website
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your design with our community of creatives
            </p>
          </div>

          <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="website-name">Website Name *</Label>
                <Input 
                  id="website-name" 
                  placeholder="My Awesome Website" 
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website-url">Website URL *</Label>
                <Input 
                  id="website-url" 
                  type="url"
                  placeholder="https://example.com" 
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Tell us about your website and what makes it special..."
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Input 
                  id="category" 
                  placeholder="e.g., Portfolio, E-commerce, SaaS" 
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your Email *</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="you@example.com" 
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="screenshot">Screenshot URL (optional)</Label>
                <Input 
                  id="screenshot" 
                  type="url"
                  placeholder="https://example.com/screenshot.jpg"
                  className="h-12"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit for Review
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                All submissions are manually reviewed. We'll contact you within 3-5 business days.
              </p>
            </form>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-6">
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Explore
              </Link>
              <Link to="/sponsor" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Sponsor
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                About
              </Link>
              <Link to="/submit" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Submit
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2025 WebInspire. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Submit;
