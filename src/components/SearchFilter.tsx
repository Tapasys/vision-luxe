import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Portfolio", "Blog", "SaaS"];

const SearchFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="container py-8 space-y-6">
      <div className="relative max-w-xl">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors" />
        <Input 
          placeholder="Search websites..." 
          className="h-14 pl-12 bg-card/50 backdrop-blur border-border text-foreground shadow-md transition-all duration-300 focus:shadow-lg focus:scale-[1.02] focus:border-primary/50"
        />
      </div>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "secondary"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className={`transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 scale-105"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
