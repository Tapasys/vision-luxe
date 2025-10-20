import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchFilter from "@/components/SearchFilter";
import WebsiteCard from "@/components/WebsiteCard";
import About from "@/components/About";
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
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      <main>
        <Hero />
        
        <SearchFilter />
        
        <section id="showcase" className="container pb-24">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Featured Designs
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the latest and greatest in web design
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {websites.map((website, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <WebsiteCard {...website} />
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="h-14 px-8 border-2 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-xl text-base font-medium"
            >
              Load more websites
            </Button>
          </div>
        </section>

        <About />
      </main>
      
      <footer className="border-t border-border py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-6">
              <button 
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Explore
              </button>
              <Link 
                to="/sponsor" 
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sponsor
              </Link>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </button>
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
