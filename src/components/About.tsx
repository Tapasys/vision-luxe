import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { value: "10K+", label: "Websites" },
    { value: "50K+", label: "Designers" },
    { value: "100+", label: "Categories" },
    { value: "Daily", label: "Updates" }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About WebInspire
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            WebInspire is the premier destination for discovering exceptional web design. 
            We curate the most innovative, creative, and inspiring websites from around the globe, 
            providing designers and developers with endless inspiration for their next project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4">Curated Quality</h3>
            <p className="text-muted-foreground">
              Every website is handpicked by our team of design experts to ensure 
              only the best makes it to our showcase.
            </p>
          </Card>

          <Card className="p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4">Daily Inspiration</h3>
            <p className="text-muted-foreground">
              Fresh designs added every day to keep you inspired and up-to-date 
              with the latest web design trends.
            </p>
          </Card>

          <Card className="p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4">Community Driven</h3>
            <p className="text-muted-foreground">
              Join thousands of designers and developers who trust WebInspire 
              as their go-to resource for design inspiration.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
