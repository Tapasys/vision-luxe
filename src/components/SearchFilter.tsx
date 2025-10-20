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
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input 
          placeholder="Search websites..." 
          className="h-12 pl-10 bg-card border-border text-foreground"
        />
      </div>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "secondary"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
