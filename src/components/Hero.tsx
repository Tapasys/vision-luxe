import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden py-40 md:py-52">
      {/* Premium HD Background */}
      <div className="absolute inset-0 -z-10">
        {/* Hero background image with parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100"
          style={{
            backgroundImage: `url(${heroBackground})`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background dark:from-background/90 dark:via-background/70 dark:to-background" />
        
        {/* Glass blur effect */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        
        {/* Animated gradient orbs for depth */}
        <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-primary/30 dark:bg-primary/20 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
        <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-accent/30 dark:bg-accent/20 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '10s', animationDelay: '2s' }} 
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Premium headline with gradient text */}
          <h1 className="mb-10 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight animate-fade-in leading-[1.1]">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground drop-shadow-2xl">
              Discover. Design.
            </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-pulse" style={{ animationDuration: '3s' }}>
              Inspire.
            </span>
          </h1>
          
          <p className="mb-14 text-xl md:text-2xl lg:text-3xl text-foreground/80 animate-fade-in leading-relaxed font-light max-w-3xl mx-auto" style={{ animationDelay: '0.15s' }}>
            Explore a curated showcase of the web's most stunning designs.
            <span className="block mt-3 text-lg md:text-xl text-muted-foreground">
              Join thousands of designers finding their next inspiration.
            </span>
          </p>
          
          <div className="mx-auto flex max-w-lg gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Input 
              type="email" 
              placeholder="your@email.com" 
              className="h-16 px-6 bg-background/60 backdrop-blur-xl border-2 border-border/50 text-foreground placeholder:text-muted-foreground shadow-2xl transition-all duration-300 focus:shadow-primary/20 focus:scale-[1.02] focus:border-primary/50 text-lg"
            />
            <Button 
              size="lg" 
              className="h-16 px-10 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 font-semibold whitespace-nowrap shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-lg"
            >
              Get Inspired
            </Button>
          </div>

          {/* Floating badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.45s' }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 backdrop-blur-sm border border-border/50 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>10K+ Websites</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 backdrop-blur-sm border border-border/50 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>50K+ Designers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 backdrop-blur-sm border border-border/50 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
              <span>Daily Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
