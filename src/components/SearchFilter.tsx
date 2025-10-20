import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Portfolio", "Blog", "SaaS", "E-commerce", "Agency"];

const SearchFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="container py-12 space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:flex-1 max-w-2xl">
          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors z-10" />
          <Input 
            placeholder="Search websites by name, category, or style..." 
            className="h-16 pl-14 pr-5 bg-card/60 backdrop-blur-xl border-2 border-border/50 text-foreground shadow-2xl transition-all duration-300 focus:shadow-primary/20 focus:scale-[1.01] focus:border-primary/50 text-base rounded-xl"
          />
        </div>
        
        <Button
          variant="outline"
          size="lg"
          className="h-16 px-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
        >
          <SlidersHorizontal className="mr-2 h-5 w-5" />
          Filters
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category, index) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "secondary"}
            size="lg"
            onClick={() => setActiveCategory(category)}
            className={`transition-all duration-300 rounded-full px-6 animate-fade-in ${
              activeCategory === category
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/40 scale-105 border-2 border-primary/50"
                : "bg-card/60 backdrop-blur-sm text-foreground hover:bg-card/80 hover:scale-105 shadow-md border border-border/50"
            }`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
