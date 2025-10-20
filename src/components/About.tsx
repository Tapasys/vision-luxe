import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, Users } from "lucide-react";

const About = () => {
  const stats = [
    { value: "10K+", label: "Websites" },
    { value: "50K+", label: "Designers" },
    { value: "100+", label: "Categories" },
    { value: "Daily", label: "Updates" }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Curated Quality",
      description: "Every website is handpicked by our team of design experts to ensure only the best makes it to our showcase."
    },
    {
      icon: TrendingUp,
      title: "Daily Inspiration",
      description: "Fresh designs added every day to keep you inspired and up-to-date with the latest web design trends."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of designers and developers who trust WebInspire as their go-to resource for design inspiration."
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.1),transparent_50%)]" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            About WebInspire
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            WebInspire is the premier destination for discovering exceptional web design. 
            We curate the most innovative, creative, and inspiring websites from around the globe, 
            providing designers and developers with endless inspiration for their next project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 bg-card/60 backdrop-blur-sm border-2 hover:border-primary/50 group"
            >
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 bg-card/60 backdrop-blur-sm border-2 hover:border-primary/50 group"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
