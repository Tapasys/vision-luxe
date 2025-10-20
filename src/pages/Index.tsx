import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchFilter from "@/components/SearchFilter";
import WebsiteCard from "@/components/WebsiteCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import preview1 from "@/assets/website-preview-1.jpg";
import preview2 from "@/assets/website-preview-2.jpg";
import preview3 from "@/assets/website-preview-3.jpg";
import preview4 from "@/assets/website-preview-4.jpg";
import preview5 from "@/assets/website-preview-5.jpg";
import preview6 from "@/assets/website-preview-6.jpg";

const websites = [
  {
    image: preview1,
    title: "Alps to the Sea",
    tags: ["Portfolio", "Photography"],
    badge: "Featured" as const,
    price: "$264k"
  },
  {
    image: preview2,
    title: "Modern E-commerce",
    tags: ["E-commerce", "Fashion"],
    badge: "Sponsored" as const,
    price: "$264k"
  },
  {
    image: preview3,
    title: "Analytics Dashboard",
    tags: ["SaaS", "Dashboard"],
    badge: "Sponsored" as const,
    price: "$264k"
  },
  {
    image: preview4,
    title: "Creative Agency",
    tags: ["Agency", "Portfolio"],
    price: "$264k"
  },
  {
    image: preview5,
    title: "Minimal Blog",
    tags: ["Blog", "Magazine"],
    badge: "Featured" as const,
    price: "$264k"
  },
  {
    image: preview6,
    title: "Tech Startup",
    tags: ["SaaS", "Landing"],
    badge: "Sponsored" as const,
    price: "$264k"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        <SearchFilter />
        
        <section className="container pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {websites.map((website, index) => (
              <WebsiteCard key={index} {...website} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-card hover:border-primary/50"
            >
              Load more websites
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-6">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Explore
              </Link>
              <Link 
                to="/sponsor" 
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sponsor
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link 
                to="/submit" 
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
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

export default Index;
