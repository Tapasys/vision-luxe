import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
            Discover. Design. Inspire.
          </h1>
          
          <p className="mb-10 text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Explore a curated showcase of the web's most stunning designs.
          </p>
          
          <div className="mx-auto flex max-w-md gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Input 
              type="email" 
              placeholder="your@email.com" 
              className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button 
              size="lg" 
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-medium whitespace-nowrap"
            >
              Get Inspired
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
