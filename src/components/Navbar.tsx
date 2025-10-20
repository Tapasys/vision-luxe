import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          WebInspire
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore
          </Link>
          <Link 
            to="/sponsor" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sponsor
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          
          <Button 
            size="sm" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            Submit
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
