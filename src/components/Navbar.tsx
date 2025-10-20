import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
          WebInspire
        </Link>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('showcase')}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore
          </button>
          <Link 
            to="/sponsor" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sponsor
          </Link>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Link to="/submit">
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
