import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), 
                            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '4s' }} 
        />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '6s', animationDelay: '1s' }} 
        />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-8 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
            Discover. Design. Inspire.
          </h1>
          
          <p className="mb-12 text-xl md:text-2xl text-muted-foreground animate-fade-in leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Explore a curated showcase of the web's most stunning designs.<br />
            <span className="text-base">Join thousands of designers finding their next inspiration.</span>
          </p>
          
          <div className="mx-auto flex max-w-md gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Input 
              type="email" 
              placeholder="your@email.com" 
              className="h-14 bg-card/50 backdrop-blur border-border text-foreground placeholder:text-muted-foreground shadow-lg transition-all duration-300 focus:shadow-xl focus:scale-[1.02]"
            />
            <Button 
              size="lg" 
              className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-medium whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
